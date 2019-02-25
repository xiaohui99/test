<template>
  <section class="page-cont">
    <a href="javascript:;" class="rulebtn" @click="showRecord = true"><img src="../assets/img/rulebtn.png"></a>
    <article class="banner"><img src="../assets/img/banner.png"></article>
    <article class="date2">活动时间：12月12日-12月18日</article>
    <article class="navbox">
      <ul class="clear navlist">
        <li class="cur">12月12日<br/><em>10:18</em></li>
        <li>12月13日<br/><em>10:18</em></li>
        <li>12月14日<br/><em>10:18</em></li>
        <li>12月15日<br/><em>10:18</em></li>
      </ul>
    </article>
    <article class="ibox-con">
      <!--秒杀专区-->
      <div class="i-tt"><div><img src="../assets/img/tt_1.png"></div></div>
      <ul class="plist">
        <li v-for="(item, index) in prolists" :key="index">
          <div class="imgbox"><img :src="item.img"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.des}}</p>
          <div class="txt-span"><span>秒杀价</span><span>{{item.gold}}橙豆</span></div>
          <p class="p02">仅限：{{item.num}}件</p>
          <a href="javascript:;" @click="btnClick(item.status)" :data-id="index" class="btn" :class="{disabled:item.status===2}" v-text="statusType(item.status)"></a>
        </li>
      </ul>
      <!--兑换专区-->
      <div class="i-tt"><div><img src="../assets/img/tt_2.png"></div></div>
      <ul class="plist">
        <li v-for="item in mslists" :key="item.key">
          <div class="imgbox"><img :src="item.img"></div>
          <h4>{{item.title}}</h4>
          <p>{{item.des}}</p>
          <div class="txt-span"><span>秒杀价</span><span>{{item.gold}}橙豆</span></div>
          <p class="p02">仅限：{{item.num}}件</p>
          <a href="javascript:;" class="btn" @click="btnClick2(item.status)">兑换</a>
        </li>
      </ul>
      <!--活动规则-->
      <div class="i-tt"><div><img src="../assets/img/tt_3.png"></div></div>
      <div class="rule">
        <div class="rule-con">
          <p>1、该20元购物红包领取时间为：即日起至2018年12月31日，新客可领取一张满120减20元全场券，老客可领取一张满200减20元服装券；<br/>2、唯品会新客户定义：唯品会新客户指此前在唯品会无任何购买记录的客户，新客户资格由唯品会认定；<br/>3、优惠券数量有限，领完即止，优惠券领取后7天内有效，逾期作废，领取后的优惠券可到唯品会“个人中心-我的资产”查看；<br/>4、全场优惠券支持唯品会自营专场和唯品国际专场使用，部分特殊商品不支持，以商品详情页说明为准，商家直发专场不可使用；<br/>5、品类券限定使用品类包括唯品会自营女装、男装、女鞋、男鞋、箱包、运动户外、男女内衣，美妆；<br/>6、服装券限定使用品类包括唯品会自营女装、男装；</p>
        </div>
      </div>
    </article>
    <!--提示框-->
    <modTips v-if="showModTips" @close="showModTips = false" :tipsText="tipsText2" :modClass="modTipsClass">
    </modTips>
    <!--活动记录-->
    <modRecord v-if="showRecord" @close="showRecord = false" :recordlist="recordlists">
    </modRecord>
  </section>
</template>

<script>
import modTips from '@/components/modTips'
import modRecord from '@/components/modRecord'
// import axios from 'axios

export default {
  name: 'page-cont',
  data () {
    return {
      showModTips: false,
      showRecord: false,
      disabled: false,
      tipsText2: '加载中。。。。',
      modTipsClass: 'mod-img1',
      prolists: [],
      mslists: [],
      recordlists: [],
      code: 0
    }
  },
  components: {modTips, modRecord},
  props: ['tipsText'],
  mounted () {
    this.getData()
  },
  watch: {
    disabled: function (newval, oldval) {
      console.log(newval)
    }
  },
  methods: {
    getData () {
      this.$http.get('./static/api/product.json').then(response => {
        // response = response.json
        this.code = response.data.code
        this.mslists = response.data.mslist
        this.prolists = response.data.prolist
        this.recordlists = response.data.recordlist
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    },
    statusType (type) {
      console.log(type)
      if (type === 0) {
        return '未开始'
      } else if (type === 2) {
        return '已秒杀完'
      } else {
        return '秒杀'
      }
    },
    btnClick: function (id) {
      // console.log(id)
      switch (id) {
        case 0:
          this.showModTips = true
          this.tipsText2 = '秒杀还未开始哦！<br/>请耐心等待～'
          this.modTipsClass = 'mod-img4'
          break
        case 1:
          this.showModTips = true
          this.tipsText2 = '恭喜您抢到秒杀产品啦！<br/>欧皇非你莫属！'
          this.modTipsClass = 'mod-img1'
          break
        case 2:
          this.showModTips = true
          this.tipsText2 = '兑换失败<br/>您的橙豆不够哦！'
          this.modTipsClass = 'mod-img2'
          break
        case 3:
          this.showModTips = true
          this.tipsText2 = '产品已秒杀完！<br/>精彩活动尽在上海联通<br/>请持续关注哦～'
          this.modTipsClass = 'mod-img4'
          break
      }
    },
    btnClick2: function (id) {
      // console.log(id)
      switch (id) {
        case 0:
          this.showModTips = true
          this.tipsText2 = '活动还未开始哦！<br/>请耐心等待～'
          this.modTipsClass = 'mod-img4'
          break
        case 1:
          this.showModTips = true
          this.tipsText2 = '兑换成功<br/>快去看看的奖品吧！'
          this.modTipsClass = 'mod-img1'
          break
        case 2:
          this.showModTips = true
          this.tipsText2 = '兑换失败<br/>您的橙豆不够哦！'
          this.modTipsClass = 'mod-img2'
          break
        default:
          this.showModTips = true
          this.tipsText2 = '产品已兑完！<br/>精彩活动尽在上海联通<br/>请持续关注哦～'
          this.modTipsClass = 'mod-img4'
          break
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date2{position:absolute;top:330px;left:50%; width:402px;margin-left:-186px; color:#fff;font-size:24px;text-align:center;line-height:30px;}
.rulebtn{position:absolute;top:0;right:0;width:145px; z-index:4;}
.navbox{position:relative;}
.navbox ul{background:#540c11;}
.navbox li{float:left;width:25%;height:75px;text-align:center;color:#f4c744;font-size: 24px;line-height:1.33;padding-top: 6px; box-sizing:border-box;background-image:url('../assets/img/libg.png'); background-size:100% 100%;}
.navbox li em{display:inline-block;width:84px;line-height:24px;text-align:center; color:#fed68e;background:#500e0f;border-radius: 12px;}
.navbox .cur{background-image:url('../assets/img/libg_2.png'); color:#b30026;}
.navbox .cur em{background:#3c0407;}

/**详情**/
.ibox-con{position:relative;background:url('../assets/img/bg.png') repeat center 110px;background-size:100% auto; padding-bottom:0.533333rem;}
.i-tt{height:110px;background: url('../assets/img/ttbg.png') no-repeat center;background-size:100% 100%;}
.i-tt div{width:120px;margin:0 auto;padding-top: 40px;}
.plist{width: 645px;margin:0 auto;padding: 30px;border:1px #f4a3a2 solid;box-shadow:0 0 6px 1px #ff2b0a, 0 0 6px 1px #ff2b0a inset;border-radius: 30px;box-sizing:border-box; }
.plist li{position:relative; height:250px;padding-left:270px;padding-top:12px; margin-bottom:20px; background:#5b0b0e url('../assets/img/ibg2.png') repeat center;background-size:9px auto;font-size:22px;color:#fff;line-height:1.33;box-shadow:0 0 5px 1px #b11c1e, 0 0 20px 1px rgba(0,0,0,.5);border-radius: 18px; box-sizing:border-box;}
.plist li:last-child{margin-bottom:0;}
.plist .imgbox{position:absolute;left:20px;top:20px;width:212px;height:197px;border:4px #a30e2d solid; border-radius:6px;overflow:hidden;}
.plist .imgbox img{width:100%;height:100%;background-color:#fff;border-radius:5px;}
.plist h4{color:#f2d6ac;font-size:28px;padding-bottom:6px;}
.plist .p02{font-size:20px;color:#f2d6ac;}
.plist .txt-span{width:208px;height:37px; background:#b90002;color:#fff;text-align:center;border-radius:3px;font-size:22px;padding:0 5px;margin: 6px 0;}
.plist .txt-span span:nth-of-type(1){float:left;width:90px;line-height:29px;margin: 3px 0;background:#fff;color:#b90002;border-radius:3px;}
.plist .txt-span span:nth-of-type(2){float:right;width:115px;line-height:36px;}
.btn{display:inline-block; width:214px;line-height:50px;margin-top:12px; background-image:linear-gradient(to bottom,#ffe5b7,#fed68e);color:#3c0407;font-size: 30px;font-weight:bold;text-align:center;border-radius:50px;}
a.btn{color:#3c0407;}
.btn.disabled,a.btn.disabled{background:#cacaca;color:#353535;}
.rule{width: 644px;margin:0 auto;padding:12px;border:1px #f4a3a2 solid;box-shadow:0 0 7px 1px #ff2b0a, 0 0 5px 1px #ff2b0a inset;border-radius: 18px; box-sizing:border-box;}
.rule-con{padding:15px;background:#5b0b0e;border:1px #ab1c20 solid;box-shadow:0 0 24px 1px #a51a22;border-radius: 18px; font-size:24px;color:#fff;text-align:left;}
</style>
