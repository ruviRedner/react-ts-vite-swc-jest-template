import { useNavigate } from 'react-router-dom';
import { RationForm } from '../../components/rations/RationForm/RationForm';
import { createRation } from '../../services/rationService';
import styles from './CreateRation.module.css';
import { FieldRation } from '../../types/types';

export const CreateRation = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data: Omit<FieldRation, 'id'>) => {
    try {
      await createRation(data);
      navigate('/rations');
    } catch (error) {
      console.error('Failed to create ration:', error);
      // Add error handling here
    }
  };

  return (
    <div className={styles.container}>
      <h2>Create New Field Ration</h2>
      <RationForm
        onSubmit={handleSubmit}
        onCancel={() => navigate('/rations')}
      />
    </div>
  );
};