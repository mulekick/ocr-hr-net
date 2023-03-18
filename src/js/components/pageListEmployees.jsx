// import modules
import {useSelector} from "react-redux";

// helpers and redux related
import {selectEmployees} from "../app/employeesSlice.js";

// subcomponents
import {DataTable} from "@mulekick/ocr-data-table-plugin";

// sample data
import {employeesCols} from "../helpers/constants.js";

const
    // init account page component
    PageListEmployees = props => {
        const
            // extract props
            {nul} = props,
            // retrieve source data from state selector
            {employeeslist} = useSelector(selectEmployees);

        // return component
        return <main>
            {
                // conditional rendering : display table if column definitions and rows data exist
                // (it is assessed that rows data match columns definitions ...)
                employeesCols && employeesCols.length && employeeslist && employeeslist.length ?
                    <DataTable colDefs={employeesCols} data={employeeslist} /> :
                    <span className="basic-styled">No employee data available.</span>
            }
        </main>;
    };

export default PageListEmployees;