// import modules
import {useState} from "react";
import {useDispatch} from "react-redux";

// helpers and redux related
import {departments, states} from "../helpers/constants.js";
import {add} from "../app/employeesSlice.js";

// subcomponents
import StyledInput from "./styledInput.jsx";
import StyledSelect from "./styledSelect.jsx";
import StyledDate from "./styledDate.jsx";
import StyledModal from "./styledModal.jsx";

const
    // init login page component
    PageNewEmployee = props => {
        const
            // extract props
            {nul} = props,
            // dispatch hook
            dispatch = useDispatch(),
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
            // store modal state in component local state
            [ modalState, setModalState ] = useState(false),
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
                // open confirmation modal
                setModalState(true);
            };

        // return component
        return <main>
            { /* state is lifted from the modal component to the local compnent ... */}
            <StyledModal modalState={modalState} onModalStateChange={setModalState} />
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