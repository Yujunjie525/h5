const ONLINE_PREVIEW_BASE = "https://game-preview-4gm3fag6151fcf0d-1258495086.ap-shanghai.app.tcloudbase.com/";

// The original game folders are not included in this recovered homepage package.
// Use the deployed builds from disk or from a host that does not contain them.
const isOriginalPreviewHost = window.location.hostname === "game-preview-4gm3fag6151fcf0d-1258495086.ap-shanghai.app.tcloudbase.com";
const resolveGameUrl = (path) => isOriginalPreviewHost ? path : new URL(path, ONLINE_PREVIEW_BASE).href;

const games = [
  { name: "飞机模拟3D", url: resolveGameUrl("./airports_3d_preview/index.html"), gameIcon: "./assets/icon/airport3d_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "山海经异兽挂机进化", url: resolveGameUrl("./origin_of_species_preview/index.html"), gameIcon: "./assets/icon/shanghaijing_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "兄弟跟我冲", url: resolveGameUrl("./run_man_hit_castle_preview/index.html"), gameIcon: "./assets/icon/run_man_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "怪物爱金币", url: resolveGameUrl("./coins/index.html"), gameIcon: "./assets/icon/guaiwu_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "垃圾很忙", url: resolveGameUrl("./RefuseClassification_preview/index.html"), gameIcon: "./assets/icon/refuse_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "火柴人战争英雄", url: resolveGameUrl("./DanWuXuFa_preview/index.html"), gameIcon: "./assets/icon/danwuxufa_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "画图和填色", url: resolveGameUrl("./Draw/index.html"), gameIcon: "./assets/icon/draw_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" },
  { name: "果汁方块派对", url: resolveGameUrl("./fruit_puzzle_cocos_preview/index.html"), gameIcon: "./assets/icon/fruit_icon.png", engineIcon: "./assets/game-engine-badges/cocos.png" }
];
