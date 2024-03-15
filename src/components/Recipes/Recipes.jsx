import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes}) => {
    return (
        <div>
            {
                recipes.map((recipe) => <Recipe key={recipe?.id} recipe={recipe}></Recipe> )
            }
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
};

export default Recipes;