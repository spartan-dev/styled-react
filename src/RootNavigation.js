import { Route, Routes } from "react-router-dom";
import { Auth } from "./components";
function RootNavigation() {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
}

export default RootNavigation;
