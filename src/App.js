import "./App.css";
import Ex2 from "./components/Ex2";
import Hudini from "./components/Hudini";
import SpotCheck1 from "./components/SpotCheck1";
import SpotCheck2 from "./components/SpotCheck2";
import SpotCheck3 from "./components/SpotCheck3";
import SpotCheck4 from "./components/SpotCheck4";
import SpotCheck5 from "./components/SpotCheck5";
import { useState } from "react";
import Exercise1 from "./components/react-data-flow/Exercise1";
import Exercise2 from "./components/react-data-flow/Exercise2";
import ReactInputEx1 from "./components/react-input/ReactInputEx1";
import ReactInputEx2 from "./components/react-input/ReactInputEx2";
import SideEffect from "./components/useEffect/SideEffect";
import Watches from "./components/useEffect/Ex1-watches";
import FetchAandDisplay from "./components/useEffect/Ex2-FetchAndDisplay";

function App1() {
  const showCompany = (name, revenue) => {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  };
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 },
  ];

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {companies.map((c) => showCompany(c.name, c.revenue))}
      </div>
    </div>
  );
}

function App2() {
  const getClassName = (temperature) => {
    if (temperature < 15) return "freezing";
    else if (15 <= temperature && temperature <= 30) return "fair";
    else return "hell-scape";
  };
  const T = 35;
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {
          <div id="weatherBox" className={getClassName(T)}>
            {T}
          </div>
        }
      </div>
    </div>
  );
}

function Sum() {
  const num1 = 1;
  const num2 = 2;
  let sum = num1 + num2;
  return <div>{sum}</div>;
}

function LandingPage() {
  return <h1>Welcome!</h1>;
}

function Nav() {
  return (
    <div id="nav">
      <span>Home</span>
      <span>About</span>
    </div>
  );
}

function AboutUs() {
  return <p>This is an example of an about us page~</p>;
}

function About() {
  return (
    <div>
      About
      <SignUp />
      <Blurb />
    </div>
  );
}

function SignUp() {
  return <div>SignUp</div>;
}

function Blurb() {
  return <div>Blurb</div>;
}

function AppStorage() {
  //  localStorage.setItem("loggedIn", false);
  let isUserLoggedIn = localStorage.getItem("loggedIn");
  let componentToDisplay = isUserLoggedIn ? <LandingPage /> : <AboutUs />;
  return (
    <div className="app">
      <Nav />
      {componentToDisplay}
    </div>
  );
}

const Task = ({ task, markComplete }) => {
  const complete = () => markComplete(task.text);
  return (
    <div>
      {task.text} -<button onClick={complete}>Complete</button>
    </div>
  );
};

const SpotCheck = () => {
  const [tasks, setTasks] = useState([
    { text: "Take out trash", complete: false },
    { text: "Trash talk Carrie", complete: true },
    { text: "Carry boxes upstairs", complete: false },
  ]);

  const markComplete = (text) => {
    let newTasks = [...tasks];
    newTasks.find((t) => t.text === text).complete = true;
    setTasks(newTasks);
  };

  return (
    tasks
      // .filter((t) => !t.complete)
      .map((t) => <Task key={t.text} task={t} markComplete={markComplete} />)
  );
};

function App() {
  return (
    <>
      <Watches />
      <FetchAandDisplay />
      {/* <SideEffect /> */}
      {/* <ReactInputEx1 />
      <ReactInputEx2 />
      {/* <Exercise2 /> 
      <Exercise1 /> */}
      {/* <SpotCheck />
      <Ex2 />
      <Hudini />
      <SpotCheck1 />
      <SpotCheck2 />
      <SpotCheck3 />
      <SpotCheck4 />
      <SpotCheck5 /> */}
    </>
  );
}
export default App;
//export default Sum;
