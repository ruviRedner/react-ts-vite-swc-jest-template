import { FieldRation } from '../types/types';
import { initialRations } from './mockData';

// Helper function to simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Initialize localStorage with mock data if empty
const initializeLocalStorage = () => {
  const stored = localStorage.getItem('rations');
  if (!stored) {
    localStorage.setItem('rations', JSON.stringify(initialRations));
  }
};

// Get all rations from localStorage
const getStoredRations = (): FieldRation[] => {
  initializeLocalStorage();
  const stored = localStorage.getItem('rations');
  return stored ? JSON.parse(stored) : [];
};

// Save rations to localStorage
const saveRations = (rations: FieldRation[]) => {
  localStorage.setItem('rations', JSON.stringify(rations));
};

export const fetchRations = async (): Promise<FieldRation[]> => {
  await delay(500); // Simulate network delay
  return getStoredRations();
};

export const getRationById = async (id: string): Promise<FieldRation> => {
  await delay(300);
  const rations = getStoredRations();
  const ration = rations.find(r => r.id === id);
  
  if (!ration) {
    throw new Error('Ration not found');
  }
  
  return ration;
};

export const createRation = async (rationData: Omit<FieldRation, 'id'>): Promise<FieldRation> => {
  await delay(500);
  const rations = getStoredRations();
  
  const newRation: FieldRation = {
    ...rationData,
    id: Math.random().toString(36).substr(2, 9), // Generate random ID
  };
  
  rations.push(newRation);
  saveRations(rations);
  
  return newRation;
};

export const updateRation = async (
  id: string,
  rationData: Omit<FieldRation, 'id'>
): Promise<FieldRation> => {
  await delay(500);
  const rations = getStoredRations();
  const index = rations.findIndex(r => r.id === id);
  
  if (index === -1) {
    throw new Error('Ration not found');
  }
  
  const updatedRation: FieldRation = {
    ...rationData,
    id,
  };
  
  rations[index] = updatedRation;
  saveRations(rations);
  
  return updatedRation;
};

export const deleteRation = async (id: string): Promise<void> => {
  await delay(500);
  const rations = getStoredRations();
  const filtered = rations.filter(r => r.id !== id);
  saveRations(filtered);
};

// Error handling utility
export const handleApiError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return 'An unknown error occurred';
};