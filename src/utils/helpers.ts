export const formatDate = (dateString: string): string => {
  if (!dateString) return 'Neznámé datum';
  const date = new Date(dateString);
  return date.toLocaleDateString('cs-CZ');
};