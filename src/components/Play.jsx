import { connect } from 'react-redux';
import { actionPlay } from '../redux/actions';

const Play = (props) => (
    <>
        <button onClick={props.handleClick}>Play</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionPlay());
        }
    }
}

export default connect(null, mapDispatchToProps)(Play);