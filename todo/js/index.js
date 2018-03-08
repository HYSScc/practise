$(function(){
  var create=$('.shuru input');
  var shuru=$('.shuru');
  var container=$('.todo-list .list-container');
  create.on('keydown',function(e){
    if (e.keyCode===13) {
    var value=create.val().trim();
      if (value.length==0) {
         return
      }
        create.val(' ');
        // create.attr('placeholder','What you need to do?');
    var newli=  $('<li class="list "><div class="wancheng">✅</div><p>'+value+'</p><input type="text"  name="name" value="wenzi"><span class="delete">⨂</span> </li>')
    var newp=$('newli p');
       newp.html(value);
       shuru.after(newli);
       console.log(value)
    }
  })


})
