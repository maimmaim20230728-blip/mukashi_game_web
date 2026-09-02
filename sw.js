/*
 * 名作の主人公になろう！ - Service Worker
 * cache-first。
 * 🔴🔴 バージョンを上げたら(index.html の footVer / manifest)、
 *      かならず下の CACHE の名前も いっしょに 変えること。
 *      例: v1.0.0 -> mukashi-v100 / v1.0.1 -> mukashi-v101 / v1.1.0 -> mukashi-v110 / v1.8.0 -> mukashi-v180
 *      名前を 据え置くと、古いキャッシュが 残って 更新が 誰にも 届かない。
 * ※更新直後の 初回起動は 旧画面が 出る(cache-first)。開き直すと 新しくなる。
 */
var CACHE = "mukashi-v180";
/* 日本語(正本)と 画面まわり */
var ASSETS = [
  "./",
  "./index.html",
  "./story.js",
  "./story_akazukin.js",
  "./story_kabu.js",
  "./story_urashima.js",
  "./story_kobuta.js",
  "./story_hansel.js",
  "./story_kaguya.js",
  "./story_bremen.js",
  "./story_junishi.js",
  "./story_tsuru.js",
  "./story_alibaba.js",
  "./story_kitakaze.js",
  "./art.js",
  "./audio.js",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png"
];
/* ほかの 11ことば。1ことば = 基底 + さくひん11 + UI辞書 = 13ファイル(ぜんぶで 143)。
   まだ ない ファイルは 下の add が 1件ずつ こけるだけ で、ほかは ちゃんと 入る */
var LANGS = ["en","de","fr","es","it","pt","nl","sv","ko","zh","ar"];
var TALES = ["akazukin","kabu","urashima","kobuta","hansel","kaguya",
             "bremen","junishi","tsuru","alibaba","kitakaze"];
LANGS.forEach(function(x){
  ASSETS.push("./story_" + x + ".js");
  TALES.forEach(function(t){ ASSETS.push("./story_" + t + "_" + x + ".js"); });
  ASSETS.push("./ui_" + x + ".js");
});

self.addEventListener("install", function(e){
  self.skipWaiting();
  // 1つでも欠けると addAll ごと失敗するので、1件ずつ入れて欠品を許容する
  e.waitUntil(caches.open(CACHE).then(function(c){
    return Promise.all(ASSETS.map(function(url){ return c.add(url).catch(function(){}); }));
  }));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE) return caches.delete(k);
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

// cache-first: あればキャッシュ、無ければ取得してキャッシュ(privacy.html や ogp.png はここで貯まる)
self.addEventListener("fetch", function(e){
  if(e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then(function(hit){
      if(hit) return hit;
      return fetch(e.request).then(function(res){
        if(res && res.ok && res.type !== "opaque"){
          var copy = res.clone();
          caches.open(CACHE).then(function(c){ c.put(e.request, copy); });
        }
        return res;
      }).catch(function(){ return caches.match("./index.html"); });
    })
  );
});
