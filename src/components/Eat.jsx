import { connect } from 'react-redux';
import { actionEat } from '../redux/actions';

const Eat = (props) => (
    <>
        <button onClick={props.handleClick}>Eat</button>
    </>
);

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: () => {
            dispatch(actionEat());
        }
    }
}

export default connect(null, mapDispatchToProps)(Eat);