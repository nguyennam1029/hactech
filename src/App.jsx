import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import LayOut from "./components/LayOut";

const LayOut = lazy(() => import("./components/LayOut"));
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayOut></LayOut>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
