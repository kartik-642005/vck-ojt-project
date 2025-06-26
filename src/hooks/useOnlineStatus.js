// src/hooks/useOnlineStatus.js
import { useState, useEffect } from 'react';
/**
 * Custom React Hook to track the online/offline status of the browser.
 * @returns {boolean} - True if online, false if offline.
 */
const useOnlineStatus =()=> {
  // Initialize state with the current online status
  const [isOnline, setIsOnline] = useState(navigator.onLine);//navigator.onLine ही JavaScript मधील property आहे, जी true असेल जर डिव्हाइस इंटरनेटला connected असेल.
  useEffect(() => {
    // Event handlers to update the state
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    // Add event listeners when the component mounts
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    // Clean up event listeners when the component unmounts
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []); // Empty dependency array means this effect runs only once on mount and cleans up on unmount
  return isOnline;
}
export default useOnlineStatus;