/* eslint-disable no-shadow */

// import modules
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch} from "react-redux";

// react plugins
import DatePicker from "react-datepicker";
import Select from 'react-select';

// helpers and redux related
import {departments, states} from "../helpers/constants.js";
import {add} from "../app/employeesSlice.js";

const
    // init login page component
    CreateEmployeePage = props => {
        const
            // extract props
            {nul} = props,
            // dispatch hook
            dispatch = useDispatch(),
            // state persistence compliant navigation hook
            // navigate = useNavigate(),
            // store form data in component local state
            [ firstName, setFirstName ] = useState(``),
            [ lastName, setLastName ] = useState(``),
            [ birthDate, setBirthDate ] = useState(null),
            [ startDate, setStartDate ] = useState(null),
            [ street, setStreet ] = useState(``),
            [ city, setCity ] = useState(``),
            [ state, setState ] = useState(null),
            [ zipCode, setZipCode ] = useState(``),
            [ department, setDepartment ] = useState(null),
            // form submission handler
            createEmployee = ev => {
                ev.preventDefault();
                // dispatch add action to the store
                dispatch(add({
                    // string
                    firstName,
                    // string
                    lastName,
                    // date
                    birthDate,
                    // date
                    startDate,
                    // string
                    street,
                    // string
                    city,
                    // object
                    state,
                    // number
                    zipCode,
                    // object
                    department
                }));
                // navigate to the account page ...
                // navigate(`/account`);
            };

        // return component
        return <main className="container">

            <Link to={ `/list` }>View Current Employees</Link>

            <h2>Create Employee</h2>

            <form onSubmit={ createEmployee }>

                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" value={firstName} onChange={e => setFirstName(e.target.value)} />

                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={e => setLastName(e.target.value)} />

                <label htmlFor="date-of-birth">Date of Birth</label>
                <DatePicker selected={birthDate} onChange={d => setBirthDate(d)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker selected={startDate} onChange={d => setStartDate(d)} />

                <fieldset className="address">

                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input type="text" id="street" value={ street } onChange={e => setStreet(e.target.value)} />

                    <label htmlFor="city">City</label>
                    <input type="text" id="city" value={ city } onChange={e => setCity(e.target.value)} />

                    <label htmlFor="state">State</label>
                    <Select name="state" inputId="state" defaultValue={state} onChange={setState} options={states} />

                    <label htmlFor="zip-code">Zip Code</label>
                    <input type="number" id="zip-code" value={ zipCode } onChange={ e => setZipCode(e.target.value) } />

                </fieldset>

                <label htmlFor="department">Department</label>
                <Select name="department" inputId="department" defaultValue={department} onChange={setDepartment} options={departments} />

                <button type="submit">Save</button>

            </form>

        </main>;
    };

export default CreateEmployeePage;