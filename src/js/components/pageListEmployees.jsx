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
            <DataTable colDefs={employeesCols} data={employeeslist} />
        </main>;
    };

export default PageListEmployees;