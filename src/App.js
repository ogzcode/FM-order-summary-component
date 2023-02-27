import backgroundImage from "./images/background.svg";
import Order from "./components/OrderMain";

function App() {
  return (
    <div className="w-screen h-screen bg-[#e0e8ff] relative flex justify-center items-center">
      <img src={backgroundImage} className="w-full h-1/2 absolute top-0 left-0" alt="bg" />
      <Order />
    </div>
  );
}

export default App;
