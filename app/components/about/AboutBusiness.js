'use client';
import Image from 'next/image';
import styles from './AboutBusiness.module.css';

export default function AboutBusiness() {
  return (
    <div className={styles.section}>
      
      {/* 1. Who We Are */}
      <section className={styles.whoWeAre}>
        <div className={styles.bgImage}>
          <Image 
            src="/images/bg-sec-3.png" 
            alt="Studio Background" 
            fill 
            style={{ objectFit: 'cover' }} 
            priority
          />
        </div>
        
        {/* Detailing */}
        <div className={styles.vLine} />
        <div className={`${styles.heroDia} ${styles.diaTop}`} />
        <div className={`${styles.heroDia} ${styles.diaBot}`} />
        <div className={styles.heroScroll}>OUR STORY</div>
        
        <svg className={styles.heroArcs} viewBox="0 0 600 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="400" r="200" stroke="#b4904f" strokeWidth="0.8"/>
          <circle cx="100" cy="400" r="280" stroke="#b4904f" strokeWidth="0.6"/>
          <circle cx="100" cy="400" r="360" stroke="#b4904f" strokeWidth="0.5"/>
          <line x1="100" y1="0" x2="100" y2="800" stroke="#b4904f" strokeWidth="0.5" strokeDasharray="4 6"/>
        </svg>

        <div className={styles.container}>
          <div className={styles.introBlock}>
            <div className={styles.introBoxLayer}>
              <div className={styles.eyebrow}>WHO WE ARE</div>
              <h1 className={styles.title}>
                Built from <span>experience.</span><br/>Driven by <span>belief.</span>
              </h1>
              <div className={styles.titleLine} />
              <p className={styles.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. The Spatial Edit is an interior design studio focused on intelligent, effortless living spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Separator */}
      <div className={styles.separator}>
        <div className={styles.sepLine} />
        <div className={styles.sepDia}>
          <svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" /></svg>
        </div>
        <div className={styles.sepLine} />
      </div>

      {/* 2. Mission & 3. Vision */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            
            <div className={styles.mvCard}>
              <div className={styles.mvBgIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2zM12 6l6 6-6 6-6-6 6-6z" fill="var(--gold)" /></svg>
              </div>
              <div className={styles.mvIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2zM12 6l6 6-6 6-6-6 6-6z" /></svg>
              </div>
              <h2 className={styles.title}>Our <span>Mission</span></h2>
              <p className={styles.desc}>
                To transform chaotic spaces into effortless homes. We aim to design with spatial intelligence first, ensuring every room works perfectly before a single piece of furniture is placed. 
              </p>
            </div>

            <div className={styles.mvCard}>
              <div className={styles.mvBgIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 0 C 12 10, 14 12, 24 12 C 14 12, 12 14, 12 24 C 12 14, 10 12, 0 12 C 10 12, 12 10, 12 0 Z" fill="var(--gold)" stroke="none"/></svg>
              </div>
              <div className={styles.mvIcon}>
                <svg viewBox="0 0 24 24"><path d="M12 0 C 12 10, 14 12, 24 12 C 14 12, 12 14, 12 24 C 12 14, 10 12, 0 12 C 10 12, 12 10, 12 0 Z" fill="var(--gold)" stroke="none"/></svg>
              </div>
              <h2 className={styles.title}>Our <span>Vision</span></h2>
              <p className={styles.desc}>
                To become the most trusted architectural and interior design studio, known for marrying flawless aesthetics with uncompromising functionality, building homes that last a lifetime.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. What We Do */}
      <section className={styles.whatWeDo}>
        <div className={styles.compassBg}>
          <Image src="/images/compass_bg.png" alt="" fill style={{ objectFit: 'contain', opacity: 0.15 }} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.introBlock} style={{ marginBottom: '0' }}>
            <div className={styles.eyebrow}>WHAT WE DO</div>
            <h2 className={styles.title}>Designing <span>spaces</span> that work.</h2>
            <p className={styles.desc}>We offer comprehensive spatial design and interior execution services.</p>
          </div>
          
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none"><path d="M3 12l9-9 9 9M4 10v11h16V10M9 21v-6h6v6" stroke="var(--gold)" strokeWidth="1.2" /></svg>
              </div>
              <h3 className={styles.serviceTitle}>Interior Design</h3>
              <p className={styles.serviceDesc}>End-to-end interior design services focusing on flow, proportion, and light.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="var(--gold)" strokeWidth="1.2" /><path d="M3 9h18M9 21V9" stroke="var(--gold)" strokeWidth="1.2" /></svg>
              </div>
              <h3 className={styles.serviceTitle}>Spatial Planning</h3>
              <p className={styles.serviceDesc}>Intelligent mapping of your home's layout before any aesthetic decisions are made.</p>
            </div>
            <div className={styles.serviceItem}>
              <div className={styles.serviceIcon}>
                <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="var(--gold)" strokeWidth="1.2" /><path d="M12 7v5l3 3" stroke="var(--gold)" strokeWidth="1.2" /></svg>
              </div>
              <h3 className={styles.serviceTitle}>Project Execution</h3>
              <p className={styles.serviceDesc}>We manage the entire build out, ensuring our designs are perfectly executed on site.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className={styles.whyChooseUs}>
        <div className={styles.floorPlanBg}>
          <Image src="/images/floor_plan_bg.png" alt="" fill style={{ objectFit: 'cover', opacity: 0.1 }} />
        </div>
        
        <div className={styles.container}>
          <div className={styles.introBlock} style={{ margin: '0 0 40px 0', textAlign: 'left' }}>
            <div className={styles.eyebrow}>WHY CHOOSE US</div>
            <h2 className={styles.title}>The Spatial <span>Difference</span></h2>
          </div>

          <div className={styles.whyList}>
            <div className={styles.whyItem}>
              <div className={styles.whyNum}>01.</div>
              <div className={styles.whyContent}>
                <h3>Spatial Intelligence First</h3>
                <p>Most design starts with how it looks. We start with how it works. Flow mapping and proportion planning happen before aesthetics.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyNum}>02.</div>
              <div className={styles.whyContent}>
                <h3>Uncompromising Execution</h3>
                <p>We don't hand over a design and walk away. We ensure every single detail is executed on site exactly as it was conceived.</p>
              </div>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyNum}>03.</div>
              <div className={styles.whyContent}>
                <h3>Personalized Approach</h3>
                <p>Your home should feel like yours, not a showroom. We design around your daily routines and lifestyle.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Meet Our Team */}
      <section className={styles.meetOurTeam}>
        <div className={styles.container}>
          <div className={styles.introBlock} style={{ margin: '0 auto' }}>
            <div className={styles.eyebrow}>MEET OUR TEAM</div>
            <h2 className={styles.title}>The <span>Founders</span></h2>
          </div>

          <div className={styles.foundersBlock}>
            
            <div className={styles.founderRow}>
              <div className={styles.founderImg}>
                <Image src="/images/founders_photo.png" alt="Preksha Bhargav" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.founderInfo}>
                <h2 className={styles.founderName}>Preksha Bhargav</h2>
                <div className={styles.founderRole}>CO-FOUNDER & LEAD DESIGNER</div>
                <p className={styles.founderBio}>
                  Curabitur vulputate, ligula lacinia scelerisque tempor, sanguis elit eros vel massa. Phasellus pellentesque ipsum non tellus eleifend congue. Nam in eros et erat fermentum aliquam ac at nisi. Integer ullamcorper eros sapien, non iaculis massa convallis eu.
                </p>
              </div>
            </div>

            <div className={`${styles.founderRow} ${styles.founderRowReverse}`}>
              <div className={styles.founderImg}>
                <Image src="/images/bedroom_luxury.png" alt="Krishna Bhargav" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.founderInfo}>
                <h2 className={styles.founderName}>Krishna Bhargav</h2>
                <div className={styles.founderRole}>CO-FOUNDER & OPERATIONS</div>
                <p className={styles.founderBio}>
                  Phasellus pellentesque ipsum non tellus eleifend congue. Nam in eros et erat fermentum aliquam ac at nisi. Curabitur vulputate, ligula lacinia scelerisque tempor, sanguis elit eros vel massa. Integer ullamcorper eros sapien, non iaculis massa convallis eu.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
