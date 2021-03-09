import { connect } from 'react-redux';

const CatList = (props) => (
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