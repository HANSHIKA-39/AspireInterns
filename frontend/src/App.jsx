import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/shared/Navbar";
import Home from "./components/Home";
import Internships from "./components/Internships";
import Browse from "./components/Browse";
import Profile from "./components/Profile";
import { Provider } from "react-redux";
import store from "./redux/store";
import InternshipDescription from "./components/InternshipDescription";
import Companies from "./components/admin/companies";
import CompanyCreate from "./components/admin/CompanyCreate";
import CompanySetup from "./components/admin/CompanySetup";
import AdminInternships from "./components/admin/AdminInternships";
const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const appRouter = createBrowserRouter([
  {

    //FOR STUDENTS 

    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/internships",
        element: <Internships />,
      },
      {
        path:"/description/:id",
        element: <InternshipDescription />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },


      //FOR RECRUITERS

      {
        path:"/admin/companies",
        element: <Companies />,
      },
      {
        path:"/admin/companies/create",
        element: <CompanyCreate />,
      },
      {
        path:"/admin/companies/:id",
        element: <CompanySetup/>,
      },

      {
        path:"/admin/internships",
        element: <AdminInternships />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
