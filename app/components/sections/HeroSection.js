'use client';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    // Trigger hero animations
    el.querySelectorAll('[data-anim]').forEach((node, i) => {
      setTimeout(() => node.classList.add(styles.vis), i * 90);
    });
  }, []);

  return (
    <section id="hero" className={styles.hero} ref={heroRef}>
      {/* Decorative arc lines */}
      <svg className={styles.heroArcs} viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="420" r="200" stroke="#b4904f" strokeWidth="0.8"/>
        <circle cx="200" cy="420" r="280" stroke="#b4904f" strokeWidth="0.6"/>
        <circle cx="200" cy="420" r="360" stroke="#b4904f" strokeWidth="0.5"/>
        <circle cx="200" cy="420" r="440" stroke="#b4904f" strokeWidth="0.4"/>
        <line x1="200" y1="0" x2="200" y2="800" stroke="#b4904f" strokeWidth="0.5" strokeDasharray="4 6"/>
        <line x1="0" y1="420" x2="600" y2="420" stroke="#b4904f" strokeWidth="0.5" strokeDasharray="4 6"/>
      </svg>

      {/* Hero photo */}
      <div className={`${styles.heroPhoto} ${styles.anim}`} data-anim>
        <Image
          src="/images/hero_living_room.png"
          alt="Luxury living room - The Spatial Edit"
          fill
          priority
          style={{ objectFit: 'cover', objectPosition: '40% top' }}
        />
        <div className={styles.heroPhotoFade} />
      </div>

      {/* Vertical line decorations */}
      <div className={styles.heroVline} />
      <div className={`${styles.heroDia} ${styles.heroDiaTop}`} />
      <div className={`${styles.heroDia} ${styles.heroDiaBot}`} />
      <div className={styles.heroScroll}>Scroll to Explore</div>

      {/* Hero content */}
      <div className={styles.heroContent}>
        <p className={`${styles.hEyebrow} ${styles.anim}`} data-anim>
          Spatial Design Studio <span className={styles.dot}>·</span>
          Hyderabad <span className={styles.dot}>·</span>
          Est. 2026
        </p>

        <h1 className={`${styles.hHeadline} ${styles.anim}`} data-anim>
          Spaces designed<br />to work.
        </h1>
        <span className={`${styles.hGold} ${styles.anim}`} data-anim>Finished to last.</span>

        <p className={`${styles.hDesc} ${styles.anim}`} data-anim>
          We believe the most beautiful thing a home can do<br />
          is make your life feel effortless. That begins with<br />
          spatial intelligence — long before aesthetics.
        </p>

        <div className={`${styles.hActions} ${styles.anim}`} data-anim>
          <a href="#contact" className={styles.hBtn}>Book a Discovery Call&nbsp;→</a>
          <a href="#insights" className={styles.hWatch}>
            <div className={styles.hWatchCircle}>
              <svg viewBox="0 0 10 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0 L10 6 L0 12 Z" fill="currentColor"/>
              </svg>
            </div>
            <div className={styles.hWatchInfo}>
              <span className={styles.hWatchLabel}>Watch Story</span>
              <span className={styles.hWatchDur}>2:15 Min</span>
            </div>
          </a>
        </div>
      </div>

      {/* Bottom center bar */}
      <div className={`${styles.heroBottom} ${styles.anim}`} data-anim>
        <div className={styles.hbDiamond} />
        <p className={styles.hbTagline}>
          Most interior design starts with how it looks.<br />
          We start with how it works.
        </p>
        <div className={styles.hbTick} />
      </div>
    </section>
  );
}
