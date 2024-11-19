import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { RationForm } from '../../components/rations/RationForm/RationForm';
import { getRationById, updateRation, handleApiError } from '../../services/rationService';
import styles from './EditRation.module.css';
import { FieldRation } from '../../types/types';
import { Button } from '../../components/common/Button/Button';

export const EditRation = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [ration, setRation] = useState<FieldRation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRation = async () => {
      try {
        if (!id) return;
        const data = await getRationById(id);
        setRation(data);
        setError(null);
      } catch (err) {
        setError(handleApiError(err));
      } finally {
        setLoading(false);
      }
    };

    loadRation();
  }, [id]);

  const handleSubmit = async (data: Omit<FieldRation, 'id'>) => {
    try {
      if (!id) return;
      await updateRation(id, data);
      navigate('/rations');
    } catch (err) {
      setError(handleApiError(err));
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        Loading ration data...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          {error}
        </div>
        <Button onClick={() => navigate('/rations')}>
          Return to List
        </Button>
      </div>
    );
  }

  if (!ration) {
    return (
      <div className={styles.container}>
        <div className={styles.error}>
          Ration not found
        </div>
        <Button onClick={() => navigate('/rations')}>
          Return to List
        </Button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Edit Field Ration</h2>
      <RationForm
        initialData={ration}
        onSubmit={handleSubmit}
        onCancel={() => navigate('/rations')}
      />
    </div>
  );
};