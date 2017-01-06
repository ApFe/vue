var common = require('../utils/common.js');

new Vue({
	el:"#m-index",
	data:{
		banner:[
				{"bannerImg":"/images/banner01.gif"},
				{"bannerImg":"/images/banner02.gif"},
				{"bannerImg":"/images/banner03.gif"}
				],
		list:[]
	},
	mounted: function () {
    	fetch('/api/list').then(response => response.json())
    	.then(res=>{
    		var that=this;
    	
    		this.list=res;
		
    		common.isAllLoaded('#index-scroll .many',function(){
				common.scroll(that);
	    	});
	    	
	    	     
    		
    	})
    	.catch(e=>console.log("Oops,error",e))
   }
})
