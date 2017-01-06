<template>
	<div class="m-circle">
		<div id="index-scroll">
	
	
			<div class="many">
				
				<div class="head">
				    <img src="/images/arrow.png" width="40" height="40"/>
				    <span>下拉刷新...</span>
			    </div>
				<section>
					<ul class="seList">
			            <li v-for="item in list">
			              <i><img :src="item.imgSrc" /></i>
			              <b>
			              	<router-link :to="'detail/'+item.id">
			              		{{item.title}}
			              	</router-link>
			              </b>
			            </li>
			          </ul>
				</section>
				<div class="foot">
			      	<img src="/images/arrow.png" width="40" height="40"/>
			      	<span>上拉加载更多...</span>
			    </div>
			</div>
			
		</div>
	</div>
</template>
<script>
	

var common = require('../utils/common.js');
	
	module.exports={
		data:function(){
			return{
				
				list:[]
			}
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
	}
</script>