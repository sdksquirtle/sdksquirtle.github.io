/**
 * WAYNE OS // ARCHITECTURE INTERFACE MATRIX COMMAND SCRIPT V4
 * CENTRAL CORE PROCESSING AUTOMATION SYSTEM
 */

// Dual Language Master Lexicon Object Matrix 
const dictionary = {
    en: {
        decryption: "DECRYPTION LANGUAGE",
        vision: "HUD VISION MATRIX",
        navProfile: "OPERATIVE PROFILE",
        navArmory: "SUIT ARMORY",
        navWeapons: "WEAPONS ARSENAL",
        uplink: "encrypted uplink: active",
        hdrMain: "BAT-COMPUTER // <span>OPERATIVE_REGISTRY</span>",
        searchPlaceholder: "FILTER NETWORK DATABANKS...",
        hdrProfileSec: "SECURE PROFILE FILE",
        devTitle: "Full Stack Developer",
        lblLoc: "Location:",
        valLoc: "Srinagar, India",
        lblStat: "Status:",
        valStat: "Active Agent",
        lblClr: "Clearance:",
        hdrSkills: "Core Language Frameworks",
        hdrArmorySec: "WAYNE ARMORY // BAV-SUIT CONFIGURATIONS",
        hdrWeaponsSec: "TACTICAL ARSENAL // ADVANCED ENGAGEMENT GEAR",
        noRecords: "⚠️ Alert: Item or Operative completely filtered out of active radar.",
        modalClose: "Acknowledge",
        
        // Modal Target Strings
        profile_h: "DECRYPTED DOSSIER // RACHIT KAUL",
        profile_d: "CLASSIFIED DOSSIER: Full Stack Operative specialized in architectural infrastructure engineering. Operating from tactical bases in Srinagar, India. Authorized level alpha access for global Wayne Enterprise overhauls.",
        suit1_h: "ARMORY: ARKHAM TACTICAL KEVLAR",
        suit1_d: "Optimized combat configuration. Reinforced triple-weave Kevlar composite design offering maximum kinetic damage resistance while retaining fluid flexibility during target engagements.",
        suit2_h: "ARMORY: EXO-FRAME POWER SUIT",
        suit2_d: "Heavy planetary combat configuration. Built with an internal synthetic muscle engine powered by a localized micro-reactor to safely engage super-powered threats.",
        suit3_h: "ARMORY: BEYOND STEALTH DISPLACEMENT SUIT",
        suit3_d: "Infiltration layout. Integrates light-bending refraction circuitry for absolute physical concealment alongside enhanced digital jamming protocols."
    },
    ja: {
        decryption: "暗号復号化言語設定",
        vision: "HUD視覚分析マトリクス",
        navProfile: "工作員プロフィール",
        navArmory: "装甲兵器格納庫",
        navWeapons: "戦術装備アーセナル",
        uplink: "暗号化アップリンク: 接続中",
        hdrMain: "バットコンピュータ // <span>工作員登録簿</span>",
        searchPlaceholder: "データバンクを検索...",
        hdrProfileSec: "機密プロファイルファイル",
        devTitle: "フルスタックデベロッパー",
        lblLoc: "活動拠点:",
        valLoc: "インド共和国 スリナガル",
        lblStat: "状況状態:",
        valStat: "現役エージェント",
        lblClr: "セキュリティ権限:",
        hdrSkills: "主要開発言語フレームワーク",
        hdrArmorySec: "ウェイン兵器廠 // バットスーツ構成一覧",
        hdrWeaponsSec: "戦術アーセナル // 高度交戦装備一覧",
        noRecords: "⚠️ 警告: 該当するアイテムまたは工作員は、アクティブレーダーから完全に除外されています。",
        modalClose: "了解",
        
        // Modal Target Strings
        profile_h: "復号完了文書 // ラチット・コール",
        profile_d: "極秘公文書: システムアーキテクチャおよびインフラ構築を専門とするフルスタック工作員。インドのスリナガル秘密作戦基地より展開中。ウェイン・エンタープライズの広範な基幹システム大規模改修権限を保有。",
        suit1_h: "格納庫: アーカムタクティカルケブラー",
        suit1_d: "最適化された近接戦闘構成。トリプルウィーブケブラー合成複合設計により、標的交戦中の柔軟な機動性を維持しながら最大の動的ダメージ耐性を発揮する。",
        suit2_h: "格納庫: エクゾフレームパワードスーツ",
        suit2_d: "重惑星戦闘用構成。超人的な脅威に安全に対抗するため、局所的なマイクロリアクターによって駆動する人工合成筋肉エンジンを内蔵している。",
        suit3_h: "格納庫: ビヨンドステルス光学迷彩スーツ",
        suit3_d: "潜入専用レイアウト。絶対的な物理的隠蔽のための光屈折回路を統合し、高度なデジタルジャミングプロトコルを同時に展開する。"
    }
};

// Global Tracking Registry States
let activeLanguage = 'en';

/**
 * PIPELINE MODULE 1: LOCALIZATION COMPILER ENGINE
 */
function setLanguage(lang) {
    activeLanguage = lang;
    const lexicon = dictionary[lang];

    // Sidebar & Control Panel Text Maps
    document.getElementById("lbl-decryption").innerText = lexicon.decryption;
    document.getElementById("lbl-vision").innerText = lexicon.vision;
    document.getElementById("nav-profile").innerText = lexicon.navProfile;
    document.getElementById("nav-armory").innerText = lexicon.navArmory;
    document.getElementById("nav-weapons").innerText = lexicon.navWeapons;
    document.getElementById("lbl-uplink").innerHTML = `<span class="status-pulse"></span> ${lexicon.uplink}`;

    // Main Layout Title Maps
    document.getElementById("hdr-main").innerHTML = lexicon.hdrMain;
    document.getElementById("search").placeholder = lexicon.searchPlaceholder;
    document.getElementById("hdr-profile-sec").innerText = lexicon.hdrProfileSec;
    document.getElementById("hdr-armory-sec").innerText = lexicon.hdrArmorySec;
    document.getElementById("hdr-weapons-sec").innerText = lexicon.hdrWeaponsSec;

    // Operative Specific Profile HUD Maps
    document.getElementById("txt-title").innerText = lexicon.devTitle;
    document.getElementById("lbl-loc").innerText = lexicon.lblLoc;
    document.getElementById("val-loc").innerText = lexicon.valLoc;
    document.getElementById("lbl-stat").innerText = lexicon.lblStat;
    document.getElementById("val-stat").innerText = lexicon.valStat;
    document.getElementById("lbl-clr").innerText = lexicon.lblClr;
    document.getElementById("hdr-skills").innerText = lexicon.hdrSkills;
    
    // Core Messaging Fallbacks
    document.getElementById("no-records").innerText = lexicon.noRecords;
    document.getElementById("btn-modal-close").innerText = lexicon.modalClose;

    // Synchronize UI active button styles
    document.getElementById("btn-en").classList.toggle("active", lang === 'en');
    document.getElementById("btn-ja").classList.toggle("active", lang === 'ja');
}

/**
 * PIPELINE MODULE 2: VISION HULL SYSTEM SHIFTER (DAY / NIGHT / SONAR)
 */
function setVisionMode(mode) {
    const body = document.body;
    
    // Purge active styling variants
    body.classList.remove("vision-night", "vision-day", "vision-sonar");
    document.getElementById("btn-night").classList.remove("active");
    document.getElementById("btn-day").classList.remove("active");
    document.getElementById("btn-sonar").classList.remove("active");

    // Map targeted variable injection
    if (mode === 'day') {
        body.classList.add("vision-day");
        document.getElementById("btn-day").classList.add("active");
    } else if (mode === 'sonar') {
        body.classList.add("vision-sonar");
        document.getElementById("btn-sonar").classList.add("active");
    } else {
        body.classList.add("vision-night");
        document.getElementById("btn-night").classList.add("active");
    }
}

/**
 * PIPELINE MODULE 3: ARMORY SUIT MATRICES AND TARGET GUN LOGS
 */
function equipSuit(suitType) {
    const profileCard = document.getElementById("profile-card");
    
    // Discard active architectural modifiers
    profileCard.classList.remove("suit-arkham", "suit-beyond", "suit-hellbat");
    
    // Append targeted CSS configuration class token
    profileCard.classList.add(`suit-${suitType}`);
}

function toggleArsenal(isLethal) {
    const profileCard = document.getElementById("profile-card");
    const btnLethal = document.getElementById("btn-lethal");
    const btnNonLethal = document.getElementById("btn-nonlethal");

    if (isLethal) {
        profileCard.classList.add("weapon-active");
        btnLethal.classList.add("active");
        btnNonLethal.classList.remove("active");
    } else {
        profileCard.classList.remove("weapon-active");
        btnNonLethal.classList.add("active");
        btnLethal.classList.remove("active");
    }
}

/**
 * PIPELINE MODULE 4: DYNAMIC MULTI-RAIL FILTERING RADAR ENGINE
 */
function initializeRadarSearch() {
    const searchInput = document.getElementById("search");
    
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().trim();
        let totalRecordsFound = 0;

        // Search through all category segments (.hud-section)
        document.querySelectorAll(".hud-section").forEach(section => {
            let sectionMatches = 0;
            const items = section.querySelectorAll(".bat-card");

            items.forEach(item => {
                const itemContent = item.innerText.toLowerCase();
                if (itemContent.includes(query)) {
                    item.style.display = "block";
                    sectionMatches++;
                    totalRecordsFound++;
                } else {
                    item.style.display = "none";
                }
            });

            // Discard complete rail view structure if empty under query conditions
            if (query !== "" && sectionMatches === 0) {
                section.style.display = "none";
            } else {
                section.style.display = "block";
            }
        });

        // Toggle error alert display framework
        const errorBlock = document.getElementById("no-records");
        if (totalRecordsFound === 0) {
            errorBlock.classList.remove("hidden");
        } else {
            errorBlock.classList.add("hidden");
        }
    });
}

/**
 * PIPELINE MODULE 5: SECURE OVERLAY TERMINAL MANAGER (MODALS)
 */
function openTerminal(lookupKey) {
    const modal = document.getElementById("system-modal");
    const lexicon = dictionary[activeLanguage];

    let heading = lexicon.profile_h;
    let description = lexicon.profile_d;

    // Contextual lookup map switcher
    if (lookupKey === 'suit1') { heading = lexicon.suit1_h; description = lexicon.suit1_d; }
    else if (lookupKey === 'suit2') { heading = lexicon.suit2_h; description = lexicon.suit2_d; }
    else if (lookupKey === 'suit3') { heading = lexicon.suit3_h; description = lexicon.suit3_d; }

    document.getElementById("t-name").innerHTML = heading;
    document.getElementById("t-desc").innerText = description;

    modal.classList.add("open");
    document.body.style.overflow = "hidden"; // Retain scroll baseline positioning
}

function closeTerminal() {
    const modal = document.getElementById("system-modal");
    modal.classList.remove("open");
document.body.style.overflow = ""; // Reactivate core view panning

/** ENGINE SEQUENCER TRIGGER: MAP BINDINGS ON LAUNCH */
window.addEventListener("DOMContentLoaded", () => {
  // 1. Fire Default Language Initialization Pipeline
  setLanguage('en');

  // 2. Fire Default Night Vision Sub-system Layers
  setVisionMode('night');

  // 3. Mount Radar Tracking Event Listeners
  initializeRadarSearch();

  // 4. Modal Backdrop Safety Boundaries Closure Event Links
  const modalContainer = document.getElementById("system-modal");
  if (modalContainer) {
    modalContainer.addEventListener("click", (e) => {
      if (e.target.id === "system-modal") closeTerminal();
    });
  }

  // 5. Global Interface Escape Hotkey Intercept Binding
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeTerminal();
  });
});
