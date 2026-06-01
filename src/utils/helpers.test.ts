import { describe, it, expect } from 'vitest';
import { formatDate } from './helpers';

describe('formatDate', () => {
  it('spravne naformatuje ISO datum na cesky format', () => {
    expect(formatDate('2020-05-30T19:22:00.000Z')).toBe('30. 5. 2020');
  });

  it('vrati nahradni text pro prazdny vstup', () => {
    expect(formatDate('')).toBe('Neznámé datum');
  });
});