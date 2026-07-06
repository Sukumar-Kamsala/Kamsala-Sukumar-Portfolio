/* ============================================================
   KAMSALA SUKUMAR — PORTFOLIO
   main.js — icon system, loader, smooth scroll, cursor, 3D hero,
   scroll-reveal animations, counters, theme toggle, contact form.
   ============================================================ */
(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = window.matchMedia("(hover: none)").matches || window.innerWidth < 900;

  /* ---------------- Inline icon set (original minimal line icons) ---------------- */
  const ICONS = {
    sun: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
    moon: '<svg viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/></svg>',
    "arrow-right": '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    "arrow-up": '<svg viewBox="0 0 24 24"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
    download: '<svg viewBox="0 0 24 24"><path d="M12 3v12M7 10l5 5 5-5M4 20h16"/></svg>',
    "check-circle": '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8.5 12.5l2.3 2.3L16 10"/></svg>',
    code: '<svg viewBox="0 0 24 24"><path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6.5l-3 11"/></svg>',
    database: '<svg viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="7.5" ry="3"/><path d="M4.5 5.5v13c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3v-13"/><path d="M4.5 12c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3"/></svg>',
    "bar-chart": '<svg viewBox="0 0 24 24"><path d="M5 20V10M12 20V4M19 20v-7"/></svg>',
    filter: '<svg viewBox="0 0 24 24"><path d="M4 5h16l-6.5 8v5l-3 1.5v-6.5Z"/></svg>',
    grid: '<svg viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="7" height="7" rx="1"/><rect x="13.5" y="3.5" width="7" height="7" rx="1"/><rect x="3.5" y="13.5" width="7" height="7" rx="1"/><rect x="13.5" y="13.5" width="7" height="7" rx="1"/></svg>',
    cloud: '<svg viewBox="0 0 24 24"><path d="M7 18h11a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.4 12.06 3.7 3.7 0 0 0 7 18Z"/></svg>',
    zap: '<svg viewBox="0 0 24 24"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/></svg>',
    activity: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2.5 7L14 5l2.5 7H21"/></svg>',
    github: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.11-1.46-1.11-1.46-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.9-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.91.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>',
    "external-link": '<svg viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/></svg>',
    "graduation-cap": '<svg viewBox="0 0 24 24"><path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z"/><path d="M6 10.7V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.3M20 9v6"/></svg>',
    "file-spreadsheet": '<svg viewBox="0 0 24 24"><path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"/><path d="M8 13h8M8 17h8M12 13v6"/></svg>',
    "pie-chart": '<svg viewBox="0 0 24 24"><path d="M12 12V3a9 9 0 1 1-9 9h9Z"/></svg>',
    mail: '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24"><path d="M5 4h3.5l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2C10.5 21 3 13.5 3 6a2 2 0 0 1 2-2Z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10v6.5M7.5 7.2v.1M12 16.5V13c0-1.4 1-2.5 2.5-2.5s2 1.1 2 2.5v3.5"/></svg>',
    send: '<svg viewBox="0 0 24 24"><path d="M21 3 3 10.5l7.5 3L14 21l7-18Z"/><path d="M10.5 13.5 21 3"/></svg>',
  };

  document.querySelectorAll("[data-icon]").forEach((el) => {
    const name = el.getAttribute("data-icon");
    if (ICONS[name]) el.innerHTML = ICONS[name];
  });

  /* ---------------- Seamless marquee duplication ---------------- */
  const marqueeTrack = document.getElementById("skillMarqueeTrack");
  if (marqueeTrack) {
    marqueeTrack.innerHTML += marqueeTrack.innerHTML;
  }

  /* ---------------- Year ---------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------------- Loader ---------------- */
  const loader = document.getElementById("loader");
  const loaderBar = document.getElementById("loaderBar");
  const loaderPct = document.getElementById("loaderPct");
  let progress = 0;
  const loaderInterval = setInterval(() => {
    progress += Math.random() * 18;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loaderInterval);
      setTimeout(() => {
        loader.classList.add("is-hidden");
        document.body.style.overflow = "";
        startEntrance();
      }, 300);
    }
    loaderBar.style.width = progress + "%";
    loaderPct.textContent = Math.floor(progress);
  }, 130);
  document.body.style.overflow = "hidden";

  /* ---------------- GSAP setup ---------------- */
  gsap.registerPlugin(ScrollTrigger);

  /* ---------------- Lenis smooth scroll ---------------- */
  let lenis;
  if (!reduceMotion) {
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3), smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* ---------------- Nav scroll behavior ---------------- */
  const nav = document.getElementById("nav");
  let lastY = window.scrollY;
  ScrollTrigger.create({
    start: 0, end: "max",
    onUpdate: (self) => {
      const y = window.scrollY;
      nav.classList.toggle("is-scrolled", y > 20);
      if (y > lastY && y > 200) nav.classList.add("nav-hidden");
      else nav.classList.remove("nav-hidden");
      lastY = y;

      // scroll progress bar
      const bar = document.getElementById("scrollProgressBar");
      if (bar) bar.style.width = (self.progress * 100) + "%";
    }
  });

  /* ---------------- Mobile nav ---------------- */
  const burger = document.getElementById("navBurger");
  const mobileMenu = document.getElementById("navMobile");
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
    burger.classList.toggle("is-open");
  });
  mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => mobileMenu.classList.remove("is-open")));

  /* ---------------- Theme toggle ---------------- */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("ks-theme");
  if (savedTheme) document.body.setAttribute("data-theme", savedTheme);
  themeToggle.addEventListener("click", () => {
    const current = document.body.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.body.setAttribute("data-theme", next);
    localStorage.setItem("ks-theme", next);
  });

  /* ---------------- Custom cursor ---------------- */
  if (!isTouch) {
    const dot = document.querySelector(".cursor-dot");
    const ring = document.querySelector(".cursor-ring");
    let mx = 0, my = 0, rx = 0, ry = 0;
    window.addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; dot.style.left = mx + "px"; dot.style.top = my + "px"; });
    const followRing = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.left = rx + "px"; ring.style.top = ry + "px";
      requestAnimationFrame(followRing);
    };
    followRing();
    document.querySelectorAll("a, button, .magnetic, .project-card, .stack-item").forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
      el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
    });
  }

  /* ---------------- Magnetic buttons ---------------- */
  if (!isTouch) {
    document.querySelectorAll(".magnetic").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        gsap.to(el, { x: x * 0.28, y: y * 0.4, duration: 0.4, ease: "power3.out" });
      });
      el.addEventListener("mouseleave", () => gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.4)" }));
    });
  }

  /* ---------------- Back to top ---------------- */
  document.getElementById("backToTop").addEventListener("click", () => {
    if (lenis) lenis.scrollTo(0); else window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- Smooth in-page nav links ---------------- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const id = a.getAttribute("href");
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: -80 });
      else target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------------- Entrance + scroll reveal animations ---------------- */
  function startEntrance() {
    if (reduceMotion) return;

    gsap.timeline({ delay: 0.1 })
      .to(".hero-title .reveal-line span", { yPercent: 0, duration: 1, ease: "power4.out", stagger: 0.08 })
      .from(".eyebrow", { opacity: 0, y: 14, duration: 0.6 }, 0)
      .from(".hero-sub", { opacity: 0, y: 16, duration: 0.7 }, 0.3)
      .from(".hero-cta", { opacity: 0, y: 16, duration: 0.7 }, 0.4)
      .from("#heroConsole", { opacity: 0, x: 30, duration: 0.9, ease: "power3.out" }, 0.2)
      .from(".hero-scroll-cue", { opacity: 0, duration: 0.8 }, 0.6)
      .add(animateCounters, 0.7);
  }

  // Set initial state for hero title lines (before entrance plays)
  gsap.set(".hero-title .reveal-line span", { yPercent: 110 });

  // Generic reveal-up / reveal-scale on scroll
  const revealTargets = gsap.utils.toArray(".reveal-up, .reveal-scale");
  revealTargets.forEach((el) => {
    if (el.closest(".hero")) return; // hero handled by entrance timeline
    const isScale = el.classList.contains("reveal-scale");
    gsap.fromTo(el,
      { opacity: 0, y: isScale ? 0 : 28, scale: isScale ? 0.94 : 1 },
      {
        opacity: 1, y: 0, scale: 1, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true }
      }
    );
  });

  /* ---------------- Animated counters ---------------- */
  function animateCounters() {
    document.querySelectorAll("[data-count]").forEach((el) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const target = parseFloat(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const decimal = el.dataset.decimal || "";
      const obj = { val: 0 };
      gsap.to(obj, {
        val: target, duration: 1.6, ease: "power2.out",
        onUpdate: () => { el.textContent = Math.floor(obj.val) + decimal + suffix; },
        onComplete: () => { el.textContent = target + decimal + suffix; }
      });
    });
  }
  // Trigger counters that live outside hero (achievements section) on scroll
  document.querySelectorAll(".stats-grid [data-count]").forEach((el) => {
    ScrollTrigger.create({
      trigger: el, start: "top 90%", once: true,
      onEnter: () => {
        const target = parseFloat(el.dataset.count);
        const suffix = el.dataset.suffix || "";
        const decimal = el.dataset.decimal || "";
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target, duration: 1.6, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.floor(obj.val) + decimal + suffix; },
          onComplete: () => { el.textContent = target + decimal + suffix; }
        });
      }
    });
  });

  /* ---------------- Three.js hero network background ---------------- */
  (function heroCanvas() {
    const canvas = document.getElementById("heroCanvas");
    if (!canvas || reduceMotion) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 18;

    const NODE_COUNT = isTouch ? 34 : 70;
    const positions = new Float32Array(NODE_COUNT * 3);
    const nodeData = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      const x = (Math.random() - 0.5) * 34;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 14;
      positions[i * 3] = x; positions[i * 3 + 1] = y; positions[i * 3 + 2] = z;
      nodeData.push({ speed: 0.15 + Math.random() * 0.25, offset: Math.random() * Math.PI * 2 });
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ color: 0x00e5c7, size: 0.16, transparent: true, opacity: 0.85 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // Connection lines (nearest neighbours, static-ish)
    const lineGeo = new THREE.BufferGeometry();
    const lineVerts = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < 6.5) {
          lineVerts.push(positions[i*3], positions[i*3+1], positions[i*3+2], positions[j*3], positions[j*3+1], positions[j*3+2]);
        }
      }
    }
    lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(lineVerts, 3));
    const lineMat = new THREE.LineBasicMaterial({ color: 0x8b96b3, transparent: true, opacity: 0.12 });
    const lines = new THREE.LineSegments(lineGeo, lineMat);
    scene.add(lines);

    function resize() {
      const w = canvas.parentElement.clientWidth, h = canvas.parentElement.clientHeight;
      renderer.setSize(w, h, false);
      camera.aspect = w / h; camera.updateProjectionMatrix();
    }
    resize();
    window.addEventListener("resize", resize);

    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5);
      mouseY = (e.clientY / window.innerHeight - 0.5);
    });

    const clock = new THREE.Clock();
    function animate() {
      const t = clock.getElapsedTime();
      points.rotation.y = t * 0.02 + mouseX * 0.15;
      points.rotation.x = mouseY * 0.08;
      lines.rotation.y = points.rotation.y;
      lines.rotation.x = points.rotation.x;
      camera.position.x += (mouseX * 2 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 1.2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    }
    animate();
  })();

  /* ---------------- Auto-play videos only while visible (perf) ---------------- */
  const autoVideos = document.querySelectorAll(".auto-video");
  if (autoVideos.length) {
    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const vid = entry.target;
        if (entry.isIntersecting) vid.play().catch(() => {});
        else vid.pause();
      });
    }, { threshold: 0.25 });
    autoVideos.forEach((v) => videoObserver.observe(v));
  }

  /* ---------------- Contact form (mailto) ---------------- */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:kamsala.sukumar09@gmail.com?subject=${subject}&body=${body}`;
    });
  }

})();
