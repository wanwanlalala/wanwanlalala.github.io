(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{363:function(e,r,t){e.exports=t.p+"img/bac4717.png"},370:function(e,r,t){var content=t(439);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(8).default)("2d0c313c",content,!0,{sourceMap:!1})},438:function(e,r,t){"use strict";var o=t(370);t.n(o).a},439:function(e,r,t){r=e.exports=t(7)(!1);var o=t(84)(t(363));r.push([e.i,".register .header[data-v-56c3e3e3]{width:100%;height:60px;font-size:14px;color:#666;margin:0;padding:10px 0;border-bottom:2px solid #2bb8aa;box-sizing:border-box}.register .header .header-cont[data-v-56c3e3e3]{width:980px;margin:0 auto}.register .header .header-cont .logo[data-v-56c3e3e3]{display:inline-block;width:54px;height:36px;background-image:url("+o+");background-position:-669px -748px;background-repeat:no-repeat}.register .header .header-cont .go-login[data-v-56c3e3e3]{float:right;margin-top:5px}.register .header .header-cont .go-login .header-login-btn[data-v-56c3e3e3]{color:#fff;border-radius:4px;background:#2bb8aa}.register .header .header-cont .go-login .header-login-btn a[data-v-56c3e3e3]{color:#fff}.register .main[data-v-56c3e3e3]{width:980px;margin:30px auto}.register .main .main-form[data-v-56c3e3e3]{margin-left:50px;width:400px}.register .main .main-form .submit-btn[data-v-56c3e3e3]{font-size:14px;background:#2bb8aa}.register .footer[data-v-56c3e3e3]{margin-top:20px;border-top:1px solid #eee}.register .footer p[data-v-56c3e3e3]{color:#999;font-size:13px}.register .footer p .footer-link[data-v-56c3e3e3]{color:#999;margin-right:5px}",""])},468:function(e,r,t){"use strict";t.r(r);t(180),t(181),t(29);var o=t(377),n=t.n(o),l={layout:"blank",data:function(){var e=this;return{form:{username:"",email:"",code:"",pwd:"",cpwd:""},sendTip:"",isDisabled:!1,errorTip:"",rules:{username:[{required:!0,type:"string",message:"请输入用户名",trigger:"blur"}],email:[{required:!0,type:"email",message:"请输入邮箱地址",trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}],pwd:[{required:!0,message:"请输入创建密码",trigger:"blur"}],cpwd:[{required:!0,message:"请输入确认密码",trigger:"blur"},{validator:function(r,t,o){""===t?o(new Error("请再次输入密码！")):t!==e.form.pwd?o(new Error("两次输入的密码不一致！")):o()},trigger:"blur"}]}}},methods:{sendCode:function(){console.log("发送验证码");var e,r,t=this;if(!t.timerid){if(t.$refs.form.validateField("name",function(r){e=r}),t.sendTip="",e)return!1;if(t.$refs.form.validateField("emailPass",function(e){r=e}),r)return!1;t.$axios.post("/users/verify",{username:encodeURIComponent(t.form.username),email:t.form.email}).then(function(e){var r=e.status,data=e.data;if(200===r&&data&&1===data.code){var o=60;t.sendTip="已发送验证码，剩余".concat(--o,"秒"),t.isDisabled=!0,t.timerid=setInterval(function(){t.sendTip="已发送验证码，剩余".concat(--o,"秒"),0===o&&(t.isDisabled=!1,clearInterval(t.timerid))},1e3)}else t.sendTip=data.msg})}},register:function(){var e=this;e.$refs.form.validate(function(r){r&&e.$axios.post("/users/signup",{username:encodeURIComponent(e.form.username),password:n.a.MD5(e.form.pwd).toString(),email:e.form.email,code:e.form.code}).then(function(r){var t=r.status,data=r.data;200===t?data&&1===data.code?location.href="/login":e.errorTip=data.msg:e.errorTip="服务器出错，错误码：".concat(t),setTimeout(function(){e.errorTip=""},2e3)})})}}},d=(t(438),t(2)),component=Object(d.a)(l,function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("header",{staticClass:"header"},[t("div",{staticClass:"header-cont"},[t("nuxt-link",{staticClass:"logo",attrs:{to:"\\meituan"}}),e._v(" "),t("div",{staticClass:"go-login"},[t("span",[e._v("已有美团账号？")]),e._v(" "),t("el-button",{staticClass:"header-login-btn",attrs:{size:"mini"}},[t("nuxt-link",{attrs:{to:"/login"}},[e._v("登录")])],1)],1)],1)]),e._v(" "),t("main",{staticClass:"main"},[t("el-form",{ref:"form",staticClass:"main-form",attrs:{model:e.form,rules:e.rules,"label-width":"80px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"username"}},[t("el-input",{model:{value:e.form.username,callback:function(r){e.$set(e.form,"username",r)},expression:"form.username"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[t("el-input",{model:{value:e.form.email,callback:function(r){e.$set(e.form,"email",r)},expression:"form.email"}}),e._v(" "),t("el-button",{attrs:{size:"mini",round:"",maxlength:"4",disabled:e.isDisabled},on:{click:e.sendCode}},[e._v("发送验证码")]),e._v(" "),t("span",{staticClass:"send-tip"},[e._v(e._s(e.sendTip))])],1),e._v(" "),t("el-form-item",{attrs:{label:"验证码",prop:"code"}},[t("el-input",{model:{value:e.form.code,callback:function(r){e.$set(e.form,"code",r)},expression:"form.code"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"创建密码",prop:"pwd"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.pwd,callback:function(r){e.$set(e.form,"pwd",r)},expression:"form.pwd"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"确认密码",prop:"cpwd"}},[t("el-input",{attrs:{type:"password"},model:{value:e.form.cpwd,callback:function(r){e.$set(e.form,"cpwd",r)},expression:"form.cpwd"}})],1),e._v(" "),t("el-form-item",[t("el-button",{staticClass:"submit-btn",attrs:{size:"small",type:"primary"},on:{click:e.register}},[e._v("同意以下协议并注册")]),e._v(" "),t("div",{staticClass:"error-tip"},[e._v(e._s(e.errorTip))])],1),e._v(" "),t("el-form-item",[t("nuxt-link",{attrs:{to:"http://www.meituan.com/about/terms"}},[e._v("《美团网用户协议》")])],1)],1)],1),e._v(" "),t("footer",{staticClass:"footer"},[t("p",[t("nuxt-link",{staticClass:"footer-link",attrs:{to:"/meituan"}},[e._v("©meituan.com")]),e._v(" "),t("nuxt-link",{staticClass:"footer-link",attrs:{to:"/meituan"}},[e._v("京ICP证070791号")]),e._v("\n            京公网安备11010502025545号\n        ")],1)])])},[],!1,null,"56c3e3e3",null);r.default=component.exports}}]);