var pinyin=require('pinyin');
var a=pinyin('张三',{
  style:pinyin.STYLE_NORMAL
});
console.log(a);

var express=require('express');
//<script src="node_modules/express/jquery/express"></script>
//与数据库链接
var mysql=require('mysql');
var app=express();
//就是想把那个文件公开化就写那个文件名
app.use(express.static(__dirname + '/public'));//这样pulic里的资源就可以访问到（这是静态资源）公开了pulic

var con=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'',
	database:'88888',
});
//app.get('/pulic/js/index.js',function(req,res){
// res.sendFile(__dirname+'/pulic/js/index.js');
//});

app.get('/getalluser',function(req,res){
 con.query('select * from kkk' ,function(err,result){
 	        if(err) throw err;
 	        res.json(result);
 })
});

app.get('/deleteUserById',function(req,res){
	con.query('delete from kkk where id=?',[req.query.x],
	function(err,result){
		if(err){
			res.json(false);
		}else{
			res.json(true);
		}
	})
});
app.get('/adduser',function(req,res){
	con.query('insert into kkk set phone =?',[13], 
	function(err,result){
		if(err) throw err;
			res.json(result.insertId);
	})
});
app.get('/updateusebyId',function(req,res){
	con.query('update kkk set name=?,phone=? where id=?',[req.query.name,req.query.phone,req.query.id],
	function(err,result){
		if(err){
			res.json(false);
		}else{
			res.json(true);
		}
	})
});
//假数据
/*app.get('/getalluser',function(req,res){
 res.json([
 	{id:2,name:'a',phone:'1234'},
 	{id:2,name:'a',phone:'1234'},
 	{id:2,name:'a',phone:'1234'}
 ])
})*/

app.get('/',function(req,res){//通过get来访问，文本放到req中  对象放到res中
//	res.send('hello world');
   res.sendFile(__dirname+'/index.html');
});




app.listen('3000',function(){
	console.log('服务器在3000端口开启成功');//服务器在3000端口开启成功
})
