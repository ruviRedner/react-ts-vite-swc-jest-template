import { FieldRation } from '../types/types';

export const initialRations: FieldRation[] = [
    {
      id: '1',
      batchNumber: 'BAT-2024-001',
      productionDate: '2024-01-01',
      expirationDate: '2025-01-01',
      contents: {
        tunaCan: 2,
        greenOlives: 1,
        whiteBeans: 1,
        spicyBlackBeans: 1,
        sweetCorn: 1,
        roastedPeanuts: 2,
        halva: 1,
        pineapple: 1,
        chocolateSpread: 2,
      },
      storageLocation: 'Warehouse A',
      quantity: 100,
      status: 'available',
    },
    {
      id: '2',
      batchNumber: 'BAT-2024-002',
      productionDate: '2024-02-01',
      expirationDate: '2025-02-01',
      contents: {
        tunaCan: 2,
        greenOlives: 1,
        whiteBeans: 1,
        spicyBlackBeans: 1,
        sweetCorn: 1,
        roastedPeanuts: 2,
        halva: 1,
        pineapple: 1,
        chocolateSpread: 2,
      },
      storageLocation: 'Warehouse B',
      quantity: 150,
      status: 'deployed',
    },
  ];