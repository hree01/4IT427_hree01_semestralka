# 🚀 SpaceX Mission Tracker

Semestrální práce pro předmět 4IT427 vypracovaná v knihovně React s využitím TypeScriptu. Aplikace stahuje reálná data o minulých startetch z veřejného rozhraní SpaceX API.

## 🌟 Splněné požadavky zadání
- **Komponenty & Struktura:** Projekt je modulárně rozdělen na znovupoužitelné komponenty (`MissionCard`), samostatné stránky (`Home`, `Detail`) a pomocné funkce.
- **Stav & Hooks:** Využití vestavěných hooků `useState`, `useEffect` a `useParams`. Vytvořen **vlastní custom hook** `useSpaceX` pro zapouzdření asynchronní fetch logiky.
- **Routing:** Kompletní klientské směrování pomocí `react-router-dom` (přechod ze seznamu na detail mise bez přenačítání stránky).
- **TypeScript:** Striktní typování všech komponent, props a API struktur pomocí rozhraní (`interface`).
- **Styling:** Všechny inline styly byly kompletně eliminovány a převedeny do izolovaných souborů metodou **CSS Modules** (`*.module.css`).
- **Testování:** Projekt obsahuje oba vyžadované typy testů běžící pod nástrojem `Vitest`:
  - **Unit test** pomocné funkce pro formátování data (`helpers.test.ts`).
  - **Integrační test** komponenty ověřující správné vykreslení dat v izolovaném DOM prostředí (`MissionCard.test.tsx`).
- **Git konvence:** Historie repozitáře striktně dodržuje sémantické konvence commit zpráv (`feat:`, `fix:`, `style:`, `test:`, `chore:`).

## 🛠️ Jak projekt spustit lokálně

1. Nainstalujte závislosti:
   ```bash
   npm install
2. Spusťte vývojový server:
   ```bash
   npm run dev
3. Spusťte testovací sadu:
   ```bash
   npm run test