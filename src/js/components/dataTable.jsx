// import modules
import {useState} from "react";

// react plugins
import {flexRender, useReactTable} from "@tanstack/react-table";

// fontawesome related
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowUpAZ, faArrowUpZA, faFastBackward, faFastForward, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";

// helpers and redux related
import createTable from "../helpers/table.js";

// subcomponents
import StyledInput from "./styledInput.jsx";
import StyledSelect from "./styledSelect.jsx";

const
    // init data table component
    DataTable = props => {
        const
            // extract props
            {colDefs, data} = props,
            // store sorting parameters in local component state
            [ sorting, setSorting ] = useState([]),
            // store filtering parameters in local component state
            [ globalFilter, setGlobalFilter ] = useState(``),
            // create data table (pass source data and local component state)
            table = useReactTable(createTable(colDefs, data, sorting, setSorting, globalFilter, setGlobalFilter)),
            // headers sorting icons
            sortingIcons = {
                asc: <FontAwesomeIcon icon={faArrowUpAZ} style={{color: `white`}} />,
                desc: <FontAwesomeIcon icon={faArrowUpZA} style={{color: `white`}} />
            },
            // columm width
            cw = 100 / Object.keys(data.at(0)).length;

        // return component
        return <>
            <div className="employees-list-header">
                { /* pagination management */ }
                <StyledSelect options={[ 10, 20, 30, 40, 50 ].map(x => ({value: x, label: `Show ${ x } rows`}))} onChange={option => table.setPageSize(Number(option.value))} placeholder="Select number of rows per page ..." />
                { /* filtering management */ }
                <StyledInput type="text" value={globalFilter || ``} onChange={e => setGlobalFilter(String(e.target.value))} placeholder="Search all columns..." />
            </div>

            <ul className="employees-list">
                {
                    table
                        // table headers
                        .getHeaderGroups()
                        .map(headerGroup => <li key={headerGroup.id}>
                            {
                                headerGroup.headers.map(header => <span style={{width: `${ cw }%`}} key={header.id}>
                                    {
                                        header.isPlaceholder ?
                                            null :
                                            <>
                                                {/* column title */}
                                                <div {...{onClick: header.column.getToggleSortingHandler()}}>{flexRender(header.column.columnDef.header, header.getContext())}</div>
                                                {/* sorting indication */}
                                                {sortingIcons[header.column.getIsSorted()] || null}
                                            </>
                                    }
                                </span>)
                            }
                        </li>)
                }
                {
                    table
                        // table rows
                        .getRowModel().rows
                        .map(row => <li key={row.id}>
                            {
                                row
                                    .getVisibleCells()
                                    .map(cell => <span style={{width: `${ cw }%`}} key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>)
                            }
                        </li>)
                }
            </ul>

            <div className="employees-list-footer">
                { /* pagination display */ }
                <span className="basic-styled">Page <strong>{table.getState().pagination.pageIndex + 1} of {Math.max(table.getPageCount(), 1)}</strong></span>
                { /* pages navigation */ }
                <span>
                    <FontAwesomeIcon icon={faFastBackward} style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} onClick={() => table.setPageIndex(0)} />
                    <FontAwesomeIcon icon={faStepBackward} style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} />
                    <FontAwesomeIcon icon={faStepForward} style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} onClick={() => table.nextPage()} />
                    <FontAwesomeIcon icon={faFastForward} style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} onClick={() => table.setPageIndex(table.getPageCount() - 1)} />
                </span>
            </div>
        </>;
    };

export default DataTable;