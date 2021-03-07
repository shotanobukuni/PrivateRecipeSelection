import React, {useState, useEffect, createContext} from 'react'
import axios from 'axios'
import DeleteRecipe from './DeleteRecipe'
import UpdateRecipe from './UpdateRecipe'

export const RecipesContext = createContext()

function RecipeList() {
    const APIVersion='v1'
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${APIVersion}/recipes/`)
        .then(res => {setRecipes(res.data)})
    }, [])
    console.log({recipes});
    return (
        <div>
            <p>レシピ一覧</p>
                {
                    recipes.map(recipe =>
                        <table border="1">
                            <tr>
                                <th>レシピ名 : {recipe.name}</th>
                                <th>内容 : {recipe.context}</th>
                                {/* <th><DeleteRecipe id={recipe.id}/></th> */}
                            </tr>
                        </table>
                    )
                }
            <RecipesContext.Provider value={recipes}>
                <UpdateRecipe />
            </RecipesContext.Provider>
        </div>
    )
}

export default RecipeList
