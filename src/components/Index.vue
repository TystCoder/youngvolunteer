<template>
	<el-main id="index-content">
        <div id="carousel">
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item v-for="(item,index) in imgList" :key="index">
                    <img  :src="item.url" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div id="activity">
            <el-row :gutter="20" class="remove-mn">
                <el-col :span="8" class="remove-pd">
                    <div class="grid-content">
                        <el-col :span="24" class="remove-pd">
                            <div class="grid-content tit-font-size">图片新闻</div>
                            <el-divider class="change-el-D-H"></el-divider>
                            <div class="grid-content">
                                <el-carousel :interval="5000" arrow="always">
                                    <el-carousel-item v-for="(item,index) in imgList" :key="index">
                                        <img  :src="item.url" alt="">
                                    </el-carousel-item>
                                </el-carousel>
                            </div>
                        </el-col>
                    </div>
                </el-col>
                <el-col :span="12" class="change-width change-font">
                    <div class="grid-content tit-font-size" >
                        协会新闻
                    </div>
                    <el-divider class="change-el-D-H"></el-divider>
                    <div v-for="(TL,i) in titlelist" :key="i" class="text item">
                           {{TL.titleName }}
                    </div>
                </el-col>
            </el-row>
        </div>
        <div id="other-activity">
            <el-row :gutter="20" class="remove-mn">
                <el-col :span="12" class="remove-pd">
                    <div class="grid-content tit-font-size">
                        爱心义卖
                    </div>
                    <el-divider class="change-el-D-H"></el-divider>
                    <div v-for="(TL,i) in titlelist" :key="i" class="text item">
                           {{TL.titleName }}
                    </div>
                </el-col>
                <el-col :span="12" class="remove-pd">
                    <div class="grid-content  tit-font-size">
                        爱心支教
                    </div>
                    <el-divider class="change-el-D-H"></el-divider>
                    <div v-for="(TL,i) in titlelist" :key="i" class="text item">
                           {{TL.titleName }}
                    </div>
                </el-col>
            </el-row>
        </div>
   </el-main>
</template>

<script>
	export default{
        name:"Index",
        data(){
            return{
                // 图片地址
                imgList:[
                    {
                        url:require("../assets/imgs/1.jpg")
                    },
                    {
                        url:require("../assets/imgs/2.jpg")
                    },
                    {
                        url:require("../assets/imgs/3.jpg")
                    },
                    {
                        url:require("../assets/imgs/4.jpg")
                    },
                ],
                titlelist:[
                    {
                        titleName:'【情牵养老院，爱心志愿行】计算机工程系青年志愿者前往家福养老院开展志愿服务活动'
                    },
                    {
                        titleName:'【志愿行】乘支教之风，筑安全意识————计算机工程系青年志愿者前往金凤小学开展安全知识小课堂活动'
                    },
                    {
                        titleName:'爱不闲置——计算机工程系爱心义卖扶贫助学活动圆满结束'
                    },
                    {
                        titleName:'青年志愿者协会计算机工程系分会19年下半年大例会'
                    },
                    {
                        titleName:'百余名学生集体向祖国表白——计算机工程系举行“我和我的祖国”70周年主题活动'
                    },
                    {
                        titleName:'暑假三下乡：有缘我们江湖见'
                    },
                    {
                        titleName:'“三下乡”文明之墙绘制圆满结束，文明之旅永不停止'
                    }
                ],
            }
        }
    }
</script>
<style>
/* 自己命名的选择器 */
#index-content>#carousel{
    width: 1200px;
    height: 306px;
    margin: 0 auto;
}
#index-content>#activity{
    width: 1200px;
    margin: 0 auto;
}
#index-content>#other-activity{
    width: 1200px;
    margin: 0 auto;
}
.tit-font-size{
    font-size: 23px;
}

/* elementUI框架自带的选择器 */
.el-carousel .el-carousel--horizontal{
    width: 100%;
    height: 100%;
}
.el-carousel__item>img{
    width: 100%;
    height: inherit;
    margin: 0 auto;
}
.item {
    margin-bottom: 18px;
}
.el-col {
    border-radius: 4px;
  }


/* 去除elementUI框架自带的部分属性 */
.remove-mn{
    margin: 0px !important;
}
.remove-pd{
    padding-left: 0px !important;
}
.change-width{
    width: 780px;
}
.change-font{
    font-size: 18px;
}
</style>