import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
// import LayOut from "./components/LayOut";

const LayOut = lazy(() => import("./components/LayOut"));
const HomePage = lazy(() => import("./pages/HomePage"));
const AdmissionsPage = lazy(() => import("./pages/AdmissionsPage"));
const AdmissionsPage2 = lazy(() => import("./pages/AdmissionsPage2"));
const QAPage = lazy(() => import("./pages/QAPage"));
const News = lazy(() => import("./pages/News"));
const Contact = lazy(() => import("./pages/Contact"));
const IntroducePage = lazy(() => import("./pages/IntroducePage"));
function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<LayOut></LayOut>}>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route
            path="/tuyen-sinh"
            element={<AdmissionsPage></AdmissionsPage>}
          ></Route>
          <Route
            path="/xet-tuyen"
            element={<AdmissionsPage2></AdmissionsPage2>}
          ></Route>
          <Route path="/tu-van" element={<QAPage></QAPage>}></Route>
          <Route path="/tin-tuc" element={<News></News>}></Route>
          <Route path="/lien-he" element={<Contact></Contact>}></Route>
          <Route
            path="/gioi-thieu"
            element={<IntroducePage></IntroducePage>}
          ></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
