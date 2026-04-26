const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const revealItems = document.querySelectorAll(".reveal");
const reviewTrack = document.querySelector(".review-track");
const prevReview = document.querySelector(".prev");
const nextReview = document.querySelector(".next");
const productModalButtons = document.querySelectorAll("[data-product-modal-open]");
const languageButtons = document.querySelectorAll("[data-lang]");
const defaultLanguage = "en";
const translations = {
  en: {
    pageTitle: "KENDI CAFFE - Modern Coffee, Italian Soul",
    "aria.openMenu": "Open menu",
    "aria.closeMenu": "Close menu",
    "aria.call": "Call 070 666 179",
    "aria.prevReview": "Previous review",
    "aria.nextReview": "Next review",
    "aria.contactInfo": "Contact information",
    "aria.closeProduct": "Close product information",
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.story": "Our Story",
    "nav.contact": "Contact",
    "nav.call": "Call 070 666 179",
    "nav.cta": "CONTACT",
    "hero.eyebrow": "Italian soul. Modern craft.",
    "hero.title": "Modern Coffee,<br /><span>Italian Soul.</span>",
    "hero.text": "KENDI CAFFE brings together premium beans and modern craftsmanship to deliver a smooth, rich and perfectly balanced coffee experience.",
    "hero.productsButton": "Explore Products",
    "hero.storyButton": "Discover Our Story",
    "products.eyebrow": "Featured products",
    "products.title": "Our Signature<br />Selections",
    "products.text": "Carefully crafted blends for a modern coffee experience.",
    "products.bestSeller": "Best Seller",
    "products.new": "New",
    "products.beansName": "MODERNO Coffee Beans",
    "products.beansDesc": "Premium blend • Rich & Balanced",
    "products.beansSize": "1kg",
    "products.podsName": "MODERNO Pods",
    "products.podsDesc": "Single Serve • Smooth & Aromatic",
    "products.podsSize": "100 pcs",
    "products.details": "Details",
    "banner.left": "Modern Taste.<br />Timeless Pleasure.",
    "banner.right": "Crafted for those<br />who appreciate<br />quality in every cup.",
    "benefits.premiumTitle": "Premium Blend",
    "benefits.premiumText": "Carefully selected beans for superior quality.",
    "benefits.roastTitle": "Fresh Roast",
    "benefits.roastText": "Roasted to perfection for maximum freshness.",
    "benefits.aromaTitle": "Rich Aroma",
    "benefits.aromaText": "Full-bodied flavor with irresistible aroma.",
    "benefits.brewingTitle": "Easy Brewing",
    "benefits.brewingText": "Designed for modern lifestyles, anywhere.",
    "story.eyebrow": "Our story",
    "story.title": "<span>Family</span><span>tradition,</span><span>Italian espresso</span><span>craft.</span>",
    "story.blockTitle": "Love for Italian espresso",
    "story.blockText": "Quality is the basis of our company philosophy, consolidated by years of hard work and accumulated experience. Quality, sought after and obtained at every level of the production process: from the careful selection of the origin of the coffee, the roasting and exact composition of the blends up to the most innovative packaging systems.",
    "reviews.title": "Loved by Coffee Enthusiasts",
    "reviews.one": "\"MODERNO is my daily ritual. Smooth, rich, and perfectly balanced.\"",
    "reviews.two": "\"The pods are incredibly convenient without compromising on taste.\"",
    "reviews.three": "\"Premium quality you can taste in every single cup.\"",
    "reviews.cityMilan": "Milan, Italy",
    "reviews.cityRome": "Rome, Italy",
    "reviews.cityTurin": "Turin, Italy",
    "footer.tagline": "Dedicated to all Coffee Lovers",
    "footer.contact": "Contact",
    "footer.place": "Macedonia <span class=\"heart\" aria-hidden=\"true\">&hearts;</span> Italy",
    "modal.productDetails": "Product details",
    "modal.beansTitle": "Beans",
    "modal.beansText": "Miscela Speciale Moderno is a 1 kg whole-bean blend from Vietnamese, Indian, Ugandan, and Brazilian coffees, crafted for consistent, aromatic espresso with an intense profile featuring chocolate and caramel notes, hints of cardamom and cinnamon, touches of forest fruit and white flowers, and a creamy chocolate–hazelnut finish.",
    "modal.beansSize": "1 kg whole beans.",
    "modal.podsTitle": "Pods",
    "modal.podsText": "The Special Modern coffee blend is also available in convenient coffee pods, delivering quick, high-quality coffee with carefully selected Vietnamese, Indian, Ugandan, and Brazilian beans that preserve its intensity and aroma, featuring chocolate and caramel notes, hints of cardamom and cinnamon, fruity and floral touches of forest fruits and white flowers, and a creamy chocolate–hazelnut finish."
  },
  sq: {
    pageTitle: "KENDI CAFFE - Kafe moderne, shpirt italian",
    "aria.openMenu": "Hap menunë",
    "aria.closeMenu": "Mbyll menunë",
    "aria.call": "Thirr 070 666 179",
    "aria.prevReview": "Vlerësimi i mëparshëm",
    "aria.nextReview": "Vlerësimi tjetër",
    "aria.contactInfo": "Informacion kontakti",
    "aria.closeProduct": "Mbyll informacionin e produktit",
    "nav.home": "Kryefaqja",
    "nav.products": "Produktet",
    "nav.story": "Historia jonë",
    "nav.contact": "Kontakt",
    "nav.call": "Thirr 070 666 179",
    "nav.cta": "KONTAKT",
    "hero.eyebrow": "Shpirt italian. Mjeshtëri moderne.",
    "hero.title": "Kafe moderne,<br /><span>shpirt italian.</span>",
    "hero.text": "KENDI CAFFE bashkon kokrra premium dhe mjeshtëri moderne për të sjellë një përvojë kafeje të butë, të pasur dhe të balancuar në mënyrë perfekte.",
    "hero.productsButton": "Eksploro produktet",
    "hero.storyButton": "Zbulo historinë tonë",
    "products.eyebrow": "Produkte të veçuara",
    "products.title": "Përzgjedhjet<br />tona speciale",
    "products.text": "Përzierje të krijuara me kujdes për një përvojë moderne kafeje.",
    "products.bestSeller": "Më i shituri",
    "products.new": "E re",
    "products.beansName": "Kokrra kafeje MODERNO",
    "products.beansDesc": "Përzierje premium • E pasur dhe e balancuar",
    "products.beansSize": "1 kg",
    "products.podsName": "Pods MODERNO",
    "products.podsDesc": "Një përdorim • E butë dhe aromatike",
    "products.podsSize": "100 copë",
    "products.details": "Detaje",
    "banner.left": "Shije moderne.<br />Kënaqësi e përjetshme.",
    "banner.right": "Krijuar për ata<br />që vlerësojnë<br />cilësinë në çdo filxhan.",
    "benefits.premiumTitle": "Përzierje premium",
    "benefits.premiumText": "Kokrra të zgjedhura me kujdes për cilësi superiore.",
    "benefits.roastTitle": "Pjekje e freskët",
    "benefits.roastText": "E pjekur në perfeksion për freski maksimale.",
    "benefits.aromaTitle": "Aromë e pasur",
    "benefits.aromaText": "Shije e plotë me aromë të parezistueshme.",
    "benefits.brewingTitle": "Përgatitje e lehtë",
    "benefits.brewingText": "E krijuar për stilin modern të jetesës, kudo.",
    "story.eyebrow": "Historia jonë",
    "story.title": "<span>Traditë</span><span>familjare,</span><span>espresso italiane</span><span>mjeshtëri.</span>",
    "story.blockTitle": "Dashuri për espresson italiane",
    "story.blockText": "Cilësia është baza e filozofisë së kompanisë sonë, e forcuar nga vite pune të përkushtuar dhe përvojë e grumbulluar. Cilësia kërkohet dhe arrihet në çdo nivel të procesit të prodhimit: nga përzgjedhja e kujdesshme e origjinës së kafesë, pjekja dhe përbërja e saktë e përzierjeve, deri te sistemet më inovative të paketimit.",
    "reviews.title": "Të dashura nga adhuruesit e kafesë",
    "reviews.one": "\"MODERNO është rituali im i përditshëm. E butë, e pasur dhe e balancuar në mënyrë perfekte.\"",
    "reviews.two": "\"Podet janë jashtëzakonisht praktike pa kompromis në shije.\"",
    "reviews.three": "\"Cilësi premium që ndihet në çdo filxhan.\"",
    "reviews.cityMilan": "Milano, Itali",
    "reviews.cityRome": "Romë, Itali",
    "reviews.cityTurin": "Torino, Itali",
    "footer.tagline": "Dedikuar të gjithë dashamirësve të kafesë",
    "footer.contact": "Kontakt",
    "footer.place": "Maqedoni <span class=\"heart\" aria-hidden=\"true\">&hearts;</span> Itali",
    "modal.productDetails": "Detajet e produktit",
    "modal.beansTitle": "Kokrra",
    "modal.beansText": "Miscela Speciale Moderno është një përzierje 1 kg me kokrra kafeje nga kafe vietnameze, indiane, ugandase dhe braziliane, e krijuar për espresso të qëndrueshme dhe aromatike me një profil intensiv me nota çokollate dhe karamele, nuanca kardamomi dhe kanelle, prekje frutash pylli dhe lulesh të bardha, dhe një fund kremoz çokollatë–lajthi.",
    "modal.beansSize": "1 kg kokrra kafeje.",
    "modal.podsTitle": "Pods",
    "modal.podsText": "Përzierja Special Modern është e disponueshme edhe në pode praktike kafeje, duke ofruar kafe të shpejtë dhe me cilësi të lartë me kokrra të zgjedhura me kujdes nga Vietnami, India, Uganda dhe Brazili, që ruajnë intensitetin dhe aromën e saj, me nota çokollate dhe karamele, nuanca kardamomi dhe kanelle, prekje frutash pylli dhe lulesh të bardha, dhe një fund kremoz çokollatë–lajthi."
  },
  mk: {
    pageTitle: "KENDI CAFFE - Модерно кафе, италијанска душа",
    "aria.openMenu": "Отвори мени",
    "aria.closeMenu": "Затвори мени",
    "aria.call": "Јави се 070 666 179",
    "aria.prevReview": "Претходна рецензија",
    "aria.nextReview": "Следна рецензија",
    "aria.contactInfo": "Контакт информации",
    "aria.closeProduct": "Затвори информации за производот",
    "nav.home": "Почетна",
    "nav.products": "Производи",
    "nav.story": "Нашата приказна",
    "nav.contact": "Контакт",
    "nav.call": "Јави се 070 666 179",
    "nav.cta": "КОНТАКТ",
    "hero.eyebrow": "Италијанска душа. Модерен занает.",
    "hero.title": "Модерно кафе,<br /><span>италијанска душа.</span>",
    "hero.text": "KENDI CAFFE ги спојува премиум зрната и модерната изработка за да испорача мазно, богато и совршено балансирано кафе искуство.",
    "hero.productsButton": "Истражи производи",
    "hero.storyButton": "Откриј ја нашата приказна",
    "products.eyebrow": "Избрани производи",
    "products.title": "Наши<br />специјални избори",
    "products.text": "Внимателно создадени мешавини за модерно кафе искуство.",
    "products.bestSeller": "Најпродавано",
    "products.new": "Ново",
    "products.beansName": "MODERNO кафе во зрно",
    "products.beansDesc": "Премиум мешавина • Богата и балансирана",
    "products.beansSize": "1 кг",
    "products.podsName": "MODERNO капсули",
    "products.podsDesc": "Една доза • Мазно и ароматично",
    "products.podsSize": "100 парчиња",
    "products.details": "Детали",
    "banner.left": "Модерен вкус.<br />Безвременско задоволство.",
    "banner.right": "Создадено за оние<br />што го ценат<br />квалитетот во секоја шолја.",
    "benefits.premiumTitle": "Премиум мешавина",
    "benefits.premiumText": "Внимателно избрани зрна за врвен квалитет.",
    "benefits.roastTitle": "Свежо печење",
    "benefits.roastText": "Совршено печени за максимална свежина.",
    "benefits.aromaTitle": "Богата арома",
    "benefits.aromaText": "Полн вкус со неодолива арома.",
    "benefits.brewingTitle": "Лесна подготовка",
    "benefits.brewingText": "Создадено за модерен начин на живот, насекаде.",
    "story.eyebrow": "Нашата приказна",
    "story.title": "<span>Семејна</span><span>традиција,</span><span>италијанско еспресо</span><span>мајсторство.</span>",
    "story.blockTitle": "Љубов кон италијанското еспресо",
    "story.blockText": "Квалитетот е основата на филозофијата на нашата компанија, зацврстена со години посветена работа и стекнато искуство. Тој се бара и се постигнува на секое ниво од производниот процес: од внимателниот избор на потеклото на кафето, печењето и точниот состав на мешавините, до најиновативните системи за пакување.",
    "reviews.title": "Омилено кај љубителите на кафе",
    "reviews.one": "\"MODERNO е мојот секојдневен ритуал. Мазно, богато и совршено балансирано.\"",
    "reviews.two": "\"Капсулите се исклучително практични без компромис во вкусот.\"",
    "reviews.three": "\"Премиум квалитет што се чувствува во секоја шолја.\"",
    "reviews.cityMilan": "Милано, Италија",
    "reviews.cityRome": "Рим, Италија",
    "reviews.cityTurin": "Торино, Италија",
    "footer.tagline": "Посветено на сите љубители на кафе",
    "footer.contact": "Контакт",
    "footer.place": "Македонија <span class=\"heart\" aria-hidden=\"true\">&hearts;</span> Италија",
    "modal.productDetails": "Детали за производот",
    "modal.beansTitle": "Зрна",
    "modal.beansText": "Miscela Speciale Moderno е мешавина од 1 кг кафе во зрно од виетнамски, индиски, угандски и бразилски кафиња, создадена за конзистентно, ароматично еспресо со интензивен профил со ноти на чоколадо и карамела, нијанси на кардамом и цимет, допири на шумско овошје и бели цветови, и кремаста чоколадно–лешникова завршница.",
    "modal.beansSize": "1 кг кафе во зрно.",
    "modal.podsTitle": "Капсули",
    "modal.podsText": "Мешавината Special Modern е достапна и во практични кафе капсули, нудејќи брзо, висококвалитетно кафе со внимателно избрани виетнамски, индиски, угандски и бразилски зрна што го зачувуваат нејзиниот интензитет и арома, со ноти на чоколадо и карамела, нијанси на кардамом и цимет, овошни и цветни допири на шумско овошје и бели цветови, и кремаста чоколадно–лешникова завршница."
  }
};

function getSavedLanguage() {
  try {
    return localStorage.getItem("kendi-language");
  } catch {
    return null;
  }
}

function saveLanguage(language) {
  try {
    localStorage.setItem("kendi-language", language);
  } catch {
    // Ignore storage failures; language switching still works for the session.
  }
}

function translate(language, key) {
  return translations[language]?.[key] ?? translations[defaultLanguage][key] ?? "";
}

let currentLanguage = translations[getSavedLanguage()] ? getSavedLanguage() : defaultLanguage;

function setEyebrowText(element, value) {
  const marker = element.querySelector("span") || document.createElement("span");
  element.replaceChildren(marker, document.createTextNode(` ${value}`));
}

function applyLanguage(language, shouldSave = true) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = translate(language, "pageTitle");

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translate(language, element.dataset.i18n);
    if (element.classList.contains("eyebrow")) {
      setEyebrowText(element, value);
      return;
    }

    element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    element.innerHTML = translate(language, element.dataset.i18nHtml);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key =
      element === menuToggle && element.getAttribute("aria-expanded") === "true"
        ? "aria.closeMenu"
        : element.dataset.i18nAria;

    element.setAttribute("aria-label", translate(language, key));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (shouldSave) {
    saveLanguage(language);
  }
}

document.body.classList.add("js-ready");
applyLanguage(currentLanguage, false);

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", translate(currentLanguage, isOpen ? "aria.closeMenu" : "aria.openMenu"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", translate(currentLanguage, "aria.openMenu"));
    });
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
  window.setTimeout(() => {
    revealItems.forEach((item) => item.classList.add("in-view"));
  }, 900);
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}

function scrollReviews(direction) {
  if (!reviewTrack) return;

  const card = reviewTrack.querySelector(".review-card");
  const amount = card ? card.getBoundingClientRect().width + 18 : 260;
  reviewTrack.scrollBy({ left: amount * direction, behavior: "smooth" });
}

if (prevReview && nextReview) {
  prevReview.addEventListener("click", () => scrollReviews(-1));
  nextReview.addEventListener("click", () => scrollReviews(1));
}

productModalButtons.forEach((button) => {
  const modal = document.getElementById(button.dataset.productModalOpen);
  if (!modal) return;

  const closeButton = modal.querySelector("[data-modal-close]");

  function openModal() {
    if (typeof modal.showModal === "function") {
      modal.showModal();
    } else {
      modal.setAttribute("open", "");
    }

    document.body.classList.add("modal-open");
    closeButton?.focus();
  }

  function closeModal() {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
      document.body.classList.remove("modal-open");
      button.focus();
    }
  }

  button.addEventListener("click", openModal);
  closeButton?.addEventListener("click", closeModal);

  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    button.focus();
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
