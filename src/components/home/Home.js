import { Card } from "../card/Card";
import Detail from "../detail/Detail";
import Number from "../numbers/Number";

const numbers = {
  minHeight: "500px",
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
};

const data = {
  welcome: "Welcome to 30 Days Of React",
  title: "Getting Started React",
  subtitle: "JavaScript Library",
  author: {
    firstName: "Asabeneh",
    lastName: "Yetayeh",
  },
  date: new Date(),
  numbers: [1, 2, 3, 4, 5],
};
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="card-list">
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Card title="none" body="text" data={data} />
          <Detail numbers={Array(48).fill("x")} />
          <div className="num" style={{height: '100vh'}}>
            <h1>Numbers</h1>
            <p style={{ margin: "20px 0" }}>
              Yellow's are Prime, Blue's are Even and Red's are Odd.
            </p>
            <div className="numbers" style={numbers}>
              <Number numbers={[...Array(35).keys()]} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
