export function asset(file) {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${String(file).replace(/^\//, '')}`;
}
