<template>
  <div id="app">
    <p class="logo"><img src="./assets/logo.png"></p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
body{ font:24px/1.5 '微软雅黑','Microsoft YaHei'; background:#fff; color:#333;}
a:link,a:visited,a:hover,a:active{text-decoration:none;color:#fff;}
.wrap{ min-width: 320px; max-width: 750px; margin: 0 auto;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo{text-align:center;}
</style>
