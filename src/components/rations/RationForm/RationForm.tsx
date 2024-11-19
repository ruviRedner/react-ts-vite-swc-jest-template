// src/components/rations/RationForm/RationForm.tsx
import { useState } from 'react';
import styles from '../../../styles/components/Form.module.css';
import { FieldRation } from '../../../types/types';
import { Button } from '../../common/Button/Button';

// Default contents for all rations
const DEFAULT_CONTENTS = {
  tunaCan: 2,
  greenOlives: 1,
  whiteBeans: 1,
  spicyBlackBeans: 1,
  sweetCorn: 1,
  roastedPeanuts: 2,
  halva: 1,
  pineapple: 1,
  chocolateSpread: 2,
};

interface RationFormProps {
  initialData?: FieldRation;
  onSubmit: (data: Omit<FieldRation, 'id'>) => void;
  onCancel: () => void;
}

export const RationForm: React.FC<RationFormProps> = ({
  initialData,
  onSubmit,
  onCancel,
}) => {
  const [formData, setFormData] = useState<Omit<FieldRation, 'id'>>({
    batchNumber: initialData?.batchNumber || '',
    productionDate: initialData?.productionDate || '',
    expirationDate: initialData?.expirationDate || '',
    storageLocation: initialData?.storageLocation || '',
    quantity: initialData?.quantity || 0,
    status: initialData?.status || 'available',
    contents: DEFAULT_CONTENTS,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor="batchNumber">Batch Number:</label>
        <input
          type="text"
          id="batchNumber"
          value={formData.batchNumber}
          onChange={(e) =>
            setFormData({ ...formData, batchNumber: e.target.value })
          }
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="productionDate">Production Date:</label>
        <input
          type="date"
          id="productionDate"
          value={formData.productionDate}
          onChange={(e) =>
            setFormData({ ...formData, productionDate: e.target.value })
          }
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="expirationDate">Expiration Date:</label>
        <input
          type="date"
          id="expirationDate"
          value={formData.expirationDate}
          onChange={(e) =>
            setFormData({ ...formData, expirationDate: e.target.value })
          }
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="storageLocation">Storage Location:</label>
        <input
          type="text"
          id="storageLocation"
          value={formData.storageLocation}
          onChange={(e) =>
            setFormData({ ...formData, storageLocation: e.target.value })
          }
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="quantity">Total Quantity:</label>
        <input
          type="number"
          id="quantity"
          min="0"
          value={formData.quantity}
          onChange={(e) =>
            setFormData({ ...formData, quantity: Number(e.target.value) })
          }
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="status">Status:</label>
        <select
          id="status"
          value={formData.status}
          onChange={(e) =>
            setFormData({
              ...formData,
              status: e.target.value as 'available' | 'deployed' | 'expired'
            })
          }
          required
        >
          <option value="available">Available</option>
          <option value="deployed">Deployed</option>
          <option value="expired">Expired</option>
        </select>
      </div>

      <div className={styles.formActions}>
        <Button type="submit">Save</Button>
        <Button variant="secondary" onClick={onCancel} type="button">
          Cancel
        </Button>
      </div>
    </form>
  );
};