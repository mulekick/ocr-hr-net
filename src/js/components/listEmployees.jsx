// import modules
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel, useReactTable} from "@tanstack/react-table";
import {selectEmployees} from "../app/employeesSlice.js";

const
    columnHelper = createColumnHelper(),
    columns = [
        columnHelper.accessor(`firstName`, {
            header: () => `First Name`
        }),
        columnHelper.accessor(`lastName`, {
            header: () => `Last Name`
        }),
        columnHelper.accessor(`startDate`, {
            header: () => `Start Date`,
            cell: c => c.getValue().toLocaleDateString()
        }),
        columnHelper.accessor(`department`, {
            header: () => `Department`,
            cell: c => c.getValue().label,
            sortingFn: `customSorting`
        }),
        columnHelper.accessor(`birthDate`, {
            header: () => `Date of Birth`,
            cell: c => c.getValue().toLocaleDateString()
        }),
        columnHelper.accessor(`street`, {
            header: () => `Street`
        }),
        columnHelper.accessor(`city`, {
            header: () => `City`
        }),
        columnHelper.accessor(`state`, {
            header: () => `State`,
            cell: c => c.getValue().label,
            sortingFn: `customSorting`
        }),
        columnHelper.accessor(`zipCode`, {
            header: () => `Zip Code`
        })
    ],
    // create custom sorting function
    customSorting = (rowA, rowB, columnId) => (rowA.getValue(columnId).label < rowB.getValue(columnId).label ? 1 : -1),
    // create global filtering function
    customFilter = (row, columnId, value, addMeta) => {
        const
            // extract row values
            o = [ `firstName`, `lastName`, `birthDate`, `startDate`, `street`, `city`, `state`, `zipCode`, `department` ]
                .reduce((r, x) => ({
                    // copy cell value
                    [x]: row.getValue(x),
                    // spread accumulator into new object
                    ...r
                }), {});

        // eslint-disable-next-line no-restricted-syntax
        for (const v of Object.values(o)) {
            // test according to value type (case insensitive) - exit on first match
            switch (true) {
            // date value
            case v instanceof Date && v.toLocaleDateString().includes(value.toLowerCase()) :
                return true;
            // list element value
            case Object.hasOwn(v, `label`) && Object.hasOwn(v, `value`) && v.label.toLowerCase().includes(value.toLowerCase()) :
                return true;
            // string value
            case typeof v === `string` && v.toLowerCase().includes(value.toLowerCase()) :
                return true;
            // process next value
            default :
                // do not return
            }
        }
        // filter out if nothing matches
        return false;
    },
    // init account page component
    ListEmployeesPage = props => {
        const
            // extract props
            {nul} = props,
            // state selector for user account management
            {list} = useSelector(selectEmployees),
            // store sorting parameters in local component state
            [ sorting, setSorting ] = useState([]),
            // store filtering parameters in local component state
            [ globalFilter, setGlobalFilter ] = useState(``),
            // create data table
            table = useReactTable({
                // source data
                data: list,
                // columns definitions
                columns,
                // pipeline models for rows display
                getCoreRowModel: getCoreRowModel(),
                getSortedRowModel: getSortedRowModel(),
                getFilteredRowModel: getFilteredRowModel(),
                getPaginationRowModel: getPaginationRowModel(),
                // pass sorting and filtering parameters from local component state
                state: {sorting, globalFilter},
                // sorting and filtering state update functions
                onSortingChange: setSorting,
                onGlobalFilterChange: setGlobalFilter,
                // sorting and global filtering functions
                sortingFns: {customSorting},
                globalFilterFn: customFilter,
                // disable console debug messages
                debugTable: false
            });

        // return component
        return <main className="container">

            <input type="text" value={globalFilter || ``} onChange={e => setGlobalFilter(String(e.target.value))} placeholder="Search all columns..." />

            <table>
                <thead>
                    {
                        table
                            .getHeaderGroups()
                            .map(headerGroup => <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => <th key={header.id}>
                                        {
                                            header.isPlaceholder ?
                                                null :
                                                // dafuq ?
                                                <div {...{onClick: header.column.getToggleSortingHandler()}}>
                                                    {
                                                        flexRender(header.column.columnDef.header, header.getContext())
                                                    }
                                                    {
                                                        {asc: ` 🔼`, desc: ` 🔽`}[header.column.getIsSorted()] || null
                                                    }
                                                </div>
                                        }
                                    </th>)
                                }
                            </tr>)
                    }
                </thead>
                <tbody>
                    {
                        table
                            .getRowModel().rows
                            .map(row => <tr key={row.id}>
                                {
                                    row
                                        .getVisibleCells()
                                        .map(cell => <td key={cell.id}>
                                            {
                                                flexRender(cell.column.columnDef.cell, cell.getContext())
                                            }
                                        </td>)
                                }
                            </tr>)
                    }
                </tbody>
            </table>

            <p>
                <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>{`<<`}</button>
                <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()} >{`<`}</button>
                <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>{`>`}</button>
                <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>{`>>`}</button>
            </p>

            <p>Page <strong>{table.getState().pagination.pageIndex + 1} of {table.getPageCount()}</strong></p>

            <select value={table.getState().pagination.pageSize} onChange={e => table.setPageSize(Number(e.target.value))}>
                {
                    [ 10, 20, 30, 40, 50 ].map(pageSize => <option key={pageSize} value={pageSize}>Show {pageSize}</option>)
                }
            </select>

            <p>
                <Link to={ `/` }>Home</Link>
            </p>
        </main>;
    };

export default ListEmployeesPage;