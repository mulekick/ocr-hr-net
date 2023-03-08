// import modules
import {useState} from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {createColumnHelper, flexRender, getCoreRowModel, getSortedRowModel, getFilteredRowModel, useReactTable} from "@tanstack/react-table";
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
            cell: c => c.getValue().label
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
            cell: c => c.getValue().label
        }),
        columnHelper.accessor(`zipCode`, {
            header: () => `Zip Code`
        })
    ],
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
                // get models for rows display
                getCoreRowModel: getCoreRowModel(),
                getSortedRowModel: getSortedRowModel(),
                getFilteredRowModel: getFilteredRowModel(),
                // pass sorting and filtering parameters from local component state
                state: {sorting, globalFilter},
                // sorting and filtering state update function
                onSortingChange: setSorting,
                onGlobalFilterChange: setGlobalFilter,
                // global filtering function
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
            <Link to={ `/` }>Home</Link>
        </main>;
    };

export default ListEmployeesPage;