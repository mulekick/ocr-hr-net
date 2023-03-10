// react plugins
import Select from 'react-select';

const
    // react-select styling prop
    customTheme = t => ({
        // default style
        ...t,
        // style overrides
        borderRadius: 5,
        colors: {
            // default colors
            ...t.colors,
            // colors overrides
            primary: `black`
        }
    }),
    // ...
    StyledSelect = props => {
        const
            // extract props
            {defaultValue, options, onChange, placeholder} = props;

        // return component
        return <span className="input-styled">
            <Select theme={customTheme} defaultValue={defaultValue} options={options} onChange={onChange} placeholder={placeholder} />
        </span>;
    };

export default StyledSelect;