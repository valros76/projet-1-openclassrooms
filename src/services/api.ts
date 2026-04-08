import type { Olympic } from "../models/Olympic";

const DATA_URL = '/datas/olympic.json'; // Assure-toi que le fichier est dans le dossier 'public'

export const fetchOlympics = async (): Promise<Olympic[]> => {
  const response = await fetch(DATA_URL);
  
  if (!response.ok) {
    throw new Error(`Erreur HTTP: ${response.status}`);
  }
  
  return response.json();
};