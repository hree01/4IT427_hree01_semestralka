import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import { MissionCard } from './MissionCard';
import type { Launch } from "@/hooks/useSpaceX";

// vytvoření testovacích dat jedné mise
const mockLaunch: Launch = {
  id: '111111',
  name: 'Test Mission',
  date_utc: '2020-05-30T19:22:00.000Z',
  success: true,
    details: 'This is a test mission.',
    flight_number: 42,
};

describe('MissionCard', () => {
    it('správně vykreslí informace o misi', () => {
    // vykreslení komponenty MissionCard s testovacími daty do testovacího prostředí
    render(
      <BrowserRouter>
        <MissionCard launch={mockLaunch} />
      </BrowserRouter>
    );

    // ověření, že název mise je zobrazen
    expect(screen.getByText('Test Mission')).toBeInTheDocument();
    // ověření, že datum mise je spprávně zobrazen na stránce
    expect(screen.getByText(/30\. 5\. 2020/)).toBeInTheDocument();    
    // ověření, že stav mise je zobrazen jako úspěšný
    expect(screen.getByText(/✅ Úspěšná/)).toBeInTheDocument();
    // ověření, že odkaz na detail mise je zobrazen
    expect(screen.getByText('Zobrazit detail')).toBeInTheDocument();

    const linkElement = screen.getByText('Zobrazit detail');
    expect(linkElement).toBeDefined();

    // ověření, že odkaz vede na správnou URL
    expect(linkElement.getAttribute('href')).toBe('/launch/111111');
  });
});