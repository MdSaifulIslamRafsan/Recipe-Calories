import PropTypes from 'prop-types';
import Recipe from '../Recipe/Recipe';

const Recipes = ({recipes , handlerWantToCookBtn}) => {
    return (
        <section className='grid col-span-12 lg:col-span-8 gap-5 lg:grid-cols-2'>
            {
                recipes.map((recipe , index) => <Recipe key={index} handlerWantToCookBtn={handlerWantToCookBtn} recipe={recipe}></Recipe> )
            }
        </section>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    handlerWantToCookBtn: PropTypes.func.isRequired,
};

export default Recipes;