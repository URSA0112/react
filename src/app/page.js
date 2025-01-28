import Image from "next/image";
import styles from "./globals.css";

const people = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    email: "alice@example.com",
    city: "New York"
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    email: "bob@example.com",
    city: "Los Angeles"
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
              <div className="left-up-text">{people[0].name}</div>
            </div>
            <div className="left-bottom">
              <p className="left-bottom-info">000-123-456-7890</p>
              <p className="left-bottom-info">email@yourdomain.com</p>
              <p className="left-bottom-info">
                Your address goes here 125 Street, USA
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
  for (let i = 0; i <3; i++) {
    cards.push(<Card></Card>);
  
  }
  return <div>{cards}</div>;
}
