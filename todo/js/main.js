  //  ng-app
  //  ng-controller
  //  ng-model
  //  ng-repeat    =>$index
  //  {{}}   =  ng-binding   ng-事件="函数()"
  //
  //  angular
  //  angular.module('ng-app的字符串',[])
  //  angular.controller('ng-controller的字符串'，['$scope',function($scope){
  //        $scope.xxxx=...;
  //   }])
//    ng-class="{a:0,b:1}" 最终会有class=b 的类


// var todo=angular.module('todo',[]);
//     todo.controller(
//       'mainCtrl',
//       ['$scope',function($scope){
//           $scope.aa='welcome to todo';
//           $scope.name='';
//           if (localStorage.database) {
//             $scope.todos=JSON.parse(localStorage.database)
//           }else{
//             $scope.todos=[];
//           }
//           $scope.save=function(){
//             localStorage.database=JSON.stringify(
//               $scope.todos)
//           }
//           $scope.add=function(e){
//              if (e.keyCode===13) {
//               $scope.todos.push({name:$scope.name,isDone:0)})
//               $scope.name='';
//              }
//           }
//           $scope.delete=function(index){
//             $scope.todos.splice(index,1)
//           }
//       }]
//     );

  var todo=angular.module('todo',['ngAnimate']);
      todo.controller(
          'mainCtrl',
          [ '$scope','$timeout',
          function($scope,$timeout){
              $scope.title="todos";
              // $scope.todos=$scope.todos.length;
              setInterval(function(){
                  $timeout(function(){
                       var date=new Date();
                       var h=date.getHours();
                       var m=date.getMinutes();
                       var s=date.getSeconds();
                         m=(m<10)?'0'+m:m;
                         s=(s>=10)?s:'0'+s;
                       $scope.title=h+':'+m+':'+s;
                    },0)
              },500)
              if (localStorage.database) {
                  $scope.todos=JSON.parse(localStorage.database);
              }else{
                  $scope.todos=[ ];
              }
              // $scope.todos=[
              //   {id:1,name:'买菜',isDone:false},
              //   {id:2,name:'买船',isDone:false},
              //   {id:3,name:'买飞机',isDone:false}
              // ]

              $scope.delete=function(id){
                  var index;
                  console.log(id)
                  for (var i = 0; i < $scope.todos.length; i++) {
                      if ($scope.todos[i].id==id) {
                        index=i
                      }
                  }
                  $scope.todos.splice(index,1);
              }
              $scope.focus=function(e){
                $timeout(function(){
                  $(e.currenTarget)
                  .find('input')
                  .trigger('focus')
                },0)               
              }              
              $scope.add=function(e){
                if (e.keyCode===13) {
                  var id;
                   if ($scope.name.length===0) {
                       return
                     }
                   if ($scope.todos.length===0) {
                       id=1000;
                   }else{
                     for (var i = 0; i < $scope.todos.length; i++) {
                       var max=-Infinity ;
                         if($scope.todos[i].id>max){
                          max=$scope.todos[i].id;
                         }
                         id=max+1;
                      }                      
                   }
                var item={id:id,name:$scope.name,isDone:false};
                    $scope.todos.push(item);
                    $scope.name='';
                     console.table($scope.todos)         
                }  

              }
              $scope.save=function(){
                  localStorage.database=JSON.stringify($scope.todos)
              }
              // $scope.clear=function(){
              //   var arr=[];
              //   for (var i = 0; i < $scope.todos.length; i++) {
              //      $scope.todos[i]
              //   };
              // }


          }]
        )
