"use client"
import { useEffect, useState } from 'react';

interface UseCountUpProps {
  end: number;
  duration?: number;
}

export const Counter = ({ end, duration = 2500 }: UseCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 10);
    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(interval);
      }
      setCount(Math.ceil(start));
    }, 10);

    return () => clearInterval(interval);
  }, [end, duration]);

  return count;
};
