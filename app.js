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
    meta:     'Cập nhật 25/6',
    desc:     'Bản mod không hắc tài khoản — Chỉ Mod Skin.\n Tuy Nhiên Bị Tố Sẽ Ban 1-3-7 Ngày.',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      '/aovmod',
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
        url:   'https://tumadammod.github.io/autoup/note_list_skin',
        icon:  'bi-list-check',
      },
    ],
  },
  {
    name:     'Aov Cheat(Map+Mod)',
    meta:     'Cập nhật 25/7',
    desc:     'Hack map sáng + mod skin full chức năng.\n -Chơi kín không phang bụi(tránh bị tố)\n-Không nên dùng aim,auto bán đồ(dễ ban)',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      '/aovcheat',
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
    name:     'Aov ESP',
    meta:     'Cập nhật 24/7',
    desc:     'Aov Map Esp Trụ 6 Phiếu/ngày',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      '/lin-qun-mobile',
    hide:     false,
    status:   false,
    preview:  ['https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780673670456-xvkseh-IMG_8098.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780673670456-zj69g-IMG_8099.png&w=1920&q=75',
    'https://ipas.cc/_next/image?url=https%3A%2F%2Fdl.ipas.cc%2Fpreviews%2F1780673670457-e4aaak-IMG_8100.png&w=1920&q=75',
    ],
    extraBtns: [
      {
        label: '⚠️ Lưu ý khi dùng Esp',
        type:  'note',
        icon:  'bi-exclamation-triangle-fill',
        note:  '-Chỉ Bật Các Chức Năng Esp,modskin,phần cài đặt-->trụ 6phiếu/ngày\n• -Nghiêm Cấm Bật CN Hack Map(vì chỉ trụ đc 1 phiếu bị tố 1 phiếu = ban 7ngày)\n• -K dùng tab Aim&Auto.',
      },
    ],
  },
  {
    name:     'Map/Skin AOV Android',
    meta:     'Cập nhật 10/6 • Dùng Unlock nếu không muốn hắc',
    desc:     'Mod map sáng + unlock skin cho Android. Chỉ hỗ trợ bản 64-bit.\n• Dùng Unlock nếu chỉ cần mod skin (không hắc tài khoản).\n• Dùng Map+Mod nếu muốn thêm tính năng (có hack, cần key).',
    img:      'https://i.imgur.com/vKPMWWx.jpeg',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'android',
    url64:    '/aov-mapmod-andr-64bit',
    url32:    '',
    urlKey:   'https://tumadammod.github.io/getkeygameios/andr',
    hide:     false,
    status:   false,
    preview:  ['https://cdn.tumadam.com/games/preview/ac599508-ac81-4f4b-9632-dae856b2a8dc.jpeg',
    'https://cdn.tumadam.com/games/preview/4620c619-5386-49db-8d78-c2697c8747b3.jpeg',
    'https://cdn.tumadam.com/games/preview/dd007f19-76e7-404b-865f-71637db092a3.jpeg',
    ],
    extraBtns: [
      {
        label: '📋 Danh sách skin trận ảo (Unlock)',
        type:  'link',
        url:   'https://tumadammod.github.io/autoup/note_list_skin',
        icon:  'bi-list-check',
      },
    ],
  },
      {
    name:     'Aov Mod V2(Cho máy yếu)',
    meta:     'Cập nhật 25/6',
    desc:     'Bản mod không hắc tài khoản — Chỉ Mod Skin.\n Tuy Nhiên Bị Tố Sẽ Ban 1-3-7 Ngày.',
    img:      'https://play-lh.googleusercontent.com/29k6AAX1NYWPdnRmVm86NgvDlywy9o3TnNBJrbHWm3emdLB2dGrxdgc05f621I1kMVSph8U1igCpx3XTdS8blQ=w480-h960',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      '/aovmod',
    hide:     true,
    status:   false,
    preview:  ['https://cdn.tumadam.com/games/preview/bba60245-7738-4588-afdc-bbdd5f637c8e.webp',
    'https://cdn.tumadam.com/games/preview/89df9f0d-14d2-44ad-b7df-45e2790237b9.webp',
    'https://cdn.tumadam.com/games/preview/8cbb42bf-2d14-41df-8f7c-5396c4c293e9.webp',
    ],
    extraBtns: [
      {
        label: '📋 Danh sách skin gặp lỗi khi dùng unlock',
        type:  'link',
        url:   'https://tumadammod.github.io/autoup/note_list_skin',
        icon:  'bi-list-check',
      },
    ],
  },
  {
    name:     'PUPG iOS PRO',
    meta:     'Cập nhật 24/7',
    desc:     'PUBG Bắn Kín Diễn Như K Có Hack(Aim Nên Cho Bụng)\n-Mod Skin Cần Tải TN',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2F412c9c52-c2df-4d65-b6ec-4c58a85234a5.webp&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      '/pubg-mobile',
    hide:     false,
    status:   false,
    preview:  ['https://cdn.tumadam.com/files/45e971cc-8ff8-4efc-8f9a-1f5268980ef9.png',
    'https://cdn.tumadam.com/files/27a69ec8-e22e-4e9d-b094-b93321b42f47.png',
    'https://cdn.tumadam.com/files/d399c908-7a67-4036-9f4b-2c34c36b68a7.png',
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
    name:     'ZSM VNG',
    meta:     'Cập nhật 12/6',
    desc:     'Hạn Chế dùng tele ở rank cao,k nên đụng vào 2 thanh kéo',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2Ff9d0aeab-7325-43dd-93fb-f865d6c43802.png&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/zsm-vng',
    hide:     true,
    status:   false,
    preview:  [
      'https://cdn.tumadam.com/games/preview/8c5dbb22-bad1-4e25-af28-a77ef3a7248e.png',
    ],
  },
  {
    name:     'Roblox iOS Client Delta ',
    meta:     'Cập nhật 24/7',
    desc:     'Roblox iOS tích hợp Bypass Key — chạy script trong game.',
    img:      'https://tumadam.com/_next/image?url=https%3A%2F%2Fcdn.tumadam.com%2Fgames%2Ficon%2Ff50e2394-dcb6-4063-89ff-126faed25f26.png&w=256&q=75',
    fallback: 'https://i.imgur.com/vKPMWWx.jpeg',
    type:     'ios',
    url:      'https://tumadam.com/roblox',
    hide:     false,
    status:   false,
    preview:  [
      'https://cdn.tumadam.com/games/preview/571bdf45-d629-4d6d-b53e-f46b010c7f84.webp',
      'https://cdn.tumadam.com/games/preview/a487499c-9fac-46bd-9d56-e2f0b4c61a43.webp',
      'https://cdn.tumadam.com/games/preview/2027fd1c-9d4d-4166-b64d-231255b774a8.webp',
      'https://cdn.tumadam.com/games/preview/c99f101f-190b-4c00-b1be-6761b8198c28.webp',
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
    url:       'https://tumadammod.github.io/getkeygameios/',
    hide:      false,
  },
  {
    name:      'Get Key Pupg iOS',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'ios',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadammod.github.io/getkeygameios/pupgg',
    hide:      false,
  },
  {
    name:      'Mua Key iOS + Android',
    desc:      'Mua nếu không muốn vượt link',
    iconClass: 'shop',
    icon:      'bi-cart-fill',
    spin:      false,
    url:       'https://tumadam.com/shopkey',
    hide:      false,
  },
  {
    name:      'Get Key LQ Android',
    desc:      'Vượt 1 Link • Key 1 Ngày',
    iconClass: 'android',
    icon:      'bi-key-fill',
    spin:      true,
    url:       'https://tumadammod.github.io/getkeygameios/andr',
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
  { title: 'Sound 1', src: 'https://files.catbox.moe/zkp862.mp4' },
  { title: 'Sound 2', src: 'https://files.catbox.moe/8setl5.mp4' },
  { title: 'Sound 3', src: 'https://files.catbox.moe/7wimmp.mp4' },
  { title: 'Sound 4', src: 'https://files.catbox.moe/v4j3yh.mp4' },
  { title: 'Sound 5', src: 'https://files.catbox.moe/6ihyha.mp4' },
  { title: 'Sound 6', src: 'https://files.catbox.moe/i7lktq.mp4' },
];

/* =============================================
   DATA — MOD FILES
   type: 'zip' | 'ios' | 'ipa'
   hide: false = hiện, true = ẩn
   ============================================= */
const MOD_FILES = [
  {
    name:      'File Mod AOV iOS (Zip)',
    meta:      'Cập nhật 12/6',
    desc:      'File cho iOS||Mod file dễ lỗi trận chỉ nên dùng unlock skin.',
    type:      'ios',
    // url dùng chung nếu không có urlStrong/urlWeak
    url:       'https://www.mediafire.com/file/mne3dvvux084qo9/%255B11-6%255DFile_SKIN_LQ_iOS.zip/file',
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

  const iconClass = mod.type === 'ios' ? 'ios' : 'zip';
  const iconName  = mod.type === 'ios' ? 'bi-apple' : 'bi-file-zip-fill';
  const hasDeviceChoice = mod.type === 'ios' && (mod.urlStrong || mod.urlWeak);

  const el = document.createElement('div');
  el.className = 'mod-card-wrap';

  if (mod.guide) el.dataset.guide     = JSON.stringify(mod.guide);
  if (mod.urlStrong) el.dataset.strong = mod.urlStrong;
  if (mod.urlWeak)   el.dataset.weak   = mod.urlWeak;
  el.dataset.fallback = mod.url || '';

  // Nếu iOS có 2 bản → card không href, bấm mở modal chọn máy
  const cardTag   = hasDeviceChoice ? `<div class="mod-card mod-card-select"` : `<a class="mod-card" href="${mod.url}" target="_blank" rel="noopener"`;
  const cardClose = hasDeviceChoice ? `</div>` : `</a>`;

  el.innerHTML = `
    ${cardTag}>
      <div class="mod-icon ${iconClass}">
        <i class="bi ${iconName}"></i>
      </div>
      <div class="mod-info">
        <div class="mod-name">${mod.name}</div>
        <div class="mod-meta"><span class="mod-meta-dot"></span>${mod.meta}</div>
        ${mod.desc ? `<div class="mod-desc">${mod.desc}</div>` : ''}
      </div>
      <div class="mod-dl-btn">
        <i class="bi bi-cloud-arrow-down-fill"></i>
      </div>
    ${cardClose}
    ${mod.guide ? `
    <button class="mod-guide-btn" type="button">
      <i class="bi bi-tools"></i> Hướng dẫn Fix Trận Ảo
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
      <a href="https://discord.gg/tumadam" target="_blank" rel="noopener" class="status-btn discord">
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
      'testflight','test flight','cài testflight','cai testflight','cài qua testflight',
      'cách cài testflight','cach cai testflight','tf','cài bằng testflight','cai bang testflight',
      'link testflight','testflight là gì','testflight la gi','cài app testflight',
    ],
    answer: '**✈️ Cách cài qua TestFlight:**\n\n**1.** Tải app **TestFlight** trên App Store trước.\n**2.** Bấm link mời TestFlight của app → bấm **Accept** → **Install**.\n**3.** Mở app từ TestFlight là chơi được.\n\n📺 Xem video hướng dẫn chi tiết ở mục **Video Hướng Dẫn** phía dưới web nhé!',
  },
  {
    keywords: [
      'beta đầy','beta day','testflight đầy','testflight day','tf đầy','tf day',
      'beta full','testflight full','beta hết chỗ','beta het cho','hết slot beta','het slot beta',
      'không vào được testflight','khong vao duoc testflight','beta đã đầy','beta da day',
      'testflight hết chỗ','app này hiện không chấp nhận','khong chap nhan tester moi',
    ],
    answer: '**⚠️ TestFlight/Beta đã đầy?**\n\nApp TestFlight giới hạn số người tham gia nên hay bị đầy slot.\n\n**Cách xử lý:** Tham gia nhóm bên dưới để đợi admin mở slot mới hoặc thông báo link mới nhé!\n• Telegram 👉 https://t.me/tumadammod1\n• Discord 👉 https://discord.gg/tumadam\n\nAdmin sẽ reset slot / thả link mới thường xuyên, đợi thông báo là okla! 😊',
  },
  {
    keywords: [
      'đăng nhập fb andr','dang nhap fb andr','đăng nhập facebook android','dang nhap facebook android',
      'lỗi đăng nhập facebook','loi dang nhap facebook','login fb android','login facebook andr',
      'không đăng nhập được fb','khong dang nhap duoc fb','ko login được fb andr',
      'đăng nhập fb android','fb android lỗi','facebook android lỗi','dang nhap fb bi loi',
    ],
    answer: '**📲 Fix lỗi đăng nhập Facebook trên Android:**\n\n**Nguyên nhân:** App Facebook xung đột với mod.\n\n**Cách fix:**\n**1.** Vào **Cài đặt** → **Ứng dụng** → tìm **Facebook** → **Xoá app**.\n**2.** Sau khi xoá xong mới mở app AOV Android đăng nhập lại bằng Facebook.\n\n⚠️ Không cần cài lại Facebook — chỉ cần xoá đi là đăng nhập được trong game rồi nhé!',
  },
  {
    keywords: [
      'cài app','cai app','cách cài','cach cai','install','cài đặt','cai dat','tải app','cai ntn',
      'cài ipa','cai ipa','ipa','esign','gbox','scarlet','cài trực tiếp','cai truc tiep',
      'cài như thế nào','cai nhu the nao','cài kiểu gì','không biết cài','khong biet cai',
      'làm sao cài','lam sao cai','cài app ios','cai app ios','hướng dẫn cài','huong dan cai',
    ],
    answer: '**📲 Cách cài app trên iOS:**\n\n**1. Cài trực tiếp (khuyên dùng):**\nXem video hướng dẫn 👉 https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/copy_CD6B6FC3-B16A-4A32-ACB2-3B87C5B32A8F.MOV\n\n**2. Về file IPA:**\nCần công cụ như Esign, Gbox, Scarlet... Cài IPA khá khó nên mình vẫn khuyên cài trực tiếp cho nhanh nhé! 😊',
  },
  {
    keywords: [
      'xác minh','xac minh','fix xac minh','loi xac minh','lỗi xác minh','verify',
      'chứng chỉ','chung chi','untrusted','không tin tưởng','khong tin tuong',
      'lỗi cài','loi cai','bị lỗi sau khi cài','không mở được','khong mo duoc',
      'cài xong bị lỗi','cai xong bi loi','không vào được app','lỗi xác nhận',
    ],
    answer: '**🔧 Fix lỗi xác minh:**\n\n**Cài trực tiếp trên tumadam.com:** Khỏi lo! Đợi **1-3 tiếng** (chậm nhất 5-6 tiếng) admin fix liền. Vào nhóm nhận thông báo:\n• Telegram 👉 https://t.me/tumadammod1\n• Discord 👉 https://discord.gg/tumadam\n\n**Cài IPA:** Lỗi xác minh IPA thì phải chịu nhé 😅\n\n---\n**🛡️ Game Roblox / PUBG / ZSM bị thu hồi chứng chỉ?**\nCài thêm **DNS chặn thu hồi** nhé!\n\n• Xem video cách cài 👉 https://files.catbox.moe/gf70tp.mp4\n• File DNS 👉 https://www.mediafire.com/file/6vffsopqy2jqqes/Anti-Revoke.mobileconfig/file\n\n⚠️ Cài DNS xong mà vẫn hiện xác minh: Vào **Cài đặt → Chung → Quản lý VPN & Thiết bị** → bấm **Tin cậy** là xong!',
  },
  {
    keywords: [
      'get key','key free','lấy key','lay key','key mien phi','key miễn phí',
      'key o dau','key ở đâu','free key','key như thế nào','key nhu the nao',
      'key ở chỗ nào','lấy key ở đâu','lay key o dau','vượt link','vuot link',
      'key hết hạn','key het han','key không dùng được','key lq','key liên quân',
    ],
    answer: '**🔑 Cách get key free:**\n\nKey free bên Tumadam thì chắc chắn có rồi nhé!\n\n• **Link Get Key tổng hợp** 👉 https://tumadam.com/#getkey\n\n• Cần xem video hướng dẫn? Bấm vào link get key ở trên, ở dưới có **nút xanh "Video hướng dẫn"** bấm vào xem nhé!',
  },
  {
    keywords: [
      'tránh ban','tranh ban','chống ban','chong ban','bị ban','bi ban','có ban không','co ban khong',
      'khóa nick','khoa nick','sao bị ban','check to','bị tố','bi to','tố hack',
      'ban vĩnh viễn','ban vinh vien','an toàn không','an toan khong','hack có bị ban','hack co bi ban',
      'sao vẫn ban','sao van ban','chơi kín vẫn ban','choi kin van ban',
    ],
    answer: '**🚫 Cách tránh ban:**\n\nChơi công cụ gian lận thì ban là hiển nhiên 😅 Nhưng anti bên Tumadam chất lượng nên yên tâm!\n\n**Mẹo:** Game nào cũng nên **chơi kín** — cứ như diễn viên, là được kaka.\n\n**Chơi kín vẫn ban?** Đa số do bị **tố** → bị quét. Có khi vài hôm sau đối thủ mới nhớ ra tố đó!\n\n**Check tố vẫn ban?** Nó tố hôm nay, biết đâu mấy hôm sau mới bị quét. Cứ chơi kín thôi là okla!',
  },
  {
    keywords: [
      'lưu ý','luu y','lưu ý hack','dùng hack','dung hack','lưu ý khi dùng','can than',
      'bật chức năng gì','bat chuc nang gi','dùng tính năng nào','dung tinh nang nao',
      'nên bật gì','nen bat gi','hack cái gì','bật aim','bat aim','bật esp','bat esp',
      'nên dùng gì','nen dung gi','chức năng nào an toàn',
    ],
    answer: '**⚠️ Lưu ý khi dùng hack:**\n\n• Chỉ bật **chức năng cơ bản** thôi nhé! Đừng dùng tính năng ảo diệu / phi thường quá → dễ lộ và bị tố kaka.\n\n• Tumadam lúc up app thường ghi lưu ý ở **phần note lúc cài app** — bạn chịu khó lướt xuống đọc là okla nhé!',
  },
  {
    keywords: [
      'trận ảo','tran ao','fix trận','fix tran','lỗi trận','loi tran',
      'game bị ảo','game bi ao','đi ảo','di ao','bot tự chạy','bot tu chay',
      'tướng tự đi','tuong tu di','màn hình trắng game','man hinh trang game',
      'liên quân bị lỗi','lien quan bi loi','lq bị ảo','lq bi ao',
    ],
    answer: '**🛠️ Cách Fix Trận Ảo AOV:**\n\nHaha trận ảo thì chắc là Liên Quân rồi nhỉ?\n\n**1. Unlock Skin:** Thoát game vào lại là được.\n\n**2. Mod Files:** Bật menu chọn **Xoá Mod Skin** → **Force Update** (gần nút mod files).\n\n**3. Vẫn lỗi:** Nhắn admin @tumadam2507, báo rõ skin lỗi (mod files hay unlock).\n\n⚠️ Dùng unlock skin thì né list skin ảo này nhé 👉 https://tumadammod.github.io/autoup/note_list_skin',
  },
  {
    keywords: [
      'setting','chơi kín','choi kin','cài đặt chơi','setting kin','bắn kín','ban kin','config',
      'chỉnh setting','chinh setting','setting như thế nào','setting nhu the nao',
      'chỉnh thế nào','chinh the nao','setting aim','setting bắn','setting chơi',
    ],
    answer: '**🎯 Setting chơi kín:**\n\nChỉnh setting giống **ảnh demo lúc cài app** của admin Tumadam, cộng thêm **bắn kín** lại là okla nhé!\n\nThực ra kín hay không thì **90% do cách chơi** bạn thôi, setting chỉ góp khoảng 5% thui kaka 😄',
  },
  {
    keywords: [
      'liên hệ','lien he','contact','hỗ trợ','ho tro','telegram admin','nhắn admin','nhan admin',
      'admin ở đâu','admin o dau','hỏi admin','hoi admin','nhắn tin admin','nhan tin admin',
      'liên lạc','lien lac','gặp admin','gap admin','báo admin','bao admin',
    ],
    answer: '**📞 Liên hệ admin:**\n\n• Telegram 👉 https://t.me/tumadam2507\n\n**Lưu ý quan trọng khi nhắn:**\n• Vào **thẳng vấn đề** nhé, đừng nhắn tào lao hay hỏi thứ admin đã thông báo → không được rep!\n• Admin nhận **hàng trăm tin/ngày** và khá bận, anh em **cần thiết mới nhắn** nha!',
  },
  {
    keywords: [
      'không hiện skin','khong hien skin','skin không hiện','sao không hiện',
      'mat skin','mất skin','skin bị mất','skin bi mat','không thấy skin','khong thay skin',
      'skin không có','skin khong co','không thấy tướng','unlock không hiện',
      'skin sao không ra','hiện skin sao','skin không lên',
    ],
    answer: '**✨ Tại sao không hiện skin? (Liên Quân)**\n\n**1.** Tải **full tài nguyên** game để hiệu ứng đầy đủ HD.\n\n**2.** Bật menu mod chọn tính năng skin: **unlock skin, nút, thông báo hạ**.\n\n**3.** Vô **Huấn luyện** test — chỉ chọn **1 skin bên mình** thôi (chọn cả mình lẫn bot sẽ không hiện trong đấu luyện nhé).\n\n**4.** Unlock nút, thông báo hạ: chọn theo ý thích rồi chiến thôi!\n\n⚠️ Nhớ né list skin bị ảo khi dùng unlock 👉 https://tumadammod.github.io/autoup/note_list_skin',
  },
  {
    keywords: [
      'mod file','mod files','cách mod','cach mod','modfile','file mod',
      'cài file mod','cai file mod','dùng file mod','dung file mod',
      'mod skin bằng file','mod skin bang file','file skin','file ipa mod',
      'tải file mod','tai file mod','link file mod','file mod ở đâu',
    ],
    answer: '**📦 Cách mod file LQ iOS:**\n\nLink mod files 👉 https://tumadammod.github.io/#modfiles\n\n**Lưu ý khi mod file:**\n• File có **thời hạn** — nếu hiện thông báo update thì bấm **Xoá Mod** ở menu.\n• Chỉ dùng file gửi lên web (file nguồn khác lỗi trận ráng chịu 😅).\n• Dùng **unlock** vẫn okla hơn — mình khuyên vậy!',
  },
  {
    keywords: [
      'update','cập nhật','cap nhat','fix update','lỗi update','loi update',
      'kiện tướng','kien tuong','bắt update','bat update','bị bắt update',
      'game bắt update','game bat update','update không được','update khong duoc',
      'lỗi sau update','loi sau update','bắt lên app store','bat len app store',
    ],
    answer: '**🔄 Fix lỗi bắt update:**\n\nLQ hiện **"Kiện tướng thân mến... update..."** → đây là do bạn **mod file** nhé!\n\n**Cách fix:** Bật menu chọn **Xoá Mod** → **Force Update**. Vẫn không được thì xoá app tải lại.\n\n**Mẹo phân biệt:** Update **chính thức** của game sẽ hiện icon **App Store** bắt lên đó update mới là thật nhé!',
  },
  {
    keywords: [
      'văng app','vang app','crash','die chứng chỉ','die chung chi','app văng',
      'bị văng','bi vang','thoát app','thoat app','app tự thoát','app tu thoat',
      'mở app bị văng','mo app bi vang','vào app là bay','vao app la bay',
      'app không mở được','app khong mo duoc','bấm ok xong văng',
    ],
    answer: '**💥 Fix lỗi văng app:**\n\n**Vào app là văng (die chứng chỉ):**\nVào nhóm Telegram đợi admin thông báo ký lại 👉 https://t.me/tumadammod1\n\n**Bấm OK xong văng:**\nCũng vào nhóm đợi admin thông báo nhé!\n\nĐây là lỗi chứng chỉ bị thu hồi — chỉ cần đợi admin ký lại là ổn thôi.',
  },
  {
    keywords: [
      'tài nguyên','tai nguyen','chuyển tn','chuyen tn','full tn','resource',
      'tải tài nguyên','tai tai nguyen','thiếu tài nguyên','thieu tai nguyen',
      'tài nguyên ở đâu','full tài nguyên','full resource',
    ],
    answer: '**📥 Về tài nguyên game:**\n\nMột số bản mod skin cần tải **full tài nguyên** mới hiện skin đúng và đẹp HD.\n\nXem video **"Hướng dẫn chuyển tài nguyên liên quân"** ở mục **Video Hướng Dẫn** trên web nhé!',
  },
  {
    keywords: [
      'ipa','esign','gbox','scarlet','trollstore','troll store',
      'cài ipa như thế nào','cai ipa nhu the nao','ipa là gì','ipa la gi',
      'dùng esign','dung esign','dùng gbox','dung gbox',
    ],
    answer: '**📦 Về file IPA:**\n\nĐể cài IPA bạn cần một trong các công cụ ký app:\n• **Esign, Gbox, Scarlet, TrollStore...**\n\nCài IPA khá phức tạp và hay gặp lỗi xác minh hơn cài trực tiếp.\n\n👉 Mình vẫn **khuyên cài trực tiếp** trên tumadam.com cho đơn giản nhé! Xem video cài 👉 https://pub-8851b5874408441f85670cfe38ce6aa7.r2.dev/copy_CD6B6FC3-B16A-4A32-ACB2-3B87C5B32A8F.MOV',
  },
  {
    keywords: [
      'nhóm telegram','nhom telegram','group telegram','kênh telegram','kenh telegram',
      'nhóm discord','nhom discord','group discord','cộng đồng','cong dong',
      'group','nhóm','tham gia nhóm','tham gia group',
    ],
    answer: '**💬 Nhóm & cộng đồng Tumadam:**\n\n• **Telegram Channel** (cập nhật mới nhất) 👉 https://t.me/tumadammod1\n• **Discord** 👉 https://discord.gg/tumadam\n• **YouTube** hướng dẫn 👉 https://www.youtube.com/@tumadam-q1u\n\nTham gia để nhận thông báo fix lỗi, update app sớm nhất nhé!',
  },
  {
    keywords: [
      'ban mạng','ban mang','ban 5p','ban 10p','ban 15p','ban phút','ban network',
      'bị ban mạng','bi ban mang','pubg ban mạng','pupg ban mạng',
      'fix ban mạng','fix ban mang','ban tạm thời','ban tam thoi',
    ],
    answer: '**⚠️ Fix Ban Mạng PUBG (5-10-15 phút):**\n\n**Bước 1 — Reset cài đặt iPhone:**\nCài Đặt → Chung → Chuyển/Đặt Lại → Đặt Lại → chọn **"Đặt Lại Tất Cả Cài Đặt"**\n\n**Bước 2 — Xoá dữ liệu Safari:**\nCài Đặt → Safari → kéo xuống chọn **"Xoá Lịch Sử Và Dữ Liệu Web"**\n\n**Bước 3 — Vẫn bị?**\nThử đổi acc khác test. Nếu acc khác không bị → acc cũ bị **ghim** rồi nhé!\n\nNói chung ban mạng này thường do bị **tố** thôi, chơi kín là không gặp kaka 😄',
  },
  {
    keywords: [
      'bypass key roblox','bypass roblox','key roblox','roblox key','bypass key',
      'key delta','delta key','roblox bypass','cách lấy key roblox',
      'key roblox ở đâu','get key roblox','vượt key roblox',
    ],
    answer: '**🎮 Cách Bypass Key Roblox:**\n\nXem hướng dẫn chi tiết tại đây 👉 https://t.me/tumadammod3/4',
  },
  {
    keywords: [
      'zsm','zing speed mobile','setting zsm','lưu ý zsm','hack zsm','chơi zsm',
      'tele zsm','dùng zsm','zsm luu y','zsm setting','thanh kéo zsm',
    ],
    answer: '**🏎️ Lưu ý khi chơi ZSM (Zing Speed Mobile):**\n\n• **Hạn chế dùng Tele** ở rank cao — dễ bị phát hiện và tố.\n• **Không đụng vào 2 thanh kéo** trong menu hack — bật lên rất dễ lộ.\n\nChơi cơ bản, kín là okla nhé kaka 😄',
  },
  {
    keywords: [
      'hi','hello','xin chào','chào','chao','alo','hey','helo','yo','sup',
    ],
    answer: 'Chào bạn! 👋 Mình là **Tumadam Bot**. Mình giúp được về:\n• Cài app iOS\n• Fix lỗi xác minh / văng app\n• Get key free\n• Tránh ban\n• Fix trận ảo\n• Mod file...\n\nBấm gợi ý bên dưới hoặc gõ câu hỏi nhé!',
  },
  {
    keywords: ['cảm ơn','cam on','thanks','thank','oke','okê','tks','ty','ok bạn'],
    answer: 'Không có gì! 😎 Chúc bạn chơi game vui vẻ, nhớ chơi kín nha kaka! Cần gì cứ quay lại hỏi mình 🙌',
  },
];

const BOT_WELCOME  = 'Chào bạn! 👋 Mình là **Tumadam Bot** — trợ lý hỗ trợ tự động.\n\nMình giúp được về cài app, fix lỗi, get key, tránh ban, fix trận ảo... Bấm gợi ý bên dưới hoặc gõ câu hỏi nhé!';
const BOT_FALLBACK = 'Hmm, mình chưa có thông tin chính xác về câu này 🤔\n\nBạn thử hỏi lại bằng từ khoá khác, hoặc chọn chủ đề gợi ý bên dưới. Cần gấp thì nhắn admin **@tumadam2507** nhé!';
const BOT_QUICK = [
  '📲 Cách Cài App', '🔧 Fix lỗi xác minh', '🔑 Get key free', '🚫 Tránh ban',
  '⚠️ Lưu ý hack', '🛠️ Fix trận ảo', '🎯 Setting chơi kín', '📞 Liên hệ admin',
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

  function findAnswer(text) {
    const q = noAccent(text);
    // Tách từ trong câu hỏi để match linh hoạt hơn
    const words = q.split(/\s+/).filter(w => w.length > 1);
    let best = null, bestScore = 0;

    BOT_KNOWLEDGE.forEach(item => {
      let score = 0;
      item.keywords.forEach(kw => {
        const k = noAccent(kw);
        // Khớp chính xác cụm từ → điểm cao nhất
        if (q.includes(k)) {
          score += k.length * 3;
        } else {
          // Khớp từng từ riêng lẻ → điểm thấp hơn
          const kwWords = k.split(/\s+/);
          let wordHits = 0;
          kwWords.forEach(kw2 => {
            if (words.some(w => w.includes(kw2) || kw2.includes(w))) wordHits++;
          });
          if (wordHits > 0) score += wordHits * k.length;
        }
      });
      if (score > bestScore) { bestScore = score; best = item; }
    });
    // Ngưỡng tối thiểu để tránh trả lời linh tinh
    return (best && bestScore >= 3) ? best.answer : BOT_FALLBACK;
  }

  function fmt(text) {
    return text
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
      .replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>')
      .replace(/\n/g,'<br>')
      .replace(/(https?:\/\/[^\s<]+)/g,'<a href="$1" target="_blank" rel="noopener">$1</a>');
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

