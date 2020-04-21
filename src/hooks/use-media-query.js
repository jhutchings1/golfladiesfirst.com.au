/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from 'react';

export function useMediaQuery(query, whenTrue, whenFalse) {
  if (typeof window === 'undefined' || typeof window.matchMedia === 'undefined')
    return whenFalse;

  const mediaQuery = window.matchMedia(query);
  const [match, setMatch] = useState(!!mediaQuery.matches);

  useEffect(() => {
    const handler = () => setMatch(!!mediaQuery.matches);
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }, [mediaQuery]);

  return match ? whenTrue : whenFalse;
}
