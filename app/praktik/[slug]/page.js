import Link from "next/link";
import praktikUger from "@/data/praktikUger";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export default async function PraktikUge({ params }) {
  const { slug } = await params; // Next 15+
  const uge = praktikUger.find((u) => u.slug === slug);
  if (!uge) notFound();

  const qa = uge.refleksionslog?.spoergsmaal ?? {};

  return (
    <div className={styles.page}>
      <Link href="/" className={styles.backLink}>
        ←
      </Link>
      <article style={{ display: "grid", gap: "1.25rem" }}>
        <header style={{ display: "grid", gap: ".25rem" }}>
          <h2 style={{ margin: 0 }}>
            {uge.uge}: {uge.titel}
          </h2>
          <p style={{ margin: 0, opacity: 0.8 }}>
            <em>{uge.dato}</em>
          </p>
        </header>

        <section className={styles.twoCol}>
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Spontanlog</h3>

            <ul className={styles.list}>
              {uge.spontanlog.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            {uge.laeringsmaal?.length ? (
              <>
                <h4 className={styles.subTitle}>Læringsmål arbejdet med:</h4>
                <ul className={styles.list}>
                  {uge.laeringsmaal.map((maal, i) => (
                    <li key={i}>{maal}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </div>

          <div className={styles.col}>
            <h3 className={styles.colTitle}>Refleksionslog</h3>
            <p className={styles.text}>{uge.refleksionslog}</p>
          </div>
        </section>
      </article>
    </div>
  );
}
