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

            {/* Right — iPhone Premium Hero (reference-style) */}
            <div className="flex justify-center items-center py-24 relative" data-hero-v2="true">
              {/* Calm ambient — soft green vignette */}
              <div
                style={{
                  position: "absolute",
                  inset: -140,
                  background:
                    "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(0,255,133,0.14) 0%, rgba(0,90,55,0.06) 40%, rgba(0,0,0,0) 70%)",
                  filter: "blur(60px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />
              {/* Bottom-right soft green spot */}
              <div
                style={{
                  position: "absolute",
                  bottom: "5%",
                  right: "-5%",
                  width: 300,
                  height: 300,
                  background:
                    "radial-gradient(circle, rgba(0,255,133,0.12) 0%, transparent 70%)",
                  filter: "blur(70px)",
                  pointerEvents: "none",
                  zIndex: 0,
                }}
              />

              {/* Minimal floating particles — calm premium feel */}
              {([
                { top: "22%", left: "8%", size: 3, dx: "15px", dy: "-30px", dur: "9s", delay: "0s" },
                { top: "60%", right: "6%", size: 2, dx: "-12px", dy: "20px", dur: "10s", delay: "1.5s" },
                { bottom: "20%", left: "14%", size: 2, dx: "10px", dy: "-20px", dur: "11s", delay: "3s" },
              ] as Array<{ top?: string; bottom?: string; left?: string; right?: string; size: number; dx: string; dy: string; dur: string; delay: string }>).map((p, i) => (
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
                className="float-anim relative phone-perspective"
                style={{ width: 320, zIndex: 2 }}
              >
                {/* Ambient glow */}
                <div
                  style={{
                    position: "absolute",
                    inset: -90,
                    background:
                      "radial-gradient(circle, rgba(0,255,133,0.22) 0%, transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(34px)",
                  }}
                  className="glow-pulse"
                />

                {/* Phone frame — metallic, with subtle perspective */}
                <div
                  className="phone-tilt"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "9 / 19",
                    background:
                      "linear-gradient(145deg, #3a3a3a 0%, #1a1a1a 25%, #0a0a0a 50%, #1f1f1f 75%, #2a2a2a 100%)",
                    borderRadius: 48,
                    padding: 8,
                    boxShadow: `
                    0 50px 100px rgba(0,0,0,0.8),
                    0 0 0 2px rgba(255,255,255,0.06),
                    inset 0 0 0 1px rgba(255,255,255,0.08),
                    inset 2px 0 4px rgba(255,255,255,0.06),
                    inset -2px 0 4px rgba(0,0,0,0.4),
                    0 0 90px rgba(0,255,133,0.22)
                  `,
                    zIndex: 1,
                  }}
                >
                  {/* Side rim highlight — metallic edge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "8%",
                      left: -2,
                      width: 3,
                      height: "30%",
                      background:
                        "linear-gradient(180deg, transparent, rgba(255,255,255,0.4), transparent)",
                      borderRadius: 4,
                      pointerEvents: "none",
                      zIndex: 6,
                    }}
                  />
                  {/* Screen */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                      background:
                        "radial-gradient(ellipse at 50% 38%, #082a1c 0%, #04130d 40%, #010604 75%, #000000 100%)",
                      borderRadius: 40,
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "stretch",
                      justifyContent: "space-between",
                      padding: "0",
                    }}
                  >
                    {/* Dynamic Island */}
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 88,
                        height: 26,
                        background: "#000000",
                        borderRadius: 999,
                        zIndex: 5,
                        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.04)",
                      }}
                    />

                    {/* Layer: Subtle dotted world map */}
                    <svg
                      viewBox="0 0 300 600"
                      preserveAspectRatio="xMidYMid slice"
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0.40,
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

                      {/* Subtle horizontal latitude lines only */}
                      <g
                        fill="none"
                        stroke="rgba(0,255,133,0.15)"
                        strokeWidth="0.6"
                        strokeDasharray="1.5 4"
                      >
                        <ellipse cx="150" cy="260" rx="115" ry="50" />
                        <ellipse cx="150" cy="260" rx="115" ry="90" />
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

                      {/* Thin minimal connection lines */}
                      <g fill="none" stroke="url(#connGrad)" strokeWidth="0.9" strokeLinecap="round">
                        <path className="conn-line" d="M 78 230 Q 130 170 200 240" />
                        <path className="conn-line" d="M 130 280 Q 100 250 78 230" style={{ animationDelay: "1.6s" }} />
                        <path className="conn-line" d="M 150 195 Q 175 215 200 240" style={{ animationDelay: "0.8s" }} />
                      </g>
                    </svg>

                    {/* Status bar — minimal iPhone-style (time + signal/wifi/battery) */}
                    <div
                      style={{
                        position: "absolute",
                        top: 14,
                        left: 24,
                        right: 24,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: 12,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        zIndex: 6,
                      }}
                    >
                      <span style={{ letterSpacing: "-0.01em" }}>9:41</span>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        {/* Signal bars */}
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                          <rect x="0" y="6" width="2.5" height="4" rx="0.5" fill="#FFFFFF" />
                          <rect x="4" y="4" width="2.5" height="6" rx="0.5" fill="#FFFFFF" />
                          <rect x="8" y="2" width="2.5" height="8" rx="0.5" fill="#FFFFFF" />
                          <rect x="12" y="0" width="2.5" height="10" rx="0.5" fill="#FFFFFF" />
                        </svg>
                        {/* WiFi */}
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
                          <path
                            d="M7 9.2 C 7.6 9.2 8.1 8.7 8.1 8.1 C 8.1 7.5 7.6 7 7 7 C 6.4 7 5.9 7.5 5.9 8.1 C 5.9 8.7 6.4 9.2 7 9.2 Z"
                            fill="#FFFFFF"
                          />
                          <path
                            d="M3.6 5.4 Q 7 2.8 10.4 5.4"
                            stroke="#FFFFFF"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <path
                            d="M1.2 3.2 Q 7 -1.4 12.8 3.2"
                            stroke="#FFFFFF"
                            strokeWidth="1.3"
                            strokeLinecap="round"
                            fill="none"
                          />
                        </svg>
                        {/* Battery */}
                        <svg width="24" height="11" viewBox="0 0 24 11" fill="none">
                          <rect
                            x="0.5"
                            y="0.5"
                            width="20"
                            height="10"
                            rx="2.5"
                            stroke="rgba(255,255,255,0.6)"
                            strokeWidth="1"
                            fill="none"
                          />
                          <rect x="2" y="2" width="17" height="7" rx="1.3" fill="#FFFFFF" />
                          <rect
                            x="21"
                            y="3.5"
                            width="1.6"
                            height="4"
                            rx="0.6"
                            fill="rgba(255,255,255,0.6)"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Header row — menu / NZT VPN / sliders */}
                    <div
                      style={{
                        position: "absolute",
                        top: 44,
                        left: 18,
                        right: 18,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        zIndex: 4,
                      }}
                    >
                      <div style={{
                        width: 30, height: 30, borderRadius: 8,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon name="Menu" size={14} style={{ color: "rgba(255,255,255,0.85)" }} />
                      </div>
                      <span style={{
                        fontSize: 13,
                        fontWeight: 700,
                        color: "#FFFFFF",
                        letterSpacing: "0.02em",
                      }}>
                        NZT VPN
                      </span>
                      <div style={{
                        width: 30, height: 30, borderRadius: 8,
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <Icon name="SlidersHorizontal" size={13} style={{ color: "rgba(255,255,255,0.85)" }} />
                      </div>
                    </div>

                    {/* === VPN APP UI === */}

                    {/* Connection status text */}
                    <div
                      style={{
                        position: "absolute",
                        top: 96,
                        left: 0,
                        right: 0,
                        textAlign: "center",
                        zIndex: 4,
                      }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "4px 10px",
                          borderRadius: 999,
                          background: "rgba(0,255,133,0.10)",
                          border: "1px solid rgba(0,255,133,0.25)",
                          marginBottom: 10,
                        }}
                      >
                        <span
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#00FF85",
                            boxShadow: "0 0 6px #00FF85",
                          }}
                        />
                        <span
                          style={{
                            fontSize: 10,
                            fontWeight: 600,
                            color: "#00FF85",
                            letterSpacing: "0.04em",
                            textTransform: "uppercase",
                          }}
                        >
                          Connected
                        </span>
                      </div>
                      <div
                        style={{
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#FFFFFF",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        Подключено
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "rgba(255,255,255,0.5)",
                          fontWeight: 500,
                          marginTop: 2,
                        }}
                      >
                        Защищено · WireGuard
                      </div>
                    </div>

                    {/* Central CONNECT button — circular power button */}
                    <div
                      style={{
                        position: "absolute",
                        top: "44%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 128,
                        height: 128,
                        zIndex: 4,
                      }}
                    >
                      {/* Soft halo */}
                      <div
                        style={{
                          position: "absolute",
                          inset: -32,
                          background:
                            "radial-gradient(circle, rgba(0,255,133,0.45) 0%, rgba(0,255,133,0.10) 50%, transparent 75%)",
                          filter: "blur(22px)",
                          borderRadius: "50%",
                        }}
                        className="glow-pulse"
                      />

                      {/* Outer thin ring */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          borderRadius: "50%",
                          border: "1px solid rgba(0,255,133,0.25)",
                        }}
                      />
                      {/* Inner button */}
                      <div
                        style={{
                          position: "absolute",
                          inset: 10,
                          borderRadius: "50%",
                          background:
                            "radial-gradient(circle at 50% 35%, #1a1a1a 0%, #0d0d0d 100%)",
                          border: "1px solid rgba(0,255,133,0.45)",
                          boxShadow:
                            "inset 0 1px 0 rgba(255,255,255,0.08), 0 0 24px rgba(0,255,133,0.30)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          gap: 4,
                        }}
                      >
                        <Icon
                          name="Power"
                          size={28}
                          style={{
                            color: "#00FF85",
                            filter: "drop-shadow(0 0 8px rgba(0,255,133,0.7))",
                          }}
                        />
                        <span
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            color: "rgba(255,255,255,0.55)",
                            letterSpacing: "0.18em",
                          }}
                        >
                          ON
                        </span>
                      </div>
                    </div>

                    {/* Server card */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 138,
                        left: 14,
                        right: 14,
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 14,
                        padding: "10px 12px",
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        zIndex: 4,
                      }}
                    >
                      {/* Flag avatar */}
                      <div
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: "50%",
                          background:
                            "linear-gradient(180deg, #EF4444 0%, #EF4444 33%, #FFFFFF 33%, #FFFFFF 66%, #2563EB 66%, #2563EB 100%)",
                          border: "1px solid rgba(255,255,255,0.15)",
                          flexShrink: 0,
                        }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div
                          style={{
                            fontSize: 12,
                            fontWeight: 600,
                            color: "#FFFFFF",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          Нидерланды
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "rgba(255,255,255,0.5)",
                            fontWeight: 500,
                            marginTop: 1,
                          }}
                        >
                          Амстердам · AMS-03
                        </div>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size={14}
                        style={{ color: "rgba(255,255,255,0.4)", flexShrink: 0 }}
                      />
                    </div>

                    {/* Stats row — Ping / Speed / Data */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 76,
                        left: 14,
                        right: 14,
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr",
                        gap: 6,
                        zIndex: 4,
                      }}
                    >
                      {[
                        { label: "Ping", value: "12", unit: "ms" },
                        { label: "Speed", value: "245", unit: "Mbps" },
                        { label: "Time", value: "2:14", unit: "h" },
                      ].map((s) => (
                        <div
                          key={s.label}
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            borderRadius: 10,
                            padding: "7px 6px",
                            textAlign: "center",
                          }}
                        >
                          <div
                            style={{
                              fontSize: 9,
                              color: "rgba(255,255,255,0.45)",
                              fontWeight: 500,
                              textTransform: "uppercase",
                              letterSpacing: "0.06em",
                              marginBottom: 2,
                            }}
                          >
                            {s.label}
                          </div>
                          <div
                            style={{
                              fontSize: 13,
                              fontWeight: 700,
                              color: "#FFFFFF",
                              letterSpacing: "-0.01em",
                              lineHeight: 1,
                            }}
                          >
                            {s.value}
                            <span
                              style={{
                                fontSize: 8,
                                color: "rgba(255,255,255,0.4)",
                                fontWeight: 500,
                                marginLeft: 2,
                              }}
                            >
                              {s.unit}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom secure indicator */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 34,
                        left: 0,
                        right: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 5,
                        zIndex: 4,
                      }}
                    >
                      <Icon
                        name="ShieldCheck"
                        size={11}
                        style={{ color: "#00FF85" }}
                      />
                      <span
                        style={{
                          fontSize: 10,
                          color: "rgba(255,255,255,0.55)",
                          fontWeight: 500,
                          letterSpacing: "0.01em",
                        }}
                      >
                        Ваш трафик защищён
                      </span>
                    </div>

                    {/* Home indicator bar (subtle) */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: 6,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: 90,
                        height: 3,
                        background: "rgba(255,255,255,0.35)",
                        borderRadius: 4,
                        zIndex: 5,
                      }}
                    />

                    {/* Center: NZT pill capsule — HIDDEN (replaced by VPN app UI) */}
                    <div
                      style={{
                        display: "none",
                      }}
                    >
                      <div
                        style={{
                          position: "relative",
                          width: 120,
                          height: 165,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {/* Outer halo glow — calmer minimal */}
                        <div
                          style={{
                            position: "absolute",
                            inset: -50,
                            background:
                              "radial-gradient(circle, rgba(0,255,133,0.55) 0%, rgba(0,255,133,0.15) 45%, transparent 75%)",
                            filter: "blur(28px)",
                            borderRadius: "50%",
                          }}
                          className="glow-pulse"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: -22,
                            background:
                              "radial-gradient(circle, rgba(124,255,178,0.35) 0%, transparent 65%)",
                            filter: "blur(14px)",
                            borderRadius: "50%",
                          }}
                        />



                        {/* 3D Glass NZT pill — elongated vertical capsule */}
                        <svg
                          width="96"
                          height="170"
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
                    </div>

                    {/* Bottom button — hidden, replaced by Connected pill above */}
                    <div style={{ display: "none" }}>Отключить</div>
                  </div>
                </div>

                {/* === FLOATING GLASS SHIELD (REMOVED — minimal premium style) === */}
                <div style={{ display: "none" }}>
                  <svg
                    viewBox="0 0 170 200"
                    width="170"
                    height="200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient
                        id="shieldGlass"
                        x1="0"
                        y1="0"
                        x2="170"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#A8FFCF" stopOpacity="0.75" />
                        <stop offset="50%" stopColor="#00FF88" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#005A2E" stopOpacity="0.7" />
                      </linearGradient>
                      <linearGradient
                        id="shieldEdge"
                        x1="85"
                        y1="0"
                        x2="85"
                        y2="200"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#D4FFE5" />
                        <stop offset="50%" stopColor="#00FF88" />
                        <stop offset="100%" stopColor="#1ED760" />
                      </linearGradient>
                      <radialGradient id="shieldCore" cx="50%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="#C0FFDB" stopOpacity="0.85" />
                        <stop offset="60%" stopColor="#00FF88" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#003A1F" stopOpacity="0.5" />
                      </radialGradient>
                      <linearGradient
                        id="shieldBolt"
                        x1="0"
                        y1="40"
                        x2="0"
                        y2="170"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="45%" stopColor="#A8FFCF" />
                        <stop offset="100%" stopColor="#00FF88" />
                      </linearGradient>
                      <linearGradient
                        id="shieldGloss"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="80"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                      </linearGradient>
                    </defs>

                    {/* Shield path (rounded heraldic shield) */}
                    <path
                      d="M85 10 C 50 18, 25 28, 15 38 L 15 95 C 15 145, 50 180, 85 192 C 120 180, 155 145, 155 95 L 155 38 C 145 28, 120 18, 85 10 Z"
                      fill="url(#shieldCore)"
                      opacity="0.7"
                    />
                    <path
                      d="M85 10 C 50 18, 25 28, 15 38 L 15 95 C 15 145, 50 180, 85 192 C 120 180, 155 145, 155 95 L 155 38 C 145 28, 120 18, 85 10 Z"
                      fill="url(#shieldGlass)"
                      opacity="0.55"
                    />
                    {/* Outer crystal edge */}
                    <path
                      d="M85 10 C 50 18, 25 28, 15 38 L 15 95 C 15 145, 50 180, 85 192 C 120 180, 155 145, 155 95 L 155 38 C 145 28, 120 18, 85 10 Z"
                      fill="none"
                      stroke="url(#shieldEdge)"
                      strokeWidth="2.8"
                    />
                    {/* Inner thin edge */}
                    <path
                      d="M85 18 C 55 25, 32 34, 22 42 L 22 92 C 22 138, 53 170, 85 182 C 117 170, 148 138, 148 92 L 148 42 C 138 34, 115 25, 85 18 Z"
                      fill="none"
                      stroke="rgba(168,255,207,0.45)"
                      strokeWidth="1"
                    />
                    {/* Top glossy reflection */}
                    <path
                      d="M 30 30 Q 85 16 140 30 Q 150 50 140 70 Q 85 56 30 70 Q 20 50 30 30 Z"
                      fill="url(#shieldGloss)"
                      opacity="0.55"
                    />
                    {/* Side rim light */}
                    <path
                      d="M 18 60 Q 16 100 22 145"
                      stroke="rgba(168,255,207,0.55)"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      fill="none"
                    />
                    {/* Lightning bolt */}
                    <path
                      d="M95 42 L60 110 L80 110 L70 168 L110 92 L88 92 L100 42 Z"
                      fill="url(#shieldBolt)"
                    />
                    <path
                      d="M95 42 L60 110 L80 110 L70 168 L110 92 L88 92 L100 42 Z"
                      fill="none"
                      stroke="#E8FFF1"
                      strokeWidth="1.4"
                      opacity="0.85"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M92 50 L66 106"
                      stroke="rgba(255,255,255,0.9)"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                {/* Subtle calm orbital ellipses behind the phone */}
                <svg
                  viewBox="0 0 700 400"
                  style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 700,
                    height: 400,
                    pointerEvents: "none",
                    zIndex: 0,
                    opacity: 0.55,
                  }}
                >
                  <ellipse
                    cx="350"
                    cy="200"
                    rx="320"
                    ry="70"
                    fill="none"
                    stroke="rgba(0,255,133,0.30)"
                    strokeWidth="1"
                  />
                  <ellipse
                    cx="350"
                    cy="200"
                    rx="260"
                    ry="56"
                    fill="none"
                    stroke="rgba(0,255,133,0.18)"
                    strokeWidth="1"
                  />
                </svg>
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