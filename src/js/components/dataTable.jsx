// import modules
import {useState} from "react";

// react plugins
import {flexRender, useReactTable} from "@tanstack/react-table";

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
            {data} = props,
            // store sorting parameters in local component state
            [ sorting, setSorting ] = useState([]),
            // store filtering parameters in local component state
            [ globalFilter, setGlobalFilter ] = useState(``),
            // create data table (pass source data and local component state)
            table = useReactTable(createTable(data, sorting, setSorting, globalFilter, setGlobalFilter)),
            // headers sorting icons
            sortingIcons = {
                asc: <i style={{color: `white`}} className="fa fa-arrow-up" aria-hidden="true"></i>,
                desc: <i style={{color: `white`}} className="fa fa-arrow-down" aria-hidden="true"></i>
            };

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
                                headerGroup.headers.map(header => <span key={header.id}>
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
                                    .map(cell => <span key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</span>)
                            }
                        </li>)
                }
            </ul>

            <div className="employees-list-footer">
                { /* pagination display */ }
                <span className="basic-styled">Page <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong></span>
                { /* pages navigation */ }
                <span>
                    <i style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} className="fa fa-fast-backward" aria-hidden="true" onClick={() => table.setPageIndex(0)}></i>
                    <i style={{color: `black`, display: table.getCanPreviousPage() ? `block` : `none`}} className="fa fa-step-backward" aria-hidden="true" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}></i>
                    <i style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} className="fa fa-step-forward" aria-hidden="true" onClick={() => table.nextPage()}></i>
                    <i style={{color: `black`, display: table.getCanNextPage() ? `block` : `none`}} className="fa fa-fast-forward" aria-hidden="true" onClick={() => table.setPageIndex(table.getPageCount() - 1)}></i>
                </span>
            </div>
        </>;
    };

export default DataTable;