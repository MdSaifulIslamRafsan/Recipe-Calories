
import PropTypes from 'prop-types';
import OrderToCook from '../OrderToCook/OrderToCook';

const OrderToCooks = ({cooks , handelPreparingBtn}) => {
    return (
        <div>
          <h2 className="text-xl font-semibold text-center">
            Want to cook: {cooks.length}
          </h2>
          <div className="overflow-x-auto">
            <table className="table">
              {/* table head */}
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
                {/* table body */}
    
                {cooks.map((cook, index) => (
                  <OrderToCook
                    handelPreparingBtn={handelPreparingBtn}
                    index={index}
                    key={index}
                    cook={cook}
                  ></OrderToCook>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        );
};

OrderToCooks.propTypes = {
    cooks: PropTypes.array.isRequired,
    handelPreparingBtn: PropTypes.func.isRequired,
};

export default OrderToCooks;