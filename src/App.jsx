// import { useState } from "react";
import "./App.css";
import HotelCard from "./components/Cards/HotelCard";
// import MySentence from "./components/MySentence/MySentence";
// import Greeting from "./components/Greeting/Greeting";
import hotels from "./common/hotel.json";

function App() {
  // const [count, setCount] = useState(0);
  // const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // const arr = []
  // for (let i = 1; i <= 10; i++) {
  //   arr.push(i);
  // }

  // const reverseArr = () => {
  //   const _arr = [...arr];
  //   const reversed = _arr.reverse();
  //   setArr(reversed);
  // };

  // const osoba = {
  //   name: "Jakub",
  //   age: 17,
  // };

  // destructuring objekta
  // const { name } = osoba;
  // console.log(name);
  // CEMU JE JEDNAKO name?
  // name === osoba.name

  // const osobaNiz = ["Kanita", 19];
  // destructuring niza
  // const [ime] = osobaNiz;
  // console.log(ime);

  // const a = 5
  // a++ === a = a + 1
  // a+1
  // setCount((prevValue) => prevValue++) NIJE KOREKTNO
  // setCount((prevValue) => prevValue + 3)
  return (
    // <React.Fragment>
    <div className="app">
      {/* <Greeting appName="Lyntel" fullName="Dzenan Kosuta" /> */}
      {/* <div className="card">
        <button onClick={() => setCount((prevValue) => prevValue - 1)}>
          decrease count {count}
        </button>
        <button onClick={() => setCount((prevValue) => prevValue + 1)}>
          increase count {count}
        </button>
      </div> */}
      {/* <button onClick={reverseArr}>Change order</button> */}
      {/* Ipravno i sa callback */}
      {/* <button onClick={() => reverseArr()}>Change order</button>
      {arr.map((num, index) => (
        <div
          key={index}
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <p>{num}. </p>
          <MySentence number={num} />
        </div>
      ))} */}
      <div className="hotels">
        {hotels.map((hotel) => (
          <HotelCard
            key={hotel.id}
            imageUrl={hotel.imageUrl}
            title={hotel.title}
            content={hotel.content}
            total={hotel.total}
          />
        ))}
      </div>
    </div>
    // </React.Fragment>
  );
}

export default App;
