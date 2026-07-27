import "./style.css";

/* ============================================================
   1. 화면 전환 (상단 메뉴 → 뷰 패널)
   ============================================================ */
const viewPanels = document.querySelectorAll("[data-view-panel]");
const navTriggers = document.querySelectorAll("[data-nav]");
const VALID_VIEWS = ["home", "about", "competencies", "record"];

const switchView = (viewId) => {
  if (!VALID_VIEWS.includes(viewId)) viewId = "home";

  viewPanels.forEach((panel) => {
    const isActive = panel.getAttribute("data-view-panel") === viewId;
    panel.classList.toggle("hidden", !isActive);
  });

  navTriggers.forEach((el) => {
    if (!el.classList.contains("nav-link")) return;
    const isActive = el.getAttribute("data-nav") === viewId;
    el.classList.toggle("nav-link--active", isActive);
    el.setAttribute("aria-current", isActive ? "page" : "false");
  });

  window.scrollTo({ top: 0, behavior: "instant" });
  history.replaceState(
    null,
    "",
    viewId === "home" ? window.location.pathname : `#${viewId}`
  );
};

navTriggers.forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    switchView(el.getAttribute("data-nav"));
  });
});

const initViewFromHash = () => {
  const hash = window.location.hash.replace("#", "");
  switchView(VALID_VIEWS.includes(hash) ? hash : "home");
};

initViewFromHash();
window.addEventListener("hashchange", initViewFromHash);

/* ============================================================
   2. 모바일 GNB 토글
   ============================================================ */
const menuBtn = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");

if (menuBtn && mobileMenu) {
  const toggleMenu = (open) => {
    mobileMenu.classList.toggle("hidden", !open);
    menuBtn.setAttribute("aria-expanded", String(open));
  };

  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.contains("hidden");
    toggleMenu(isHidden);
  });

  mobileMenu.querySelectorAll("[data-nav]").forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false));
  });
}

/* ============================================================
   3. 수행 실적 탭 (교육 / 공공 / 기술개발)
   ============================================================ */
const tabButtons = document.querySelectorAll("[data-tab]");
const tabPanels = document.querySelectorAll("[data-panel]");

tabButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-tab");

    tabButtons.forEach((b) =>
      b.setAttribute("aria-selected", String(b === btn))
    );

    tabPanels.forEach((panel) => {
      panel.classList.toggle(
        "hidden",
        panel.getAttribute("data-panel") !== target
      );
    });
  });
});

/* ============================================================
   4. 헤더 스크롤 시 테두리 강조
   ============================================================ */
const header = document.querySelector("[data-header]");
if (header) {
  const onScroll = () => {
    header.classList.toggle("border-white/10", true);
  };
  onScroll();
}

/* ============================================================
   5. 푸터 연도 자동 갱신
   ============================================================ */
const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
