// import modules
import {useSelector} from "react-redux";

// helpers and redux related
import {selectEmployees} from "../app/employeesSlice.js";

// subcomponents
import DataTable from "./dataTable.jsx";

const
    // init account page component
    PageListEmployees = props => {
        const
            // extract props
            {nul} = props,
            // retrieve source data from state selector
            {list} = useSelector(selectEmployees);

        // return component
        return <main>
            <DataTable data={list} />
        </main>;
    };

export default PageListEmployees;