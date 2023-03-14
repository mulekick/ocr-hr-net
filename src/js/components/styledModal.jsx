// import modules
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import Modal from "react-modal";

// bind modal to your app root element
Modal.setAppElement(`#root`);

const
    // apply styles to center modal over the page
    centerModal = {
        content: {
            top: `50%`,
            left: `50%`,
            right: `auto`,
            bottom: `auto`,
            marginRight: `-50%`,
            transform: `translate(-50%, -50%)`
        }
    },
    // init login page component
    StyledModal = props => {
        const
            // extract props
            {modalState, onModalStateChange} = props,
            // state persistence compliant navigation hook
            navigate = useNavigate(),
            // modal close handler
            closeModal = ev => onModalStateChange(false);

        // use an effect to trigger navigation to the employees list page on popup close
        // register effect callback to run on component unmount (navigate to employees list
        // if modal is opened or do nothing if modal is closed)
        // skip the effect if modal state does not change ...
        // eslint-disable-next-line react-hooks/exhaustive-deps
        useEffect(() => () => (modalState ? navigate(`/list`) : null), [ modalState ]);

        // return component
        return <Modal isOpen={modalState} style={centerModal} contentLabel="Confirmation">
            <div>
                <span className="basic-styled">Employee created !</span>
            </div>
            <button onClick={closeModal}>close</button>
        </Modal>;
    };

export default StyledModal;