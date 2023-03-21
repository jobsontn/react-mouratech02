import React, { useState, useEffect } from 'react';
import moment from 'moment';

function CountdownTimer({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = moment();
      const difference = moment.duration(targetDate.diff(now));

      if (difference.asMilliseconds() > 0) {
        const days = Math.floor(difference.asDays());
        const hours = Math.floor(difference.hours());
        const minutes = difference.minutes();
        const seconds = difference.seconds();
        setTimeRemaining(`${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos`);
      } else {
        setTimeRemaining('Tempo esgotado!');
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div>
      <p>{`Tempo restante: ${timeRemaining}`}</p>
    </div>
  );
}

export default CountdownTimer;
