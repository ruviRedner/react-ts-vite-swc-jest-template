export interface FieldRation {
    id: string;
    batchNumber: string;
    productionDate: string;
    expirationDate: string;
    contents: RationContents;
    storageLocation: string;
    quantity: number;
    status: 'available' | 'deployed' | 'expired';
  }

  export interface RationContents {
    tunaCan: number;         // Main protein portion
    greenOlives: number;     // Whole green olives
    whiteBeans: number;      // White beans in tomato sauce
    spicyBlackBeans: number; // Spicy black beans in tomato sauce
    sweetCorn: number;       // Sweet corn kernels
    roastedPeanuts: number;  // Salted and roasted peanuts
    halva: number;           // Halva (can or snack)
    pineapple: number;       // Pineapple pieces in syrup
    chocolateSpread: number; // Chocolate spread (cocoa and vegetable fat based - parve)
  }

export const COLORS = {
    primary: '#4B5320',      // Military Olive
    secondary: '#8B7355',    // Military Brown
    accent: '#CD853F',       // Field Equipment
    background: '#F5F5DC',   // Light Khaki
    text: '#2F4F4F',         // Dark Slate
    error: '#8B0000',        // Dark Red
    success: '#006400',      // Dark Green
    warning: '#DAA520',      // Golden Rod
  };