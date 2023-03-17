// import modules
import {createColumnHelper, getCoreRowModel, getSortedRowModel, getFilteredRowModel, getPaginationRowModel} from "@tanstack/react-table";

const
    // colums helper
    ch = createColumnHelper(),
    // date formatter
    df = new Intl.DateTimeFormat(`en-US`, {year: `numeric`, month: `2-digit`, day: `2-digit`}),
    // create custom sorting function
    customSorting = (rowA, rowB, columnId) => (rowA.getValue(columnId).label < rowB.getValue(columnId).label ? 1 : -1),
    /*
    -------------------------------------------------------------------
    valid column definitions for the table are objects with the following signature :
    myColumnDefinition = {
        // string value that displays as a header for the column :
        header: `My column name`,
        // data type for values that the column will display, either :
        // `string` ->  string primitives
        // `date`   ->  Date objects
        // `select` ->  select input values, ie. objects with the signature { value<string>, label<string>}
        dataType: `string`,
        // field name (actually object key) of the value that the column will display :
        fieldName: `myColumnValue`
    }
    -------------------------------------------------------------------
    */
    // eslint-disable-next-line max-params
    createTable = (colDefs, data, sorting, setSorting, globalFilter, setGlobalFilter) => ({
        // source data
        data,
        // columns definitions
        columns: colDefs.map(x => {
            const
                // extract values
                {header, dataType, fieldName} = x;

            // init accessor
            let accessor = ch.accessor(fieldName, {
                // colum header
                header: () => header,
                // column value
                cell: c => (dataType === `date` ? df.format(c.getValue()) : dataType === `select` ? c.getValue().label : c.getValue())
            });

            // set custom sorting function for select fields
            if (dataType === `select`) {
                accessor = {
                    ...accessor,
                    sortingFn: `customSorting`
                };
            }

            // return accessor
            return accessor;
        }),
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
        // custom column sorting functions
        sortingFns: {customSorting},
        // global filtering function
        globalFilterFn: (row, columnId, value, addMeta) => {
            const
                // extract row values
                o = colDefs
                    .map(x => x.fieldName)
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
        // disable console debug messages
        debugTable: false
    });

export default createTable;