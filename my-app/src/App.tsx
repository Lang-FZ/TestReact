import React, { useState, useEffect } from 'react';
import styles from "./App.module.css";
import Robot from "./components/Robot";
import RobotDiscount from "./components/RobotDiscount";
import logo from "./assets/images/logo.svg";
import ShoppingCart from "./components/ShoppingCart";


interface Props {
  
}

interface State {
  robotGallery: any[]
}

const App: React.FC = (props: Props) => {

  const [count, setCount] = useState<number>(0);
  const [robotGallery, setRobotGallery] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.title = `点击${count}次`
  }, [count])

  useEffect(() => {

    const fetchData = async () => {

      setLoading(true);

      try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setRobotGallery(data);
        setError("");
        setLoading(false);

      } catch (e) {

        setLoading(false);

        if (e instanceof Error) {
          setError(e.message);
        }
      }
    };
    fetchData();

  }, []);

  return (

    <div className={styles.app}>

      <div className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <h1>购物平台名字……………………</h1>
      </div>

      <button onClick={() => {
        setCount(count + 1)
      }}
      >
        Click
      </button>

      <span>count: {count}</span>

      <ShoppingCart />

      {(error && error != "") ? (
        <div>网站出错: {error}</div>
      ) : (
        <div></div>
      )}

      {!loading ? (
        <div className={styles.robotList}>
          {
            robotGallery.map((r, index) => (
              index % 2 == 0 ? (
                < RobotDiscount id={r.id} email={r.email} name={r.name} />
              ) : (
                < Robot id={r.id} email={r.email} name={r.name} />
              )
            ))
          }
        </div>
      ) : (
        <h2>loading……</h2>
      )}
    </div>
  );
};

export default App;
