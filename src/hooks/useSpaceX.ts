import { useState, useEffect } from "react";

// definice typu pro data o letech SpaceX
export interface Launch {
  id: string;
  name: string;
  date_utc: string;
  success: boolean | null;
  details: string | null;
  flight_number: number;
}

// custom hook pro získávání dat o letech SpaceX
export const useSpaceX = () => {
    // stav pro uložení dat o letech
    const [launches, setLaunches] = useState<Launch[]>([]);
    // stav pro indikaci načítání dat
    const [loading, setLoading] = useState<boolean>(true);
    // stav pro uložení případné chyby
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // funkce pro načítání dat z API SpaceX
        fetch('https://api.spacexdata.com/v4/launches')
            .then((res) => res.json()) // převod odpovědi na JSON
            .then((data) => {
                setLaunches(data);
                setLoading(false); // nastavení načítání na false po úspěšném načtení dat
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { launches, loading, error };
};