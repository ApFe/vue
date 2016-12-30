// var name = 'xxx';
// module.exports = name;
//let name='yyyy';
//export default name;
var common={
	render:function(str){
		var body=document.body;
		body.innerHTML= str+body.innerHTML;
	}
}

module.exports=common;
