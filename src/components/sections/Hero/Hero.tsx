import styles     from './Hero.module.scss';
import { Button } from '../../ui/Button/Button';


export function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.label}>Full Stack Developer</span>

        <h1 className={styles.title}>
          Luigi <span className={styles.accent}>Cavalli</span>
        </h1>

        <p className={styles.tagline}>
          Building scalable software with clean architecture — from backend systems to polished
          interfaces.
        </p>
        
        <div className={styles.cta}>
          <Button href="#projects">View projects</Button>
          <Button href="#contact" variant="ghost">Get in touch</Button>
        </div>
      </div>
    </section>
  );
}
