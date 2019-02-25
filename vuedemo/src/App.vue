<template>
  <div id="app">
    <section class="bg page1" ref="pageHeight" v-show="pageHide">
      <article class="date">活动时间：12月12日-12月18日</article>
      <article class="startBtn"><a href="javascript:;" @click="pageTab"><img src="./assets/img/startBtn.png"></a></article>
    </section>
    <div v-show="!pageHide" class="bg2">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clientHeight: '',
      pageHide: true
    }
  },
  mounted () {
    this.clientHeight = `${document.documentElement.clientHeight}`
    window.onresize = function temp () {
      this.clientHeight = `${document.documentElement.clientHeight}`
      // console.log(this.clientHeight)
    }
  },
  watch: {
    clientHeight: function () {
      this.changeFixed(this.clientHeight)
    }
  },
  methods: {
    changeFixed (clientHeight) {
      // console.log(clientHeight)
      this.$refs.pageHeight.style.minHeight = clientHeight + 'px'
    },
    pageTab: function () {
      this.pageHide = false
    }
  }
}
</script>

<style>
@charset "utf-8";
body,h1,h2,h3,h4,h5,h6,hr,p,dl,dt,dd,ul,ol,li,pre,code,form,legend,b,button,input,textarea,blockquote,article,aside,footer,header,nav,section {margin:0;padding:0;}
img,abbr{border:0;}
table td{word-break:break-all;}
caption,th{text-align:left;}
ol,ul{list-style:none;}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:700;}
input,button,textarea,select{font-size:inherit;font-size:100%;font-family:inherit;}
input[type="button"],input[type="submit"],input[type="reset"],input[type="text"],input[type="tel"],button,textarea {-webkit-appearance: none;}
address,cite,dfn,em,code,var,caption,th{font-style:normal;font-weight:normal;}
article,aside,footer,header,nav,section { display:block; }
q:before,q:after{content:'';}
wbr:nth-of-type(n):after{ vertical-align:middle; border-style:solid dashed dotted; text-decoration:underline; white-space:nowrap;background-size:contain cover;}
/* Basic */
*{word-wrap: break-word;outline:none;}
::selection{background:#F60; color:#fff;}
::-moz-selection{background:#F60; color:#fff;}

.clear:after{ content:''; height:0; visibility:hidden; display:block; clear:both;}
.fl{ float:left;}
.fr{ float:right;}
img{ max-width:100%; display:block; margin:0 auto;}
.border-box,input,button,textarea{-webkit-box-sizing:border-box;box-sizing:border-box;}
html{-webkit-text-size-adjust:none;}
body{ font:24px/1.5 '微软雅黑','Microsoft YaHei'; background:#871114; color:#fff;}
a:link,a:visited,a:hover,a:active{text-decoration:none;color:#fff;}
.wrap{ min-width: 320px; max-width: 750px; margin: 0 auto;}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-width: 320px;
  max-width: 750px;
  margin: 0 auto;
}
.bg{position:relative;width:100%;height:100%;background-size:100% auto;background-position:center top;background-repeat:no-repeat; background-color:#871114;background-image:url('./assets/img/hbg.png');}
.bg2{position:relative;background-size:100% auto; background-repeat:repeat;background-position:center top;background-color:#871114;}
.date{color:#fff;font-size:30px;line-height:78px;text-align:center;padding-top:825px;}
.startBtn{width:323px;margin:0 auto; padding-top:165px;}
.startBtn a{display:block;}
</style>
