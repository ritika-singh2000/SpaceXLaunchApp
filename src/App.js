import "./App.css";
import LaunchesList from "./Components/LaunchesList";

function App() {
  return (
    <div className="flex flex-col bg-gradient-to-r from-violet-500 to-fuchsia-500 h-screen w-screen relative ">
      <p className="self-center text-5xl my-3 font-bold text-white">
        SpaceX Launches App
      </p>
      <LaunchesList />
    </div>
  );
}

export default App;
