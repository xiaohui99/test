<template>
    <section class="modal">
      <aside class="mod-bg mod-hide"></aside>
      <article class="mod-area">
        <span class="mod-close mod-hide" @click="$emit('close')"></span>
        <div class="tips-con">
          <div :class="modClass"></div>
          <p class="m-p01" v-html="tipsText"></p>
          <div class="modBtn"><a href="javascript:;" class="mod-hide" @click="$emit('close')">我知道啦！</a></div>
        </div>
      </article>
    </section>
</template>

<script>
export default {
  props: ['tipsText', 'modClass']
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
.mod-img1{width:102px;height:103px;margin:0 auto;padding:30px 0;padding-left:15px; background:url('../assets/img/mod_1.png') no-repeat center; background-size:100% auto;}
.mod-img2{width:105px;height:92px;margin:0 auto;padding:30px 0; background:url('../assets/img/mod_2.png') no-repeat center; background-size:100% auto;}
.mod-img3{width:105px;height:92px;margin:0 auto;padding:30px 0; background:url('../assets/img/mod_3.png') no-repeat center; background-size:100% auto;}
.mod-img4{width:81px;height:83px;margin:0 auto;padding:30px 0; background:url('../assets/img/mod_4.png') no-repeat center; background-size:100% auto;}
.m-p01{min-height: 127.5px;}
.modBtn{width:334px;margin:0 auto; padding-top:30px; text-align:center;}
.modBtn a{display:block;line-height:68px;background:#c0022d; color:#fff;text-align:center;font-size:30px;border-radius:50px;}

.modBtn2{width:542px;margin:0 auto; padding-top:50px; text-align:center;}
.modBtn2 a{display:inline-block; width:260px;line-height:94px;background-image:linear-gradient(to bottom,#fff,#fedddc,#fedddc); text-align:center;color:#858585;font-size:41px; border-bottom: 3px #ff6c02 solid; border-radius: 50px;}
.modBtn2 a.cur{background-image:linear-gradient(to bottom,#feaf05,#ffd034); color:#a13333;}
.modBtn2 a.btn-lg{width:440px;}
</style>
