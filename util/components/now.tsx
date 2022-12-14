/**
 * Server Component
 * @constructor
 */
export function Now() {
  const now = new Date();
  return <>{now.toLocaleTimeString()}</>;
}
