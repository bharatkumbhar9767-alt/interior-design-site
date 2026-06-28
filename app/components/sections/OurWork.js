import Image from 'next/image';
import styles from './OurWork.module.css';

const works = [
  {
    image: '/images/hero_living_room.png',
    title: 'LIVING ROOM',
  },
  {
    image: '/images/dining_space.png',
    title: 'DINING SPACE',
  },
  {
    image: '/images/kitchen_modern.png',
    title: 'KITCHEN',
  },
  {
    image: '/images/bedroom_luxury.png',
    title: 'BEDROOM',
  },
];

export default function OurWork() {
  return (
    <section id="work" className={styles.section}>
      {/* Left Full-Height Sidebar */}
      <div className={styles.sidebarLeft}>
        <div className={styles.sidebarLine} style={{ flex: '0 0 8vh' }} />
        <div className={styles.sidebarDia}>
           <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg>
        </div>
        <div className={styles.sidebarLine} style={{ flex: '0 0 4vh' }} />
        <div className={styles.sidebarNum}>10</div>
        <div className={styles.sidebarText1}>SECTION</div>
        <div className={styles.sidebarLine} style={{ flex: '0 0 6vh' }} />
        <div className={styles.sidebarDia}>
           <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg>
        </div>
        <div className={styles.sidebarLine} style={{ flex: '0 0 4vh' }} />
        <div className={styles.sidebarText2}>REAL SPACES. THOUGHTFUL DESIGN.</div>
        <div className={styles.sidebarLine} style={{ flex: '1' }} />
      </div>

      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.logoTS}>
            <svg viewBox="0 0 24 24" width="28" height="28" stroke="var(--gold)" strokeWidth="1.5" fill="none">
              <path d="M4 7V4h16v3M12 4v16M8 20h8" />
            </svg>
          </div>
          <div className={styles.logoTextWrap}>
            <div className={styles.logoTitle}>THE SPATIAL EDIT</div>
            <div className={styles.logoSub}>SPATIAL DESIGN STUDIO</div>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightText}>OUR WORK</div>
          <div className={styles.topRightLine} />
          <div className={styles.topRightNum}>10</div>
        </div>
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>

        {/* Center Header */}
        <div className={styles.centerHeader}>
          <h2 className={styles.title}>
            Our <span>Work.</span>
          </h2>
          <div className={styles.separator}>
            <div className={styles.sepLine} />
            <div className={styles.sepDia}>
              <svg viewBox="0 0 24 24">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/>
              </svg>
            </div>
            <div className={styles.sepLine} />
          </div>
          <div className={styles.subtitle}>
            SPACES DESIGNED TO WORK. FINISHED TO LAST.
          </div>
        </div>

        {/* Cards Grid */}
        <div className={styles.grid}>
          {works.map((work) => (
            <div className={styles.card} key={work.title}>
              <div className={styles.imageBox}>
                <Image src={work.image} alt={work.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.cardFooter}>
                <svg viewBox="0 0 24 24">
                  <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/>
                </svg>
                <div className={styles.cardFooterText}>{work.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer divider removed per request */}
    </section>
  );
}
