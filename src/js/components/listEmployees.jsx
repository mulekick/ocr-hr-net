// import modules
import {Link} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
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
        columnHelper.accessor(`birthDate`, {
            header: () => `Birth Date`,
            cell: c => c.getValue().toLocaleDateString()
        }),
        columnHelper.accessor(`startDate`, {
            header: () => `Start Date`,
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
        }),
        columnHelper.accessor(`department`, {
            header: () => `Department`,
            cell: c => c.getValue().label
        })
    ],
    // init account page component
    ListEmployeesPage = props => {
        const
            // extract props
            {nul} = props,
            // dispatch hook
            // dispatch = useDispatch(),
            // state selector for user account management
            {list} = useSelector(selectEmployees),
            table = useReactTable({data: list, columns, getCoreRowModel: getCoreRowModel()});

        // return component
        return <main className="container">
            <table>
                <thead>
                    {
                        table
                            .getHeaderGroups()
                            .map(headerGroup => <tr key={headerGroup.id}>
                                {
                                    headerGroup.headers.map(header => <th key={header.id}>
                                        {
                                            header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())
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
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
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