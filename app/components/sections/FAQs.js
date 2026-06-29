'use client';
import { useState } from 'react';
import styles from './FAQs.module.css';

const faqs = [
  { q: 'What exactly is spatial design?', a: 'Spatial design is the discipline of planning how a space functions — how you move through it, how it\'s proportioned, and how natural light behaves within it. It comes before any aesthetic decision. Good spatial design makes a home feel effortless to live in, even when you can\'t quite explain why.' },
  { q: 'My villa is already built. Why spatial planning?', a: 'Even in a completed structure, spatial planning determines the optimal layout for your furniture, how to zone your spaces for different activities, and how to maximise both functionality and light. It prevents expensive mistakes before execution begins.' },
  { q: 'How is this different from interior decorators?', a: 'Interior decorators focus on the aesthetics — colours, furniture, accessories. We begin with the spatial plan: circulation, proportion, and light. The design follows the function. This is why our spaces feel as good as they look.' },
  { q: 'How long does planning take?', a: 'The spatial plan typically takes 2–3 weeks, depending on the scale of your project. Full project timelines from planning to handover typically run 4–8 months for a complete home.' },
  { q: 'Do you work across all of Hyderabad?', a: 'Yes, we work across Hyderabad — including Jubilee Hills, Banjara Hills, Gachibowli, Hitec City, and surrounding areas. For the right project, we are open to other cities as well.' },
];

export default function FAQs() {
  const [openIdx, setOpenIdx] = useState(null);
  const toggle = (i) => setOpenIdx(openIdx === i ? null : i);

  return (
    <section id="faqs" className={styles.section}>
      {/* Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.topLeft}>
          <div className={styles.logoTS}>
            <div style={{ position: 'relative', width: '36px', height: '36px', fontFamily: 'var(--serif)', color: 'var(--gold)', fontSize: '28px', lineHeight: 1 }}>
              <span style={{ position: 'absolute', left: '0px', top: '0px', zIndex: 2 }}>T</span>
              <span style={{ position: 'absolute', left: '12px', top: '8px', zIndex: 1 }}>S</span>
            </div>
          </div>
          <div className={styles.logoTextWrap}>
            <div className={styles.logoTitle}>THE SPATIAL EDIT</div>
            <div className={styles.logoSub}>SPATIAL DESIGN STUDIO</div>
          </div>
        </div>
        <div className={styles.topRight}>
          <div className={styles.topRightText}>QUESTIONS & ANSWERS</div>
          <div className={styles.topRightLine} />
        </div>
      </div>

      {/* Left Sidebar Layout */}
      <div className={styles.vline} />
      <div className={styles.sideText1}>SECTION</div>
      <div className={styles.sideDia}><svg viewBox="0 0 24 24"><path d="M12 0 C 12 10, 14 12, 24 12 C 14 12, 12 14, 12 24 C 12 14, 10 12, 0 12 C 10 12, 12 10, 12 0 Z" fill="var(--gold)"/></svg></div>
      <div className={styles.verticalText}>QUESTIONS. ANSWERED.</div>
      <div className={styles.cornerStar}>
        <svg viewBox="0 0 24 24">
          <path d="M12 1L14 9L23 12L14 15L12 23L10 15L1 12L10 9Z" fill="none" stroke="var(--gold)" strokeWidth="1"/>
          <path d="M12 1v22M1 12h22" stroke="var(--gold)" strokeWidth="1" />
        </svg>
      </div>

      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>FAQ<span style={{ fontFamily: 'var(--serif-italic)', fontWeight: '400', color: 'var(--gold)', marginLeft: '2px' }}>s</span></h2>
        </div>
        
        <div className={styles.separatorShort}>
          <div className={styles.sepLine} />
          <div className={styles.sepDia}>
            <svg viewBox="0 0 24 24"><path d="M12 0 C 12 10, 14 12, 24 12 C 14 12, 12 14, 12 24 C 12 14, 10 12, 0 12 C 10 12, 12 10, 12 0 Z" fill="var(--gold)"/></svg>
          </div>
          <div className={styles.sepLine} />
        </div>

        <p className={styles.subtitle}>CLEAR ANSWERS. COMPLETE CLARITY.</p>
        <div className={styles.faqList}>
          {faqs.map((faq, i) => (
            <div className={`${styles.faqItem} ${openIdx === i ? styles.faqOpen : ''}`} key={i} onClick={() => toggle(i)}>
              <div className={styles.faqTop}>
                <div className={styles.faqLeft}>
                  <div className={styles.faqStar}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)"/></svg></div>
                  <div className={styles.faqQ}>{faq.q}</div>
                </div>
                <div className={`${styles.faqToggle} ${openIdx === i ? styles.isOpen : ''}`}>
                  <span /><span />
                </div>
              </div>
              <div className={`${styles.faqAnswer} ${openIdx === i ? styles.answerVisible : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </section>
  );
}
