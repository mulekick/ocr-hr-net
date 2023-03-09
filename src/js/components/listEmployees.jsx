// import modules
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

// react plugins
import Select from 'react-select';
import {flexRender, useReactTable} from "@tanstack/react-table";

// helpers and redux related
import {selectEmployees} from "../app/employeesSlice.js";
import createTable from "../helpers/table.js";

const
    // init account page component
    ListEmployeesPage = props => {
        const
            // extract props
            {nul} = props,
            // retrieve source data from state selector
            {list} = useSelector(selectEmployees),
            // store sorting parameters in local component state
            [ sorting, setSorting ] = useState([]),
            // store filtering parameters in local component state
            [ globalFilter, setGlobalFilter ] = useState(``),
            // create data table (pass source data and local component state)
            table = useReactTable(createTable(list, sorting, setSorting, globalFilter, setGlobalFilter));

        // return component
        return <main className="container">

            <div className="employees-list-pagination-search">
                { /* pagination management */ }
                <span><Select theme={t => ({...t, borderRadius: 5, colors: {...t.colors, primary: `black`}})} placeholder="Select number of rows per page ..." onChange={option => table.setPageSize(Number(option.value))} options={[ 10, 20, 30, 40, 50 ].map(x => ({value: x, label: `Show ${ x } rows`}))} /></span>
                { /* filtering management */ }
                <span><input type="text" value={globalFilter || ``} onChange={e => setGlobalFilter(String(e.target.value))} placeholder="Search all columns..." /></span>
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
                                                <div {...{onClick: header.column.getToggleSortingHandler()}}>
                                                    {/* column title */}
                                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                                </div>
                                                <div>
                                                    {/* sorting indication */}
                                                    {{asc: `🔺`, desc: `🔻`}[header.column.getIsSorted()] || null}
                                                </div>
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
                                    .map(cell => <span key={cell.id}>
                                        {
                                            flexRender(cell.column.columnDef.cell, cell.getContext())
                                        }
                                    </span>)
                            }
                        </li>)
                }
            </ul>

            <p>
                <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>{`<<`}</button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} >{`<`}</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{`>`}</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>{`>>`}</button>
            </p>

            <p>Page <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong></p>

            <p>
                <Link to={ `/` }>Home</Link>
            </p>
        </main>;
    };

export default ListEmployeesPage;