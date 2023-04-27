import { BrowserRouter, Routes, Route } from "react-router-dom";

import Tabs from "./components/tabs";

export default function App() {
  return (
    <BrowserRouter>
      <Tabs></Tabs>
    </BrowserRouter>
  );
}
