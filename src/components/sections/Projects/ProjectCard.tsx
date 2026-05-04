import styles                 from './ProjectCard.module.scss';
import { Tag }                from '../../ui/Tag/Tag';
import { Button }             from '../../ui/Button/Button';
import { useInView }          from '../../../hooks/useInView';
import type { Project }       from '../../../types';
import type { CSSProperties } from 'react';


interface ProjectCardProps {
  project: Project;
  index?:  number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const { ref, inView } = useInView<HTMLElement>();

  return (
    <article
      ref={ref}
      className={`${styles.card} ${project.featured ? styles.featured : ''} ${styles.animate} ${inView ? styles.visible : ''}`}
      style={{ '--anim-delay': `${index * 120}ms` } as CSSProperties}
    >
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{project.title}</h3>
          {project.teamProject && (
            <span className={styles.teamBadge}>Team project</span>
          )}
        </div>
      </div>

      <p className={styles.description}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>

      {(project.githubUrl || project.liveUrl) && (
        <div className={styles.actions}>
          {project.liveUrl && (
            <Button href={project.liveUrl} external>
              Live demo
            </Button>
          )}
          
          {project.githubUrl && (
            <Button href={project.githubUrl} variant="ghost" external>
              GitHub
            </Button>
          )}
        </div>
      )}
    </article>
  );
}
