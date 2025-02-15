import PropTypes from "prop-types";

const Recipe = ({ recipe, handlerWantToCookBtn }) => {
  const {
    description,
    recipe_name,
    recipe_image,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="card p-5 bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-40 rounded-xl w-full bg-cover"
          src={recipe_image}
          alt=""
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title font-semibold Lexend text-[#282828]">{recipe_name}</h2>
        <p className="fira-sans font-normal text-[#878787]">{description}</p>

        <div className="divider"></div>
        <h1 className="text-xl font-bold Lexend">Ingredients: {ingredients.length}</h1>
        <ul className="lg:h-80 pl-8">
          {ingredients.map((ingredient, index) => (
            <li className="list-disc text-[#878787] font-normal" key={index}>
              {ingredient}
            </li>
          ))}
        </ul>
        <div className="divider"></div>
        <div className="flex justify-between">
          <div className="flex gap-1 items-center">
          <img src="https://i.ibb.co/ckCvQ6X/Frame-3.png" alt="" />
          <p className="text-[#282828CC] fira-sans font-normal">{preparing_time}</p>
          </div>
          <div className="flex items-center">
            <img src="https://i.ibb.co/wrfTx5b/Frame-4.png" alt="" /> 
            <p className="text-[#282828CC] fira-sans font-normal">{calories}</p>
          </div>
        </div>

        <div className="card-actions">
          <button
            onClick={() => handlerWantToCookBtn(recipe)}
            className="btn rounded-full font-medium text-[#150B2B] bg-[#0BE58A]"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handlerWantToCookBtn: PropTypes.func.isRequired,
};

export default Recipe;
