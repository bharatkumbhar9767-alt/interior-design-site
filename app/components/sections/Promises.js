import styles from './Promises.module.css';

const promises = [
  {
    title: 'Documented Process',
    desc: 'Every step is planned, documented, and agreed before execution begins. No assumptions. No ambiguity. Just clarity at every stage.',
    icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="12" y2="17"/></svg>,
  },
  {
    title: 'Weekly Updates',
    desc: 'You stay informed, every week, without having to chase. Transparent updates. Consistent progress. Complete visibility.',
    icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  },
  {
    title: 'One Point of Contact',
    desc: 'One dedicated studio lead throughout your project. One person who knows your space, your vision, and your priorities.',
    icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinecap="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  },
  {
    title: 'Design Fidelity',
    desc: 'What is designed is what gets delivered. We don\'t compromise on design intent. Ever.',
    icon: <svg viewBox="0 0 24 24" stroke="var(--gold)" strokeWidth="1.2" fill="none" strokeLinecap="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
  },
];

export default function Promises() {
  return (
    <section id="promises" className={styles.section}>
      <div className={styles.sidebarLeft}>
        <div className={styles.sidebarNum}><div className={styles.num}>08</div><div className={styles.text}>SECTION</div></div>
        <div className={styles.sidebarLineTop} />
        <div className={styles.sidebarText}>PROMISES WE STAND BY.</div>
        <div className={styles.sidebarLineBottom} />
      </div>
      <div className={styles.headerRight}>
        <div className={styles.hrTop}>
          <div className={styles.hrLabel}>OUR PROMISES</div>
          <div className={styles.hrDivider}>
            <div className={styles.hrLine}/><div className={styles.hrDia}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg></div><div className={styles.hrLine}/>
          </div>
          <div className={styles.hrNum}>08</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Our <span>Promises.</span><br />Your Peace of Mind.</h2>
        </div>
        <div className={styles.titleDivider}>
          <div className={styles.divLine}/><div className={styles.divDia}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg></div><div className={styles.divLine}/>
        </div>
        <p className={styles.subtitle}>CLEAR PROCESS. CONSTANT COMMUNICATION. COMPLETE OWNERSHIP.</p>
        <div className={styles.cards}>
          {promises.map((p, i) => (
            <div className={`${styles.card} ${i === 0 ? styles.activeCard : ''}`} key={p.title}>
              <div className={styles.cardIcon}>{p.icon}</div>
              <div className={styles.cardTitle}>{p.title.includes('<br/>') ? <>{p.title}</> : p.title}</div>
              <div className={styles.cardDivider}><div className={styles.cdLine}/><div className={styles.cdDia}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg></div><div className={styles.cdLine}/></div>
              <div className={styles.cardDesc}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.archFooter}>
        <svg className={styles.archSvg} viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 120L1440 120V0C1440 0 1140 119.5 720 119.5C300 119.5 0 0 0 0V120Z" fill="#111" />
          <path d="M0 0C300 119.5 1140 119.5 1440 0" stroke="var(--gold)" strokeWidth="1" strokeOpacity="0.3" />
        </svg>
        <div className={styles.archStar}>
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10Z" fill="var(--gold)" opacity="0.8"/>
          </svg>
        </div>
        <div className={styles.archContent}>
          <div className={styles.footerText}>COMMITTED TO TRANSPARENCY. DRIVEN BY ACCOUNTABILITY.</div>
          <div className={styles.footerBold}>DELIVERED WITH INTEGRITY.</div>
        </div>
      </div>
    </section>
  );
}
