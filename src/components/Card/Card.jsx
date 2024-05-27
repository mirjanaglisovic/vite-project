import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <img
        src="https://www.art-serdar.hr/mojportfeljsve123/wp-content/uploads/2018/06/fotografiranje-hotela-001.jpg"
        width={270}
      />
      <div className="card-title">{props?.title}</div>
      <div className="card-content">{props?.content}</div>
      <div className="card-text">{props?.text}</div>
      <div className="card-total">{props?.total}</div>
      <div className="card-price">{props?.card}</div>
    </div>
  );
}
export default Card;

// function Card(props) {
//   return (
//     <div className="card">
//       <img src={props?.imageUrl} width={270} />
//       <div className="card-title">{props?.title}</div>
//       <div className="card-content">{props?.content}</div>
//       <div className="card-text">Per Night</div>
//       <div className="card-total">Total ${props.total}</div>
//       <div className="card-price">
//         <LiaHotelSolid className="icon" />
//         <p className="button-text">Show Hotel</p>
//       </div>
//     </div>
//   );
// }
// export default Card;

// function Greeting(props) {
//   return (
//     <div className="greeting-wraper">
//       <h1 className="greeting-title ">Dobro dosli na {props.appName} </h1>
//       <h2 className="greeting-subtitle">{props.fullName}</h2>
//     </div>
//   );
// }
// export default Greeting;
