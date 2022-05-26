import { Route, Routes } from "react-router-dom";
import * as comps from "./barrel";
const MainRoutes = ({}) => {
  return (
    <Routes>
      <Route path="/" element={<comps.Home />} />
    </Routes>
  );
};
export default MainRoutes;
