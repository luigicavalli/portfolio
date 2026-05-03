import styles             from './Button.module.scss';
import type { ReactNode } from 'react';


type ButtonVariant = 'primary' | 'ghost';

interface ButtonProps {
  children:  ReactNode;
  variant?:  ButtonVariant;
  href?:     string;
  onClick?:  () => void;
  external?: boolean;
}

export function Button({ children, variant = 'primary', href, onClick, external }: ButtonProps) {
  const className     = `${styles.button} ${styles[variant]}`;
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  if (href) {
    return (
      <a href={href} className={className} {...externalProps}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
