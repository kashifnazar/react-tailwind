import Body from "./components/Body";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-1 p-3'>
      <div className="col-span-2"><Header /></div>
      <div><NavBar /></div>
      <div><Body /></div>
    </div>
  );
}

export default App;
