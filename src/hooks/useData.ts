import { useState, useEffect } from 'react';
import type { Olympic } from '../models/Olympic';
import { fetchOlympics } from '../services/api';

export const useData = () => {
  const [data, setData] = useState<Olympic[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        setLoading(true);
        const result = await fetchOlympics();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Une erreur inconnue est survenue");
      } finally {
        setTimeout(() => setLoading(false), 500);
      }
    };

    loadInitialData();
  }, []);

  return { data, loading, error };
};