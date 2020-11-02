<template>
	<div id="app">
		<el-header>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1" class="mycolW bg-blue">
				<div class="headerBox">
					<el-col :span="11">
						<el-image :src="url"></el-image>
					</el-col>
					<el-col :span="12" class="a-font">
						<router-link to="#" class="a-hover-color">
							<el-col :span="6"><div class="grid-content ">首页</div></el-col>
						</router-link>
						<router-link to="#" class="a-hover-color">
							<el-col :span="6"><div class="grid-content ">下乡活动</div></el-col>
						</router-link>
						<router-link to="#" class="a-hover-color">
							<el-col :span="6"><div class="grid-content ">记忆照片</div></el-col>
						</router-link>
						<router-link to="#" class="a-hover-color">
							<el-col :span="6"><div class="grid-content ">站位文字</div></el-col>
						</router-link>
					</el-col>
				</div>
			</el-col>
		</el-header>
		<router-view></router-view>
		<el-footer>
			<p>Copyrihgt&copy;茂名职业技术学院</p>
		</el-footer>
	</div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        url: require('@/assets/logo.png'),
      }
    }
}
</script>
  
<style>
 body,h2,p{
	 margin: 0;
 }
 /* elementUI框架自带选择器 */
 @import url("//unpkg.com/element-ui@2.13.2/lib/theme-chalk/index.css");
.el-header{
	padding: 0px;
	height: 97px !important;
}
.el-col-8{
	min-height: 97px;
	padding: 5.22px 0;
}
.el-col-16{
	min-height: 97px;
}
.grid-content {
    border-radius: 4px;
    min-height: 97px;
}
.el-footer{
	height: 81px !important;
	background: #24272b;
    padding: 30px 0;
	color: #909399;
	text-align: center;
}

/* 自定义选择器 */
.mycolW{
	width: 100%;
	height: inherit;
	float: none;
}
.headerBox{
	width: 1170px;
	height: inherit;
	margin: 0 auto;
}

.a-font{
	color: #FFFFFF;
	text-align: center;
	line-height: 97px;
	font-weight: bold;
}
.a-hover-color:hover{
	color:#409EFF;
}
</style>
