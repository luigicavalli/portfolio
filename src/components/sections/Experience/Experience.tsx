import styles                 from './Experience.module.scss';
import { useInView }          from '../../../hooks/useInView';
import { experience }         from '../../../data/experience';
import type { CSSProperties } from 'react';


export function Experience() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="experience" className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div
          className={`${styles.header} ${styles.animate} ${inView ? styles.visible : ''}`}
          style={{ '--anim-delay': '0ms' } as CSSProperties}
        >
          <span className={styles.label}>Experience</span>
          <h2>Where I've worked</h2>
        </div>

        <ol className={`${styles.timeline} ${styles.animate} ${inView ? styles.visible : ''}`}
          style={{ '--anim-delay': '120ms' } as CSSProperties}
        >
          {experience.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.line} aria-hidden="true" />

              <div className={styles.dot} aria-hidden="true" />

              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.period}>{item.period}</span>
                  <span className={styles.type}>{item.type}</span>
                </div>

                <h3 className={styles.role}>{item.role}</h3>

                <span className={styles.company}>
                  {item.company} · {item.location}
                </span>

                <ul className={styles.bullets}>
                  {item.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
