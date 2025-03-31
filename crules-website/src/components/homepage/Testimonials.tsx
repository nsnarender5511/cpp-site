import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

// High-quality quote icon SVG
const QuoteIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.5 10C7.3 10 8 9.3 8 8.5C8 7.7 7.3 7 6.5 7C5.7 7 5 7.7 5 8.5C5 9.3 5.7 10 6.5 10ZM6.5 10C3.6 10 2 12.2 2 15.5V16H11V15.5C11 12.2 9.4 10 6.5 10ZM17.5 10C18.3 10 19 9.3 19 8.5C19 7.7 18.3 7 17.5 7C16.7 7 16 7.7 16 8.5C16 9.3 16.7 10 17.5 10ZM17.5 10C14.6 10 13 12.2 13 15.5V16H22V15.5C22 12.2 20.4 10 17.5 10Z" fill="currentColor"/>
  </svg>
);

type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote: "cursor++ has transformed our development workflow. The specialized agents provide insights I wouldn't have considered on my own, cutting our development time by at least 30%.",
    author: "Sarah Chen",
    role: "Lead Developer",
    company: "TechInnovate",
    avatarUrl: "https://i.pravatar.cc/150?img=32"
  },
  {
    quote: "The agent coordination system is brilliant. Having specialized AI agents working together on complex tasks makes a world of difference compared to single-model solutions.",
    author: "Michael Rodriguez",
    role: "CTO",
    company: "DevStack",
    avatarUrl: "https://i.pravatar.cc/150?img=68"
  },
  {
    quote: "As someone who works on large codebases, cursor++ has been a game-changer. The code reviewer agent catches issues that would have taken hours to debug later.",
    author: "Alex Johnson",
    role: "Senior Engineer",
    company: "Enterprise Systems",
    avatarUrl: "https://i.pravatar.cc/150?img=12"
  }
];

export default function Testimonials(): JSX.Element {
  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          What Developers Are Saying
        </motion.h2>
        
        <div className={styles.testimonialsGrid}>
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div 
              key={index}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: 'var(--shadow-xl)' 
              }}
            >
              <div className={styles.testimonialContent}>
                <div className={styles.quoteIcon}><QuoteIcon /></div>
                <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                <div className={styles.testimonialAuthor}>
                  {testimonial.avatarUrl && (
                    <div className={styles.testimonialAvatar}>
                      <img src={testimonial.avatarUrl} alt={testimonial.author} />
                    </div>
                  )}
                  <div className={styles.testimonialMeta}>
                    <div className={styles.testimonialName}>{testimonial.author}</div>
                    <div className={styles.testimonialRole}>
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 