import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './RationList.module.css';
import React from 'react';
import { RationCard } from '../../components/rations/RationCard/RationCard';
import { FieldRation } from '../../types/types';
import { fetchRations, deleteRation, handleApiError } from '../../services/rationService';
import { Button } from '../../components/common/Button/Button';

export const RationList: React.FC = () => {
  const [rations, setRations] = useState<FieldRation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loadRations = async () => {
    try {
      const data = await fetchRations();
      setRations(data);
      setError(null);
    } catch (err) {
      setError(handleApiError(err));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRations();
  }, []);

  const handleEdit = (id: string) => {
    navigate(`/rations/${id}/edit`);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this ration?')) {
      try {
        await deleteRation(id);
        await loadRations(); // Reload the list after deletion
        setError(null);
      } catch (err) {
        setError(handleApiError(err));
      }
    }
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <p data-testid="ration-list-title">Loading rations...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 data-testid="ration-list-title">Field Rations Inventory</h2>
        <Button onClick={() => navigate('/rations/new')}>Add New Ration</Button>
      </div>
      
      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      <div className={styles.rationList}>
        {rations.length === 0 ? (
          <p className={styles.noRations}>No rations found. Add some to get started.</p>
        ) : (
          rations.map((ration) => (
            <RationCard
              key={ration.id}
              ration={ration}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};