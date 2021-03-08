import { connect } from 'react-redux';
import { actionNap } from '../redux/actions';

const Nap = (props) => (
    <>
        <button onClick={props.handleClick}>Nap</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionNap());
        }
    }
}

export default connect(null, mapDispatchToProps)(Nap);