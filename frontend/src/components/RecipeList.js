import React, {useState, useEffect} from 'react'
import axios from 'axios'

function RecipeList() {
    const APIVersion='v1'
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/${APIVersion}/recipes/`)
        .then(res => {setRecipes(res.data)})
    }, [])
    return (
        <div>
            <p>レシピ一覧</p>
            <ul>
                {
                    recipes.map(recipe => <li>
                        レシピ名 : {recipe.name}
                        <br />
                        内容 : {recipe.context}
                    </li>)
                }
            </ul>
        </div>
    )
}

export default RecipeList
