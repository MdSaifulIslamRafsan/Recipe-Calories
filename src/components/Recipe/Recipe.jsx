import PropTypes from "prop-types";

const Recipe = ({ recipe , handlerWantToCookBtn}) => {
  const {description , recipe_name , recipe_image , ingredients , preparing_time , calories} = recipe;
  return (
    <div className="card p-5 bg-base-100 shadow-xl">
      <figure>
        <img className="h-40 rounded-xl w-full bg-cover"
          src={recipe_image}
          alt=""
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title">{recipe_name}</h2>
        <p>{description}</p>

        <div className="divider"></div> 
        <h1 className="text-xl font-bold">Ingredients: {ingredients.length}</h1>
        <ul className="lg:h-80 pl-8">
            {ingredients.map((ingredient , index) => <li className="list-disc" key={index}>{ingredient}</li>)}
        </ul>
        <div className="divider"></div> 
        <div className="flex justify-between">
            <p>{calories}</p>
            <p>{preparing_time}</p>
        </div>


        <div className="card-actions">
          <button onClick={() => handlerWantToCookBtn(recipe)} className="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
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
