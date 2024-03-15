import PropTypes from "prop-types";

const WantToCook = ({ cooks }) => {
  return (
    <aside className="col-span-4">
      <h2 className="text-xl font-semibold text-center">
        Want to cook: {cooks.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
                cooks.map((cook , index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{cook?.recipe_name.slice(0,15)}</td>
                <td>{cook?.preparing_time}</td>
                <td>{cook?.calories}</td>
                <td><button className="btn rounded-full bg-[#0BE58A]">Preparing</button></td>
              </tr> )
            }


           
            
          </tbody>
        </table>
      </div>
    </aside>
  );
};

WantToCook.propTypes = {
  cooks: PropTypes.array.isRequired,
};

export default WantToCook;
