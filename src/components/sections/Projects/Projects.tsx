import styles                 from './Projects.module.scss';
import { projects }           from '../../../data/projects';
import { useInView }          from '../../../hooks/useInView';
import { ProjectCard }        from './ProjectCard';
import type { CSSProperties } from 'react';


export function Projects() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div
          ref={ref}
          className={`${styles.header} ${styles.animate} ${inView ? styles.visible : ''}`}
          style={{ '--anim-delay': '0ms' } as CSSProperties}
        >
          <span className={styles.label}>Projects</span>

          <h2>What I've built</h2>
        </div>
        
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
