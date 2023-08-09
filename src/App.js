import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./LayOut/Main";
import Login from "./Pages/login";
import Students from "./Pages/student";
import Courses from "./Pages/courses";
import Expenses from "./Pages/expenses";
import Payments from "./Pages/payments";
import Studentedit from "./Pages/studentedit";
import axios from "axios";



axios.defaults.headers.common = {
  Authorization: `Bearer ${localStorage.getItem("token")}`,
};
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="payments" element={<Payments />} />
          <Route path="students" element={<Students />} />
          <Route path="courses" element={<Courses />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="studentedit/:id" element={<Studentedit />} />
        </Route>

        <Route path="/">
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
