<template>
  <div class="content">
    <div class="notice"><div>幸运抽奖！千元智能机等你来拿！</div></div>
    <div class="conts">
      <!--转盘-->
      <div class="box">
        <div class="pointer" @click="chou()"></div>
        <div class="boxbg" :style="{transform:rotate_angle,transition:rotate_transition}">
          <div class="turn">
            <div :class="{'wheel-bg6':true}">
              <div class="prize-list">
                <ul class="ulOne" :class="{'win':indexa===0&&prize_list.length==3}">
                  <li v-for="(item,index) in arrOne" :class="{'win':index===indexa}" :style="{ zIndex: item.zIndex,transform: item.deg }"></li>
                </ul>
                <ul class="ulTwo" :class="{'win':indexa===arrOne.length-1}">
                  <li v-for="(item,index) in arrTwo" :class="{'win':index===indexb}" :style="{ zIndex: item.zIndex,transform: item.deg }"></li>
                  <li v-if="prize_list.length==3" :class="{'win':indexb===0}" style="border:none;z-index:4; transform: rotate(329deg)"></li>
                </ul>
                <div></div>
              </div>
              <div class="prize-list">
                <div class="prize-item" v-for="(item,index) in prize_list" :key="index" :style="{transform:item.troter,width:item.width}">
                  <div class="prize-pic">
                    <img v-if="item.prizeType==0" src="../../static/img/pro_1.png">
                    <img v-if="item.prizeType==1" src="../../static/img/pro_2.png">
                    <img v-if="item.prizeType==2" src="../../static/img/pro_3.png">
                    <img v-if="item.prizeType==3" src="../../static/img/pro_4.png">
                    <img v-if="item.prizeType==4" src="../../static/img/pro_5.png">
                    <img v-if="item.prizeType==5" src="../../static/img/pro_6.png">
                  </div>
                  <div class="prize-name">
                    {{item.prizeName}}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--栏目-->
      <div class="Hbtn clear"><a href="prize.html" class="fl"><i class="icon2"></i><br>上期中奖名单</a><a href="javascript:;" class="fr"><i class="icon3"></i><br>我的奖品</a></div>
      <!--抽奖次数-->
      <div class="turnNum">您本日有<em>1</em>次抽奖机会</div>
      <!--中奖公告-->
      <rewardlist></rewardlist>
      <!--规则-->
      <div class="rule">
        <div class="rule-tt">活动规则</div>
        <div class="rule-con">
          <p>用户点击进入“皮一下”大转盘活动页面，（联通、移动、电信）用户均可参加抽奖。</p>
          <p>活动时间：2018年6月1日-2018年12月31日<br>
          活动规则：<br>用户活动点击进入“皮一下”大转盘活动页面，（联通、移动、电信）用户均可参加抽奖。<br>
          活动需手机号绑定“上海联通”微信公众号后参与。<br>
          符合参与条件的用户，每周均可以获得一次抽奖机会。<br>
          中奖奖品以实际中奖弹窗信息告知为准，奖品信息可在“我的奖品”中进行查询。<br>
          “手机大奖翻翻翻”活动：您还可以把活动分享到朋友圈或发送给好友，被分享者抽中手机，分享者可获得同款手机一部（联通、电信、移动用户均可参加）。<br>实物类奖品，我司将在15个工作日与您联系，凭身份证及中奖通知到指定地点领取。<br>非实物类奖品，我司将在3个工作日内赠送到您的绑定账户中。号卡类奖品，我司将在5个工作日内以物流方式免费配送至您填写的指定地址。<br>
          存在以下情况者，奖项可能无法领取：<br>上海联通号码处于非正常状态（如：欠费停机、销户、黑名单等）；<br>
          不符合《电话用户真实身份登记规定》的用户；<br>
          当月办理套餐变更、23转4等业务的用户；<br>
          领奖期为开奖期60天内，逾期未领视为自动放弃。<br>奖品发放可能存在不成功情况，我们将以其他形式进行补发。<br>若活动参与者存在虚假交易等恶意套取实物类奖品或非实物类奖品的行为，中国联通有权停止该活动资格，并保留追回已发放奖品的权利。</p>
          <p>电子券使用规：<br>
          1、电子券将于中奖后次月20日前到账，有效期为90天，过期作废，具体到账信息会以短信通知用户。<br>
          2、请下载沃钱包手机客户端epay.10010.com ，使用“梦想计划”会员手机号码进行注册，点击电子券至兑换专区兑换商品（可1比1兑换联通话费、京东e卡、天猫购物券等20多种卡券）。<br>
          3、电子券领取限本活动绑定同一手机号码参与，关于电子券使用的任何问题可以致电10188咨询。</p>
        </div>
      </div>
    </div>

    <!--中奖弹窗-->
    <div class="popup" v-show="toast_control">
      <div class="popbg"></div>
      <div class="popbox">
        <div class="close" @click="toast_control=false"></div>
        <div class="img" :class="{'img1':false}"></div>
        <div class="words1">{{hasPrize.words1}}</div>
        <div class="words2">{{hasPrize.words2}}</div>
        <div class="words3" v-show="hasPrize.words3!=''">{{hasPrize.words3}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import rewardlist from './reward'

export default {
  data () {
    return {
      winnum: '0', //中奖的下标
      indexa: '', //中奖的下标在第一个ul下li的index下标，背景变深颜色
      indexb: '', //中奖的下标在第二个ul下li的index下标，背景变深颜色
      toast_control: false, //抽奖结果和活动规则弹出框控制器
      click_flag: true, //是否可以旋转抽奖
      start_rotating_degree: 0, //转盘初始旋转角度
      rotate_angle: 0, //转盘将要旋转的角度
      start_rotating_degree_pointer: 0, //指针初始旋转角度
      rotate_angle_pointer: 0, //指针将要旋转的度数
      rotate_transition: "", //初始化选中的过度属性控制
      rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
      prize_list: [{
        prizeType: 1, // 奖品数量
          prizeName: "10元电影券", // 奖品名称
        },
        {
          prizeType: 3,
          prizeName: "30元咖啡券",
        },
        {
          prizeType: 2,
          prizeName: "30元好乐迪券",
        },
        {prizeType: 4,
          prizeName: "1GB流量日包"
        },
        {prizeType: 5,
          prizeName: "1GB流量月包"
        },
        {prizeType: 0,
          prizeName: "50元加油卡"
        },
        {prizeType: 2,
          prizeName: "30元好乐迪券"
        },
        {prizeType: 3,
          prizeName: "30元咖啡券"
        }
      ], //奖品列表
      arrOne: [],
      arrTwo: [],
      shopUid: '',
      userinfo: '',
      prizeinfo: {
        isGet: '',
        prizeInfos: [{
          validTime: '',
          invalidTime: '',
          type: ''
        }]
      }, //中奖优惠券或实物的信息
      hasPrize: {}, //抽奖之后弹出框信息
    }
  },
  components: {rewardlist},
  mounted() {
    let _this = this;
    _this.setSan()
  },
  methods: {
    chou() {
      let _this = this;
      _this.indexa = ''
      _this.indexb = ''
      _this.winnum = Math.floor(Math.random() * Number(_this.prize_list.length - 1));
      console.log(_this.winnum)
      _this.rotating(_this.winnum)
    },
    setSan() {
      let _this = this
      _this.arrOne = [];
      _this.arrTwo = [];
      _this.rotate_angle = "rotate(" + Math.floor(-360 * 100 / _this.prize_list.length) / 200 + "deg)";
      _this.start_rotating_degree = Math.floor(-360 * 100 / _this.prize_list.length) / 200;
      for(var i = 0; i < _this.prize_list.length; i++) {
        _this.prize_list[i].troter = "rotate(" + Math.floor(360 * 100 / _this.prize_list.length) / 100 * (0.5 + Number(i)) + "deg) translateX(-50%)"
        _this.prize_list[i].width = Math.floor(3.14 * 5.6 / this.prize_list.length) + "rem"
        var item = {
          value: _this.prize_list[i].name,
          zIndex: Number(i) + 1,
          deg: "rotate(" + Math.floor(360 * 100 / this.prize_list.length) * i / 100 + "deg)",
          degnum: i,
        }
        if(i < _this.prize_list.length / 2) {
          _this.arrOne.push(item)
        } else {
          _this.arrTwo.push(item)
        }
      }
    },
    rotating(index) { //转盘转动函数，index值为中奖的下标，后台会返回中奖的id，这边会首先for循环判断中奖的下标
      let _this = this;
      _this.rotate_transition = "transform 6s cubic-bezier(0.25,0.1,0.01,1)";
      if(!_this.click_flag) return;
      var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
      var during_time = 5; // 默认为1s
      var result_index = index; // 最终要旋转到哪一块，对应prize_list的下标
      var rand_circle = 6; // 附加多转几圈，2-3
      _this.click_flag = false; // 旋转结束前，不允许再次触发
      if(type == 0) {
        if(this.start_rotating_degree < 0) {
          this.start_rotating_degree = 0
        } else {
          this.start_rotating_degree = this.start_rotating_degree + Math.floor(360 * 100 / _this.prize_list.length) / 200
        }
        var rotate_angle = this.start_rotating_degree + 360 * 10 + Math.floor(-360 * 100 / this.prize_list.length) / 200 - Math.floor(360 * 100 / this.prize_list.length) * result_index / 100;
        this.start_rotating_degree = rotate_angle;
        _this.rotate_angle = "rotate(" + rotate_angle + "deg)";
        // 旋转结束后，允许再次触发
        setTimeout(function() {
          _this.click_flag = true;
          if(_this.winnum < _this.prize_list.length / 2) {
            _this.indexb = ''
            _this.indexa = _this.winnum;
          } else {
            _this.indexa = ''
            _this.indexb = _this.winnum - (_this.arrOne.length);
          }
          setTimeout(function() {
            _this.game_over();
          }, 100)
        }, during_time * 1000 + 1500); // 延时，保证转盘转完
      }
    },
    game_over() {
      let _this = this;
      _this.prizetype = 1
      if(_this.prizetype != -1) {
        _this.toast_control = true;
      } else {
        Alert.show("奖品已领完，下次请早到哦！")
      }
      var obj = {
        type: 1,
        words1: '恭喜您',
        words2: "获得" + _this.prize_list[_this.winnum].prizeName,
        words3: '可在“个人中心”查看'
      }
      _this.hasPrize = obj
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{text-decoration: none;}
  em{font-style: normal;}
  .red,a.red{ color:#ff3d28;}
  .red2,a.red2{color:#ec0000;}

  .content {position:relative;}
  .conts {padding-top: 85px; padding-bottom: 25px;}
  .notice {position: absolute;top: -25px;left:0;right:0;width: 9.2rem;line-height: 0.973333rem;margin: 0 auto;background-color: rgba(0,0,0,.4);background-image: url(../../static/img/icon1.png);background-size: 0.613333rem auto;background-position: 0.466667rem center;background-repeat: no-repeat;color: #fff;font-size: 0.293333rem;text-align: center;border-radius: 50px;}
  .Hbtn {position: relative;margin-top: -0.666667rem;padding: 0.16rem 0.24rem;box-sizing: border-box;text-align:center;}
  .Hbtn a {color: #ffe991;text-align: center;line-height: 1.13;}
  .Hbtn i {display: inline-block;width: 1.253333rem;height: 1.253333rem;background-size: auto;background-repeat: no-repeat;background-position: center;}
  .Hbtn i.icon2 {background-image: url(../../static/img/icon2.png);background-size: 1.24rem auto;}
  .Hbtn i.icon3 {background-image: url(../../static/img/icon3.png);background-size: 1.106667rem auto;}
  .turnNum {text-align: center;font-size: 0.4rem;padding-top: 0.4rem;padding-bottom: 0.2rem;}

  /**转盘**/
  .box {width: 640px; height: 640px;margin: auto;position: relative;overflow: hidden;}
  .pointer{width: 253px;height: 253px;position: absolute;top: 50%;left: 50%;z-index: 20;transform: translate(-50%, -50%);background: url(../../static/img/turnBtn.png) top center no-repeat;background-size: 100%;}
  .boxbg {width: 640px;height: 640px;background: url(../../static/img/turnplateBg.png) top center no-repeat;background-size: 100% 100%;padding: 80px;box-sizing:border-box;}
  .boxbg .turn {width: 480px;height: 480px;border-radius: 50%;overflow: hidden;}
  .boxbg .slice {box-sizing: border-box;border: 1px solid #ffd8ad;}
  .boxbg .win{background: #fff4c9!important;}
  .boxbg .wheel-bg6 {width: 100%;height: 100%;position: relative;}
  .wheel-bg6 div {text-align: center;}
  .wheel-bg6 .prize-list{width: 100%;height: 100%;position: absolute;}
  .wheel-bg6 .prize-list ul {position: absolute;top: 0;left: 0;width: 100%;height: 100%;border-radius: 50%;overflow: hidden;margin: 0;padding: 0;}
  .wheel-bg6 .prize-list li {position: absolute;top: 0px;left: 50%;width: 50%;height: 50%;transform-origin: 0 100%;overflow: hidden;cursor: pointer; box-sizing: border-box;border-left: 1px solid #ffd8ae; background: #fff;
  }
  .prize-list .ulOne {clip: rect(0, 480px, 480px, 240px);}
  .prize-list .ulTwo {clip: rect(0, 240px, 480px, 0);}
  .prize-item {position: absolute;top: 0;z-index: 12;height: 240px;left: 50%;transform: translateX(-50%);transform-origin: 0 100%;}
  .prize-item .prize-pic {padding-top: 5px;text-align: center;}
  .prize-item .prize-pic img {width: 88px;}
  .prize-item .prize-name {font-size: 18px;color: #ff6600;}
  .boxbg .money {position: absolute;width: 0.57rem;height: 0.55rem;top: 2.17rem;right: -0.2rem;}
  .prizebox {margin: 0.3rem;position: relative;border-radius: 4px;overflow: hidden;padding: 0 0.27rem 0.28rem;}
  .prizebg {position: absolute;border-radius: 4px;background: #fff;height: 100%;width: 100%;top: 0;left: 0;opacity: 0.2;}
  .titname {color: #fff;font-size: 0.32rem;text-align: center;margin: 0.07rem;}
  .titname span img {width: 1.51rem;height: 0.14rem;margin: 0 0.2rem 0.03rem;}
  .titname .xuanz img {transform: rotate(180deg);}
  .prizez {width: 100%;border: 1px solid #fa54a7;border-radius: 4px;background: #fff;display: flex;display: -webkit-flex;}
  .couponleft {padding-left: 0.3rem;width: 3.9rem;position: relative;height: 100%;}
  .couponleft .iconright div {line-height: 1.1;}
  .couponleft .iconright .couponname {font-size: 0.32rem;color: #333333;margin: 0.45rem 0 0.2rem;}
  .couponleft .iconright .timevalidity {font-size: 0.24rem;color: #999999;margin-bottom: 0.2rem;}
  .couponleft .iconright .timevalidity:last-of-type {margin-bottom: 0.45rem;}
  .couponright{flex: 1;line-height: 1.2rem;text-align: center;font-size: 0.24rem;color: #ff4745;vertical-align: top;position: relative;}
  .couponright .money{position: relative;bottom: 0.02rem;margin-right: 0.02rem;}
  .couponright .moneynum{font-size: 0.5rem;}
  .couponright a {position: absolute;left: 0;right: 0;bottom: 0.3rem;width: 1.5rem;height: 0.54rem;color: #fff;background: #ff4745;border-radius: 2px;line-height: 0.54rem;text-align: center;font-size: 0.28rem;margin: auto;display: block;}
  .couponright .tel {bottom: 0;top: 0;}
  .couponright div {position: absolute;right: -0.2rem;top: 0;bottom: 0;margin: auto;width: 1.28rem;height: 1.28rem;}
  .couponright div img {width: 100%;height: 100%;}
  .popup {width: 100%;height: 100%;position: fixed;z-index: 30;top: 0; left: 0;}
  .popbg {width: 100%;height: 100%;background: rgba(0,0,0,.8);}
  .popbox {width: 544px;height: 400px;position: absolute;top: 50%;left: 0;right: 0;margin: auto;margin-top:-200px;background:#fff url(../../static/img/mod_tt.png) top center no-repeat;background-size: 100% auto;text-align: center;border-radius: 8px;}
  .popbox .img {width: 83px;height: 82px;margin: auto;margin-top: 15px;background: url(../../static/img/gifts.png) top center no-repeat;background-size: 100%;}
  .popbox .words1 {font-size: 0.4rem;color: #ff7d12;color:#fff;}
  .popbox .words2 {font-size: 0.36rem;color: #ff8422;margin-top:60px;}
  .popbox .words3 {font-size: 0.32rem;color: #999999;margin-top: 0.07rem;}
  .close {width: 62px;height: 62px;background: url(../../static/img/close.png) top center no-repeat;background-size: 100%;position: absolute;top: 110%;left: 0;right: 0;margin: auto;}

  /**规则**/
  .rule{width:9.2rem;margin:0 auto;}
  .rule-tt{padding:0.266667rem 0; text-align:center;color:#fff;font-size:0.4rem; line-height:1.2;}
  .rule-con{background:#ffe991;border-radius:0.16rem;padding: 0.4rem 0.293333rem;color:#333;font-size:0.293333rem;}
  .rule-con p{padding-bottom:0.2rem;}
</style>
