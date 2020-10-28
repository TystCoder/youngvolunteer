<template>
	<div id="app">
		<el-header style="height:40px;">
			<el-row>
				<el-col :span="6">
					<router-link to="/index">
						<div class="grid-content">首页</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="/aboutus">
						<div class="grid-content">关于我们</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="#">
						<div class="grid-content">志愿者项目</div>
					</router-link>
				</el-col>
				<el-col :span="6">
					<router-link to="#">
						<div class="grid-content">志愿者</div>
					</router-link>
				</el-col>
			</el-row>
		</el-header>
		<router-view></router-view>
		<div class="footer">
			<p>Copyright &copy; 2018.茂名职业技术学院 All rights reserved.</p>
		</div>
	</div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        fits: 'scale-down',
        url:require('@/assets/logo.png'),
      }
    }
}
</script>

<style>
 body,h2,p{
	 margin: 0;
 }
 @import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
.el-header{
	width: 100%;
	margin: 0 auto;
	padding: 0px;
	background-color:  #F56C6C;
}
.el-header>.el-row{
	text-align: center;
	line-height: 40px;
}

.el-row a{
	color: #ffffff;
	text-decoration: none;
}


.el-main{
padding: 0px;
}
.footer{
	padding: 0px;
	background-color: #3b485b;
	color: #FFFFFF;
	text-align: center;
	line-height: 60px;
}
</style>
