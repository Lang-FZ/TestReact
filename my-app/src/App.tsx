import styles from "./App.module.css";
import robots from "./mockdata/robots.json";
import Robot from "./components/Robot";

const App = () => {
  return (
    <div className={styles.app}>
      <div className={styles.robotList}>
        {
          robots.map( (r) => (
              < Robot id={r.id} email={r.email} name={r.name} />
            )
          )
        }
      </div>
    </div>
  );
};

export default App;
