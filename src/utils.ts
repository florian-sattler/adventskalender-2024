function random(seed: number): number {
  const x = Math.sin(seed++) * 12345;
  return x - Math.floor(x);
}

// shuffle but make sure the order is always the same
export const shuffelWithSeed = <T>(seed: number, array: T[]): T[] => {
  const shuffledDoors = array.slice();
  for (let i = shuffledDoors.length - 1; i > 0; i--) {
    const j = Math.floor(random(seed++) * (i + 1));
    [shuffledDoors[i], shuffledDoors[j]] = [shuffledDoors[j], shuffledDoors[i]];
  }
  return shuffledDoors;
};
