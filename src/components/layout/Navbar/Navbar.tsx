import { useActiveSection } from '../../../hooks/useActiveSection';
import styles from './Navbar.module.scss';

const navLinks = [
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
];

const sectionIds = ['hero', 'about', 'projects', 'experience', 'contact'];

export function Navbar() {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#hero" className={styles.logo}>
          lc<span className={styles.dot}>.</span>
        </a>

        <ul className={styles.links}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`${styles.link} ${activeId === href.slice(1) ? styles.active : ''}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
