
// // 使用两个参数
// str = str.slice(2,4);//截取第二个到第四个之间的字符 cd
// str = str.substring(2,4);//截取第二个到第四个之间的字符 cd
// str = str.substr(2,4);//截取从第3个开始往后数4位之间的字符 cdef
var app=new Vue({
	el:"#app",
	data:{
		add:["吃饭饭","睡大觉","打篮球"
		],
		msg:"",
		name:"",
		
	},
	methods:{
		f1:function(){
			this.add.push(this.msg);
		},
		f2:function(index){
			this.add.splice(index,1);
		},
		f3:function(){
			this.add=[];
		},
		f4:function(index){
			this.add.splice(index,0);
			var name=prompt("请输入要修改的事件：","");
			if(name!=0&&name!="")
			{
			 var a=name;
			 this.add[index]=a;
			 }
		},
		
		
	},
	
});
    
