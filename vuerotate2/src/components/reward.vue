<template>
  <div class="rewardbox">
    <div class="reward" id="reward">
      <ul>
        <li v-for="item in List" :key="item.key">
          <span class="avatar" :style="'background-image:url('+item.avatar+')'"></span>
          <p class="username">{{item.username}}</p>
          <p class="date">{{item.date}}</p>
          <p class="p02"><span>{{item.userType}} <em>{{item.phone}}</em></span><span class="red prizeTxt">{{item.prizeTxt}}</span></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
  	data () {
      return {
      	List: [{
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0006',
      		prizeTxt: '抽中千元智能机一台！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0007',
      		prizeTxt: '抽中200M流量券！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0008',
      		prizeTxt: '抽中腾讯会员VIP/月！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0009',
      		prizeTxt: '抽中50元电子券！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0001',
      		prizeTxt: '抽中千元智能机一台！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0002',
      		prizeTxt: '抽中50元电子券！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0003',
      		prizeTxt: '抽中腾讯会员VIP/月！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0004',
      		prizeTxt: '抽中千元智能机一台！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0005',
      		prizeTxt: '抽中千元智能机一台！'
      	  },
      	  {
      		avatar: '',
      		username: '星*',
      		userType: '上海用户',
      		date: '2019-1-10 15:26:59',
      		phone: '155****0000',
      		prizeTxt: '抽中腾讯会员VIP/月！'
      	  }
      	]
      }
	},
	mounted() {
	  let _this = this
	  // _this.reward()
	},
	methods: {
	  reward() {
	  	let _this = this
	  	var startTime = Date.now(),
	  		duration = 6000
        requestAnimationFrame(function step(){
          var p = Math.min(1.0, (Date.now() - startTime) / duration);
          _this.List.unshift(_this.List.pop())
          if(p < 1.0) {
            requestAnimationFrame(step);
          }
        });
      }
	}
  }
</script>

<style scoped>
em{font-style: normal;}
.red,a.red{ color:#ff3d28;}
.red2,a.red2{color:#ec0000;}
.rewardbox{width:9.2rem;margin:0 auto;background:#ffe991;border-radius:0.16rem;padding: 0.533333rem 0.306667rem; box-sizing:border-box;}
.reward{ height:6.266667rem; overflow:hidden;}
.reward li{position:relative;height:1.44rem;padding-top:0.16rem;padding-left:1.333333rem;border-bottom:1px #fb9f00 dashed;/*no*/ font-size:0.266667rem;color:#fb9f00; line-height:1.33; box-sizing:border-box;}
.reward .avatar{position:absolute;left:0;top:0.18rem;width:1.066667rem;height:1.066667rem;background-color:#fff; border-radius:50%;overflow:hidden; background-size:100% 100%;}
.reward .p02{color:#333;}
.prizeTxt{padding-left:0.266667rem;}

/**动画-滚动**/
.marquee{
animation: myMove 3s linear infinite;
animation-fill-mode: forwards;
}
@keyframes myMove {
0% {
  transform: translateY(0);
}
100% {
  transform: translateY(-300px);
}
}
</style>