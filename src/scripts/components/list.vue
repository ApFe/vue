<template>
	<div class="m-list">
		<header>
			<ul>
				<li>
					<router-link :to="'/'">
						<span class="yo-ico">&#xe622;</span><span>关闭</span>
					</router-link>
				</li>
				<li>{{$route.params.id}}</li>
				<li><i>分享</i></li>
			</ul>
		</header>
	</div>
</template>