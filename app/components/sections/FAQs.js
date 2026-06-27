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
      <div className={styles.vline} />
      <div className={styles.verticalText}>QUESTIONS. ANSWERED.</div>
      <div className={styles.cornerStar}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="var(--gold)" opacity="0.5"/></svg></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.hlLabel}>THE SPATIAL EDIT</span>
          <div className={styles.hlLine}/>
          <span className={styles.hrLabel}>QUESTIONS & ANSWERS</span>
        </div>
        <div className={styles.titleBlock}>
          <h2 className={styles.title}>FAQ<span>s</span></h2>
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
      <div className={styles.archFooter}>
        <svg className={styles.archSvg} viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M0,100 L0,70 Q250,110 500,10 Q750,110 1000,70 L1000,100 Z" fill="#111" stroke="rgba(180,144,79,0.5)" strokeWidth="2" vectorEffect="non-scaling-stroke"/></svg>
        <div className={styles.archDecor}><svg className={styles.archArrow} viewBox="0 0 24 24"><polyline points="15 18 9 12 15 6" stroke="rgba(180,144,79,0.6)" strokeWidth="1.5" fill="none"/></svg><div className={styles.archStar}><svg viewBox="0 0 24 24"><path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" fill="#b4904f"/></svg></div><svg className={styles.archArrow} viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6" stroke="rgba(180,144,79,0.6)" strokeWidth="1.5" fill="none"/></svg></div>
      </div>
    </section>
  );
}
