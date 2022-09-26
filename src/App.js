import './App.css';
// import Card from "./components/Card";
// import Definitions from "./components/Definitions";
import ProgressBar from 'react-bootstrap/ProgressBar';

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
      <ProgressBar now={30} />
    </>
  );
}

export default App;
