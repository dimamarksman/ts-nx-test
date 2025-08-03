export function sayHelloWorld(world: string) {
  return `Hello ${world}!. It's ${new Date().toISOString()}`;
}
export function sayGoodbye(name: string) {
  return `Goodbye ${name}!`;
}