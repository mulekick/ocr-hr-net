const
    // ...
    StyledInput = props => {
        const
            // extract props
            {type, value, onChange, placeholder} = props;

        // return component
        return <span className="input-styled">
            <input type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </span>;
    };

export default StyledInput;