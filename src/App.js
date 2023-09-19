import styles from './App.module.scss';
import { ReactComponent as Lines } from './images/sunset_lines.svg';

export default function App() {
  return (
    <main>
      main
      <section className={styles.sectionOne}>
        <h1>Calmaria</h1>
        <h2>
          Focus /
          <br />
          Breathe /
          <br />
          Relax /
        </h2>
        <div className="heroImage">
          <img
            src="https://calmaria.app/images/calmaria_front.png"
            alt="front"
          />
          <div className="animation">
            <img src="https://calmaria.app/images/sun.png" alt="sun" />
            <Lines />
          </div>
        </div>
      </section>
      <section className={styles.sectionTwo}>
        <div className={styles.descriptionText}>
          <p>
            Access to information has helped us evolve rapidly but not without
            side effects. Misinformation and the strong polarization of opinions
            are amplified by our confirmation bias tendencies. What to believe,
            who is right, who is wrong? Questions with no answers inevitably
            create anxiety. The good news is that there is a simple way to
            reduce it, just breathe. It works! There are several different
            breathing techniques and exercises that are designed to bring your
            body to a deep relaxation state. Holding your breath for a period of
            time allows your body to better oxygenate. One of the simplest
            techniques is the 4-7-8 method which is simply inhaling for 4
            seconds, holding your breath for 7 seconds and exhaling for 8
            seconds
          </p>
        </div>
      </section>
    </main>
  );
}
