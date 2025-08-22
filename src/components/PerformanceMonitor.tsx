import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  isHighPerformance: boolean;
  isMobile: boolean;
  supportsWebGL: boolean;
  deviceMemory: number;
  hardwareConcurrency: number;
}

export const usePerformanceMonitor = (): PerformanceMetrics => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    isHighPerformance: true,
    isMobile: false,
    supportsWebGL: true,
    deviceMemory: 8,
    hardwareConcurrency: 4
  });

  useEffect(() => {
    const detectPerformance = () => {
      // Mobile detection
      const isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                       window.innerWidth < 768;

      // WebGL support
      const canvas = document.createElement('canvas');
      const supportsWebGL = !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));

      // Hardware metrics
      const hardwareConcurrency = navigator.hardwareConcurrency || 4;
      // @ts-ignore - deviceMemory is experimental
      const deviceMemory = (navigator as any).deviceMemory || 8;
      
      // Performance score calculation
      let performanceScore = 0;
      
      // CPU score
      if (hardwareConcurrency >= 8) performanceScore += 3;
      else if (hardwareConcurrency >= 4) performanceScore += 2;
      else performanceScore += 1;
      
      // Memory score  
      if (deviceMemory >= 8) performanceScore += 3;
      else if (deviceMemory >= 4) performanceScore += 2;
      else performanceScore += 1;
      
      // Device type score
      if (!isMobile) performanceScore += 2;
      
      // WebGL support
      if (supportsWebGL) performanceScore += 1;
      
      // Battery API check for mobile devices
      if ('getBattery' in navigator) {
        (navigator as any).getBattery().then((battery: any) => {
          if (battery.level < 0.2) performanceScore -= 2; // Reduce performance if low battery
        });
      }
      
      // Connection speed check
      if ('connection' in navigator) {
        const connection = (navigator as any).connection;
        if (connection.effectiveType === '4g') performanceScore += 1;
        else if (connection.effectiveType === '3g') performanceScore -= 1;
        else if (connection.effectiveType === '2g') performanceScore -= 2;
      }

      const isHighPerformance = performanceScore >= 6;

      setMetrics({
        isHighPerformance,
        isMobile,
        supportsWebGL,
        deviceMemory,
        hardwareConcurrency
      });

      // Apply performance-based optimizations to document
      if (!isHighPerformance) {
        document.documentElement.style.setProperty('--duration-slow', '0.2s');
        document.documentElement.style.setProperty('--duration-normal', '0.1s');
        document.body.classList.add('reduced-animations');
      }

      // Log performance metrics for debugging
      console.log('🔧 Performance Metrics:', {
        score: performanceScore,
        isHighPerformance,
        isMobile,
        hardwareConcurrency,
        deviceMemory,
        supportsWebGL
      });
    };

    detectPerformance();
    
    // Re-check on window resize
    window.addEventListener('resize', detectPerformance);
    return () => window.removeEventListener('resize', detectPerformance);
  }, []);

  return metrics;
};

// Performance-based component wrapper
export const PerformanceWrapper: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
  requireHigh?: boolean;
}> = ({ children, fallback = null, requireHigh = false }) => {
  const { isHighPerformance } = usePerformanceMonitor();
  
  if (requireHigh && !isHighPerformance) {
    return <>{fallback}</>;
  }
  
  return <>{children}</>;
};

export default usePerformanceMonitor;
