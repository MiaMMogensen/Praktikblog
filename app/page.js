import praktikUger from "@/data/praktikUger";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Følg med i min praktik hos .legal</h1>
      <p>
        Her på siden kan du følge med i min 10 ugers praktik, hvor jeg ugentligt
        vil skrive lidt om hvordan det går, og hvilke opgaver jeg har udført.
      </p>
      <h2 className={styles.ugeoversigt}>Ugeoversigt</h2>
      <ul className={styles.weekList}>
        {praktikUger.map((uge) => (
          <li key={uge.slug} className={styles.weekItem}>
            <Link href={`/praktik/${uge.slug}`} className={styles.weekLink}>
              {uge.uge} – {uge.titel}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
