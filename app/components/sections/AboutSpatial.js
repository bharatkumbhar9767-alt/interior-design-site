import Image from 'next/image';
import styles from './AboutSpatial.module.css';

export default function AboutSpatial() {
  return (
    <section id="about" className={styles.section}>
      {/* Side label removed per request */}

      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.overline}>About Spatial Design</div>
          <h2 className={styles.headline}>
            Space First.<br />Style Second.<br />
            <span className={styles.gold}>Always</span>
          </h2>
          <p className={styles.descLarge}>
            Spatial design is the discipline of understanding how a space functions.
          </p>
          <p className={styles.desc}>
            It considers the physical and psychological experience of being inside a room — how you enter it, how you move through it, where your eye travels, and how the space makes you feel over time.
          </p>

          <div className={styles.featuresBox}>
            {[
              { icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" strokeWidth="1.3"><rect x="5" y="5" width="14" height="14" rx="2" strokeDasharray="3 3"/><circle cx="12" cy="12" r="1" fill="var(--gold)"/></svg>, title: 'Circulation', sub: 'How you move\nthrough the space.' },
              { icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" strokeWidth="1.3"><rect x="4" y="4" width="16" height="16" rx="1"/><line x1="12" y1="4" x2="12" y2="20"/><line x1="4" y1="12" x2="20" y2="12"/></svg>, title: 'Proportion', sub: 'How the space is\nscaled and balanced.' },
              { icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" strokeWidth="1.3"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>, title: 'Light', sub: 'How natural light\nshapes the space.' },
              { icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" fill="none" strokeWidth="1.3"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><circle cx="12" cy="11" r="3"/></svg>, title: 'Psychology', sub: 'How the space\nmakes you feel.' },
            ].map((f) => (
              <div className={styles.feature} key={f.title}>
                <div className={styles.fIcon}>{f.icon}</div>
                <h4>{f.title}</h4>
                <p>{f.sub}</p>
              </div>
            ))}
          </div>

          <div className={styles.statement}>
            <p>A home that works beautifully is never by chance.<br />It is designed with intelligence.</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.blueprintWrap}>
            <Image
              src="/images/floor_plan.png"
              alt="Spatial Blueprint"
              fill
              priority
              style={{objectFit:'cover', objectPosition:'center', borderRadius:'inherit', mixBlendMode:'multiply', opacity:0.95}}
            />
            {/* Floating info cards */}
            {[
              { pos: 'c1', num: '01', title: 'Circulation', text: 'We map how you move through every room.', img: '/images/card_circulation.png' },
              { pos: 'c2', num: '02', title: 'Proportion', text: 'Scale determines how a space feels.', img: '/images/card_proportion.png' },
              { pos: 'c3', num: '03', title: 'Light', text: 'We study how natural light moves through your home.', img: '/images/card_light.png' },
            ].map((c) => (
              <div className={`${styles.bpCard} ${styles[c.pos]}`} key={c.num}>
                <div className={styles.bpCardDot} />
                <div className={styles.cLeft}>
                  <div className={styles.cTop}><span className={styles.cNum}>{c.num}</span><div className={styles.cLine}/></div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
                <div className={styles.cRight}>
                  <Image src={c.img} alt={c.title} fill style={{objectFit:'contain', filter:'sepia(100%) saturate(400%) hue-rotate(-10deg) brightness(0.8) drop-shadow(0 10px 20px rgba(184,150,62,0.4))', transform:'scale(1.1)'}} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}