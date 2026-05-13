import React, { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IPHONE_IMG =
  "https://cdn.poehali.dev/projects/d95b19c0-a2f8-4978-9726-cdd1105ad3bd/files/5944eaab-97bb-4462-b0c9-1bbb3277c0e1.jpg";

const NztLogo = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size * 0.7}
    height={size}
    viewBox="0 0 100 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      display: "block",
      filter: "drop-shadow(0 0 8px rgba(0,255,133,0.35))",
    }}
  >
    <defs>
      <linearGradient
        id="nztLogoGrad"
        x1="0"
        y1="0"
        x2="100"
        y2="144"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#7CFFB2" />
        <stop offset="50%" stopColor="#00FF85" />
        <stop offset="100%" stopColor="#1ED760" />
      </linearGradient>
    </defs>
    <rect
      x="3"
      y="3"
      width="94"
      height="138"
      rx="47"
      ry="47"
      fill="none"
      stroke="url(#nztLogoGrad)"
      strokeWidth="4"
    />
    <path
      d="M58 20 L30 78 L48 78 L40 124 L72 60 L52 60 L62 20 Z"
      fill="url(#nztLogoGrad)"
    />
  </svg>
);

export default function Index() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-in-up").forEach((el) => {
      observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#0B0B0B",
        fontFamily: "'Golos Text', sans-serif",
      }}
    >
      {/* NAV */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: "rgba(11,11,11,0.82)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 10 }}>
            <NztLogo size={28} />
            <span
              style={{
                fontSize: 18,
                fontWeight: 700,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
              }}
            >
              NZT VPN
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="nav-link" onClick={() => scrollTo("features")}>
              Возможности
            </button>
            <button className="nav-link" onClick={() => scrollTo("devices")}>
              Устройства
            </button>
            <button className="nav-link" onClick={() => scrollTo("pricing")}>
              Тарифы
            </button>
            <button className="nav-link" onClick={() => scrollTo("payment")}>
              Оплата
            </button>
          </div>
          <button
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 14 }}
          >
            Подключиться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section
        className="hero-bg relative min-h-screen flex items-center pt-20"
        id="hero"
      >
        <div
          style={{
            position: "absolute",
            top: "25%",
            right: "20%",
            width: 700,
            height: 700,
            background:
              "radial-gradient(circle, rgba(0,255,133,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
          className="glow-pulse"
        />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div
            className="grid md:grid-cols-2 gap-16 items-center"
            style={{ minHeight: "calc(100vh - 80px)" }}
          >
            {/* Left */}
            <div className="py-20">
              <div className="trust-badge w-fit mb-8 fade-in-up">
                <div className="green-dot" />
                <span>Работает прямо сейчас · 99.9% uptime</span>
              </div>

              <h1
                className="fade-in-up delay-1"
                style={{
                  fontSize: "clamp(52px, 7vw, 88px)",
                  fontWeight: 900,
                  lineHeight: 0.95,
                  letterSpacing: "-0.04em",
                  marginBottom: 16,
                  color: "#FFFFFF",
                }}
              >
                NZT VPN
              </h1>

              <h2
                className="nzt-gradient-text fade-in-up delay-2"
                style={{
                  fontSize: "clamp(28px, 4vw, 50px)",
                  fontWeight: 800,
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                  marginBottom: 24,
                }}
              >
                Твоя таблетка
                <br />
                от блокировок
              </h2>

              <p
                className="fade-in-up delay-3"
                style={{
                  fontSize: 18,
                  color: "#CFCFCF",
                  lineHeight: 1.65,
                  marginBottom: 40,
                  maxWidth: 440,
                }}
              >
                Полная приватность. Высокая скорость.
                <br />
                Доступ без ограничений.
              </p>

              <div className="flex flex-wrap gap-4 fade-in-up delay-4">
                <a
                  href="https://cabinet.nztvpn.com/buy/app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-primary">Подключиться</button>
                </a>
                <a
                  href="https://t.me/nztvpn1bot"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn-secondary">
                    Попробовать бесплатно
                  </button>
                </a>
              </div>

              <div className="flex gap-10 mt-14 fade-in-up delay-4">
                <div>
                  <div className="stat-number nzt-gradient-text">1K+</div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#8A8A8A",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    Пользователей
                  </div>
                </div>
                <div
                  style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
                />
                <div>
                  <div className="stat-number nzt-gradient-text">5+</div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#8A8A8A",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    Серверов
                  </div>
                </div>
                <div
                  style={{ width: 1, background: "rgba(255,255,255,0.08)" }}
                />
                <div>
                  <div className="stat-number nzt-gradient-text">0</div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "#8A8A8A",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    Логов
                  </div>
                </div>
              </div>
            </div>

            {/* Right — iPhone CSS Mockup */}
            <div className="flex justify-center items-center py-20 relative">
              {/* Deep cinematic ambient — behind phone */}
              <div
                style={{
                  position: "absolute",
                  inset: -120,
                  background:
                    "radial-gradient(circle at 50% 45%, rgba(0,255,133,0.16) 0%, rgba(2,80,52,0.10) 28%, rgba(0,0,0,0) 65%)",
                  filter: "blur(40px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
                className="glow-pulse"
              />
              {/* Secondary teal aura */}
              <div
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "15%",
                  width: 240,
                  height: 240,
                  background:
                    "radial-gradient(circle, rgba(0,255,133,0.18) 0%, transparent 70%)",
                  filter: "blur(50px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "8%",
                  right: "12%",
                  width: 260,
                  height: 260,
                  background:
                    "radial-gradient(circle, rgba(30,215,96,0.14) 0%, transparent 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Floating particles around phone */}
              {[
                { top: "12%", left: "8%", size: 4, dx: "30px", dy: "-50px", dur: "7s", delay: "0s" },
                { top: "20%", right: "10%", size: 3, dx: "-20px", dy: "-40px", dur: "8s", delay: "1.2s" },
                { top: "45%", left: "4%", size: 5, dx: "25px", dy: "30px", dur: "9s", delay: "2.4s" },
                { top: "60%", right: "6%", size: 3, dx: "-30px", dy: "20px", dur: "7.5s", delay: "0.8s" },
                { bottom: "18%", left: "12%", size: 4, dx: "20px", dy: "-30px", dur: "8.5s", delay: "3s" },
                { bottom: "10%", right: "14%", size: 3, dx: "-25px", dy: "-40px", dur: "6.5s", delay: "1.8s" },
                { top: "30%", left: "18%", size: 2, dx: "15px", dy: "25px", dur: "10s", delay: "4s" },
                { top: "70%", right: "20%", size: 2, dx: "-15px", dy: "-25px", dur: "9.5s", delay: "2s" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="particle"
                  style={{
                    top: p.top,
                    bottom: p.bottom,
                    left: p.left,
                    right: p.right,
                    width: p.size,
                    height: p.size,
                    zIndex: 1,
                    "--dx": p.dx,
                    "--dy": p.dy,
                    "--dur": p.dur,
                    "--delay": p.delay,
                  } as React.CSSProperties}
                />
              ))}

              <div
                className="float-anim relative"
                style={{ width: 340, zIndex: 2 }}
              >
                {/* Ambient glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: -80,
                    background:
                      "radial-gradient(circle, rgba(0,255,133,0.18) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(30px)",
                  }}
                  className="glow-pulse"
                />

                {/* Phone frame */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "9 / 19",
                    background:
                      "linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 50%, #1a1a1a 100%)",
                    borderRadius: 44,
                    padding: 10,
                    boxShadow: `
                    0 40px 80px rgba(0,0,0,0.7),
                    0 0 0 1.5px rgba(255,255,255,0.08),
                    inset 0 0 0 1px rgba(255,255,255,0.04),
                    0 0 60px rgba(0,255,133,0.15)
                  `,
                    zIndex: 1,
                  }}
                >
                  {/* Screen */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      background:
                        "radial-gradient(ellipse at 50% 38%, #0e4a30 0%, #062a1c 35%, #020c08 70%, #000000 100%)",
                      borderRadius: 36,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "44px 24px 28px",
                    }}
                  >
                    {/* Notch */}
                    <div
                      style={{
                        position: "absolute",
                        top: 12,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 95,
                        height: 28,
                        background: "#000000",
                        borderRadius: 999,
                        zIndex: 5,
                      }}
                    />

                    {/* Layer: Abstract world / network map — dotted globe */}
                    <svg
                      viewBox="0 0 300 600"
                      preserveAspectRatio="xMidYMid slice"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0.55,
                        zIndex: 1,
                        pointerEvents: "none",
                      }}
                    >
                      <defs>
                        <radialGradient id="mapGlow" cx="50%" cy="42%" r="60%">
                          <stop offset="0%" stopColor="#00FF85" stopOpacity="0.35" />
                          <stop offset="60%" stopColor="#00FF85" stopOpacity="0.05" />
                          <stop offset="100%" stopColor="#000" stopOpacity="0" />
                        </radialGradient>
                        <linearGradient id="connGrad" x1="0" y1="0" x2="1" y2="1">
                          <stop offset="0%" stopColor="#00FF85" stopOpacity="0" />
                          <stop offset="50%" stopColor="#00FF85" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#7CFFB2" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      {/* Glow base for map */}
                      <circle cx="150" cy="260" r="170" fill="url(#mapGlow)" />

                      {/* Dotted globe lat/long arcs — abstract sphere */}
                      <g
                        fill="none"
                        stroke="rgba(0,255,133,0.28)"
                        strokeWidth="0.8"
                        strokeDasharray="1.6 3"
                      >
                        <ellipse cx="150" cy="260" rx="120" ry="120" />
                        <ellipse cx="150" cy="260" rx="120" ry="50" />
                        <ellipse cx="150" cy="260" rx="120" ry="90" />
                        <ellipse cx="150" cy="260" rx="80" ry="120" />
                        <ellipse cx="150" cy="260" rx="40" ry="120" />
                        <ellipse cx="150" cy="260" rx="120" ry="20" />
                      </g>

                      {/* Dot-cluster continents (abstract) */}
                      <g fill="rgba(0,255,133,0.55)">
                        {[
                          [60, 220], [66, 224], [72, 220], [78, 226], [84, 222],
                          [70, 230], [78, 234], [86, 232], [92, 228], [100, 232],
                          [110, 240], [118, 244], [126, 240], [60, 240], [68, 244],
                          [180, 230], [188, 226], [196, 230], [204, 224], [212, 228],
                          [186, 240], [196, 244], [206, 240], [214, 246], [222, 242],
                          [196, 252], [206, 256], [216, 254], [226, 250],
                          [110, 270], [120, 274], [130, 270], [140, 276], [150, 272],
                          [120, 286], [130, 290], [140, 286], [150, 292], [160, 288],
                          [170, 280], [180, 284], [156, 300], [144, 304],
                          [80, 300], [90, 304], [100, 300], [88, 312], [96, 316],
                          [200, 300], [210, 304], [220, 300], [212, 314], [222, 312],
                          [134, 326], [144, 330], [154, 326], [166, 330],
                        ].map(([cx, cy], i) => (
                          <circle key={i} cx={cx} cy={cy} r="1.2" />
                        ))}
                      </g>

                      {/* Bright connection nodes (cities) */}
                      <g>
                        <circle className="net-node" cx="78" cy="230" fill="#7CFFB2" />
                        <circle className="net-node" cx="200" cy="240" fill="#7CFFB2" style={{ animationDelay: "0.6s" }} />
                        <circle className="net-node" cx="130" cy="280" fill="#7CFFB2" style={{ animationDelay: "1.2s" }} />
                        <circle className="net-node" cx="90" cy="310" fill="#7CFFB2" style={{ animationDelay: "1.8s" }} />
                        <circle className="net-node" cx="215" cy="305" fill="#7CFFB2" style={{ animationDelay: "0.3s" }} />
                        <circle className="net-node" cx="150" cy="195" fill="#7CFFB2" style={{ animationDelay: "1.5s" }} />
                      </g>

                      {/* Dynamic connection lines — curved arcs between nodes */}
                      <g fill="none" stroke="url(#connGrad)" strokeWidth="1.2" strokeLinecap="round">
                        <path className="conn-line" d="M 78 230 Q 130 170 200 240" />
                        <path className="conn-line" d="M 200 240 Q 220 290 215 305" style={{ animationDelay: "0.8s" }} />
                        <path className="conn-line" d="M 130 280 Q 100 250 78 230" style={{ animationDelay: "1.6s" }} />
                        <path className="conn-line" d="M 90 310 Q 110 290 130 280" style={{ animationDelay: "2.2s" }} />
                        <path className="conn-line" d="M 150 195 Q 175 215 200 240" style={{ animationDelay: "0.4s" }} />
                        <path className="conn-line" d="M 150 195 Q 110 210 78 230" style={{ animationDelay: "1.2s" }} />
                      </g>
                    </svg>

                    {/* Orbital rings around logo */}
                    <div
                      className="orbit-ring"
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        width: 200,
                        height: 200,
                        marginLeft: -100,
                        marginTop: -100,
                        borderRadius: "50%",
                        border: "1px dashed rgba(0,255,133,0.22)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />
                    <div
                      className="orbit-ring-reverse"
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        width: 240,
                        height: 240,
                        marginLeft: -120,
                        marginTop: -120,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,255,133,0.12)",
                        pointerEvents: "none",
                        zIndex: 1,
                      }}
                    />

                    {/* Cinematic scan line */}
                    <div
                      className="scan-line"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: 80,
                        background:
                          "linear-gradient(180deg, transparent 0%, rgba(0,255,133,0.10) 50%, transparent 100%)",
                        pointerEvents: "none",
                        zIndex: 2,
                      }}
                    />

                    {/* Soft signal waves — animated radial pulses */}
                    <div
                      className="signal-wave"
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,255,133,0.35)",
                        pointerEvents: "none",
                      }}
                    />
                    <div
                      className="signal-wave"
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,255,133,0.25)",
                        pointerEvents: "none",
                        animationDelay: "1.2s",
                      }}
                    />
                    <div
                      className="signal-wave"
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        width: 140,
                        height: 140,
                        borderRadius: "50%",
                        border: "1px solid rgba(0,255,133,0.18)",
                        pointerEvents: "none",
                        animationDelay: "2.4s",
                      }}
                    />

                    {/* Top wordmark */}
                    <div
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,0.5)",
                        fontWeight: 600,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        marginTop: 8,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      NZT VPN
                    </div>

                    {/* Center: logo + Подключено */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 18,
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: 130,
                          height: 175,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Outer halo glow — wider, more cinematic */}
                        <div
                          style={{
                            position: "absolute",
                            inset: -70,
                            background:
                              "radial-gradient(circle, rgba(0,255,133,0.7) 0%, rgba(0,255,133,0.22) 40%, transparent 75%)",
                            filter: "blur(34px)",
                            borderRadius: "50%",
                          }}
                          className="glow-pulse"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: -28,
                            background:
                              "radial-gradient(circle, rgba(124,255,178,0.45) 0%, transparent 65%)",
                            filter: "blur(16px)",
                            borderRadius: "50%",
                          }}
                        />

                        {/* Glassmorphism plate behind logo */}
                        <div
                          style={{
                            position: "absolute",
                            width: 150,
                            height: 195,
                            borderRadius: 38,
                            background:
                              "linear-gradient(145deg, rgba(255,255,255,0.10) 0%, rgba(0,255,133,0.04) 50%, rgba(255,255,255,0.02) 100%)",
                            border: "1px solid rgba(0,255,133,0.18)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",
                            boxShadow:
                              "0 0 40px rgba(0,255,133,0.15), inset 0 1px 0 rgba(255,255,255,0.12)",
                            zIndex: 0,
                          }}
                        />

                        {/* 3D Glass NZT pill — elongated vertical capsule */}
                        <svg
                          width="108"
                          height="190"
                          viewBox="0 0 90 180"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="logo-breathe"
                          style={{
                            position: "relative",
                            zIndex: 1,
                          }}
                        >
                          <defs>
                            {/* Inner energy gradient — bright core */}
                            <radialGradient
                              id="pillCore"
                              cx="50%"
                              cy="50%"
                              r="55%"
                            >
                              <stop
                                offset="0%"
                                stopColor="#A8FFCF"
                                stopOpacity="0.85"
                              />
                              <stop
                                offset="40%"
                                stopColor="#00FF88"
                                stopOpacity="0.6"
                              />
                              <stop
                                offset="100%"
                                stopColor="#005A2E"
                                stopOpacity="0.7"
                              />
                            </radialGradient>
                            {/* Glass body — translucent emerald with depth */}
                            <linearGradient
                              id="pillGlass"
                              x1="0"
                              y1="0"
                              x2="90"
                              y2="180"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0%"
                                stopColor="#9FFFC7"
                                stopOpacity="0.6"
                              />
                              <stop
                                offset="50%"
                                stopColor="#00FF88"
                                stopOpacity="0.35"
                              />
                              <stop
                                offset="100%"
                                stopColor="#00773F"
                                stopOpacity="0.55"
                              />
                            </linearGradient>
                            {/* Crystal bevel edge */}
                            <linearGradient
                              id="pillEdge"
                              x1="45"
                              y1="0"
                              x2="45"
                              y2="180"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#D4FFE5" />
                              <stop offset="50%" stopColor="#00FF88" />
                              <stop offset="100%" stopColor="#1ED760" />
                            </linearGradient>
                            {/* Top glossy reflection */}
                            <linearGradient
                              id="topGloss"
                              x1="0"
                              y1="0"
                              x2="0"
                              y2="80"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop
                                offset="0%"
                                stopColor="#FFFFFF"
                                stopOpacity="0.7"
                              />
                              <stop
                                offset="100%"
                                stopColor="#FFFFFF"
                                stopOpacity="0"
                              />
                            </linearGradient>
                            {/* Bolt fill — energetic bright */}
                            <linearGradient
                              id="boltGlow"
                              x1="0"
                              y1="20"
                              x2="0"
                              y2="160"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop offset="0%" stopColor="#FFFFFF" />
                              <stop offset="40%" stopColor="#A8FFCF" />
                              <stop offset="100%" stopColor="#00FF88" />
                            </linearGradient>
                          </defs>

                          {/* Layer 1: Inner energy core (radial glow inside pill) */}
                          <rect
                            x="6"
                            y="6"
                            width="78"
                            height="168"
                            rx="39"
                            ry="39"
                            fill="url(#pillCore)"
                            opacity="0.55"
                          />

                          {/* Layer 2: Translucent glass body */}
                          <rect
                            x="6"
                            y="6"
                            width="78"
                            height="168"
                            rx="39"
                            ry="39"
                            fill="url(#pillGlass)"
                            opacity="0.5"
                          />

                          {/* Layer 3: Outer bevel edge — bright crystal */}
                          <rect
                            x="6"
                            y="6"
                            width="78"
                            height="168"
                            rx="39"
                            ry="39"
                            fill="none"
                            stroke="url(#pillEdge)"
                            strokeWidth="2.5"
                          />

                          {/* Layer 4: Inner thickness edge */}
                          <rect
                            x="11"
                            y="11"
                            width="68"
                            height="158"
                            rx="34"
                            ry="34"
                            fill="none"
                            stroke="rgba(168,255,207,0.5)"
                            strokeWidth="1"
                          />

                          {/* Layer 5: Top glossy highlight (curved like real glass) */}
                          <path
                            d="M 22 12 Q 45 6 68 12 Q 78 22 74 42 Q 45 32 16 42 Q 12 22 22 12 Z"
                            fill="url(#topGloss)"
                            opacity="0.75"
                          />

                          {/* Layer 6: Side rim light (left) */}
                          <path
                            d="M 8 50 Q 6 90 8 130"
                            stroke="rgba(168,255,207,0.5)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            fill="none"
                          />

                          {/* Layer 7: Lightning bolt — embedded inside pill, energetic */}
                          <path
                            d="M52 28 L26 92 L44 92 L34 152 L66 78 L48 78 L58 28 Z"
                            fill="url(#boltGlow)"
                          />

                          {/* Bolt rim highlight */}
                          <path
                            d="M52 28 L26 92 L44 92 L34 152 L66 78 L48 78 L58 28 Z"
                            fill="none"
                            stroke="#E8FFF1"
                            strokeWidth="1.2"
                            opacity="0.8"
                            strokeLinejoin="round"
                          />

                          {/* Bolt inner energy line */}
                          <path
                            d="M50 34 L32 88"
                            stroke="rgba(255,255,255,0.85)"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />

                          {/* Bolt secondary highlight */}
                          <path
                            d="M58 30 L48 76"
                            stroke="rgba(255,255,255,0.55)"
                            strokeWidth="1"
                            strokeLinecap="round"
                          />
                        </svg>
                      </div>
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 600,
                          color: "#FFFFFF",
                          letterSpacing: "-0.02em",
                          textShadow: "0 0 20px rgba(0,255,133,0.3)",
                        }}
                      >
                        Подключено
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.45)",
                          fontWeight: 500,
                          letterSpacing: "0.04em",
                        }}
                      >
                        Амстердам · 245 Mbps
                      </div>
                    </div>

                    {/* Bottom button */}
                    <div
                      style={{
                        width: "100%",
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        borderRadius: 14,
                        padding: "14px 0",
                        textAlign: "center",
                        backdropFilter: "blur(12px)",
                        fontSize: 13,
                        color: "rgba(255,255,255,0.85)",
                        fontWeight: 600,
                        letterSpacing: "0.01em",
                        position: "relative",
                        zIndex: 2,
                      }}
                    >
                      Отключить
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* FEATURES */}
      <section id="features" className="section-bg py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="Zap" size={14} style={{ color: "#00FF85" }} />
              <span>Возможности</span>
            </div>
            <h2
              className="fade-in-up delay-1"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Всё что нужно —<br />
              <span className="nzt-gradient-text">и ничего лишнего</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: "Shield",
                title: "Полная приватность",
                desc: "AES-256 шифрование. Ни один байт данных не логируется. Твоя активность — только твоя.",
                delay: "delay-1",
              },
              {
                icon: "Server",
                title: "Стабильные сервера",
                desc: "5+ серверов в основных европейских странах. Умный выбор сервера для минимального пинга.",
                delay: "delay-2",
              },
              {
                icon: "Smartphone",
                title: "Все устройства",
                desc: "iOS, Android, macOS, Windows, Linux. Одна подписка — до 6 устройств одновременно.",
                delay: "delay-3",
              },
              {
                icon: "Gauge",
                title: "Высокая скорость",
                desc: "До 10 Гбит/с. WireGuard-протокол — без компромиссов между защитой и скоростью.",
                delay: "delay-4",
              },
            ].map((f) => (
              <div
                key={f.title}
                className={`feature-card fade-in-up ${f.delay}`}
              >
                <div className="icon-box">
                  <Icon name={f.icon} size={22} style={{ color: "#00FF85" }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* DEVICES */}
      <section
        id="devices"
        className="py-32"
        style={{ backgroundColor: "#0B0B0B" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="Monitor" size={14} style={{ color: "#00FF85" }} />
              <span>Устройства</span>
            </div>
            <h2
              className="fade-in-up delay-1"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Работает везде,
              <br />
              <span className="nzt-gradient-text">где ты есть</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "Smartphone",
                title: "Смартфон",
                sub: "iOS & Android",
                desc: "Одно касание — и ты защищён. Приложение запускается за секунды.",
                delay: "delay-1",
              },
              {
                icon: "Laptop",
                title: "Компьютер",
                sub: "macOS & Windows",
                desc: "Нативное приложение с умным разделением трафика. Работай без тормозов.",
                delay: "delay-2",
              },
              {
                icon: "Tablet",
                title: "Планшет",
                sub: "iPad & Android",
                desc: "Оптимизированный интерфейс для большого экрана. Полный контроль.",
                delay: "delay-3",
              },
            ].map((d) => (
              <div
                key={d.title}
                className={`device-card fade-in-up ${d.delay}`}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 18,
                    background:
                      "linear-gradient(135deg, rgba(0,255,133,0.12), rgba(30,215,96,0.06))",
                    border: "1px solid rgba(0,255,133,0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <Icon name={d.icon} size={28} style={{ color: "#00FF85" }} />
                </div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                    marginBottom: 4,
                  }}
                >
                  {d.title}
                </h3>
                <div
                  style={{
                    fontSize: 13,
                    color: "#00FF85",
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  {d.sub}
                </div>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.65 }}>
                  {d.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 fade-in-up">
            {["iOS", "Android", "macOS", "Windows", "Linux", "Router"].map(
              (p) => (
                <div
                  key={p}
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: 8,
                    padding: "8px 16px",
                    fontSize: 13,
                    color: "#CFCFCF",
                    fontWeight: 600,
                  }}
                >
                  {p}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* PAYMENT */}
      <section id="payment" className="section-bg py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="CreditCard" size={14} style={{ color: "#00FF85" }} />
              <span>Оплата</span>
            </div>
            <h2
              className="fade-in-up delay-1"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Удобно и анонимно
            </h2>
            <p
              className="fade-in-up delay-2"
              style={{ fontSize: 16, color: "#8A8A8A", marginTop: 12 }}
            >
              Любой способ оплаты — подключение через минуту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              {
                icon: "Zap",
                title: "СБП",
                desc: "Система быстрых платежей. Мгновенное зачисление без комиссии.",
                tag: "Популярно",
              },
              {
                icon: "CreditCard",
                title: "Банковские карты",
                desc: "Visa, Mastercard, МИР. Оплата в один клик с любой карты.",
                tag: null,
              },
              {
                icon: "Bitcoin",
                title: "Криптовалюта",
                desc: "Bitcoin, USDT, ETH. Максимальная анонимность оплаты.",
                tag: "Анонимно",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="payment-card fade-in-up flex-col items-start relative"
                style={{
                  borderRadius: 20,
                  padding: "28px",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {p.tag && (
                  <div
                    style={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      background: "rgba(0,255,133,0.1)",
                      border: "1px solid rgba(0,255,133,0.25)",
                      borderRadius: 6,
                      padding: "3px 10px",
                      fontSize: 11,
                      color: "#00FF85",
                      fontWeight: 700,
                    }}
                  >
                    {p.tag}
                  </div>
                )}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 14,
                    background: "rgba(0,255,133,0.08)",
                    border: "1px solid rgba(0,255,133,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon name={p.icon} size={20} style={{ color: "#00FF85" }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* PRICING */}
      <section
        id="pricing"
        className="py-32"
        style={{ backgroundColor: "#0B0B0B" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="Sparkles" size={14} style={{ color: "#00FF85" }} />
              <span>Тарифы</span>
            </div>
            <h2
              className="fade-in-up delay-1"
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#FFFFFF",
              }}
            >
              Выбери свой
              <br />
              <span className="nzt-gradient-text">уровень свободы</span>
            </h2>
            <p
              className="fade-in-up delay-2"
              style={{ fontSize: 16, color: "#8A8A8A", marginTop: 12 }}
            >
              Чем дольше период — тем выгоднее
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* BASIC PLAN */}
            <div
              className="fade-in-up delay-1"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: 24,
                padding: "36px 32px",
                position: "relative",
              }}
            >
              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "#8A8A8A",
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Базовый
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                  }}
                >
                  Универсальные сервера
                </h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.6 }}>
                  Идеален для повседневного использования
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { period: "1 месяц", price: "109", per: "109 ₽/мес" },
                  { period: "3 месяца", price: "309", per: "103 ₽/мес" },
                  {
                    period: "12 месяцев",
                    price: "990",
                    per: "82.5 ₽/мес",
                    best: true,
                  },
                ].map((t) => (
                  <div
                    key={t.period}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 18px",
                      background: t.best
                        ? "rgba(0,255,133,0.06)"
                        : "rgba(255,255,255,0.02)",
                      border: t.best
                        ? "1px solid rgba(0,255,133,0.2)"
                        : "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 12,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#FFFFFF",
                          fontWeight: 600,
                          marginBottom: 2,
                        }}
                      >
                        {t.period}
                      </div>
                      <div style={{ fontSize: 12, color: "#8A8A8A" }}>
                        {t.per}
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      {t.best && (
                        <span
                          style={{
                            fontSize: 10,
                            color: "#00FF85",
                            fontWeight: 700,
                            background: "rgba(0,255,133,0.1)",
                            padding: "3px 8px",
                            borderRadius: 4,
                            letterSpacing: "0.05em",
                          }}
                        >
                          ВЫГОДНО
                        </span>
                      )}
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#FFFFFF",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {t.price} ₽
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 mb-8">
                {[
                  "Высокая скорость",
                  "5+ серверов",
                  "До 3 устройств",
                  "Без логов",
                ].map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Icon name="Check" size={16} style={{ color: "#00FF85" }} />
                    <span style={{ fontSize: 14, color: "#CFCFCF" }}>{f}</span>
                  </div>
                ))}
              </div>

              <button
                className="btn-secondary"
                style={{ width: "100%", padding: "14px" }}
              >
                Выбрать Базовый
              </button>
            </div>

            {/* PRO PLAN */}
            <div
              className="fade-in-up delay-2"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,255,133,0.06) 0%, rgba(0,255,133,0.02) 100%)",
                border: "1px solid rgba(0,255,133,0.25)",
                borderRadius: 24,
                padding: "36px 32px",
                position: "relative",
                boxShadow: "0 20px 60px rgba(0,255,133,0.08)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: -12,
                  right: 24,
                  background: "linear-gradient(135deg, #00FF85, #1ED760)",
                  color: "#0B0B0B",
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: "0.08em",
                  padding: "6px 14px",
                  borderRadius: 999,
                  textTransform: "uppercase",
                }}
              >
                Рекомендуем
              </div>

              <div style={{ marginBottom: 28 }}>
                <div
                  style={{
                    fontSize: 13,
                    color: "#00FF85",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  PRO
                </div>
                <h3
                  style={{
                    fontSize: 28,
                    fontWeight: 800,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                    marginBottom: 8,
                  }}
                >
                  Расширенный доступ
                </h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.6 }}>
                  Надёжная работа при любых условиях
                </p>
              </div>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  { period: "1 месяц", price: "179", per: "179 ₽/мес" },
                  { period: "3 месяца", price: "499", per: "166 ₽/мес" },
                  {
                    period: "12 месяцев",
                    price: "1490",
                    per: "124 ₽/мес",
                    best: true,
                  },
                ].map((t) => (
                  <div
                    key={t.period}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "14px 18px",
                      background: t.best
                        ? "rgba(0,255,133,0.1)"
                        : "rgba(0,255,133,0.03)",
                      border: t.best
                        ? "1px solid rgba(0,255,133,0.35)"
                        : "1px solid rgba(0,255,133,0.12)",
                      borderRadius: 12,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: 14,
                          color: "#FFFFFF",
                          fontWeight: 600,
                          marginBottom: 2,
                        }}
                      >
                        {t.period}
                      </div>
                      <div style={{ fontSize: 12, color: "#8A8A8A" }}>
                        {t.per}
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 10 }}
                    >
                      {t.best && (
                        <span
                          style={{
                            fontSize: 10,
                            color: "#0B0B0B",
                            fontWeight: 800,
                            background: "#00FF85",
                            padding: "3px 8px",
                            borderRadius: 4,
                            letterSpacing: "0.05em",
                          }}
                        >
                          ХИТ
                        </span>
                      )}
                      <div
                        style={{
                          fontSize: 20,
                          fontWeight: 800,
                          color: "#FFFFFF",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {t.price} ₽
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2 mb-8">
                {[
                  "Всё из Базового",
                  "Подключение до 5 устройств",
                  "Премиум-сервера с низкой нагрузкой",
                  "Стабильное соединение 24/7",
                  "Максимальная скорость",
                ].map((f) => (
                  <div
                    key={f}
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <Icon name="Check" size={16} style={{ color: "#00FF85" }} />
                    <span
                      style={{
                        fontSize: 14,
                        color: "#FFFFFF",
                        fontWeight: 500,
                      }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="btn-primary"
                style={{ width: "100%", padding: "14px" }}
              >
                Выбрать PRO
              </button>
            </div>
          </div>

          <p
            className="fade-in-up delay-3"
            style={{
              textAlign: "center",
              fontSize: 13,
              color: "#8A8A8A",
              marginTop: 32,
            }}
          >
            3 дня бесплатно · Отмена в любой момент · Без скрытых платежей
          </p>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* TRUST */}
      <section className="py-32" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="fade-in-up"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: 24,
            }}
          >
            Без логов.
            <br />
            <span className="nzt-gradient-text">Без ограничений.</span>
            <br />
            Без компромиссов.
          </h2>

          <p
            className="fade-in-up delay-1"
            style={{
              fontSize: 17,
              color: "#8A8A8A",
              lineHeight: 1.7,
              maxWidth: 520,
              margin: "0 auto 48px",
            }}
          >
            Мы не храним историю браузера, IP-адреса, DNS-запросы и любые другие
            данные, которые могут идентифицировать тебя.
          </p>

          <div className="flex flex-wrap justify-center gap-3 fade-in-up delay-2">
            {[
              { icon: "Lock", label: "AES-256 шифрование" },
              { icon: "EyeOff", label: "Zero-log политика" },
              { icon: "Globe", label: "WireGuard протокол" },
              { icon: "ShieldCheck", label: "Kill Switch" },
              { icon: "Server", label: "RAM-only серверы" },
              { icon: "UserX", label: "Анонимная регистрация" },
            ].map((b) => (
              <div key={b.label} className="trust-badge">
                <Icon name={b.icon} size={14} style={{ color: "#00FF85" }} />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        className="separator-line"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      />

      {/* CTA */}
      <section className="section-bg py-40 relative overflow-hidden">
        <div
          style={{
            width: 500,
            height: 500,
            background:
              "radial-gradient(circle, rgba(0,255,133,0.07) 0%, transparent 70%)",
            borderRadius: "50%",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
          className="glow-pulse"
        />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2
            className="fade-in-up"
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 900,
              letterSpacing: "-0.04em",
              color: "#FFFFFF",
              lineHeight: 1.1,
              marginBottom: 20,
            }}
          >
            Готов к свободному
            <br />
            <span className="nzt-gradient-text">интернету?</span>
          </h2>

          <p
            className="fade-in-up delay-1"
            style={{ fontSize: 17, color: "#8A8A8A", marginBottom: 40 }}
          >
            Присоединяйся к сообществу NZT VPN
          </p>

          <div className="flex flex-wrap justify-center gap-4 fade-in-up delay-2">
            <a
              href="https://cabinet.nztvpn.com/buy/app"
              target="_blank"
              rel="noreferrer"
            >
              <button
                className="btn-primary"
                style={{ fontSize: 16, padding: "18px 52px" }}
              >
                Начать сейчас
              </button>
            </a>
            <a href="https://t.me/nztvpnnews" target="_blank" rel="noreferrer">
              <button
                className="btn-secondary"
                style={{ fontSize: 16, padding: "18px 40px" }}
              >
                Узнать больше
              </button>
            </a>
          </div>

          <p
            className="fade-in-up delay-3"
            style={{ fontSize: 13, color: "#8A8A8A", marginTop: 20 }}
          >
            3 дня бесплатно · Без привязки карты · Отмена в любой момент
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          backgroundColor: "#0B0B0B",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center mb-4" style={{ gap: 10 }}>
                <NztLogo size={28} />
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                  }}
                >
                  NZT VPN
                </span>
              </div>
              <p
                style={{
                  fontSize: 14,
                  color: "#8A8A8A",
                  lineHeight: 1.7,
                  maxWidth: 260,
                }}
              >
                Приватность — это право,
                <br />а не привилегия.
              </p>
            </div>

            <div className="flex flex-wrap gap-16">
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#8A8A8A",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  }}
                >
                  Продукт
                </div>
                {["Возможности", "Устройства", "Тарифы", "Приложение"].map(
                  (l) => (
                    <div
                      key={l}
                      className="nav-link mb-3"
                      style={{ display: "block" }}
                    >
                      {l}
                    </div>
                  ),
                )}
              </div>
              <div>
                <div
                  style={{
                    fontSize: 12,
                    color: "#8A8A8A",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: 16,
                  }}
                >
                  Компания
                </div>
                {["О нас", "Блог", "Конфиденциальность", "Условия"].map((l) => (
                  <div
                    key={l}
                    className="nav-link mb-3"
                    style={{ display: "block" }}
                  >
                    {l}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="separator-line mt-10 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontSize: 13, color: "#8A8A8A" }}>
              © 2026 NZT VPN. Все права защищены.
            </p>
            <div className="flex items-center gap-2">
              <div className="green-dot" style={{ width: 6, height: 6 }} />
              <span style={{ fontSize: 13, color: "#8A8A8A" }}>
                Все серверы работают нормально
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}