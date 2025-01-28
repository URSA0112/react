import Image from "next/image";
import styles from "./globals.css";

const people = [
  {
    id: 1,
    name: "Alice",
    phonenumber: 25,
    email: "alice@example.com",
    address: "New York"
  },
  {
    id: 2,
    name: "Bob",
    phonenumber: 30,
    email: "bob@example.com",
    address: "Los Angeles"
  },
]

function Card(props) {

  return (
    <div>
      <div className="cards-container">
        {/* card1 */}
        <div className="cards" id="card1">
          <div className="left-side">
            <div className="left-up">
              <div className="left-up-text">{props.user.name}</div>
            </div>
            <div className="left-bottom">
              <p className="left-bottom-info">{props.user.phonenumber}</p>
              <p className="left-bottom-info">{props.user.email}</p>
              <p className="left-bottom-info">
                {props.user.address}
              </p>
            </div>
          </div>
          <div className="right-side">
            <div className="right-up"></div>
            <div className="rigth-bottom"></div>
          </div>
        </div>
        {/* end of card-container */}
      </div>
    </div>
  );
}
export default function Home() {
  const cards = [];
  for (let i = 0; i < people.length; i++) {
    cards.push(<Card user = {people[i]}></Card>)
    console.log(<Card user = {people[i]}></Card>)

  }
  return(
  <div>
    {cards}
  </div>
  )
}
