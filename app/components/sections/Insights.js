import Image from 'next/image';
import styles from './Insights.module.css';

const posts = [
  { num: 1, label: 'BLOG 1', title: 'What is Spatial Design?', desc: 'Understanding the thinking behind spaces that truly work.', img: '/images/hero_living_room.png', tag: 'SPATIAL THINKING' },
  { num: 2, label: 'BLOG 2', title: 'Spatial vs Interior Design', desc: 'Key differences every homeowner should know before they begin.', img: '/images/kitchen_modern.png', tag: 'DESIGN CLARITY' },
  { num: 3, label: 'BLOG 3', title: 'Mistakes in Home Planning', desc: 'Common planning mistakes that cost time, money, and comfort.', img: '/images/blueprint_desk.png', tag: 'PLANNING GUIDE' },
];

export default function Insights() {
  return (
    <section id="insights" className={styles.section}>
      <div className={styles.vline} />
      <div className={styles.verticalText}>INSIGHTS. IDEAS. INTENTIONAL DESIGN.</div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.hlLabel}>THE SPATIAL EDIT</span>
          <span className={styles.hrLabel}>OUR INSIGHTS</span>
        </div>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>Ideas That <span>Shape Better Spaces.</span></h2>
        </div>
        <p className={styles.subtitle}>PERSPECTIVES ON DESIGN, PLANNING, AND SPACES THAT WORK.</p>
        <div className={styles.grid}>
          {posts.map((post) => (
            <div className={styles.card} key={post.num}>
              <div className={styles.imgWrap}>
                <Image src={post.img} alt={post.title} fill style={{objectFit:'cover'}} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.label}>{post.label}</div>
                <h3 className={styles.cardTitle}>{post.title}</h3>
                <p className={styles.cardDesc}>{post.desc}</p>
                <a href="#" className={styles.readMore}>READ MORE &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.archFooter}>
        <svg className={styles.archSvg} viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0,100 L0,10 Q250,170 500,10 Q750,170 1000,10 L1000,100 Z" fill="#111" stroke="rgba(180,144,79,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke"/></svg>
        <div className={styles.archDecor}>
          <div className={styles.archStar}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="#b4904f"/></svg></div>
        </div>
      </div>
    </section>
  );
}
