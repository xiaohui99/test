<template>
  <section class="modal">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide" @click="$emit('close')"></span>
      <div class="tips-con">
        <div class="mod-img1"><img src="../assets/img/mod_1.png"></div>
        <p class="m-p01">恭喜您抢到秒杀产品啦！<br/>欧皇非你莫属！</p>
        <div class="modBtn"><a href="javascript:;" class="mod-hide" @click="$emit('close')">我知道啦！</a></div>
      </div>
    </article>
  </section>
  <!--活动记录-->
  <!-- <section class="modal" v-if="modRecord">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide"></span>
      <div class="mod-tt">活动记录</div>
      <div class="mod-con">
        <ul class="mlist">
          <li><span class="avator" style="background-image:url('images/avator.png')"></span><span class="user">13488888888</span><span class="txt">中国石化50元加油卡</span></li>
          <li><span class="avator" style="background-image:url('images/avator.png')"></span><span class="user">xxxxxxx</span><span class="txt">xxxxxxxxxx</span></li>
          <li><span class="avator" style="background-image:url('./assets/img/avator.png')"></span><span class="user">xxxxxxx</span><span class="txt">xxxxxxxxxx</span></li>
          <li><span class="avator" style="background-image:url('./assets/img/avator.png')"></span><span class="user">xxxxxxx</span><span class="txt">xxxxxxxxxx</span></li>
          <li><span class="avator" style="background-image:url('./assets/img/avator.png')"></span><span class="user">xxxxxxx</span><span class="txt">xxxxxxxxxx</span></li>
        </ul>
      </div>
    </article>
  </section> -->
  <!--秒杀成功-->
  <!--秒杀未开始-->
  <!-- <section class="modal" v-if="modTips2">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide"></span>
      <div class="tips-con">
        <div class="mod-img4"><img src="../assets/img/mod_4.png"></div>
        <p class="m-p01">秒杀还未开始哦！<br/>请耐心等待～</p>
        <div class="modBtn"><a href="javascript:;" class="mod-hide">我知道啦！</a></div>
      </div>
    </article>
  </section> -->
  <!--兑完了-->
  <!-- <section class="modal" v-if="modTips3">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide"></span>
      <div class="tips-con">
        <div class="mod-img4"><img src="../assets/img/mod_4.png"></div>
        <p class="m-p01">产品已兑完！<br/>精彩活动尽在上海联通<br/>请持续关注哦～</p>
        <div class="modBtn"><a href="javascript:;" class="mod-hide">我知道啦！</a></div>
      </div>
    </article>
  </section> -->
  <!--兑换成功-->
  <!-- <section class="modal" v-if="modTips4">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide"></span>
      <div class="tips-con">
        <div class="mod-img3"><img src="../assets/img/mod_3.png"></div>
        <p class="m-p01">兑换成功<br/>快去看看的奖品吧！</p>
        <div class="modBtn"><a href="javascript:;" class="mod-hide">我知道啦！</a></div>
      </div>
    </article>
  </section> -->
  <!--兑换失败-->
  <!-- <section class="modal" v-if="modTips5">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide"></span>
      <div class="tips-con">
        <div class="mod-img2"><img src="../assets/img/mod_2.png"></div>
        <p class="m-p01">兑换失败<br/>您的橙豆不够哦！</p>
        <div class="modBtn"><a href="javascript:;" class="mod-hide">去赚橙豆</a></div>
      </div>
    </article>
  </section> -->
</template>

<script>
export default {
  data () {
    return {
      modal: true
    }
  },
  props: ['isShow'],
  mounted () {
    // console.log(modTips1)
  }
}
</script>

<style scoped>
/**弹框**/
.modal{ width:100%; height:100%; position:fixed; left:0; top:0; z-index:99;text-align:left;}
.mod-bg{ width:100%; height:100%; position:absolute; background-color:rgba(0,0,0,0.8);left: 0; top: 0;}
.mod-close{position:absolute; right:20px; top:20px; width:32px; height:32px; z-index:4; background:url('../assets/img/mod_close.png') no-repeat center center; background-size:100% auto;}
.mod-area{width: 445px;top:50%;position: relative;margin:0 auto; -webkit-transform: translateY(-50%);background:#fff; color:#333;border-radius:18px;}
.mod-con{ overflow-y:auto;}
.mod-tt{height:89px;background:url('../assets/img/mod_tt.png') no-repeat center;background-size:100% 100%;box-sizing:border-box;color:#ffffff;font-size:30px;text-align:center;font-weight:bold;line-height:72px;}

.tips-con{padding:45px 20px;font-size:30px;text-align:center;}
.mod-img1{width:102px;margin:0 auto;padding:30px 0;padding-left:15px;}
.mod-img2{width:105px;margin:0 auto;padding:30px 0;}
.mod-img3{width:105px;margin:0 auto;padding:30px 0;}
.mod-img4{width:81px;margin:0 auto;padding:30px 0;}
.m-p01{min-height: 127.5px;}
.modBtn{width:334px;margin:0 auto; padding-top:30px; text-align:center;}
.modBtn a{display:block;line-height:68px;background:#c0022d; color:#fff;text-align:center;font-size:30px;border-radius:50px;}

.modBtn2{width:542px;margin:0 auto; padding-top:50px; text-align:center;}
.modBtn2 a{display:inline-block; width:260px;line-height:94px;background-image:linear-gradient(to bottom,#fff,#fedddc,#fedddc); text-align:center;color:#858585;font-size:41px; border-bottom: 3px #ff6c02 solid; border-radius: 50px;}
.modBtn2 a.cur{background-image:linear-gradient(to bottom,#feaf05,#ffd034); color:#a13333;}
.modBtn2 a.btn-lg{width:440px;}
</style>
