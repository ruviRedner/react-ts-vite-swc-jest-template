import styles from '../../styles/components/Layout.module.css';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav>
          <h1>Field Ration Management</h1>
          {/* Navigation items will go here */}
        </nav>
      </aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
};