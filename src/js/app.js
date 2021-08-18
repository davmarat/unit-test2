export default function sortByHealth(heroes) {
  const heroesHP = heroes.sort((a, b) => b.health - a.health);
  return heroesHP;
}
