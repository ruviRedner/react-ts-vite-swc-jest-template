import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button/Button';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The requested page could not be found.</p>
        <Button onClick={() => navigate('/rations')}>
          Return to Rations List
        </Button>
      </div>
    </div>
  );
};