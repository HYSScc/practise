$(function() {
	$.get('/getalluser').done(function(data) {
		$.each(data,function(i,v){
		 	$('<tr data-id="'+v.id+'"><td><div class="btn">'+v.id+'</div></td><td><input type="text" class="form-control name" value="'+v.name+'"></td><td><input type="text" class="form-control phone" value="'+v.phone+'"></td><td><div class="btn btn-danger delete">x</div></td></tr>')
			.prependTo('tbody');
		})
	})
	$('tbody').on('click','.delete',function(){
		var id = $(this).closest('tr').attr('data-id');
		var that = this;
		$.get('/deleteuserbyid',{x:id})
		.done(function(data){
			if(data){
				$(that).closest('tr').remove();	
			}
		});
	})
$('tbody .plus').on('click',function(){
		$.get('/adduser').done(function(id){
			$('<tr data-id="'+id+'"><td><div class="btn">'+id+'</div></td><td><input type="text" class="form-control name" value=""></td><td><input type="text" class="form-control phone" value="13"></td><td><div class="btn btn-danger delete">x</div></td></tr>')	
			.prependTo('tbody').find('input').eq(1).val(13).focus();
		})
	})
	$('tbody').on('keyup','.phone,.name',function(){
		var tr = $(this).closest('tr');
		var id = tr.attr('data-id');
		var name = tr.find('.name').val().trim();
		var phone = tr.find('.phone').val().trim();
		$.get('/updateusebyId',{id:id,name:name,phone:phone});
	})
});