import { useEffect, useState } from 'react';

export const UseTypeText = (text: string, speed: number) => {
  const [displayText, setDisplayText] = useState(['']);

  useEffect(() => {
    let i = 0;
    for (let letter of text) {
      setTimeout(() => {
        setDisplayText((displayTextPrevious) => [
          ...displayTextPrevious,
          letter,
        ]);
      }, speed * i);
      i++;
    }
  }, []);

  return {
    displayText,
  };
};
