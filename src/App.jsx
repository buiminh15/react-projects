import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import DefaultLayout from "./layout";

function App() {
  return (
    <BrowserRouter>
    <DefaultLayout />
  </BrowserRouter>
  );
}

export default App;
