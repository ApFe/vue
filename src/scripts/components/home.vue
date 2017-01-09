<template id="">
	<div class="container">
		
	
		<div id="index-scroll">
			
		
			<div class="many">
			
			
			
				<!--滚动条设置-->
				<div class="head">
				    <img src="/images/arrow.png" width="40" height="40"/>
				    <span>下拉刷新...</span>
			    </div>
				
				<!--滚动条设置-->
				
				
			
				<div class="swiper-container">
					
					  <div class="swiper-wrapper">
					    <div class="swiper-slide" v-for="item in banner"><img style="width: 100%;height: 1.28rem;" :src="item.bannerImg" /></div>
					    <!--<div class="swiper-slide">sss1</div>
					    <div class="swiper-slide">sss2</div>
					    <div class="swiper-slide">sss3</div>-->
					  </div>
					
				</div>
				
				<nav>
				<ul>
					<li >
					
							<i class="yo-ico">&#xe633;</i>
						
						<b>品牌团</b>
					</li>
					<li>
							<i class="yo-ico">&#xe609;</i>
						
						<b>男士</b>
					</li>
					<li>
						
							<i class="yo-ico">&#xe63b;</i>
						
						<b>母婴</b>
					</li>
					<li>
						
							<i class="yo-ico">&#xe7f6;</i>
						
						<b>进口</b>
					</li>
					<li>
						
							<i class="yo-ico">&#xe64f;</i>
						
						<b>新品</b>
					</li>
				</ul>
			</nav>
			<!--<div class="m-index" id="m-index">-->
				<section>
					<ul class="se-top">
						<li><i class="yo-ico">&#xe610;</i>&nbsp;10点上新</li>
						<li><i class="yo-ico">&#xe699;</i>&nbsp;正品省钱</li>
						<li><i class="yo-ico">&#xe605;</i>&nbsp;全场包邮</li>
					</ul>
					<ul class="seList">
			            <li v-for="item in list">
			              	<router-link :to="'detail/'+item.id">
				              <i><img :src="item.imgSrc" /></i>
				              <b>
				              		{{item.title}}
				              </b>
			              	</router-link>
			            </li>
			          </ul>
				</section>
				
				
				<!--下拉刷新上拉加载-->
				<div class="foot">
			      	<img src="/images/arrow.png" width="40" height="40"/>
			      	<span>上拉加载更多...</span>
			    </div>
				<!--下拉刷新上拉加载-->
				
			
			</div>
		
		</div>
		
	</div>
</template>	

<script>
	var common = require('../utils/common.js');
	
	module.exports={
		data:function(){
			return{
				banner:[
				{"bannerImg":"/images/banner01.gif"},
				{"bannerImg":"/images/banner02.gif"},
				{"bannerImg":"/images/banner03.gif"}
				],
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