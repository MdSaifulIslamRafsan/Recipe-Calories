import PropTypes from "prop-types";
import CurrentlyCook from "../CurrentlyCook/CurrentlyCook";

const CurrentlyCooking = ({ cookings , totalTime , totalCalories}) => {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold text-[#282828] text-center">
        Currently cooking: {cookings.length}
      </h2>
      <table className="table fira-sans">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
            {/* table body */}
            <tbody className="text-[#282828B2] ">
                {cookings.map((cook, index) => <CurrentlyCook cook={cook} index={index} key={cook?.recipe_id}></CurrentlyCook>)}
                <tr>
                    <td></td>
                    <td></td>
                    <td className="font-bold ">Total Time = {totalTime} minutes</td>
                    <td className="font-bold ">Total Calories = {totalCalories} calories</td>
                </tr>
            </tbody>

      </table>
    </section>
  );
};

CurrentlyCooking.propTypes = {
  cookings: PropTypes.array.isRequired,
  totalTime: PropTypes.number.isRequired,
  totalCalories: PropTypes.number.isRequired,
};

export default CurrentlyCooking;
