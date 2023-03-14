// import modules
import {forwardRef} from "react";

// react plugins
import DatePicker from "react-datepicker";

const
    // style datepicker input
    StyledDateInput = forwardRef(({value, onClick}, ref) => <span className="input-styled">
        <input type="text" value={value} onClick={onClick} ref={ref} readOnly />
    </span>),
    // ...
    StyledDate = props => {
        const
            // extract props
            {selected, onChange} = props;

        // return component
        return <DatePicker selected={selected} onChange={onChange} customInput={<StyledDateInput />} popperClassName="select-date-font" />;
    };

export default StyledDate;