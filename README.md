# 🚀 SpaceX Mission Tracker

Semestrální práce pro předmět 4IT427 vypracovaná v knihovně React s využitím TypeScriptu. Aplikace stahuje reálná data o minulých startetch z veřejného rozhraní SpaceX API.

---

## 🌟 Splněné požadavky zadání

* **Komponenty & Struktura:** Projekt je modulárně rozdělen na znovupoužitelné komponenty (`MissionCard`), samostatné stránky (`Home`, `Detail`, `NotFound`) a pomocné funkce.
* **Stav & Hooks:** Využití vestavěných hooků `useState`, `useEffect` a `useParams`. Vytvořen **vlastní custom hook** `useSpaceX` pro kompletní zapouzdření asynchronní fetch logiky a separaci dat od UI.
* **Routing:** Kompletní klientské směrování pomocí `react-router-dom` (přechod ze seznamu na detail mise bez přenačítání stránky, dynamická URL `/launch/:id` a fallback pro neexistující adresy).
* **TypeScript:** Striktní typování všech komponent, props a API struktur pomocí rozhraní (`interface Launch`, `MissionCardProps`).
* **Styling:** Všechny komponenty jsou stylovány izolovaně metodou **CSS Modules** (`*.module.css`) pro zamezení globálních konfliktů jmen. Aplikace využívá moderní "Glassmorphism" efekty (poloprůhledné panely s rozmazáním pozadí).
* **Testování:** Projekt obsahuje oba vyžadované typy testů běžící pod nástrojem `Vitest` a `Testing Library`:
    * **Unit test** pomocné funkce pro formátování data (`helpers.test.ts`).
    * **Integrační test** komponenty ověřující správné vykreslení dat a správnost vygenerovaného odkazu v izolovaném DOM kontextu Routeru (`MissionCard.test.tsx`).
* **Git konvence:** Historie repozitáře přehledně mapuje vývoj projektu a dodržuje sémantické konvence commit zpráv (`feat:`, `fix:`, `style:`, `test:`, `chore:`).

---

## 🛠️ Klíčové funkce aplikace

* **Komplexní klientské operace:** Data stažená z API se na hlavní stránce řadí od nejnovějších, uživatel v nich může fulltextově vyhledávat podle názvu mise a filtrovat podle stavu (Vše / Úspěšné / Neúspěšné).
* **Klientské stránkování:** Možnost nastavit si počet položek na stránku (5, 10, 20) s plně reaktivním přepínáním stránek.
* **Globální statistiky:** Dynamický výpočet celkového počtu, úspěšných a neúspěšných misí z aktuálně dostupných dat.

---

## 💻 Jak projekt spustit lokálně

1.  Klonujte repozitář a nainstalujte závislosti:
    ```bash
    npm install
    ```
2.  Spusťte vývojový server (Vite):
    ```bash
    npm run dev
    ```
3.  Spusťte testovací sadu (Vitest):
    ```bash
    npm run test
    ```