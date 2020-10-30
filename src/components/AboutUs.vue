<template>
    <el-main>
        <div id="AU-content">
            <h1>关于我们</h1>
            <el-divider></el-divider>
            <h2>茂名职业技术学院青年志愿者协会简介：</h2>
            <p>
                茂名职业技术学院青年志愿者协会，成立于2006年1月6日，它是由学院团委领导，由志愿从事社会公益与社会保障事业的大学生青年组成的全校性群众团体。
                组织成立至今，一直本着“我服务，我快乐”的宗旨，致力于志愿服务活动，组织开展并参加了多项大型市级和校级活动。
                立足本校，为全校师生服务；面向社会，为弱势群体服务，大力弘扬志愿服务精神。无私地将爱心献给需要帮助的人，所到之处充满了阳光和温暖。
                组织在学校党政领导、校团委的指导下开展活动。在过去几年，组织成功举办了很多令人印象深刻的活动,积极参加了很多有意义的社会公益服务，得到了学校的充分肯定，也受到了社会各界的一致好评。
            </p>
            <p>
                组织公益服务活动：爱心义卖、无偿献血、爱心支教、植树活动，暑期“三下乡”等等。
                所有的活动都是整个青协一起参加的哦！
                志愿之路上砥砺前行的我们从来都不知疲倦，
                只希望周围的人能因我们的存在而感到幸福，这是一个充满着温暖的地方一群人相聚的理由简单纯粹用爱心筑起的路牵连着你我
                服务他人，锻炼自我
                结识挚友，丰富生活
                有爱，才有未来
            </p>
            <el-divider></el-divider>
            <h2>组织结构</h2>
            <div id="tab-page">
                <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                    <el-tab-pane label="秘书处" name="first">
                        <h3>秘书处</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        整个院青协的核心，统筹策划活动以及分配管理各部门的工作和任务，
                                        与外校各服务队做好联系工作，记录会议内容和登记志愿者服务时长，
                                        管理经费以及申请活动所需物品。注重培养同学们的组织协调、策划活
                                        动能力以及管理能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="编辑部" name="second">
                        <h3>编辑部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        对微博、学院官网，广东志愿者网站和微信公众号进行管理，
                                        收集活动重要信息，为活动撰写稿件讲活动内容发表至学院官
                                        网、微博、微信公众号对活动进行宣传。注重培养同学们的网
                                        洛技术以及电脑软件技术，提高同学们的语言组织能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="拓展部" name="third">
                        <h3>拓展部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        拓展部就是一座学院与社会沟通的桥梁，尽量争取更多的资金来支持院青协各部门的工作，
                                        同时让学生们走出校门，与校外各兄弟学校和商户进行沟通，整合资源吸纳资助协会各个部
                                        门，为各个项目队提供物资支持。注重培养同学们的交际能力、语言表达能力与实际能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="组织部" name="fourth">
                        <h3>组织部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        对各部门的活动文件物资归档整理，管理办公室和办公室的物品，管理协会的会章，
                                        为协会个活动布置会场以及为协会活动采购所需物品。注重培养同学们的市场调查能力，
                                        人际交往与沟通能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="支教部" name="fifth">
                        <h3>支教部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        负责组织，策划义务支教的活动内容，组织协会志愿者为较为落后的小学进行义务支教。
                                        在进行支教的过程中帮助贫困地区的孩子开拓视野，培养他们广泛的兴趣爱好。
                                        注重培养同学们的演讲能力，提高同学们的组织能力与胆量。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="宣传部" name="sixth">
                        <h3>宣传部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        负责青协的活动宣传，注重形式是海报和通知，进行日常手工绘画，出手工海报，
                                        通知的文字部分；日常活动的拍照；存储活动记录，为回顾展做准备。注重培养同学们的动手能力与组织能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="公关文娱部" name="seventh">
                        <h3>公关文娱部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        主要负责关于文化和艺术活动，培养主持人和礼仪小姐。要求具有文艺专长、
                                        勇于展现、认真负责等优点。注重培养同学们的语言组织能力以及现场应变能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                    <el-tab-pane label="会员信息部" name="eighth">
                        <h3>会员信息部</h3>
                        <el-row>
                            <el-col :span="12">
                                <div class="grid-content bg-purple">
                                    <p style="text-indent: 2em;font-size:20px;">
                                        主要负责青协会员信息如会员志愿服务活动的时间和内容等相关活动信息，
                                        协助秘书处组织会员进行交流活动等。注重培养同学们活动组织能力与重要信息整理能力。
                                    </p>
                                </div>
                            </el-col>
                            <el-col :span="12">
                                <div class="grid-content bg-purple-light">
                                    <el-image  :src="url" :fit="fits"></el-image>
                                </div>
                            </el-col>
                        </el-row>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </el-main>
</template>
<script>
export default {
    name:"AboutUs",
    data() {
      return {
        activeName: 'first',
        fits:'fill',
        url:require('@/assets/2.jpg'),
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style>
#AU-content{
    width: 45%;
    margin: 0 auto;
    background-color: #ffffff;
    height: 853px;
}
#AU-content>h1{
    text-align: center;
    margin: 0px;
}
#AU-content>p{
    text-indent: 2em;
    font-size: 20px;
}
.el-tab-pane>h3{
    text-align: center;
    margin: 0;
}
.el-tab-pane>.grid-content{
    border-right:1px solid black ;
}
  .el-col {
    border-radius: 4px;
  }
 
  .bg-purple-light {
    padding:0 133px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .grid-content>.el-image{
      width: 157px;
      height: 160px;
  }
</style>