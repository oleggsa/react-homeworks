import './App.css';
// import Card from "./components/Card";
// import Definitions from "./components/Definitions";
import Progress from "./components/Progress";
import Alert from "./components/Alert";

function App() {
  // const definitions = [
  //   { dt: 'one', dd: 'two', id: 1 },
  //   { dt: 'another term', dd: 'another description', id: 2 },
  // ];

  return (
    <>
      {/*<Card title='Title texta a body absent' />*/}
      {/*<Card text="text body a title absent"/>*/}
      {/*<Card title='Title texta' text="text body a vishe title"/>*/}
      {/*<Definitions data={definitions}/>*/}
      <Progress percentage="60"/>
      <Alert type="success" text="Kek is kek not KeK but kEk"/>
    </>
  );
}

export default App;
