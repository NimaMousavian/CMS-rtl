import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import NavBar from "./components/NavBar";
import SlideBar from "./components/SlideBar";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <div className="flex flex-row ">
        <div className="basis-2/12">
          <SlideBar />
        </div>
        <div className="flex flex-col grow basis-10/12">
          <div>
            <NavBar />
          </div>
          <main className="p-6">{router}</main>
        </div>
      </div>
    </>
  );
}

export default App;
