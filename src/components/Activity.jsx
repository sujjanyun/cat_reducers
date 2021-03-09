import { connect } from 'react-redux';

const Activity = (props) => (
    <>
        <p>The {props.name} is {props.activity}</p>
    </>
);

const mapStateToProps = (state) => {
    const { name, activity } = state;
    return {
        name,
        activity,
    };
};

export default connect(mapStateToProps)(Activity);