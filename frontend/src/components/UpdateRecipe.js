import React, {useContext} from 'react'
import RecipesContext from './RecipeList'

function UpdateRecipe() {
    const recipes = useContext(RecipesContext)
    return (
        <div>
            <p>context test</p>
                {/* console.log({recipes}); */}
                name : {recipes}
                {/* context : {recipes.context} */}
            <p>context test</p>
            <button>更新</button>
        </div>
    )
}

export default UpdateRecipe