import PropTypes from 'prop-types';

const OrderToCook = ({cook ,index , handelPreparingBtn}) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{cook?.recipe_name.slice(0,15)}</td>
            <td>{cook?.preparing_time}</td>
            <td>{cook?.calories}</td>
            <td><button onClick={() => handelPreparingBtn(cook)} className="btn rounded-full bg-[#0BE58A]">Preparing</button></td>
        </tr>
    );
};

OrderToCook.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handelPreparingBtn: PropTypes.func.isRequired,
};

export default OrderToCook;