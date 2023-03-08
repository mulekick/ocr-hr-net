// import modules
import {Outlet} from "react-router-dom";

const
    // init general app layout
    Layout = props => {
        const
            // extract props
            {error} = props;

        // return component
        return <>
            <header className="title">
                <h1>HRnet</h1>
            </header>
            {
                /* display the error in the general navigation context ... */
                error ? <p>an error occured</p> : <Outlet />
            }
            <footer>&nbsp;</footer>
        </>;
    };

export default Layout;