/**
 * Rolls a dice with the given number of sides.
 * @param {number} sides - Number of faces on the dice.
 * @returns {number} - Random integer between 1 and sides (inclusive).
 */
export function rollDice(sides) {
  if (sides < 1 || !Number.isInteger(sides)) {
    throw new Error("Sides must be a positive integer");
  }
  // 📌 Generate random number between 1 and sides
  return Math.floor(Math.random() * sides) + 1;
}
// Branch Merge!
