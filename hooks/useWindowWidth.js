import { useState, useEffect } from 'react';

const useWindowWidth = () => {
  // Initial state should consider SSR, where `window` is undefined
  const isClient = typeof window === 'object';
  const [windowWidth, setWindowWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    if (!isClient) {
      // If window is not defined, do nothing
      return false;
    }

    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]); // Depend on `isClient` to re-run the effect only if the environment changes

  return windowWidth;
};

export default useWindowWidth;
