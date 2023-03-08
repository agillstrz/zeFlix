import { createContext } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import { SetUpRouter } from "./router/SetUpRouter";
export const myFav = createContext(undefined);

function App() {
  // const [fav, setFav] = useState([]);
  // const fav = [18];
  // const handleAddList = (e, id) => {
  //   e.preventDefault();
  //   fav.push(id);
  // };

  return (
    // <>
    //   <myFav.Provider value={{ fav, handleAddList }}>
    //     <SetUpRouter />
    //   </myFav.Provider>
    // </>

    <>
      <SkeletonTheme baseColor="#202020" highlightColor="#444">
        <SetUpRouter />
      </SkeletonTheme>
    </>
  );
}

export default App;
