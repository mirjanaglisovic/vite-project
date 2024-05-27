import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card/Card";

// function App() {
//   const [count, setCount] = useState(0);

//   const osoba = {
//     name: "Jakub",
//     age: 17,
//   };
// }
//destructuring objekta
// const { name } = osoba;
// console.log(name);
//cemu je jednako name? NAME === OSOBA.NAME

//destructuring niza
// const osobaNiz = ["Kanita", 19];
// const [ime] = osobaNiz; //vrednosti u nizu su 0,1,2,.. i uzece prvu vrednost koji god naziv dodelimo
// console.log(ime);

const App = () => {
  return (
    <div>
      <h1>Hotel</h1>

      <Card
        title="SARDAR"
        content={
          <>
            $174 <del>$369</del>
          </>
        }
        text="per night"
        total="total $450"
      />
    </div>
  );
};

export default App;
