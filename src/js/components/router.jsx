// import modules
import {createBrowserRouter, RouterProvider} from "react-router-dom";

// import components
import Layout from "./layout.jsx";
import CreateEmployeePage from "./createEmployee.jsx";
import ListEmployeesPage from "./listEmployees.jsx";

const
    // init router
    router = createBrowserRouter([
        {
            path: `/`,
            // init / route
            element: <Layout />,
            // init error handling page
            errorElement: <Layout error={ true } />,
            // each subroute will return the <main> element
            children: [ {
                // default outlet for route / (new employee form)
                index: true,
                element: <CreateEmployeePage />
            }, {
                // default outlet for route /list (employees list page)
                path: `list`,
                element: <ListEmployeesPage />
            } ]
        }
    ]),
    // create router function component
    Rooter = () => <RouterProvider router={ router } />;

export default Rooter;