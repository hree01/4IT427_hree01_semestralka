import { Link } from "react-router-dom";
import styles from "./MissionCard.module.css";
import { formatDate } from "@/utils/helpers";
import type { Launch } from "@/hooks/useSpaceX";

interface MissionCardProps {
  launch: Launch;
}

export const MissionCard = ({ launch }: MissionCardProps) => {
    return (
    <div className={styles.card}>
        <h3 className={styles.title}>{launch.name}</h3>
        <p className={styles.text}><strong>Datum:</strong> {formatDate(launch.date_utc)}</p>
        <p className={styles.text}>
            <strong>Stav:</strong> {launch.success ? "✅ Úspěšná" : "❌ Neúspěšná"}
        </p>
        <Link to={`/launch/${launch.id}`} className={styles.link}>
            Zobrazit detail
        </Link>
    </div>
    );
};