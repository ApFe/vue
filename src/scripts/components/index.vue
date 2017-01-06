<template id="">
	<div class="m-index" id="m-index">
		<header>
			<ul>
				<li><i class="navName">柚子街</i></li>
				<li>
					<span>签到</span>
					<span class="yo-ico">&#xe615;</span>
				</li>
			</ul>
		</header>
		<router-view></router-view>
		<footer>
			 <ul>
		        <li @click="changeNav(i)" :class="{active: i==navIndex}" v-for="(fn,i) in footerNav">
		          <router-link :to="fn.router">
		            <i class="yo-ico" v-html="fn.ico"></i>
		            <b>{{fn.title}}</b>
		          </router-link>
		        </li>
		      </ul>
		</footer>
	</div>
</template>

<script>
	module.exports={
		data:function(){
			return{
				navIndex:0,
				
				footerNav:[
					{
						router:'/',
						ico:'&#xe62e;',
						title:'柚子街'
					},{
						router:'/search',
						ico:'&#x343d;',
						title:'品牌团'
					},{
						router:'/circle',
						ico:'&#xe674;',
						title:'她她圈'
					},{
						router:'/Cart',
						ico:'&#xe63f;',
						title:'购物车'
					},{
						router:'/my',
						ico:'&#xe62f;',
						title:'我'
					}
				]
			}
			
		},
		methods: {
		    changeNav: function (index) {
		    	this.navIndex = index;
		    	console.log(this.navIndex)
		   // 获取当前页面的footer的名称，添加到标题上	
		    	var navName=document.getElementsByClassName("navName")[0];
		    	navName.innerHTML=this.footerNav[this.navIndex].title;
//		    	var header=document.getElementsByTagName("header")[0];
//		    	var that=this;
//		    	if(that.navIndex==2){
//		   			str='<ul><li class="yo-ico">&#xe75e;</li><li><nav><ol><li @click="changeTab(index)" :class="{active:index==navIndex}"><p>我的圈</p></li><li @click="changeTab(index)" :class="{active:index==navIndex}"><p>更多圈</p></li></ol></nav></li><li class="yo-ico">&#xe602;</li></ul>';
//		   			console.log(this.nav.item);
//		   			header.innerHTML=str;
//		    	}else{
//		    		header.innerHTML='<ul><li><i class="navName">'+that.footerNav[this.navIndex].title+'</i></li><li><span>签到</span><span class="yo-ico">&#xe615;</span></li></ul>'
//		    	}
		    }
	   }
	}

</script>