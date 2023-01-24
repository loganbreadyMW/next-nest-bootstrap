interface ButtonProps {
  children: React.ReactNode;
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info';
  disabled?: boolean;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text' | 'filter';
  href?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const Button = ({
  className,
  children,
  color = 'default',
  disabled,
  onClick,
  variant = 'contained',
  href,
  size = 'medium',
}: ButtonProps) => {
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} disabled={disabled} onClick={onClick} type='button'>
      {children}
    </button>
  );
};
