app.directive('zdyTab',function(){
	return {
		restrict:'EA',
		replace:true,
		//template:'<p>我是替换后的内容</p>',
		templateUrl:'tpls/tab.html',
		transclude:true,
		scope:{
			zdyClass:"@",
			zdyId:"@",
			zdyData:'='
		},
		controller:function($scope){
			$scope.name = '123543'
		},
		link:function($scope,element,attr){
			console.log(element);
		    $(element).on('click','a',function(){
		    	$(this).addClass("active").siblings("a").removeClass("active");
		    	$('.list',element).eq($(this).index()).show().siblings(".list").hide()
		    })
		}
	}
});