// import modules
import {createColumnHelper, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from "@tanstack/react-table";

const
    // colums helper
    ch = createColumnHelper(),
    // date formatter
    df = new Intl.DateTimeFormat(`en-US`, {year: `numeric`, month: `2-digit`, day: `2-digit`}),
    // columns definitions
    colDefs = [
        ch.accessor(`firstName`, {
            header: () => `First Name`
        }),
        ch.accessor(`lastName`, {
            header: () => `Last Name`
        }),
        ch.accessor(`startDate`, {
            header: () => `Start Date`,
            cell: c => df.format(c.getValue())
        }),
        ch.accessor(`department`, {
            header: () => `Department`,
            cell: c => c.getValue().label,
            sortingFn: `customSorting`
        }),
        ch.accessor(`birthDate`, {
            header: () => `Date of Birth`,
            cell: c => df.format(c.getValue())
        }),
        ch.accessor(`street`, {
            header: () => `Street`
        }),
        ch.accessor(`city`, {
            header: () => `City`
        }),
        ch.accessor(`state`, {
            header: () => `State`,
            cell: c => c.getValue().label,
            sortingFn: `customSorting`
        }),
        ch.accessor(`zipCode`, {
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
    // setup default table
    createTable = (data, sorting, setSorting, globalFilter, setGlobalFilter) => ({
        // source data
        data,
        // columns definitions
        columns: colDefs,
        // models pipeline for rows display
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

export default createTable;