import { useState, useEffect } from 'react';

const useRealTimeData = (initialStats) => {
  const [stats, setStats] = useState(initialStats);

  useEffect(() => {
    const updateData = () => {
      setStats(prevStats => 
        prevStats.map(stat => {
          const isPositive = stat.trend.includes('+');
          const isCurrency = stat.value.includes('$');
          const isPercentage = stat.value.includes('%');
          
          // Simulate small random changes
          const change = (Math.random() - 0.5) * 0.05;
          let newValue;
          
          if (isCurrency) {
            const numValue = parseFloat(stat.value.replace(/[$,]/g, ''));
            newValue = (numValue * (1 + change)).toFixed(0);
            return { ...stat, value: '$' + newValue };
          } else if (isPercentage) {
            const numValue = parseFloat(stat.value.replace('%', ''));
            newValue = Math.max(0, (numValue * (1 + change)).toFixed(1));
            return { ...stat, value: newValue + '%' };
          } else if (isPositive) {
            const numValue = parseInt(stat.value.replace(/[+,]/g, ''));
            newValue = Math.max(0, Math.floor(numValue * (1 + change)));
            return { ...stat, value: '+' + newValue.toLocaleString() };
          } else {
            const numValue = parseInt(stat.value.replace(/[,]/g, ''));
            newValue = Math.max(0, Math.floor(numValue * (1 + change)));
            return { ...stat, value: newValue.toLocaleString() };
          }
        })
      );
    };

    const interval = setInterval(updateData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return stats;
};

export default useRealTimeData;
