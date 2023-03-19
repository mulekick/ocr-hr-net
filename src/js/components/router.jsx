// import modules
import {createHashRouter, RouterProvider} from "react-router-dom";

// import components
import Layout from "./layout.jsx";
import PageNewEmployee from "./pageNewEmployee.jsx";
import PageListEmployees from "./pageListEmployees.jsx";

const
    // init router
     // init router (use a hash router for github pages support)
    // components states are not persisted on route change ...
    router = createHashRouter([
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
                element: <PageNewEmployee />
            }, {
                // default outlet for route /list (employees list page)
                path: `list`,
                element: <PageListEmployees />
            } ]
        }
    ]),
    // create router function component
    Rooter = () => <RouterProvider router={ router } />;

export default Rooter;