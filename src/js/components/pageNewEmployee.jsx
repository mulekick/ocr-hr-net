/* eslint-disable no-shadow */

// import modules
import {useState} from "react";
import {useNavigate, Link} from "react-router-dom";
import {useDispatch} from "react-redux";

// helpers and redux related
import {departments, states} from "../helpers/constants.js";
import {add} from "../app/employeesSlice.js";

// subcomponents
import StyledInput from "./styledInput.jsx";
import StyledSelect from "./styledSelect.jsx";
import StyledDate from "./styledDate.jsx";

const
    // init login page component
    PageNewEmployee = props => {
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
        return <main>
            <form onSubmit={ createEmployee }>
                {/* general fields */}
                <div className="form-fields">
                    <div>
                        <span className="basic-styled">First Name</span>
                        <StyledInput type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <span className="basic-styled">Last Name</span>
                        <StyledInput type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <span className="basic-styled">Date of Birth</span>
                        <StyledDate selected={birthDate} onChange={d => setBirthDate(d)} />
                    </div>
                    <div>
                        <span className="basic-styled">Start Date</span>
                        <StyledDate selected={startDate} onChange={d => setStartDate(d)} />
                    </div>
                    <div>
                        <span className="basic-styled">Department</span>
                        <StyledSelect defaultValue={department} options={departments} onChange={setDepartment} placeholder="Select department ..." />
                    </div>
                </div>
                {/* address fields + save button */}
                <div>
                    <fieldset className="form-fields">
                        <div>
                            <span className="basic-styled">Street</span>
                            <StyledInput type="text" value={street} onChange={e => setStreet(e.target.value)} />
                        </div>
                        <div>
                            <span className="basic-styled">City</span>
                            <StyledInput type="text" value={city} onChange={e => setCity(e.target.value)} />
                        </div>
                        <div>
                            <span className="basic-styled">State</span>
                            <StyledSelect defaultValue={state} options={states} onChange={setState} placeholder="Select state ..." />
                        </div>
                        <div>
                            <span className="basic-styled">Zip Code</span>
                            <StyledInput type="number" value={zipCode} onChange={e => setZipCode(e.target.value)} />
                        </div>
                    </fieldset>
                    <button type="submit">Save</button>
                </div>
            </form>

        </main>;
    };

export default PageNewEmployee;

/*


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
*/