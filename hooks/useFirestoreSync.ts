'use client';

import { useState, useEffect, useCallback } from 'react';
import { doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export function useFirestoreSync<T>(
  collectionName: string,
  documentId: string,
  initialData: T
) {
  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    try {
      const docRef = doc(db, collectionName, documentId);

      // Real-time listener for multi-client and CMS updates
      const unsubscribe = onSnapshot(
        docRef,
        (snapshot) => {
          if (!isMounted) return;

          if (snapshot.exists()) {
            setData(snapshot.data() as T);
          } else {
            // Seed the document on first run
            setDoc(docRef, initialData as any, { merge: true }).catch((err) => {
              console.warn('Initial seeding note:', err.message);
            });
          }
          setIsLoading(false);
        },
        (err) => {
          if (!isMounted) return;
          console.warn('Firestore offline/fallback mode active:', err.message);
          setError(err.message);
          setIsLoading(false);
        }
      );

      return () => {
        isMounted = false;
        unsubscribe();
      };
    } catch (err: any) {
      if (isMounted) {
        console.warn('Firestore client initialization fallback:', err.message);
        setIsLoading(false);
      }
    }
  }, [collectionName, documentId, initialData]);

  // Mutation function to commit live edits back to Firestore
  const mutate = useCallback(
    async (updatedFields: Partial<T>) => {
      const docRef = doc(db, collectionName, documentId);
      const updatedState = { ...data, ...updatedFields };
      setData(updatedState);

      try {
        await setDoc(docRef, updatedState as any, { merge: true });
      } catch (err: any) {
        console.error('Failed to sync changes with Firestore:', err);
        throw err;
      }
    },
    [collectionName, documentId, data]
  );

  return { data, isLoading, error, mutate };
}