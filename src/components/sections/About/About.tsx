import styles                 from './About.module.scss';
import profileImgWebp         from '../../../assets/hero.webp';
import profileImgPng          from '../../../assets/hero.png';
import { useInView }          from '../../../hooks/useInView';
import type { CSSProperties } from 'react';


const stack = [
  'JavaScript', 'TypeScript', 'Java', 'React', 'Angular', 'Vue', 'Nuxt',
  'Node.js', 'PostgreSQL', 'CSS', 'SCSS', 'REST APIs', 'Git', 'Docker',
  'Google Cloud Platform'
];

export function About() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="about" className={styles.section}>
      <div ref={ref} className={styles.inner}>
        <div
          className={`${styles.content} ${styles.animate} ${inView ? styles.visible : ''}`}
          style={{ '--anim-delay': '0ms' } as CSSProperties}
        >
          <span className={styles.label}>About</span>

          <h2>Who I am</h2>

          <p>
            Full Stack Developer with 1.5+ years of professional experience in software consulting
            at PwC Italy. I focus on writing clean, maintainable code and building scalable
            architectures — whether that means a well-structured backend API or a component library
            designed for reuse.
          </p>

          <p>
            I care about the craft: readable code, sensible abstractions, and interfaces that feel
            intentional.
          </p>

          <div className={styles.stack}>
            <span className={styles.stackLabel}>Stack</span>
            
            <ul className={styles.stackList}>
              {stack.map((item) => (
                <li key={item} className={styles.stackItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className={`${styles.imageWrapper} ${styles.animate} ${inView ? styles.visible : ''}`}
          style={{ '--anim-delay': '180ms' } as CSSProperties}
        >
          <picture className={styles.picture}>
            <source srcSet={profileImgWebp} type="image/webp" />
            <img
              src={profileImgPng}
              alt="Luigi Cavalli"
              className={styles.image}
              width={280}
              height={296}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
