// import modules
import {Outlet, Link} from "react-router-dom";

const
    // init general app layout
    Layout = props => {
        const
            // extract props
            {error} = props;

        // return component
        return <div>
            <header className="title">
                <h1><Link to={ `/` }>HRnet</Link></h1>
            </header>
            {
                /* display the error in the general navigation context ... */
                error ? <p>an error occured</p> : <Outlet />
            }
            <footer>
                <span>Copyright HRnet 2023</span>
            </footer>
        </div>;
    };

export default Layout;