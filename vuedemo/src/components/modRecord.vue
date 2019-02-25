<template>
  <section class="modal">
    <aside class="mod-bg mod-hide"></aside>
    <article class="mod-area">
      <span class="mod-close mod-hide" @click="$emit('close')"></span>
      <div class="mod-tt">活动记录</div>
      <div class="mod-con">
        <ul class="mlist">
          <li v-for="item in recordlist" :key="item.key"><span class="avator" :style="{'background-image':'url('+item.avatorImg+')'}"></span><span class="user"> {{item.username}} </span><span class="txt">{{item.text}}</span></li>
        </ul>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    recordlist: {
      type: Array,
      require: true
    }
  }
}
</script>

<style scoped>
/**弹框**/
.modal{ width:100%; height:100%; position:fixed; left:0; top:0; z-index:99;text-align:left;}
.mod-bg{ width:100%; height:100%; position:absolute; background-color:rgba(0,0,0,0.8);left: 0; top: 0;}
.mod-close{position:absolute; right:20px; top:20px; width:32px; height:32px; z-index:4; background:url('../assets/img/mod_close.png') no-repeat center center; background-size:100% auto;}
.mod-area{width: 544px;top:50%;position: relative;margin:0 auto; -webkit-transform: translateY(-50%);background:#fff; color:#333;border-radius:18px;}
.mod-con{ overflow-y:auto;}
.mod-tt{height:89px;background:url('../assets/img/mod_tt.png') no-repeat center;background-size:100% 100%;box-sizing:border-box;color:#ffffff;font-size:30px;text-align:center;font-weight:bold;line-height:72px;}

.tips-con{padding:45px 20px;font-size:30px;text-align:center;}
.m-p01{min-height: 127.5px;}
.modBtn{width:334px;margin:0 auto; padding-top:30px; text-align:center;}
.modBtn a{display:block;line-height:68px;background:#c0022d; color:#fff;text-align:center;font-size:30px;border-radius:50px;}

.modBtn2{width:542px;margin:0 auto; padding-top:50px; text-align:center;}
.modBtn2 a{display:inline-block; width:260px;line-height:94px;background-image:linear-gradient(to bottom,#fff,#fedddc,#fedddc); text-align:center;color:#858585;font-size:41px; border-bottom: 3px #ff6c02 solid; border-radius: 50px;}
.modBtn2 a.cur{background-image:linear-gradient(to bottom,#feaf05,#ffd034); color:#a13333;}
.modBtn2 a.btn-lg{width:440px;}
.mlist{padding:10px 18px;}
.mlist li{position:relative;padding:18px 0 12px 0;border-bottom:1px #eee solid;line-height:48px;font-size:20px; clear:both;overflow:hidden;}
.mlist li span{float:left;}
.mlist .avator{display:block; width:48px;height:48px;background-size:100% 100%; margin-right:0.2rem;}
.mlist .user{width:185px;color:#5a0115;margin-right:10px;overflow:hidden;text-overflow:ellipsis; white-space: nowrap;}
.mlist .txt{width:248px; overflow:hidden;text-overflow:ellipsis; white-space: nowrap;}

</style>
