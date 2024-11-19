import styles from '../../../styles/components/Card.module.css';
import { FieldRation } from '../../../types/types';
import { Button } from '../../common/Button/Button';

interface RationCardProps {
  ration: FieldRation;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export const RationCard: React.FC<RationCardProps> = ({
  ration,
  onEdit,
  onDelete,
}) => {
  const getStatusColor = (status: FieldRation['status']) => {
    switch (status) {
      case 'available':
        return styles.statusAvailable;
      case 'deployed':
        return styles.statusDeployed;
      case 'expired':
        return styles.statusExpired;
      default:
        return '';
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3 className={styles.cardTitle}>Batch: {ration.batchNumber}</h3>
        <span className={`${styles.status} ${getStatusColor(ration.status)}`}>
          {ration.status}
        </span>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.info}>
          <p><strong>Quantity:</strong> {ration.quantity}</p>
          <p><strong>Location:</strong> {ration.storageLocation}</p>
          <p><strong>Production:</strong> {new Date(ration.productionDate).toLocaleDateString()}</p>
          <p><strong>Expires:</strong> {new Date(ration.expirationDate).toLocaleDateString()}</p>
        </div>
        <div className={styles.contents}>
          <h4>Contents:</h4>
          <ul>
            {Object.entries(ration.contents).map(([key, value]) => (
              <li key={key}>
                {key.replace(/([A-Z])/g, ' $1').charAt(0).toUpperCase() + 
                 key.replace(/([A-Z])/g, ' $1').slice(1)}: {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.cardActions}>
        <Button onClick={() => onEdit(ration.id)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(ration.id)}>Delete</Button>
      </div>
    </div>
  );
};