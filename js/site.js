const pages = {
  homes: [
    ["index.html", "خانه یک", "home"],
    ["home-2.html", "خانه دو", "home2"],
    ["home-3.html", "خانه سه", "home3"]
  ],
  other: [
    ["pricing.html", "قیمت‌گذاری یک", "pricing"],
    ["pricing-2.html", "قیمت‌گذاری دو", "pricing2"],
    ["pricing-3.html", "قیمت‌گذاری سه", "pricing3"],
    ["signup.html", "ثبت‌نام یک", "signup"],
    ["signup-2.html", "ثبت‌نام دو", "signup2"],
    ["signup-3.html", "ثبت‌نام سه", "signup3"],
    ["blog.html", "وبلاگ", "blog"],
    ["integrations.html", "یکپارچه‌سازی‌ها", "integrations"],
    ["docs.html", "مستندات", "docs"],
    ["help.html", "مرکز راهنما", "help"],
    ["about.html", "درباره ما", "about"],
    ["contact.html", "تماس", "contact"]
  ],
  util: [
    ["licensing.html", "مجوز", "licensing"],
    ["styleguide.html", "راهنمای ظاهر", "style"],
    ["changelog.html", "تغییرات", "changelog"],
    ["start.html", "شروع", "start"]
  ]
};

const posts = [
  { id: "7-things", title: "۷ نکته که باید درباره طراحی وب بدانید", author: "آنا اسمیت", cat: "طراحی", excerpt: "راهنمایی برای سلسله‌مراتب، حروف و تصمیم‌های آرامی که یک محصول رمزارزی را طبیعی نشان می‌دهد." },
  { id: "beautiful-design", title: "۷ نمونه از زیباترین طراحی‌ها", author: "جیانا دی", cat: "طراحی", excerpt: "رابط‌هایی شبیه آسمان شب: رنگ محدود، فضای زیاد و فقط یک اقدام روشن." },
  { id: "principles", title: "۵ اصل طراحی وب مؤثر", author: "آنا اسمیت", cat: "طراحی", excerpt: "وضوح، تضاد، ریتم، اعتماد و سرعت؛ پنج مداری که هر صفحه باید رعایت کند." },
  { id: "usability", title: "۷ راه برای بهبود کاربردپذیری و دسترس‌پذیری", author: "لئو پارک", cat: "توسعه", excerpt: "مسیر صفحه‌کلید، کنتراست و برچسب‌هایی که جریان استیکینگ را برای همه قابل استفاده می‌کند." },
  { id: "tools", title: "۷ ابزار ضروری برای طراحان وب", author: "جیانا دی", cat: "طراحی", excerpt: "مجموعه کوچکی که واقعاً باز می‌کنیم: حروف، حرکت، توکن‌ها و عادت سخت‌گیرانه به اسکرین‌شات." },
  { id: "blogs", title: "۵ وبلاگ طراحی وب که باید بخوانید", author: "مینا کول", cat: "بازاریابی", excerpt: "جایی که گفتگوی حرفه وقتی خط زمان شلوغ می‌شود ادامه پیدا می‌کند." },
  { id: "designers", title: "طراحانی که وب را تغییر دادند", author: "لئو پارک", cat: "طراحی", excerpt: "یادی کوتاه از کسانی که نرم‌افزار را کمتر شبیه ماشین کردند." },
  { id: "future", title: "وب‌سایت صد سال دیگر چه شکلی است؟", author: "مینا کول", cat: "بازاریابی", excerpt: "کیف‌پول‌ها، عامل‌ها و صفحه‌هایی که خودشان دور یک قصد جمع می‌شوند." },
  { id: "myths", title: "۲۰ افسانه درباره طراحی وب", author: "آنا اسمیت", cat: "توسعه", excerpt: "حالت تاریک برند نیست. بخش بیشتر یعنی اعتماد بیشتر نیست. و رمزارز به آشفتگی نیاز ندارد." },
  { id: "advice", title: "بدترین توصیه‌هایی که درباره طراحی وب شنیده‌ایم", author: "جیانا دی", cat: "بازاریابی", excerpt: "گرادیان را بعداً منتشر کنید. حرف اصلی را در خط اول بگویید. داشبورد را دست‌نخورده بگذارید." }
];

function linkList(items, current) {
  return items.map(([href, label, id]) =>
    `<a href="${href}" class="${id === current ? "active" : ""}">${label}</a>`
  ).join("");
}

function header(current) {
  return `
  <div class="notice"><div class="notice-pill"><span class="badge">جدید</span><span>کالای تازه رسید! <a href="blog.html">بیشتر بدانید</a></span></div></div>
  <header class="header">
    <div class="wrap header-inner">
      <a class="logo" href="index.html"><span class="mark"><i></i><i></i><i></i><i></i></span> کاسموس</a>
      <nav class="nav" id="nav">
        <div class="drop" id="drop">
          <button class="drop-btn" type="button" aria-expanded="false">صفحه‌ها <i class="chev"></i></button>
          <div class="menu">
            <h6>صفحه‌های اصلی</h6>
            ${linkList(pages.homes, current)}
            <h6 class="second">صفحه‌های دیگر</h6>
            ${linkList(pages.other, current)}
          </div>
        </div>
        <a href="pricing-3.html">قیمت‌گذاری</a>
        <a href="blog.html">وبلاگ</a>
        <a href="contact.html">تماس</a>
      </nav>
      <div class="header-cta" style="display:flex;gap:8px;align-items:center;justify-self:end;">
        <button class="menu-toggle" id="menuToggle" aria-label="باز کردن منو">☰</button>
        <a class="btn btn-ghost" href="signup.html">شروع کنید</a>
      </div>
    </div>
  </header>`;
}

function footer() {
  const cols = [
    ["چندچینش", [...pages.homes, ...pages.other.slice(0, 6)]],
    ["صفحه‌های دیگر", pages.other.slice(6)],
    ["بیشتر", pages.util]
  ];
  return `
  <footer class="footer">
    <div class="wrap">
      <div class="foot-cta">
        <p class="eyebrow">همین حالا ثبت‌نام کنید</p>
        <h2>ردپای دیجیتال خود را با <span class="grad">کاسموس</span> متحول کنید.</h2>
        <p class="sub" style="margin-inline-start:0">وارد دنیایی شوید که فناوری دقیقاً گرد نیازهای شما می‌چرخد.</p>
        <div class="actions" style="justify-content:flex-start">
          <a class="btn btn-white" href="signup.html">شروع کنید</a>
          <a class="btn btn-ghost" href="pricing.html">مشاهده قیمت‌ها</a>
        </div>
      </div>
      <div class="foot-grid">
        <div>
          <a class="logo" href="index.html"><span class="mark"><i></i><i></i><i></i><i></i></span> کاسموس</a>
          <p>مجموعه‌ای از کیف‌پول، استیکینگ و بینش‌ها؛ ساخته‌شده تا نزدیک همان چیزی بماند که نگه می‌دارید.</p>
        </div>
        ${cols.map(([title, items]) => `<div><h6>${title}</h6>${linkList(items, "")}</div>`).join("")}
      </div>
      <div class="legal"><span>© ${new Date().getFullYear()} کاسموس. همه حقوق محفوظ است.</span><span>hello@cosmos.co</span></div>
    </div>
  </footer>`;
}

function faces() {
  return `<div class="faces"><span class="face">🧑</span><span class="face">👩</span><span class="face plus">+</span></div>`;
}

function trustBlock() {
  return `<div class="trust">${faces()}
    <p>مورد اعتماد بیش از <strong>۱۵۰۰ کاربر</strong></p>
    <div class="scribble">و خیلی‌های دیگر
      <svg width="54" height="28" viewBox="0 0 54 28" fill="none"><path d="M48 6c-8 2-16 10-22 14" stroke="white" stroke-width="1.2"/><path d="M8 20c6-2 10-8 12-12" stroke="white" stroke-width="1.2"/></svg>
    </div>
  </div>`;
}

function initBlog() {
  const grid = document.getElementById("grid");
  const featured = document.getElementById("featured");
  if (!grid || !featured) return;
  const arts = ["", "alt", "mint"];
  const card = (p, i, feature) => {
    const art = arts[i % arts.length];
    return `<a class="${feature ? "blog-feature" : "post-card"}" href="post.html?id=${p.id}">
      <div class="art ${feature ? "" : "sm"} ${art}"></div>
      <div class="pad">
        ${feature ? '<span class="eyebrow">ویژه</span>' : ""}
        <h3>${p.title}</h3>
        <div class="meta"><span>${p.author}</span><span>نویسنده</span><span>${p.cat}</span></div>
      </div></a>`;
  };
  let cat = new URLSearchParams(location.search).get("cat") || "همه";
  const names = { design: "طراحی", development: "توسعه", marketing: "بازاریابی", همه: "همه" };
  if (names[cat]) cat = names[cat];
  const render = () => {
    const list = posts.filter(p => cat === "همه" || p.cat === cat);
    const shown = list.length ? list : posts;
    featured.innerHTML = card(shown[0], 0, true);
    grid.innerHTML = shown.slice(1).map((p, i) => card(p, i + 1)).join("");
    document.querySelectorAll("#filters .chip").forEach(c => c.classList.toggle("on", c.dataset.cat === cat));
  };
  document.getElementById("filters")?.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    cat = b.dataset.cat;
    render();
  });
  render();
}

function initPost() {
  const article = document.getElementById("article");
  if (!article) return;
  const id = new URLSearchParams(location.search).get("id");
  const p = posts.find(x => x.id === id) || posts[0];
  document.title = "کاسموس — " + p.title;
  article.innerHTML = `
    <a href="blog.html" class="muted">اخبار و بینش‌ها ←</a>
    <div class="meta" style="margin-top:16px"><span class="eyebrow">${p.cat}</span><span>${p.author}</span></div>
    <h1>${p.title}</h1>
    <div class="art" style="border-radius:20px;margin:12px 0 22px"></div>
    <p>${p.excerpt}</p>
    <p>کاسموس با صفحه محصول مثل آسمان شب رفتار می‌کند: چند نقطه روشن، سکوت زیاد و مسیری که بدون نقشه هم پیدا می‌شود. کار اصلی اضافه کردن بخش نیست؛ تصمیم این است که کدام بخش حق ماندن در مدار را دارد.</p>
    <h3>از کار کاربر شروع کنید</h3>
    <p>دارنده دارایی با یک موجودی، یک سؤال و حوصله کم می‌آید. صفحه اول باید موجودی، اقدام بعدی و ریسک را در یک نفس بگوید. بقیه می‌تواند برای اسکرول بعدی بماند.</p>
    <h3>سیستم را کوچک نگه دارید</h3>
    <p>یک بنفش، یک سفید، یک زمینه تیره. حروفی که از فاصله دست خوانده شود. کارت‌هایی با یک حاشیه، یک گوشه و یک دلیل برای بودن. وقتی سیستم کوچک باشد، صفحه‌های تازه حس را به ارث می‌برند، نه اینکه از نو اختراعش کنند.</p>
    <p>اگر کیف‌پول، استخر یا مرکز راهنما می‌سازید، همان سرصفحه، همان پاصفحه و همان قول را تکرار کنید: فناوری‌ای که گرد شخص استفاده‌کننده می‌چرخد.</p>
    <a class="btn btn-white" href="signup.html">شروع کنید</a>`;
}

function initPricing() {
  const bill = document.getElementById("bill");
  if (!bill) return;
  const rates = { month: ["۱۹$", "۳۹$", "/ در ماه"], year: ["۱۵$", "۳۲$", "/ در ماه، پرداخت سالانه"] };
  bill.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    bill.querySelectorAll("button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    const r = rates[b.dataset.bill];
    document.getElementById("p1").textContent = r[0];
    document.getElementById("p2").textContent = r[1];
    document.getElementById("s1").textContent = r[2];
    document.getElementById("s2").textContent = r[2];
  });
}

function initAuth() {
  const mode = document.getElementById("mode");
  if (!mode) return;
  mode.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    mode.querySelectorAll("button").forEach(x => x.classList.remove("on"));
    b.classList.add("on");
    const up = b.dataset.mode === "up";
    document.getElementById("nameField").style.display = up ? "block" : "none";
    document.getElementById("submitLabel").textContent = up ? "ثبت‌نام" : "ورود";
  });
}

function initDocs() {
  const links = [...document.querySelectorAll("#docnav a")];
  links.forEach(a => a.addEventListener("click", () => {
    links.forEach(x => x.classList.remove("on"));
    a.classList.add("on");
  }));
}

function mount() {
  const current = document.body.dataset.page || "";
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.innerHTML = header(current);
  if (f) f.innerHTML = footer();
  const drop = document.getElementById("drop");
  const btn = drop?.querySelector(".drop-btn");
  btn?.addEventListener("click", (e) => {
    e.stopPropagation();
    drop.classList.toggle("open");
    btn.setAttribute("aria-expanded", drop.classList.contains("open"));
  });
  document.addEventListener("click", () => drop?.classList.remove("open"));
  document.getElementById("menuToggle")?.addEventListener("click", () => {
    document.getElementById("nav")?.classList.toggle("open");
  });
  document.querySelectorAll("form[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const ok = form.querySelector(".ok");
      if (ok) ok.classList.add("show");
      form.reset();
    });
  });
  initBlog();
  initPost();
  initPricing();
  initAuth();
  initDocs();
}

window.COSMOS = { posts, faces, trustBlock, mount };
document.addEventListener("DOMContentLoaded", mount);
