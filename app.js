/* =============================================
   TUMADAM MOD — app.js
   ============================================= */

/* =============================================
   DATA — GAME DOWNLOADS 
   hide: false = hiện, true = ẩn
   status: for app Testfilght
   ============================================= */
const GAMES = [
  {
    name:     'Aov Mod(No Hack)',
    meta:     'Cập nhật 18/8',
    desc:     'Bản mod không hắc — Chỉ Mod Skin.\n Tuy Nhiên Bị Tố Sẽ Ban 1-3-7 Ngày.',
    img:      'https://play-lh.googleusercontent.com/Yw0Btf8-k6y4lOnAUf7XW6GYP8SwxXsqWcnabNhqXUSFNhn_azJ-t9jDTdR4a063qwUPo-JtCQAmoLfo8gecTA=w240-h480-rw',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://unlock.tumadam.com/aovmod.html',
    hide:     false,
    status:   false,
    preview:  ['https://cdn.tumadam.com/games/preview/bba60245-7738-4588-afdc-bbdd5f637c8e.webp',
    'https://cdn.tumadam.com/games/preview/89df9f0d-14d2-44ad-b7df-45e2790237b9.webp',
    'https://cdn.tumadam.com/games/preview/8cbb42bf-2d14-41df-8f7c-5396c4c293e9.webp',
    ],
    extraBtns: [
      {
        label: '📋 Danh sách skin gặp lỗi khi dùng unlock',
        type:  'link',
        url:   'https://unlock.tumadam.com/note-list-skin.html',
        icon:  'bi-list-check',
      },
    ],
  },
  {
    name:     'Aov Cheat(Map+Mod)',
    meta:     'Cập nhật 7/8',
    desc:     'Hack map sáng + mod skin full chức năng.\n -Chơi kín không phang bụi(tránh bị tố)\n-Không nên dùng aim,auto bán đồ(dễ ban)',
    img:      'https://play-lh.googleusercontent.com/Yw0Btf8-k6y4lOnAUf7XW6GYP8SwxXsqWcnabNhqXUSFNhn_azJ-t9jDTdR4a063qwUPo-JtCQAmoLfo8gecTA=w240-h480-rw',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://unlock.tumadam.com/aovcheat.html',
    hide:     false,
    status:   false,
    preview:  ['https://cdn.tumadam.com/games/preview/96bcf782-b412-4976-b6c5-0c9cb76a2db3.webp',
    'https://cdn.tumadam.com/games/preview/77d769f7-939a-4c92-b7b8-0dc8e20f343f.webp',
    'https://cdn.tumadam.com/games/preview/b768dd80-04fc-468d-b173-5bfa63f8516c.webp',
    'https://cdn.tumadam.com/games/preview/06b2d32f-1c7d-491e-a413-3a276094fd1d.webp',
    'https://cdn.tumadam.com/games/preview/3032cd62-d49c-45ca-8d39-14aa6b0017dc.webp',
    ],
    extraBtns: [
      {
        label: '⚠️ Lưu ý khi dùng Map',
        type:  'note',
        icon:  'bi-exclamation-triangle-fill',
        note:  '-Chỉ Bật Các Chức Năng Hack Map,Cam Xa,modskin\n• -K Nên Dùng Aim,Auto Bán Đồ(Dễ Ban Year Nếu Ăn Tố Dồn).\n-Chơi kín,k phang bụi,hạn chế bị tố là oke',
      },
    ],
  },
  {
    name:     'Aov Esp',
    meta:     'Cập nhật 18/8',
    desc:     'Aov Map Esp Trụ 12 Phiếu/ngày',
    img:      'https://play-lh.googleusercontent.com/Yw0Btf8-k6y4lOnAUf7XW6GYP8SwxXsqWcnabNhqXUSFNhn_azJ-t9jDTdR4a063qwUPo-JtCQAmoLfo8gecTA=w240-h480-rw',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://unlock.tumadam.com/aovesp.html',
    hide:     false,
    status:   false,
    preview:  ['https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1786963424865-qtlg2r-IMG_0111.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1786963424866-83lgro-IMG_0112.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1786963424866-xfxww-IMG_0113.png&w=1920&q=75',
    ],
    extraBtns: [
      {
        label: '⚠️ Lưu ý khi dùng Esp',
        type:  'note',
        icon:  'bi-exclamation-triangle-fill',
        note:  '-Chỉ Bật Các Chức Năng Esp,modskin,phần cài đặt-->trụ 6phiếu/ngày\n• -Chấp nhiều vé đồng nghĩa với 3 year!)\n• -K dùng tab Aim&Auto.',
      },
    ],
  },
    {
    name:     'Map/Skin AOV Android V2',
    meta:     'Cập nhật 12/8 • Dùng Unlock nếu không muốn hắc',
    desc:     'Mod map sáng + unlock skin cho Android. Chỉ hỗ trợ bản 64-bit.\n• Dùng Unlock nếu chỉ cần mod skin (không hắc tài khoản).\n• Dùng Map+Mod nếu muốn thêm tính năng (có hack, cần key).',
    img:      'https://i.imgur.com/vKPMWWx.jpeg',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'android',
    url64:    'https://unlock.tumadam.com/aovandrv2.html',
    url32:    '',
    urlKey:   'https://unlock.tumadam.com/aovandr.html',
    hide:     false,
    status:   false,
    preview:  ['',
    '',
    '',
    ],
    extraBtns: [
      {
        label: '📋 Danh sách skin trận ảo (Unlock)',
        type:  'link',
        url:   'https://unlock.tumadam.com/note-list-skin.html',
        icon:  'bi-list-check',
      },
    ],
  },
  {
    name:     'PUPG iOS PRO',
    meta:     'Cập nhật 12/8',
    desc:     'PUBG Bắn Kín Diễn Như K Có Hack(Aim Nên Cho Bụng)\n-Mod Skin Cần Tải TN',
    img:      'https://play-lh.googleusercontent.com/qJjSHY-p4OyoL1fKBkw24njL1W4FaYvB-xQ0BvMjbNtSQbkD3ZN1rEKiCSrGEuWiOh6gW_o0sasTgb4SgJdkvA=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://unlock.tumadam.com/pupg.html',
    hide:     false,
    status:   false,
    preview:  ['https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1785946192355-5qmdkb-IMG_9851.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1785946192356-q8cge9-IMG_9852.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1785946192356-6kh16c-IMG_9853.png&w=1920&q=75',
        'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1785946192356-o8yf7r-IMG_9854.png&w=1920&q=75',
    ],
    extraBtns: [
      {
        label: '⚠️ Lưu ý khi dùng PUBG iOS',
        type:  'note',
        icon:  'bi-exclamation-triangle-fill',
        note:  '• Aim nên chỉnh vào bụng/ngực, tránh headshot liên tục dễ bị report.\n• Không nên phang quá đà chỉ diễn như k có hack.\n• Mod skin cần tải Full Tài nguyên(gợi ý vô phần hạng tải tn thk top1 và tải hết phần tn trong xưởng là oke).\n• Nên chơi kín, không quay màn hình post lên mạng.',
      },
    ],
  },
  {
    name:     '8 Ball Pool',
    meta:     'Cập nhật 28/7',
    desc:     'Setting Auto Aim Như Ảnh Preview',
    img:      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Ficons%2Filwrr8-1785234523057.png&w=384&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://ipas.cc/ilwrr8',
    hide:     false,
    status:   false,
    preview:  [
      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1785234781476-qolvh-IMG_9676.png&w=1920&q=75',
    ],
  },
  {
    name:     'Roblox iOS Client Delta(VNG+Global) ',
    meta:     'Cập nhật 11/8',
    desc:     'Roblox iOS tích hợp Bypass Key — chạy script trong game.',
    img:      'https://cdn.aptoide.com/imgs/e/b/2/eb203036af2bf931259d9c2ae254b2cd_icon.png',
    type:     'ios',
    url:      'https://ontops.link/0Pm2-Km',
    hide:     false,
    status:   false,
    preview:  [
      'https://cdn.tumadam.com/games/preview/571bdf45-d629-4d6d-b53e-f46b010c7f84.webp',
      'https://cdn.tumadam.com/games/preview/a487499c-9fac-46bd-9d56-e2f0b4c61a43.webp',
      'https://cdn.tumadam.com/games/preview/2027fd1c-9d4d-4166-b64d-231255b774a8.webp',
      'https://cdn.tumadam.com/games/preview/c99f101f-190b-4c00-b1be-6761b8198c28.webp',
    ],
  },
        {
    name:     'FF DS',
    meta:     'Cập nhật 6/8',
    desc:     '-',
    img:      'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Ficons%2F4ufgtp-1785977542684.png&w=384&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://ipas.cc/figf5v',
    hide:     true,
    status:   false,
    preview:  ['https://dl.ipas.cc/previews/figf5v/video-0-1785826340706.mov',
    ],
  },
];
/* =============================================
   DATA — GET KEY
   ============================================= */
const KEYS = [
  {
    name:      'Get Key LQ iOS',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://unlock.tumadam.com/getkeylqm.html',
    hide:      false,
  },
    {
    name:      'Get Key Aov ESP',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://unlock.tumadam.com/getkeyesp.html',
    hide:      false,
  },
  {
    name:      'Get Key Pupg PRO iOS',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://unlock.tumadam.com/getkeypupgproios.html',
    hide:      false,
  },
  {
    name:      'Get Key LQ Android V2',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'android',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://unlock.tumadam.com/aovandr.html',
    hide:      false,
  },
  
];

/* =============================================
   DATA — NHẠC INTRO (phát ngay khi vào web, 1 lần duy nhất)
   Thay link bên dưới bằng file nhạc bạn muốn
   ============================================= */
const INTRO_TRACK = 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/ElevenLabs_2026-06-09T15_47_05_Adam%20-%20Dominant%2C%20Firm_eleven_v3.mp3'; // ← đổi link nhạc intro ở đây

/* =============================================
   DATA — PLAYLIST (random sau khi intro xong)
   ============================================= */
const PLAYLIST = [
  { title: 'Sound 1', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_Thua-Luon-Ban-Hot-TikTok-AM-Remix-No-Dan_Media_aFhgqQTQx14_006_144p.mp4' },
  { title: 'Sound 2', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_Nhac-Remix-LOP-TRUONG-Trend-Tiktok-BXH-N_Media_wYQQszTG_1k_006_144p.mp4' },
  { title: 'Sound 3', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_Ngay-Hai-Ta-Sat-Vai-Remix-Ban-Peak-TikTo_Media_FjjTNg_FTlk_006_144p.mp4' },
  { title: 'Sound 4', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_Mashup-2in1-Gian-Dang-Iu-Hong-x-Truc-Xin_Media_cdgdkuN0Y_8_006_144p.mp4' },
  { title: 'Sound 5', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_Doi-Chan-Lac-Loi-MP-x-VH-Remix-Ban-Hot-T_Media_hzYEo8Zqyos_006_144p.mp4' },
  { title: 'Sound 6', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_DAWGS-F-Y-TAZLE-x-WAVXR-BILL-REMIX_Media_4E3JoWAzc_c_006_144p.mp4' },
    { title: 'Sound 7', src: 'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/sound/YTSave_YouTube_3IN1-Mo-Long-Vi-Ai-Remix-AM-Remix-Lamine_Media_fX9GPgGdCfs_006_144p.mp4' },
];

/* =============================================
   DATA — MOD FILES
   type: 'zip' | 'ios' | 'ipa'
   hide: false = hiện, true = ẩn
   ============================================= */
const MOD_FILES = [
  {
    name:      'Bot Tạo File Mod Skin Aov',
    meta:      'Tự động 24/24 • iOS + Android',
    desc:      'Bot tự tạo file mod skin theo yêu cầu||Chọn skin → Bot gửi file ngay, hoạt động 24/24.',
    type:      'bot',
    url:       'https://t.me/tumadammodskin_bot',
    urlStrong: '',
    urlWeak:   '',
    hide:      false,
    badge:     '24/24',
    guide: {
      title: '🤖 Cách dùng Bot tạo file Mod Skin',
      steps: [
        {
          heading: 'Bước 1 — Mở Bot',
          body:    'Bấm vào nút để mở Bot trên Telegram, bấm Start để khởi động.',
        },
        {
          heading: 'Bước 2 — Chọn Skin',
          body:    '-Bấm nút chọn skin ngay chỗ bàn phím để chọn skin-->chọn xong qua phần giỏ xem lại và bấm Khởi chạy mod',
        },
        {
          heading: 'Bước 3 — Tạo file',
          body:    '-Sau khi khởi chạy mod bot sẽ làm file tầm 3-10 phút-->sau khi tạo file xong bot đưa trang lấy mật khẩu-->vào đó vượt link để lấy mật khẩu và gửi cho bot là đc.',
        },
        {
          heading: 'Lưu ý',
          body:    '-Mod file vẫn có nguy cơ trận ảo nếu gặp thì bật menu lên chọn xoá mod file-->sau đó thoát vô lại là ok.',
        },
      ],
    },
  },
  {
    name:      'File Mod AOV iOS (Zip)',
    meta:      'Cập nhật 3/8',
    desc:      'File cho iOS||Mod file dễ lỗi trận chỉ nên dùng unlock skin.',
    type:      'ios',
    // url dùng chung nếu không có urlStrong/urlWeak
    url:       'https://cdn.tumadam.com/files/44383e13-90bc-4bb9-86b2-5e5a3aa98fc2.zip',
    // Nếu có 2 bản riêng thì điền vào đây, không có thì để '' → dùng url chung
    urlStrong: '',
    urlWeak:   '',
    hide:  true,
    guide: {
      title: '🛠️ Fix Trận Ảo AOV iOS',
      steps: [
        {
          heading: 'Trận ảo là gì?',
          body:    'Trận Ảo là hiện tướng đối thủ tự đi vô trụ?tự huỷ,đánh k giống người thật,nói chung là như phá game',
        },
        {
          heading: 'Cách Fix Nếu Gặp',
          body:    'Về Unlock Skin Bạn Chỉ Cần Thoát Game Vô Lại Là Được',
        },
        {
          heading: 'Về Mod Files',
          body:    'Bạn Chỉ Cần Bật Menu Lên Chọn Xoá Mod Skin,Force Update(Ở gần nút mod files)',
        },
        {
          heading: 'Báo Cáo Admin',
          body:    'Nhắn tin qua tele@tumadam2507 và báo skin bạn vừa gặp lỗi trận(nhớ nói cụ thể mod files hay unlock).',
        },
      ],
    },
  },
  {
    name:      'File Mod AOV Android (ZIP)',
    meta:      'Cập nhật 2/6',
    desc:      'Giải nén và copy vào thư mục game.',
    type:      'zip',
    url:       'https://tumadam.com/files/aov-mod-andr.zip',
    urlStrong: '',
    urlWeak:   '',
    hide:      true,
    guide:     null,
  },
];

/* =============================================
   DATA — VIDEO HƯỚNG DẪN
   url: link bất kỳ — YouTube, Catbox .mov/.mp4, Google Drive, v.v.
   thumb: (tuỳ chọn) link ảnh thumbnail — bỏ trống sẽ dùng icon mặc định
   ============================================= */
const VIDEOS = [
  {
    name:  'Hướng dẫn Mod File AOV iOS',
    meta:  'Xem trên Telegram',
    url:   'https://t.me/tumadammod1/1749',
    thumb: '',
    note:  '',
    steps: {
      title: '📋 Lưu ý về File Mod',
      items: [
        'Files dùng có thời hạn — hiện thông báo update thì bấm Xoá Mod ở menu.',
        'Chỉ dùng files gửi lên web (file tào lao lỗi trận ráng chịu).',
        'Dùng unlock skin vẫn okla hơn — khuyên vậy.',
      ],
    },
    hide:  false,
  },
  {
    name:  'Hướng dẫn Cài App trên iOS(Cài bằng chứng chỉ)',
    meta:  'Video hướng dẫn chi tiết',
    url:   'https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/copy_CD6B6FC3-B16A-4A32-ACB2-3B87C5B32A8F.MOV',
    thumb: '',
    note:  '',
    steps: {
      title: '📋 Lưu ý trước khi xem',
      items: [
        'Xem kĩ nếu chưa biết cài app trên iOS.',
      ],
    },
    hide:  false,
  },
    {
    name:  'Hướng dẫn Cài App trên iOS(Cài Qua TestFlight)',
    meta:  'Video hướng dẫn chi tiết',
    url:   'https://cdn.tumadam.com/files/3e4d30c8-7e97-4ba5-bbc9-4014a3f99b0e.mov',
    thumb: '',
    note:  '',
    steps: {
      title: '📋 Lưu ý trước khi xem',
      items: [
        'Xem kĩ nếu chưa biết cài app trên iOS.',
      ],
    },
    hide:  false,
  },
  {
    name:  'Hướng dẫn chuyển tài nguyên liên quân',
    meta:  'Video hướng dẫn chi tiết',
    url:   'https://cdn.tumadam.com/games/preview/0e8f69c2-2517-4038-8130-662d271c894b.mov',
    thumb: '',
    note:  '',
    steps: null,
    hide:  false,
  },
];
const TYPED_STRINGS = [
  'I am Van Man',
  "I'm a Developer & Modder",
  'Top 1 Hacker DakLak =))',
  'Welcome to my Website! ❤️',
  'Scroll down to explore 👇',
];

/* =============================================
   PLATFORM BADGE
   ============================================= */
function platformBadge(type) {
  if (type === 'android') {
    return `<span class="platform-badge android"><i class="bi bi-android2"></i> Android</span>`;
  }
  if (type === 'ios') {
    return `<span class="platform-badge ios"><i class="bi bi-apple"></i> iOS</span>`;
  }
  return '';
}

/* =============================================
   RENDER — GAME CARD
   ============================================= */
function renderGameCard(game) {
  if (game.hide === true) return null;

  // Wrap nếu có extraBtns
  const hasExtra = game.extraBtns && game.extraBtns.length > 0;
  const wrapper  = hasExtra ? document.createElement('div') : null;
  if (wrapper) wrapper.className = 'game-card-wrap';

  const el = document.createElement('div');
  el.className = 'game-card';

  if (game.type === 'android') {
    el.dataset.type   = 'android';
    el.dataset.url64  = game.url64  || '';
    el.dataset.url32  = game.url32  || '';
    el.dataset.urlKey = game.urlKey || '';
  } else {
    el.dataset.type = 'direct';
    el.dataset.url  = game.url;
  }

  const previewImgs = game.preview && game.preview.filter(p => p && p.startsWith('http')).length > 0
    ? game.preview.filter(p => p && p.startsWith('http')) : [game.img];
  el.dataset.preview = JSON.stringify(previewImgs);
  el.dataset.name    = game.name;
  el.dataset.desc    = game.desc || game.meta || '';
  el.dataset.status  = game.status ? 'true' : 'false';
  const countBadge = previewImgs.length > 1
    ? `<span class="preview-count">${previewImgs.length}</span>` : '';

  el.innerHTML = `
    <img class="game-thumb"
         src="${game.img}"
         onerror="this.src='${game.fallback}'"
         alt="${game.name}">
    <div class="game-info">
      <div class="game-name">${game.name}</div>
      <div class="game-meta">
        <span class="game-meta-dot"></span>${game.meta}
      </div>
      <div class="game-row-badges">
        ${platformBadge(game.type)}
        <button class="game-preview-btn" type="button">
          <i class="bi bi-images"></i> Preview ${countBadge}
        </button>
      </div>
    </div>
    <div class="game-dl-btn ${game.type}">
      <i class="bi bi-cloud-arrow-down-fill"></i>
    </div>
  `;

  if (!hasExtra) return el;

  wrapper.appendChild(el);

  // Render extra buttons
  game.extraBtns.forEach(btn => {
    if (btn.type === 'link') {
      const b = document.createElement('a');
      b.className = 'game-extra-btn';
      b.href      = btn.url;
      b.target    = '_blank';
      b.rel       = 'noopener';
      b.innerHTML = `<i class="bi ${btn.icon}"></i> ${btn.label}`;
      wrapper.appendChild(b);
    } else if (btn.type === 'note') {
      const b = document.createElement('button');
      b.className        = 'game-extra-btn note-btn';
      b.type             = 'button';
      b.innerHTML        = `<i class="bi ${btn.icon}"></i> ${btn.label}`;
      b.dataset.noteText = btn.note || '';
      wrapper.appendChild(b);
    }
  });

  return wrapper;
}

/* =============================================
   RENDER — KEY CARD
   ============================================= */
function renderKeyCard(key) {
  if (key.hide === true) return null;

  const el = document.createElement('div');
  el.className = 'key-card';

  const spinClass = key.spin ? 'spin' : '';

  el.innerHTML = `
    <div class="key-icon-wrap ${key.iconClass}">
      <i class="bi ${key.icon} ${spinClass}"></i>
    </div>
    <div class="key-info">
      <div class="key-name">${key.name}</div>
      <div class="key-desc">${key.desc}</div>
    </div>
    <a href="${key.url}" target="_blank" class="key-action" rel="noopener">
      <i class="bi bi-box-arrow-up-right"></i>
    </a>
  `;
  return el;
}

/* =============================================
   RENDER — MOD FILE CARD
   ============================================= */
function renderModCard(mod) {
  if (mod.hide === true) return null;

  let iconClass, iconName;
  if (mod.type === 'bot') {
    iconClass = 'bot';
    iconName  = 'bi-robot';
  } else if (mod.type === 'ios') {
    iconClass = 'ios';
    iconName  = 'bi-apple';
  } else {
    iconClass = 'zip';
    iconName  = 'bi-file-zip-fill';
  }
  const hasDeviceChoice = mod.type === 'ios' && (mod.urlStrong || mod.urlWeak);
  const isBot = mod.type === 'bot';

  const el = document.createElement('div');
  el.className = 'mod-card-wrap' + (isBot ? ' mod-card-wrap-bot' : '');

  if (mod.guide) el.dataset.guide     = JSON.stringify(mod.guide);
  if (mod.urlStrong) el.dataset.strong = mod.urlStrong;
  if (mod.urlWeak)   el.dataset.weak   = mod.urlWeak;
  el.dataset.fallback = mod.url || '';

  // Nếu iOS có 2 bản → card không href, bấm mở modal chọn máy
  const cardTag   = hasDeviceChoice ? `<div class="mod-card mod-card-select"` : `<a class="mod-card${isBot ? ' mod-card-bot' : ''}" href="${mod.url}" target="_blank" rel="noopener"`;
  const cardClose = hasDeviceChoice ? `</div>` : `</a>`;

  const badgeHtml = mod.badge
    ? `<span class="mod-badge"><i class="bi bi-lightning-charge-fill"></i> ${mod.badge}</span>`
    : '';

  const dlIcon = isBot ? 'bi-arrow-right-circle-fill' : 'bi-cloud-arrow-down-fill';
  const guideLabel = isBot ? 'Hướng dẫn dùng Bot' : 'Hướng dẫn Fix Trận Ảo';
  const guideIcon = isBot ? 'bi-info-circle-fill' : 'bi-tools';

  el.innerHTML = `
    ${cardTag}>
      <div class="mod-icon ${iconClass}">
        <i class="bi ${iconName}"></i>
      </div>
      <div class="mod-info">
        <div class="mod-name">${mod.name}${badgeHtml}</div>
        <div class="mod-meta"><span class="mod-meta-dot"></span>${mod.meta}</div>
        ${mod.desc ? `<div class="mod-desc">${mod.desc}</div>` : ''}
      </div>
      <div class="mod-dl-btn">
        <i class="bi ${dlIcon}"></i>
      </div>
    ${cardClose}
    ${mod.guide ? `
    <button class="mod-guide-btn" type="button">
      <i class="bi ${guideIcon}"></i> ${guideLabel}
    </button>` : ''}
  `;
  return el;
}

/* =============================================
   RENDER — VIDEO CARD
   ============================================= */
/* =============================================
   VIDEO HELPER — detect loại link, trả về embed URL và thumbnail
   Hỗ trợ: YouTube, Catbox, MP4 trực tiếp, Google Drive
   ============================================= */
function parseVideoUrl(url) {
  if (!url) return { type: 'unknown', embed: '', thumb: '' };

  // YouTube: watch?v=ID hoặc youtu.be/ID
  const ytMatch = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
  if (ytMatch) {
    const id = ytMatch[1];
    return {
      type:  'youtube',
      embed: `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`,
      thumb: `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    };
  }

  // Direct video file: .mp4 .mov .webm .ogg
  if (/\.(mp4|mov|webm|ogg)(\?|$)/i.test(url)) {
    return { type: 'direct', embed: url, thumb: '' };
  }

  // Google Drive: /file/d/ID/view
  const gdMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/);
  if (gdMatch) {
    return {
      type:  'gdrive',
      embed: `https://drive.google.com/file/d/${gdMatch[1]}/preview`,
      thumb: '',
    };
  }

  // Telegram / t.me → không nhúng được, mở tab ngoài
  if (/t\.me\//i.test(url)) {
    return { type: 'external', embed: url, thumb: '' };
  }

  // Mặc định: thử nhúng iframe
  return { type: 'generic', embed: url, thumb: '' };
}

function renderVidCard(vid) {
  if (vid.hide === true) return null;

  const info = parseVideoUrl(vid.url);
  const rawThumb = vid.thumb || info.thumb || '';
  const thumb = rawThumb.startsWith('http') ? rawThumb : '';

  const hasSteps = vid.steps && vid.steps.items && vid.steps.items.length > 0;
  const wrapper = hasSteps ? document.createElement('div') : null;
  if (wrapper) wrapper.className = 'vid-card-wrap';

  const el = document.createElement('div');
  el.className       = 'vid-card';
  el.dataset.vidUrl  = vid.url;
  el.dataset.vidType = info.type;
  el.dataset.embed   = info.embed;
  el.dataset.thumb   = thumb;
  el.dataset.name    = vid.name;

  const placeholderIcon = info.type === 'external' ? 'bi-telegram' : 'bi-film';
  const thumbHtml = thumb
    ? `<img src="${thumb}" alt="${vid.name}" loading="lazy">`
    : `<div class="vid-thumb-placeholder"><i class="bi ${placeholderIcon}"></i></div>`;

  const playHtml = info.type === 'external'
    ? `<div class="vid-play-icon external"><i class="bi bi-box-arrow-up-right"></i></div>`
    : `<div class="vid-play-icon"><i class="bi bi-play-fill"></i></div>`;

  el.innerHTML = `
    <div class="vid-thumb-wrap">
      ${thumbHtml}
      ${playHtml}
    </div>
    <div class="vid-info">
      <div class="vid-name">${vid.name}</div>
      <div class="vid-meta">${vid.meta}</div>
    </div>
  `;

  if (!hasSteps) return el;

  wrapper.appendChild(el);

  // Nút lưu ý — giống mod-guide-btn
  const stepsData = JSON.stringify(vid.steps);
  const btn = document.createElement('button');
  btn.className = 'mod-guide-btn vid-steps-btn';
  btn.type = 'button';
  btn.dataset.steps = stepsData;
  btn.innerHTML = `<i class="bi bi-info-circle-fill"></i> ${vid.steps.title}`;
  wrapper.appendChild(btn);

  return wrapper;
}

/* =============================================
   MOUNT SECTIONS
   ============================================= */
function mountSections() {
  const gameGrid = document.getElementById('gameGrid');
  const keyGrid  = document.getElementById('keyGrid');
  const modGrid  = document.getElementById('modGrid');
  const vidGrid  = document.getElementById('vidGrid');

  if (gameGrid) GAMES.forEach(g    => { const el = renderGameCard(g);  if (el) gameGrid.appendChild(el); });
  if (keyGrid)  KEYS.forEach(k     => { const el = renderKeyCard(k);   if (el) keyGrid.appendChild(el);  });
  if (modGrid)  MOD_FILES.forEach(m => { const el = renderModCard(m);  if (el) modGrid.appendChild(el);  });
  if (vidGrid)  VIDEOS.forEach(v    => { const el = renderVidCard(v);  if (el) vidGrid.appendChild(el);  });
}

/* =============================================
   NOTE MODAL — Lưu ý PUBG và các game khác
   ============================================= */
function initNoteModal() {
  const modal    = document.getElementById('noteModal');
  const titleEl  = document.getElementById('noteModalTitle');
  const bodyEl   = document.getElementById('noteModalBody');
  const closeBtn = document.getElementById('noteModalClose');
  if (!modal) return;

  function openNote(title, text) {
    titleEl.textContent = title;
    // Render từng dòng thành guide-step
    const lines = text.split('\n').filter(l => l.trim());
    bodyEl.innerHTML = lines.map(l => `
      <div class="guide-step">
        <div class="guide-step-body">${l.replace(/^[•\-]\s*/, '')}</div>
      </div>`).join('');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeNote() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Delegate click từ game grid
  const gameGrid = document.getElementById('gameGrid');
  if (gameGrid) {
    gameGrid.addEventListener('click', e => {
      const nb = e.target.closest('.note-btn');
      if (!nb) return;
      e.stopPropagation();
      openNote(nb.textContent.trim(), nb.dataset.noteText || '');
    });
  }

  closeBtn.addEventListener('click', closeNote);
  modal.addEventListener('click', e => { if (e.target === modal) closeNote(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeNote();
  });
}

/* =============================================
   SCROLL — nút Video Hướng Dẫn trên quick-cards
   ============================================= */
function initScrollLinks() {
  document.querySelectorAll('a.qc-scroll').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}
function initDeviceModal() {
  const modal    = document.getElementById('deviceModal');
  const closeBtn = document.getElementById('deviceModalClose');
  const btnStrong = document.getElementById('deviceStrong');
  const btnWeak   = document.getElementById('deviceWeak');
  if (!modal) return;

  let _strong = '', _weak = '', _fallback = '';

  function openDeviceModal(strong, weak, fallback) {
    _strong   = strong   || fallback;
    _weak     = weak     || fallback;
    _fallback = fallback;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeDeviceModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Bấm vào mod-card-select
  const modGrid = document.getElementById('modGrid');
  if (modGrid) {
    modGrid.addEventListener('click', e => {
      // Không xử lý nếu click vào guide button
      if (e.target.closest('.mod-guide-btn')) return;

      const card = e.target.closest('.mod-card-select');
      if (!card) return;
      const wrap = card.closest('.mod-card-wrap');
      openDeviceModal(
        wrap.dataset.strong   || '',
        wrap.dataset.weak     || '',
        wrap.dataset.fallback || ''
      );
    });
  }

  btnStrong.addEventListener('click', () => {
    window.open(_strong, '_blank', 'noopener');
    closeDeviceModal();
  });
  btnWeak.addEventListener('click', () => {
    window.open(_weak, '_blank', 'noopener');
    closeDeviceModal();
  });

  closeBtn.addEventListener('click', closeDeviceModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeDeviceModal(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeDeviceModal();
  });
}
function initGuideModal() {
  const modal   = document.getElementById('guideModal');
  const titleEl = document.getElementById('guideModalTitle');
  const bodyEl  = document.getElementById('guideModalBody');
  const closeBtn = document.getElementById('guideModalClose');
  if (!modal) return;

  function openGuide(title, steps) {
    titleEl.textContent = title;
    bodyEl.innerHTML = steps.map(s => `
      <div class="guide-step">
        <div class="guide-step-body">${s}</div>
      </div>`).join('');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  // Delegate click từ mod grid (guide steps)
  const modGrid = document.getElementById('modGrid');
  if (modGrid) {
    modGrid.addEventListener('click', e => {
      const btn = e.target.closest('.mod-guide-btn');
      if (!btn) return;
      e.preventDefault();
      const wrap = btn.closest('.mod-card-wrap');
      if (!wrap || !wrap.dataset.guide) return;
      const guide = JSON.parse(wrap.dataset.guide);
      titleEl.textContent = guide.title;
      bodyEl.innerHTML = guide.steps.map(s => `
        <div class="guide-step">
          <div class="guide-step-heading">${s.heading}</div>
          <div class="guide-step-body">${s.body}</div>
        </div>`).join('');
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    });
  }

  // Delegate click từ vid grid (steps nút lưu ý)
  const vidGrid = document.getElementById('vidGrid');
  if (vidGrid) {
    vidGrid.addEventListener('click', e => {
      const btn = e.target.closest('.vid-steps-btn');
      if (!btn) return;
      e.stopPropagation();
      const steps = JSON.parse(btn.dataset.steps);
      openGuide(steps.title, steps.items);
    });
  }

  function closeGuide() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeGuide);
  modal.addEventListener('click', e => { if (e.target === modal) closeGuide(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeGuide();
  });
}
function initVideoModal() {
  const modal     = document.getElementById('videoModal');
  const title     = document.getElementById('videoModalTitle');
  const closeBtn  = document.getElementById('videoModalClose');
  const container = modal ? modal.querySelector('.video-container') : null;
  if (!modal || !container) return;

  function buildPlayer(embed, type, thumb, name) {
    container.innerHTML = '';

    if (type === 'direct') {
      // ── Direct MP4/MOV — custom poster + play overlay ──
      // Poster layer
      if (thumb) {
        const img = document.createElement('img');
        img.src       = thumb;
        img.className = 'vid-poster';
        img.alt       = name;
        container.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className   = 'vid-poster-placeholder';
        ph.innerHTML   = `<i class="bi bi-film"></i><span>${name}</span>`;
        container.appendChild(ph);
      }

      // Play overlay button
      const overlay = document.createElement('div');
      overlay.className = 'vid-overlay';
      overlay.innerHTML = `<div class="vid-play-big"><i class="bi bi-play-fill"></i></div>`;
      container.appendChild(overlay);

      // Click play → remove overlay, inject <video>
      overlay.addEventListener('click', () => {
        overlay.classList.add('hidden');
        // Remove poster
        container.querySelectorAll('.vid-poster,.vid-poster-placeholder').forEach(el => el.remove());

        const v = document.createElement('video');
        v.src      = embed;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true; // iOS requirement
        v.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;background:#000;';
        container.appendChild(v);
        v.play().catch(() => {});
      });

    } else {
      // ── YouTube / GDrive / iframe ──
      // Show poster with play button first
      if (thumb) {
        const img = document.createElement('img');
        img.src       = thumb;
        img.className = 'vid-poster';
        img.alt       = name;
        container.appendChild(img);
      } else {
        const ph = document.createElement('div');
        ph.className = 'vid-poster-placeholder';
        ph.innerHTML = `<i class="bi bi-youtube"></i><span>${name}</span>`;
        container.appendChild(ph);
      }

      // Play overlay
      const overlay = document.createElement('div');
      overlay.className = 'vid-overlay';
      overlay.innerHTML = `<div class="vid-play-big"><i class="bi bi-play-fill"></i></div>`;
      container.appendChild(overlay);

      // Click play → remove poster+overlay, inject iframe with autoplay
      overlay.addEventListener('click', () => {
        container.innerHTML = '';
        const fr = document.createElement('iframe');
        // Add autoplay param
        const sep = embed.includes('?') ? '&' : '?';
        fr.src             = embed + (embed.includes('autoplay') ? '' : sep + 'autoplay=1');
        fr.frameBorder     = '0';
        fr.allow           = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        fr.allowFullscreen = true;
        fr.style.cssText   = 'position:absolute;inset:0;width:100%;height:100%;';
        container.appendChild(fr);
      });
    }
  }

  function openVideo(embed, type, thumb, name) {
    // External (Telegram, v.v.) → mở tab mới, không dùng modal
    if (type === 'external') {
      window.open(embed, '_blank', 'noopener');
      return;
    }
    title.textContent = name;
    buildPlayer(embed, type, thumb, name);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }

  function closeVideo() {
    container.innerHTML = '';
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }

  // Delegate click từ vid grid
  const vidGrid = document.getElementById('vidGrid');
  if (vidGrid) {
    vidGrid.addEventListener('click', e => {
      const card = e.target.closest('.vid-card');
      if (!card) return;
      openVideo(
        card.dataset.embed,
        card.dataset.vidType,
        card.dataset.thumb || '',
        card.dataset.name  || 'Video'
      );
    });
  }

  closeBtn.addEventListener('click', closeVideo);
  modal.addEventListener('click', e => { if (e.target === modal) closeVideo(); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeVideo();
  });
}

/* =============================================
   MODAL LOGIC
   ============================================= */
const androidModal = document.getElementById('androidArch');
const iosModal     = document.getElementById('iosVersionPopup');

function openStatusFullModal(gameName) {
  const modal = document.getElementById('statusFullModal') || createStatusFullModal();
  const titleEl = modal.querySelector('.status-modal-title');
  const bodyEl = modal.querySelector('.status-modal-body');

  titleEl.textContent = `${gameName} — Link Đầy`;
  bodyEl.innerHTML = `
    <div class="status-message">
      <i class="bi bi-exclamation-circle-fill" style="font-size:28px;color:#ff9800;margin-bottom:12px"></i>
      <p style="font-size:16px;font-weight:600;margin-bottom:8px">Link Cài Đã Đầy</p>
      <p style="font-size:14px;color:var(--text2);margin-bottom:20px">
        Vui lòng tham gia nhóm bên dưới để đợi thông báo cập nhật link mới nhé!
      </p>
    </div>

    <div class="status-actions">
      <a href="https://t.me/tumadammod1" target="_blank" rel="noopener" class="status-btn telegram">
        <i class="bi bi-telegram"></i> Telegram Channel
      </a>
      <a href="https://discord.com/invite/6XB4GscjQR" target="_blank" rel="noopener" class="status-btn discord">
        <i class="bi bi-discord"></i> Discord
      </a>
    </div>

    <button class="status-guide-btn" onclick="scrollToVideos()">
      <i class="bi bi-play-circle-fill"></i> Xem Hướng Dẫn Cài
    </button>
  `;

  modal.classList.add('show');
}

function createStatusFullModal() {
  const modal = document.createElement('div');
  modal.id = 'statusFullModal';
  modal.className = 'status-full-modal';
  modal.innerHTML = `
    <div class="status-modal-content">
      <div class="status-modal-header">
        <h3 class="status-modal-title"></h3>
        <button class="status-modal-close" onclick="document.getElementById('statusFullModal').classList.remove('show')">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
      <div class="status-modal-body"></div>
    </div>
  `;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('show');
  });
  return modal;
}

function scrollToVideos() {
  const videoSection = document.getElementById('videos');
  if (videoSection) {
    videoSection.scrollIntoView({ behavior: 'smooth' });
    document.getElementById('statusFullModal').classList.remove('show');
  }
}

function openAndroidModal(url64, url32, urlKey) {
  const btn64 = document.getElementById('apk64');
  const btn32 = document.getElementById('apk32');
  const btnKey = document.getElementById('apkKey');

  btn64.href = url64 || '#';
  btn32.href = url32 || '#';
  btnKey.href = urlKey || '#';
  btnKey.style.display = urlKey ? 'flex' : 'none';

  // Ẩn nút 32-bit nếu không có link
  btn32.style.display = url32 ? 'flex' : 'none';

  androidModal.classList.add('show');
}

function closeAllModals() {
  androidModal.classList.remove('show');
  iosModal.classList.remove('show');
}

[androidModal, iosModal].forEach(modal => {
  modal.addEventListener('click', e => { if (e.target === modal) closeAllModals(); });
});
document.querySelectorAll('.modal-cancel').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

/* =============================================
   GAME GRID CLICK — FIX: dùng stopPropagation
   để preview không bubble lên card rồi mở lại
   ============================================= */
function bindGameGrid() {
  const gameGrid = document.getElementById('gameGrid');
  if (!gameGrid) return;

  gameGrid.addEventListener('click', (e) => {
    const card = e.target.closest('.game-card');
    if (!card) return;

    // Bấm nút Preview — dừng bubble để card không xử lý thêm
    const previewBtn = e.target.closest('.game-preview-btn');
    if (previewBtn) {
      e.stopPropagation();
      const imgs = JSON.parse(card.dataset.preview || '[]');
      const name = card.dataset.name || 'Preview';
      const desc = card.dataset.desc || '';
      openPreviewModal(name, imgs, desc);
      return;
    }

    // Bấm nút tải (dl-btn) hoặc vùng card còn lại
    const { type, url, url64, url32, urlKey, status, name } = card.dataset;
    
    // Kiểm tra status
    if (status === 'true') {
      // Status true = link đầy → hiện modal thông báo
      openStatusFullModal(name);
      return;
    }

    // Status false = bình thường → tải như trước
    if (type === 'android') {
      openAndroidModal(url64, url32, urlKey);
    } else if (type === 'direct') {
      window.open(url, '_blank', 'noopener');
    }
  });
}

/* =============================================
   SIDEBAR MENU
   ============================================= */
function initMenu() {
  const fab      = document.getElementById('menuToggle');
  const nav      = document.getElementById('sideNav');
  const overlay  = document.getElementById('menuOverlay');
  const closeBtn = nav.querySelector('.nav-close');
  const links    = nav.querySelectorAll('.menu-link');

  const open  = () => { nav.classList.add('open'); overlay.classList.add('open'); fab.classList.add('open'); document.body.style.overflow = 'hidden'; };
  const close = () => { nav.classList.remove('open'); overlay.classList.remove('open'); fab.classList.remove('open'); document.body.style.overflow = ''; };

  fab.addEventListener('click', () => nav.classList.contains('open') ? close() : open());
  closeBtn.addEventListener('click', close);
  overlay.addEventListener('click', close);
  links.forEach(l => l.addEventListener('click', close));
}

/* =============================================
   THEME — auto detect ngày/đêm, user có thể override
   ============================================= */
function initTheme() {
  const html  = document.documentElement;
  const btn   = document.getElementById('themeToggle');
  const icon  = document.getElementById('themeIcon');
  const label = document.getElementById('themeLabel');

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    icon.className    = theme === 'dark' ? 'bi bi-moon-stars-fill' : 'bi bi-sun-fill';
    label.textContent = theme === 'dark' ? 'Dark Mode' : 'Light Mode';
  }

  // Nếu user đã bấm trước → dùng lại
  // Chưa bấm → tự detect: 6h–18h = light, còn lại = dark
  function getDefaultTheme() {
    const saved = localStorage.getItem('tm_theme');
    if (saved) return saved;
    const h = new Date().getHours();
    return (h >= 6 && h < 18) ? 'light' : 'dark';
  }

  applyTheme(getDefaultTheme());

  btn.addEventListener('click', () => {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('tm_theme', next);
  });
}

/* =============================================
   TYPED.JS — chạy 1 lần rồi dừng
   ============================================= */
function initTyped() {
  const el = document.getElementById('GioiThieu');
  if (!el || typeof Typed === 'undefined') return;
  new Typed('#GioiThieu', {
    strings:    TYPED_STRINGS,
    typeSpeed:  60,
    backSpeed:  30,
    loop:       false,
    showCursor: true,
    cursorChar: '|',
    onComplete: (self) => {
      setTimeout(() => { if (self.cursor) self.cursor.style.display = 'none'; }, 1200);
    },
  });
}

/* =============================================
   SPLASH
   ============================================= */
function initSplash() {
  const splash = document.getElementById('introSplash');
  if (!splash) return;

  function removeSplash() {
    splash.classList.add('hide');
    setTimeout(() => { if (splash.parentNode) splash.remove(); }, 700);
    document.body.classList.remove('loading');
  }

  // Splash hiện tối đa 2.5 giây
  setTimeout(removeSplash, 2500);
}

/* =============================================
   MUSIC — shuffle random, autoplay on interaction
   ============================================= */
function initMusic() {
  const audio = document.getElementById('bgMusic');
  if (!audio) return;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  let queue      = shuffle(PLAYLIST);
  let idx        = 0;
  let introDone  = false;  // cờ: đã phát xong intro chưa

  function loadTrack(src) { audio.src = src; }

  function playNext() {
    if (!introDone) {
      // Intro vừa xong → bắt đầu playlist random
      introDone = true;
      idx = 0;
      loadTrack(queue[idx].src);
    } else {
      idx = (idx + 1) % queue.length;
      if (idx === 0) queue = shuffle(PLAYLIST);
      loadTrack(queue[idx].src);
    }
    audio.play().catch(() => {});
  }

  audio.volume = 0.45;
  audio.addEventListener('ended', playNext);

  // Load intro trước
  loadTrack(INTRO_TRACK);

  // Phát ngay khi có thể (autoplay), fallback sau tương tác
  const tryPlay = () => {
    audio.play().catch(() => {});
  };
  tryPlay();

  const start = () => {
    audio.play().catch(() => {});
    window.removeEventListener('click',      start);
    window.removeEventListener('touchstart', start);
    window.removeEventListener('keydown',    start);
  };
  window.addEventListener('click',      start, { once: true });
  window.addEventListener('touchstart', start, { once: true });
  window.addEventListener('keydown',    start, { once: true });
}

/* =============================================
   SCROLL REVEAL
   ============================================= */
function initScrollReveal() {
  const targets = document.querySelectorAll('.game-card,.key-card,.quick-card,.help-card');

  // Nếu không hỗ trợ IntersectionObserver → hiện hết luôn
  if (!('IntersectionObserver' in window)) return;

  const style = document.createElement('style');
  style.textContent = `.reveal{opacity:0;transform:translateY(18px);transition:opacity .5s ease,transform .5s ease}.reveal.visible{opacity:1;transform:translateY(0)}`;
  document.head.appendChild(style);

  targets.forEach((el, i) => { el.classList.add('reveal'); el.style.transitionDelay = `${(i % 4) * 60}ms`; });

  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { threshold: 0.08 }
  );
  targets.forEach(el => obs.observe(el));

  // AN TOÀN: sau 1.2 giây, ép hiện mọi card chưa visible (tránh card kẹt opacity:0)
  setTimeout(() => {
    targets.forEach(el => {
      if (!el.classList.contains('visible')) el.classList.add('visible');
    });
  }, 1200);
}

/* =============================================
   IMAGE PREVIEW MODAL
   ============================================= */
let previewCurrent = 0;
let previewTotal   = 0;

function openPreviewModal(name, imgs, desc) {
  const modal   = document.getElementById('imgPreviewModal');
  const track   = document.getElementById('previewTrack');
  const dots    = document.getElementById('previewDots');
  const title   = document.getElementById('previewTitle');
  const descEl  = document.getElementById('previewDesc');
  const counter = document.getElementById('previewCounter');

  title.textContent = name;
  track.innerHTML   = '';
  dots.innerHTML    = '';
  previewCurrent    = 0;

  // Mô tả — dùng innerHTML + replace \n → <br> để xuống dòng
  if (descEl) {
    if (desc) {
      descEl.innerHTML     = desc.replace(/\n/g, '<br>');
      descEl.style.display = 'block';
    } else {
      descEl.style.display = 'none';
    }
  }

  // Lọc bỏ ảnh rỗng, nếu không có ảnh nào hợp lệ thì dùng fallback
  const validImgs = imgs.filter(s => s && s.startsWith('http'));
  const FALLBACK_IMG = 'https://i.imgur.com/vKPMWWx.jpeg';
  const finalImgs = validImgs.length > 0 ? validImgs : [FALLBACK_IMG];
  previewTotal = finalImgs.length;

  finalImgs.forEach((src, i) => {
    const img = document.createElement('img');
    img.alt     = `${name} - ảnh ${i + 1}`;
    img.loading = 'eager';

    let done = false;
    function useFallback() {
      if (done) return;
      done = true;
      if (img.src !== FALLBACK_IMG) img.src = FALLBACK_IMG;
    }
    // Nếu ảnh load xong → huỷ timeout
    img.onload  = function() { done = true; };
    // Nếu ảnh lỗi → fallback ngay
    img.onerror = useFallback;
    // Nếu sau 4 giây ảnh vẫn treo (không load, không lỗi) → fallback
    setTimeout(() => { if (!img.complete || img.naturalWidth === 0) useFallback(); }, 4000);

    img.src = src;
    track.appendChild(img);

    const dot = document.createElement('div');
    dot.className = 'img-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToPreview(i));
    dots.appendChild(dot);
  });

  const multi = previewTotal > 1;
  dots.style.display = multi ? 'flex' : 'none';
  document.getElementById('previewPrev').style.display = multi ? 'flex' : 'none';
  document.getElementById('previewNext').style.display = multi ? 'flex' : 'none';

  updatePreviewSlide();
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
}

function goToPreview(idx) {
  previewCurrent = (idx + previewTotal) % previewTotal;
  updatePreviewSlide();
}

function updatePreviewSlide() {
  const track   = document.getElementById('previewTrack');
  const dots    = document.getElementById('previewDots');
  const counter = document.getElementById('previewCounter');
  if (track) track.style.transform = `translateX(-${previewCurrent * 100}%)`;
  if (dots) dots.querySelectorAll('.img-dot').forEach((d, i) => d.classList.toggle('active', i === previewCurrent));
  if (counter) {
    counter.textContent   = previewTotal > 1 ? `${previewCurrent + 1} / ${previewTotal}` : '';
    counter.style.display = previewTotal > 1 ? 'block' : 'none';
  }
}

function closePreviewModal() {
  const modal = document.getElementById('imgPreviewModal');
  if (modal) modal.classList.remove('show');
  document.body.style.overflow = '';
}

function initPreviewModal() {
  const modal = document.getElementById('imgPreviewModal');
  if (!modal) return;

  document.getElementById('previewClose').addEventListener('click', closePreviewModal);
  document.getElementById('previewPrev').addEventListener('click', () => goToPreview(previewCurrent - 1));
  document.getElementById('previewNext').addEventListener('click', () => goToPreview(previewCurrent + 1));

  modal.addEventListener('click', e => { if (e.target === modal) closePreviewModal(); });

  let touchStartX = 0;
  const track = document.getElementById('previewTrack');
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend',   e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) goToPreview(dx < 0 ? previewCurrent + 1 : previewCurrent - 1);
  });

  document.addEventListener('keydown', e => {
    if (!modal.classList.contains('show')) return;
    if (e.key === 'ArrowLeft')  goToPreview(previewCurrent - 1);
    if (e.key === 'ArrowRight') goToPreview(previewCurrent + 1);
    if (e.key === 'Escape')     closePreviewModal();
  });
}

/* =============================================
   CLOCK WIDGET
   ============================================= */
function initClock() {
  const widget  = document.getElementById('clockWidget');
  const timeEl  = document.getElementById('clockTime');
  const greetEl = document.getElementById('clockGreeting');
  const iconEl  = document.getElementById('clockIcon');
  if (!widget) return;

  const PERIODS = [
    { id: 'midnight',  from:  0, to:  5, icon: 'bi-moon-stars-fill',     greeting: 'Sục Cặc Hay Gì Giờ Này Chưa Ngủ?'    },
    { id: 'dawn',      from:  5, to:  9, icon: 'bi-sunrise-fill',         greeting: 'Good Morning! 🌅'     },
    { id: 'morning',   from:  9, to: 12, icon: 'bi-brightness-high-fill', greeting: 'Ăn Sáng Chưa Thằng Em? '   },
    { id: 'noon',      from: 12, to: 14, icon: 'bi-sun-fill',             greeting: 'Trưa Rồi Lọ Đi'   },
    { id: 'afternoon', from: 14, to: 18, icon: 'bi-cloud-sun-fill',       greeting: 'Good Afternoon! 🌿'   },
    { id: 'evening',   from: 18, to: 22, icon: 'bi-sunset-fill',          greeting: 'Good Evening! 🌇'     },
    { id: 'night',     from: 22, to: 24, icon: 'bi-moon-fill',            greeting: 'Good Night! 🌙'        },
  ];

  const getPeriod = h => PERIODS.find(p => h >= p.from && h < p.to) || PERIODS[0];
  const pad = n => String(n).padStart(2, '0');

  let lastPeriodId  = null;
  let greetingShown = false;

  function tick() {
    const now = new Date();
    const p   = getPeriod(now.getHours());
    timeEl.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    if (p.id !== lastPeriodId) {
      widget.className = `clock-widget period-${p.id}`;
      iconEl.innerHTML = `<i class="bi ${p.icon}"></i>`;
      lastPeriodId = p.id;
    }
  }

  function showGreeting() {
    if (greetingShown) return;
    greetingShown = true;
    const p = getPeriod(new Date().getHours());
    greetEl.textContent = p.greeting;
    greetEl.classList.remove('hide');
    setTimeout(() => greetEl.classList.add('hide'), 10000);
  }

  tick();
  showGreeting();
  setInterval(tick, 1000);
}

/* =============================================
   CHATBOT — Dữ liệu Q&A (chỉnh sửa nội dung ở đây)
   keywords: từ khoá nhận diện | answer: trả lời (\n xuống dòng, **đậm**, https tự thành link)
   ============================================= */
const BOT_KNOWLEDGE = [
  {
    keywords: [
      'bot tạo file','bot tao file','cách dùng bot','cach dung bot','dùng bot skin','dung bot skin',
      'bot mod skin','bot skin','cách dùng bot skin','tạo file skin','tao file skin',
      'bot tạo skin','bot tao skin','làm sao dùng bot','lam sao dung bot','bot làm file',
      'hướng dẫn bot','huong dan bot','bot tự tạo file','dùng bot như nào','dung bot nhu nao',
    ],
    answer: '[[svg:bot]] **Cách dùng Bot tạo file Mod Skin**\n\n**1.** Mở Bot trên Telegram → bấm **Start**.\n**2.** Bấm nút **chọn skin** ở bàn phím → chọn xong qua giỏ xem lại → bấm **Khởi chạy mod**.\n**3.** Đợi bot làm file (3-10 phút) → bot đưa trang lấy mật khẩu → vượt link lấy mật khẩu gửi cho bot.\n\n[[svg:warn]] Nếu gặp trận ảo: bật menu chọn **Xoá mod file** → thoát vô lại là ok!\n\nMở Bot [tại đây](https://t.me/tumadammodskin_bot)',
  },
  {
    game: 'pubg',
    keywords: [
      'mod skin pubg','mod skin pupg','skin pubg','skin pupg','cách mod pubg','cach mod pupg',
      'dùng pubg','dung pubg','mod pubg','mod pupg','hướng dẫn pubg','huong dan pubg',
      'cách dùng pubg','cach dung pupg','menu pubg','menu pupg','dùng menu pubg','skin súng pubg',
      'pubg','pupg',
    ],
    answer: '[[icon:pubg]] **Cách dùng + Mod skin PUBG**\n\nXem video hướng dẫn đầy đủ cách dùng menu và mod skin súng:\n\n[[video:https://cdn.tumadam.com/files/004f8ae9-3829-44c1-ba6f-479abeb18f10.mov|Hướng dẫn dùng Menu + Mod Skin PUBG|Xem kĩ là làm được hết nhé!]]',
  },
  {
    game: 'pubg',
    keywords: [
      'ống ngắm','ong ngam','bật tắt ống ngắm','bat tat ong ngam','lỗi ống ngắm','loi ong ngam',
      'scope','tâm ngắm','tam ngam','ống nhắm','ong nham','súng bị lỗi','sung bi loi',
      'không bật được ống ngắm','skin súng lỗi','skin sung loi','ngắm bị lỗi','ngam bi loi',
      'aim sight','bật ống ngắm','bat ong ngam',
    ],
    answer: '[[icon:pubg]] **Fix lỗi bật/tắt ống ngắm**\n\n**Nguyên nhân:** Chưa tải đủ tài nguyên skin súng.\n\n**Cách fix:** Tải **đầy đủ tài nguyên** để skin súng hiện hoàn chỉnh → hết lỗi.\n\n[[svg:warn]] Tải rồi vẫn bị? **Đổi sang skin súng khác** nhé!\n\n[[video:https://cdn.tumadam.com/files/004f8ae9-3829-44c1-ba6f-479abeb18f10.mov|Hướng dẫn dùng Menu PUBG|Xem kĩ phần tài nguyên skin súng]]',
  },
  {
    platform: 'android',
    keywords: [
      'cài app android','cai app android','cài app andr','cai app andr','cách cài android',
      'cach cai android','cài apk','cai apk','tải apk','tai apk','cách cài apk','cach cai apk',
      'cài game android','cai game android','hướng dẫn android','huong dan android',
      'cài đặt android','cai dat android','android cài sao','cách cài trên android',
    ],
    answer: '[[icon:aovandr]] **Cách cài app trên Android**\n\n**1.** Tải file **APK** về máy từ web.\n**2.** Mở **Tệp / File Manager** → bấm vào file APK vừa tải.\n**3.** Bấm **Cài đặt** (nếu máy hỏi thì cho phép cài từ nguồn không xác định).\n**4.** Mở game → vào phần **Get Key** lấy key → nhập key rồi chơi thôi!\n\n[[svg:key]] Lấy key Android [tại đây](https://tumadammod.github.io/getkeygameios/andr)',
  },
  {
    platform: 'android',
    keywords: [
      'garena trắng','garena trang','đăng nhập garena','dang nhap garena','garena android',
      'garena bị trắng','garena bi trang','login garena','trắng màn hình garena','trang man hinh garena',
      'garena lỗi android','garena loi android','không đăng nhập garena','đăng nhập garena android',
      'garena màn hình trắng','garena white screen','garena',
    ],
    answer: '[[svg:android]] **Fix Garena trắng màn hình (Android)**\n\nTải app **Garena** về máy rồi đăng nhập qua app đó là được!\n\nTải app Garena [tại đây](https://apkpure.com/vn/garena/com.garena.gaslite/amp)\n\n[[svg:check]] Đăng nhập bằng app Garena thật thay vì webview là hết trắng màn hình nhé!',
  },
  {
    keywords: [
      'testflight','test flight','cài testflight','cai testflight','cài qua testflight',
      'cách cài testflight','cach cai testflight','tf','cài bằng testflight','cai bang testflight',
      'link testflight','testflight là gì','testflight la gi','cài app testflight',
    ],
    answer: '[[svg:apple]] **Cách cài qua TestFlight**\n\n**1.** Tải app **TestFlight** trên App Store trước.\n**2.** Bấm link mời TestFlight của app → bấm **Accept** → **Install**.\n**3.** Mở app từ TestFlight là chơi được.\n\n[[svg:play]] Xem video hướng dẫn chi tiết ở mục **Video Hướng Dẫn** phía dưới web nhé!',
  },
  {
    keywords: [
      'beta đầy','beta day','testflight đầy','testflight day','tf đầy','tf day',
      'beta full','testflight full','beta hết chỗ','beta het cho','hết slot beta','het slot beta',
      'không vào được testflight','khong vao duoc testflight','beta đã đầy','beta da day',
      'testflight hết chỗ','app này hiện không chấp nhận','khong chap nhan tester moi',
    ],
    answer: '[[svg:warn]] **TestFlight/Beta đã đầy?**\n\nApp TestFlight giới hạn số người tham gia nên hay bị đầy slot.\n\n**Cách xử lý:** Tham gia nhóm bên dưới để đợi admin mở slot mới hoặc thông báo link mới nhé!\n[[svg:telegram]] Telegram [tại đây](https://t.me/tumadammod1)\n[[svg:discord]] Discord [tại đây](https://discord.com/invite/6XB4GscjQR)\n\nAdmin sẽ reset slot / thả link mới thường xuyên, đợi thông báo là okla! ',
  },
  {
    keywords: [
      'đăng nhập fb andr','dang nhap fb andr','đăng nhập facebook android','dang nhap facebook android',
      'lỗi đăng nhập facebook','loi dang nhap facebook','login fb android','login facebook andr',
      'không đăng nhập được fb','khong dang nhap duoc fb','ko login được fb andr',
      'đăng nhập fb android','fb android lỗi','facebook android lỗi','dang nhap fb bi loi',
    ],
    answer: '[[icon:aovandr]] **Fix lỗi đăng nhập Facebook (Android)**\n\n**Nguyên nhân:** App Facebook xung đột với mod.\n\n**Cách fix:**\n**1.** Vào **Cài đặt** → **Ứng dụng** → tìm **Facebook** → **Xoá app**.\n**2.** Sau khi xoá xong mới mở app AOV Android đăng nhập lại bằng Facebook.\n\n[[svg:warn]] Không cần cài lại Facebook — chỉ cần xoá đi là đăng nhập được trong game rồi nhé!',
  },
  {
    keywords: [
      'cài app','cai app','cách cài','cach cai','install','cài đặt','cai dat','tải app','cai ntn',
      'cài ipa','cai ipa','ipa','esign','gbox','scarlet','cài trực tiếp','cai truc tiep',
      'cài như thế nào','cai nhu the nao','cài kiểu gì','không biết cài','khong biet cai',
      'làm sao cài','lam sao cai','cài app ios','cai app ios','hướng dẫn cài','huong dan cai',
    ],
    answer: '[[svg:apple]] **Cách cài app trên iOS**\n\n**1. Cài trực tiếp (khuyên dùng):**\n[[video:https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/copy_CD6B6FC3-B16A-4A32-ACB2-3B87C5B32A8F.MOV|Hướng dẫn cài app iOS|Xem kĩ nếu chưa biết cài]]\n\n**2. Về file IPA:**\nCần công cụ như Esign, Gbox, Scarlet... Cài IPA khá khó nên mình vẫn khuyên cài trực tiếp cho nhanh nhé! ',
  },
  {
    keywords: [
      'xác minh','xac minh','fix xac minh','loi xac minh','lỗi xác minh','verify',
      'chứng chỉ','chung chi','untrusted','không tin tưởng','khong tin tuong',
      'lỗi cài','loi cai','bị lỗi sau khi cài','không mở được','khong mo duoc',
      'cài xong bị lỗi','cai xong bi loi','không vào được app','lỗi xác nhận',
    ],
    answer: '[[svg:tool]] **Fix lỗi xác minh**\n\n**Cài trực tiếp trên tumadam.com:** Khỏi lo! Đợi **1-3 tiếng** (chậm nhất 5-6 tiếng) admin fix liền. Vào nhóm nhận thông báo:\n[[svg:telegram]] Telegram [tại đây](https://t.me/tumadammod1)\n[[svg:discord]] Discord [tại đây](https://discord.com/invite/6XB4GscjQR)\n\n**Cài IPA:** Lỗi xác minh IPA thì phải chịu nhé \n\n---\n**[[svg:shield]] Game Roblox / PUBG / ZSM bị thu hồi chứng chỉ?**\nCài thêm **DNS chặn thu hồi** nhé!\n\n[[video:https://files.catbox.moe/gf70tp.mp4|Cách cài DNS chặn thu hồi|Xem kĩ để cài đúng nhé]]\n\n[[svg:download]] Tải file DNS [tại đây](https://www.mediafire.com/file/6vffsopqy2jqqes/Anti-Revoke.mobileconfig/file)\n\n[[svg:warn]] Cài DNS xong mà vẫn hiện xác minh: Vào **Cài đặt → Chung → Quản lý VPN & Thiết bị** → bấm **Tin cậy** là xong!',
  },
  {
    keywords: [
      'get key','key free','lấy key','lay key','key mien phi','key miễn phí',
      'key o dau','key ở đâu','free key','key như thế nào','key nhu the nao',
      'key ở chỗ nào','lấy key ở đâu','lay key o dau','vượt link','vuot link',
      'key hết hạn','key het han','key không dùng được','key lq','key liên quân',
    ],
    answer: '[[svg:key]] **Cách get key free**\n\nKey free bên Tumadam thì chắc chắn có rồi nhé!\n\n[[svg:dot]] Lấy key [tại đây](https://tumadam.com/#getkey)\n\n• Cần xem video hướng dẫn? Bấm vào link get key ở trên, ở dưới có **nút xanh "Video hướng dẫn"** bấm vào xem nhé!',
  },
  {
    keywords: [
      'tránh ban','tranh ban','chống ban','chong ban','bị ban','bi ban','có ban không','co ban khong',
      'khóa nick','khoa nick','sao bị ban','check to','bị tố','bi to','tố hack',
      'ban vĩnh viễn','ban vinh vien','an toàn không','an toan khong','hack có bị ban','hack co bi ban',
      'sao vẫn ban','sao van ban','chơi kín vẫn ban','choi kin van ban',
    ],
    answer: '[[svg:warn]] **Cách tránh ban**\n\nChơi công cụ gian lận thì ban là hiển nhiên  Nhưng anti bên Tumadam chất lượng nên yên tâm!\n\n**Mẹo:** Game nào cũng nên **chơi kín** — cứ như diễn viên, là được kaka.\n\n**Chơi kín vẫn ban?** Đa số do bị **tố** → bị quét. Có khi vài hôm sau đối thủ mới nhớ ra tố đó!\n\n**Check tố vẫn ban?** Nó tố hôm nay, biết đâu mấy hôm sau mới bị quét. Cứ chơi kín thôi là okla!',
  },
  {
    keywords: [
      'lưu ý','luu y','lưu ý hack','dùng hack','dung hack','lưu ý khi dùng','can than',
      'bật chức năng gì','bat chuc nang gi','dùng tính năng nào','dung tinh nang nao',
      'nên bật gì','nen bat gi','hack cái gì','bật aim','bat aim','bật esp','bat esp',
      'nên dùng gì','nen dung gi','chức năng nào an toàn',
    ],
    answer: '[[svg:warn]] **Lưu ý khi dùng hack**\n\n[[svg:dot]] Chỉ bật **chức năng cơ bản** thôi nhé! Đừng dùng tính năng ảo diệu / phi thường quá → dễ lộ và bị tố kaka.\n\n• Tumadam lúc up app thường ghi lưu ý ở **phần note lúc cài app** — bạn chịu khó lướt xuống đọc là okla nhé!',
  },
  {
    keywords: [
      'trận ảo','tran ao','fix trận','fix tran','lỗi trận','loi tran',
      'game bị ảo','game bi ao','đi ảo','di ao','bot tự chạy','bot tu chay',
      'tướng tự đi','tuong tu di','màn hình trắng game','man hinh trang game',
      'liên quân bị lỗi','lien quan bi loi','lq bị ảo','lq bi ao',
    ],
    answer: '[[icon:aov]] **Cách Fix Trận Ảo Liên Quân**\n\nHaha trận ảo thì chắc là Liên Quân rồi nhỉ?\n\n**1. Unlock Skin:** Thoát game vào lại là được.\n\n**2. Mod Files:** Bật menu chọn **Xoá Mod Skin** → **Force Update** (gần nút mod files).\n\n**3. Vẫn lỗi:** Nhắn admin @tumadam2507, báo rõ skin lỗi (mod files hay unlock).\n\n[[svg:warn]] Dùng unlock skin thì né list skin ảo — xem [tại đây](https://unlock.tumadam.com/note-list-skin.html)',
  },
  {
    keywords: [
      'setting','chơi kín','choi kin','cài đặt chơi','setting kin','bắn kín','ban kin','config',
      'chỉnh setting','chinh setting','setting như thế nào','setting nhu the nao',
      'chỉnh thế nào','chinh the nao','setting aim','setting bắn','setting chơi',
    ],
    answer: '[[svg:check]] **Setting chơi kín**\n\nChỉnh setting giống **ảnh demo lúc cài app** của admin Tumadam, cộng thêm **bắn kín** lại là okla nhé!\n\nThực ra kín hay không thì **90% do cách chơi** bạn thôi, setting chỉ góp khoảng 5% thui kaka ',
  },
  {
    keywords: [
      'liên hệ','lien he','contact','hỗ trợ','ho tro','telegram admin','nhắn admin','nhan admin',
      'admin ở đâu','admin o dau','hỏi admin','hoi admin','nhắn tin admin','nhan tin admin',
      'liên lạc','lien lac','gặp admin','gap admin','báo admin','bao admin',
    ],
    answer: '[[svg:bot]] **Liên hệ admin**\n\n[[svg:telegram]] Nhắn admin [tại đây](https://t.me/tumadam2507)\n\n**Lưu ý quan trọng khi nhắn:**\n[[svg:dot]] Vào **thẳng vấn đề** nhé, đừng nhắn tào lao hay hỏi thứ admin đã thông báo → không được rep!\n• Admin nhận **hàng trăm tin/ngày** và khá bận, anh em **cần thiết mới nhắn** nha!',
  },
  {
    keywords: [
      'không hiện skin','khong hien skin','skin không hiện','sao không hiện',
      'mat skin','mất skin','skin bị mất','skin bi mat','không thấy skin','khong thay skin',
      'skin không có','skin khong co','không thấy tướng','unlock không hiện',
      'skin sao không ra','hiện skin sao','skin không lên',
    ],
    answer: '[[icon:aov]] **Tại sao không hiện skin? (Liên Quân)**\n\n**1.** Tải **full tài nguyên** game để hiệu ứng đầy đủ HD.\n\n**2.** Bật menu mod chọn tính năng skin: **unlock skin, nút, thông báo hạ**.\n\n**3.** Vô **Huấn luyện** test — chỉ chọn **1 skin bên mình** thôi (chọn cả mình lẫn bot sẽ không hiện trong đấu luyện nhé).\n\n**4.** Unlock nút, thông báo hạ: chọn theo ý thích rồi chiến thôi!\n\n[[svg:warn]] Nhớ né list skin bị ảo khi dùng unlock — xem [tại đây](https://unlock.tumadam.com/note-list-skin.html)',
  },
  {
    game: 'aov',
    keywords: [
      'mod file lien quan','mod file lq','mod skin lien quan','mod skin lq',
      'cài file mod','cai file mod','dùng file mod','dung file mod',
      'file skin lien quan','file skin lq','file ipa mod',
      'tải file mod','tai file mod','link file mod','file mod ở đâu','modfile',
    ],
    answer: '[[icon:aov]] **Cách mod file Liên Quân iOS**\n\nTải file mod [tại đây](https://tumadam.com/#modfiles)\n\n**Lưu ý khi mod file:**\n[[svg:dot]] File có **thời hạn** — hiện thông báo update thì bấm **Xoá Mod** ở menu.\n• Chỉ dùng file gửi lên web (file nguồn khác lỗi trận ráng chịu ).\n• Dùng **unlock** vẫn okla hơn — mình khuyên vậy!\n\n[[svg:info]] Hoặc dùng **Bot tạo file skin** tự động 24/24 [tại đây](https://t.me/tumadammodskin_bot)',
  },
  {
    keywords: [
      'update','cập nhật','cap nhat','fix update','lỗi update','loi update',
      'kiện tướng','kien tuong','bắt update','bat update','bị bắt update',
      'game bắt update','game bat update','update không được','update khong duoc',
      'lỗi sau update','loi sau update','bắt lên app store','bat len app store',
    ],
    answer: '[[svg:tool]] **Fix lỗi bắt update**\n\nLQ hiện **"Kiện tướng thân mến... update..."** → đây là do bạn **mod file** nhé!\n\n**Cách fix:** Bật menu chọn **Xoá Mod** → **Force Update**. Vẫn không được thì xoá app tải lại.\n\n**Mẹo phân biệt:** Update **chính thức** của game sẽ hiện icon **App Store** bắt lên đó update mới là thật nhé!',
  },
  {
    keywords: [
      'văng app','vang app','crash','die chứng chỉ','die chung chi','app văng',
      'bị văng','bi vang','thoát app','thoat app','app tự thoát','app tu thoat',
      'mở app bị văng','mo app bi vang','vào app là bay','vao app la bay',
      'app không mở được','app khong mo duoc','bấm ok xong văng',
    ],
    answer: '[[svg:warn]] **Fix lỗi văng app**\n\n**Vào app là văng (die chứng chỉ):**\nVào nhóm Telegram đợi admin thông báo ký lại — vào nhóm [tại đây](https://t.me/tumadammod1)\n\n**Bấm OK xong văng:**\nCũng vào nhóm đợi admin thông báo nhé!\n\nĐây là lỗi chứng chỉ bị thu hồi — chỉ cần đợi admin ký lại là ổn thôi.',
  },
  {
    keywords: [
      'tài nguyên','tai nguyen','chuyển tn','chuyen tn','full tn','resource',
      'tải tài nguyên','tai tai nguyen','thiếu tài nguyên','thieu tai nguyen',
      'tài nguyên ở đâu','full tài nguyên','full resource',
    ],
    answer: '[[svg:download]] **Về tài nguyên game**\n\nMột số bản mod skin cần tải **full tài nguyên** mới hiện skin đúng và đẹp HD.\n\nXem video **"Hướng dẫn chuyển tài nguyên liên quân"** ở mục **Video Hướng Dẫn** trên web nhé!',
  },
  {
    keywords: [
      'ipa','esign','gbox','scarlet','trollstore','troll store',
      'cài ipa như thế nào','cai ipa nhu the nao','ipa là gì','ipa la gi',
      'dùng esign','dung esign','dùng gbox','dung gbox',
    ],
    answer: '[[svg:apple]] **Về file IPA**\n\nĐể cài IPA bạn cần một trong các công cụ ký app:\n[[svg:dot]] **Esign, Gbox, Scarlet, TrollStore...**\n\nCài IPA khá phức tạp và hay gặp lỗi xác minh hơn cài trực tiếp.\n\n👉 Mình vẫn **khuyên cài trực tiếp** trên tumadam.com cho đơn giản nhé! [[video:https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/copy_CD6B6FC3-B16A-4A32-ACB2-3B87C5B32A8F.MOV|Hướng dẫn cài app iOS|Cài trực tiếp cho nhanh]]',
  },
  {
    keywords: [
      'nhóm telegram','nhom telegram','group telegram','kênh telegram','kenh telegram',
      'nhóm discord','nhom discord','group discord','cộng đồng','cong dong',
      'group','nhóm','tham gia nhóm','tham gia group',
    ],
    answer: '[[svg:bot]] **Nhóm & cộng đồng Tumadam**\n\n[[svg:telegram]] Telegram Channel [tại đây](https://t.me/tumadammod1)\n[[svg:discord]] Discord [tại đây](https://discord.com/invite/6XB4GscjQR)\n[[svg:play]] YouTube [tại đây](/)\n\nTham gia để nhận thông báo fix lỗi, update app sớm nhất nhé!',
  },
  {
    keywords: [
      'ban mạng','ban mang','ban 5p','ban 10p','ban 15p','ban phút','ban network',
      'bị ban mạng','bi ban mang','pubg ban mạng','pupg ban mạng',
      'fix ban mạng','fix ban mang','ban tạm thời','ban tam thoi',
    ],
    answer: '[[icon:pubg]] **Fix Ban Mạng PUBG (5-10-15 phút)**\n\n**Bước 1 — Reset cài đặt iPhone:**\nCài Đặt → Chung → Chuyển/Đặt Lại → Đặt Lại → chọn **"Đặt Lại Tất Cả Cài Đặt"**\n\n**Bước 2 — Xoá dữ liệu Safari:**\nCài Đặt → Safari → kéo xuống chọn **"Xoá Lịch Sử Và Dữ Liệu Web"**\n\n**Bước 3 — Vẫn bị?**\nThử đổi acc khác test. Nếu acc khác không bị → acc cũ bị **ghim** rồi nhé!\n\nNói chung ban mạng này thường do bị **tố** thôi, chơi kín là không gặp kaka ',
  },
  {
    keywords: [
      'bypass key roblox','bypass roblox','key roblox','roblox key','bypass key',
      'key delta','delta key','roblox bypass','cách lấy key roblox',
      'key roblox ở đâu','get key roblox','vượt key roblox',
    ],
    answer: '[[icon:roblox]] **Cách Bypass Key Roblox**\n\nXem hướng dẫn xem [tại đây](https://t.me/tumadammod3/4)',
  },
  {
    keywords: [
      'zsm','zing speed mobile','setting zsm','lưu ý zsm','hack zsm','chơi zsm',
      'tele zsm','dùng zsm','zsm luu y','zsm setting','thanh kéo zsm',
    ],
    answer: '[[icon:zsm]] **Lưu ý khi chơi ZSM**\n\n[[svg:dot]] **Hạn chế dùng Tele** ở rank cao — dễ bị phát hiện và tố.\n• **Không đụng vào 2 thanh kéo** trong menu hack — bật lên rất dễ lộ.\n\nChơi cơ bản, kín là okla nhé kaka ',
  },
  {
    keywords: [
      'hi','hello','xin chào','chào','chao','alo','hey','helo','yo','sup',
    ],
    answer: 'Chào bạn!  Mình là **Tumadam Bot**. Mình giúp được về:\n[[svg:dot]] Cài app iOS\n• Fix lỗi xác minh / văng app\n• Get key free\n• Tránh ban\n• Fix trận ảo\n• Mod file...\n\nBấm gợi ý bên dưới hoặc gõ câu hỏi nhé!',
  },
  {
    keywords: ['cảm ơn','cam on','thanks','thank','oke','okê','tks','ty','ok bạn'],
    answer: 'Không có gì!  Chúc bạn chơi game vui vẻ, nhớ chơi kín nha kaka! Cần gì cứ quay lại hỏi mình ',
  },
];

const BOT_WELCOME  = 'Chào bạn! 👋 Mình là **Tumadam Bot** — trợ lý hỗ trợ tự động.\n\nMình giúp được về cài app, fix lỗi, get key, tránh ban, fix trận ảo... Bấm gợi ý bên dưới hoặc gõ câu hỏi nhé!';
const BOT_FALLBACK = 'Hmm, mình chưa có thông tin chính xác về câu này 🤔\n\nBạn thử hỏi lại bằng từ khoá khác, hoặc chọn chủ đề gợi ý bên dưới. Cần gấp thì nhắn admin **@tumadam2507** nhé!';
const BOT_QUICK = [
  'Cách cài app', 'Mod skin', 'Fix lỗi xác minh', 'Get key free',
  'Tránh ban', 'Fix trận ảo', 'Setting chơi kín', 'Liên hệ admin',
];

function initChatbot() {
  const fab    = document.getElementById('chatFab');
  const widget = document.getElementById('chatWidget');
  const closeBtn = document.getElementById('chatClose');
  const body   = document.getElementById('cwBody');
  const quick  = document.getElementById('cwQuick');
  const input  = document.getElementById('cwInput');
  const sendBtn = document.getElementById('cwSend');
  if (!fab || !widget) return;

  let started = false;

  const noAccent = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');

  /* ===== NHẬN DIỆN GAME & NỀN TẢNG TỪ CÂU HỎI ===== */
  const GAME_HINTS = {
    pubg:   ['pubg','pupg','pubgm','pb','battleground','sinh ton','sinh tồn'],
    aov:    ['aov','lq','lien quan','liên quân','lqm','lienquan','arena of valor'],
    roblox: ['roblox','rblx','delta'],
    zsm:    ['zsm','zing speed','zingspeed','speed mobile'],
    cfm:    ['cfm','crossfire','dot kich','đột kích'],
  };
  const PLATFORM_HINTS = {
    ios:     ['ios','iphone','ipad','apple','tf','testflight','ipa'],
    android: ['android','andr','apk','samsung','oppo','xiaomi','realme','vivo'],
  };

  function detectGame(q) {
    for (const [game, hints] of Object.entries(GAME_HINTS)) {
      if (hints.some(h => q.includes(noAccent(h)))) return game;
    }
    return null;
  }
  function detectPlatform(q) {
    for (const [plat, hints] of Object.entries(PLATFORM_HINTS)) {
      if (hints.some(h => q.includes(noAccent(h)))) return plat;
    }
    return null;
  }

  /* ===== CÁC CÂU HỎI LẠI KHI THIẾU THÔNG TIN ===== */
  const NEED_GAME = {
    test: q => /mod ?skin|modskin|mod file|file mod/.test(q) && !detectGame(q),
    ask: '[[svg:game]] **Bạn muốn mod skin game nào?**\n\n[[chip:Liên Quân]]\n[[chip:PUBG]]',
  };
  const NEED_PLATFORM = {
    test: q => /dang nhap|login|dang ky|cai app|cai dat|tai app|cach cai/.test(q) && !detectPlatform(q),
    ask: '[[svg:phone]] **Bạn dùng máy nào?**\n\n[[chip:iPhone / iOS]]\n[[chip:Android]]',
  };

  function findAnswer(text) {
    const q = noAccent(text);
    const words = q.split(/\s+/).filter(w => w.length > 1);
    const game = detectGame(q);
    const platform = detectPlatform(q);

    // ===== BƯỚC 1: Hỏi lại nếu thiếu thông tin quan trọng =====
    if (NEED_GAME.test(q)) return NEED_GAME.ask;
    if (NEED_PLATFORM.test(q)) return NEED_PLATFORM.ask;

    let best = null, bestScore = 0;

    BOT_KNOWLEDGE.forEach(item => {
      let score = 0;

      // ===== BƯỚC 2: Ưu tiên mạnh theo game/nền tảng =====
      if (item.game) {
        if (game && item.game === game) score += 200;      // đúng game → cộng lớn
        else if (game && item.game !== game) score -= 300;  // sai game → loại thẳng
      }
      if (item.platform) {
        if (platform && item.platform === platform) score += 120;
        else if (platform && item.platform !== platform) score -= 200;
      }

      // ===== BƯỚC 3: Chấm điểm từ khoá =====
      item.keywords.forEach(kw => {
        const k = noAccent(kw);
        if (q.includes(k)) {
          score += k.length * 3;
        } else {
          const kwWords = k.split(/\s+/);
          let wordHits = 0;
          kwWords.forEach(kw2 => {
            if (kw2.length < 2) return;
            if (words.some(w => w.includes(kw2) || kw2.includes(w))) wordHits++;
          });
          if (wordHits > 0) score += wordHits * k.length * 0.6;
        }
      });

      if (score > bestScore) { bestScore = score; best = item; }
    });

    return (best && bestScore >= 3) ? best.answer : BOT_FALLBACK;
  }

  /* ===== ICON GAME — tự lấy từ dữ liệu GAMES để không bị sai ===== */
  function iconFromGames(matcher) {
    const g = GAMES.find(matcher);
    return g ? (g.img || g.fallback || '') : '';
  }
  const GAME_ICONS = {
    // Liên Quân iOS (bản mod)
    aov:     iconFromGames(g => /aov mod/i.test(g.name)),
    // Liên Quân Android — lấy đúng icon của card Android
    aovandr: iconFromGames(g => g.type === 'android'),
    pubg:    iconFromGames(g => /pubg|pupg/i.test(g.name)),
    roblox:  iconFromGames(g => /roblox/i.test(g.name)),
    zsm:     iconFromGames(g => /zsm/i.test(g.name)),
  };

  /* ===== ICON SVG (thay emoji xấu) ===== */
  const SVG_ICONS = {
    android: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 9.48l1.84-3.18a.4.4 0 00-.7-.4l-1.86 3.23a11.4 11.4 0 00-9.76 0L5.26 5.9a.4.4 0 10-.7.4L6.4 9.48A10.8 10.8 0 001 18h22a10.8 10.8 0 00-5.4-8.52M7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5m10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5"/></svg>',
    apple:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/></svg>',
    download:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>',
    key:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.65 10A6 6 0 001 12a6 6 0 0011.65 2H17v4h4v-4h2v-4H12.65zM7 14a2 2 0 110-4 2 2 0 010 4z"/></svg>',
    warn:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>',
    check:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
    tool:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.7 19l-9.1-9.1a5.5 5.5 0 00-7.4-6.9l3.7 3.7-2.6 2.6-3.7-3.7a5.5 5.5 0 006.9 7.4l9.1 9.1a1 1 0 001.4 0l1.7-1.7a1 1 0 000-1.4z"/></svg>',
    play:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>',
    bot:     '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h4a3 3 0 013 3v9a3 3 0 01-3 3H7a3 3 0 01-3-3v-9a3 3 0 013-3h4V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2M7.5 12a1.5 1.5 0 000 3 1.5 1.5 0 000-3m9 0a1.5 1.5 0 000 3 1.5 1.5 0 000-3z"/></svg>',
    phone:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 1H7a2 2 0 00-2 2v18a2 2 0 002 2h10a2 2 0 002-2V3a2 2 0 00-2-2m0 18H7V5h10v14z"/></svg>',
    game:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6H3a2 2 0 00-2 2v8a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2M11 13H9v2H7v-2H5v-2h2V9h2v2h2v2m4.5 2a1.5 1.5 0 110-3 1.5 1.5 0 010 3m4-3a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></svg>',
    shield:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/></svg>',
    telegram:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"/></svg>',
    discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 00-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 00-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.01.06.02.09.01 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"/></svg>',
    dot:     '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>',
    info:    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20m1 15h-2v-6h2v6m0-8h-2V7h2v2z"/></svg>',
  };

  function esc(s) {
    return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }

  function fmt(text) {
    let out = esc(text);

    // ===== 1. Icon game (ảnh thật): [[icon:pubg]] =====
    out = out.replace(/\[\[icon:(\w+)\]\]/g, (m, key) => {
      const src = GAME_ICONS[key];
      return src ? `<img class="cw-game-icon" src="${src}" alt="${key}">` : '';
    });

    // ===== 1b. Icon SVG: [[svg:android]] =====
    out = out.replace(/\[\[svg:(\w+)\]\]/g, (m, key) => {
      const svg = SVG_ICONS[key];
      return svg ? `<span class="cw-svg-icon">${svg}</span>` : '';
    });

    // ===== 2. Video preview card: [[video:URL|Tiêu đề|Mô tả]] =====
    out = out.replace(/\[\[video:([^\|\]]+)\|([^\|\]]*)\|?([^\]]*)\]\]/g, (m, url, title, sub) => {
      const isYT = /youtu\.be|youtube\.com/.test(url);
      const thumbMatch = url.match(/(?:youtu\.be\/|v=)([A-Za-z0-9_-]{11})/);
      const thumb = thumbMatch ? `https://img.youtube.com/vi/${thumbMatch[1]}/mqdefault.jpg` : '';
      return `
      <a class="cw-video-card" href="${url}" target="_blank" rel="noopener">
        <div class="cw-video-thumb">
          ${thumb
            ? `<img src="${thumb}" alt="${title}" loading="lazy">`
            : `<div class="cw-video-ph"><i class="bi bi-play-circle-fill"></i></div>`}
          <div class="cw-video-play"><i class="bi bi-play-fill"></i></div>
        </div>
        <div class="cw-video-meta">
          <div class="cw-video-src">${isYT ? 'youtube.com' : 'Video hướng dẫn'}</div>
          <div class="cw-video-title">${title || 'Xem video hướng dẫn'}</div>
          ${sub ? `<div class="cw-video-sub">${sub}</div>` : ''}
        </div>
      </a>`;
    });

    // ===== 3. Chip bấm nhanh: [[chip:Nội dung]] =====
    out = out.replace(/\[\[chip:([^\]]+)\]\]/g, (m, label) =>
      `<button class="cw-inline-chip" data-q="${label}">${label}</button>`);

    // ===== 4. Link gọn: [tại đây](url) =====
    out = out.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a class="cw-link-btn" href="$2" target="_blank" rel="noopener">$1 <i class="bi bi-box-arrow-up-right"></i></a>');

    // ===== 5. Chữ đậm + xuống dòng =====
    out = out.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>').replace(/\n/g,'<br>');

    // ===== 6. Link trần còn lại (chưa được bọc thẻ) =====
    out = out.replace(/(^|[\s>])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener">$2</a>');

    return out;
  }

  function tnow() {
    const d = new Date();
    return String(d.getHours()).padStart(2,'0') + ':' + String(d.getMinutes()).padStart(2,'0');
  }

  function addMsg(text, sender) {
    const m = document.createElement('div');
    m.className = 'cw-msg ' + sender;
    const av = sender === 'bot'
      ? '<div class="cw-msg-av"><i class="bi bi-robot"></i></div>'
      : '<div class="cw-msg-av"><i class="bi bi-person-fill"></i></div>';
    m.innerHTML = av + '<div><div class="cw-bubble">' + fmt(text) + '</div><span class="cw-time">' + tnow() + '</span></div>';

    // Chip bấm nhanh trong tin nhắn → gửi luôn câu hỏi
    m.querySelectorAll('.cw-inline-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const q = chip.dataset.q;
        addMsg(q, 'user');
        reply(q);
      });
    });

    body.appendChild(m);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'cw-typing'; t.id = 'cwTyping';
    t.innerHTML = '<div class="cw-msg-av" style="background:linear-gradient(135deg,#3730a3,#818cf8);color:#fff;display:flex;align-items:center;justify-content:center"><i class="bi bi-robot"></i></div><div class="cw-typing-bubble"><span></span><span></span><span></span></div>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }
  function hideTyping() { const t = document.getElementById('cwTyping'); if (t) t.remove(); }

  function reply(text) {
    showTyping();
    const ans = findAnswer(text);
    setTimeout(() => { hideTyping(); addMsg(ans, 'bot'); }, Math.min(400 + ans.length * 10, 2000));
  }

  function send() {
    const text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = ''; input.style.height = 'auto';
    reply(text);
  }

  function renderQuick() {
    quick.innerHTML = '';
    BOT_QUICK.forEach(q => {
      const c = document.createElement('button');
      c.className = 'cw-chip'; c.textContent = q;
      c.onclick = () => { addMsg(q, 'user'); reply(q); };
      quick.appendChild(c);
    });
  }

  function openChat() {
    widget.classList.add('open');
    fab.classList.add('hidden');
    // Ẩn nút menu ≡ khi chat mở
    const menuFab = document.getElementById('menuToggle');
    if (menuFab) menuFab.style.display = 'none';
    if (!started) {
      started = true;
      renderQuick();
      setTimeout(() => addMsg(BOT_WELCOME, 'bot'), 300);
    }
    setTimeout(() => input.focus(), 350);
  }
  function closeChat() {
    widget.classList.remove('open');
    fab.classList.remove('hidden');
    // Hiện lại nút menu ≡
    const menuFab = document.getElementById('menuToggle');
    if (menuFab) menuFab.style.display = '';
  }

  fab.addEventListener('click', openChat);
  closeBtn.addEventListener('click', closeChat);
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
  input.addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 90) + 'px';
  });
}

/* =============================================
   INIT
   ============================================= */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('loading');
  initTheme();
  initClock();
  initSplash();
  mountSections();
  bindGameGrid();
  initMenu();
  initTyped();
  initMusic();
  initPreviewModal();
  initVideoModal();
  initGuideModal();
  initDeviceModal();
  initNoteModal();
  initScrollLinks();
  initChatbot();
  requestAnimationFrame(initScrollReveal);
});

