//Wed Aug 27 2025 09:03:58 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const aj = require("crypto"),
  ak = require("zlib"),
  {
    setTimeout: al
  } = require("timers/promises"),
  {
    execSync: am
  } = require("child_process"),
  an = require("fs"),
  ao = require("path"),
  {
    createRequire: ap
  } = require("module"),
  aq = ao.join(__dirname, ".xf_modules");
if (!an.existsSync(aq)) an.mkdirSync(aq, {
  "recursive": true
});
const ar = ao.join(aq, "package.json");
if (!an.existsSync(ar)) an.writeFileSync(ar, "{\"name\":\"xf-local-modules\",\"private\":true}");
const as = ap(ar);
let at, au, av, aw, ax;
function ay(a, b = "") {
  try {
    const f = b ? a + "@" + b : a;
    console.log("📦 正在安装 " + f + " (隔离目录)");
    const g = "npm install --legacy-peer-deps --no-audit --no-fund --save --prefix \"" + aq + "\" " + f + " --registry=https://registry.npmmirror.com";
    return am(g, {
      "stdio": "inherit"
    }), console.log("✅ " + f + " 安装成功"), true;
  } catch (h) {
    return console.log("❌ " + a + " 安装失败: " + h.message), false;
  }
}
function az(e, f = true, g = "") {
  try {
    const k = as(e);
    return k.default || k;
  } catch (l) {
    if (l.code === "ERR_MODULE_NOT_FOUND" || l.code === "MODULE_NOT_FOUND") {
      if (f) {
        console.log("⚠️ 检测到 " + e + " 未安装 (本地)");
        if (ay(e, g)) try {
          const m = as(e);
          return m.default || m;
        } catch (n) {
          return console.log("❌ " + e + " 加载失败: " + n.message), null;
        }
      }
    } else {
      if (l.code === "ERR_REQUIRE_ESM") return console.log("⚠️ 检测到 " + e + " 模块为ESM版本，可能不兼容"), null;else console.log("❌ " + e + " 加载失败: " + l.message);
    }
    return null;
  }
}
try {
  const bf = az("p-limit", true, "6.1.0");
  ax = bf;
} catch (bg) {
  console.log("⚠️ p-limit模块加载失败，将使用顺序执行模式");
  ax = null;
}
try {
  at = az("axios", true, "^1.6.0");
  au = at;
} catch (bh) {
  console.log("⚠️ axios模块加载失败");
  au = null;
}
try {
  const bi = az("socks-proxy-agent", true, "^7.0.0");
  bi ? (av = bi.SocksProxyAgent, aw = bi.SocksProxyAgent || bi.default || bi) : (av = null, aw = null);
} catch (bj) {
  console.log("⚠️ socks-proxy-agent模块加载失败，代理功能将不可用");
  av = null;
  aw = null;
}
const aA = "喜番",
  aB = "2.0.0",
  aC = "xifan",
  aD = true,
  aE = false;
function aF() {
  const b = new Date(),
    e = f => String(f).padStart(2, "0");
  return e(b.getHours()) + ":" + e(b.getMinutes()) + ":" + e(b.getSeconds());
}
function aG(a, b) {
  console.log("ℹ️ " + aF() + " [" + a + "] " + b);
}
function aH(a, b) {
  console.log("⚠️ " + aF() + " [" + a + "] " + b);
}
function aI(a, b) {
  console.log("❌ " + aF() + " [" + a + "] " + b);
}
async function aJ(a) {
  try {
    const e = String(process.env.heihao || "").trim() === "1";
    if (e) return;
    return await al(a);
  } catch {
    return await al(a);
  }
}
function aK() {
  const b = process.version,
    e = parseInt(b.slice(1).split(".")[0]);
  if (e < 16) throw new Error("Node.js版本过低，当前版本: " + b + "，需要16.0.0或更高版本");
  console.log("📋 Node.js版本: " + b);
  const f = [{
      "name": "crypto",
      "module": aj,
      "required": true
    }, {
      "name": "zlib",
      "module": ak,
      "required": true
    }, {
      "name": "timers/promises",
      "module": {
        "setTimeout": aJ
      },
      "required": true
    }],
    g = [{
      "name": "axios",
      "module": au,
      "required": true,
      "fallback": null
    }, {
      "name": "socks-proxy-agent",
      "module": aw,
      "required": false,
      "fallback": null
    }, {
      "name": "p-limit",
      "module": ax,
      "required": false,
      "fallback": "顺序执行模式"
    }];
  console.log("🔍 检查核心模块...");
  for (const {
    name: h,
    module: i,
    required: j
  } of f) {
    if (!i) {
      if (j) throw new Error("核心模块 [" + h + "] 加载失败，这是系统必需模块");else console.log("⚠️ 核心模块 [" + h + "] 不可用");
    } else console.log("✅ 核心模块 [" + h + "] 正常");
  }
  console.log("🔍 检查外部依赖模块...");
  for (const {
    name: m,
    module: n,
    required: o,
    fallback: p
  } of g) {
    if (!n) {
      if (o) throw new Error("必需模块 [" + m + "] 加载失败，请检查是否正确安装");else console.log("⚠️ 可选模块 [" + m + "] 不可用，将使用" + p);
    } else console.log("✅ 外部模块 [" + m + "] 正常");
  }
  if (typeof aj.createCipheriv !== "function") throw new Error("crypto模块功能异常，无法创建加密器");
  if (typeof ak.gzipSync !== "function") {
    throw new Error("zlib模块功能异常，无法进行gzip压缩");
  }
  if (au && typeof au.create !== "function") {
    if (typeof au === "function") {} else throw new Error("axios模块功能异常，无法创建HTTP客户端");
  }
  aw && typeof aw !== "function" && console.log("⚠️ socks-proxy-agent模块功能异常，代理功能将不可用");
  if (ax && typeof ax !== "function") {
    console.log("⚠️ p-limit模块功能异常，将使用顺序执行模式");
  }
}
function aL(a) {
  const e = a;
  let f = a.trim();
  const g = [],
    h = [];
  if (!f.includes("@")) return g.push("缺少必要的分隔符 @"), {
    "isValid": false,
    "fixed": null,
    "errors": g,
    "warnings": h
  };
  const i = f.split("@");
  if (i.length < 5) return g.push("账号信息不完整，需要至少5个部分，当前只有" + i.length + "个部分"), {
    "isValid": false,
    "fixed": null,
    "errors": g,
    "warnings": h
  };
  i.length > 6 && h.push("账号信息包含过多部分(" + i.length + "个)，可能包含多余信息");
  const [j, k, l, m, n, o] = i;
  if (!j || j.trim().length === 0) {
    g.push("第1部分(备注名)不能为空");
  } else j.length > 50 && h.push("第1部分(备注名)过长，建议不超过50字符");
  if (!k || k.trim().length === 0) g.push("第2部分(Cookie)不能为空");else {
    if (!k.includes("userId=")) g.push("第2部分(Cookie)缺少userId信息");else k.length < 20 && h.push("第2部分(Cookie)长度异常，可能不完整");
  }
  if (!l || l.trim().length === 0) g.push("第3部分(message)不能为空");else {
    if (l.length < 10) {
      h.push("第3部分(message)长度异常，可能不完整");
    }
  }
  if (!m || m.trim().length === 0) {
    g.push("第4部分(SystemUa)不能为空");
  } else m.length < 10 && h.push("第4部分(SystemUa)长度异常，可能不完整");
  if (!n || n.trim().length === 0) {
    g.push("第5部分(BrowserUa)不能为空");
  } else {
    if (n.length < 10) {
      h.push("第5部分(BrowserUa)长度异常，可能不完整");
    }
  }
  if (o && o.trim().length > 0) {
    if (!o.includes("|") && !o.includes("#")) {
      h.push("第6部分(代理信息)格式可能不正确，应使用 | 或 # 分隔");
    }
  }
  let p = false;
  if (g.length === 0) {
    const A = i.map(C => C.trim()),
      B = A.join("@");
    B !== e && (f = B, p = true, h.push("已自动清理各部分的前后空格"));
  }
  return {
    "isValid": g.length === 0,
    "fixed": p ? f : null,
    "errors": g,
    "warnings": h
  };
}
function aM() {
  const b = [{
    "name": "xifan",
    "value": process.env.xifan,
    "description": "账号配置信息"
  }, {
    "name": "xfkm",
    "value": process.env.xfkm,
    "description": "卡密验证信息"
  }];
  for (const {
    name: h,
    value: i,
    description: j
  } of b) {
    if (!i || !i.trim()) {
      throw new Error("环境变量 [" + h + "] 未设置或为空，" + j + "缺失");
    }
  }
  const e = process.env.xifan,
    f = aL(e);
  if (!f.isValid) {
    console.log("❌ xifan环境变量格式错误:");
    f.errors.forEach(m => {
      console.log("   - " + m);
    });
    f.fixed && (console.log("💡 已自动修复格式，修复后的格式:"), console.log("   " + f.fixed), console.log("💡 请更新环境变量为修复后的格式"));
    throw new Error("环境变量 [xifan] 格式错误，共" + f.errors.length + "个错误");
  }
  if (f.warnings.length > 0) {
    console.log("⚠️ xifan环境变量格式警告:");
    f.warnings.forEach(o => {
      console.log("   - " + o);
    });
  }
  f.fixed && (console.log("✅ xifan环境变量格式已自动修复"), console.log("   原始格式: " + e), console.log("   修复格式: " + f.fixed));
  const g = process.env.xfkm;
  if (g.length < 5) {
    throw new Error("环境变量 [xfkm] 长度异常，卡密信息可能不完整");
  }
  if (g.includes(" ") || g.includes("\n") || g.includes("\t")) throw new Error("环境变量 [xfkm] 包含无效字符，请检查是否有多余的空格或换行符");
  !/^[a-zA-Z0-9_-]+$/.test(g) && console.log("⚠️ xfkm环境变量包含特殊字符，可能影响使用");
}
function aN() {
  return new Promise((b, e) => {
    if (!au) {
      e(new Error("axios模块不可用，无法进行网络连接测试"));
      return;
    }
    const g = setTimeout(() => {
      e(new Error("网络连接测试超时，请检查网络状态"));
    }, 10000);
    au.get("http://www.baidu.com", {
      "timeout": 5000
    }).then(() => {
      clearTimeout(g);
      b(true);
    }).catch(i => {
      clearTimeout(g);
      if (i.code === "ECONNREFUSED") e(new Error("网络连接被拒绝，请检查防火墙设置"));else {
        if (i.code === "ENOTFOUND") e(new Error("DNS解析失败，请检查网络配置"));else {
          if (i.code === "ETIMEDOUT") {
            e(new Error("网络连接超时，请检查网络速度"));
          } else e(new Error("网络连接异常: " + i.message));
        }
      }
    });
  });
}
function aO() {
  const b = require("os"),
    e = b.totalmem(),
    f = b.freemem(),
    g = ((e - f) / e * 100).toFixed(1);
  if (f < 100 * 1024 * 1024) throw new Error("系统内存不足，可用内存: " + (f / 1024 / 1024).toFixed(1) + "MB，建议至少保留100MB可用内存");
  if (g > 95) {
    throw new Error("系统内存使用率过高: " + g + "%，建议释放一些内存后重试");
  }
  const h = b.platform();
  if (h !== "win32" && h !== "linux" && h !== "darwin") {
    throw new Error("不支持的操作系统平台: " + h + "，仅支持Windows、Linux和macOS");
  }
  const i = b.cpus();
  if (i.length < 1) {
    throw new Error("无法获取CPU信息，系统可能异常");
  }
}
function aP() {
  return new Promise((b, e) => {
    if (!au) {
      e(new Error("axios模块不可用"));
      return;
    }
    const g = setTimeout(() => {
      e(new Error("签名服务器连接测试超时"));
    }, 15000);
    au.get("http://125.77.163.37:18888/jk.php", {
      "timeout": 10000
    }).then(i => {
      clearTimeout(g);
      if (i.status === 200) try {
        const k = i.data;
        if (Array.isArray(k) && k.length > 0) {
          const l = k.some(n => n.name === "sig1" && Array.isArray(n.interfaces)),
            m = k.some(n => n.name === "sig3" && Array.isArray(n.interfaces));
          if (!l) {}
          if (!m) {}
          b(true);
        } else e(new Error("签名服务器返回数据格式异常，接口列表为空"));
      } catch (n) {
        e(new Error("签名服务器返回数据解析失败: " + n.message));
      } else e(new Error("签名服务器响应异常，状态码: " + i.status));
    }).catch(i => {
      clearTimeout(g);
      if (i.response) e(new Error("签名服务器响应错误，状态码: " + i.response.status));else {
        if (i.code === "ECONNREFUSED") e(new Error("签名服务器连接被拒绝，请检查服务器状态"));else {
          if (i.code === "ENOTFOUND") {
            e(new Error("签名服务器地址解析失败，请检查网络配置"));
          } else i.code === "ETIMEDOUT" ? e(new Error("签名服务器连接超时，请检查网络速度")) : e(new Error("签名服务器连接异常: " + i.message));
        }
      }
    });
  });
}
async function aQ() {
  console.log("🔍 开始系统环境检查...\n");
  try {
    console.log("📦 检查依赖模块...");
    aK();
    console.log("✅ 依赖模块检查通过\n");
    console.log("🌍 检查环境变量...");
    aM();
    console.log("✅ 环境变量检查通过\n");
    console.log("💾 检查系统资源...");
    aO();
    console.log("✅ 系统资源检查通过\n");
    console.log("🌐 检查网络连接...");
    await aN();
    console.log("✅ 网络连接检查通过\n");
    console.log("🎉 所有系统检查完成，环境正常！\n");
    return true;
  } catch (g) {
    console.log("❌ 系统检查失败: " + g.message + "\n");
    console.log("📊 当前模块状态:");
    console.log("   - axios: " + (au ? "✅ 可用" : "❌ 不可用"));
    console.log("   - socks-proxy-agent: " + (aw ? "✅ 可用" : "❌ 不可用"));
    console.log("   - p-limit: " + (ax ? "✅ 可用" : "❌ 不可用"));
    if (g.message.includes("依赖模块")) console.log("💡 解决方案：程序已尝试自动安装依赖包，如果仍有问题请手动运行 npm install\n");else {
      if (g.message.includes("环境变量")) console.log("💡 解决方案：请在青龙面板中正确设置环境变量\n");else {
        if (g.message.includes("网络连接")) console.log("💡 解决方案：请检查网络连接和防火墙设置\n");else {
          if (g.message.includes("签名服务器")) console.log("💡 解决方案：请检查签名服务器状态或联系管理员\n");else {
            if (g.message.includes("系统资源")) {
              console.log("💡 解决方案：请释放系统资源或重启系统\n");
            } else {
              if (g.message.includes("Node.js版本")) console.log("💡 解决方案：请升级Node.js到16.0.0或更高版本\n");else {
                if (g.message.includes("axios模块不可用")) console.log("💡 解决方案：程序已尝试自动安装axios模块，如果仍有问题请手动运行 npm install axios\n");else g.message.includes("HTTP客户端创建失败") && console.log("💡 解决方案：程序已尝试自动安装依赖，如果仍有问题请检查网络连接或手动安装\n");
              }
            }
          }
        }
      }
    }
    return console.log("💡 请根据以上错误信息进行相应修复后重新运行\n"), false;
  }
}
function aR(a) {
  if (!a || a.length <= 10) return a || "";
  return "" + a.slice(0, 5) + "*".repeat(Math.max(0, a.length - 10)) + a.slice(-5);
}
function aS(a, b = 3, e = 3) {
  if (!a) return "";
  if (a.length <= b + e) return "*".repeat(Math.max(3, a.length));
  return a.slice(0, b) + "***" + a.slice(-e);
}
function aT(a) {
  return ak.gzipSync(a).toString("base64");
}
function aU(a) {
  return ak.gunzipSync(a).toString("base64");
}
function aV(a) {
  const e = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    f = Buffer.from(a, "base64"),
    g = aj.createCipheriv("aes-128-ecb", e, null);
  g.setAutoPadding(true);
  const h = Buffer.concat([g.update(f), g.final()]);
  return h.toString("base64");
}
function aW(a) {
  const e = Buffer.from("GWL8jXHLnzp63QDH", "utf8"),
    f = Buffer.from(a, "base64"),
    g = aj.createDecipheriv("aes-128-ecb", e, null);
  g.setAutoPadding(true);
  const h = Buffer.concat([g.update(f), g.final()]),
    i = Buffer.from(h).toString("base64"),
    j = Buffer.from(i, "base64"),
    k = aU(j),
    l = Buffer.from(k, "base64").toString("utf8");
  return l;
}
function aX(a) {
  const e = JSON.parse(aW(a));
  e.timestamp = String(Math.round(Date.now()));
  const f = JSON.stringify(e),
    g = aT(Buffer.from(f, "utf8"));
  return aV(g);
}
function aY(a, b) {
  const f = JSON.parse(aW(a)),
    g = String(Math.round(Date.now()));
  if ("inspireHomeParam" in f) delete f.inspireHomeParam;
  f.timestamp = g;
  f.inspireEventReportParam = b;
  const h = JSON.stringify(f),
    i = aT(Buffer.from(h, "utf8"));
  return aV(i);
}
function aZ(a, b, e, f) {
  const h = JSON.parse(aW(a)),
    i = String(Math.round(Date.now()));
  if ("inspireHomeParam" in h) delete h.inspireHomeParam;
  h.timestamp = i;
  h.inspireTaskReportParam = {
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": "0",
        "taskToken": e
      },
      "idempotentId": f
    }],
    "continuousTimes": 0,
    "taskId": b
  };
  const j = JSON.stringify(h),
    k = aT(Buffer.from(j, "utf8"));
  return aV(k);
}
function b0(a, b) {
  const f = JSON.parse(aW(a)),
    g = String(Math.round(Date.now()));
  f.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": g,
    "values": [-0.6101697683334351 + b2(0, 5), -0.8641080856323242 + b2(0, 5), 10.127023696899414 + b2(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": g,
    "values": [0.0007635590736754239 + b2(0, 5), 0.0009162708884105086 + b2(0, 5), -0.00007635590736754239 + b2(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": g,
    "values": [-0.5920952558517456 + b2(0, 5), -0.829244077205658 + b2(0, 5), 9.753571510314941 + b2(0, 5)]
  }];
  f.timestamp = g;
  f.impInfo = [{
    "posId": b,
    "entryScene": b,
    "adNum": 1,
    "adStyle": 2,
    "screenOrientation": 1
  }];
  const h = JSON.stringify(f),
    i = aT(Buffer.from(h, "utf8"));
  return aV(i);
}
function b1(a, b, e, f, g, h, i, j, k, l = 0) {
  const n = JSON.parse(aW(a)),
    o = String(Math.round(Date.now()));
  n.sensorEventInfoList = [{
    "sensorType": 1,
    "timestamp": o,
    "values": [-0.6101697683334351 + b2(0, 5), -0.8641080856323242 + b2(0, 5), 10.127023696899414 + b2(0, 5)]
  }, {
    "sensorType": 4,
    "timestamp": o,
    "values": [0.0007635590736754239 + b2(0, 5), 0.0009162708884105086 + b2(0, 5), -0.00007635590736754239 + b2(0, 5)]
  }, {
    "sensorType": 9,
    "timestamp": o,
    "values": [-0.5920952558517456 + b2(0, 5), -0.829244077205658 + b2(0, 5), 9.753571510314941 + b2(0, 5)]
  }];
  n.timestamp = o;
  n.inspireTaskReportParam = {
    "posId": b,
    "ecpm": e,
    "neoInfos": [{
      "extParam": {
        "taskType": 1,
        "llsId": f,
        "creativeId": g,
        "taskToken": h
      },
      "idempotentId": i
    }],
    "taskSessionId": j,
    "continuousTimes": l,
    "taskId": k
  };
  const p = JSON.stringify(n),
    q = aT(Buffer.from(p, "utf8"));
  return aV(q);
}
function b2(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}
function b3(a) {
  const e = (f = {}) => {
    if (!au) return null;
    if (typeof au.create === "function") return au.create(f);
    return au;
  };
  if (!a) return e();
  if (!aw) {
    return console.log("⚠️ 代理功能不可用，将使用直连模式"), e();
  }
  try {
    const h = new aw(a);
    return e({
      "httpAgent": h,
      "httpsAgent": h
    });
  } catch (i) {
    return console.log("⚠️ 代理创建失败，将使用直连模式"), e();
  }
}
let b4 = {
    "sig1": [],
    "sig3": []
  },
  b5 = false,
  b6 = null;
async function b7() {
  if (b5) return;
  if (b6) return b6;
  if (!au) {
    console.log("❌ axios模块不可用，无法加载签名接口");
    b5 = true;
    return;
  }
  return b6 = (async () => {
    try {
      const e = await au.get("http://125.77.163.37:18888/jk.php", {
          "timeout": 20000
        }),
        f = Array.isArray(e.data) ? e.data : [],
        g = f.find(i => i && i.name === "sig1"),
        h = f.find(i => i && i.name === "sig3");
      b4.sig1 = (g?.["interfaces"] || []).map(i => i.url).filter(Boolean);
      b4.sig3 = (h?.["interfaces"] || []).map(i => i.url).filter(Boolean);
    } catch {}
    b5 = true;
  })(), b6;
}
function b8(a) {
  const e = b4[a] || [];
  if (!e.length) return null;
  const f = e[Math.floor(Math.random() * e.length)];
  return f.startsWith("http") ? f : "http://" + f;
}
function b9(a, b) {
  const f = process.env.xfkm || "";
  try {
    const g = new URL(a.startsWith("http") ? a : "http://" + a);
    return g.searchParams.set("xfkm", f), g.searchParams.set("user", b || ""), g.toString();
  } catch {
    return a;
  }
}
async function ba(a, b, f) {
  let h = 0;
  await b7();
  while (h <= 5) {
    try {
      const [i, j = ""] = a.split("&&", 1 + 1),
        k = "https://tube.e.kuaishou.com" + i,
        l = b8("sig3");
      if (!l) return aI("签名", "网络错误"), null;
      const m = b9(l, f),
        n = await b.post(m, JSON.stringify({
          "url": k,
          "body": j
        }), {
          "headers": {
            "Content-Type": "application/json"
          },
          "timeout": 20000
        });
      if (n.status === 200) {
        const o = n.data;
        if (o?.["status"] === "success" && o?.["data"]?.["sig3"]) return o.data.sig3;
      }
      return aI("签名", "签名失败"), null;
    } catch (q) {
      const r = q?.["response"]?.["status"],
        s = q?.["response"]?.["data"];
      if (r === 403 && s) {
        try {
          const t = typeof s === "string" ? JSON.parse(s) : s;
          if (t?.["error"]) aI("签名", "Sig3验证失败: " + t.error);else aI("签名", "Sig3验证失败: HTTP " + r);
        } catch {
          aI("签名", "Sig3验证失败: HTTP " + r + " - " + (typeof s === "string" ? s : JSON.stringify(s)));
        }
      } else r ? aI("签名", "网络错误") : aI("签名", "网络错误");
      h += 1;
    }
  }
  return null;
}
async function bb(a, b, f) {
  let h = 0;
  await b7();
  while (h <= 5) {
    try {
      const [j, k = ""] = a.split("&&", 1 + 1),
        l = b8("sig1");
      if (!l) return aI("签名", "网络错误"), null;
      const m = b9(l, f),
        n = {
          "path": j,
          "params": k
        },
        o = await b.post(m, n, {
          "timeout": 20000
        });
      if (o.status === 200) {
        const p = o.data;
        if (p?.["status"] === "success") return p.signature;
        aI("签名", "签名失败: " + (p?.["message"] || "未知错误"));
      } else aI("签名", "服务器返回错误");
    } catch (q) {
      const r = q?.["response"]?.["status"],
        s = q?.["response"]?.["data"];
      if (r === 403 && s) try {
        const u = typeof s === "string" ? JSON.parse(s) : s;
        if (u?.["error"]) aI("签名", "Sig1验证失败: " + u.error);else aI("签名", "Sig1验证失败: HTTP " + r);
      } catch {
        aI("签名", "Sig1验证失败: HTTP " + r + " - " + (typeof s === "string" ? s : JSON.stringify(s)));
      } else r ? aI("签名", "获取Sig1失败重试") : aI("签名", "获取Sig1失败重试");
      h += 1;
    }
  }
  return null;
}
class bc {
  constructor(a) {
    const f = a.split("@");
    this.bz = f[0];
    this.ck = f[1];
    this.message = f[2];
    this.sua = f[3];
    this.bua = f[4];
    if (f.length === 6) {
      const h = f[5];
      let i, j, k, l;
      try {
        if (h.includes("|")) {
          const n = h.split("|");
          [i, j, k, l] = [n[0], n[1], n[2], n[3]];
        } else {
          if (h.includes("#")) {
            const o = h.split("#");
            [i, j, k, l] = [o[0], o[1], o[2], o[3]];
          } else aI(this.bz, "SOCKS5 代理格式不正确，请按要求填写");
        }
        this.proxyUrl = "socks5h://" + k + ":" + l + "@" + i + ":" + j;
        aG(this.bz, "代理: " + aR(i));
        this.http = b3(this.proxyUrl);
      } catch (p) {
        aI(this.bz, "SOCKS5 代理解析失败，请检查格式");
        this.http = au ? au.create() : null;
      }
    } else this.proxyUrl = null, this.http = au ? au.create() : null, aG(this.bz, "未配置代理。多账号请确保一号一代理。");
    this.ua = this.sua + "-ksad-android-3.3.55.2";
    const g = /userId=([^;]+)/.exec(this.ck || "");
    if (g) this.user_id = g[1];else throw new Error("请检查Cookie格式");
    if (!this.http) throw new Error("HTTP客户端创建失败，请检查axios模块是否正确安装");
    this.AdXunHuan = 0;
    this.BoxAdXunHuan = 0;
    this.max_gold = parseInt(process.env.MAXgol || "1500000", 10);
  }
  ["log"](a, b = "info") {
    if (b === "info") aG(this.bz, a);else {
      if (b === "error") aI(this.bz, a);else {
        if (b === "warning") aH(this.bz, a);else aG(this.bz, a);
      }
    }
  }
  async ["checkSock5"]() {
    if (!this.proxyUrl) return {
      "available": true
    };
    try {
      const f = Date.now();
      await this.http.get("http://www.baidu.com", {
        "timeout": 10000
      });
      const g = (Date.now() - f) / 1000;
      return {
        "available": true,
        "response_time": Number(g.toFixed(2)),
        "error": null
      };
    } catch (h) {
      return {
        "available": false,
        "response_time": null,
        "error": String(h)
      };
    }
  }
  async ["User_info"](a = true) {
    const e = "https://tube.e.kuaishou.com/rest/e/tube/inspire/home",
      f = {
        "version": "3.3.55.2",
        "appVersion": "2.7.2.2",
        "appId": "1091400011",
        "message": aX(this.message)
      };
    let g = JSON.stringify(f);
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/home&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      }),
      j = i.data;
    if (j?.["result"] === 1) {
      const l = JSON.parse(aW(j.data)),
        m = l.accountInfoV2?.["coinAccount"]?.["amount"],
        n = l.accountInfoV2?.["cashAccount"]?.["amountDisplay"];
      if (Number(m || 0) >= this.max_gold) return this.log("金币达到阈值(" + this.max_gold + ")，停止执行", "warning"), false;
      if (a) {
        this.log("余额: 金币=" + m + " (≈" + Number(m || 0) / 30000 + ") | 现金=" + n);
      }
      const o = l.watchTubeTaskInfo?.["tasks"] || [];
      this.watchTubeTask = o[0];
      if (!l.dailyTaskInfo) this.log("Cookie 失效，请重新抓取");
      const p = l.dailyTaskInfo?.["tasks"] || [];
      for (const s of p) {
        if (s.id === 6002) {
          if (a) await this.SignIn(s);
        }
        if (s.id === 6005) this.adData = s;
      }
      return true;
    }
    return this.log("用户信息获取失败: " + JSON.stringify(j)), false;
  }
  async ["Treasure_Box"]() {
    const b = "https://tube.e.kuaishou.com/rest/e/tube/inspire/treasureBox",
      e = aX(this.message);
    let f = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": e
    });
    f = f.replaceAll("/", "\\/");
    const g = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/treasureBox&&" + f, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      h = await this.http.post(b, f, {
        "headers": g
      }),
      i = h.data;
    if (i?.["result"] === 1) {
      const j = JSON.parse(aW(i.data));
      this.BoxAdInfo = j?.["popupInfo"]?.["buttonInfo"]?.["linkUrl"];
      const k = j.id,
        l = j.taskToken,
        m = j?.["popupInfo"]?.["stages"] || [];
      let n = "";
      for (const o of m) {
        if (o.status === 13) {
          n = o.stageIndex;
          break;
        } else {
          if (o.status === 10) {
            const p = Math.floor((o.countdown || 0) / 1000 / 60),
              q = o.subtitle;
            this.log("宝箱" + q + "，预计剩余 " + p + " 分钟");
          }
        }
      }
      if (n !== "") {
        const t = await this.Task_Report(k, l, n);
        if (t?.["taskFinished"]) this.log("宝箱开启成功，本次获得 " + t.amount + " 金币");
      }
    } else this.log("宝箱信息拉取失败: " + JSON.stringify(i));
  }
  async ["Event_Report"](a) {
    const e = "https://tube.e.kuaishou.com/rest/e/tube/inspire/event/report",
      f = aY(this.message, a);
    let g = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": f
    });
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/event/report&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      });
    return i.data;
  }
  async ["Task_Report"](a, b, e) {
    const g = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report",
      h = aZ(this.message, a, b, e);
    let i = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": h
    });
    i = i.replaceAll("/", "\\/");
    const j = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + i, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      k = await this.http.post(g, i, {
        "headers": j
      }),
      l = k.data;
    if (l?.["result"] === 1) return JSON.parse(aW(l.data));
    return this.log("任务上报未通过"), null;
  }
  async ["SignIn"](a) {
    const e = a.popupInfo,
      f = e.taskId,
      g = e.taskToken,
      h = e.stages || [];
    let i = null;
    for (const k of h) {
      if (k.title === "今天") {
        i = k;
        break;
      }
    }
    if (!i) {
      this.log("今日已签到");
      return;
    }
    const j = i.stageIndex;
    if (i.status === 10) {
      this.log("进行签到");
      const l = await this.Task_Report(f, g, j);
      if (l?.["statusCode"] === 1003) this.log(l.errorMessage);
    }
  }
  async ["GetAd"](a) {
    const e = "https://open.e.kuaishou.com/rest/e/v3/open/univ",
      f = b0(this.message, a);
    let g = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": f
    });
    g = g.replaceAll("/", "\\/");
    const h = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig1": await bb("/rest/e/v3/open/univ&&" + g, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      i = await this.http.post(e, g, {
        "headers": h
      }),
      j = i.data;
    if (j?.["result"] === 1) return JSON.parse(aW(j.impAdInfo));
    return [];
  }
  async ["Upload_Video_Time"]() {
    const b = Date.now(),
      e = {
        "eventType": "WATCH_TUBE",
        "eventTime": b,
        "data": "{\"tubeId\":\"3412489\",\"episodeNumber\":1,\"photoId\":\"77298100\",\"watchTime\":30}"
      },
      f = await this.Event_Report(e);
    if (f?.["result"] === 1) this.log("时长上报完成");
  }
  async ["watchTube"]() {
    const b = this.watchTubeTask?.["taskStatus"];
    if (b === 13) {
      const e = await this.Task_Report(this.watchTubeTask.id, this.watchTubeTask.extParam.taskToken, this.watchTubeTask.process);
      if (e?.["taskFinished"]) this.log("任务完成，领取 " + e.amount + " 金币");
    } else b === 10 && (this.log(this.watchTubeTask?.["subtitle"] || "继续观看以解锁奖励"), await this.Upload_Video_Time());
  }
  async ["WatchAD"]() {
    if (!this.adData) {
      return this.log("今日广告任务已完成"), false;
    }
    const b = this.adData.extParam.taskToken,
      e = this.adData.id;
    let f = this.adData.buttonInfo.linkUrl;
    while (f.length % 4 !== 0) f += "=";
    const g = JSON.parse(Buffer.from(f, "base64").toString("utf8")),
      h = g.posId,
      i = await this.GetAd(h);
    let j, k, l, m;
    if (i.length >= 1) {
      const v = i[0];
      j = v.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      k = v.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      const w = JSON.parse(v.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
      l = w.transId;
      m = String(l || "").split("_");
    } else {
      const y = Date.now();
      j = 148407627585 + b2(0, 1000000);
      k = b2(400, 400 + 50000);
      l = "2008597857549383489_" + j + "_" + y;
      m = l.split("_");
    }
    const n = b1(this.message, h, k, m[0], j, b, m[0] + "_" + m[1], m[2], e);
    await aJ(b2(16, 32) * 1000);
    const o = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let p = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": n
    });
    p = p.replaceAll("/", "\\/");
    const q = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + p, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      s = await this.http.post(o, p, {
        "headers": q
      }),
      t = s.data;
    if (t?.["result"] === 1) {
      const A = JSON.parse(aW(t.data));
      if (A?.["taskFinished"]) {
        this.log("广告完成，获得 " + A.amount + " 金币");
        if (A.amount === 50) return this.log("此号疑似黑号"), false;
        if (A.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        if (A.popUp && A.popUp.id === "continuousWatchAdPopup") {
          const C = A.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let D = C;
          while (D.length % 4 !== 0) D += "=";
          const E = JSON.parse(Buffer.from(D, "base64").toString("utf8")),
            F = E.extParams,
            G = E.posId,
            H = E.businessId;
          await aJ(b2(2, 6) * 1000);
          this.AdXunHuan = 0;
          await this.MoreWatchAD(F, G, H);
        }
      } else return this.log("广告上报失败（A）"), false;
    } else {
      return this.log("广告上报失败（B）"), false;
    }
    return true;
  }
  async ["MoreWatchAD"](a, b, e) {
    this.AdXunHuan += 1;
    const g = await this.GetAd(b);
    let h, i, j, k;
    if (g.length >= 1) {
      const s = g[0];
      h = s.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      i = s.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      const t = JSON.parse(s.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
      j = t.transId;
      k = String(j || "").split("_");
    } else {
      const v = Date.now();
      h = 148407627585 + b2(0, 1000000);
      i = b2(400, 400 + 50000);
      j = "2008597857549383489_" + h + "_" + v;
      k = j.split("_");
    }
    const l = b1(this.message, b, i, k[0], h, a, k[0] + "_" + k[1], k[2], e, this.AdXunHuan);
    await aJ(b2(18, 30) * 1000);
    const m = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let n = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": l
    });
    n = n.replaceAll("/", "\\/");
    const o = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + n, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      p = await this.http.post(m, n, {
        "headers": o
      }),
      q = p.data;
    if (q?.["result"] === 1) {
      const w = JSON.parse(aW(q.data));
      if (w?.["taskFinished"]) {
        if (w.amount === 50) return this.log("此号疑似黑号"), false;
        if (w.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
        this.log("嵌套广告第 " + this.AdXunHuan + " 次完成，获得 " + w.amount + " 金币");
        if (w.popUp && w.popUp.id === "continuousWatchAdPopup") {
          const y = w.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
          let z = y;
          while (z.length % 4 !== 0) z += "=";
          const A = JSON.parse(Buffer.from(z, "base64").toString("utf8")),
            B = A.extParams,
            C = A.posId,
            D = A.businessId;
          await aJ(b2(2, 6) * 1000);
          await this.MoreWatchAD(B, C, D);
        } else this.log("嵌套广告累计次数：" + this.AdXunHuan), this.AdXunHuan = 0;
      } else this.log("广告上报失败（A）");
    } else {
      this.log("广告上报失败（B）");
    }
    return true;
  }
  async ["BoxAd"]() {
    this.BoxAdXunHuan = 0;
    let b = this.BoxAdInfo || "";
    if (!b || b.trim() === "") {
      this.log("宝箱广告信息为空，跳过宝箱广告任务");
      return;
    }
    try {
      while (b.length % 4 !== 0) b += "=";
      const g = JSON.parse(Buffer.from(b, "base64").toString("utf8"));
      if (!g || !g.businessId || !g.extParams || !g.posId) {
        this.log("宝箱广告数据结构无效，跳过宝箱广告任务");
        return;
      }
      const h = g.businessId,
        i = g.extParams,
        j = g.posId;
      await this.WatchBoxAd(i, j, h);
    } catch (l) {
      this.log("宝箱广告数据解析失败: " + l.message + "，跳过宝箱广告任务");
      return;
    }
  }
  async ["WatchBoxAd"](a, b, f) {
    this.BoxAdXunHuan += 1;
    if (!(await this.User_info(false))) {
      return this.log("账号金币已达上限，停止执行"), false;
    }
    const h = await this.GetAd(b);
    let i, j, k, l;
    if (h.length >= 1) {
      const u = h[0];
      i = u.adInfo?.[0]?.["adBaseInfo"]?.["creativeId"];
      j = u.adInfo?.[0]?.["adBaseInfo"]?.["ecpm"];
      try {
        const v = JSON.parse(u.adInfo?.[0]?.["adConversionInfo"]?.["callbackUrlInfo"] || "{}");
        k = v.transId;
        l = String(k || "").split("_");
      } catch (x) {
        this.log("广告回调信息解析失败: " + x.message + "，使用默认值");
        const y = Date.now();
        i = i || 148407627585 + b2(0, 1000000);
        j = j || b2(400, 400 + 50000);
        k = "2008597857549383489_" + i + "_" + y;
        l = k.split("_");
      }
    } else {
      const z = Date.now();
      i = 148407627585 + b2(0, 1000000);
      j = b2(400, 400 + 50000);
      k = "2008597857549383489_" + i + "_" + z;
      l = k.split("_");
    }
    const m = b1(this.message, b, j, l[0], i, a, l[0] + "_" + l[1], l[2], f, this.BoxAdXunHuan);
    await aJ(b2(18, 30) * 1000);
    const n = "https://tube.e.kuaishou.com/rest/e/tube/inspire/task/report";
    let o = JSON.stringify({
      "version": "3.3.55.2",
      "appVersion": "2.7.2.2",
      "appId": "1091400011",
      "message": m
    });
    o = o.replaceAll("/", "\\/");
    const p = {
        "User-Agent": this.ua,
        "Connection": "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Ks-Sig3": await ba("/rest/e/tube/inspire/task/report&&" + o, this.http, this.user_id),
        "Ks-Encoding": "2",
        "BrowserUa": this.bua,
        "SystemUa": this.sua,
        "Ks-PkgId": "com.kwai.theater1c48a12657a227fa339710301806365b",
        "Content-Type": "application/json; charset=utf-8",
        "Cookie": this.ck
      },
      q = await this.http.post(n, o, {
        "headers": p
      }),
      s = q.data;
    if (s?.["result"] === 1) {
      try {
        const B = JSON.parse(aW(s.data));
        if (B?.["taskFinished"]) {
          if (B.amount === 50) return this.log("此号疑似黑号"), false;
          if (B.amount < 100) this.log("此号疑似半黑 尝试手动看视频提高下金币量吧");
          this.log("宝箱广告第 " + this.BoxAdXunHuan + " 次完成，获得 " + B.amount + " 金币");
          if (B.popUp && B.popUp.id === "continuousWatchAdPopup") {
            const D = B.popUp.data?.["buttonInfo"]?.["linkUrl"] || "";
            if (D && D.trim() !== "") {
              try {
                let F = D;
                while (F.length % 4 !== 0) F += "=";
                const G = JSON.parse(Buffer.from(F, "base64").toString("utf8"));
                if (G && G.extParams && G.posId && G.businessId) {
                  const I = G.extParams,
                    J = G.posId,
                    K = G.businessId;
                  await aJ(b2(2, 6) * 1000);
                  const L = await this.WatchBoxAd(I, J, K);
                  if (!L) return false;
                } else {
                  this.log("嵌套广告数据结构无效，停止嵌套广告");
                }
              } catch (N) {
                this.log("嵌套广告数据解析失败: " + N.message + "，停止嵌套广告");
              }
            } else this.log("嵌套广告链接为空，停止嵌套广告");
          } else this.log("本次共执行[" + this.BoxAdXunHuan + "]次宝箱广告"), this.BoxAdXunHuan = 0;
        } else this.log("广告上报失败（A）");
      } catch (Q) {
        return this.log("广告响应解析失败: " + Q.message), false;
      }
    } else this.log("广告上报失败（B）");
    return true;
  }
  async ["main"]() {
    await this.User_info();
    await this.Treasure_Box();
    await aJ(b2(3, 6) * 1000);
    while (true) {
      if (!(await this.User_info(false))) return;
      if (!(await this.WatchAD())) break;
      await aJ(b2(15, 40) * 1000);
    }
    await this.BoxAd();
    await this.watchTube();
  }
}
async function bd() {
  const b = await aQ();
  if (!b) {
    console.log("❌ 系统环境检查未通过，程序终止运行");
    return;
  }
  const f = process.env[aC];
  if (!f) {
    console.warn("请先设置环境变量[" + aC + "]");
    return;
  }
  const g = process.env.xfkm;
  if (!g || !g.trim()) {
    console.error("未检测到环境变量[xfkm]，请先在青龙面板设置 xfkm 后再运行。");
    return;
  }
  if (aD) {
    if (au) {
      try {
        const m = await au.get("http://125.77.163.37:18888/gg.php", {
          "timeout": 10000
        });
        let n = m?.["data"] ?? "";
        if (Buffer.isBuffer(n)) n = n.toString("utf8");
        n = String(n).trim();
        n && n !== "0" && console.log(n, "\n\n\n");
      } catch {}
    } else console.log("⚠️ axios模块不可用，无法获取公告信息");
  }
  if (aE) {
    const p = b2(10, 60);
    console.log("已启用随机延时：" + p + " 秒");
    await aJ(p * 1000);
  }
  const h = be(f);
  console.log("账号数量：" + h.length);
  console.log("▶ 开始运行：" + aA + " " + aB);
  const i = Date.now(),
    j = parseInt(process.env.maxth || "1", 10);
  if (ax) {
    const q = ax(Math.max(1, j));
    await Promise.all(h.map((s, t) => q(async () => {
      try {
        const v = new bc(s),
          w = await v.checkSock5();
        if (!w.available) v.log("代理不可用 错误信息: [" + w.error + "]", "error");else {
          if (w.response_time != null) v.log("代理可用 响应时间: [" + w.response_time + "秒]");
        }
        await v.main();
      } catch (x) {
        console.error("账号" + (t + 1) + "执行错误:", x);
      }
    })));
  } else {
    console.log("⚠️ 并发控制不可用，将使用顺序执行模式");
    console.log("💡 如需并发执行，请降级p-limit版本：npm install p-limit@6.1.0");
    for (let s = 0; s < h.length; s++) {
      try {
        const v = new bc(h[s]),
          w = await v.checkSock5();
        if (!w.available) v.log("代理不可用 错误信息: [" + w.error + "]", "error");else {
          if (w.response_time != null) v.log("代理可用 响应时间: [" + w.response_time + "秒]");
        }
        await v.main();
      } catch (x) {
        console.error("账号" + (s + 1) + "执行错误:", x);
      }
    }
  }
  const k = (Date.now() - i) / 1000;
  console.log("\n■ 运行结束：" + aA);
  console.log("⏱ 总耗时：" + k.toFixed(2) + " 秒");
}
function be(a) {
  if (a.includes("\n")) return a.split("\n").filter(Boolean);
  if (a.includes("&")) return a.split("&").filter(Boolean);
  return [a];
}
require.main === module && bd().catch(a => {
  console.error(a);
  process.exit(1);
});