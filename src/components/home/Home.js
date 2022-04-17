import { Card } from "../card/Card";
import Detail from "../detail/Detail";
import Number from "../numbers/Number";
import Clscomponent from "../others/Clscomponent";

const numbers = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const data = {
  name: "Adolf Hitler",
  welcome: "Welcome to Nazi Party",
  title: "Getting Started React",
  subtitle: "JavaScript Library",
  body: "This is a random text to fill place.",
  author: {
    firstName: "Adolf",
    lastName: "Hitler",
  },
  date: new Date(),
  numbers: [1, 2, 3, 4, 5],
};
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="card-list">
          <Card data={data} />
        </div>
        <div className="detail">
          <Detail numbers={[...Array(48).keys()]} />
        </div>
        <div className="num" style={{ height: "100%", margin: "80px 0px" }}>
          <h1>Numbers</h1>
          <p style={{ margin: "20px 0" }}>
            Yellow's are Prime, Blue's are Even and Red's are Odd.
          </p>
          <div className="numbers" style={numbers}>
            <Number numbers={[...Array(35).keys()]} />
          </div>
        </div>
        <div className="class-component">
          <h1>Class Components</h1>
          <Clscomponent data={data} />
        </div>
      </div>
    </>
  );
};

export default Home;
