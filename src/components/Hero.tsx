import { OsDownloadButton } from "@/components/OsDownloadButton";
import SearchRecordsIcon from "@/assets/search-records.svg?react";
import WandSparklesIcon from "@/assets/wand-sparkles.svg?react";
import MessageQuestionIcon from "@/assets/message-question.svg?react";
import DotIcon from "@/assets/dot.svg?react";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  radius: number;
  phase: number;
  speed: number;
};

type ShootingStar = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  trailLength: number;
};

const Home = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const headingText = "Your AI assistant for meetings";
  const words = headingText.split(" ");
  
  // Calculate delays: 0.1s between words for heading
  const wordDelay = 0.2;
  const totalHeadingDelay = words.length * wordDelay;
  const subheadingDelay = totalHeadingDelay + 0.2;
  const buttonsDelay = subheadingDelay + 0.4;
  const demoCardDelay = buttonsDelay + 0.7;
  
  // AI demo text animation: 29 words, 0.05s each = 1.45s, plus animation duration (0.5s)
  const aiResponseWords = 29;
  const aiResponseDelay = demoCardDelay + 0.5 + (aiResponseWords * 0.05);
  const demoBottomSectionDelay = aiResponseDelay;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    starsRef.current = Array.from({ length: 200 }, () => ({
      x: centerX + (Math.random() - 0.5) * 3000,
      y: centerY + (Math.random() - 0.5) * 3000,
      radius: 0.1 + Math.random(),
      phase: Math.random() * 2 * Math.PI,
      speed: 2 + Math.random() * 3
    }));

    let animationFrameId = 0;
    let startTime = 0;
    let lastFrameTimestamp = 0;
    let lastShootingStarSpawn = 0;
    const margin = 200;
    const shootingStarSpawnInterval = 5000;
    const maxShootingStars = 1;

    const spawnShootingStar = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const topHalfLimit = viewportHeight * 0.5;
      const startX = viewportWidth * (0.2 + Math.random() * 0.8);
      const startY = -20 + Math.random() * (topHalfLimit * 0.35);
      const speed = 780 + Math.random() * 220;

      shootingStarsRef.current.push({
        x: startX,
        y: startY,
        vx: -speed * (0.58 + Math.random() * 0.14),
        vy: speed * (0.52 + Math.random() * 0.16),
        life: 0,
        maxLife: 1.1 + Math.random() * 0.5,
        trailLength: 70 + Math.random() * 40
      });
    };

    const rotatePoint = (
      x: number,
      y: number,
      px: number,
      py: number,
      angle: number
    ) => {
      const dx = x - px;
      const dy = y - py;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      return {
        x: px + dx * cos - dy * sin,
        y: py + dx * sin + dy * cos
      };
    };

    const render = (timestamp: number) => {
      if (startTime === 0) {
        startTime = timestamp;
      }
      if (lastFrameTimestamp === 0) {
        lastFrameTimestamp = timestamp;
      }

      const elapsed = timestamp - startTime;
      const deltaSeconds = (timestamp - lastFrameTimestamp) / 1000;
      lastFrameTimestamp = timestamp;
      const angle = (elapsed / 360000) * 2 * Math.PI;
      const px = window.innerWidth * 1.25;
      const py = window.innerHeight * 1.5;
      const topHalfLimit = window.innerHeight * 0.5;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.translate(px, py);
      ctx.rotate(angle);
      ctx.translate(-px, -py);

      for (const star of starsRef.current) {
        const rotated = rotatePoint(star.x, star.y, px, py, angle);
        if (
          rotated.x < -margin ||
          rotated.x > window.innerWidth + margin ||
          rotated.y < -margin ||
          rotated.y > window.innerHeight + margin
        ) {
          const targetX = -margin + Math.random() * (window.innerWidth + margin * 2);
          const targetY = -margin + Math.random() * (window.innerHeight + margin * 2);
          const unrotated = rotatePoint(targetX, targetY, px, py, -angle);
          star.x = unrotated.x;
          star.y = unrotated.y;
        }

        const opacity =
          0.65 +
          0.35 *
            Math.sin((elapsed / (star.speed * 1000)) * 2 * Math.PI + star.phase);
        ctx.globalAlpha = opacity;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = 1;

      if (
        elapsed - lastShootingStarSpawn >= shootingStarSpawnInterval &&
        shootingStarsRef.current.length < maxShootingStars
      ) {
        spawnShootingStar();
        lastShootingStarSpawn = elapsed;
      }

      shootingStarsRef.current = shootingStarsRef.current.filter((shootingStar) => {
        shootingStar.x += shootingStar.vx * deltaSeconds;
        shootingStar.y += shootingStar.vy * deltaSeconds;
        shootingStar.life += deltaSeconds;

        const lifeProgress = shootingStar.life / shootingStar.maxLife;
        const fadeOut = lifeProgress > 0.65 ? 1 - (lifeProgress - 0.65) / 0.35 : 1;
        const alpha = Math.max(0, fadeOut);

        const directionLength = Math.hypot(shootingStar.vx, shootingStar.vy) || 1;
        const dirX = shootingStar.vx / directionLength;
        const dirY = shootingStar.vy / directionLength;
        const trailEndX = shootingStar.x - dirX * shootingStar.trailLength;
        const trailEndY = shootingStar.y - dirY * shootingStar.trailLength;
        const gradient = ctx.createLinearGradient(
          shootingStar.x,
          shootingStar.y,
          trailEndX,
          trailEndY
        );

        gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.72})`);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(trailEndX, trailEndY);
        ctx.stroke();

        return (
          shootingStar.life < shootingStar.maxLife &&
          shootingStar.y <= topHalfLimit &&
          shootingStar.x >= -margin
        );
      });

      animationFrameId = window.requestAnimationFrame(render);
    };

    animationFrameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="flex items-center justify-center relative pt-36 mb-44 bg-[hsl(var(--background))]"
    >
      {/* Light mode background - top 75% */}
      <div 
        className="hero-bg-light absolute top-0 left-0 right-0 bg-no-repeat"
        style={{
          backgroundImage: 'url(/hero/bg.svg)',
          height: '130%',
          backgroundPosition: 'center top',
          backgroundSize: 'max(1700px, 100vw) auto',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 35%, transparent 100%)'
        }}
      />

      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute top-0 left-0 z-[1] h-full w-full"
      />
      
      <div className="container-custom z-10 mx-4 md:mx-8 lg:mx-12 relative">
        {/* Main content container - centered horizontally */}
        <div className="flex flex-col items-center text-center lg:max-w-4xl lg:mx-auto px-2 sm:px-4">
          {/* Text content section */}
          <div className="mb-20">
            <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl max-w-xl font-medium text-primary-foreground mb-10 leading-tight">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="animate-word"
                  style={{
                    animationDelay: `${index * 0.15}s`,
                    marginRight: '0.25em'
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-lg text-primary-foreground max-w-lg font-light mx-auto px-2 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${subheadingDelay}s` }}
            >
              Takes perfect notes, answers questions in real time, and makes you the most prepared person on every call.
            </p>
          </div>

          {/* Download buttons section — scroll anchor for sticky CTA on HomePage */}
          <div 
            id="hero-download-cta"
            className="mb-32 opacity-0 animate-fade-in-up"
            style={{ animationDelay: `${buttonsDelay}s` }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <OsDownloadButton />
            </div>
          </div>

          {/* AI Assistant Demo Card */}
          <div 
            className="w-full max-w-xl opacity-0 animate-expand-down"
            style={{ animationDelay: `${demoCardDelay}s` }}
          >
            <div 
              className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-b from-[#21232a]/50 to-[#21232a]/80 p-5 backdrop-blur-sm"
              style={{
                boxShadow: 'rgba(207, 226, 255, 0.24) 0px 0px 0px 1px, rgba(255, 255, 255, 0.8) 0px -0.5px 0px 0px, rgba(0, 0, 0, 0) 0px 174px 49px 0px, rgba(0, 0, 0, 0.08) 0px 112px 45px 0px, rgba(0, 0, 0, 0.14) 0px 63px 38px 0px, rgba(0, 0, 0, 0.16) 0px 28px 28px 0px, rgba(0, 0, 0, 0.2) 0px 7px 15px 0px'
              }}
            >
              {/* Question and Response */}
              <div className="flex h-fit w-full flex-col gap-2 mb-20">
                {/* User Question Bubble */}
                <div className="flex w-full justify-end">
                  <div 
                    className="relative overflow-hidden rounded-2xl px-3 py-1 text-base font-light lg:text-lg text-primary-foreground"
                    style={{
                      background: 'linear-gradient(to bottom, #0743a7, #033381)',
                      borderBottomRightRadius: '4px',
                      borderTop: '1px solid rgba(255, 255, 255, 0.49)',
                      borderBottom: '1px solid rgba(30, 5, 5, 0.49)'
                    }}
                  >
                    What should I say?
                  </div>
                </div>

                {/* AI Response */}
                <div className="flex flex-col gap-1">
                  {/* Searched Records Indicator */}
                  <div className="flex items-center gap-1.5 text-sm font-light lg:text-base text-white/60">
                    <SearchRecordsIcon className="w-4 h-4 -translate-y-px" />
                    <p>Searched records</p>
                  </div>

                  {/* AI Response Text */}
                  <div className="w-full max-w-[90%] text-base leading-[1.3] font-light tracking-[-0.005em] text-primary-foreground lg:text-lg text-left">
                    <p className="text-left">
                      {['"So', 'just', 'to', 'recap—you', 'need', 'new', 'cabinets', 'and', 'lighting.', "I'll", 'send', 'you', 'a', 'quote', 'within', 'the', 'hour.', "Let's", 'do', 'a', 'kickoff', 'call', 'next', 'Wednesday', 'if', 'that', 'works', 'for', 'you?"'].map((word, index) => (
                        <span 
                          key={index}
                          className="animate-word mr-1"
                          style={{ animationDelay: `${demoCardDelay + 0.5 + (index * 0.05)}s` }}
                        >
                          {word}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Section - Metadata and Input */}
              <div 
                className="flex w-full flex-col gap-2 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${demoBottomSectionDelay}s` }}
              >
                {/* Metadata Row */}
                <div className="flex items-center gap-1 px-1.5 text-sm">
                  <div className="flex items-center gap-1 text-[#EDEEF2]">
                    <WandSparklesIcon className="w-4 h-4 text-white/60" />
                    What should I say?
                  </div>
                  <DotIcon className="hidden lg:block w-4 h-4 text-white/60" />
                  <div className="hidden lg:flex items-center gap-1 text-[#EDEEF2]">
                    <MessageQuestionIcon className="w-4 h-4 text-white/60" />
                    Follow-up questions
                  </div>
                </div>

                {/* Input Field */}
                <div className="flex h-12 w-full items-center rounded-xl border border-white/20 bg-[#1a1e2d]/50 px-3 py-2 font-medium text-[#7A7A84]">
                  <span>Ask, </span>
                  <span className="mx-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                    ⌘
                  </span>
                  <span className="mr-1 inline-flex h-fit items-center justify-center rounded-md border-[0.5px] border-[#80828C] px-0.5 py-px text-[11px] text-[#80828C]">
                    ⏎
                  </span>
                  <span> to start typing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
