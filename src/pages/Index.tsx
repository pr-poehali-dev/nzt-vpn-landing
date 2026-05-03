import { useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const IPHONE_IMG = "https://cdn.poehali.dev/projects/d95b19c0-a2f8-4978-9726-cdd1105ad3bd/files/5944eaab-97bb-4462-b0c9-1bbb3277c0e1.jpg";

const NztLogo = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size * 0.7}
    height={size}
    viewBox="0 0 100 144"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block", filter: "drop-shadow(0 0 8px rgba(0,255,133,0.35))" }}
  >
    <defs>
      <linearGradient id="nztLogoGrad" x1="0" y1="0" x2="100" y2="144" gradientUnits="userSpaceOnUse">
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
      { threshold: 0.12 }
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
    <div className="min-h-screen" style={{ backgroundColor: "#0B0B0B", fontFamily: "'Golos Text', sans-serif" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(11,11,11,0.82)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center" style={{ gap: 10 }}>
            <NztLogo size={28} />
            <span style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>NZT VPN</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <button className="nav-link" onClick={() => scrollTo("features")}>Возможности</button>
            <button className="nav-link" onClick={() => scrollTo("devices")}>Устройства</button>
            <button className="nav-link" onClick={() => scrollTo("payment")}>Тарифы</button>
          </div>
          <button className="btn-primary" style={{ padding: "10px 24px", fontSize: 14 }}>
            Подключиться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero-bg relative min-h-screen flex items-center pt-20" id="hero">
        <div style={{
          position: "absolute", top: "25%", right: "20%",
          width: 700, height: 700,
          background: "radial-gradient(circle, rgba(0,255,133,0.07) 0%, transparent 70%)",
          borderRadius: "50%", pointerEvents: "none"
        }} className="glow-pulse" />

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center" style={{ minHeight: "calc(100vh - 80px)" }}>

            {/* Left */}
            <div className="py-20">
              <div className="trust-badge w-fit mb-8 fade-in-up">
                <div className="green-dot" />
                <span>Работает прямо сейчас · 99.9% uptime</span>
              </div>

              <h1 className="fade-in-up delay-1" style={{
                fontSize: "clamp(52px, 7vw, 88px)",
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                marginBottom: 16,
                color: "#FFFFFF"
              }}>
                NZT VPN
              </h1>

              <h2 className="nzt-gradient-text fade-in-up delay-2" style={{
                fontSize: "clamp(28px, 4vw, 50px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: 24
              }}>
                Твоя таблетка<br />от блокировок
              </h2>

              <p className="fade-in-up delay-3" style={{ fontSize: 18, color: "#CFCFCF", lineHeight: 1.65, marginBottom: 40, maxWidth: 440 }}>
                Полная приватность. Высокая скорость.<br />Доступ без ограничений.
              </p>

              <div className="flex flex-wrap gap-4 fade-in-up delay-4">
                <button className="btn-primary">Подключиться</button>
                <button className="btn-secondary">Попробовать бесплатно</button>
              </div>

              <div className="flex gap-10 mt-14 fade-in-up delay-4">
                <div>
                  <div className="stat-number nzt-gradient-text">5M+</div>
                  <div style={{ fontSize: 13, color: "#8A8A8A", marginTop: 4, fontWeight: 500 }}>Пользователей</div>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div>
                  <div className="stat-number nzt-gradient-text">60+</div>
                  <div style={{ fontSize: 13, color: "#8A8A8A", marginTop: 4, fontWeight: 500 }}>Серверов</div>
                </div>
                <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
                <div>
                  <div className="stat-number nzt-gradient-text">0</div>
                  <div style={{ fontSize: 13, color: "#8A8A8A", marginTop: 4, fontWeight: 500 }}>Логов</div>
                </div>
              </div>
            </div>

            {/* Right — iPhone CSS Mockup */}
            <div className="flex justify-center items-center py-20">
              <div className="float-anim relative" style={{ width: 300 }}>
                {/* Ambient glow */}
                <div style={{
                  position: "absolute", inset: -80,
                  background: "radial-gradient(circle, rgba(0,255,133,0.18) 0%, transparent 70%)",
                  borderRadius: "50%", filter: "blur(30px)"
                }} className="glow-pulse" />

                {/* Phone frame */}
                <div style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "9 / 19",
                  background: "linear-gradient(145deg, #2a2a2a 0%, #0a0a0a 50%, #1a1a1a 100%)",
                  borderRadius: 44,
                  padding: 10,
                  boxShadow: `
                    0 40px 80px rgba(0,0,0,0.7),
                    0 0 0 1.5px rgba(255,255,255,0.08),
                    inset 0 0 0 1px rgba(255,255,255,0.04),
                    0 0 60px rgba(0,255,133,0.15)
                  `,
                  zIndex: 1
                }}>
                  {/* Screen */}
                  <div style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    background: "radial-gradient(ellipse at 50% 30%, #0a3a26 0%, #051a12 40%, #000000 100%)",
                    borderRadius: 36,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "44px 24px 28px"
                  }}>
                    {/* Notch */}
                    <div style={{
                      position: "absolute",
                      top: 12,
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: 95,
                      height: 28,
                      background: "#000000",
                      borderRadius: 999,
                      zIndex: 5
                    }} />

                    {/* Soft signal waves — animated radial pulses */}
                    <div className="signal-wave" style={{
                      position: "absolute",
                      top: "44%",
                      left: "50%",
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      border: "1px solid rgba(0,255,133,0.35)",
                      pointerEvents: "none"
                    }} />
                    <div className="signal-wave" style={{
                      position: "absolute",
                      top: "44%",
                      left: "50%",
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      border: "1px solid rgba(0,255,133,0.25)",
                      pointerEvents: "none",
                      animationDelay: "1.2s"
                    }} />
                    <div className="signal-wave" style={{
                      position: "absolute",
                      top: "44%",
                      left: "50%",
                      width: 140,
                      height: 140,
                      borderRadius: "50%",
                      border: "1px solid rgba(0,255,133,0.18)",
                      pointerEvents: "none",
                      animationDelay: "2.4s"
                    }} />

                    {/* Top wordmark */}
                    <div style={{
                      fontSize: 10,
                      color: "rgba(255,255,255,0.5)",
                      fontWeight: 600,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      marginTop: 8,
                      position: "relative",
                      zIndex: 2
                    }}>
                      NZT VPN
                    </div>

                    {/* Center: logo + Подключено */}
                    <div style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 18,
                      position: "relative",
                      zIndex: 2
                    }}>
                      <div style={{ position: "relative", width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {/* Multi-layer glow */}
                        <div style={{
                          position: "absolute",
                          inset: -36,
                          background: "radial-gradient(circle, rgba(0,255,133,0.55) 0%, rgba(0,255,133,0.2) 40%, transparent 70%)",
                          filter: "blur(20px)",
                          borderRadius: "50%"
                        }} className="glow-pulse" />
                        <div style={{
                          position: "absolute",
                          inset: -12,
                          background: "radial-gradient(circle, rgba(124,255,178,0.4) 0%, transparent 60%)",
                          filter: "blur(8px)",
                          borderRadius: "50%"
                        }} />

                        {/* Pure SVG logo — no background, no container */}
                        <svg
                          width="64"
                          height="92"
                          viewBox="0 0 100 144"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{
                            position: "relative",
                            zIndex: 1,
                            filter: "drop-shadow(0 0 18px rgba(0,255,133,0.85)) drop-shadow(0 0 36px rgba(0,255,133,0.4))"
                          }}
                        >
                          <defs>
                            <linearGradient id="nztGrad" x1="0" y1="0" x2="100" y2="144" gradientUnits="userSpaceOnUse">
                              <stop offset="0%" stopColor="#7CFFB2" />
                              <stop offset="50%" stopColor="#00FF85" />
                              <stop offset="100%" stopColor="#1ED760" />
                            </linearGradient>
                          </defs>
                          {/* Pill outline */}
                          <rect
                            x="2"
                            y="2"
                            width="96"
                            height="140"
                            rx="48"
                            ry="48"
                            fill="none"
                            stroke="url(#nztGrad)"
                            strokeWidth="3"
                            opacity="0.85"
                          />
                          {/* Lightning bolt filled */}
                          <path
                            d="M58 20 L30 78 L48 78 L40 124 L72 60 L52 60 L62 20 Z"
                            fill="url(#nztGrad)"
                          />
                        </svg>
                      </div>
                      <div style={{
                        fontSize: 22,
                        fontWeight: 600,
                        color: "#FFFFFF",
                        letterSpacing: "-0.02em",
                        textShadow: "0 0 20px rgba(0,255,133,0.3)"
                      }}>
                        Подключено
                      </div>
                      <div style={{
                        fontSize: 11,
                        color: "rgba(255,255,255,0.45)",
                        fontWeight: 500,
                        letterSpacing: "0.04em"
                      }}>
                        Амстердам · 245 Mbps
                      </div>
                    </div>

                    {/* Bottom button */}
                    <div style={{
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
                      zIndex: 2
                    }}>
                      Отключить
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="separator-line" style={{ maxWidth: "80%", margin: "0 auto" }} />

      {/* FEATURES */}
      <section id="features" className="section-bg py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="Zap" size={14} style={{ color: "#00FF85" }} />
              <span>Возможности</span>
            </div>
            <h2 className="fade-in-up delay-1" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#FFFFFF" }}>
              Всё что нужно —<br />
              <span className="nzt-gradient-text">и ничего лишнего</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "Shield", title: "Полная приватность", desc: "AES-256 шифрование. Ни один байт данных не логируется. Твоя активность — только твоя.", delay: "delay-1" },
              { icon: "Server", title: "Стабильные сервера", desc: "60+ серверов в 30 странах. Умный выбор сервера для минимального пинга.", delay: "delay-2" },
              { icon: "Smartphone", title: "Все устройства", desc: "iOS, Android, macOS, Windows, Linux. Одна подписка — до 6 устройств одновременно.", delay: "delay-3" },
              { icon: "Gauge", title: "Высокая скорость", desc: "До 1 Гбит/с. WireGuard-протокол — без компромиссов между защитой и скоростью.", delay: "delay-4" }
            ].map((f) => (
              <div key={f.title} className={`feature-card fade-in-up ${f.delay}`}>
                <div className="icon-box">
                  <Icon name={f.icon} size={22} style={{ color: "#00FF85" }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", marginBottom: 10, letterSpacing: "-0.01em" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="separator-line" style={{ maxWidth: "80%", margin: "0 auto" }} />

      {/* DEVICES */}
      <section id="devices" className="py-32" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="Monitor" size={14} style={{ color: "#00FF85" }} />
              <span>Устройства</span>
            </div>
            <h2 className="fade-in-up delay-1" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#FFFFFF" }}>
              Работает везде,<br />
              <span className="nzt-gradient-text">где ты есть</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "Smartphone", title: "Смартфон", sub: "iOS & Android", desc: "Одно касание — и ты защищён. Приложение запускается за секунды.", delay: "delay-1" },
              { icon: "Laptop", title: "Компьютер", sub: "macOS & Windows", desc: "Нативное приложение с умным разделением трафика. Работай без тормозов.", delay: "delay-2" },
              { icon: "Tablet", title: "Планшет", sub: "iPad & Android", desc: "Оптимизированный интерфейс для большого экрана. Полный контроль.", delay: "delay-3" }
            ].map((d) => (
              <div key={d.title} className={`device-card fade-in-up ${d.delay}`}>
                <div style={{
                  width: 64, height: 64, borderRadius: 18,
                  background: "linear-gradient(135deg, rgba(0,255,133,0.12), rgba(30,215,96,0.06))",
                  border: "1px solid rgba(0,255,133,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 20px"
                }}>
                  <Icon name={d.icon} size={28} style={{ color: "#00FF85" }} />
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em", marginBottom: 4 }}>{d.title}</h3>
                <div style={{ fontSize: 13, color: "#00FF85", fontWeight: 600, marginBottom: 12 }}>{d.sub}</div>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.65 }}>{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mt-12 fade-in-up">
            {["iOS", "Android", "macOS", "Windows", "Linux", "Router"].map((p) => (
              <div key={p} style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 8, padding: "8px 16px",
                fontSize: 13, color: "#CFCFCF", fontWeight: 600
              }}>{p}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="separator-line" style={{ maxWidth: "80%", margin: "0 auto" }} />

      {/* PAYMENT */}
      <section id="payment" className="section-bg py-32">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="trust-badge w-fit mx-auto mb-6 fade-in-up">
              <Icon name="CreditCard" size={14} style={{ color: "#00FF85" }} />
              <span>Оплата</span>
            </div>
            <h2 className="fade-in-up delay-1" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, letterSpacing: "-0.03em", color: "#FFFFFF" }}>
              Удобно и анонимно
            </h2>
            <p className="fade-in-up delay-2" style={{ fontSize: 16, color: "#8A8A8A", marginTop: 12 }}>
              Любой способ оплаты — подключение через минуту
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: "Zap", title: "СБП", desc: "Система быстрых платежей. Мгновенное зачисление без комиссии.", tag: "Популярно" },
              { icon: "CreditCard", title: "Банковские карты", desc: "Visa, Mastercard, МИР. Оплата в один клик с любой карты.", tag: null },
              { icon: "Bitcoin", title: "Криптовалюта", desc: "Bitcoin, USDT, ETH. Максимальная анонимность оплаты.", tag: "Анонимно" }
            ].map((p) => (
              <div key={p.title} className="payment-card fade-in-up flex-col items-start relative" style={{ borderRadius: 20, padding: "28px", flexDirection: "column", alignItems: "flex-start" }}>
                {p.tag && (
                  <div style={{
                    position: "absolute", top: 16, right: 16,
                    background: "rgba(0,255,133,0.1)", border: "1px solid rgba(0,255,133,0.25)",
                    borderRadius: 6, padding: "3px 10px",
                    fontSize: 11, color: "#00FF85", fontWeight: 700
                  }}>{p.tag}</div>
                )}
                <div style={{
                  width: 48, height: 48, borderRadius: 14,
                  background: "rgba(0,255,133,0.08)", border: "1px solid rgba(0,255,133,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
                }}>
                  <Icon name={p.icon} size={20} style={{ color: "#00FF85" }} />
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#FFFFFF", marginBottom: 8, letterSpacing: "-0.01em" }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing teaser */}
          <div className="glass-green fade-in-up" style={{ borderRadius: 24, padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: 13, color: "#00FF85", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: 16 }}>
              Специальное предложение
            </div>
            <div style={{ fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 8 }}>
              от 99 ₽
              <span style={{ fontSize: 20, color: "#8A8A8A", fontWeight: 500 }}> / мес</span>
            </div>
            <p style={{ fontSize: 15, color: "#8A8A8A", marginBottom: 28 }}>Все устройства · Без логов · Отмена в любой момент</p>
            <button className="btn-primary" style={{ fontSize: 16, padding: "16px 48px" }}>
              Начать бесплатно
            </button>
          </div>
        </div>
      </section>

      <div className="separator-line" style={{ maxWidth: "80%", margin: "0 auto" }} />

      {/* TRUST */}
      <section className="py-32" style={{ backgroundColor: "#0B0B0B" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="fade-in-up" style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 900, letterSpacing: "-0.04em",
            color: "#FFFFFF", lineHeight: 1.1, marginBottom: 24
          }}>
            Без логов.<br />
            <span className="nzt-gradient-text">Без ограничений.</span><br />
            Без компромиссов.
          </h2>

          <p className="fade-in-up delay-1" style={{ fontSize: 17, color: "#8A8A8A", lineHeight: 1.7, maxWidth: 520, margin: "0 auto 48px" }}>
            Мы не храним историю браузера, IP-адреса, DNS-запросы и любые другие данные, которые могут идентифицировать тебя.
          </p>

          <div className="flex flex-wrap justify-center gap-3 fade-in-up delay-2">
            {[
              { icon: "Lock", label: "AES-256 шифрование" },
              { icon: "EyeOff", label: "Zero-log политика" },
              { icon: "Globe", label: "WireGuard протокол" },
              { icon: "ShieldCheck", label: "Kill Switch" },
              { icon: "Server", label: "RAM-only серверы" },
              { icon: "UserX", label: "Анонимная регистрация" }
            ].map((b) => (
              <div key={b.label} className="trust-badge">
                <Icon name={b.icon} size={14} style={{ color: "#00FF85" }} />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="separator-line" style={{ maxWidth: "80%", margin: "0 auto" }} />

      {/* CTA */}
      <section className="section-bg py-40 relative overflow-hidden">
        <div style={{
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(0,255,133,0.07) 0%, transparent 70%)",
          borderRadius: "50%",
          position: "absolute", left: "50%", top: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none"
        }} className="glow-pulse" />

        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="fade-in-up" style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 900, letterSpacing: "-0.04em",
            color: "#FFFFFF", lineHeight: 1.1, marginBottom: 20
          }}>
            Готов к свободному<br />
            <span className="nzt-gradient-text">интернету?</span>
          </h2>

          <p className="fade-in-up delay-1" style={{ fontSize: 17, color: "#8A8A8A", marginBottom: 40 }}>
            Присоединяйся к 5 миллионам пользователей NZT VPN
          </p>

          <div className="flex flex-wrap justify-center gap-4 fade-in-up delay-2">
            <button className="btn-primary" style={{ fontSize: 16, padding: "18px 52px" }}>Начать сейчас</button>
            <button className="btn-secondary" style={{ fontSize: 16, padding: "18px 40px" }}>Узнать больше</button>
          </div>

          <p className="fade-in-up delay-3" style={{ fontSize: 13, color: "#8A8A8A", marginTop: 20 }}>
            7 дней бесплатно · Без привязки карты · Отмена в любой момент
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", backgroundColor: "#0B0B0B" }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div>
              <div className="flex items-center mb-4" style={{ gap: 10 }}>
                <NztLogo size={28} />
                <span style={{ fontSize: 18, fontWeight: 700, color: "#FFFFFF", letterSpacing: "-0.02em" }}>NZT VPN</span>
              </div>
              <p style={{ fontSize: 14, color: "#8A8A8A", lineHeight: 1.7, maxWidth: 260 }}>
                Приватность — это право,<br />а не привилегия.
              </p>
            </div>

            <div className="flex flex-wrap gap-16">
              <div>
                <div style={{ fontSize: 12, color: "#8A8A8A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Продукт</div>
                {["Возможности", "Устройства", "Тарифы", "Приложение"].map((l) => (
                  <div key={l} className="nav-link mb-3" style={{ display: "block" }}>{l}</div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: 12, color: "#8A8A8A", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 16 }}>Компания</div>
                {["О нас", "Блог", "Конфиденциальность", "Условия"].map((l) => (
                  <div key={l} className="nav-link mb-3" style={{ display: "block" }}>{l}</div>
                ))}
              </div>
            </div>
          </div>

          <div className="separator-line mt-10 mb-6" />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p style={{ fontSize: 13, color: "#8A8A8A" }}>© 2026 NZT VPN. Все права защищены.</p>
            <div className="flex items-center gap-2">
              <div className="green-dot" style={{ width: 6, height: 6 }} />
              <span style={{ fontSize: 13, color: "#8A8A8A" }}>Все серверы работают нормально</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}