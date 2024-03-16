import PropTypes from 'prop-types';

const CurrentlyCook = ({cook , index}) => {
    return (
                <tr>
                    <th>{index + 1}</th>
                    <td>{cook?.recipe_name.slice(0, 15)}</td>
                    <td>{cook?.preparing_time}</td>
                    <td>{cook?.calories}</td>
                </tr>
    );
};

CurrentlyCook.propTypes = {
    cook: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

export default CurrentlyCook;