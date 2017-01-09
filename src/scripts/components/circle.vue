<template>
	<div class="m-circle">
		<div id="index-scroll">
	
	
			<div class="many">
				
				<div class="head">
				    <img src="/images/arrow.png" width="40" height="40"/>
				    <span>下拉刷新...</span>
			    </div>
			    <div class="more">
			    	<p>我的她她圈</p>
			    	<div class="manyMore">
			    		加入更多圈子
			    	</div>
			    </div>
				<section>
					<p>她她圈精选</p>
					<ul class="seList">
			            <li v-for="item in list">
		            		<router-link :to="'list/'+item.id">
				            	<span>{{item.id}}</span>
				            	<span>
					              <i v-for="itemone in item.imgSrc"><img :src="itemone" /></i>
					            </span>
					            <span>
					            	<i>{{item.title}}</i>
					            	<i>浏览：{{item.browse}}</i>	
					            </span>
		            		</router-link>
			              <!--<b>
			              	<router-link :to="'detail/'+item.id">
			              		{{item.title}}
			              	</router-link>
			              </b>-->
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
	    	fetch('/api/Ccl').then(response => response.json())
	    	.then(res=>{
	    		var that=this;
	    	
	    		this.list=res;
			
	    		common.isAllLoaded('#index-scroll .many',function(){
					var mySwiper = new Swiper('.swiper-container', {
						effect : 'coverflow',
						autoplay: 3000,//可选选项，自动滑动
						loop:true
					});
				//++++++++++++++++++++
			        var myScroll = new IScroll('#index-scroll', {
			            probeType: 3,
			            mouseWheel: true
			        });
		
			        var scrollHeight = 35;
					
					
			        myScroll.scrollBy(0, -scrollHeight);
			
			        var head = $('.head img'),
			            topImgHasClass = head.hasClass('up');
			        var foot = $('.foot img'),
			            bottomImgHasClass = head.hasClass('down');
		       		myScroll.on('scroll', function () {
			            var y = this.y,
			                maxY = this.maxScrollY - y;
			            if (y >= 0) {
			                !topImgHasClass && head.addClass('up');
			                return '';
			            }
			            if (maxY >= 0) {
			                !bottomImgHasClass && foot.addClass('down');
			                return '';
			            }
		        	});
		
		        	myScroll.on('scrollEnd', function () {	
			            if (this.y >= -scrollHeight && this.y < 0) {
			                myScroll.scrollTo(0, -scrollHeight);
			                head.removeClass('up');
			            } else if (this.y >= 0) {
			                head.attr('src', '/images/ajax-loader.gif');
			                // TODO ajax下拉刷新数据
			
							fetch('/api/Ccl').then(response => response.json()).then(res=>{
								that.list = that.list.concat(res);
			                
			                    myScroll.scrollTo(0, -scrollHeight);
			                    head.removeClass('up');
			                    head.attr('src', '/images/arrow.png');
		                	});
		            	}
		
			            var maxY = this.maxScrollY - this.y;
			            if (maxY > -scrollHeight && maxY < 0) {
			                var self = this;
			                myScroll.scrollTo(0, self.maxScrollY + scrollHeight);
			                foot.removeClass('down')
			            } else if (maxY >= 0) {
			                foot.attr('src', '/images/ajax-loader.gif');
			                // TODO ajax上拉加载数据
			                var self = this;
		                
		                
			                fetch('/api/Ccl').then(response => response.json()).then(res=>{
			//为什么res返回之后请求不到？？？？？？？------原因concat在数组后面追加之前数组里面多加了数组，导致追加后只是再追加新数组而不是合并，导致遍历不到
				                that.list = that.list.concat(res);
									
				                myScroll.refresh();
				                myScroll.scrollTo(0, self.y + scrollHeight);
				                //myScroll.scrollTo(0, self.maxScollY);
				                foot.removeClass('down');
				                foot.attr('src', '/images/arrow.png');
		                
		                 
		                	})
		            	}
		        	})
		    	});
		    	
		    	     
	    		
	    	})
	    	.catch(e=>console.log("Oops,error",e))

   		}
	}
</script>