//Mon Nov 04 2024 03:11:19 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
let iI1iilIl = "";
if (!rebateCodes) rebateCodes = "https://u.jd.com/CG8LoV4";
if (!iI1iilIl) iI1iilIl = "";
rebateCodes = $.isNode() ? process.env.JD_241111_RedRebateCode ? process.env.JD_241111_RedRebateCode : "" + rebateCodes : $.getdata("JD_241111_RedRebateCode") ? $.getdata("JD_241111_RedRebateCode") : "" + rebateCodes;
iI1iilIl = $.isNode() ? process.env.JD_nhj_rebatePin ? process.env.JD_nhj_rebatePin : "" + iI1iilIl : $.getdata("JD_nhj_rebatePin") ? $.getdata("JD_nhj_rebatePin") : "" + iI1iilIl;
redCount = $.isNode() ? process.env.JD_241111_RedCount ? process.env.JD_241111_RedCount : "" + redCount : $.getdata("JD_241111_RedCount") ? $.getdata("JD_241111_RedCount") : "" + redCount;
redTimes = $.isNode() ? process.env.JD_241111_RedTimes ? process.env.JD_241111_RedTimes : "" + redTimes : $.getdata("JD_241111_RedTimes") ? $.getdata("JD_241111_RedTimes") : "" + redTimes;
$.shareCount = $.isNode() ? process.env.JD_nhj_shareHelpCount ? process.env.JD_nhj_shareHelpCount : "" + shareHelpCount : $.getdata("JD_nhj_shareHelpCount") ? $.getdata("JD_nhj_shareHelpCount") : "" + shareHelpCount;
proxyReceiveCount = $.isNode() ? process.env.JD_241111_proxyReceiveCount ? process.env.JD_241111_proxyReceiveCount : "" + proxyReceiveCount : $.getdata("JD_241111_proxyReceiveCount") ? $.getdata("JD_241111_proxyReceiveCount") : "" + proxyReceiveCount;
proxyGetIpUrl = $.isNode() ? process.env.JD_241111_Red_proxy ? process.env.JD_241111_Red_proxy : proxyGetIpUrl : $.getdata("JD_241111_Red_proxy") ? $.getdata("JD_241111_Red_proxy") : proxyGetIpUrl;
taskFlag = $.isNode() ? process.env.JD_241111_Red_taskFlag ? process.env.JD_241111_Red_taskFlag : taskFlag : $.getdata("JD_241111_Red_taskFlag") ? $.getdata("JD_241111_Red_taskFlag") : taskFlag;
$.shareCount = parseInt($.shareCount, 10) || 0;
let i1IiIll1 = iI1iilIl && iI1iilIl.split(",") || [],
  llIiII = rebateCodes + "";
$.time("yyyy-MM-dd HH:mm:ss");
message = "";
let iiiIll1I = "";
resMsg = "";
$.uiUpdateTime = "";
$.endFlag = false;
$.runEnd = false;
let i1i1l1ii = {};
$.getH5st_WQ_Arr = {};
$.runArr = {};
let l1lilII = {};
const IIIii11l = "2024/11/12 00:00:00+08:00";
let I1ii1iI1 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
$.UVCookieArr = {};
lr = {};
$.UVCookie = "";
let llIIliII = "",
  ilillll = 4;
redTimes = Number(redTimes);
proxyReceiveCount = Number(proxyReceiveCount);
$.time("yyyy-MM-dd");
const l1llll1l = require("request");
var ll1ll1li = "";
try {
  ll1ll1li = require("tunnel");
} catch (l11Ill1l) {
  console.log("请安装模块\"tunnel\"\n");
}
var lilIIi11 = "";
try {
  var {
    SocksProxyAgent: lilIIi11
  } = require("socks-proxy-agent");
} catch (il1iil1) {
  console.log("如果有用socks代理请安装模块\"socks-proxy-agent\"\n没有的话请忽略！\n");
}
let lIl11l1 = false;
$.proxyArrCount = 20;
$.proxyArrOrder = 0;
$.proxyArrIndex = -1;
if (proxyGetIpUrl) proxyGetIpUrl = proxyGetIpUrl.split("|").map(function (lIiIllI, iIlIII11, lIIi1liI) {
  return {
    "url": lIiIllI,
    "index": iIlIII11 + 1,
    "status": true,
    "count": 0,
    "errorCount": 0
  };
});
$.proxyArrAll = {};
$.proxyArr = {};
proxyGetIpUrl.length > 0 && (lIl11l1 = true);
lIl11l1 && console.log("开启代理");
$.switchProxies = false;
const I1ilII1l = {
  "exports": {}
};
iI1iiIIl();
l1ii1lIi();
!(async () => {
  if (/https:\/\/u\.jd\.com\/.+/.test(llIiII)) {
    if (llIiII.split("/").pop()) llIiII = llIiII.split("/").pop().split("?").shift();else {
      console.log("请填写正确的rebateCode");
      return;
    }
  }
  if (!cookiesArr[0]) {
    $.msg($.name, "【提示】请先获取cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/", {
      "open-url": "https://bean.m.jd.com/"
    });
    return;
  }
  if (I1ii1iI1 > new Date(IIIii11l).getTime()) {
    $.msg($.name, "活动已结束", "请删除此脚本");
    $.setdata("", "JD_241111_Red");
    $.setdata("", "JD_241111_Red_pin");
    return;
  }
  console.log("当前版本：2024年10月15日");
  console.log("返利码：" + llIiII.replace(/.+(.{3})/, "***$1") + "\n");
  $.shareCodeArr = {};
  $.shareCodePinArr = $.getdata("JD_241111_Red_pin") || {};
  $.shareCode = "";
  $.again = false;
  $.taskPinArr = {};
  if ($.end) return;
  for (let Iiiii1il = 0; Iiiii1il < cookiesArr.length && !$.runEnd; Iiiii1il++) {
    if ($.endFlag) break;
    cookie = cookiesArr[Iiiii1il];
    if (cookie) {
      $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = Iiiii1il + 1;
      if ($.runArr[$.UserName]) continue;
      console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
      let iIiI111i = 1;
      ilillll = 4;
      !cookie.includes("app_open") && (iIiI111i = 2, ilillll = 2);
      typeof $.proxyArr.pin == "object" && $.proxyArr.pin.length >= proxyReceiveCount && ($.switchProxies = true);
      $.eid_token = "";
      await iI1III1l(true, iIiI111i);
      await lIlillll();
      await iIiil1ll();
      if ($.endFlag) break;
    }
    $.setdata($.shareCodePinArr, "JD_241111_Red_pin");
  }
  $.setdata($.shareCodePinArr, "JD_241111_Red_pin");
  if (message) {
    $.msg($.name, "", "红包详情：\n" + message + "\nhttps://u.jd.com/" + llIiII + "\n\n跳转到app 可查看助力情况");
    if ($.isNode()) {}
  }
  message = "";
  if (Object.getOwnPropertyNames($.taskPinArr).length > 0) {
    console.log("\n\n开始做任务");
    lIl11l1 = false;
    $.proxyArr = {};
    for (let i1IIl1l1 = 0; i1IIl1l1 < cookiesArr.length; i1IIl1l1++) {
      cookie = cookiesArr[i1IIl1l1];
      if (cookie) {
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        $.index = i1IIl1l1 + 1;
        if (!$.taskPinArr[$.UserName]) continue;
        console.log("\n\n******开始【京东账号" + $.index + "】" + ($.nickName || $.UserName) + "*********\n");
        let iI1l1iII = 1;
        !cookie.includes("app_open") && (iI1l1iII = 2);
        await iI1III1l(true, iI1l1iII);
        await lIlillll();
        await lilIil1i();
      }
    }
    if (message) {
      $.msg($.name, "", "任务详情：\n" + message);
      if ($.isNode()) {}
    }
  }
})().catch(l1llllI => $.logErr(l1llllI)).finally(() => {
  $.done();
});
async function iIiil1ll(I1IIlIli = 0) {
  try {
    I1IIlIli == 0 && (l1lilII.c822a = l111IIl1("c822a", $.UA));
    $.UVCookie = $.UVCookieArr[$.UserName] || "";
    !$.UVCookie && l1ii1lIi();
    resMsg = "";
    let l1l1Iiii = false,
      llII1il = 0,
      lIilI1 = 0,
      ilIliI1 = 0;
    $.shareFlag = true;
    do {
      if (lIilI1 > 2) llII1il = 0;
      $.flag = 0;
      iiiIll1I = "";
      $.url1 = "";
      await l11IiIli();
      if (!$.url1) {
        console.log("获取url1失败");
        $.end = true;
        break;
      }
      $.url2 = "";
      $.UVCookie = llIIliII.getUVCookie("", "", $.url1, $.UVCookie);
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      await l11IIIll();
      if (!$.url2) {
        console.log("获取不到红包页面");
        break;
      }
      if (!/unionActId=\d+/.test($.url2) && !new RegExp("&d=" + llIiII).test($.url2)) {
        console.log("改返利url：https://u.jd.com/" + llIiII + " 可能不是红包页面");
        $.runEnd = true;
        return;
      }
      if (!$.url2) $.url2 = "https://pro.m.jd.com/mall/active/3RDEv2t1n4nvt1UFWRQ9ghDDA861/index.html?unionActId=31192&d=" + llIiII + "&cu=true&utm_source=kong&utm_medium=jingfen";
      $.actId = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/mall\/active\/([^/]+)\/index\.html/)[1] || "3RDEv2t1n4nvt1UFWRQ9ghDDA861";
      $.UVCookie = llIIliII.getUVCookie("", "", $.url2, $.UVCookie);
      $.origin = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "https://pro.m.jd.com";
      $.UVCookieArr[$.UserName] = $.UVCookie + "";
      $.eid = "";
      !$.eid && ($.eid = -1);
      if (I1IIlIli == 0) {
        let i1ilI1l1 = 0,
          ilIlI1i1 = true,
          Iil1llI = 0;
        if (Object.getOwnPropertyNames(i1i1l1ii).length > llII1il && $.shareFlag) for (let ll1iII in i1i1l1ii || {}) {
          if (ll1iII == $.UserName) {
            $.flag = 1;
            continue;
          }
          if (i1ilI1l1 == llII1il) {
            $.flag = 0;
            $.shareCode = i1i1l1ii[ll1iII] || "";
            if ($.shareCodePinArr[ll1iII] && $.shareCodePinArr[ll1iII].includes($.UserName)) {
              Iil1llI++;
              continue;
            }
            if ($.shareCode.count >= $.shareCodeArr.shareCount) {
              Iil1llI++;
              continue;
            }
            $.getlj = false;
            if ($.shareCode) console.log("助力[" + ll1iII + "]");
            let lIIililI = await ll1l111i($.shareCode.code, 1);
            if (/重复助力/.test(lIIililI)) {
              if (!$.shareCodePinArr[ll1iII]) $.shareCodePinArr[ll1iII] = [];
              $.shareCodePinArr[ll1iII].push($.UserName);
              llII1il--;
              ilIliI1--;
            } else {
              if (/助力/.test(lIIililI) && /上限/.test(lIIililI)) $.shareFlag = false;else {
                if (!/领取上限/.test(lIIililI) && $.getlj == true) {
                  if (!$.shareCodePinArr[ll1iII]) $.shareCodePinArr[ll1iII] = [];
                  !$.shareCodePinArr[ll1iII].includes($.UserName) && $.shareCodePinArr[ll1iII].push($.UserName);
                  llII1il--;
                } else ilIlI1i1 = false;
              }
            }
          }
          i1ilI1l1++;
        }
        ilIlI1i1 && Iil1llI == Object.getOwnPropertyNames(i1i1l1ii).length && (l1l1Iiii = true);
        if (i1ilI1l1 == 0) {
          $.getlj = false;
          let iIii11II = await ll1l111i("", 1);
          !/领取上限/.test(iIii11II) && $.getlj == true && llII1il--;
        }
        if ($.endFlag) break;
      } else {
        let II11llI = await Ii1il11();
        if (!$.endFlag && II11llI && $.again == false) await i1i1I11I();
        if ($.again == false) break;
      }
      $.again == true && lIilI1 < 1 && (lIilI1++, $.again = false);
      llII1il++;
      ilIliI1++;
      $.flag == 1 && (await $.wait(parseInt(Math.random() * 500 + 100, 10)));
      if (redCount > 0 && redCount <= ilIliI1) break;
    } while ($.flag == 1 && llII1il < 4);
    if ($.endFlag) return;
    resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
    if (l1l1Iiii) {}
    if (!$.proxyArr.host) {
      let lll11Ii = parseInt(Math.random() * 1000 + redTimes, 10);
      console.log("等待 " + lll11Ii / 1000 + " 秒");
      await $.wait(lll11Ii);
    }
  } catch (iIillII1) {
    console.log(iIillII1);
  }
}
async function II1IiII1(ll1i1Ili = 0) {
  try {
    let iiIii11 = 2;
    if (ll1i1Ili == 1) iiIii11 = 1;
    let iiiIllll = 0;
    for (let I11l1i11 in $.shareCodeArr || {}) {
      if (I11l1i11 === "flag" || I11l1i11 === "updateTime" || I11l1i11 === "shareCount") continue;
      if ($.shareCodeArr[I11l1i11] && $.shareCodeArr.shareCount && $.shareCodeArr[I11l1i11].count < $.shareCodeArr.shareCount) iiiIllll++;
    }
    for (let Ii11IIli = 0; Ii11IIli < cookiesArr.length && !$.runEnd; Ii11IIli++) {
      cookie = cookiesArr[Ii11IIli];
      if (cookie) {
        $.UserName = decodeURIComponent(cookie.match(/pt_pin=([^; ]+)(?=;?)/) && cookie.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
        if (i1IiIll1.length > 0 && i1IiIll1.indexOf($.UserName) == -1 || $.shareCodeArr[$.UserName]) continue;
        $.index = Ii11IIli + 1;
        $.eid_token = "";
        await iI1III1l();
        await lIlillll();
        await iIiil1ll(1);
        let liiIIIi = 0;
        for (let i1i11Iil in $.shareCodeArr || {}) {
          if (i1i11Iil === "flag" || i1i11Iil === "updateTime" || i1i11Iil === "shareCount") continue;
          if ($.shareCodeArr[i1i11Iil] && $.shareCodeArr.shareCount && $.shareCodeArr[i1i11Iil].count < $.shareCodeArr.shareCount) liiIIIi++;
        }
        if ($.endFlag || liiIIIi - iiiIllll >= iiIii11 || $.end) break;
      }
    }
  } catch (l1i1I1l) {
    console.log(l1i1I1l);
  }
  if (Object.getOwnPropertyNames($.shareCodeArr).length > 0) for (let i1lIill in $.shareCodeArr || {}) {
    if (i1lIill === "flag" || i1lIill === "updateTime" || i1lIill === "shareCount") continue;
    if ($.shareCodeArr[i1lIill]) i1i1l1ii[i1lIill] = $.shareCodeArr[i1lIill];
  }
}
function ll1l111i(lil11111 = "", iil11i = 1) {
  return new Promise(async Ilii1iIl => {
    $.UVCookie = llIIliII.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let lIilll1l = "",
      iIllIl1 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const lllillii = {
        "platform": ilillll,
        "unionActId": "31192",
        "actId": $.actId,
        "d": llIiII,
        "unionShareId": lil11111,
        "type": iil11i,
        "qdPageId": "MO-J2011-1",
        "mdClickId": "jxhongbao_ck",
        "actType": 1
      },
      IlII1ii1 = {
        "appid": "u_hongbao",
        "body": JSON.stringify(lllillii),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "getCoupons"
      };
    let IliIIiI1 = l1lilII.c822a.__genH5st(IlII1ii1, $.UserName);
    lIilll1l = IliIIiI1.h5st || "";
    let IiII1lll = "",
      lilI1ilI = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + IlII1ii1.appid + "&_=" + iIllIl1 + "&loginType=2&body=" + $.toStr(lllillii) + "&client=" + IlII1ii1.client + "&clientVersion=" + IlII1ii1.clientVersion + "&h5st=" + lIilll1l + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip,deflate",
          "Connection": "keep-alive",
          "x-rp-client": "h5_1.0.0",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=Babel_H5FirstClick; " + $.UVCookie + iiiIll1I + " " + cookie,
          "origin": $.origin,
          "Referer": $.origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    lilI1ilI.headers.Cookie = lilI1ilI.headers.Cookie.replace(/;\s*$/, "");
    lilI1ilI.headers.Cookie = lilI1ilI.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) lilI1ilI.headers.Referer = $.url2;
    lilI1ilI = i1li1lI(lilI1ilI);
    var I1IiI1 = $;
    if (l1llll1l && $.proxyArr.type && $.proxyArr.type == "socks") I1IiI1 = l1llll1l;
    I1IiI1.post(lilI1ilI, async (iIIII1iI, illill1l, Ii11ili1) => {
      try {
        if (iIIII1iI) {
          var illlIiii = Il11iiil(iIIII1iI, illill1l);
          console.log("" + $.toStr(iIIII1iI));
          console.log($.name + " getCoupons API请求失败，请检查网路重试");
          if (illlIiii) {
            await iI1III1l(false);
            if (!$.switchProxies) await ll1l111i(...arguments);
          }
        } else {
          let iIiII1ll = $.toObj(Ii11ili1, Ii11ili1);
          if (typeof iIiII1ll == "object") {
            iIiII1ll.msg && (IiII1lll = iIiII1ll.msg, console.log(iIiII1ll.msg));
            if (iIiII1ll.msg.indexOf("不展示弹层") > -1 && iil11i == 1) $.again = true;
            if (iIiII1ll.msg.indexOf("领取上限") === -1 && iIiII1ll.msg.indexOf("登录") === -1) {
              if (iil11i == 1) $.flag = 1;
            }
            if (iIiII1ll.msg.indexOf("活动已结束") > -1 || iIiII1ll.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            lil11111 && typeof iIiII1ll.data !== "undefined" && typeof iIiII1ll.data.joinNum !== "undefined" && console.log("当前" + iIiII1ll.data.joinSuffix + ":" + iIiII1ll.data.joinNum);
            if (iIiII1ll.code == 0 && iIiII1ll.data) {
              iil11i == 1 && (typeof $.proxyArr.pin == "object" && !$.proxyArr.pin.includes($.UserName) && $.proxyArr.pin.push($.UserName), $.shareCode.count++);
              let lIllIlII = "";
              for (let iI1IIiI of iIiII1ll.data.couponList) {
                lIllIlII += "" + (lIllIlII ? "\n" : "");
                $.getlj = true;
                if (iI1IIiI.type == 1) lIllIlII += "获得[红包]🧧" + iI1IIiI.discount + "元 使用时间:" + $.time("yyyy-MM-dd", iI1IIiI.beginTime) + " " + $.time("yyyy-MM-dd", iI1IIiI.endTime);else {
                  if (iI1IIiI.type == 3) lIllIlII += "获得[优惠券]🎟️满" + iI1IIiI.quota + "减" + iI1IIiI.discount + " 使用时间:" + $.time("yyyy-MM-dd", iI1IIiI.beginTime) + " " + $.time("yyyy-MM-dd", iI1IIiI.endTime);else {
                    if (iI1IIiI.type == 6) lIllIlII += "获得[打折券]🎫满" + iI1IIiI.quota + "打" + iI1IIiI.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", iI1IIiI.beginTime) + " " + $.time("yyyy-MM-dd", iI1IIiI.endTime);else {
                      if (iI1IIiI.type == 17) lIllIlII += "获得[" + (iI1IIiI.shopName || "京东支付立减") + "] " + (iI1IIiI.limitStr && iI1IIiI.limitStr + " " || "") + "领取之日起" + iI1IIiI.limitTime + "天有效";else {
                        var IIIIl1Ii = "未知";
                        lIllIlII += "获得[" + (iI1IIiI.shopName || IIIIl1Ii) + "] " + $.toStr(iI1IIiI, iI1IIiI);
                      }
                    }
                  }
                }
              }
              lIllIlII && (resMsg += lIllIlII + "\n", console.log(lIllIlII));
            }
            if (iil11i == 1 && typeof iIiII1ll.data !== "undefined" && typeof iIiII1ll.data.groupData !== "undefined" && typeof iIiII1ll.data.groupData.groupInfo !== "undefined") {
              var iIiIiI1i = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let liI1iliI of iIiII1ll.data.groupData.groupInfo || []) {
                if (liI1iliI.status == 2) console.log("打卡满可以领取" + liI1iliI.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await ll1l111i("", 3);else taskFlag + "" === "true" && liI1iliI.status == 1 && iIiIiI1i == $.time("d", liI1iliI.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31192",
                  "platform": ilillll,
                  "d": llIiII,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + iiiIll1I + " " + cookie
                });
              }
            }
          } else console.log(Ii11ili1);
        }
      } catch (I1ll11i1) {
        $.logErr(I1ll11i1, illill1l);
      } finally {
        Ilii1iIl(IiII1lll);
      }
    });
  });
}
function Ii1il11(II1IllII = "") {
  let iliI111 = true;
  return new Promise(lI1liilI => {
    $.UVCookie = llIIliII.getUVCookie("", "", $.url2, $.UVCookie);
    $.UVCookieArr[$.UserName] = $.UVCookie + "";
    let IiIlli1i = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var Il1IIII1 = {
      "actId": $.actId,
      "unionActId": "31192",
      "platform": ilillll,
      "unionShareId": II1IllII,
      "uiUpdateTime": $.uiUpdateTime,
      "d": llIiII,
      "callType": 2
    };
    let l1IillI1 = {
      "url": "https://api.m.jd.com/api?functionId=showCoupon&appid=u_hongbao&_=" + IiIlli1i + "&loginType=2&body=" + $.toStr(Il1IIII1) + "&client=apple&clientVersion=" + ($.UA.split(";")[2] || "1.1.0") + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip,deflate",
        "Connection": "keep-alive",
        "x-rp-client": "h5_1.0.0",
        "Cookie": "" + $.UVCookie + iiiIll1I + " " + cookie,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    l1IillI1.headers.Cookie = l1IillI1.headers.Cookie.replace(/;\s*$/, "");
    l1IillI1.headers.Cookie = l1IillI1.headers.Cookie.replace(/;([^\s])/g, "; $1");
    if ($.url2) l1IillI1.headers.Referer = $.url2;
    l1IillI1 = i1li1lI(l1IillI1);
    var iIl1llIl = $;
    if (l1llll1l && $.proxyArr.type && $.proxyArr.type == "socks") iIl1llIl = l1llll1l;
    iIl1llIl.get(l1IillI1, async (l1lli1, i11liIIi, lI1ii1I1) => {
      try {
        if (l1lli1) {
          var li1Iii1 = Il11iiil(l1lli1, i11liIIi);
          console.log("" + $.toStr(l1lli1));
          console.log($.name + " showCoupon API请求失败，请检查网路重试");
          if (li1Iii1) {
            await iI1III1l(false);
            if (!$.switchProxies) await Ii1il11(...arguments);
          }
        } else {
          let lii1111 = $.toObj(lI1ii1I1, lI1ii1I1);
          if (typeof lii1111 == "object") {
            if (lii1111.msg) console.log(lii1111.msg);
            if (lii1111.msg.indexOf("不展示弹层") > -1) $.again = true;
            if (lii1111.msg.indexOf("领取上限") > -1) $.runArr[$.UserName] = true;
            lii1111.msg.indexOf("上限") === -1 && lii1111.msg.indexOf("登录") === -1 && ($.flag = 1);
            if (lii1111.msg.indexOf("活动已结束") > -1 || lii1111.msg.indexOf("活动未开始") > -1) {
              $.endFlag = true;
              return;
            }
            if (lii1111.data.uiUpdateTime) $.uiUpdateTime = lii1111.data.uiUpdateTime;
            if (typeof lii1111.data !== "undefined" && typeof lii1111.data.groupData !== "undefined" && typeof lii1111.data.groupData.joinNum !== "undefined") {
              $.joinNum = lii1111.data.groupData.joinNum;
              let liIIl1l = 0;
              for (let iiIii1l1 of lii1111.data.groupData.groupInfo) {
                if (liIIl1l < iiIii1l1.num) liIIl1l = iiIii1l1.num;
              }
              if ($.shareCount > 0 && liIIl1l > $.shareCount) liIIl1l = $.shareCount;
              $.shareCodeArr[$.UserName] && ($.shareCodeArr[$.UserName].count = liIIl1l);
              $.shareCodeArr.shareCount = liIIl1l;
              if (liIIl1l <= $.joinNum) {
                if (!$.shareCodeArr[$.UserName]) $.shareCodeArr[$.UserName] = {};
                $.shareCodeArr[$.UserName].count = $.joinNum;
                iliI111 = false;
              }
              console.log("【账号" + $.index + "】" + ($.nickName || $.UserName) + " " + $.joinNum + "/" + liIIl1l + "人");
            }
            lii1111.msg.indexOf("活动已结束") > -1 && (iliI111 = false);
            if (typeof lii1111.data !== "undefined" && typeof lii1111.data.groupData !== "undefined" && typeof lii1111.data.groupData.groupInfo !== "undefined") {
              var I1lIiIll = $.time("d", new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000);
              for (let lli1iiiI of lii1111.data.groupData.groupInfo || []) {
                if (lli1iiiI.status == 2) console.log("打卡满可以领取" + lli1iiiI.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await ll1l111i("", 3);else taskFlag + "" === "true" && lli1iiiI.status == 1 && I1lIiIll == $.time("d", lli1iiiI.dayTaskStartTime) && !$.taskPinArr[$.UserName] && ($.taskPinArr[$.UserName] = {
                  "actId": $.actId,
                  "unionActId": "31192",
                  "platform": ilillll,
                  "d": llIiII,
                  "origin": $.origin,
                  "cookie": "" + $.UVCookie + iiiIll1I + " " + cookie
                });
              }
            }
          } else console.log(lI1ii1I1);
        }
      } catch (iilIl1li) {
        $.logErr(iilIl1li, i11liIIi);
      } finally {
        lI1liilI(iliI111);
      }
    });
  });
}
function i1i1I11I() {
  if ($.shareCodeArr[$.UserName]) {
    console.log("【账号" + $.index + "】缓存分享码:" + $.shareCodeArr[$.UserName].code.replace(/.+(.{3})/, "***$1"));
    return;
  }
  return new Promise(async i1li111I => {
    let i1iiiIl = "",
      ii111ill = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const I1I1I1il = {
        "unionActId": "31192",
        "actId": $.actId,
        "platform": ilillll,
        "unionShareId": "",
        "d": llIiII,
        "supportPic": 2
      },
      illI1ii1 = {
        "appid": "u_hongbao",
        "body": JSON.stringify(I1I1I1il),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    l1lilII.c10dc = l111IIl1("c10dc", $.UA);
    let i1Ii1l1 = l1lilII.c10dc.__genH5st(illI1ii1, $.UserName);
    i1iiiIl = i1Ii1l1.h5st || "";
    let i1Iiiiil = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + illI1ii1.appid + "&_=" + ii111ill + "&loginType=2&body=" + $.toStr(I1I1I1il) + "&client=" + illI1ii1.client + "&clientVersion=" + illI1ii1.clientVersion + "&h5st=" + i1iiiIl + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Accept-Encoding": "gzip,deflate",
        "Connection": "keep-alive",
        "x-rp-client": "h5_1.0.0",
        "Cookie": "" + $.UVCookie + iiiIll1I + " " + cookie,
        "origin": $.origin,
        "Referer": $.origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    i1Iiiiil.headers.Cookie = i1Iiiiil.headers.Cookie.replace(/;\s*$/, "");
    i1Iiiiil.headers.Cookie = i1Iiiiil.headers.Cookie.replace(/;([^\s])/g, "; $1");
    i1Iiiiil = i1li1lI(i1Iiiiil);
    var illi1II1 = $;
    if (l1llll1l && $.proxyArr.type && $.proxyArr.type == "socks") illi1II1 = l1llll1l;
    illi1II1.get(i1Iiiiil, async (I1iil11I, ii1l11li, i1Iiiii1) => {
      try {
        if (I1iil11I) {
          var iIl1i1i = Il11iiil(I1iil11I, ii1l11li);
          console.log("" + $.toStr(I1iil11I));
          console.log($.name + " shareUnionCoupon API请求失败，请检查网路重试");
          if (iIl1i1i) {
            await iI1III1l(false);
            if (!$.switchProxies) await i1i1I11I();
          }
        } else {
          let li1IliIi = $.toObj(i1Iiiii1, i1Iiiii1);
          if (typeof li1IliIi == "object") {
            if (li1IliIi.code == 0 && li1IliIi.data && li1IliIi.data.shareUrl) {
              let iil1iiI = li1IliIi.data.shareUrl.match(/\?s=([^&]+)/) && li1IliIi.data.shareUrl.match(/\?s=([^&]+)/)[1] || "";
              iil1iiI && (console.log("【账号" + $.index + "】分享码：" + iil1iiI.replace(/.+(.{3})/, "***$1")), $.shareCodeArr[$.UserName] = {
                "code": iil1iiI,
                "count": $.joinNum
              });
            }
          } else console.log(i1Iiiii1);
        }
      } catch (I11Il1I) {
        $.logErr(I11Il1I, ii1l11li);
      } finally {
        i1li111I();
      }
    });
  });
}
function l11IIIll() {
  return new Promise(iIil1lIi => {
    let lillIIIi = {
      "url": $.url1,
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + iiiIll1I + " " + cookie,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var Iiiiili = $;
    Iiiiili.get(lillIIIi, async (lIiiIli1, i1l1liI, II1IliIl) => {
      try {
        if (lIiiIli1) {
          var I1I1I1I1 = Il11iiil(lIiiIli1, i1l1liI);
          console.log("" + $.toStr(lIiiIli1));
          console.log($.name + " getUrl1 API请求失败，请检查网路重试");
          if (I1I1I1I1) {
            await iI1III1l(false);
            if (!$.switchProxies) await l11IIIll();
          }
        } else ilIIill(i1l1liI), $.url2 = i1l1liI && i1l1liI.headers && (i1l1liI.headers.location || i1l1liI.headers.Location || "") || "", $.url2 = decodeURIComponent($.url2), $.url2 = $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/) && $.url2.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com\/mall[^'"]+)/)[1] || "";
      } catch (iIiI1i1) {
        $.logErr(iIiI1i1, i1l1liI);
      } finally {
        iIil1lIi(II1IliIl);
      }
    });
  });
}
function l11IiIli() {
  return new Promise(Iil1ii1l => {
    let lliiiI1l = {
      "url": "https://u.jd.com/" + llIiII + ($.shareCode && "?s=" + $.shareCode || ""),
      "followRedirect": false,
      "headers": {
        "Cookie": "" + $.UVCookie + iiiIll1I + " " + cookie,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var IIlll1I1 = $;
    IIlll1I1.get(lliiiI1l, async (lliiIil1, llIIlli, i1l1iiIi) => {
      try {
        if (lliiIil1) {
          var IlIlI11 = Il11iiil(lliiIil1, llIIlli);
          console.log("" + $.toStr(lliiIil1));
          console.log($.name + " getUrl API请求失败，请检查网路重试");
          if (IlIlI11) {
            await iI1III1l(false);
            if (!$.switchProxies) await l11IiIli();
          }
        } else ilIIill(llIIlli), $.url1 = i1l1iiIi && i1l1iiIi.match(/(https:\/\/u\.jd\.com\/jda[^']+)/) && i1l1iiIi.match(/(https:\/\/u\.jd\.com\/jda[^']+)/)[1] || "";
      } catch (Ili1lI1I) {
        $.logErr(Ili1lI1I, llIIlli);
      } finally {
        Iil1ii1l(i1l1iiIi);
      }
    });
  });
}
async function lilIil1i() {
  l1lilII["7b74b"] = l111IIl1("7b74b", $.UA);
  l1lilII["0d977"] = l111IIl1("0d977", $.UA);
  resMsg = "";
  await iiIilII1();
  resMsg && (message += "【京东账号" + $.index + "】\n" + resMsg);
}
function iiIilII1(li1iilil = 1) {
  return new Promise(lli11I1i => {
    var ilIIiiII = {
      "actId": $.taskPinArr[$.UserName].actId,
      "unionActId": $.taskPinArr[$.UserName].unionActId,
      "platform": $.taskPinArr[$.UserName].platform,
      "d": $.taskPinArr[$.UserName].d,
      "taskType": 1,
      "prstate": 0
    };
    let iilIiI11 = "",
      iI1liII = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const liI1II1 = {
      "appid": "u_hongbao",
      "body": JSON.stringify(ilIIiiII),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.0.0",
      "functionId": "queryFullGroupInfoMap"
    };
    let iIillli = l1lilII["7b74b"].__genH5st(liI1II1, $.UserName);
    iilIiI11 = iIillli.h5st || "";
    let i1Il111 = "https://api.m.jd.com/api?functionId=queryFullGroupInfoMap&appid=" + liI1II1.appid + "&_=" + iI1liII + "&loginType=2&body=" + $.toStr(ilIIiiII) + "&client=" + liI1II1.client + "&clientVersion=" + liI1II1.clientVersion + "&h5st=" + iilIiI11 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      I11li111 = {
        "url": i1Il111,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Accept-Encoding": "gzip,deflate",
          "Connection": "keep-alive",
          "x-rp-client": "h5_1.0.0",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var lIiil111 = $;
    lIiil111.get(I11li111, async (l1li111, lIilillI, I1lIIlll) => {
      try {
        if (l1li111) console.log("" + $.toStr(l1li111)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var lIiiiiIl = $.toObj(I1lIIlll, I1lIIlll);
          if (lIiiiiIl.code == 200 && lIiiiiIl.data) {
            if (li1iilil == 2) {
              console.log("任务完成");
              if (li1iilil == 2 && lIiiiiIl.data.longGroupData && lIiiiiIl.data.longGroupData.groupInfo.length > 0) {
                var li1li1I = lIiiiiIl.data.longGroupData.groupInfo;
                for (let iiiliIi of li1li1I || []) {
                  iiiliIi.status == 2 && (console.log("打卡满可以领取" + iiiliIi.hbPrize + "元红包🧧"), await $.wait(parseInt(Math.random() * 2000 + 2000, 10)), await iIiliiI1("", 3));
                }
              }
            } else {
              if (li1iilil == 1 && lIiiiiIl.data.dayGroupData && lIiiiiIl.data.dayGroupData.groupInfo.length > 0) {
                var li1li1I = lIiiiiIl.data.dayGroupData.groupInfo,
                  lIl1iII1 = 0;
                for (let Il1lIi11 of li1li1I) {
                  if (Il1lIi11.taskType == 2 && Il1lIi11.status == 2) lIl1iII1++, console.log("领取邀请 " + Number(Il1lIi11.joinNum) + " 人奖励"), await iIiliiI1("", 2), await $.wait(2000);else {
                    if (Il1lIi11.taskType == 100 && (Il1lIi11.status == 1 || Il1lIi11.status == 2)) Il1lIi11.status == 1 && (console.log("做任务", Il1lIi11.showInfo), await iIlIIlIl("", Il1lIi11.taskId), await $.wait(2000)), console.log("抽奖", Il1lIi11.showInfo), await iIiliiI1("", 8, Il1lIi11.taskId), await $.wait(2000);else {
                      if (Il1lIi11.taskType == 1 && Il1lIi11.status == 1) {
                        console.log("做任务", Il1lIi11.showInfo, Il1lIi11.taskId);
                        var I111l1ii = "";
                        if (Il1lIi11.adInfo) I111l1ii = Il1lIi11.adInfo.target_url;else Il1lIi11.taskTargetUrl && (I111l1ii = Il1lIi11.taskTargetUrl);
                        await i111li1l(Il1lIi11.componentId, Il1lIi11.taskId, I111l1ii);
                        await $.wait(7000);
                        await iiIilII1(2, Il1lIi11.taskId);
                        await $.wait(2000);
                      } else {
                        if (Il1lIi11.taskType == 102 && Il1lIi11.status == 1) {
                          console.log("做任务", Il1lIi11.showInfo);
                          await $.wait(7000);
                          await Il11Iiii(decodeURIComponent(Il1lIi11.taskTargetUrl));
                          await $.wait(2000);
                          await iiIilII1(2, Il1lIi11.showInfo);
                        } else lIl1iII1++;
                      }
                    }
                  }
                }
                lIl1iII1 >= li1li1I.length && console.log("任务已经做完了");
              } else console.log("获取不到任务");
            }
          } else console.log(lIiiiiIl);
        }
      } catch (IiIiIi1i) {
        $.logErr(IiIiIi1i, lIilillI);
      } finally {
        lli11I1i(I1lIIlll);
      }
    });
  });
}
function Il11Iiii(iIIlII1i) {
  return new Promise(async I11iIi1i => {
    let lI11ilii = "";
    var iii1i111 = IIIi1lii(iIIlII1i, "unionActTask");
    const ll111lli = {
        "unionActTask": iii1i111
      },
      illlllIi = {
        "appid": "u_activity_h5",
        "body": JSON.stringify(ll111lli),
        "client": "apple",
        "clientVersion": "",
        "functionId": "completeUnionTask"
      };
    l1lilII["66248"] = l111IIl1("66248", $.UA);
    let iIllIIiI = l1lilII["66248"].__genH5st(illlllIi, $.UserName);
    lI11ilii = iIllIIiI.h5st || "";
    let I1lIii1l = {
      "url": "https://api.m.jd.com/api?functionId=completeUnionTask&appid=" + illlllIi.appid + "&loginType=2&body=" + $.toStr(ll111lli) + "&client=" + illlllIi.client + "&clientVersion=" + illlllIi.clientVersion + "&h5st=" + lI11ilii + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": "https://jingfen.jd.com",
        "Referer": iIIlII1i + "&isLoginBack=true",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    I1lIii1l.headers.Cookie = I1lIii1l.headers.Cookie.replace(/;\s*$/, "");
    I1lIii1l.headers.Cookie = I1lIii1l.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var IIliIli1 = $;
    IIliIli1.get(I1lIii1l, async (lilI11lI, Ii1IIli, liliIIii) => {
      try {
        if (lilI11lI) console.log("" + $.toStr(lilI11lI)), console.log($.name + " completeUnionTask API请求失败，请检查网路重试");else {
          let llIli1i = $.toObj(liliIIii, liliIIii);
          typeof llIli1i == "object" && llIli1i.code == 0 && llIli1i.msg ? console.log(llIli1i.msg) : console.log(liliIIii);
        }
      } catch (li1lillI) {
        $.logErr(li1lillI, Ii1IIli);
      } finally {
        I11iIi1i();
      }
    });
  });
}
function iIlIIlIl(iI1IlllI, IliilIi1) {
  return new Promise(async lIlIll1I => {
    let III11lII = "",
      li1IIl1l = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const l1Ii1IiI = {
        "unionActId": "31192",
        "actId": $.taskPinArr[$.UserName].actId,
        "platform": $.taskPinArr[$.UserName].platform,
        "unionShareId": iI1IlllI,
        "d": llIiII,
        "supportPic": 2,
        "taskId": IliilIi1
      },
      lIil1II = {
        "appid": "u_hongbao",
        "body": JSON.stringify(l1Ii1IiI),
        "client": "apple",
        "clientVersion": $.UA.split(";")[2] || "1.1.0",
        "functionId": "shareUnionCoupon"
      };
    l1lilII.c10dc = l111IIl1("c10dc", $.UA);
    let i1lIilIl = l1lilII.c10dc.__genH5st(lIil1II, $.UserName);
    III11lII = i1lIilIl.h5st || "";
    let I1ilill1 = {
      "url": "https://api.m.jd.com/api?functionId=shareUnionCoupon&appid=" + lIil1II.appid + "&_=" + li1IIl1l + "&loginType=2&body=" + $.toStr(l1Ii1IiI) + "&client=" + lIil1II.client + "&clientVersion=" + lIil1II.clientVersion + "&h5st=" + III11lII + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": "__jd_ref_cls=hongbao_quyaoqing_ck; " + $.taskPinArr[$.UserName].cookie,
        "origin": $.taskPinArr[$.UserName].origin,
        "Referer": $.taskPinArr[$.UserName].origin + "/",
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    I1ilill1.headers.Cookie = I1ilill1.headers.Cookie.replace(/;\s*$/, "");
    I1ilill1.headers.Cookie = I1ilill1.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var iIi11i = $;
    iIi11i.get(I1ilill1, async (IllliiiI, ll11I11l, l11) => {
      try {
        if (IllliiiI) console.log("" + $.toStr(IllliiiI)), console.log($.name + " doTaskUnionShare API请求失败，请检查网路重试");else {
          let i1IIl1ii = $.toObj(l11, l11);
          if (typeof i1IIl1ii == "object") {} else console.log(l11);
        }
      } catch (Il1il1l) {
        $.logErr(Il1il1l, ll11I11l);
      } finally {
        lIlIll1I();
      }
    });
  });
}
function iIiliiI1(ll11llil = "", l1i1lilI = 8, IilIi1l = "") {
  return new Promise(async l11ili11 => {
    let llIl1lii = "",
      II1l1l11 = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    var i1i1I1li = {
      "platform": $.taskPinArr[$.UserName].platform,
      "unionActId": "31192",
      "actId": $.taskPinArr[$.UserName].actId,
      "d": llIiII,
      "unionShareId": ll11llil,
      "type": l1i1lilI,
      "qdPageId": "MO-J2011-1",
      "mdClickId": "jxhongbao_ck",
      "actType": 1
    };
    IilIi1l && (i1i1I1li.taskId = IilIi1l, i1i1I1li.agreeState = 1);
    const Ii11iii1 = {
      "appid": "u_hongbao",
      "body": JSON.stringify(i1i1I1li),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "getCoupons"
    };
    l1lilII.c822a = l111IIl1("c822a", $.UA);
    let liiiIl1 = l1lilII.c822a.__genH5st(Ii11iii1, $.UserName);
    llIl1lii = liiiIl1.h5st || "";
    let lI1IIlIi = "",
      i1i1lllI = {
        "url": "https://api.m.jd.com/api",
        "body": "functionId=getCoupons&appid=" + Ii11iii1.appid + "&_=" + II1l1l11 + "&loginType=2&body=" + $.toStr(i1i1I1li) + "&client=" + Ii11iii1.client + "&clientVersion=" + Ii11iii1.clientVersion + "&h5st=" + llIl1lii + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
          "Cookie": "__jd_ref_cls=hongbao_shiyongpinquchoujiang_ck; " + $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    i1i1lllI.headers.Cookie = i1i1lllI.headers.Cookie.replace(/;\s*$/, "");
    i1i1lllI.headers.Cookie = i1i1lllI.headers.Cookie.replace(/;([^\s])/g, "; $1");
    var iilil1 = $;
    iilil1.post(i1i1lllI, async (IiIilI11, lilllil, lliiIlII) => {
      try {
        if (IiIilI11) console.log("" + $.toStr(IiIilI11)), console.log($.name + " doTaskGetCoupons API请求失败，请检查网路重试");else {
          let lllllI1i = $.toObj(lliiIlII, lliiIlII);
          if (typeof lllllI1i == "object") {
            lllllI1i.msg && (lI1IIlIi = lllllI1i.msg, console.log(lllllI1i.msg));
            if (lllllI1i.code == 0 && lllllI1i.data) {
              let ll1iIli = "";
              for (let liIlli1i of lllllI1i.data.couponList) {
                ll1iIli += "" + (ll1iIli ? "\n" : "");
                $.getlj = true;
                if (liIlli1i.type == 1) ll1iIli += "获得[红包]🧧" + liIlli1i.discount + "元 使用时间:" + $.time("yyyy-MM-dd", liIlli1i.beginTime) + " " + $.time("yyyy-MM-dd", liIlli1i.endTime);else {
                  if (liIlli1i.type == 3) ll1iIli += "获得[优惠券]🎟️满" + liIlli1i.quota + "减" + liIlli1i.discount + " 使用时间:" + $.time("yyyy-MM-dd", liIlli1i.beginTime) + " " + $.time("yyyy-MM-dd", liIlli1i.endTime);else {
                    if (liIlli1i.type == 6) ll1iIli += "获得[打折券]🎫满" + liIlli1i.quota + "打" + liIlli1i.discount * 10 + "折 使用时间:" + $.time("yyyy-MM-dd", liIlli1i.beginTime) + " " + $.time("yyyy-MM-dd", liIlli1i.endTime);else {
                      if (liIlli1i.type == 17) ll1iIli += "获得[" + (liIlli1i.shopName || "京东支付立减") + "] " + (liIlli1i.limitStr && liIlli1i.limitStr + " " || "") + "领取之日起" + liIlli1i.limitTime + "天有效";else {
                        var IllI1l11 = "未知";
                        ll1iIli += "获得[" + (liIlli1i.shopName || IllI1l11) + "] " + $.toStr(liIlli1i, liIlli1i);
                      }
                    }
                  }
                }
              }
              ll1iIli && (resMsg += ll1iIli + "\n", console.log(ll1iIli));
            }
          } else console.log(lliiIlII);
        }
      } catch (IiIlilIi) {
        $.logErr(IiIlilIi, lilllil);
      } finally {
        l11ili11(lI1IIlIi);
      }
    });
  });
}
function IlI1Ii1i(Il1Iil1l, l11IilIi) {
  return new Promise(IlIlii => {
    var I1II1l1i = {
      "encryptProjectId": Il1Iil1l,
      "encryptAssignmentId": l11IilIi,
      "sourceCode": "ace36658",
      "actionType": 1,
      "itemId": "1"
    };
    let liiiiIi1 = "",
      iiIIlI1I = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const II1i11i1 = {
      "appid": "u_hongbao",
      "body": JSON.stringify(I1II1l1i),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.1.0",
      "functionId": "doInteractiveAssignment"
    };
    let l1i1liIl = l1lilII["7b74b"].__genH5st(II1i11i1, $.UserName);
    liiiiIi1 = l1i1liIl.h5st || "";
    let I1IiiIII = "https://api.m.jd.com/api?functionId=doInteractiveAssignment&appid=" + II1i11i1.appid + "&_=" + iiIIlI1I + "&loginType=2&body=" + $.toStr(I1II1l1i) + "&client=" + II1i11i1.client + "&clientVersion=" + II1i11i1.clientVersion + "&h5st=" + liiiiIi1 + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      IlIiiIIi = {
        "url": I1IiiIII,
        "headers": {
          "accept": "*/*",
          "Accept-Language": "zh-cn",
          "Cookie": $.taskPinArr[$.UserName].cookie,
          "origin": $.taskPinArr[$.UserName].origin,
          "Referer": $.taskPinArr[$.UserName].origin + "/",
          "User-Agent": $.UA
        },
        "timeout": 10000
      };
    var Il1ii1ii = $;
    Il1ii1ii.get(IlIiiIIi, async (ll11II1I, li1l1lII, i1lil11) => {
      try {
        if (ll11II1I) console.log("" + $.toStr(ll11II1I)), console.log($.name + " dotask API请求失败，请检查网路重试");else {
          var ll1l1i1I = $.toObj(i1lil11, i1lil11);
          ll1l1i1I.code == 0 ? console.log(ll1l1i1I.msg) : console.log(ll1l1i1I);
        }
      } catch (lIii1i1) {
        $.logErr(lIii1i1, li1l1lII);
      } finally {
        IlIlii(i1lil11);
      }
    });
  });
}
function i111li1l(I1Il1II, lIlilII, lii11lII) {
  return new Promise(l1ll1Il1 => {
    var iIIiilI1 = {
      "timerId": I1Il1II,
      "uniqueId": lIlilII,
      "jumpUrl": encodeURIComponent(lii11lII),
      "jumpType": 1
    };
    let lIllIi = "",
      II1lli = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000;
    const I1Iillil = {
      "appid": "u_hongbao",
      "body": JSON.stringify(iIIiilI1),
      "client": "apple",
      "clientVersion": $.UA.split(";")[2] || "1.0.0",
      "functionId": "apStartTiming"
    };
    let III11li1 = l1lilII["0d977"].__genH5st(I1Iillil, $.UserName);
    lIllIi = III11li1.h5st || "";
    let i11iill1 = {
      "url": "https://api.m.jd.com/api",
      "body": "functionId=apStartTiming&appid=" + I1Iillil.appid + "&_=" + II1lli + "&loginType=2&body=" + $.toStr(iIIiilI1) + "&client=" + I1Iillil.client + "&clientVersion=" + I1Iillil.clientVersion + "&h5st=" + lIllIi + ($.eid_token ? "&x-api-eid-token=" + $.eid_token : ""),
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        "Accept-Encoding": "gzip,deflate",
        "Connection": "keep-alive",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": $.taskPinArr[$.UserName].origin,
        "Referer": $.taskPinArr[$.UserName].origin + "/",
        "User-Agent": $.UA,
        "x-rp-client": "h5_1.0.0"
      },
      "timeout": 10000
    };
    var iIi11Ii = $;
    iIi11Ii.post(i11iill1, async (lIlIi11i, ll11i1I1, i1I1I1I1) => {
      try {
        if (lIlIi11i) console.log("" + $.toStr(lIlIi11i)), console.log($.name + " dotask1 API请求失败，请检查网路重试");
      } catch (IIIliii) {
        $.logErr(IIIliii, ll11i1I1);
      } finally {
        l1ll1Il1(i1I1I1I1);
      }
    });
  });
}
function li11iiiI(lliii1il, llllIIII, lii1llil) {
  return new Promise(lilIIll => {
    var iliI1iii = "{\"dataSource\":\"babelInteractive\",\"method\":\"customDoInteractiveAssignmentForBabel\",\"reqParams\":\"{\\\"itemId\\\":\\\"1\\\",\\\"encryptProjectId\\\":\\\"" + lliii1il + "\\\",\\\"encryptAssignmentId\\\":\\\"" + llllIIII + "\\\"}\",\"sdkVersion\":\"1.0.0\",\"clientLanguage\":\"zh\"}";
    let I1l111ii = new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000,
      lI111i1i = "https://api.m.jd.com/?client=wh5&clientVersion=1.0.0&functionId=qryViewkitCallbackResult&body=" + iliI1iii + "&_timestamp=" + I1l111ii;
    origin = lii1llil.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/) && lii1llil.match(/(https:\/\/\S{3,7}[\.m]{0,}\.jd\.com)/)[1] || "";
    let IlI1iiI1 = {
      "url": lI111i1i,
      "headers": {
        "accept": "*/*",
        "Accept-Language": "zh-cn",
        "Cookie": $.taskPinArr[$.UserName].cookie,
        "origin": origin,
        "Referer": lii1llil,
        "User-Agent": $.UA
      },
      "timeout": 10000
    };
    var llIlIIi = $;
    llIlIIi.get(IlI1iiI1, async (IiII1iII, l1iii1iI, l1iI1I1i) => {
      try {
        if (IiII1iII) console.log("" + $.toStr(IiII1iII)), console.log($.name + " callbackResult API请求失败，请检查网路重试");else {
          var lIiiiI11 = $.toObj(l1iI1I1i, l1iI1I1i);
          lIiiiI11.code == 0 ? console.log(lIiiiI11.msg) : console.log(lIiiiI11);
        }
      } catch (ll1ili1) {
        $.logErr(ll1ili1, l1iii1iI);
      } finally {
        lilIIll(l1iI1I1i);
      }
    });
  });
}
function ilIIill(II11l1lI) {
  let IIIIIl1 = II11l1lI && II11l1lI.headers && (II11l1lI.headers["set-cookie"] || II11l1lI.headers["Set-Cookie"] || "") || "",
    IIliiiIl = "";
  if (IIIIIl1) {
    if (typeof IIIIIl1 != "object") IIliiiIl = IIIIIl1.split(",");else IIliiiIl = IIIIIl1;
    for (let lll1IIlI of IIliiiIl) {
      let llIlll11 = lll1IIlI.split(";")[0].trim();
      if (llIlll11.split("=")[1]) {
        llIlll11.split("=")[0] == "unpl" && llIlll11.split("=")[1] && ($.unpl = llIlll11.split("=")[1]);
        if (iiiIll1I.indexOf(llIlll11.split("=")[1]) == -1) iiiIll1I += llIlll11.replace(/ /g, "") + "; ";
      }
    }
  }
}
function Il11iiil(lIlIIi11, lIIiIlI) {
  var Il1IiI = false;
  if (lIl11l1) {
    if (/statusCode=407/.test(lIlIIi11)) {
      console.log("代理连接失败");
      Il1IiI = true;
      if ($.getProxyIp) for (let i1lI1Iil of proxyGetIpUrl) {
        if (!i1lI1Iil || i1lI1Iil.status == false) continue;
        if (i1lI1Iil.proxyArr && i1lI1Iil.proxyArr.host == $.proxyArr.host && i1lI1Iil.proxyArr.port == $.proxyArr.port) {
          i1lI1Iil.errorCount++;
          i1lI1Iil.errorCount >= 3 && (console.log("代理池(" + i1lI1Iil.index + ")请求多次失败，禁用"), i1lI1Iil.status = false);
          break;
        }
      }
    } else {
      if (/ESOCKETTIMEDOUT|Timeout awaiting|ETIMEDOUT/.test(lIlIIi11)) console.log("请求超时"), Il1IiI = true;else /socket|connect ECONNREFUSED/.test(lIlIIi11) && (console.log("代理连接失败"), Il1IiI = true);
    }
  }
  return Il1IiI && ($.switchProxies = true), Il1IiI;
}
function i1li1lI(ii1li11) {
  if ($.proxyArr.host && $.proxyArr.port) {
    if ($.proxyArr.type == "socks") {
      var I1l1iiIi = $.proxyArr.type == "socks" ? "socks5" : "http";
      let l11i1lil = I1l1iiIi + "://" + ($.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password + "@" : "") + $.proxyArr.host + ":" + $.proxyArr.port;
      if (I1l1iiIi == "http") Object.assign(ii1li11, {
        "proxy": l11i1lil
      });else {
        if (lilIIi11) {
          const I1iII11 = new lilIIi11(l11i1lil);
          Object.assign(ii1li11, {
            "agent": I1iII11
          });
        }
      }
      delete ii1li11.headers["Accept-Encoding"];
      delete ii1li11.headers["accept-encoding"];
    } else {
      const ilIiiiIl = {
        "http": ll1ll1li.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        }),
        "https": ll1ll1li.httpsOverHttp({
          "proxy": {
            "host": $.proxyArr.host,
            "port": $.proxyArr.port * 1,
            "proxyAuth": $.proxyArr.auth && $.proxyArr.auth.username ? $.proxyArr.auth.username + ":" + $.proxyArr.auth.password : ""
          }
        })
      };
      Object.assign(ii1li11, {
        "agent": ilIiiiIl
      });
    }
    Object.assign(ii1li11, {
      "retry": {
        "limit": 0
      }
    });
  }
  return ii1li11;
}
function l11lI11i(I1illiil) {
  if (I1illiil.status == false) return true;
  return I1illiil.count++, new Promise(IilIlllI => {
    let l1Iii1II = true;
    $.get({
      "url": I1illiil.url,
      "timeout": 10000
    }, async (lIIlil1i, lIIillll, llI1l1lI) => {
      try {
        if (lIIlil1i) console.log("" + $.toStr(lIIlil1i)), console.log($.name + " 获取ip代理池(" + I1illiil.index + ") API请求失败，请检查网路重试");else {
          let iill11l1 = $.toStr(llI1l1lI, llI1l1lI),
            Iilli1I1 = iill11l1.match(/((\d{0,3}\.){3}\d{0,3}):(\d{0,5})/);
          if (Iilli1I1 && Iilli1I1.length == 4) {
            $.switchProxies && ($.proxyArr.host != Iilli1I1[1] || $.proxyArr.port != Iilli1I1[3] ? console.log("切换成功！") : console.log("切换失败，IP不变！"));
            l1Iii1II = false;
            $.proxyArr.host = Iilli1I1[1];
            $.proxyArr.port = Iilli1I1[3];
            $.proxyArr.pin = [];
            $.proxyArr.auth = "";
            var iilIiiii = new RegExp(Iilli1I1[1] + ":" + Iilli1I1[3] + ":(\\S+):([^\\s\"]+)");
            if (iilIiiii.test(iill11l1)) {
              var IllI1II1 = iill11l1.match(iilIiiii);
              IllI1II1.length == 3 && ($.proxyArr.auth = {
                "username": IllI1II1[1],
                "password": IllI1II1[2]
              });
            }
            $.getProxyIp = true;
            I1illiil.count = 0;
            I1illiil.proxyArr = $.proxyArr;
          } else console.log("获取ip代理池(" + I1illiil.index + ")失败\n" + llI1l1lI), /订单不存在|key无效|无可用余量|过期|充值|续费|登陆|为空|添加|联系|未检索|Error/.test(llI1l1lI) && (I1illiil.count = 999);
        }
      } catch (liIlII11) {
        $.logErr(liIlII11, lIIillll);
        console.log(llI1l1lI);
      } finally {
        IilIlllI(l1Iii1II);
      }
    });
  });
}
async function iI1III1l(Iii111i1 = true, llIl1IIl = 1) {
  if (Iii111i1) {
    $.UA = "jdapp;iPhone;12.3.1;;;M/5.0;appBuild/168960;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
      "ciphertype": 5,
      "cipher": {
        "ud": "",
        "sv": "CJGkCm==",
        "iad": ""
      },
      "ts": Math.floor(new Date().getTime() / 1000),
      "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
      "version": "1.0.3",
      "appname": "com.360buy.jdmobile",
      "ridx": -1
    })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;";
    llIl1IIl != 1 && ($.UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1");
  }
  try {
    if (lIl11l1) {
      let ili11ilI = true;
      if (proxyGetIpUrl && ($.switchProxies || !$.proxyArr.host || !$.getProxyIp)) {
        let i11I1i11 = 1;
        do {
          $.getProxyIp = false;
          for (let II1IillI of proxyGetIpUrl) {
            if (!II1IillI || II1IillI.status == false) continue;
            ili11ilI = await l11lI11i(II1IillI);
            if (!ili11ilI) break;
            II1IillI.count >= 3 && (console.log("代理池(" + II1IillI.index + ")获取多次失败，禁用"), II1IillI.status = false);
          }
          i11I1i11++;
        } while (ili11ilI && i11I1i11 <= 4);
      } else proxyGetIpUrl && $.proxyArr.host && (ili11ilI = false);
      ili11ilI && ($.proxyArr = {}, console.log("无可用代理地址，使用本地IP\n"));
      if ($.proxyArr.host && $.proxyArr.port) console.log("代理" + ($.getProxyIp ? "池" : "") + "地址:" + $.proxyArr.host + ":" + $.proxyArr.port + "\n");
      $.switchProxies = false;
    }
  } catch (IlII1liI) {
    console.log(IlII1liI);
  }
}
function lli1IIl(IlIIlIli) {
  if (typeof IlIIlIli == "string") try {
    return JSON.parse(IlIIlIli);
  } catch (ilI1Illl) {
    return console.log(ilI1Illl), $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie"), [];
  }
}
async function lIlillll() {
  var iliI11li = function () {
    function iIllliIi(Iii11iii, iIi1ilI1) {
      Iii11iii = [Iii11iii[0] >>> 16, 65535 & Iii11iii[0], Iii11iii[1] >>> 16, 65535 & Iii11iii[1]];
      iIi1ilI1 = [iIi1ilI1[0] >>> 16, 65535 & iIi1ilI1[0], iIi1ilI1[1] >>> 16, 65535 & iIi1ilI1[1]];
      var IIlilIll = [0, 0, 0, 0];
      return IIlilIll[3] += Iii11iii[3] + iIi1ilI1[3], IIlilIll[2] += IIlilIll[3] >>> 16, IIlilIll[3] &= 65535, IIlilIll[2] += Iii11iii[2] + iIi1ilI1[2], IIlilIll[1] += IIlilIll[2] >>> 16, IIlilIll[2] &= 65535, IIlilIll[1] += Iii11iii[1] + iIi1ilI1[1], IIlilIll[0] += IIlilIll[1] >>> 16, IIlilIll[1] &= 65535, IIlilIll[0] += Iii11iii[0] + iIi1ilI1[0], IIlilIll[0] &= 65535, [IIlilIll[0] << 16 | IIlilIll[1], IIlilIll[2] << 16 | IIlilIll[3]];
    }
    function IlIiilii(iI11Illi, l1illi1l) {
      iI11Illi = [iI11Illi[0] >>> 16, 65535 & iI11Illi[0], iI11Illi[1] >>> 16, 65535 & iI11Illi[1]];
      l1illi1l = [l1illi1l[0] >>> 16, 65535 & l1illi1l[0], l1illi1l[1] >>> 16, 65535 & l1illi1l[1]];
      var l1ililiI = [0, 0, 0, 0];
      return l1ililiI[3] += iI11Illi[3] * l1illi1l[3], l1ililiI[2] += l1ililiI[3] >>> 16, l1ililiI[3] &= 65535, l1ililiI[2] += iI11Illi[2] * l1illi1l[3], l1ililiI[1] += l1ililiI[2] >>> 16, l1ililiI[2] &= 65535, l1ililiI[2] += iI11Illi[3] * l1illi1l[2], l1ililiI[1] += l1ililiI[2] >>> 16, l1ililiI[2] &= 65535, l1ililiI[1] += iI11Illi[1] * l1illi1l[3], l1ililiI[0] += l1ililiI[1] >>> 16, l1ililiI[1] &= 65535, l1ililiI[1] += iI11Illi[2] * l1illi1l[2], l1ililiI[0] += l1ililiI[1] >>> 16, l1ililiI[1] &= 65535, l1ililiI[1] += iI11Illi[3] * l1illi1l[1], l1ililiI[0] += l1ililiI[1] >>> 16, l1ililiI[1] &= 65535, l1ililiI[0] += iI11Illi[0] * l1illi1l[3] + iI11Illi[1] * l1illi1l[2] + iI11Illi[2] * l1illi1l[1] + iI11Illi[3] * l1illi1l[0], l1ililiI[0] &= 65535, [l1ililiI[0] << 16 | l1ililiI[1], l1ililiI[2] << 16 | l1ililiI[3]];
    }
    function l1IliiIi(i1iIiiii, IlilI1l1) {
      return 32 === (IlilI1l1 %= 64) ? [i1iIiiii[1], i1iIiiii[0]] : 32 > IlilI1l1 ? [i1iIiiii[0] << IlilI1l1 | i1iIiiii[1] >>> 32 - IlilI1l1, i1iIiiii[1] << IlilI1l1 | i1iIiiii[0] >>> 32 - IlilI1l1] : (IlilI1l1 -= 32, [i1iIiiii[1] << IlilI1l1 | i1iIiiii[0] >>> 32 - IlilI1l1, i1iIiiii[0] << IlilI1l1 | i1iIiiii[1] >>> 32 - IlilI1l1]);
    }
    function IIIllI1l(iIii1I1, IillI1li) {
      return 0 === (IillI1li %= 64) ? iIii1I1 : 32 > IillI1li ? [iIii1I1[0] << IillI1li | iIii1I1[1] >>> 32 - IillI1li, iIii1I1[1] << IillI1li] : [iIii1I1[1] << IillI1li - 32, 0];
    }
    function I11IIIll(Iiil11lI, iI1liliI) {
      return [Iiil11lI[0] ^ iI1liliI[0], Iiil11lI[1] ^ iI1liliI[1]];
    }
    function l1IIlIii(l1I1IiII) {
      return I11IIIll(l1I1IiII = IlIiilii(l1I1IiII = I11IIIll(l1I1IiII = IlIiilii(l1I1IiII = I11IIIll(l1I1IiII, [0, l1I1IiII[0] >>> 1]), [4283543511, 3981806797]), [0, l1I1IiII[0] >>> 1]), [3301882366, 444984403]), [0, l1I1IiII[0] >>> 1]);
    }
    return {
      "hash128": function (lIl11lIi, ill1Ii1I) {
        var llilll11 = ill1Ii1I || 0;
        ill1Ii1I = (lIl11lIi = lIl11lIi || "").length % 16;
        var Ili1l = lIl11lIi.length - ill1Ii1I,
          iIIlIiI1 = [0, llilll11];
        llilll11 = [0, llilll11];
        for (var I1I1i1, ll1lIiil, I1l1iI1 = [2277735313, 289559509], I1i1il1l = [1291169091, 658871167], iili1lI = 0; iili1lI < Ili1l; iili1lI += 16) I1I1i1 = [255 & lIl11lIi.charCodeAt(iili1lI + 4) | (255 & lIl11lIi.charCodeAt(iili1lI + 5)) << 8 | (255 & lIl11lIi.charCodeAt(iili1lI + 6)) << 16 | (255 & lIl11lIi.charCodeAt(iili1lI + 7)) << 24, 255 & lIl11lIi.charCodeAt(iili1lI) | (255 & lIl11lIi.charCodeAt(iili1lI + 1)) << 8 | (255 & lIl11lIi.charCodeAt(iili1lI + 2)) << 16 | (255 & lIl11lIi.charCodeAt(iili1lI + 3)) << 24], ll1lIiil = [255 & lIl11lIi.charCodeAt(iili1lI + 12) | (255 & lIl11lIi.charCodeAt(iili1lI + 13)) << 8 | (255 & lIl11lIi.charCodeAt(iili1lI + 14)) << 16 | (255 & lIl11lIi.charCodeAt(iili1lI + 15)) << 24, 255 & lIl11lIi.charCodeAt(iili1lI + 8) | (255 & lIl11lIi.charCodeAt(iili1lI + 9)) << 8 | (255 & lIl11lIi.charCodeAt(iili1lI + 10)) << 16 | (255 & lIl11lIi.charCodeAt(iili1lI + 11)) << 24], iIIlIiI1 = iIllliIi(IlIiilii(iIIlIiI1 = iIllliIi(iIIlIiI1 = l1IliiIi(iIIlIiI1 = I11IIIll(iIIlIiI1, I1I1i1 = IlIiilii(I1I1i1 = l1IliiIi(I1I1i1 = IlIiilii(I1I1i1, I1l1iI1), 31), I1i1il1l)), 27), llilll11), [0, 5]), [0, 1390208809]), llilll11 = iIllliIi(IlIiilii(llilll11 = iIllliIi(llilll11 = l1IliiIi(llilll11 = I11IIIll(llilll11, ll1lIiil = IlIiilii(ll1lIiil = l1IliiIi(ll1lIiil = IlIiilii(ll1lIiil, I1i1il1l), 33), I1l1iI1)), 31), iIIlIiI1), [0, 5]), [0, 944331445]);
        switch (I1I1i1 = [0, 0], ll1lIiil = [0, 0], ill1Ii1I) {
          case 15:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 14)], 48));
          case 14:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 13)], 40));
          case 13:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 12)], 32));
          case 12:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 11)], 24));
          case 11:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 10)], 16));
          case 10:
            ll1lIiil = I11IIIll(ll1lIiil, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 9)], 8));
          case 9:
            llilll11 = I11IIIll(llilll11, ll1lIiil = IlIiilii(ll1lIiil = l1IliiIi(ll1lIiil = IlIiilii(ll1lIiil = I11IIIll(ll1lIiil, [0, lIl11lIi.charCodeAt(iili1lI + 8)]), I1i1il1l), 33), I1l1iI1));
          case 8:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 7)], 56));
          case 7:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 6)], 48));
          case 6:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 5)], 40));
          case 5:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 4)], 32));
          case 4:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 3)], 24));
          case 3:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 2)], 16));
          case 2:
            I1I1i1 = I11IIIll(I1I1i1, IIIllI1l([0, lIl11lIi.charCodeAt(iili1lI + 1)], 8));
          case 1:
            iIIlIiI1 = I11IIIll(iIIlIiI1, I1I1i1 = IlIiilii(I1I1i1 = l1IliiIi(I1I1i1 = IlIiilii(I1I1i1 = I11IIIll(I1I1i1, [0, lIl11lIi.charCodeAt(iili1lI)]), I1l1iI1), 31), I1i1il1l));
        }
        return iIIlIiI1 = I11IIIll(iIIlIiI1, [0, lIl11lIi.length]), llilll11 = iIllliIi(llilll11 = I11IIIll(llilll11, [0, lIl11lIi.length]), iIIlIiI1 = iIllliIi(iIIlIiI1, llilll11)), iIIlIiI1 = l1IIlIii(iIIlIiI1), llilll11 = iIllliIi(llilll11 = l1IIlIii(llilll11), iIIlIiI1 = iIllliIi(iIIlIiI1, llilll11)), ("00000000" + (iIIlIiI1[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (iIIlIiI1[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (llilll11[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (llilll11[1] >>> 0).toString(16)).slice(-8);
      }
    };
  }();
  function lliil(IIl1lii) {
    IIl1lii = JSON.stringify(IIl1lii);
    IIl1lii = encodeURIComponent(IIl1lii);
    var IIll1III = "",
      I1lIiIii = 0;
    do {
      var IiIIllli = IIl1lii.charCodeAt(I1lIiIii++),
        lIiiil1I = IIl1lii.charCodeAt(I1lIiIii++),
        i1I1lI11 = IIl1lii.charCodeAt(I1lIiIii++),
        i1ii1Il1 = IiIIllli >> 2;
      IiIIllli = (3 & IiIIllli) << 4 | lIiiil1I >> 4;
      var i11II1Ii = (15 & lIiiil1I) << 2 | i1I1lI11 >> 6,
        l1I1lil1 = 63 & i1I1lI11;
      isNaN(lIiiil1I) ? i11II1Ii = l1I1lil1 = 64 : isNaN(i1I1lI11) && (l1I1lil1 = 64);
      IIll1III = IIll1III + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(i1ii1Il1) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(IiIIllli) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(i11II1Ii) + "23IL<N01c7KvwZO56RSTAfghiFyzWJqVabGH4PQdopUrsCuX*xeBjkltDEmn89.-".charAt(l1I1lil1);
    } while (I1lIiIii < IIl1lii.length);
    return IIll1III + "/";
  }
  var liil1iI = [$.UA.substring(0, 90), "zh-CN", "applewebkit_chrome", "605.1.15", "NA", "NA", 32, "896x414", -480, "sessionStorageKey", "localStorageKey", "indexedDbKey", "openDatabase", "NA", "iPhone", 10, "NA", "", null, null],
    Ili1i1II = iliI11li.hash128(liil1iI.join("~~~"), 31),
    IliIl1 = {
      "pin": "",
      "oid": "",
      "bizId": "jd-babelh5",
      "fc": "",
      "mode": "strict",
      "p": "s",
      "fp": Ili1i1II,
      "ctype": 1,
      "v": "3.1.1.0",
      "f": "3",
      "o": "prodev.m.jd.com/mall/active/3RDEv2t1n4nvt1UFWRQ9ghDDA861/index.html",
      "qs": "",
      "jsTk": "",
      "qi": ""
    },
    IlII1Iil = lliil(IliIl1),
    i1i1i1i = {},
    liil1iI = new Date();
  i1i1i1i.ts = {};
  i1i1i1i.ts.deviceTime = liil1iI.getTime();
  i1i1i1i.ca = {
    "tdHash": null
  };
  i1i1i1i.m = {
    "compatMode": "CSS1Compat"
  };
  i1i1i1i.fo = ["Arial Black", "Bauhaus 93", "Chalkduster", "GungSeo", "Hiragino Sans GB", "Impact", "Menlo", "Papyrus", "Rockwell"];
  i1i1i1i.n = {
    "vendorSub": "",
    "productSub": "20030107",
    "vendor": "Apple Computer, Inc.",
    "maxTouchPoints": 1,
    "pdfViewerEnabled": !1,
    "hardwareConcurrency": 10,
    "cookieEnabled": !0,
    "appCodeName": "Mozilla",
    "appName": "Netscape",
    "appVersion": /\/(.+)/g.exec($.UA) && /\/(.+)/g.exec($.UA)[1] || $.UA,
    "platform": "iPhone",
    "product": "Gecko",
    "userAgent": $.UA,
    "language": "zh-CN",
    "onLine": !0,
    "webdriver": !1,
    "javaEnabled": !1,
    "deviceMemory": 8,
    "enumerationOrder": ["vendorSub", "productSub", "vendor", "maxTouchPoints", "scheduling", "userActivation", "doNotTrack", "geolocation", "connection", "plugins", "mimeTypes", "pdfViewerEnabled", "webkitTemporaryStorage", "webkitPersistentStorage", "hardwareConcurrency", "cookieEnabled", "appCodeName", "appName", "appVersion", "platform", "product", "userAgent", "language", "languages", "onLine", "webdriver", "getGamepads", "javaEnabled", "sendBeacon", "vibrate", "bluetooth", "clipboard", "credentials", "keyboard", "managed", "mediaDevices", "storage", "serviceWorker", "virtualKeyboard", "wakeLock", "deviceMemory", "ink", "hid", "locks", "mediaCapabilities", "mediaSession", "permissions", "presentation", "serial", "gpu", "usb", "windowControlsOverlay", "xr", "userAgentData", "clearAppBadge", "getBattery", "getUserMedia", "requestMIDIAccess", "requestMediaKeySystemAccess", "setAppBadge", "webkitGetUserMedia", "getInstalledRelatedApps", "registerProtocolHandler", "unregisterProtocolHandler"]
  };
  i1i1i1i.p = [];
  i1i1i1i.w = {
    "devicePixelRatio": 1,
    "screenTop": 0,
    "screenLeft": 0
  };
  i1i1i1i.s = {
    "availHeight": 896,
    "availWidth": 414,
    "colorDepth": 24,
    "height": 896,
    "width": 414,
    "pixelDepth": 24
  };
  i1i1i1i.sc = {
    "ActiveBorder": "rgb(118, 118, 118)",
    "ActiveCaption": "rgb(0, 0, 0)",
    "AppWorkspace": "rgb(255, 255, 255)",
    "Background": "rgb(255, 255, 255)",
    "ButtonFace": "rgb(239, 239, 239)",
    "ButtonHighlight": "rgb(239, 239, 239)",
    "ButtonShadow": "rgb(239, 239, 239)",
    "ButtonText": "rgb(0, 0, 0)",
    "CaptionText": "rgb(0, 0, 0)",
    "GrayText": "rgb(128, 128, 128)",
    "Highlight": "rgb(181, 213, 255)",
    "HighlightText": "rgb(0, 0, 0)",
    "InactiveBorder": "rgb(118, 118, 118)",
    "InactiveCaption": "rgb(255, 255, 255)",
    "InactiveCaptionText": "rgb(128, 128, 128)",
    "InfoBackground": "rgb(255, 255, 255)",
    "InfoText": "rgb(0, 0, 0)",
    "Menu": "rgb(255, 255, 255)",
    "MenuText": "rgb(0, 0, 0)",
    "Scrollbar": "rgb(255, 255, 255)",
    "ThreeDDarkShadow": "rgb(118, 118, 118)",
    "ThreeDFace": "rgb(239, 239, 239)",
    "ThreeDHighlight": "rgb(118, 118, 118)",
    "ThreeDLightShadow": "rgb(118, 118, 118)",
    "ThreeDShadow": "rgb(118, 118, 118)",
    "Window": "rgb(255, 255, 255)",
    "WindowFrame": "rgb(118, 118, 118)",
    "WindowText": "rgb(0, 0, 0)"
  };
  i1i1i1i.ss = {
    "cookie": !0,
    "localStorage": !0,
    "sessionStorage": !0,
    "globalStorage": !1,
    "indexedDB": !0
  };
  i1i1i1i.tz = -480;
  i1i1i1i.lil = "";
  i1i1i1i.wil = "";
  i1i1i1i.ts.deviceEndTime = new Date().getTime();
  var ll1I1I11 = lliil(i1i1i1i);
  let I1IiI1l1 = {
    "url": "https://gia.jd.com/jsTk.do?a=" + IlII1Iil,
    "body": "d=" + ll1I1I11,
    "headers": {
      "Accept": "*/*",
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "Origin": "https://pro.m.jd.com",
      "Referer": "https://pro.m.jd.com/",
      "User-Agent": $.UA
    },
    "timeout": 10000
  };
  return I1IiI1l1 = i1li1lI(I1IiI1l1), new Promise(ilII11lI => {
    var illI11ll = $;
    if (l1llll1l && $.proxyArr.type && $.proxyArr.type == "socks") illI11ll = l1llll1l;
    illI11ll.post(I1IiI1l1, async (iIlIl11I, iiIIIl1, II11lIi1) => {
      try {
        if (iIlIl11I) console.log(iIlIl11I);else {
          let ii1I111i = $.toObj(II11lIi1, II11lIi1);
          ii1I111i && typeof ii1I111i === "object" && ii1I111i.code == 0 && ii1I111i.data && ii1I111i.data.token ? $.eid_token = ii1I111i.data.token : console.log(II11lIi1);
        }
      } catch (Ill1li1I) {
        $.logErr(Ill1li1I, iiIIIl1);
      } finally {
        ilII11lI();
      }
    });
  });
}
function iI1iiIIl() {
  var Iililll = Function.prototype.bind.bind(Function.prototype.call, Function.prototype.call),
    ll11IIli = Iililll({}.isPrototypeOf),
    IIIll = Array.prototype.slice,
    IiliI1l = ll11IIli,
    lii1lil = IIIll,
    ilIiilli = Array.prototype,
    IIi1i1lI = function (l11lI1iI) {
      var i1il1I11 = l11lI1iI.slice;
      return l11lI1iI === ilIiilli || IiliI1l(ilIiilli, l11lI1iI) && i1il1I11 === ilIiilli.slice ? lii1lil : i1il1I11;
    },
    iilii1lI = IIi1i1lI,
    IIil1i1i = Array.prototype.splice,
    iIIlI1l1 = ll11IIli,
    iilIIil1 = IIil1i1i,
    il1lIIl = ilIiilli,
    Iil111l = function (i1Iil1ii) {
      var lIliiI = i1Iil1ii.splice;
      return i1Iil1ii === il1lIIl || iIIlI1l1(il1lIIl, i1Iil1ii) && lIliiI === il1lIIl.splice ? iilIIil1 : lIliiI;
    },
    I11ililI = Array.prototype.concat,
    iiii1llI = ll11IIli,
    lIi11I11 = I11ililI,
    liliI1I1 = ilIiilli,
    lillIIii = function (l11ilIl1) {
      var III1lIi1 = l11ilIl1.concat;
      return l11ilIl1 === liliI1I1 || iiii1llI(liliI1I1, l11ilIl1) && III1lIi1 === liliI1I1.concat ? lIi11I11 : III1lIi1;
    };
  function I1i11ilI(lIIIii) {
    return I1i11ilI = "function" == typeof el && "symbol" == typeof yl ? function (IIlIl1i1) {
      return typeof IIlIl1i1;
    } : function (IiIliI1) {
      return IiIliI1 && "function" == typeof el && IiIliI1.constructor === el && IiIliI1 !== el.prototype ? "symbol" : typeof IiIliI1;
    }, I1i11ilI(lIIIii);
  }
  !function (i1iilII, il1ililI) {
    var Iil11Ill,
      IlliillI,
      il1Iii1 = ["parse", "_eData", "_data", "concat", "_nDataBytes", "sigBytes", "concat"],
      I1il1i1 = Function.prototype.call,
      lIiI11II = [96, 67, 45, 78, 83, 43, 42, 88, 129, 19, 2, 7, 11, 64, 48, 0, 90, 48, 1, 78, 19, 19, 59, 45, 90, 61, 2, 48, 3, 78, 19, 45, 90, 46, 61, 4, 78, 61, 5, 37, 86, 4, 45, 94, 90, 27, 81, 68, 31, 0, 69, 67, 16, 127, 55, 55, 29, 19];
    IlliillI = function () {
      function lIl1i(IiIiiI1l) {
        switch (IiIiiI1l) {
          case 140:
            return "toString";
            break;
          case 123:
            return "init";
            break;
          case 129:
            return "string";
            break;
          case 127:
            return "Cp.jbF";
            break;
          default:
            break;
        }
      }
      var lllli1I1 = lllli1I1 || function (ii1ll1II, lilIIl) {
        var lliliiil = function () {
            if (Iil11Ill) {
              if ("function" == typeof Iil11Ill.getRandomValues) try {
                return Iil11Ill.getRandomValues(new Uint32Array(1))[0];
              } catch (IiIlIlI1) {}
              if ("function" == typeof Iil11Ill.randomBytes) try {
                return Iil11Ill.randomBytes(4).readInt32LE();
              } catch (IiIIi1il) {}
            }
            throw new Error("Native crypto module could not be used to get secure random number.");
          },
          l1IiIli = Object.create || function () {
            function ii1ll1l() {}
            return function (iil1lIil) {
              var II1lI11I;
              return ii1ll1l.prototype = iil1lIil, II1lI11I = new ii1ll1l(), ii1ll1l.prototype = null, II1lI11I;
            };
          }(),
          I1ilII1 = {},
          l1l1i1i = I1ilII1.lib = {},
          li1l1Il1 = l1l1i1i.Base = {
            "extend": function (Ii1li11I) {
              var iIIl1lIi = lIl1i,
                liiiII = l1IiIli(this);
              return Ii1li11I && liiiII.mixIn(Ii1li11I), (!liiiII.hasOwnProperty(iIIl1lIi(123)) || this.init === liiiII.init) && (liiiII.init = function () {
                liiiII.$super.init.apply(this, arguments);
              }), liiiII.init.prototype = liiiII, liiiII.$super = this, liiiII;
            },
            "create": function () {
              var iiillIll = this.extend();
              return iiillIll.init.apply(iiillIll, arguments), iiillIll;
            },
            "init": function () {},
            "mixIn": function (liIli1) {
              var illilIi1 = lIl1i;
              for (var ilI111 in liIli1) liIli1.hasOwnProperty(ilI111) && (this[ilI111] = liIli1[ilI111]);
              liIli1.hasOwnProperty(illilIi1(140)) && (this.toString = liIli1.toString);
            },
            "clone": function () {
              return this.init.prototype.extend(this);
            }
          },
          il1111I1 = l1l1i1i.WordArray = li1l1Il1.extend({
            "init": function (i1il11il, I1l11lI) {
              i1il11il = this.words = i1il11il || [];
              this.sigBytes = null != I1l11lI ? I1l11lI : 4 * i1il11il.length;
            },
            "toString": function (IIIliIl) {
              return (IIIliIl || l1l11lIl).stringify(this);
            },
            "concat": function (lIii1l1I) {
              var lI1IiIl = this.words,
                IiIllIIl = lIii1l1I.words,
                iiiil1lI = this.sigBytes,
                il1lIl1 = lIii1l1I.sigBytes;
              if (this.clamp(), iiiil1lI % 4) for (var liI1l1II = 0; liI1l1II < il1lIl1; liI1l1II++) {
                var lli1l1il = IiIllIIl[liI1l1II >>> 2] >>> 24 - liI1l1II % 4 * 8 & 255;
                lI1IiIl[iiiil1lI + liI1l1II >>> 2] |= lli1l1il << 24 - (iiiil1lI + liI1l1II) % 4 * 8;
              } else {
                for (liI1l1II = 0; liI1l1II < il1lIl1; liI1l1II += 4) lI1IiIl[iiiil1lI + liI1l1II >>> 2] = IiIllIIl[liI1l1II >>> 2];
              }
              return this.sigBytes += il1lIl1, this;
            },
            "clamp": function () {
              var llillli1 = this.words,
                l1llIl1I = this.sigBytes;
              llillli1[l1llIl1I >>> 2] &= 4294967295 << 32 - l1llIl1I % 4 * 8;
              llillli1.length = ii1ll1II.ceil(l1llIl1I / 4);
            },
            "clone": function () {
              var I1Ii1iI,
                Il1liIl = li1l1Il1.clone.call(this);
              return Il1liIl.words = iilii1lI(I1Ii1iI = this.words).call(I1Ii1iI, 0), Il1liIl;
            },
            "random": function (lIIIi111) {
              for (var ilIII1II = [], l1ilii1l = 0; l1ilii1l < lIIIi111; l1ilii1l += 4) ilIII1II.push(lliliiil());
              return new il1111I1.init(ilIII1II, lIIIi111);
            }
          }),
          ilII1IIi = I1ilII1.enc = {},
          l1l11lIl = ilII1IIi.Hex = {
            "stringify": function (Ii1l1II) {
              for (var ilIIilii = Ii1l1II.words, Ii1li1Il = Ii1l1II.sigBytes, IiiliiIi = [], ilIilIl = 0; ilIilIl < Ii1li1Il; ilIilIl++) {
                var lili11 = ilIIilii[ilIilIl >>> 2] >>> 24 - ilIilIl % 4 * 8 & 255;
                IiiliiIi.push((lili11 >>> 4).toString(16));
                IiiliiIi.push((15 & lili11).toString(16));
              }
              var iillIII1 = IiiliiIi.join(""),
                li111iiI = iillIII1.substr(8);
              const I1IIilii = [];
              for (let i11lIiII = 0; i11lIiII < iillIII1.substr(0, 8).length; i11lIiII += 2) {
                I1IIilii.push(iillIII1.substr(i11lIiII, 2));
              }
              var iliiIIIl = I1IIilii.reverse().join("");
              return iliiIIIl + li111iiI;
            },
            "parse": function (iI1i11il) {
              for (var i1liillI = iI1i11il.length, II1Ii1iI = [], Iiii1il = 0; Iiii1il < i1liillI; Iiii1il += 2) II1Ii1iI[Iiii1il >>> 3] |= Kk(iI1i11il.substr(Iiii1il, 2), 16) << 24 - Iiii1il % 8 * 4;
              return new il1111I1.init(II1Ii1iI, i1liillI / 2);
            }
          };
        ilII1IIi.Utils = {
          "toWordArray": function (iIiiil1) {
            for (var iiI1il1 = [], IiIl1iI = 0; IiIl1iI < iIiiil1.length; IiIl1iI++) iiI1il1[IiIl1iI >>> 2] |= iIiiil1[IiIl1iI] << 24 - IiIl1iI % 4 * 8;
            return lllli1I1.lib.WordArray.create(iiI1il1, iIiiil1.length);
          },
          "fromWordArray": function (IliilIIl) {
            for (var liii111i = new Uint8Array(IliilIIl.sigBytes), lllI1l11 = 0; lllI1l11 < IliilIIl.sigBytes; lllI1l11++) liii111i[lllI1l11] = IliilIIl.words[lllI1l11 >>> 2] >>> 24 - lllI1l11 % 4 * 8 & 255;
            return liii111i;
          }
        };
        var IiliIiiI = ilII1IIi.Latin1 = {
            "stringify": function (Ili1lI1l) {
              for (var lli1l1lI = Ili1lI1l.words, IlI111I1 = Ili1lI1l.sigBytes, IlIiil1I = [], III1lIIi = 0; III1lIIi < IlI111I1; III1lIIi++) {
                var liI111iI = lli1l1lI[III1lIIi >>> 2] >>> 24 - III1lIIi % 4 * 8 & 255;
                IlIiil1I.push(String.fromCharCode(liI111iI));
              }
              return IlIiil1I.join("");
            },
            "parse": function (lIIiI1Il) {
              for (var llii = lIIiI1Il.length, IIiIi1ii = [], IilI11I = 0; IilI11I < llii; IilI11I++) IIiIi1ii[IilI11I >>> 2] |= (255 & lIIiI1Il.charCodeAt(IilI11I)) << 24 - IilI11I % 4 * 8;
              return new il1111I1.init(IIiIi1ii, llii);
            }
          },
          i1I11l1l = ilII1IIi.Utf8 = {
            "stringify": function (i1llIii1) {
              var i1iI1iII = lIl1i;
              try {
                return decodeURIComponent(escape(IiliIiiI.stringify(i1llIii1)));
              } catch (Iliii1lI) {
                throw new Error(i1iI1iII(138));
              }
            },
            "parse": function (lii1IIi) {
              return IiliIiiI.parse(unescape(encodeURIComponent(lii1IIi)));
            }
          },
          llIIiI11 = l1l1i1i.BufferedBlockAlgorithm = li1l1Il1.extend({
            "reset": function () {
              this._data = new il1111I1.init();
              this._nDataBytes = 0;
            },
            "_append": function (illiIll) {
              for (var IiII1il, I11i1II1, iIi1Ii11 = I1il1i1, IIli11il = lIiI11II, i1IIiII = [], liiIili1 = 0;;) switch (IIli11il[liiIili1++]) {
                case 2:
                  I11i1II1 = i1IIiII.pop(), i1IIiII[i1IIiII.length - 1] = i1IIiII[i1IIiII.length - 1] == I11i1II1;
                  break;
                case 7:
                  i1IIiII[i1IIiII.length - 1] ? (++liiIili1, --i1IIiII.length) : liiIili1 += IIli11il[liiIili1];
                  break;
                case 19:
                  null != i1IIiII[i1IIiII.length - 2] ? (i1IIiII[i1IIiII.length - 3] = iIi1Ii11.call(i1IIiII[i1IIiII.length - 3], i1IIiII[i1IIiII.length - 2], i1IIiII[i1IIiII.length - 1]), i1IIiII.length -= 2) : (I11i1II1 = i1IIiII[i1IIiII.length - 3], i1IIiII[i1IIiII.length - 3] = I11i1II1(i1IIiII[i1IIiII.length - 1]), i1IIiII.length -= 2);
                  break;
                case 37:
                  I11i1II1 = i1IIiII.pop(), i1IIiII[i1IIiII.length - 1] += I11i1II1;
                  break;
                case 42:
                  i1IIiII.push(null);
                  break;
                case 43:
                  i1IIiII.push(IiII1il);
                  break;
                case 45:
                  i1IIiII.pop();
                  break;
                case 46:
                  i1IIiII.push(i1IIiII[i1IIiII.length - 1]);
                  break;
                case 48:
                  i1IIiII.push(i1IIiII[i1IIiII.length - 1]), i1IIiII[i1IIiII.length - 2] = i1IIiII[i1IIiII.length - 2][il1Iii1[IIli11il[liiIili1++]]];
                  break;
                case 59:
                  illiIll = i1IIiII[i1IIiII.length - 1];
                  break;
                case 61:
                  i1IIiII[i1IIiII.length - 1] = i1IIiII[i1IIiII.length - 1][il1Iii1[IIli11il[liiIili1++]]];
                  break;
                case 64:
                  i1IIiII.push(i1I11l1l);
                  break;
                case 67:
                  IiII1il = i1IIiII[i1IIiII.length - 1];
                  break;
                case 78:
                  i1IIiII.push(illiIll);
                  break;
                case 83:
                  i1IIiII[i1IIiII.length - 1] = I1i11ilI(i1IIiII[i1IIiII.length - 1]);
                  break;
                case 86:
                  i1IIiII[i1IIiII.length - 2][il1Iii1[IIli11il[liiIili1++]]] = i1IIiII[i1IIiII.length - 1], i1IIiII[i1IIiII.length - 2] = i1IIiII[i1IIiII.length - 1], i1IIiII.length--;
                  break;
                case 88:
                  i1IIiII.push(IIli11il[liiIili1++]);
                  break;
                case 90:
                  i1IIiII.push(this);
                  break;
                case 94:
                  return;
                case 96:
                  i1IIiII.push(lIl1i);
              }
            },
            "_process": function (iIl1IIll) {
              var IlIIIi1I,
                l1II = this._data,
                iIlIi1il = l1II.words,
                lii1l1ll = l1II.sigBytes,
                illl11l = this.blockSize,
                II1iI1Il = lii1l1ll / (4 * illl11l),
                I1lI1Ii1 = (II1iI1Il = iIl1IIll ? ii1ll1II.ceil(II1iI1Il) : ii1ll1II.max((0 | II1iI1Il) - this._minBufferSize, 0)) * illl11l,
                lIIl11ii = ii1ll1II.min(4 * I1lI1Ii1, lii1l1ll);
              if (I1lI1Ii1) {
                for (var i1iIli1I = 0; i1iIli1I < I1lI1Ii1; i1iIli1I += illl11l) this._doProcessBlock(iIlIi1il, i1iIli1I);
                IlIIIi1I = Iil111l(iIlIi1il).call(iIlIi1il, 0, I1lI1Ii1);
                l1II.sigBytes -= lIIl11ii;
              }
              return new il1111I1.init(IlIIIi1I, lIIl11ii);
            },
            "_eData": function (l11iIIII) {
              for (var IllI1i1l, ilIlIII, liI1IiI1 = I1il1i1, lIi1Il1i = lIiI11II, i11i1iii = [], lIliIlII = 44;;) switch (lIi1Il1i[lIliIlII++]) {
                case 16:
                  i11i1iii.push(lIi1Il1i[lIliIlII++]);
                  break;
                case 19:
                  return;
                case 27:
                  IllI1i1l = i11i1iii[i11i1iii.length - 1];
                  break;
                case 29:
                  return i11i1iii.pop();
                case 31:
                  i11i1iii.push(i11i1iii[i11i1iii.length - 1]), i11i1iii[i11i1iii.length - 2] = i11i1iii[i11i1iii.length - 2][il1Iii1[6 + lIi1Il1i[lIliIlII++]]];
                  break;
                case 55:
                  null != i11i1iii[i11i1iii.length - 2] ? (i11i1iii[i11i1iii.length - 3] = liI1IiI1.call(i11i1iii[i11i1iii.length - 3], i11i1iii[i11i1iii.length - 2], i11i1iii[i11i1iii.length - 1]), i11i1iii.length -= 2) : (ilIlIII = i11i1iii[i11i1iii.length - 3], i11i1iii[i11i1iii.length - 3] = ilIlIII(i11i1iii[i11i1iii.length - 1]), i11i1iii.length -= 2);
                  break;
                case 67:
                  i11i1iii.push(null);
                  break;
                case 68:
                  i11i1iii.push(l11iIIII);
                  break;
                case 69:
                  i11i1iii.push(IllI1i1l);
                  break;
                case 81:
                  i11i1iii.pop();
                  break;
                case 90:
                  i11i1iii.push(lIl1i);
              }
            },
            "clone": function () {
              var lI11lll1 = li1l1Il1.clone.call(this);
              return lI11lll1._data = this._data.clone(), lI11lll1;
            },
            "_minBufferSize": 0
          });
        l1l1i1i.Hasher = llIIiI11.extend({
          "cfg": li1l1Il1.extend(),
          "init": function (I1iillI1) {
            this.cfg = this.cfg.extend(I1iillI1);
            this.reset();
          },
          "reset": function () {
            llIIiI11.reset.call(this);
            this._doReset();
          },
          "update": function (iiI1I1Il) {
            return this._append(iiI1I1Il), this._process(), this;
          },
          "finalize": function (liI1li1i) {
            return liI1li1i && this._append(liI1li1i), this._doFinalize();
          },
          "blockSize": 16,
          "_createHelper": function (IliiiI1i) {
            return function (iIIi1IiI, lllllii) {
              return new IliiiI1i.init(lllllii).finalize(iIIi1IiI);
            };
          },
          "_createHmacHelper": function (IlI1ii1l) {
            return function (lIIili1l, IiIilIil) {
              var liill1li = new IIiIlili.HMAC.init(IlI1ii1l, IiIilIil);
              return liill1li.finalize(lIIili1l);
            };
          }
        });
        var IIiIlili = I1ilII1.algo = {};
        return I1ilII1;
      }(Math);
      return lllli1I1;
    };
    i1iilII.exports = IlliillI();
  }(I1ilII1l);
  var l1Iilll = {
    "exports": {}
  };
  !function (Ii1iI11l, lIli11I) {
    var lIiIill,
      ili1iI11 = ["lastIndexOf", "substr", "concat"],
      iIIl1lIl = Function.prototype.call,
      Il11liii = [72, 62, 8, 90, 7, 0, 44, 82, 45, 467, 78, 78, 60, 8, 86, 45, -5714, 45, -4420, 43, 45, 10134, 43, 39, 34, 12, 90, 7, 1, 44, 82, 45, 467, 78, 24, 78, 23, 90, 7, 2, 44, 82, 45, 476, 78, 78, 23, 68];
    lIiIill = function (iIi1Ilil) {
      return function (ill1Il) {
        function I1lIII1(IllIlI1I) {
          switch (IllIlI1I) {
            case 476:
              return "Cp.jbF";
              break;
            case 467:
              return "envCollect";
              break;
            case 417:
              return "object";
              break;
            case 421:
              return "string";
              break;
            default:
              break;
          }
        }
        var lIiIlII = iIi1Ilil,
          IilIIl1 = lIiIlII.lib,
          ii1lliiI = IilIIl1.WordArray,
          iIIIlIil = IilIIl1.Hasher,
          IIil1ili = lIiIlII.algo,
          lii1iiii = [];
        !function () {
          for (var llllilIi = 0; llllilIi < 64; llllilIi++) lii1iiii[llllilIi] = 4294967296 * ill1Il.abs(ill1Il.sin(llllilIi + 1)) | 0;
        }();
        var iiIiiIiI = IIil1ili.MD5 = iIIIlIil.extend({
          "_doReset": function () {
            this._hash = new ii1lliiI.init([1732584193, 4023233417, 2562383102, 271733878]);
          },
          "_doProcessBlock": function (IliiilIl, llii1iII) {
            for (var ilIlill = 0; ilIlill < 16; ilIlill++) {
              var IIIl11il = llii1iII + ilIlill,
                ll1iilIl = IliiilIl[IIIl11il];
              IliiilIl[IIIl11il] = 16711935 & (ll1iilIl << 8 | ll1iilIl >>> 24) | 4278255360 & (ll1iilIl << 24 | ll1iilIl >>> 8);
            }
            var IIIIlI = this._hash.words,
              IIiiII1I = IliiilIl[llii1iII + 0],
              i1lIiI1l = IliiilIl[llii1iII + 1],
              lli1iiI1 = IliiilIl[llii1iII + 2],
              ll1ilIi = IliiilIl[llii1iII + 3],
              i1I11IlI = IliiilIl[llii1iII + 4],
              IIilIllI = IliiilIl[llii1iII + 5],
              IiiIli1I = IliiilIl[llii1iII + 6],
              Ii1l = IliiilIl[llii1iII + 7],
              lilIlIIi = IliiilIl[llii1iII + 8],
              il1Iilll = IliiilIl[llii1iII + 9],
              iii1l1I1 = IliiilIl[llii1iII + 10],
              i11II11i = IliiilIl[llii1iII + 11],
              iiIllI11 = IliiilIl[llii1iII + 12],
              I1Iil1Il = IliiilIl[llii1iII + 13],
              l11i1II1 = IliiilIl[llii1iII + 14],
              il1i1Ii1 = IliiilIl[llii1iII + 15],
              Iiii1l1i = IIIIlI[0],
              I1Iliiii = IIIIlI[1],
              l1il1i1i = IIIIlI[2],
              Il1IliIi = IIIIlI[3];
            Iiii1l1i = li1l1i1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, IIiiII1I, 7, lii1iiii[0]);
            Il1IliIi = li1l1i1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, i1lIiI1l, 12, lii1iiii[1]);
            l1il1i1i = li1l1i1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, lli1iiI1, 17, lii1iiii[2]);
            I1Iliiii = li1l1i1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, ll1ilIi, 22, lii1iiii[3]);
            Iiii1l1i = li1l1i1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, i1I11IlI, 7, lii1iiii[4]);
            Il1IliIi = li1l1i1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, IIilIllI, 12, lii1iiii[5]);
            l1il1i1i = li1l1i1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, IiiIli1I, 17, lii1iiii[6]);
            I1Iliiii = li1l1i1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, Ii1l, 22, lii1iiii[7]);
            Iiii1l1i = li1l1i1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, lilIlIIi, 7, lii1iiii[8]);
            Il1IliIi = li1l1i1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, il1Iilll, 12, lii1iiii[9]);
            l1il1i1i = li1l1i1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, iii1l1I1, 17, lii1iiii[10]);
            I1Iliiii = li1l1i1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, i11II11i, 22, lii1iiii[11]);
            Iiii1l1i = li1l1i1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, iiIllI11, 7, lii1iiii[12]);
            Il1IliIi = li1l1i1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, I1Iil1Il, 12, lii1iiii[13]);
            l1il1i1i = li1l1i1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, l11i1II1, 17, lii1iiii[14]);
            Iiii1l1i = IlII1l1I(Iiii1l1i, I1Iliiii = li1l1i1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, il1i1Ii1, 22, lii1iiii[15]), l1il1i1i, Il1IliIi, i1lIiI1l, 5, lii1iiii[16]);
            Il1IliIi = IlII1l1I(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, IiiIli1I, 9, lii1iiii[17]);
            l1il1i1i = IlII1l1I(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, i11II11i, 14, lii1iiii[18]);
            I1Iliiii = IlII1l1I(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, IIiiII1I, 20, lii1iiii[19]);
            Iiii1l1i = IlII1l1I(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, IIilIllI, 5, lii1iiii[20]);
            Il1IliIi = IlII1l1I(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, iii1l1I1, 9, lii1iiii[21]);
            l1il1i1i = IlII1l1I(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, il1i1Ii1, 14, lii1iiii[22]);
            I1Iliiii = IlII1l1I(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, i1I11IlI, 20, lii1iiii[23]);
            Iiii1l1i = IlII1l1I(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, il1Iilll, 5, lii1iiii[24]);
            Il1IliIi = IlII1l1I(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, l11i1II1, 9, lii1iiii[25]);
            l1il1i1i = IlII1l1I(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, ll1ilIi, 14, lii1iiii[26]);
            I1Iliiii = IlII1l1I(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, lilIlIIi, 20, lii1iiii[27]);
            Iiii1l1i = IlII1l1I(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, I1Iil1Il, 5, lii1iiii[28]);
            Il1IliIi = IlII1l1I(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, lli1iiI1, 9, lii1iiii[29]);
            l1il1i1i = IlII1l1I(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, Ii1l, 14, lii1iiii[30]);
            Iiii1l1i = IIiilIiI(Iiii1l1i, I1Iliiii = IlII1l1I(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, iiIllI11, 20, lii1iiii[31]), l1il1i1i, Il1IliIi, IIilIllI, 4, lii1iiii[32]);
            Il1IliIi = IIiilIiI(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, lilIlIIi, 11, lii1iiii[33]);
            l1il1i1i = IIiilIiI(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, i11II11i, 16, lii1iiii[34]);
            I1Iliiii = IIiilIiI(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, l11i1II1, 23, lii1iiii[35]);
            Iiii1l1i = IIiilIiI(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, i1lIiI1l, 4, lii1iiii[36]);
            Il1IliIi = IIiilIiI(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, i1I11IlI, 11, lii1iiii[37]);
            l1il1i1i = IIiilIiI(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, Ii1l, 16, lii1iiii[38]);
            I1Iliiii = IIiilIiI(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, iii1l1I1, 23, lii1iiii[39]);
            Iiii1l1i = IIiilIiI(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, I1Iil1Il, 4, lii1iiii[40]);
            Il1IliIi = IIiilIiI(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, IIiiII1I, 11, lii1iiii[41]);
            l1il1i1i = IIiilIiI(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, ll1ilIi, 16, lii1iiii[42]);
            I1Iliiii = IIiilIiI(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, IiiIli1I, 23, lii1iiii[43]);
            Iiii1l1i = IIiilIiI(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, il1Iilll, 4, lii1iiii[44]);
            Il1IliIi = IIiilIiI(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, iiIllI11, 11, lii1iiii[45]);
            l1il1i1i = IIiilIiI(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, il1i1Ii1, 16, lii1iiii[46]);
            Iiii1l1i = lI1Iii1i(Iiii1l1i, I1Iliiii = IIiilIiI(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, lli1iiI1, 23, lii1iiii[47]), l1il1i1i, Il1IliIi, IIiiII1I, 6, lii1iiii[48]);
            Il1IliIi = lI1Iii1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, Ii1l, 10, lii1iiii[49]);
            l1il1i1i = lI1Iii1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, l11i1II1, 15, lii1iiii[50]);
            I1Iliiii = lI1Iii1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, IIilIllI, 21, lii1iiii[51]);
            Iiii1l1i = lI1Iii1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, iiIllI11, 6, lii1iiii[52]);
            Il1IliIi = lI1Iii1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, ll1ilIi, 10, lii1iiii[53]);
            l1il1i1i = lI1Iii1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, iii1l1I1, 15, lii1iiii[54]);
            I1Iliiii = lI1Iii1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, i1lIiI1l, 21, lii1iiii[55]);
            Iiii1l1i = lI1Iii1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, lilIlIIi, 6, lii1iiii[56]);
            Il1IliIi = lI1Iii1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, il1i1Ii1, 10, lii1iiii[57]);
            l1il1i1i = lI1Iii1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, IiiIli1I, 15, lii1iiii[58]);
            I1Iliiii = lI1Iii1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, I1Iil1Il, 21, lii1iiii[59]);
            Iiii1l1i = lI1Iii1i(Iiii1l1i, I1Iliiii, l1il1i1i, Il1IliIi, i1I11IlI, 6, lii1iiii[60]);
            Il1IliIi = lI1Iii1i(Il1IliIi, Iiii1l1i, I1Iliiii, l1il1i1i, i11II11i, 10, lii1iiii[61]);
            l1il1i1i = lI1Iii1i(l1il1i1i, Il1IliIi, Iiii1l1i, I1Iliiii, lli1iiI1, 15, lii1iiii[62]);
            I1Iliiii = lI1Iii1i(I1Iliiii, l1il1i1i, Il1IliIi, Iiii1l1i, il1Iilll, 21, lii1iiii[63]);
            IIIIlI[0] = IIIIlI[0] + Iiii1l1i | 0;
            IIIIlI[1] = IIIIlI[1] + I1Iliiii | 0;
            IIIIlI[2] = IIIIlI[2] + l1il1i1i | 0;
            IIIIlI[3] = IIIIlI[3] + Il1IliIi | 0;
          },
          "_doFinalize": function () {
            var l1liili = this._data,
              lili1lIi = l1liili.words,
              lII11lIi = 8 * this._nDataBytes,
              IiiIi1II = 8 * l1liili.sigBytes;
            lili1lIi[IiiIi1II >>> 5] |= 128 << 24 - IiiIi1II % 32;
            var IililiI1 = ill1Il.floor(lII11lIi / 4294967296),
              lIIII1Ii = lII11lIi;
            lili1lIi[15 + (IiiIi1II + 64 >>> 9 << 4)] = 16711935 & (IililiI1 << 8 | IililiI1 >>> 24) | 4278255360 & (IililiI1 << 24 | IililiI1 >>> 8);
            lili1lIi[14 + (IiiIi1II + 64 >>> 9 << 4)] = 16711935 & (lIIII1Ii << 8 | lIIII1Ii >>> 24) | 4278255360 & (lIIII1Ii << 24 | lIIII1Ii >>> 8);
            l1liili.sigBytes = 4 * (lili1lIi.length + 1);
            this._process();
            for (var l1li1I1l = this._hash, IiliiII = l1li1I1l.words, ii1IIl1l = 0; ii1IIl1l < 4; ii1IIl1l++) {
              var lli1li1 = IiliiII[ii1IIl1l];
              IiliiII[ii1IIl1l] = 16711935 & (lli1li1 << 8 | lli1li1 >>> 24) | 4278255360 & (lli1li1 << 24 | lli1li1 >>> 8);
            }
            return l1li1I1l;
          },
          "_eData": function (I1I1I1i1) {
            for (var ililI1i1, Ii1llIli, IIIillIl, lI1l11li = iIIl1lIl, iIlIIi1I = Il11liii, Ii11l11 = [], lillli11 = 0;;) switch (iIlIIi1I[lillli11++]) {
              case 7:
                Ii11l11.push(Ii11l11[Ii11l11.length - 1]), Ii11l11[Ii11l11.length - 2] = Ii11l11[Ii11l11.length - 2][ili1iI11[iIlIIi1I[lillli11++]]];
                break;
              case 8:
                Ii11l11.pop();
                break;
              case 23:
                return Ii11l11.pop();
              case 24:
                Ii11l11[Ii11l11.length - 1] = Ii11l11[Ii11l11.length - 1].length;
                break;
              case 34:
                Ii11l11.pop() ? ++lillli11 : lillli11 += iIlIIi1I[lillli11];
                break;
              case 39:
                IIIillIl = Ii11l11.pop(), Ii11l11[Ii11l11.length - 1] = Ii11l11[Ii11l11.length - 1] === IIIillIl;
                break;
              case 43:
                IIIillIl = Ii11l11.pop(), Ii11l11[Ii11l11.length - 1] += IIIillIl;
                break;
              case 44:
                Ii11l11.push(ililI1i1);
                break;
              case 45:
                Ii11l11.push(iIlIIi1I[lillli11++]);
                break;
              case 60:
                Ii1llIli = Ii11l11[Ii11l11.length - 1];
                break;
              case 62:
                ililI1i1 = Ii11l11[Ii11l11.length - 1];
                break;
              case 68:
                return;
              case 72:
                Ii11l11.push(I1lIII1);
                break;
              case 78:
                null != Ii11l11[Ii11l11.length - 2] ? (Ii11l11[Ii11l11.length - 3] = lI1l11li.call(Ii11l11[Ii11l11.length - 3], Ii11l11[Ii11l11.length - 2], Ii11l11[Ii11l11.length - 1]), Ii11l11.length -= 2) : (IIIillIl = Ii11l11[Ii11l11.length - 3], Ii11l11[Ii11l11.length - 3] = IIIillIl(Ii11l11[Ii11l11.length - 1]), Ii11l11.length -= 2);
                break;
              case 82:
                Ii11l11.push(null);
                break;
              case 86:
                Ii11l11.push(Ii1llIli);
                break;
              case 90:
                Ii11l11.push(I1I1I1i1);
            }
          },
          "clone": function () {
            var Il1iliil = iIIIlIil.clone.call(this);
            return Il1iliil._hash = this._hash.clone(), Il1iliil;
          }
        });
        function li1l1i1i(illil1iI, iil1l1li, i1ilii, liliil1i, I11iIl1l, IIli11lI, lliI1iIi) {
          var iI1III1 = illil1iI + (iil1l1li & i1ilii | ~iil1l1li & liliil1i) + I11iIl1l + lliI1iIi;
          return (iI1III1 << IIli11lI | iI1III1 >>> 32 - IIli11lI) + iil1l1li;
        }
        function IlII1l1I(lIll1II1, IlIlIi1l, I1I1Ii11, Il1illl1, I11I1I, ii1lIl1I, iIiIIlii) {
          var iII1Ii1i = lIll1II1 + (IlIlIi1l & Il1illl1 | I1I1Ii11 & ~Il1illl1) + I11I1I + iIiIIlii;
          return (iII1Ii1i << ii1lIl1I | iII1Ii1i >>> 32 - ii1lIl1I) + IlIlIi1l;
        }
        function IIiilIiI(lllIllIi, I1ii1llI, IlilI1ll, iIiiliiI, lI1lIiil, ili11l11, iiIl1II1) {
          var llililiI = lllIllIi + (I1ii1llI ^ IlilI1ll ^ iIiiliiI) + lI1lIiil + iiIl1II1;
          return (llililiI << ili11l11 | llililiI >>> 32 - ili11l11) + I1ii1llI;
        }
        function lI1Iii1i(iI11IlII, lIlIil1l, Iiiil, IiilIII, llI1IlI1, lIi1l1il, IiIlIIll) {
          var Ii1iII1l = iI11IlII + (Iiiil ^ (lIlIil1l | ~IiilIII)) + llI1IlI1 + IiIlIIll;
          return (Ii1iII1l << lIi1l1il | Ii1iII1l >>> 32 - lIi1l1il) + lIlIil1l;
        }
        lIiIlII.MD5 = iIIIlIil._createHelper(iiIiiIiI);
        lIiIlII.HmacMD5 = iIIIlIil._createHmacHelper(iiIiiIiI);
      }(Math), iIi1Ilil.MD5;
    };
    Ii1iI11l.exports = lIiIill(I1ilII1l.exports);
  }(l1Iilll);
  var IIlIIIiI = {
    "exports": {}
  };
  !function (ilIii1II, l1I1llII) {
    var ii1Il1l1, I1I11lli, I111i1I1, l1IlIlI1, l1iilill, illi1ill, Iii1IIi, IiIilllI;
    ilIii1II.exports = (I1I11lli = (ii1Il1l1 = IiIilllI = I1ilII1l.exports).lib, I111i1I1 = I1I11lli.WordArray, l1IlIlI1 = I1I11lli.Hasher, l1iilill = ii1Il1l1.algo, illi1ill = [], Iii1IIi = l1iilill.SHA1 = l1IlIlI1.extend({
      "_doReset": function () {
        this._hash = new I111i1I1.init([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
      },
      "_doProcessBlock": function (i1llii1, i1I1lil1) {
        for (var lIi11Iii = this._hash.words, i1i1iI1i = lIi11Iii[0], Iil11li1 = lIi11Iii[1], l1li1III = lIi11Iii[2], llIiIli = lIi11Iii[3], Ii1lllli = lIi11Iii[4], iI11IIIl = 0; iI11IIIl < 80; iI11IIIl++) {
          if (iI11IIIl < 16) illi1ill[iI11IIIl] = 0 | i1llii1[i1I1lil1 + iI11IIIl];else {
            var lIii1i1i = illi1ill[iI11IIIl - 3] ^ illi1ill[iI11IIIl - 8] ^ illi1ill[iI11IIIl - 14] ^ illi1ill[iI11IIIl - 16];
            illi1ill[iI11IIIl] = lIii1i1i << 1 | lIii1i1i >>> 31;
          }
          var i11l1i1i = (i1i1iI1i << 5 | i1i1iI1i >>> 27) + Ii1lllli + illi1ill[iI11IIIl];
          i11l1i1i += iI11IIIl < 20 ? 1518500249 + (Iil11li1 & l1li1III | ~Iil11li1 & llIiIli) : iI11IIIl < 40 ? 1859775393 + (Iil11li1 ^ l1li1III ^ llIiIli) : iI11IIIl < 60 ? (Iil11li1 & l1li1III | Iil11li1 & llIiIli | l1li1III & llIiIli) - 1894007588 : (Iil11li1 ^ l1li1III ^ llIiIli) - 899497514;
          Ii1lllli = llIiIli;
          llIiIli = l1li1III;
          l1li1III = Iil11li1 << 30 | Iil11li1 >>> 2;
          Iil11li1 = i1i1iI1i;
          i1i1iI1i = i11l1i1i;
        }
        lIi11Iii[0] = lIi11Iii[0] + i1i1iI1i | 0;
        lIi11Iii[1] = lIi11Iii[1] + Iil11li1 | 0;
        lIi11Iii[2] = lIi11Iii[2] + l1li1III | 0;
        lIi11Iii[3] = lIi11Iii[3] + llIiIli | 0;
        lIi11Iii[4] = lIi11Iii[4] + Ii1lllli | 0;
      },
      "_doFinalize": function () {
        var li11lIi = this._data,
          li1lII1l = li11lIi.words,
          IIiiIili = 8 * this._nDataBytes,
          lllIlI1I = 8 * li11lIi.sigBytes;
        return li1lII1l[lllIlI1I >>> 5] |= 128 << 24 - lllIlI1I % 32, li1lII1l[14 + (lllIlI1I + 64 >>> 9 << 4)] = Math.floor(IIiiIili / 4294967296), li1lII1l[15 + (lllIlI1I + 64 >>> 9 << 4)] = IIiiIili, li11lIi.sigBytes = 4 * li1lII1l.length, this._process(), this._hash;
      },
      "clone": function () {
        var llil1i = l1IlIlI1.clone.call(this);
        return llil1i._hash = this._hash.clone(), llil1i;
      }
    }), ii1Il1l1.SHA1 = l1IlIlI1._createHelper(Iii1IIi), ii1Il1l1.HmacSHA1 = l1IlIlI1._createHmacHelper(Iii1IIi), IiIilllI.SHA1);
  }(IIlIIIiI);
  var IliIiIIl = {
    "exports": {}
  };
  !function (i1I11i1l, iiliI1li) {
    var iIlii1lI;
    i1I11i1l.exports = (iIlii1lI = I1ilII1l.exports, function (ilIIll1i) {
      var liliI1 = iIlii1lI,
        IiiilI1l = liliI1.lib,
        I11III1I = IiiilI1l.WordArray,
        IililIl1 = IiiilI1l.Hasher,
        I1Ilill1 = liliI1.algo,
        Iiil1l1 = [],
        I111ilI = [];
      !function () {
        function iiI111Il(lllll11i) {
          for (var lii1Iili = ilIIll1i.sqrt(lllll11i), iiii1I1I = 2; iiii1I1I <= lii1Iili; iiii1I1I++) if (!(lllll11i % iiii1I1I)) return !1;
          return !0;
        }
        function iiiI1i1I(il1IiiI) {
          return 4294967296 * (il1IiiI - (0 | il1IiiI)) | 0;
        }
        for (var Ii11ii1I = 2, lI1lIiii = 0; lI1lIiii < 64;) iiI111Il(Ii11ii1I) && (lI1lIiii < 8 && (Iiil1l1[lI1lIiii] = iiiI1i1I(ilIIll1i.pow(Ii11ii1I, 0.5))), I111ilI[lI1lIiii] = iiiI1i1I(ilIIll1i.pow(Ii11ii1I, 1 / 3)), lI1lIiii++), Ii11ii1I++;
      }();
      var il1i1IlI = [],
        lIlIiiii = I1Ilill1.SHA256 = IililIl1.extend({
          "_doReset": function () {
            this._hash = new I11III1I.init(iilii1lI(Iiil1l1).call(Iiil1l1, 0));
          },
          "_doProcessBlock": function (illlI1i, iiii11ll) {
            for (var IIiillil = this._hash.words, l1iiIIiI = IIiillil[0], lIIii1i1 = IIiillil[1], Ii11i111 = IIiillil[2], ilII1I1i = IIiillil[3], i11IlllI = IIiillil[4], IlI1lI1 = IIiillil[5], iiiii11i = IIiillil[6], IIi1ll11 = IIiillil[7], lIlIIl1i = 0; lIlIIl1i < 64; lIlIIl1i++) {
              if (lIlIIl1i < 16) il1i1IlI[lIlIIl1i] = 0 | illlI1i[iiii11ll + lIlIIl1i];else {
                var I1l1I11i = il1i1IlI[lIlIIl1i - 15],
                  i1lIliIl = (I1l1I11i << 25 | I1l1I11i >>> 7) ^ (I1l1I11i << 14 | I1l1I11i >>> 18) ^ I1l1I11i >>> 3,
                  lilIIII = il1i1IlI[lIlIIl1i - 2],
                  i1lIl1l1 = (lilIIII << 15 | lilIIII >>> 17) ^ (lilIIII << 13 | lilIIII >>> 19) ^ lilIIII >>> 10;
                il1i1IlI[lIlIIl1i] = i1lIliIl + il1i1IlI[lIlIIl1i - 7] + i1lIl1l1 + il1i1IlI[lIlIIl1i - 16];
              }
              var llilIi1I = l1iiIIiI & lIIii1i1 ^ l1iiIIiI & Ii11i111 ^ lIIii1i1 & Ii11i111,
                lllIllI1 = (l1iiIIiI << 30 | l1iiIIiI >>> 2) ^ (l1iiIIiI << 19 | l1iiIIiI >>> 13) ^ (l1iiIIiI << 10 | l1iiIIiI >>> 22),
                lIII1l1l = IIi1ll11 + ((i11IlllI << 26 | i11IlllI >>> 6) ^ (i11IlllI << 21 | i11IlllI >>> 11) ^ (i11IlllI << 7 | i11IlllI >>> 25)) + (i11IlllI & IlI1lI1 ^ ~i11IlllI & iiiii11i) + I111ilI[lIlIIl1i] + il1i1IlI[lIlIIl1i];
              IIi1ll11 = iiiii11i;
              iiiii11i = IlI1lI1;
              IlI1lI1 = i11IlllI;
              i11IlllI = ilII1I1i + lIII1l1l | 0;
              ilII1I1i = Ii11i111;
              Ii11i111 = lIIii1i1;
              lIIii1i1 = l1iiIIiI;
              l1iiIIiI = lIII1l1l + (lllIllI1 + llilIi1I) | 0;
            }
            IIiillil[0] = IIiillil[0] + l1iiIIiI | 0;
            IIiillil[1] = IIiillil[1] + lIIii1i1 | 0;
            IIiillil[2] = IIiillil[2] + Ii11i111 | 0;
            IIiillil[3] = IIiillil[3] + ilII1I1i | 0;
            IIiillil[4] = IIiillil[4] + i11IlllI | 0;
            IIiillil[5] = IIiillil[5] + IlI1lI1 | 0;
            IIiillil[6] = IIiillil[6] + iiiii11i | 0;
            IIiillil[7] = IIiillil[7] + IIi1ll11 | 0;
          },
          "_doFinalize": function () {
            var Iiii1ili = this._data,
              lli1l1li = Iiii1ili.words,
              il1IiI1 = 8 * this._nDataBytes,
              iI11ilIl = 8 * Iiii1ili.sigBytes;
            return lli1l1li[iI11ilIl >>> 5] |= 128 << 24 - iI11ilIl % 32, lli1l1li[14 + (iI11ilIl + 64 >>> 9 << 4)] = ilIIll1i.floor(il1IiI1 / 4294967296), lli1l1li[15 + (iI11ilIl + 64 >>> 9 << 4)] = il1IiI1, Iiii1ili.sigBytes = 4 * lli1l1li.length, this._process(), this._hash;
          },
          "clone": function () {
            var Ili1Il1I = IililIl1.clone.call(this);
            return Ili1Il1I._hash = this._hash.clone(), Ili1Il1I;
          }
        });
      liliI1.SHA256 = IililIl1._createHelper(lIlIiiii);
      liliI1.HmacSHA256 = IililIl1._createHmacHelper(lIlIiiii);
    }(Math), iIlii1lI.SHA256);
  }(IliIiIIl);
  var Ii1i11I = {
    "exports": {}
  };
  !function (II111i1, iilI1iI1) {
    var lilIIilI,
      liIllI1 = ["init", "_hasher", "parse", "eKey", "blockSize", "sigBytes", "finalize", "clamp", "clone", "_oKey", "_iKey", "words", 2736052183, "reset", "split", "", "slice", "pop", "charCodeAt", "fromCharCode", "push", "concat", "join"],
      I1iiil1I = Function.prototype.call,
      I1l1ilI1 = [44, 33, 77, 26, 25, 21, 0, 57, 39, 23, 1, 93, 77, 30, 32, 11, 50, 60, 421, 14, 87, 59, 11, 7, 13, 2, 26, 13, 3, 30, 14, 14, 97, 77, 25, 21, 4, 71, 77, 55, 60, -6693, 60, -6518, 54, 60, 13215, 54, 95, 69, 77, 30, 21, 5, 18, 83, 59, 7, 25, 13, 6, 30, 14, 97, 77, 30, 13, 7, 91, 77, 26, 30, 13, 8, 91, 23, 9, 62, 77, 26, 30, 13, 8, 91, 23, 10, 40, 77, 88, 21, 11, 86, 77, 9, 21, 11, 28, 77, 60, -8911, 60, -9770, 54, 60, 18681, 54, 42, 77, 89, 27, 65, 72, 75, 99, 60, -1329317024, 60, 142821669, 54, 53, 12, 54, 56, 94, 77, 15, 72, 75, 99, 60, 909522486, 56, 94, 77, 6, 77, 72, 55, 35, 68, -30, 88, 9, 18, 23, 5, 23, 5, 77, 26, 13, 13, 91, 77, 17, 13, 81, 0, 32, 1, 11, 53, 12, 79, 81, 2, 15, -6938, 15, 6135, 77, 15, 803, 77, 15, -1423, 15, -3610, 77, 15, 5040, 77, 18, 25, 12, 79, 81, 2, 15, 5591, 15, -2785, 77, 15, -2799, 77, 11, 47, 12, 27, 0, 28, 12, 83, 40, 84, 81, 3, 8, 81, 4, 15, -3397, 15, -4121, 77, 15, 7518, 77, 11, 21, 12, 19, 81, 5, 15, -73, 15, 7869, 77, 15, -7638, 77, 35, 86, 11, 65, 12, 95, 81, 6, 10, 11, 12, 84, 89, 15, 1790, 15, -5805, 77, 15, 4015, 77, 48, 9, -51, 95, 81, 7, 17, 11, 28, 12, 95, 81, 8, 32, 1, 11, 31, 26];
    lilIIilI = function (l1l1I11l) {
      function I1Iii1il(I1i11i1) {
        switch (I1i11i1) {
          case 421:
            return "string";
            break;
          default:
            break;
        }
      }
      var lil1lll, IlIii11i, I1lIIIi1;
      IlIii11i = (lil1lll = l1l1I11l).lib.Base;
      I1lIIIi1 = lil1lll.enc.Utf8;
      lil1lll.algo.HMAC = IlIii11i.extend({
        "init": function (IilI11il, liIli1l1) {
          for (var ii1I1I1i, IiIiiI, Illl1i1l, IilIilii, l1li1iiI, ililIlII, iI1iiil, l1I1il1l, lIi1I1lI, Iil1lliI = I1iiil1I, lili1I11 = I1l1ilI1, iiI1llIl = [], lIl1iIIl = 0;;) switch (lili1I11[lIl1iIIl++]) {
            case 6:
              iiI1llIl.push(l1I1il1l++);
              break;
            case 7:
              iiI1llIl.push(I1lIIIi1);
              break;
            case 9:
              iiI1llIl.push(l1li1iiI);
              break;
            case 11:
              iiI1llIl.push(ii1I1I1i);
              break;
            case 13:
              iiI1llIl.push(iiI1llIl[iiI1llIl.length - 1]), iiI1llIl[iiI1llIl.length - 2] = iiI1llIl[iiI1llIl.length - 2][liIllI1[lili1I11[lIl1iIIl++]]];
              break;
            case 14:
              null != iiI1llIl[iiI1llIl.length - 2] ? (iiI1llIl[iiI1llIl.length - 3] = Iil1lliI.call(iiI1llIl[iiI1llIl.length - 3], iiI1llIl[iiI1llIl.length - 2], iiI1llIl[iiI1llIl.length - 1]), iiI1llIl.length -= 2) : (lIi1I1lI = iiI1llIl[iiI1llIl.length - 3], iiI1llIl[iiI1llIl.length - 3] = lIi1I1lI(iiI1llIl[iiI1llIl.length - 1]), iiI1llIl.length -= 2);
              break;
            case 15:
              iiI1llIl.push(iI1iiil);
              break;
            case 17:
              return;
            case 18:
              iiI1llIl.push(Illl1i1l);
              break;
            case 21:
              iiI1llIl[iiI1llIl.length - 1] = iiI1llIl[iiI1llIl.length - 1][liIllI1[lili1I11[lIl1iIIl++]]];
              break;
            case 23:
              iiI1llIl[iiI1llIl.length - 2][liIllI1[lili1I11[lIl1iIIl++]]] = iiI1llIl[iiI1llIl.length - 1], iiI1llIl[iiI1llIl.length - 2] = iiI1llIl[iiI1llIl.length - 1], iiI1llIl.length--;
              break;
            case 25:
              iiI1llIl.push(IilI11il);
              break;
            case 26:
              iiI1llIl.push(this);
              break;
            case 28:
              iI1iiil = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 30:
              iiI1llIl.push(liIli1l1);
              break;
            case 32:
              iiI1llIl[iiI1llIl.length - 1] = I1i11ilI(iiI1llIl[iiI1llIl.length - 1]);
              break;
            case 33:
              ii1I1I1i = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 35:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] = iiI1llIl[iiI1llIl.length - 1] < lIi1I1lI;
              break;
            case 39:
              iiI1llIl[iiI1llIl.length - 2] = new iiI1llIl[iiI1llIl.length - 2](), iiI1llIl.length -= 1;
              break;
            case 40:
              l1li1iiI = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 42:
              l1I1il1l = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 44:
              iiI1llIl.push(I1Iii1il);
              break;
            case 50:
              iiI1llIl.push(null);
              break;
            case 53:
              iiI1llIl.push(liIllI1[lili1I11[lIl1iIIl++]]);
              break;
            case 54:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] += lIi1I1lI;
              break;
            case 55:
              iiI1llIl.push(IiIiiI);
              break;
            case 56:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] ^= lIi1I1lI;
              break;
            case 57:
              iiI1llIl.push(void 0);
              break;
            case 59:
              iiI1llIl[iiI1llIl.length - 1] ? (++lIl1iIIl, --iiI1llIl.length) : lIl1iIIl += lili1I11[lIl1iIIl];
              break;
            case 60:
              iiI1llIl.push(lili1I11[lIl1iIIl++]);
              break;
            case 62:
              IilIilii = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 65:
              iiI1llIl.push(ililIlII);
              break;
            case 68:
              iiI1llIl.pop() ? lIl1iIIl += lili1I11[lIl1iIIl] : ++lIl1iIIl;
              break;
            case 69:
              Illl1i1l = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 71:
              IiIiiI = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 72:
              iiI1llIl.push(l1I1il1l);
              break;
            case 75:
              iiI1llIl.push(iiI1llIl[iiI1llIl.length - 2]), iiI1llIl.push(iiI1llIl[iiI1llIl.length - 2]);
              break;
            case 77:
              iiI1llIl.pop();
              break;
            case 83:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] = iiI1llIl[iiI1llIl.length - 1] > lIi1I1lI;
              break;
            case 86:
              ililIlII = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 87:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] = iiI1llIl[iiI1llIl.length - 1] == lIi1I1lI;
              break;
            case 88:
              iiI1llIl.push(IilIilii);
              break;
            case 89:
              lIl1iIIl += lili1I11[lIl1iIIl];
              break;
            case 91:
              null != iiI1llIl[iiI1llIl.length - 1] ? iiI1llIl[iiI1llIl.length - 2] = Iil1lliI.call(iiI1llIl[iiI1llIl.length - 2], iiI1llIl[iiI1llIl.length - 1]) : (lIi1I1lI = iiI1llIl[iiI1llIl.length - 2], iiI1llIl[iiI1llIl.length - 2] = lIi1I1lI()), iiI1llIl.length--;
              break;
            case 93:
              IilI11il = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 94:
              iiI1llIl[iiI1llIl.length - 3][iiI1llIl[iiI1llIl.length - 2]] = iiI1llIl[iiI1llIl.length - 1], iiI1llIl[iiI1llIl.length - 3] = iiI1llIl[iiI1llIl.length - 1], iiI1llIl.length -= 2;
              break;
            case 95:
              lIi1I1lI = iiI1llIl.pop(), iiI1llIl[iiI1llIl.length - 1] *= lIi1I1lI;
              break;
            case 97:
              liIli1l1 = iiI1llIl[iiI1llIl.length - 1];
              break;
            case 99:
              iiI1llIl[iiI1llIl.length - 2] = iiI1llIl[iiI1llIl.length - 2][iiI1llIl[iiI1llIl.length - 1]], iiI1llIl.length--;
          }
        },
        "reset": function () {
          var i111l11l = this._hasher;
          i111l11l.reset();
          i111l11l.update(this._iKey);
        },
        "update": function (Ililili1) {
          return this._hasher.update(Ililili1), this;
        },
        "eKey": function (I1IlIliI) {
          var IliIliIl = [],
            lIIlll1I = 14,
            Iiiliili = 158,
            l11I1III = I1IlIliI.substr(0, lIIlll1I).split("").reverse();
          for (let IIiIill1 of l11I1III) {
            IliIliIl.push(String.fromCharCode(Iiiliili - IIiIill1.charCodeAt()));
          }
          return IliIliIl = IliIliIl.join("") + I1IlIliI.substr(lIIlll1I), IliIliIl;
        },
        "eKey1": function (iilllll1) {
          for (var II1il1ii, i1iiiliI, lI11l1li, ii1iiI1i, Il1iIili, lii11lii, IlII1iIi, lI1ilil = I1iiil1I, illi11Il = I1l1ilI1, lIlIllIi = [], l1Il11lI = 155;;) switch (illi11Il[l1Il11lI++]) {
            case 8:
              null != lIlIllIi[lIlIllIi.length - 1] ? lIlIllIi[lIlIllIi.length - 2] = lI1ilil.call(lIlIllIi[lIlIllIi.length - 2], lIlIllIi[lIlIllIi.length - 1]) : (IlII1iIi = lIlIllIi[lIlIllIi.length - 2], lIlIllIi[lIlIllIi.length - 2] = IlII1iIi()), lIlIllIi.length--;
              break;
            case 9:
              lIlIllIi.pop() ? l1Il11lI += illi11Il[l1Il11lI] : ++l1Il11lI;
              break;
            case 10:
              lIlIllIi.push(lii11lii);
              break;
            case 11:
              null != lIlIllIi[lIlIllIi.length - 2] ? (lIlIllIi[lIlIllIi.length - 3] = lI1ilil.call(lIlIllIi[lIlIllIi.length - 3], lIlIllIi[lIlIllIi.length - 2], lIlIllIi[lIlIllIi.length - 1]), lIlIllIi.length -= 2) : (IlII1iIi = lIlIllIi[lIlIllIi.length - 3], lIlIllIi[lIlIllIi.length - 3] = IlII1iIi(lIlIllIi[lIlIllIi.length - 1]), lIlIllIi.length -= 2);
              break;
            case 12:
              lIlIllIi.pop();
              break;
            case 13:
              lIlIllIi.push(iilllll1);
              break;
            case 15:
              lIlIllIi.push(illi11Il[l1Il11lI++]);
              break;
            case 17:
              lIlIllIi.push(lI11l1li);
              break;
            case 18:
              lIlIllIi[lIlIllIi.length - 4] = lI1ilil.call(lIlIllIi[lIlIllIi.length - 4], lIlIllIi[lIlIllIi.length - 3], lIlIllIi[lIlIllIi.length - 2], lIlIllIi[lIlIllIi.length - 1]), lIlIllIi.length -= 3;
              break;
            case 19:
              lIlIllIi.push(String);
              break;
            case 21:
              Il1iIili = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 25:
              i1iiiliI = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 26:
              return;
            case 27:
              lIlIllIi.push(new Array(illi11Il[l1Il11lI++]));
              break;
            case 28:
              ii1iiI1i = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 31:
              return lIlIllIi.pop();
            case 32:
              lIlIllIi.push(liIllI1[14 + illi11Il[l1Il11lI++]]);
              break;
            case 35:
              lIlIllIi.push(Il1iIili);
              break;
            case 47:
              lI11l1li = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 48:
              IlII1iIi = lIlIllIi.pop(), lIlIllIi[lIlIllIi.length - 1] = lIlIllIi[lIlIllIi.length - 1] > IlII1iIi;
              break;
            case 53:
              II1il1ii = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 65:
              lii11lii = lIlIllIi[lIlIllIi.length - 1];
              break;
            case 77:
              IlII1iIi = lIlIllIi.pop(), lIlIllIi[lIlIllIi.length - 1] += IlII1iIi;
              break;
            case 79:
              lIlIllIi.push(II1il1ii);
              break;
            case 81:
              lIlIllIi.push(lIlIllIi[lIlIllIi.length - 1]), lIlIllIi[lIlIllIi.length - 2] = lIlIllIi[lIlIllIi.length - 2][liIllI1[14 + illi11Il[l1Il11lI++]]];
              break;
            case 83:
              l1Il11lI += illi11Il[l1Il11lI];
              break;
            case 84:
              lIlIllIi.push(i1iiiliI);
              break;
            case 86:
              IlII1iIi = lIlIllIi.pop(), lIlIllIi[lIlIllIi.length - 1] -= IlII1iIi;
              break;
            case 89:
              lIlIllIi[lIlIllIi.length - 1] = lIlIllIi[lIlIllIi.length - 1].length;
              break;
            case 95:
              lIlIllIi.push(ii1iiI1i);
          }
        },
        "finalize": function (iilIii11) {
          var iII11iI1,
            lI1Iii1 = this._hasher,
            IIiIl11I = lI1Iii1.finalize(iilIii11);
          return lI1Iii1.reset(), lI1Iii1.finalize(lillIIii(iII11iI1 = this._oKey.clone()).call(iII11iI1, IIiIl11I));
        }
      });
    };
    II111i1.exports = lilIIilI(I1ilII1l.exports);
  }(Ii1i11I);
  var lIilIll = {
    "exports": {}
  };
  !function (lIIiiii1, i1iI1i1i) {
    var I1Il1l,
      IIllll1I = ["enc", "Utils", "fromWordArray", "slice", "call", "prototype", "push", "apply", "toWordArray", "words", "sigBytes", "_map1", "clamp", "charAt", 0.75, "reverse", "join", ""],
      il1IIi = Function.prototype.call,
      I11lI1II = [36, 6, 0, 6, 1, 21, 2, 50, 94, 54, 76, 90, 0, 6, 3, 21, 4, 33, 94, 56, 76, 90, 0, 87, 76, 43, 6, 5, 6, 6, 21, 7, 52, 25, 84, 76, 29, -8956, 29, 6189, 62, 29, 2770, 62, 52, 47, 29, -6898, 29, 5570, 62, 29, 1331, 62, 5, 55, 63, 76, 29, 8711, 29, -2858, 62, 29, -5853, 62, 49, 76, 3, 9, 52, 21, 6, 30, 94, 76, 7, 76, 13, 30, 89, 39, -12, 90, 0, 14, 76, 52, 47, 29, 8472, 29, -1796, 62, 29, -6675, 62, 55, 83, 76, 3, 47, 43, 6, 5, 6, 6, 21, 7, 70, 52, 21, 3, 20, 29, -7207, 29, 4113, 62, 29, 3096, 62, 55, 20, 29, 4, 29, -8118, 62, 29, 8115, 62, 62, 84, 84, 76, 20, 29, 8214, 29, 3340, 62, 29, -11551, 62, 55, 83, 76, 20, 29, 2116, 29, -9645, 62, 29, 7529, 62, 1, 39, -57, 36, 6, 0, 6, 1, 21, 8, 70, 94, 85, 76, 66, 6, 9, 71, 76, 66, 6, 10, 12, 76, 92, 11, 80, 76, 66, 21, 12, 26, 76, 90, 0, 10, 76, 29, 5802, 29, -3698, 62, 29, -2104, 62, 82, 76, 3, 295, 28, 77, 29, 429, 29, -5764, 62, 29, 5337, 62, 17, 18, 29, -6426, 29, 4235, 62, 29, 2215, 62, 77, 29, 2656, 29, 5733, 62, 29, -8385, 62, 5, 29, 8, 99, 55, 17, 29, -6065, 29, 7515, 62, 29, -1195, 62, 2, 48, 76, 28, 77, 29, 8577, 29, -2163, 62, 29, -6413, 62, 62, 29, -3327, 29, -3568, 62, 29, 6897, 62, 17, 18, 29, -5903, 29, -444, 62, 29, 6371, 62, 77, 29, 8826, 29, 8537, 62, 29, -17362, 62, 62, 29, 8745, 29, -8835, 62, 29, 94, 62, 5, 29, 7071, 29, -4463, 62, 29, -2600, 62, 99, 55, 17, 29, -523, 29, -3762, 62, 29, 4540, 62, 2, 81, 76, 28, 77, 29, 5725, 29, -1492, 62, 29, -4231, 62, 62, 29, -3281, 29, 5384, 62, 29, -2101, 62, 17, 18, 29, -9380, 29, 8254, 62, 29, 1150, 62, 77, 29, 5404, 29, -1008, 62, 29, -4394, 62, 62, 29, -4905, 29, 7865, 62, 29, -2956, 62, 5, 29, -6221, 29, 3440, 62, 29, 2789, 62, 99, 55, 17, 29, -1790, 29, 4846, 62, 29, -2801, 62, 2, 27, 76, 32, 29, -1481, 29, -6790, 62, 29, 8287, 62, 24, 4, 29, 3380, 29, -2364, 62, 29, -1008, 62, 24, 9, 42, 9, 65, 76, 44, 69, 76, 3, 36, 11, 21, 6, 79, 21, 13, 64, 29, -8358, 29, 5538, 62, 29, 2826, 62, 29, 3, 78, 55, 99, 17, 29, -7726, 29, 4023, 62, 29, 3766, 62, 2, 94, 94, 76, 41, 76, 78, 29, 8304, 29, -1210, 62, 29, -7090, 62, 89, 68, 18, 77, 78, 29, -920, 29, -1999, 62, 29, 2919, 62, 38, 14, 62, 99, 62, 95, 89, 39, -65, 77, 29, -7099, 29, 9233, 62, 29, -2131, 62, 62, 82, 76, 77, 95, 89, 39, -298, 90, 0, 73, 76, 29, 5498, 29, 2050, 62, 29, -7548, 62, 96, 76, 3, 41, 43, 6, 5, 6, 6, 21, 7, 40, 11, 21, 3, 91, 91, 29, -7490, 29, -1401, 62, 29, 8895, 62, 62, 84, 21, 15, 26, 84, 76, 91, 29, -7054, 29, 3784, 62, 29, 3274, 62, 62, 96, 76, 91, 11, 47, 89, 39, -45, 40, 21, 16, 38, 17, 94, 53, 86];
    I1Il1l = function (IIllliIi) {
      function iII1il1I(i11i1I11) {
        switch (i11i1I11) {
          case 316:
            return "WVUTSRQPONMLKJIHGFEDCBA-_9876543210zyxwvutsrqponmlkjihgfedcbaZYX";
            break;
          case 319:
            return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            break;
          default:
            break;
        }
      }
      return iIllIill = iII1il1I, iIiiIIl = (iilIiIi1 = IIllliIi).lib.WordArray, iilIiIi1.enc.Base64 = {
        "stringify": function (iiI1li11) {
          var lll111 = iiI1li11.words,
            ilIIi1iI = iiI1li11.sigBytes,
            iiiilII1 = this._map;
          iiI1li11.clamp();
          for (var liiiliii = [], IliiIIil = 0; IliiIIil < ilIIi1iI; IliiIIil += 3) for (var iI1I1iI1 = (lll111[IliiIIil >>> 2] >>> 24 - IliiIIil % 4 * 8 & 255) << 16 | (lll111[IliiIIil + 1 >>> 2] >>> 24 - (IliiIIil + 1) % 4 * 8 & 255) << 8 | lll111[IliiIIil + 2 >>> 2] >>> 24 - (IliiIIil + 2) % 4 * 8 & 255, IIllIiIi = 0; IIllIiIi < 4 && IliiIIil + 0.75 * IIllIiIi < ilIIi1iI; IIllIiIi++) liiiliii.push(iiiilII1.charAt(iI1I1iI1 >>> 6 * (3 - IIllIiIi) & 63));
          var lll1II11 = iiiilII1.charAt(64);
          if (lll1II11) {
            for (; liiiliii.length % 4;) liiiliii.push(lll1II11);
          }
          return liiiliii.join("");
        },
        "parse": function (iilillII) {
          var IlI1iIII = iilillII.length,
            lllIi = this._map,
            lI1I1IIl = this._reverseMap;
          if (!lI1I1IIl) {
            lI1I1IIl = this._reverseMap = [];
            for (var Illl1I = 0; Illl1I < lllIi.length; Illl1I++) lI1I1IIl[lllIi.charCodeAt(Illl1I)] = Illl1I;
          }
          var il1Illll = lllIi.charAt(64);
          if (il1Illll) {
            var iIl1l1ii = rm(iilillII).call(iilillII, il1Illll);
            -1 !== iIl1l1ii && (IlI1iIII = iIl1l1ii);
          }
          return function (lI1lil, i1Il1l1i, I1li1ll1) {
            for (var I1I1l11i = [], i1Iii1iI = 0, ilIIiIIi = 0; ilIIiIIi < i1Il1l1i; ilIIiIIi++) if (ilIIiIIi % 4) {
              var iI11iI1i = I1li1ll1[lI1lil.charCodeAt(ilIIiIIi - 1)] << ilIIiIIi % 4 * 2 | I1li1ll1[lI1lil.charCodeAt(ilIIiIIi)] >>> 6 - ilIIiIIi % 4 * 2;
              I1I1l11i[i1Iii1iI >>> 2] |= iI11iI1i << 24 - i1Iii1iI % 4 * 8;
              i1Iii1iI++;
            }
            return iIiiIIl.create(I1I1l11i, i1Iii1iI);
          }(iilillII, IlI1iIII, lI1I1IIl);
        },
        "encode": function (iIliIiiI) {
          for (var ii11Il1, IIllII1I, lI1I1I11, IIiIli1i, illI1i11, Ill1ilII, llii1Ii, l1ilI1i, I1IIIIi1, i1ii1Ili, iIiillii, l11liiI1, IIiIlill, IllIill, iIiIil1I, I1IliIi1, iI1lIl1I, llIillII, lliIi1l, lliI11il, I1lI1l1i, Iili1iiI = il1IIi, lIIlI1i1 = I11lI1II, iI1lilI = [], IlllIIii = 0;;) switch (lIIlI1i1[IlllIIii++]) {
            case 1:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] = iI1lilI[iI1lilI.length - 1] >= I1lI1l1i;
              break;
            case 2:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] &= I1lI1l1i;
              break;
            case 3:
              IlllIIii += lIIlI1i1[IlllIIii];
              break;
            case 4:
              iI1lilI.push(iIiIil1I);
              break;
            case 5:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] %= I1lI1l1i;
              break;
            case 6:
              iI1lilI[iI1lilI.length - 1] = iI1lilI[iI1lilI.length - 1][IIllll1I[lIIlI1i1[IlllIIii++]]];
              break;
            case 7:
              iI1lilI.push(illI1i11++);
              break;
            case 9:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] |= I1lI1l1i;
              break;
            case 10:
              l11liiI1 = iI1lilI[iI1lilI.length - 1];
              break;
            case 11:
              iI1lilI.push(l11liiI1);
              break;
            case 12:
              i1ii1Ili = iI1lilI[iI1lilI.length - 1];
              break;
            case 13:
              iI1lilI.push(illI1i11);
              break;
            case 14:
              Ill1ilII = iI1lilI[iI1lilI.length - 1];
              break;
            case 17:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] >>>= I1lI1l1i;
              break;
            case 18:
              iI1lilI[iI1lilI.length - 2] = iI1lilI[iI1lilI.length - 2][iI1lilI[iI1lilI.length - 1]], iI1lilI.length--;
              break;
            case 20:
              iI1lilI.push(llii1Ii);
              break;
            case 21:
              iI1lilI.push(iI1lilI[iI1lilI.length - 1]), iI1lilI[iI1lilI.length - 2] = iI1lilI[iI1lilI.length - 2][IIllll1I[lIIlI1i1[IlllIIii++]]];
              break;
            case 24:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] <<= I1lI1l1i;
              break;
            case 25:
              iI1lilI.push(IIllII1I);
              break;
            case 26:
              null != iI1lilI[iI1lilI.length - 1] ? iI1lilI[iI1lilI.length - 2] = Iili1iiI.call(iI1lilI[iI1lilI.length - 2], iI1lilI[iI1lilI.length - 1]) : (I1lI1l1i = iI1lilI[iI1lilI.length - 2], iI1lilI[iI1lilI.length - 2] = I1lI1l1i()), iI1lilI.length--;
              break;
            case 27:
              I1IliIi1 = iI1lilI[iI1lilI.length - 1];
              break;
            case 28:
              iI1lilI.push(I1IIIIi1);
              break;
            case 29:
              iI1lilI.push(lIIlI1i1[IlllIIii++]);
              break;
            case 30:
              iI1lilI.push(IIiIli1i);
              break;
            case 32:
              iI1lilI.push(IllIill);
              break;
            case 33:
              iI1lilI.push(ii11Il1);
              break;
            case 36:
              iI1lilI.push(IIllliIi);
              break;
            case 38:
              iI1lilI.push(IIllll1I[lIIlI1i1[IlllIIii++]]);
              break;
            case 39:
              iI1lilI.pop() ? IlllIIii += lIIlI1i1[IlllIIii] : ++IlllIIii;
              break;
            case 40:
              iI1lilI.push(lliIi1l);
              break;
            case 41:
              iI1lilI.push(llIillII++);
              break;
            case 42:
              iI1lilI.push(I1IliIi1);
              break;
            case 43:
              iI1lilI.push(Array);
              break;
            case 44:
              iI1lilI.push(0);
              break;
            case 47:
              iI1lilI[iI1lilI.length - 1] = iI1lilI[iI1lilI.length - 1].length;
              break;
            case 48:
              IllIill = iI1lilI[iI1lilI.length - 1];
              break;
            case 49:
              illI1i11 = iI1lilI[iI1lilI.length - 1];
              break;
            case 50:
              iI1lilI.push(iIliIiiI);
              break;
            case 52:
              iI1lilI.push(lI1I1I11);
              break;
            case 53:
              return iI1lilI.pop();
            case 54:
              ii11Il1 = iI1lilI[iI1lilI.length - 1];
              break;
            case 55:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] -= I1lI1l1i;
              break;
            case 56:
              IIllII1I = iI1lilI[iI1lilI.length - 1];
              break;
            case 62:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] += I1lI1l1i;
              break;
            case 63:
              IIiIli1i = iI1lilI[iI1lilI.length - 1];
              break;
            case 64:
              iI1lilI.push(iI1lIl1I);
              break;
            case 65:
              iI1lIl1I = iI1lilI[iI1lilI.length - 1];
              break;
            case 66:
              iI1lilI.push(l1ilI1i);
              break;
            case 68:
              iI1lilI[iI1lilI.length - 1] ? (++IlllIIii, --iI1lilI.length) : IlllIIii += lIIlI1i1[IlllIIii];
              break;
            case 69:
              llIillII = iI1lilI[iI1lilI.length - 1];
              break;
            case 70:
              iI1lilI.push(Ill1ilII);
              break;
            case 71:
              I1IIIIi1 = iI1lilI[iI1lilI.length - 1];
              break;
            case 73:
              lliIi1l = iI1lilI[iI1lilI.length - 1];
              break;
            case 76:
              iI1lilI.pop();
              break;
            case 77:
              iI1lilI.push(IIiIlill);
              break;
            case 78:
              iI1lilI.push(llIillII);
              break;
            case 79:
              iI1lilI.push(iIiillii);
              break;
            case 80:
              iIiillii = iI1lilI[iI1lilI.length - 1];
              break;
            case 81:
              iIiIil1I = iI1lilI[iI1lilI.length - 1];
              break;
            case 82:
              IIiIlill = iI1lilI[iI1lilI.length - 1];
              break;
            case 83:
              llii1Ii = iI1lilI[iI1lilI.length - 1];
              break;
            case 84:
              iI1lilI[iI1lilI.length - 4] = Iili1iiI.call(iI1lilI[iI1lilI.length - 4], iI1lilI[iI1lilI.length - 3], iI1lilI[iI1lilI.length - 2], iI1lilI[iI1lilI.length - 1]), iI1lilI.length -= 3;
              break;
            case 85:
              l1ilI1i = iI1lilI[iI1lilI.length - 1];
              break;
            case 86:
              return;
            case 87:
              lI1I1I11 = iI1lilI[iI1lilI.length - 1];
              break;
            case 89:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] = iI1lilI[iI1lilI.length - 1] < I1lI1l1i;
              break;
            case 90:
              iI1lilI.push(new Array(lIIlI1i1[IlllIIii++]));
              break;
            case 91:
              iI1lilI.push(lliI11il);
              break;
            case 92:
              iI1lilI.push(this[IIllll1I[lIIlI1i1[IlllIIii++]]]);
              break;
            case 94:
              null != iI1lilI[iI1lilI.length - 2] ? (iI1lilI[iI1lilI.length - 3] = Iili1iiI.call(iI1lilI[iI1lilI.length - 3], iI1lilI[iI1lilI.length - 2], iI1lilI[iI1lilI.length - 1]), iI1lilI.length -= 2) : (I1lI1l1i = iI1lilI[iI1lilI.length - 3], iI1lilI[iI1lilI.length - 3] = I1lI1l1i(iI1lilI[iI1lilI.length - 1]), iI1lilI.length -= 2);
              break;
            case 95:
              iI1lilI.push(i1ii1Ili);
              break;
            case 96:
              lliI11il = iI1lilI[iI1lilI.length - 1];
              break;
            case 99:
              I1lI1l1i = iI1lilI.pop(), iI1lilI[iI1lilI.length - 1] *= I1lI1l1i;
          }
        },
        "_map1": iIllIill(316),
        "_map": iIllIill(319)
      }, IIllliIi.enc.Base64;
      var iIllIill, iilIiIi1, iIiiIIl;
    };
    lIIiiii1.exports = I1Il1l(I1ilII1l.exports);
  }(lIilIll);
  var IlI1I11l = {
      "exports": {}
    },
    Iilii1ll = {
      "exports": {}
    };
  !function (I1l1ii1i, III1iIIl) {
    var lI11IiII, iIiii1ll, I1l1i1II, l1IilIii, l1IilIll, liIl111i, ilI111i;
    I1l1ii1i.exports = (I1l1i1II = (iIiii1ll = ilI111i = I1ilII1l.exports).lib, l1IilIii = I1l1i1II.Base, l1IilIll = I1l1i1II.WordArray, (liIl111i = iIiii1ll.x64 = {}).Word = l1IilIii.extend({
      "init": function (IiIlI1Ii, Il1I1iII) {
        this.high = IiIlI1Ii;
        this.low = Il1I1iII;
      }
    }), liIl111i.WordArray = l1IilIii.extend({
      "init": function (IiiliIII, I1Iili1I) {
        IiiliIII = this.words = IiiliIII || [];
        this.sigBytes = I1Iili1I != lI11IiII ? I1Iili1I : 8 * IiiliIII.length;
      },
      "toX32": function () {
        for (var IlllilI1 = this.words, IIiii1li = IlllilI1.length, Ii1III11 = [], l1Iiill = 0; l1Iiill < IIiii1li; l1Iiill++) {
          var Ill1IIIl = IlllilI1[l1Iiill];
          Ii1III11.push(Ill1IIIl.high);
          Ii1III11.push(Ill1IIIl.low);
        }
        return l1IilIll.create(Ii1III11, this.sigBytes);
      },
      "clone": function () {
        for (var lllilI1l, IiII1il1 = l1IilIii.clone.call(this), i1IiiilI = IiII1il1.words = iilii1lI(lllilI1l = this.words).call(lllilI1l, 0), IiIll1i = i1IiiilI.length, llliii = 0; llliii < IiIll1i; llliii++) i1IiiilI[llliii] = i1IiiilI[llliii].clone();
        return IiII1il1;
      }
    }), ilI111i);
  }(Iilii1ll);
  (function (I1lIi1I1, i1I1I11l) {
    var li1Iil1l;
    I1lIi1I1.exports = (li1Iil1l = I1ilII1l.exports, function () {
      var IllI1iI1 = li1Iil1l,
        ilillI1l = IllI1iI1.lib.Hasher,
        il1llIl1 = IllI1iI1.x64,
        IllIll1l = il1llIl1.Word,
        iliiilII = il1llIl1.WordArray,
        iii1IiI = IllI1iI1.algo;
      function IIllll() {
        return IllIll1l.create.apply(IllIll1l, arguments);
      }
      var iII1Il1I = [IIllll(1116352408, 3609767458), IIllll(1899447441, 602891725), IIllll(3049323471, 3964484399), IIllll(3921009573, 2173295548), IIllll(961987163, 4081628472), IIllll(1508970993, 3053834265), IIllll(2453635748, 2937671579), IIllll(2870763221, 3664609560), IIllll(3624381080, 2734883394), IIllll(310598401, 1164996542), IIllll(607225278, 1323610764), IIllll(1426881987, 3590304994), IIllll(1925078388, 4068182383), IIllll(2162078206, 991336113), IIllll(2614888103, 633803317), IIllll(3248222580, 3479774868), IIllll(3835390401, 2666613458), IIllll(4022224774, 944711139), IIllll(264347078, 2341262773), IIllll(604807628, 2007800933), IIllll(770255983, 1495990901), IIllll(1249150122, 1856431235), IIllll(1555081692, 3175218132), IIllll(1996064986, 2198950837), IIllll(2554220882, 3999719339), IIllll(2821834349, 766784016), IIllll(2952996808, 2566594879), IIllll(3210313671, 3203337956), IIllll(3336571891, 1034457026), IIllll(3584528711, 2466948901), IIllll(113926993, 3758326383), IIllll(338241895, 168717936), IIllll(666307205, 1188179964), IIllll(773529912, 1546045734), IIllll(1294757372, 1522805485), IIllll(1396182291, 2643833823), IIllll(1695183700, 2343527390), IIllll(1986661051, 1014477480), IIllll(2177026350, 1206759142), IIllll(2456956037, 344077627), IIllll(2730485921, 1290863460), IIllll(2820302411, 3158454273), IIllll(3259730800, 3505952657), IIllll(3345764771, 106217008), IIllll(3516065817, 3606008344), IIllll(3600352804, 1432725776), IIllll(4094571909, 1467031594), IIllll(275423344, 851169720), IIllll(430227734, 3100823752), IIllll(506948616, 1363258195), IIllll(659060556, 3750685593), IIllll(883997877, 3785050280), IIllll(958139571, 3318307427), IIllll(1322822218, 3812723403), IIllll(1537002063, 2003034995), IIllll(1747873779, 3602036899), IIllll(1955562222, 1575990012), IIllll(2024104815, 1125592928), IIllll(2227730452, 2716904306), IIllll(2361852424, 442776044), IIllll(2428436474, 593698344), IIllll(2756734187, 3733110249), IIllll(3204031479, 2999351573), IIllll(3329325298, 3815920427), IIllll(3391569614, 3928383900), IIllll(3515267271, 566280711), IIllll(3940187606, 3454069534), IIllll(4118630271, 4000239992), IIllll(116418474, 1914138554), IIllll(174292421, 2731055270), IIllll(289380356, 3203993006), IIllll(460393269, 320620315), IIllll(685471733, 587496836), IIllll(852142971, 1086792851), IIllll(1017036298, 365543100), IIllll(1126000580, 2618297676), IIllll(1288033470, 3409855158), IIllll(1501505948, 4234509866), IIllll(1607167915, 987167468), IIllll(1816402316, 1246189591)],
        IlIiiII1 = [];
      !function () {
        for (var ii1il1l = 0; ii1il1l < 80; ii1il1l++) IlIiiII1[ii1il1l] = IIllll();
      }();
      var Il111Il1 = iii1IiI.SHA512 = ilillI1l.extend({
        "_doReset": function () {
          this._hash = new iliiilII.init([new IllIll1l.init(1779033703, 4089235720), new IllIll1l.init(3144134277, 2227873595), new IllIll1l.init(1013904242, 4271175723), new IllIll1l.init(2773480762, 1595750129), new IllIll1l.init(1359893119, 2917565137), new IllIll1l.init(2600822924, 725511199), new IllIll1l.init(528734635, 4215389547), new IllIll1l.init(1541459225, 327033209)]);
        },
        "_doProcessBlock": function (llI1Iili, IIl1IIIl) {
          for (var iliIlI1 = this._hash.words, i11li111 = iliIlI1[0], lIiIIilI = iliIlI1[1], ilIl1iIi = iliIlI1[2], Iili1lII = iliIlI1[3], I1II1Iil = iliIlI1[4], IiIlli11 = iliIlI1[5], iliIiI1l = iliIlI1[6], l1lIIIII = iliIlI1[7], illiil11 = i11li111.high, lI1Il1ll = i11li111.low, I1II111 = lIiIIilI.high, I1iIii1I = lIiIIilI.low, Ii11l1 = ilIl1iIi.high, llll1i1I = ilIl1iIi.low, li1llII = Iili1lII.high, liIl1Ill = Iili1lII.low, ilIIlli = I1II1Iil.high, lliiI1l1 = I1II1Iil.low, lI1i1I1 = IiIlli11.high, lI1ii1iI = IiIlli11.low, illI11I = iliIiI1l.high, ilI1liiI = iliIiI1l.low, ii1lI11i = l1lIIIII.high, IiiI1iii = l1lIIIII.low, ll1iIlIi = illiil11, iliilIi1 = lI1Il1ll, IiIlillI = I1II111, ilil1lil = I1iIii1I, Il111lI1 = Ii11l1, IlllIil = llll1i1I, lli1iIil = li1llII, liliIi1I = liIl1Ill, IlllIilI = ilIIlli, IIl1l1l1 = lliiI1l1, ilIi11li = lI1i1I1, IiI1ili = lI1ii1iI, IIiIii = illI11I, IiiI11I = ilI1liiI, Iliii1Il = ii1lI11i, iII1IiIl = IiiI1iii, liIi1lII = 0; liIi1lII < 80; liIi1lII++) {
            var lI11iI1i,
              Iili1I,
              I111l1I = IlIiiII1[liIi1lII];
            if (liIi1lII < 16) Iili1I = I111l1I.high = 0 | llI1Iili[IIl1IIIl + 2 * liIi1lII], lI11iI1i = I111l1I.low = 0 | llI1Iili[IIl1IIIl + 2 * liIi1lII + 1];else {
              var IlIl1li = IlIiiII1[liIi1lII - 15],
                liIlllil = IlIl1li.high,
                i1liiliI = IlIl1li.low,
                lllIII1l = (liIlllil >>> 1 | i1liiliI << 31) ^ (liIlllil >>> 8 | i1liiliI << 24) ^ liIlllil >>> 7,
                III1I1lI = (i1liiliI >>> 1 | liIlllil << 31) ^ (i1liiliI >>> 8 | liIlllil << 24) ^ (i1liiliI >>> 7 | liIlllil << 25),
                iIil1iIl = IlIiiII1[liIi1lII - 2],
                il11iil1 = iIil1iIl.high,
                liiII1l = iIil1iIl.low,
                lIIIII1i = (il11iil1 >>> 19 | liiII1l << 13) ^ (il11iil1 << 3 | liiII1l >>> 29) ^ il11iil1 >>> 6,
                IIll1li1 = (liiII1l >>> 19 | il11iil1 << 13) ^ (liiII1l << 3 | il11iil1 >>> 29) ^ (liiII1l >>> 6 | il11iil1 << 26),
                I1iIIl1I = IlIiiII1[liIi1lII - 7],
                ililill = I1iIIl1I.high,
                I1IiIli = I1iIIl1I.low,
                iillIi = IlIiiII1[liIi1lII - 16],
                liliII = iillIi.high,
                I1111l1 = iillIi.low;
              Iili1I = (Iili1I = (Iili1I = lllIII1l + ililill + ((lI11iI1i = III1I1lI + I1IiIli) >>> 0 < III1I1lI >>> 0 ? 1 : 0)) + lIIIII1i + ((lI11iI1i += IIll1li1) >>> 0 < IIll1li1 >>> 0 ? 1 : 0)) + liliII + ((lI11iI1i += I1111l1) >>> 0 < I1111l1 >>> 0 ? 1 : 0);
              I111l1I.high = Iili1I;
              I111l1I.low = lI11iI1i;
            }
            var iiI1ilII,
              ii1lIiil = IlllIilI & ilIi11li ^ ~IlllIilI & IIiIii,
              iIll1lI = IIl1l1l1 & IiI1ili ^ ~IIl1l1l1 & IiiI11I,
              IIll1111 = ll1iIlIi & IiIlillI ^ ll1iIlIi & Il111lI1 ^ IiIlillI & Il111lI1,
              l11II1il = iliilIi1 & ilil1lil ^ iliilIi1 & IlllIil ^ ilil1lil & IlllIil,
              IiI1IiI1 = (ll1iIlIi >>> 28 | iliilIi1 << 4) ^ (ll1iIlIi << 30 | iliilIi1 >>> 2) ^ (ll1iIlIi << 25 | iliilIi1 >>> 7),
              iIlili1 = (iliilIi1 >>> 28 | ll1iIlIi << 4) ^ (iliilIi1 << 30 | ll1iIlIi >>> 2) ^ (iliilIi1 << 25 | ll1iIlIi >>> 7),
              iIi1i11I = (IlllIilI >>> 14 | IIl1l1l1 << 18) ^ (IlllIilI >>> 18 | IIl1l1l1 << 14) ^ (IlllIilI << 23 | IIl1l1l1 >>> 9),
              Il1iili = (IIl1l1l1 >>> 14 | IlllIilI << 18) ^ (IIl1l1l1 >>> 18 | IlllIilI << 14) ^ (IIl1l1l1 << 23 | IlllIilI >>> 9),
              llII1lI1 = iII1Il1I[liIi1lII],
              ill1I1II = llII1lI1.high,
              ll11111l = llII1lI1.low,
              iIiiIlil = Iliii1Il + iIi1i11I + ((iiI1ilII = iII1IiIl + Il1iili) >>> 0 < iII1IiIl >>> 0 ? 1 : 0),
              iI1i1ili = iIlili1 + l11II1il;
            Iliii1Il = IIiIii;
            iII1IiIl = IiiI11I;
            IIiIii = ilIi11li;
            IiiI11I = IiI1ili;
            ilIi11li = IlllIilI;
            IiI1ili = IIl1l1l1;
            IlllIilI = lli1iIil + (iIiiIlil = (iIiiIlil = (iIiiIlil = iIiiIlil + ii1lIiil + ((iiI1ilII += iIll1lI) >>> 0 < iIll1lI >>> 0 ? 1 : 0)) + ill1I1II + ((iiI1ilII += ll11111l) >>> 0 < ll11111l >>> 0 ? 1 : 0)) + Iili1I + ((iiI1ilII += lI11iI1i) >>> 0 < lI11iI1i >>> 0 ? 1 : 0)) + ((IIl1l1l1 = liliIi1I + iiI1ilII | 0) >>> 0 < liliIi1I >>> 0 ? 1 : 0) | 0;
            lli1iIil = Il111lI1;
            liliIi1I = IlllIil;
            Il111lI1 = IiIlillI;
            IlllIil = ilil1lil;
            IiIlillI = ll1iIlIi;
            ilil1lil = iliilIi1;
            ll1iIlIi = iIiiIlil + (IiI1IiI1 + IIll1111 + (iI1i1ili >>> 0 < iIlili1 >>> 0 ? 1 : 0)) + ((iliilIi1 = iiI1ilII + iI1i1ili | 0) >>> 0 < iiI1ilII >>> 0 ? 1 : 0) | 0;
          }
          lI1Il1ll = i11li111.low = lI1Il1ll + iliilIi1;
          i11li111.high = illiil11 + ll1iIlIi + (lI1Il1ll >>> 0 < iliilIi1 >>> 0 ? 1 : 0);
          I1iIii1I = lIiIIilI.low = I1iIii1I + ilil1lil;
          lIiIIilI.high = I1II111 + IiIlillI + (I1iIii1I >>> 0 < ilil1lil >>> 0 ? 1 : 0);
          llll1i1I = ilIl1iIi.low = llll1i1I + IlllIil;
          ilIl1iIi.high = Ii11l1 + Il111lI1 + (llll1i1I >>> 0 < IlllIil >>> 0 ? 1 : 0);
          liIl1Ill = Iili1lII.low = liIl1Ill + liliIi1I;
          Iili1lII.high = li1llII + lli1iIil + (liIl1Ill >>> 0 < liliIi1I >>> 0 ? 1 : 0);
          lliiI1l1 = I1II1Iil.low = lliiI1l1 + IIl1l1l1;
          I1II1Iil.high = ilIIlli + IlllIilI + (lliiI1l1 >>> 0 < IIl1l1l1 >>> 0 ? 1 : 0);
          lI1ii1iI = IiIlli11.low = lI1ii1iI + IiI1ili;
          IiIlli11.high = lI1i1I1 + ilIi11li + (lI1ii1iI >>> 0 < IiI1ili >>> 0 ? 1 : 0);
          ilI1liiI = iliIiI1l.low = ilI1liiI + IiiI11I;
          iliIiI1l.high = illI11I + IIiIii + (ilI1liiI >>> 0 < IiiI11I >>> 0 ? 1 : 0);
          IiiI1iii = l1lIIIII.low = IiiI1iii + iII1IiIl;
          l1lIIIII.high = ii1lI11i + Iliii1Il + (IiiI1iii >>> 0 < iII1IiIl >>> 0 ? 1 : 0);
        },
        "_doFinalize": function () {
          var li11l1li = this._data,
            lI1I1lII = li11l1li.words,
            liIIi1ll = 8 * this._nDataBytes,
            iIl1Il1 = 8 * li11l1li.sigBytes;
          return lI1I1lII[iIl1Il1 >>> 5] |= 128 << 24 - iIl1Il1 % 32, lI1I1lII[30 + (iIl1Il1 + 128 >>> 10 << 5)] = Math.floor(liIIi1ll / 4294967296), lI1I1lII[31 + (iIl1Il1 + 128 >>> 10 << 5)] = liIIi1ll, li11l1li.sigBytes = 4 * lI1I1lII.length, this._process(), this._hash.toX32();
        },
        "clone": function () {
          var l1iI11i = ilillI1l.clone.call(this);
          return l1iI11i._hash = this._hash.clone(), l1iI11i;
        },
        "blockSize": 32
      });
      IllI1iI1.SHA512 = ilillI1l._createHelper(Il111Il1);
      IllI1iI1.HmacSHA512 = ilillI1l._createHmacHelper(Il111Il1);
    }(), li1Iil1l.SHA512);
  })(IlI1I11l);
  var IliIiIIl = {
    "exports": {}
  };
  !function (IilIlll1, ilII1ll) {
    var IlIlIIi;
    IilIlll1.exports = (IlIlIIi = I1ilII1l.exports, function (lllI111l) {
      var Ililii1i = IlIlIIi,
        lil1i1lI = Ililii1i.lib,
        Ill1l1il = lil1i1lI.WordArray,
        lII1Il11 = lil1i1lI.Hasher,
        i11II1lI = Ililii1i.algo,
        iilliII = [],
        lIIi1ill = [];
      !function () {
        function iIlII1i(Ii11lIl) {
          for (var Illill = lllI111l.sqrt(Ii11lIl), iiilIlI1 = 2; iiilIlI1 <= Illill; iiilIlI1++) if (!(Ii11lIl % iiilIlI1)) return !1;
          return !0;
        }
        function iiIi1I1i(i1Ii11ii) {
          return 4294967296 * (i1Ii11ii - (0 | i1Ii11ii)) | 0;
        }
        for (var iI1l1ii1 = 2, liII1lli = 0; liII1lli < 64;) iIlII1i(iI1l1ii1) && (liII1lli < 8 && (iilliII[liII1lli] = iiIi1I1i(lllI111l.pow(iI1l1ii1, 0.5))), lIIi1ill[liII1lli] = iiIi1I1i(lllI111l.pow(iI1l1ii1, 1 / 3)), liII1lli++), iI1l1ii1++;
      }();
      var IiIll1iI = [],
        l1Iiilll = i11II1lI.SHA256 = lII1Il11.extend({
          "_doReset": function () {
            this._hash = new Ill1l1il.init(iilii1lI(iilliII).call(iilliII, 0));
          },
          "_doProcessBlock": function (Il111I1I, lllIlI1l) {
            for (var l1IiI1II = this._hash.words, liIlIlIl = l1IiI1II[0], l1I1Il1 = l1IiI1II[1], i1Iii11I = l1IiI1II[2], Il111iI1 = l1IiI1II[3], liiiliiI = l1IiI1II[4], iiIIiI1l = l1IiI1II[5], IIiIi111 = l1IiI1II[6], iI1liili = l1IiI1II[7], iiilii1l = 0; iiilii1l < 64; iiilii1l++) {
              if (iiilii1l < 16) IiIll1iI[iiilii1l] = 0 | Il111I1I[lllIlI1l + iiilii1l];else {
                var IIiIi11I = IiIll1iI[iiilii1l - 15],
                  IIlII11 = (IIiIi11I << 25 | IIiIi11I >>> 7) ^ (IIiIi11I << 14 | IIiIi11I >>> 18) ^ IIiIi11I >>> 3,
                  i1iI1IlI = IiIll1iI[iiilii1l - 2],
                  iI1ii1 = (i1iI1IlI << 15 | i1iI1IlI >>> 17) ^ (i1iI1IlI << 13 | i1iI1IlI >>> 19) ^ i1iI1IlI >>> 10;
                IiIll1iI[iiilii1l] = IIlII11 + IiIll1iI[iiilii1l - 7] + iI1ii1 + IiIll1iI[iiilii1l - 16];
              }
              var l1ilIli = liIlIlIl & l1I1Il1 ^ liIlIlIl & i1Iii11I ^ l1I1Il1 & i1Iii11I,
                I11il1il = (liIlIlIl << 30 | liIlIlIl >>> 2) ^ (liIlIlIl << 19 | liIlIlIl >>> 13) ^ (liIlIlIl << 10 | liIlIlIl >>> 22),
                iIIlil1l = iI1liili + ((liiiliiI << 26 | liiiliiI >>> 6) ^ (liiiliiI << 21 | liiiliiI >>> 11) ^ (liiiliiI << 7 | liiiliiI >>> 25)) + (liiiliiI & iiIIiI1l ^ ~liiiliiI & IIiIi111) + lIIi1ill[iiilii1l] + IiIll1iI[iiilii1l];
              iI1liili = IIiIi111;
              IIiIi111 = iiIIiI1l;
              iiIIiI1l = liiiliiI;
              liiiliiI = Il111iI1 + iIIlil1l | 0;
              Il111iI1 = i1Iii11I;
              i1Iii11I = l1I1Il1;
              l1I1Il1 = liIlIlIl;
              liIlIlIl = iIIlil1l + (I11il1il + l1ilIli) | 0;
            }
            l1IiI1II[0] = l1IiI1II[0] + liIlIlIl | 0;
            l1IiI1II[1] = l1IiI1II[1] + l1I1Il1 | 0;
            l1IiI1II[2] = l1IiI1II[2] + i1Iii11I | 0;
            l1IiI1II[3] = l1IiI1II[3] + Il111iI1 | 0;
            l1IiI1II[4] = l1IiI1II[4] + liiiliiI | 0;
            l1IiI1II[5] = l1IiI1II[5] + iiIIiI1l | 0;
            l1IiI1II[6] = l1IiI1II[6] + IIiIi111 | 0;
            l1IiI1II[7] = l1IiI1II[7] + iI1liili | 0;
          },
          "_doFinalize": function () {
            var IIli1ili = this._data,
              Iilill1I = IIli1ili.words,
              Iilil1l1 = 8 * this._nDataBytes,
              iIIlIlI1 = 8 * IIli1ili.sigBytes;
            return Iilill1I[iIIlIlI1 >>> 5] |= 128 << 24 - iIIlIlI1 % 32, Iilill1I[14 + (iIIlIlI1 + 64 >>> 9 << 4)] = lllI111l.floor(Iilil1l1 / 4294967296), Iilill1I[15 + (iIIlIlI1 + 64 >>> 9 << 4)] = Iilil1l1, IIli1ili.sigBytes = 4 * Iilill1I.length, this._process(), this._hash;
          },
          "clone": function () {
            var I1iIiIIl = lII1Il11.clone.call(this);
            return I1iIiIIl._hash = this._hash.clone(), I1iIiIIl;
          }
        });
      Ililii1i.SHA256 = lII1Il11._createHelper(l1Iiilll);
      Ililii1i.HmacSHA256 = lII1Il11._createHmacHelper(l1Iiilll);
    }(Math), IlIlIIi.SHA256);
  }(IliIiIIl);
}
function l111IIl1(lli1iIll, iI1ill1l, llI11IIl = "") {
  class i1i1i11I {
    constructor(IilI111i = "", lliliiii = "", Ii1iiIll = "") {
      this.appId = IilI111i;
      this.v = "4.8";
      lliliiii ? this.ua = lliliiii : this.ua = this.__genUA();
      this.fp = Ii1iiIll ? Ii1iiIll : this.__genFp();
    }
    ["__format"](ll11iI1I, II1iilI1) {
      if (!ll11iI1I) ll11iI1I = "yyyy-MM-dd";
      var illiiIil;
      !II1iilI1 ? illiiIil = Date.now() : illiiIil = new Date(II1iilI1);
      var i1lIllli = new Date(illiiIil),
        illiiII1 = ll11iI1I,
        iIillIlI = {
          "M+": i1lIllli.getMonth() + 1,
          "d+": i1lIllli.getDate(),
          "D+": i1lIllli.getDate(),
          "h+": i1lIllli.getHours(),
          "H+": i1lIllli.getHours(),
          "m+": i1lIllli.getMinutes(),
          "s+": i1lIllli.getSeconds(),
          "w+": i1lIllli.getDay(),
          "q+": Math.floor((i1lIllli.getMonth() + 3) / 3),
          "S+": i1lIllli.getMilliseconds()
        };
      /(y+)/i.test(illiiII1) && (illiiII1 = illiiII1.replace(RegExp.$1, "".concat(i1lIllli.getFullYear()).substr(4 - RegExp.$1.length)));
      Object.keys(iIillIlI).forEach(lI1ilili => {
        if (new RegExp("(".concat(lI1ilili, ")")).test(illiiII1)) {
          var llIiI1il = "S+" === lI1ilili ? "000" : "00";
          illiiII1 = illiiII1.replace(RegExp.$1, 1 == RegExp.$1.length ? iIillIlI[lI1ilili] : "".concat(llIiI1il).concat(iIillIlI[lI1ilili]).substr("".concat(iIillIlI[lI1ilili]).length));
        }
      });
      return illiiII1;
    }
    ["__genUA"]() {
      return iI1ill1l = "jdapp;iPhone;12.3.1;;;M/5.0;appBuild/168960;jdSupportDarkMode/0;ef/1;ep/" + encodeURIComponent(JSON.stringify({
        "ciphertype": 5,
        "cipher": {
          "ud": "",
          "sv": "CJGkCm==",
          "iad": ""
        },
        "ts": Math.floor(new Date().getTime() / 1000),
        "hdid": "JM9F1ywUPwflvMIpYPok0tt5k9kW4ArJEU3lfLhxBqw=",
        "version": "1.0.3",
        "appname": "com.360buy.jdmobile",
        "ridx": -1
      })) + ";Mozilla/5.0 (iPhone; CPU iPhone OS 14_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1;", iI1ill1l;
    }
    ["__genFp"]() {
      function llil11l(i11ill1I, iil11Iil) {
        var lill1I11 = [],
          IiIIlli = i11ill1I.length,
          li11l1Il = i11ill1I.split(""),
          Ili1iI1l = "";
        for (; Ili1iI1l = li11l1Il.shift();) {
          if (Math.random() * IiIIlli < iil11Iil) {
            lill1I11.push(Ili1iI1l);
            if (--iil11Iil == 0) break;
          }
          IiIIlli--;
        }
        for (var Il1ilI1l = "", liI1lill = 0; liI1lill < lill1I11.length; liI1lill++) {
          var IiiI1I1I = Math.random() * (lill1I11.length - liI1lill) | 0;
          Il1ilI1l += lill1I11[IiiI1I1I];
          lill1I11[IiiI1I1I] = lill1I11[lill1I11.length - liI1lill - 1];
        }
        return Il1ilI1l;
      }
      function iIi1I11i(IilI1111, iII11i11) {
        for (let Il11l1i of iII11i11.slice()) IilI1111 = IilI1111.replace(Il11l1i, "");
        return IilI1111;
      }
      var l11iIlii = "2mn87xbyof",
        lI11Ii11 = llil11l(l11iIlii, 6),
        l1l11111 = Math.random() * 10 | 0,
        IlilI1ii = iIi1I11i(l11iIlii, lI11Ii11),
        l1i11III = {};
      l1i11III.size = l1l11111;
      l1i11III.customDict = IlilI1ii;
      var liliIlII = this.getRandomIDPro(l1i11III) + lI11Ii11 + this.getRandomIDPro({
          "size": 10 - l1l11111 - 1,
          "customDict": IlilI1ii
        }) + l1l11111,
        iiI11l1I = liliIlII.split(""),
        I1111lI1 = iiI11l1I,
        li1IiI1;
      I1111lI1 = iiI11l1I.slice(0, 14);
      li1IiI1 = iiI11l1I.slice(14);
      var IIIi1Ii = [];
      for (; I1111lI1.length > 0;) {
        IIIi1Ii.push((35 - parseInt(I1111lI1.pop(), 36)).toString(36));
      }
      IIIi1Ii = IIIi1Ii.concat(li1IiI1);
      var iilill1i = IIIi1Ii.join("");
      return iilill1i;
    }
    ["getRandomIDPro"]() {
      var IIiIiII1,
        iiIlIlii,
        IliiIIiI = void 0 === (Iill1lli = (iiIlIlii = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).size) ? 10 : Iill1lli,
        Iill1lli = void 0 === (Iill1lli = iiIlIlii.dictType) ? "number" : Iill1lli,
        ii1l1111 = "";
      if ((iiIlIlii = iiIlIlii.customDict) && "string" == typeof iiIlIlii) IIiIiII1 = iiIlIlii;else switch (Iill1lli) {
        case "alphabet":
          IIiIiII1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "max":
          IIiIiII1 = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
          break;
        case "number":
        default:
          IIiIiII1 = "0123456789";
      }
      for (; IliiIIiI--;) ii1l1111 += IIiIiII1[Math.random() * IIiIiII1.length | 0];
      return ii1l1111;
    }
    ["Encrypt"](iii1ll11, iI1llIi) {
      let iiiiI1I1 = $.CryptoJS.AES.encrypt(iii1ll11, $.CryptoJS.enc.Utf8.parse(iI1llIi.key), {
        "iv": $.CryptoJS.enc.Utf8.parse(iI1llIi.iv),
        "mode": $.CryptoJS.mode.CBC,
        "padding": $.CryptoJS.pad.Pkcs7
      });
      return I1ilII1l.exports.enc.Base64.encode(iiiiI1I1.ciphertext);
      return iiiiI1I1.ciphertext.toString();
    }
    async ["__genAlgo"]() {
      let iI1lIlI = {
          "wc": 0,
          "wd": 0,
          "l": "zh-cn",
          "ls": "zh-cn",
          "ml": 0,
          "pl": 0,
          "av": /\/(.+)/g.exec(this.ua) && /\/(.+)/g.exec(this.ua)[1] || this.ua,
          "ua": this.ua,
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "lite_0.1.5",
            "bu2": 0,
            "bu3": 73,
            "bu4": 0,
            "bu5": 0
          },
          "pp1": "",
          "w": 390,
          "h": 844,
          "ow": 390,
          "oh": 844,
          "url": "https://pro.m.jd.com/mall/active/3RDEv2t1n4nvt1UFWRQ9ghDDA861/index.html?unionActId=31192&d=&s=&cu=true&utm_source=kong&utm_medium=jingfen",
          "og": "https://pro.m.jd.com",
          "pf": "",
          "pr": 3,
          "re": "https://u.jd.com/",
          "random": this.getRandomIDPro({
            "size": 12,
            "dictType": "max",
            "customDict": null
          }),
          "referer": "https://u.jd.com/",
          "v": "h5_file_v4.7.2",
          "ccn": 10,
          "ai": this.appId,
          "fp": this.fp
        },
        lliI1i1l = JSON.stringify(iI1lIlI, null, 2),
        i1IIIII1 = this.Encrypt(lliI1i1l, {
          "key": "(olf1ll#s-w@!0mw",
          "iv": "0102030405060708"
        });
      var IIilllIl = {};
      if (this.v == "4.7") IIilllIl = {
        "appId": this.appId.toString(),
        "expandParams": i1IIIII1 || "",
        "fp": this.fp,
        "fv": "h5_file_v4.7.2",
        "platform": "web",
        "timestamp": Date.now(),
        "version": this.v
      };else this.v == "4.1" ? IIilllIl = {
        "appId": this.appId.toString(),
        "expandParams": i1IIIII1 || "",
        "fp": this.fp,
        "fv": "v1.6.1",
        "platform": "web",
        "timestamp": Date.now(),
        "version": this.v
      } : IIilllIl = {
        "version": this.v,
        "fp": this.fp,
        "appId": this.appId.toString(),
        "timestamp": Date.now(),
        "platform": "web",
        "expandParams": i1IIIII1 || ""
      };
      return new Promise(iIlllIii => {
        let i11iIlIi = {
          "url": "https://cactus.jd.com/request_algo?g_ty=ajax",
          "body": JSON.stringify(IIilllIl),
          "headers": {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "zh-cn",
            "Origin": "https://pro.m.jd.com",
            "Referer": "https://pro.m.jd.com/",
            "user-agent": this.ua
          },
          "timeout": 30000
        };
        $.post(i11iIlIi, async (i1iI1iI, I1Iiiiii, iIliiili) => {
          try {
            if (i1iI1iI) console.log(i1iI1iI);else {
              let Iii111li = $.toObj(iIliiili, iIliiili);
              Iii111li && typeof Iii111li === "object" && Iii111li.data && Iii111li.data.result && Iii111li.data.result.tk && (this.tk = Iii111li.data.result.tk, this.genKey = new Function("return " + Iii111li.data.result.algo)());
            }
          } catch (IiIIII) {
            $.logErr(IiIIII, I1Iiiiii);
          } finally {
            iIlllIii();
          }
        });
      });
    }
    ["genKey"](lll111I, lIliill, lilllii, il1lliil) {
      function il111i(I11i1l1l, iI11IiII, l111il1I) {
        return I11i1l1l ? I11i1l1l.slice(iI11IiII, l111il1I) : "";
      }
      function iII1iIII(i1iIllii) {
        return (i1iIllii + "===".slice((i1iIllii.length + 3) % 4)).replace(/-/g, "+").replace(/_/g, "/");
      }
      function IiilIl1i(IliIiI1i, IlII1IlI, lIiiIlIi) {
        var iiIll1Ii = ilIi11iI[IliIiI1i];
        return IliIiI1i === "local_key_3" ? iiIll1Ii(IlII1IlI, lIiiIlIi).toString() : iiIll1Ii(IlII1IlI).toString();
      }
      var iiIii1i1 = /^[123]([x+][123])+/,
        liiIiI1i = "0?6i#p",
        l1i1II1i = "",
        IIIlIIll = "".concat(lll111I).concat(lIliill).concat(lilllii).concat(il1lliil).concat(liiIiI1i),
        lIiI1I1i = $.CryptoJS.enc.Utf8.stringify($.CryptoJS.enc.Base64.parse(iII1iIII(il111i(lll111I, 16, 28)))),
        IIIl1lli = lIiI1I1i.match(iiIii1i1);
      if (IIIl1lli) {
        var I11iI1i1 = IIIl1lli[0].split(""),
          ilIi11iI = {
            "local_key_1": I1ilII1l.exports.MD5,
            "local_key_2": I1ilII1l.exports.SHA256,
            "local_key_3": I1ilII1l.exports.HmacSHA256
          },
          ilil1l1I = "";
        I11iI1i1.forEach(function (II1Il11I) {
          if (isNaN(II1Il11I)) ["+", "x"].indexOf(II1Il11I) >= 0 && (ilil1l1I = II1Il11I);else {
            var IlII1ll = "".concat("local_key_").concat(II1Il11I);
            if (ilIi11iI[IlII1ll]) switch (ilil1l1I) {
              case "+":
                l1i1II1i = "".concat(l1i1II1i).concat(IiilIl1i(IlII1ll, IIIlIIll, lll111I));
                break;
              case "x":
                l1i1II1i = IiilIl1i(IlII1ll, l1i1II1i, lll111I);
                break;
              default:
                l1i1II1i = IiilIl1i(IlII1ll, IIIlIIll, lll111I);
            }
          }
        });
      }
      return l1i1II1i;
    }
    ["tk"](llI1l1ii, iIiIiIii) {
      var Iii1IlII = this.getRandomIDPro;
      function iiII1II() {
        var I1lIIi = {
          "size": 32,
          "dictType": "max",
          "customDict": null
        };
        for (var l11I11ll = Iii1IlII(I1lIIi), i1ii11li = ["1", "2", "3"], lI11lli = ["+", "x"], I11l11 = 2 + Math.floor(4 * Math.random()), I1lIil1I = "", IllIl1Il = 0; IllIl1Il < I11l11; IllIl1Il++) {
          I1lIil1I += i1ii11li[Math.floor(Math.random() * 3)];
          IllIl1Il < I11l11 - 1 && (I1lIil1I += lI11lli[Math.floor(Math.random() * 2)]);
        }
        I1lIil1I.length < 9 && (I1lIil1I += l11I11ll.substr(0, 9 - I1lIil1I.length));
        var lliil11i = $.CryptoJS.enc.Utf8.parse(I1lIil1I);
        var iIIIiiIl = $.CryptoJS.enc.Base64.stringify(lliil11i);
        iIIIiiIl = iIIIiiIl.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
        return iIIIiiIl;
      }
      function I1i1IlI(i1ll1i1l) {
        var I1l1I1lI = new Uint8Array(i1ll1i1l.length);
        return Array.prototype.forEach.call(I1l1I1lI, function (IlIIlil1, i11liIl1, lil1liiI) {
          lil1liiI[i11liIl1] = i1ll1i1l.charCodeAt(i11liIl1);
        }), IiI1I1I(I1l1I1lI);
      }
      function llIIllll(IiIill1l, iiI1IlII) {
        var li11II11 = 1,
          i11li1Ii = 0,
          Ili11I1 = IiIill1l.length,
          i111lII = 0;
        "number" == typeof iiI1IlII && (li11II11 = 65535 & iiI1IlII, i11li1Ii = iiI1IlII >>> 16 & 65535);
        for (var ii1lI1Ii = 0; ii1lI1Ii < Ili11I1;) {
          for (i111lII = Math.min(Ili11I1 - ii1lI1Ii, 3850) + ii1lI1Ii; ii1lI1Ii < i111lII; ii1lI1Ii++) i11li1Ii += li11II11 += 255 & IiIill1l[ii1lI1Ii];
          li11II11 = 15 * (li11II11 >>> 16) + (65535 & li11II11);
          i11li1Ii = 15 * (i11li1Ii >>> 16) + (65535 & i11li1Ii);
        }
        return i11li1Ii % 65521 << 16 | li11II11 % 65521;
      }
      function iill11Ii(l1iIl1II) {
        const lIIIillI = [],
          III1ilIl = l1iIl1II.length;
        for (let li11II1I = 0; li11II1I < III1ilIl; li11II1I += 4) {
          const ii1I1iil = l1iIl1II[li11II1I] << 24 | l1iIl1II[li11II1I + 1] << 16 | l1iIl1II[li11II1I + 2] << 8 | l1iIl1II[li11II1I + 3];
          lIIIillI.push(ii1I1iil >>> 0);
        }
        return {
          "words": lIIIillI,
          "sigBytes": III1ilIl
        };
      }
      function I1ii1lll(iIIIii1l) {
        var Il1ill = iIIIii1l % Math.pow(2, 32),
          ii1l1I1l = new ArrayBuffer(8),
          i11I11lI = Math.floor(iIIIii1l / Math.pow(2, 32)),
          l111l1l1 = new DataView(ii1l1I1l),
          IlIliI1i = true;
        return l111l1l1.setUint32(0, Il1ill, IlIliI1i), l111l1l1.setUint32(4, i11I11lI, IlIliI1i), new Uint8Array(ii1l1I1l);
      }
      function iii1I1Il(iIiil1iI, iIlilil, llIliIi1, i1lll11l) {
        var IilII11I = new Uint8Array(16);
        Array.prototype.forEach.call(IilII11I, function (IilIiIIi, llii1, iIil1iiI) {
          iIil1iiI[llii1] = iIiil1iI.charCodeAt(llii1);
        });
        var llIi11I1 = I1ii1lll(iIlilil);
        var lIiil11 = new Uint8Array(2);
        Array.prototype.forEach.call(lIiil11, function (iii1i1i, i1l11ii1, iiIIi11I) {
          iiIIi11I[i1l11ii1] = llIliIi1.charCodeAt(i1l11ii1);
        });
        var ilil1l11 = new Uint8Array(12);
        Array.prototype.forEach.call(ilil1l11, function (lilll1Ii, iIIili1, llI1Iii1) {
          llI1Iii1[iIIili1] = i1lll11l.charCodeAt(iIIili1);
        });
        var Ii1Ii1l = new Uint8Array(38);
        Ii1Ii1l.set(lIiil11);
        Ii1Ii1l.set(ilil1l11, 2);
        Ii1Ii1l.set(llIi11I1, 14);
        Ii1Ii1l.set(IilII11I, 22);
        var lIiIili = I1ilII1l.exports.MD5(iill11Ii(Ii1Ii1l)).toString();
        return lIiIili.substr(0, 8);
      }
      function IiI1I1I(I1i1lii1) {
        return Array.prototype.map.call(I1i1lii1, function (iiIlI1i) {
          function i1I1iIii(Illl1Iil, I1iIllll, I1iil1iI, iiI1i1i1) {
            return e(I1iIllll, 0, iiI1i1i1 - 799);
          }
          return ("00" + (iiIlI1i & 255).toString(16)).slice(-2);
        }).join("");
      }
      function iiiI1iI(l1li1i11, i1iiiIIi) {
        var ll1llilI = "";
        var l11l1liI = new Date().getTime();
        i1iiiIIi && (l11l1liI = i1iiiIIi);
        var IIIi1lI = "Dv";
        var ii1lil1l = "=9CM=q#Qr6-8";
        var Ii1111ll = iii1I1Il(l1li1i11, l11l1liI, IIIi1lI, ii1lil1l);
        ll1llilI += I1i1IlI(Ii1111ll);
        ll1llilI += I1i1IlI(IIIi1lI);
        ll1llilI += I1i1IlI(ii1lil1l);
        ll1llilI += IiI1I1I(I1ii1lll(l11l1liI));
        ll1llilI += I1i1IlI(l1li1i11);
        var IIlIiii = $.CryptoJS.enc.Hex.parse(ll1llilI);
        var ilI1Iii = I1ilII1l.exports.enc.Base64.encode(IIlIiii);
        return ilI1Iii;
      }
      function llIIIli1(IilIIilI) {
        function IlI11III(I1IlIIi1, l1lI1il) {
          var i11i1ll1 = 1,
            Il1IiIl1 = 0,
            i1iI1IiI = I1IlIIi1.length,
            Il1IiIlI = 0,
            lI1ll1ii = 0,
            i1i111ll = 0;
          "number" == typeof l1lI1il && (i11i1ll1 = 65535 & l1lI1il, Il1IiIl1 = l1lI1il >>> 16);
          for (var I1IiI = 0; I1IiI < i1iI1IiI;) {
            for (Il1IiIlI = Math.min(i1iI1IiI - I1IiI, 3850); Il1IiIlI > 0;) (lI1ll1ii = I1IlIIi1.charCodeAt(I1IiI++)) < 128 ? i11i1ll1 += lI1ll1ii : lI1ll1ii < 2048 ? (Il1IiIl1 += i11i1ll1 += 192 | lI1ll1ii >> 6 & 31, --Il1IiIlI, i11i1ll1 += 128 | 63 & lI1ll1ii) : lI1ll1ii >= 55296 && lI1ll1ii < 57344 ? (Il1IiIl1 += i11i1ll1 += 240 | (lI1ll1ii = 64 + (1023 & lI1ll1ii)) >> 8 & 7, --Il1IiIlI, Il1IiIl1 += i11i1ll1 += 128 | lI1ll1ii >> 2 & 63, --Il1IiIlI, Il1IiIl1 += i11i1ll1 += 128 | (i1i111ll = 1023 & I1IlIIi1.charCodeAt(I1IiI++)) >> 6 & 15 | (3 & lI1ll1ii) << 4, --Il1IiIlI, i11i1ll1 += 128 | 63 & i1i111ll) : (Il1IiIl1 += i11i1ll1 += 224 | lI1ll1ii >> 12 & 15, --Il1IiIlI, Il1IiIl1 += i11i1ll1 += 128 | lI1ll1ii >> 6 & 63, --Il1IiIlI, i11i1ll1 += 128 | 63 & lI1ll1ii), Il1IiIl1 += i11i1ll1, --Il1IiIlI;
            i11i1ll1 = 15 * (i11i1ll1 >>> 16) + (65535 & i11i1ll1);
            Il1IiIl1 = 15 * (Il1IiIl1 >>> 16) + (65535 & Il1IiIl1);
          }
          return Il1IiIl1 % 65521 << 16 | i11i1ll1 % 65521;
        }
        var IlliIlil = IlI11III(IilIIilI),
          IlliIlil = IlliIlil >>> 0,
          II1ilIli = "00000000" + IlliIlil.toString(16);
        return II1ilIli.substr(II1ilIli.length - 8);
      }
      var iiIl111I = {};
      iiIl111I.magic = "tk";
      iiIl111I.version = "04";
      iiIl111I.platform = "w";
      iiIl111I.expires = "41";
      iiIl111I.producer = "l";
      iiIl111I.expr = iiII1II();
      iiIl111I.cipher = iiiI1iI(llI1l1ii, iIiIiIii);
      iiIl111I.adler32 = llIIIli1(iiIl111I.magic + iiIl111I.version + iiIl111I.platform + iiIl111I.expires + iiIl111I.producer + iiIl111I.expr + iiIl111I.cipher);
      var ilIl1lll = iiIl111I.magic + iiIl111I.version + iiIl111I.platform + iiIl111I.adler32 + iiIl111I.expires + iiIl111I.producer + iiIl111I.expr + iiIl111I.cipher;
      return ilIl1lll;
    }
    ["__genH5st"](IiIi1III = {}, iliiii11 = "") {
      let i1lll1il = undefined,
        i1IIilii = {
          "ua": this.ua,
          "uid": this.uid
        };
      this.time = Date.now();
      var I1IIii1l = this.tk(this.fp, 0);
      if (I1IIii1l) {
        this.timestamp = this.__format("yyyyMMddhhmmssSSS", this.time);
        let II1l11iI = this.genKey(I1IIii1l, this.fp.toString(), this.timestamp.toString() + "84", this.appId.toString(), I1ilII1l.exports).toString();
        var IIili1li = {},
          IiiiliIi = null;
        IiiiliIi = Object.keys(IiIi1III).sort().map(function (IlIli1I) {
          var IlllIlII = {};
          return IlllIlII.key = IlIli1I, IlllIlII.value = IiIi1III[IlIli1I], IlllIlII;
        }).filter(function (llI1Iil1) {
          var I11illII = llI1Iil1.value,
            ii11i11I = "number" == typeof I11illII && !isNaN(I11illII) || "string" == typeof I11illII || "boolean" == typeof I11illII || "body" == llI1Iil1.key;
          if (ii11i11I) {
            if ("body" == llI1Iil1.key && typeof llI1Iil1.value == "object") llI1Iil1.value = JSON.stringify(llI1Iil1.value);
            IIili1li[llI1Iil1.key] = llI1Iil1.value;
          }
          return ii11i11I;
        });
        var ll1111I1 = IIili1li;
        let IIillIIi = "";
        IIillIIi = Object.keys(ll1111I1).map(function (i1l1i1l) {
          return i1l1i1l + ":" + (i1l1i1l == "body" && ll1111I1[i1l1i1l].length !== 64 && ll1111I1[i1l1i1l].slice(0, 1) == "{" ? $.CryptoJS.SHA256(ll1111I1[i1l1i1l]).toString($.CryptoJS.enc.Hex) : ll1111I1[i1l1i1l]);
        }).join("&");
        IIillIIi = I1ilII1l.exports.MD5(II1l11iI + IIillIIi + II1l11iI).toString();
        let I1liIlli = {
          "sua": /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua) && /\((i[^;]+;( U;)? CPU.+Mac OS X)/g.exec(this.ua)[1] || /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua) && /\((M[^;]+;( U;)? Intel.+Mac OS X [0-9_]+)/g.exec(this.ua)[1] || "",
          "pp": {},
          "extend": {
            "wd": 0,
            "l": 0,
            "ls": 0,
            "wk": 0,
            "bu1": "lite_0.1.5",
            "bu2": -1,
            "bu3": 72,
            "bu4": 0,
            "bu5": 0,
            "bu6": 22,
            "bu7": "",
            "bu8": 0
          },
          "random": this.getRandomIDPro({
            "size": 11,
            "dictType": "max",
            "customDict": null
          }),
          "v": "h5_file_v4.8.2",
          "ccn": 10,
          "fp": this.fp
        };
        iliiii11 && (I1liIlli.pp.p1 = iliiii11);
        let I1iliI = JSON.stringify(I1liIlli, null, 2);
        let iiIlII1l = I1ilII1l.exports.enc.Base64.encode($.CryptoJS.enc.Utf8.parse(I1iliI));
        var llIII1I1 = II1l11iI + "appid:";
        IiIi1III.appid ? llIII1I1 += IiIi1III.appid : llIII1I1 += "appid";
        llIII1I1 += "&functionId:";
        IiIi1III.functionId ? llIII1I1 += IiIi1III.functionId : llIII1I1 += "functionId";
        llIII1I1 += II1l11iI;
        i1lll1il = [this.timestamp, this.fp, this.appId.toString(), I1IIii1l, IIillIIi, this.v, this.time.toString(), iiIlII1l, I1ilII1l.exports.MD5(llIII1I1).toString()].join(";");
        i1IIilii.t = ll1111I1.t;
      }
      return i1IIilii.h5st = i1lll1il, i1IIilii;
    }
  }
  return new i1i1i11I(lli1iIll, iI1ill1l, llI11IIl);
}
function l1ii1lIi() {
  class liiII1ii {
    constructor() {
      this.UVCookie = "";
      this.ltr = 0;
      this.mr = [1, 0];
      this.mbaFlag = true;
      this.document = {
        "cookie": "",
        "cookies": "__jdc=122270672;",
        "domain": "prodev.m.jd.com",
        "referrer": "https://u.jd.com/",
        "location": {
          "href": "https://pro.m.jd.com/mall/active/3RDEv2t1n4nvt1UFWRQ9ghDDA861/index.html",
          "hrefs": "https://pro.m.jd.com/mall/active/3RDEv2t1n4nvt1UFWRQ9ghDDA861/index.html"
        }
      };
      this.navigator = {
        "userAgent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "userAgents": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
      };
      this.window = {};
    }
    ["getUVCookie"](Il1iIl1i = "", iI1l11I = "", iI1ilIlI = "", IIl11Iii = "") {
      try {
        this.document.location.href = this.document.location.hrefs + "";
        this.document.cookie = this.document.cookies + "";
        if (iI1ilIlI) this.document.location.href = iI1ilIlI;
        if (IIl11Iii) this.document.cookie = IIl11Iii;
        this.UVCookie = "";
        this.navigator.userAgent = this.navigator.userAgents + "";
        this.ltr = 1011 + Math.round(31 * Math.random());
        if (this.mbaFlag) {
          this.mr[1]++;
          this.mr[1] >= 314 && (this.mr[1] = Math.round(31 * Math.random()));
          !iI1l11I && (iI1l11I = $.CryptoJS.SHA1("").toString());
          let i1ii1II1 = 0;
          while (true) {
            this.mr[0] = parseInt(iI1l11I.match(/\d/g)[i1ii1II1]);
            i1ii1II1++;
            if (this.mr[0] > 0 || i1ii1II1 >= iI1l11I.match(/\d/g).length) break;
          }
          this.mr[0] += Math.round((new Date().getTime() - new Date("2023-06-02").getTime()) / 86400000);
        }
        if (Il1iIl1i) this.navigator.userAgent = Il1iIl1i;
        return this.lr = {
          "ckJda": "__jda",
          "ckJdb": "__jdb",
          "ckJdv": "__jdv",
          "ckJdc": "__jdc",
          "refUrl": "https://u.jd.com/"
        }, this.q(), this.s(iI1l11I), this.UVCookie;
      } catch (III1lliI) {
        console.log(III1lliI);
      }
    }
    ["s"](l1l1i1Il = "") {
      var iilIlIli,
        IlIl1ili,
        IIiI,
        Iii11ilI,
        li1Ii11l = (this.getCookie(this.lr.ckJda) || "").split("."),
        I1ilII1i = (this.getCookie(this.lr.ckJdb) || "").split("."),
        lIli1lli = (this.getCookie(this.lr.ckJdv) || "").split("|"),
        iiIIlIII = this.getCookie(this.lr.ckJdc) || "",
        iIIiIll = parseInt((new Date().getTime() - this.ltr) / 1000),
        lI11IiIl = 0,
        II11lill = 1,
        ii1lliIl = "direct",
        llIiiI1 = "-",
        iIIll1i1 = "none",
        ll1iIi1l = "-";
      if (li1Ii11l.length > 3) for (var iiii111I = 2; iiii111I < 5 && iiii111I < li1Ii11l.length; iiii111I++) {
        var il1iiiIi = li1Ii11l[iiii111I];
        il1iiiIi.length > 10 && (li1Ii11l[iiii111I] = il1iiiIi.substr(0, 10));
      }
      li1Ii11l.length > 5 ? (IIiI = li1Ii11l[0], Iii11ilI = li1Ii11l[1], iilIlIli = parseInt(li1Ii11l[2], 10), IlIl1ili = parseInt(li1Ii11l[3], 10), iIIiIll = parseInt(li1Ii11l[4], 10), II11lill = parseInt(li1Ii11l[5], 10) || II11lill) : (Iii11ilI = this.genUuid(), iilIlIli = iIIiIll, IlIl1ili = iIIiIll);
      this.lr.uuid = Iii11ilI;
      I1ilII1i.length > 3 && (IIiI || (IIiI = I1ilII1i[0]), lI11IiIl = parseInt(I1ilII1i[1], 10) || 0);
      lIli1lli.length > 4 && (IIiI || (IIiI = lIli1lli[0]), ii1lliIl = lIli1lli[1], llIiiI1 = lIli1lli[2], iIIll1i1 = lIli1lli[3], ll1iIi1l = lIli1lli[4]);
      iiIIlIII && "" !== iiIIlIII && (IIiI || (IIiI = iiIIlIII));
      var lIi1IIl,
        iili1II = [],
        i1111IIi = I1ilII1i.length < 4,
        IlIllIil = this.getParameter("utm_source"),
        IiIi1IIi = false;
      if (IlIllIil) {
        var l11IlII = this.getParameter("utm_campaign"),
          iiiiiI1l = this.getParameter("utm_medium"),
          IIiIiii = this.getParameter("utm_term");
        iili1II.push(IlIllIil || ii1lliIl);
        iili1II.push(l11IlII || llIiiI1);
        iili1II.push(iiiiiI1l || iIIll1i1);
        iili1II.push(IIiIiii || ll1iIi1l);
        ll1iIi1l = iili1II[3];
        IiIi1IIi = !0;
      } else {
        var llIll1i,
          llI1I1i1 = this.lr.refUrl && this.lr.refUrl.split("/")[2],
          lIllIIIi = false;
        if (llI1I1i1 && llI1I1i1.indexOf(this.lr.ckDomain) < 0) {
          for (llIll1i = this.lr.seo, iiii111I = 0; iiii111I < llIll1i.length; iiii111I++) {
            var Ii1li1l = llIll1i[iiii111I].split(":");
            if (llI1I1i1.indexOf(Ii1li1l[0].toLowerCase()) > -1 && this.lr.refUrl.indexOf((Ii1li1l[1] + "=").toLowerCase()) > -1) {
              var Il11i11i = this.getParameter(Ii1li1l[1], this.lr.refUrl);
              /[^\x00-\xff]/.test(Il11i11i) && (Il11i11i = encodeURIComponent(Il11i11i));
              iili1II.push(Ii1li1l[0]);
              iili1II.push("-");
              iili1II.push("organic");
              iili1II.push(Il11i11i || "not set");
              ll1iIi1l = iili1II[3];
              lIllIIIi = !0;
              break;
            }
          }
          lIllIIIi || (llI1I1i1.indexOf("zol.com.cn") > -1 ? (iili1II.push("zol.com.cn"), iili1II.push("-"), iili1II.push("cpc"), iili1II.push("not set")) : (iili1II.push(llI1I1i1), iili1II.push("-"), iili1II.push("referral"), iili1II.push("-")));
        }
      }
      lIi1IIl = iili1II.length > 0 && (iili1II[0] !== ii1lliIl || iili1II[1] !== llIiiI1 || iili1II[2] !== iIIll1i1) && "referral" !== iili1II[2];
      i1111IIi || !i1111IIi && lIi1IIl ? (ii1lliIl = iili1II[0] || ii1lliIl, llIiiI1 = iili1II[1] || llIiiI1, iIIll1i1 = iili1II[2] || iIIll1i1, ll1iIi1l = iili1II[3] || ll1iIi1l, li1Ii11l.length > 5 ? (iilIlIli = parseInt(li1Ii11l[2], 10), IlIl1ili = parseInt(li1Ii11l[4], 10), iIIiIll = parseInt((new Date().getTime() - this.ltr) / 1000), II11lill++, lI11IiIl = 1) : (II11lill = 1, lI11IiIl = 1)) : lI11IiIl++;
      var lI1I11l1 = this.getPageParamFromSdk();
      if (lI1I11l1 && lI1I11l1.vts) {
        var l1lIII1l = 1 * lI1I11l1.vts,
          ilillliI = 1 * lI1I11l1.seq;
        (l1lIII1l > II11lill || l1lIII1l === II11lill && ilillliI >= lI11IiIl) && (II11lill = l1lIII1l, lI11IiIl = ilillliI + 1);
      }
      if (IIiI || (IIiI = this.genHash(this.lr.ckDomain)), this.setCookie(this.lr.ckJda, [IIiI, Iii11ilI, iilIlIli, IlIl1ili, iIIiIll, II11lill || 1].join("."), this.lr.ckDomain, this.lr.ckJdaExp), this.setCookie(this.lr.ckJdb, [IIiI, lI11IiIl, Iii11ilI + "|" + II11lill, iIIiIll].join("."), this.lr.ckDomain, this.lr.ckJdbExp), IiIi1IIi || lIi1IIl || lIli1lli.length < 5) {
        var i1lIII1I = [IIiI, ii1lliIl || "direct", llIiiI1 || "-", iIIll1i1 || "none", ll1iIi1l || "-", new Date().getTime() - this.ltr].join("|");
        this.setJdv(i1lIII1I = encodeURIComponent(i1lIII1I), IIiI);
      }
      this.setCookie(this.lr.ckJdc, IIiI, this.lr.ckDomain);
      if (this.mbaFlag) {
        this.setCookie("shshshfpa", this.shshshfpa(), this.lr.ckDomain);
        this.setCookie("mba_sid", this.mr.join("."), this.lr.ckDomain);
        this.setCookie("mba_muid", [Iii11ilI, this.mr[0], new Date().getTime()].join("."), this.lr.ckDomain);
        this.setCookie("pre_seq", Math.round(5 * Math.random()) * 2 + 1, this.lr.ckDomain);
        var lI11IiIl = 0;
        var lllii11l = "";
        if (l1l1i1Il) {
          while (true) {
            lllii11l += l1l1i1Il.match(/\d/g)[lI11IiIl];
            lI11IiIl++;
            if (lllii11l.split("").length >= 2 || lI11IiIl >= l1l1i1Il.match(/\d/g).length) break;
          }
          this.setCookie("pre_session", l1l1i1Il + "|" + (parseInt(this.mr[0]) + parseInt(lllii11l)), this.lr.ckDomain);
        }
      }
    }
    ["shshshfpa"]() {
      var lliIiI11 = "";
      for (var iIlll1Ii = 1; iIlll1Ii <= 32; iIlll1Ii++) {
        var liill1 = Math.floor(Math.random() * 16).toString(16);
        lliIiI11 += liill1;
        if (iIlll1Ii == 8 || iIlll1Ii == 12 || iIlll1Ii == 16 || iIlll1Ii == 20) lliIiI11 += "-";
      }
      var lI1iI1I = Date.parse(new Date());
      return lI1iI1I = lI1iI1I / 1000, lliIiI11 += "-" + lI1iI1I, lliIiI11;
    }
    ["q"]() {
      this.lr.rpDomain = this.lr.rpDomain || "uranus.jd.com";
      this.lr.logUrl = "//" + this.lr.rpDomain + "/log/m";
      this.lr.logType = {
        "pv": "1",
        "pf": "2",
        "cl": "3",
        "od": "4",
        "pd": "5",
        "hm": "6",
        "magic": "000001"
      };
      this.lr.useTmpCookie ? (this.lr.ckJda = "__tra", this.lr.ckJdb = "__trb", this.lr.ckJdc = "__trc", this.lr.ckJdu = "__tru") : (this.lr.ckJda = "__jda", this.lr.ckJdb = "__jdb", this.lr.ckJdc = "__jdc", this.lr.ckJdu = "__jdu");
      this.lr.ckJdv = "__jdv";
      this.lr.ckWxAppCk = "__jdwxapp";
      this.lr.ckRefCls = "__jd_ref_cls";
      this.lr.ckJdaExp = 15552000000;
      this.lr.ckJdbExp = 1800000;
      this.lr.ckJduExp = 15552000000;
      this.lr.ckJdvExp = 1296000000;
      this.lr.ckJdvEmbeddedExp = 86400000;
      this.lr.ckWxAppCkExp = 15552000000;
      this.lr.mtSubsiteExp = 31536000000;
      this.lr.ckDomain = (this.document.domain.match(/[^.]+\.(com.cn|net.cn|org.cn|gov.cn|edu.cn)$/) || [""])[0] || this.document.domain.replace(/.*?([^.]+\.[^.]+)$/, "$1");
      this.lr.title = this.document.title;
      this.lr.refUrl = this.document.referrer;
      this.lr.seo = ["i.easou.com:q", "m.baidu.com:word", "m.sm.cn:q", "m.so.com:q", "wap.sogou.com:keyword", "m.sogou.com:keyword", "wap.sogo.com:keyword", "m.sogo.com:keyword", "page.roboo.com:q", "ask.com:q", "baidu:word", "baidu:wd", "bing:q", "easou:q", "google:q", "roboo:word", "roboo:q", "sm.cn:q", "so.com:q", "sogou:keyword", "sogou:query", "sogo.com:keyword", "sogo.com:query", "yahoo:p", "yandex:text", "yicha:key"];
    }
    ["setCookie"](I1l1iI11, i1llIliI, IIlilI1I, iiIIIll1) {
      if (I1l1iI11) {
        var IlIi11lI = "";
        if (iiIIIll1) {
          var Ill1lIil = new Date();
          Ill1lIil.setTime(Ill1lIil.getTime() - this.ltr + iiIIIll1);
          IlIi11lI = ";expires=" + Ill1lIil.toGMTString();
        }
        this.UVCookie += I1l1iI11 + "=" + i1llIliI + "; ";
      }
    }
    ["setJdv"](llIliil1, i11IIIil, lii1i1i1) {
      var llll1111 = "";
      llll1111 = this.isPrey(10) && (!llIliil1 || llIliil1.length > 400) ? i11IIIil + "|direct|-|none|-|" + (new Date().getTime() - this.ltr) : llIliil1;
      var iiIlilI = lii1i1i1 || this.isEmbedded() ? this.lr.ckJdvEmbeddedExp : this.lr.ckJdvExp;
      this.setCookie(this.lr.ckJdv || "__jdv", llll1111, this.lr.ckDomain, iiIlilI);
    }
    ["getCookie"](I1liiIll, Ii1i11ll) {
      var Ili1I1li = this.document.cookie.match(new RegExp("(^| )" + I1liiIll + "=([^;]*)(;|$)"));
      return null !== Ili1I1li ? Ii1i11ll ? Ili1I1li[2] : this.urlDecode(Ili1I1li[2]) : "";
    }
    ["genUuid"]() {
      return new Date().getTime() - this.ltr + "" + parseInt(2147483647 * Math.random());
    }
    ["getParameter"](iIl1IIiI, iIl1iii1) {
      var IIIIilll = iIl1iii1 || this.document.location.href,
        III1i1i1 = new RegExp("(?:^|&|[?]|[/])" + iIl1IIiI + "=([^&]*)").exec(IIIIilll);
      return III1i1i1 ? this.urlDecode(III1i1i1[1]) : null;
    }
    ["urlDecode"](IlIill1i) {
      try {
        return decodeURIComponent(IlIill1i);
      } catch (iIII1l1) {
        return IlIill1i;
      }
    }
    ["genHash"](II1ili1) {
      var l11iliIi,
        I111IiIi = 1,
        li1lllIl = 0;
      if (II1ili1) for (I111IiIi = 0, l11iliIi = II1ili1.length - 1; l11iliIi >= 0; l11iliIi--) {
        I111IiIi = 0 !== (li1lllIl = 266338304 & (I111IiIi = (I111IiIi << 6 & 268435455) + (li1lllIl = II1ili1.charCodeAt(l11iliIi)) + (li1lllIl << 14))) ? I111IiIi ^ li1lllIl >> 21 : I111IiIi;
      }
      return I111IiIi;
    }
    ["isPrey"](Iii1I1lI) {
      if (Iii1I1lI >= 100) return !0;
      var li1I1 = this.lr.uuid,
        iIIl1I1i = li1I1.substr(li1I1.length - 2);
      return !!iIIl1I1i && 1 * iIIl1I1i < Iii1I1lI;
    }
    ["isEmbedded"]() {
      var liIliI1l = this.navigator.userAgent || "";
      return /^(jdapp|jdltapp|jdpingou);/.test(liIliI1l) || this.isJdLog();
    }
    ["isJdLog"]() {
      return (this.navigator.userAgent || "").indexOf(";jdlog;") > -1;
    }
    ["getPageParamFromSdk"]() {
      var iiiIl11l, iI1ill11;
      try {
        this.window.JDMAUnifyBridge && this.window.JDMAUnifyBridge.JDMAGetMPageParam ? iI1ill11 = JDMAUnifyBridge.JDMAGetMPageParam() : this.window.JDMAGetMPageParam ? iI1ill11 = JDMAGetMPageParam() : this.window.webkit && this.window.webkit.messageHandlers && this.window.webkit.messageHandlers.JDMASetMPageParam && (iI1ill11 = this.window.prompt("JDMAGetMPageParam", ""));
        iI1ill11 && (iiiIl11l = JSON.parse(iI1ill11));
      } catch (i11111I) {}
      return iiiIl11l;
    }
    ["time"](ilIIIl1l, Ii1iIII = null) {
      const i1i11I11 = Ii1iIII ? new Date(Ii1iIII) : new Date();
      let i1lI1lil = {
        "M+": i1i11I11.getMonth() + 1,
        "d+": i1i11I11.getDate(),
        "H+": i1i11I11.getHours(),
        "m+": i1i11I11.getMinutes(),
        "s+": i1i11I11.getSeconds(),
        "q+": Math.floor((i1i11I11.getMonth() + 3) / 3),
        "S": i1i11I11.getMilliseconds()
      };
      /(y+)/.test(ilIIIl1l) && (ilIIIl1l = ilIIIl1l.replace(RegExp.$1, (i1i11I11.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let II111Ili in i1lI1lil) new RegExp("(" + II111Ili + ")").test(ilIIIl1l) && (ilIIIl1l = ilIIIl1l.replace(RegExp.$1, 1 == RegExp.$1.length ? i1lI1lil[II111Ili] : ("00" + i1lI1lil[II111Ili]).substr(("" + i1lI1lil[II111Ili]).length)));
      return ilIIIl1l;
    }
  }
  llIIliII = new liiII1ii();
}
function IIIi1lii(II1iilIi, lIlI1Iii) {
  var IIl1iil1 = new RegExp("(^|[&?])" + lIlI1Iii + "=([^&]*)(&|$)"),
    ii1ili1l = II1iilIi.match(IIl1iil1);
  if (ii1ili1l != null) return unescape(ii1ili1l[2]);
  return null;
}
function ilI1iII(Ii11iIli) {
  Ii11iIli = Ii11iIli || 32;
  let i11II1I = "abcdef0123456789",
    liliIlIl = i11II1I.length,
    l1IIilli = "";
  for (i = 0; i < Ii11iIli; i++) l1IIilli += i11II1I.charAt(Math.floor(Math.random() * liliIlIl));
  return l1IIilli;
}