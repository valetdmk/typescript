import { useEffect, useState } from 'react';

interface TimerProps {
  initialSeconds: number;
}

export function TimerTimeout({ initialSeconds }: TimerProps) {
  const [seconds, setSeconds] = useState<number>(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) return;

    const timeout = setTimeout(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearTimeout(timeout);
  }, [seconds]);

  return <>{seconds > 0 ? `Осталось: ${seconds} сек.` : 'Время вышло!'}</>;
}