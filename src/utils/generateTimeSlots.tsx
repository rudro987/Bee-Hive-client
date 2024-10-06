export const generateTimeSlots = (interval: number) => {
  const times: string[] = [];
  for (let i = 60; i <= 24 * 60; i += interval) {
    const hours = Math.floor(i / 60);
    const minutes = i % 60;
    const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;
    times.push(formattedTime);
  }
  return times;
};