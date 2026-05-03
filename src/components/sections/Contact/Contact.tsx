import styles                 from './Contact.module.scss';
import { Button }             from '../../ui/Button/Button';
import { useInView }          from '../../../hooks/useInView';
import type { CSSProperties } from 'react';


const links = [
  { label: 'GitHub',   href: 'https://github.com/luigicavalli',        icon: 'gh' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/luigi-cavalli/', icon: 'li' },
  { label: 'Email',    href: 'mailto:luigi_cavalli@outlook.com',       icon: 'em' },
];

export function Contact() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="contact" className={styles.section}>
      <div
        ref={ref}
        className={`${styles.inner} ${styles.animate} ${inView ? styles.visible : ''}`}
        style={{ '--anim-delay': '0ms' } as CSSProperties}
      >
        <span className={styles.label}>Contact</span>

        <h2>Let's talk</h2>

        <p className={styles.text}>
          Open to new opportunities, collaborations, or just a conversation about software. Feel free
          to reach out.
        </p>
        
        <div className={styles.links}>
          {links.map(({ label, href }) => (
            <Button key={label} href={href} variant="ghost" external>
              {label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
