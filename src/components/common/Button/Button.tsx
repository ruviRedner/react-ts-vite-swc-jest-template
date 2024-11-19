import styles from '../../../styles/components/Button.module.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';  // Added type prop
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  onClick,
  children,
  disabled,
  type = 'button'  // Default to 'button'
}) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};