<template>
	<div class="m-my">
		<ul>
				<li v-for="item in dataa">
					<router-link :to="item.id + '/' + item.other">
						<span><i class="y-ico">{{item.ico}}</i>{{item.content}}</span>
						<span>{{item.other}}<em class="y-ico">{{item.icoRight}}</em></span>
					</router-link>
				</li>
		</ul>	
	</div>
</template>

<script>
	module.exports = {
		data : function(){
			return{
				dataa:[
				{	
					id : 'my_login',
					router:'/my',
					ico : '',
					bgcolor : '#eee',
					content : '登陆',
					other : '立即登录',
					icoRight : ''
				},{
					id : 'my_commonts',
					router:'/my',
					ico : '',
					bgcolor : '#fe869f',
					content : '订单',
					other : '',
					icoRight : ''
				},{
					id : 'my_money',
					router:'/my',
					ico : '',
					bgcolor : '#fca901',
					content : '柚币购',
					other : '',
					icoRight : ''
				},{
					id : 'my_talk',
					router:'/my',
					ico : '',
					bgcolor : '#9bd656',
					content : '话题',
					other : '',
					icoRight : ''
				},{
					id : 'my_help',
					router:'/my',
					ico : '',
					bgcolor : '#5dc8fe',
					content : '帮助与反馈',
					other : '',
					icoRight : ''
				},{
					id : 'my_setting',
					router:'/my',
					ico : '',
					bgcolor : '#fe80c0',
					content : '设置',
					other : '淘宝账号',
					icoRight : ''
				}
			]}
		}
	}  	
</script>