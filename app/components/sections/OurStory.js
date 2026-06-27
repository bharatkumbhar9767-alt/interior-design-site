import Image from 'next/image';
import styles from './OurStory.module.css';

export default function OurStory() {
  return (
    <section id="story" className={styles.section}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.logoTS}>
            <svg width="24" height="32" viewBox="0 0 24 32">
              <path d="M12 0L12 32M0 12L24 12" stroke="var(--gold)" strokeWidth="1.5" />
              <text x="12" y="22" fontFamily="var(--serif)" fontSize="18" fill="var(--dark)" textAnchor="middle">TS</text>
            </svg>
          </div>
          <div className={styles.logoTextWrap}>
            <div className={styles.logoTitle}>THE SPATIAL EDIT</div>
            <div className={styles.logoSub}>SPATIAL DESIGN STUDIO</div>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightText}>OUR STORY</div>
          <div className={styles.topRightLine} />
          <div className={styles.topRightNum}>07</div>
        </div>
      </div>

      {/* Left Sidebar */}
      <div className={styles.sidebarLeft}>
        <div className={styles.sidebarNum}>07</div>
        <div className={styles.sidebarText1}>SECTION</div>
        <div className={styles.sidebarLine} style={{ flex: '1', minHeight: '60px' }} />
        <div className={styles.sidebarText2}>BUILT FROM EXPERIENCE. DRIVEN BY BELIEF.</div>
        <div className={styles.sidebarLine} style={{ flex: '1', minHeight: '60px' }} />
        <div className={styles.sidebarStar}>
          <svg viewBox="0 0 24 24">
            <path d="M12 1L14 9L23 12L14 15L12 23L10 15L1 12L10 9Z" fill="none" stroke="var(--gold)" strokeWidth="1"/>
            <path d="M12 1v22M1 12h22" stroke="var(--gold)" strokeWidth="1" />
          </svg>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className={styles.mainContent}>
        
        {/* LEFT COLUMN */}
        <div className={styles.leftCol}>
          <h2 className={styles.title}>Our Story.</h2>
          <h3 className={styles.subtitle}>Built from experience.<br/>Driven by belief.</h3>
          
          <p className={styles.founderPara}>
            The Spatial Edit was founded by Preksha Bhargav and Krishna Bhargav — partners in life, who started this studio for a very personal reason.
          </p>

          <div className={styles.separator}>
            <div className={styles.sepLine} />
            <div className={styles.sepDia}>
              <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg>
            </div>
            <div className={styles.sepLine} />
          </div>

          <div className={styles.threeCols}>
            {/* Col 1 */}
            <div className={styles.storyCol}>
              <div className={styles.iconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path d="M9 22V12h6v10" />
                </svg>
              </div>
              <div className={styles.storyText}>
                It didn&apos;t begin in a design studio.<br/>It began in a home that wasn&apos;t working, a home that didn&apos;t feel like theirs.
              </div>
            </div>
            {/* Col 2 */}
            <div className={styles.storyCol}>
              <div className={styles.iconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                </svg>
              </div>
              <div className={styles.storyText}>
                When they were expecting their first baby, in the third trimester, the couple moved into a new apartment. They had hired an interior designer.
              </div>
            </div>
            {/* Col 3 */}
            <div className={styles.storyCol}>
              <div className={styles.iconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 12c0-3 8-3 8 0s-8 3-8 0" />
                  <path d="M12 8c3 0 3 8 0 8s-3-8 0-8" />
                </svg>
              </div>
              <div className={styles.storyText}>
                What followed was one of the most chaotic experiences of their lives — delays, decisions that made no sense, a process so disorganised they ended up directing it themselves; by designing their own house to doing site visits. They weren&apos;t unlucky. <span>They were experiencing their worst nightmare.</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.rightCol}>
          <div className={styles.imageBox}>
            <div className={styles.imageInner}>
              <div style={{ width: '100%', height: '100%', backgroundColor: '#dfd5c5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--serif)', color: 'rgba(0,0,0,0.3)' }}>[Founder Image Placeholder]</span>
              </div>
            </div>
          </div>

          <div className={styles.namesBox}>
            <div className={styles.nameBlock}>
              <div className={styles.nameTitle}>Preksha Bhargav</div>
              <div className={styles.nameSub}>CO-FOUNDER</div>
            </div>
            <div className={styles.sepDia}>
              <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg>
            </div>
            <div className={styles.nameBlock}>
              <div className={styles.nameTitle}>Krishna Bhargav</div>
              <div className={styles.nameSub}>CO-FOUNDER</div>
            </div>
          </div>

          <div className={styles.gapText}>
            <div className={styles.gapTextLine} />
            <div className={styles.gapTextDia} />
            That gap stayed with them.<br/>
            Two babies later and with lot of thinking, research, and groundwork behind them, they built The Spatial Edit.
          </div>

          <div className={styles.missionBox}>
            <div className={styles.missionIcon}>
              {/* Classical column icon */}
              <svg viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5">
                <path d="M4 20h16M4 4h16M7 4v16M11 4v16M17 4v16" />
              </svg>
            </div>
            <div className={styles.missionText}>
              Not just another interior design studio. A studio built around the belief that your home deserves the same rigour that global companies demand from their best operations.
            </div>
          </div>

          <div className={styles.quoteBlock}>
            <div className={styles.quoteMarks}>&ldquo;</div>
            <div className={styles.quoteText}>
              We don&apos;t just design your space.<br/>We ensure it is executed exactly as designed.&rdquo;
            </div>
            <div className={styles.quoteAuthor}>The Spatial Edit</div>
          </div>
        </div>

      </div>

      {/* Bottom Arch (Mountain Curve) */}
      <div className={styles.archFooter}>
        <svg className={styles.archSvg} viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path d="M0,100 L0,10 C125,10 125,70 250,70 C375,70 375,10 500,10 C625,10 625,70 750,70 C875,70 875,10 1000,10 L1000,100 Z" fill="#111" stroke="rgba(180,144,79,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
        </svg>
        <div className={styles.archContent}>
          <div className={styles.archStar}>
            <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg>
          </div>
          <div className={styles.archText}>
            THOUGHTFUL SPACES. FLAWLESS EXECUTION.<br/>
            <span>DESIGNED TO WORK. FINISHED TO LAST.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
