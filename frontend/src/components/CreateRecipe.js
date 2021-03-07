import React, {useState, useEffect} from 'react'
import axios from 'axios';

function CreateRecipe(recipe) {
    const [recipes, setRecipes] = useState([])
    const [newRecipe, setNewRecipe] = useState({name:'', context:''})
    const APIVersion = 'v1'
    const createRecipe = () => {
        const recipeData = {
            name: recipe.name,
            context: recipe.context
        }

        axios.post(`http://127.0.0.1:8000/api/${APIVersion}/recipes/`, recipeData)
        // .then(res => {
        //     // recipes(レシピ一覧)を分解して、res.data(POSTしたデータを再代入する)
        //     setRecipes([...recipes, res.data])
        // })
    }
    return (
        <div>
            <input type='text' name='name' value={newRecipe.name} placeholder='レシピ名を入力' required />
            <br />
            <input type='text' name='name' value={newRecipe.name} placeholder='レシピの詳細を入力' required />
        </div>
    )
}

export default CreateRecipe
