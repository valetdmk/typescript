import { useEffect, useState } from 'react';

interface TimerProps {
  initialSeconds: number;
}

export function TimerInterval({ initialSeconds }: TimerProps) {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const interval = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return <>{seconds > 0 ? `Осталось: ${seconds} сек.` : "Время вышло!"}</>;
}