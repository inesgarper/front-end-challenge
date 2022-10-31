export const formatTime = (secs: number) => {
  const minutes = Math.floor(secs / 60);
  const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${returnedMinutes}:${returnedSeconds}`;
};

export const formatSecsToMins = (secs: number) => Math.ceil(secs / 60);

export const formatTagText = (text: string) => {
  const lowerText = text.toLowerCase().split('_');
  let formatedText = '';

  lowerText.forEach((word, i) => {
    const capitalLetter = word[0]?.toUpperCase() as string;

    if (i === 0) {
      formatedText = `${capitalLetter}${word.slice(1)}`;
    } else {
      formatedText += ` ${capitalLetter}${word.slice(1)}`;
    }
  });

  return formatedText;
};
