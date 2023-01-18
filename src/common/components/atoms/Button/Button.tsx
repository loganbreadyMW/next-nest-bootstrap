import clsx from 'clsx';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  href?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({
  children,
  color = 'default',
  disabled,
  onClick,
  variant = 'contained',
  href,
  size = 'medium',
}: ButtonProps) => {
  const buttonClasses = clsx(
    styles['button__base'],
    styles[`button__${variant}`],
    styles[`button__${variant}--${color}`],
    styles[`button__${variant}--${size}`],
    disabled && styles[`button__${variant}--disabled`],
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
