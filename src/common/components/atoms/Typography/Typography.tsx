import clsx from 'clsx';
import styles from './Typography.module.scss';

interface TypographyProps {
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  children: React.ReactNode;
  component?: React.ElementType;
  display?: 'initial' | 'block' | 'inline';
  gutterBottom?: boolean;
  noWrap?: boolean;
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2';
  variantMapping?: {
    body1?: React.ElementType;
    body2?: React.ElementType;
    h1?: React.ElementType;
    h2?: React.ElementType;
    h3?: React.ElementType;
    h4?: React.ElementType;
    h5?: React.ElementType;
    h6?: React.ElementType;
    subtitle1?: React.ElementType;
    subtitle2?: React.ElementType;
    button?: React.ElementType;
    caption?: React.ElementType;
    overline?: React.ElementType;
  };
}

export const Typography = ({
  align = 'inherit',
  children,
  component,
  display,
  gutterBottom = false,
  noWrap = false,
  variant = 'body1',
  variantMapping = {
    body1: 'p',
    body2: 'p',
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
  },
}: TypographyProps) => {
  const typographyClasses = clsx(
    styles['typography__base'],
    styles[`typography__${variant}`],
    styles[`typography__align${align?.charAt(0).toUpperCase() + align?.slice(1)}`],
    display && styles[`typography__display${display?.charAt(0).toUpperCase() + display?.slice(1)}`],
    gutterBottom && styles[`typography__gutterBottom`],
    noWrap && styles[`typography__noWrap`],
  );

  const Component: React.ElementType = component || variantMapping[variant] || 'span';

  return <Component className={typographyClasses}>{children}</Component>;
};
