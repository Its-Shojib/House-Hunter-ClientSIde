import { useEffect, useState } from 'react';

const useAuthStatusMonitor = () => {
  // State to store the authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to check authentication status
  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/status', {
        method: 'GET',
        credentials: 'include', // Include credentials for cross-origin requests
      });

      const data = await response.json();
      return data.isAuthenticated;
    } catch (error) {
      console.error('Error checking authentication status:', error);
      return false;
    }
  };

  // Function to handle authentication state changes
  const handleAuthStateChanged = async () => {
    const isAuthenticated = await checkAuthStatus();
    setIsAuthenticated(isAuthenticated);

    // Update your UI or trigger other actions based on authentication state
    if (isAuthenticated) {
      console.log('User is authenticated');
      // Perform actions for authenticated state (e.g., show user profile)
    } else {
      console.log('User is not authenticated');
      // Perform actions for unauthenticated state (e.g., show login form)
    }
  };

  // useEffect to run on component mount and set up an interval for periodic checks
  useEffect(() => {
    // Call the function initially to set the initial UI state
    handleAuthStateChanged();

    // Set up an interval to check for changes periodically
    const intervalId = setInterval(handleAuthStateChanged, 30000); // Check every 30 seconds, adjust as needed

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Expose the authentication status for external use if needed
  return isAuthenticated;
};

export default useAuthStatusMonitor;
