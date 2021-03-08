import React from 'react'

function UpdateRecipe() {
    const updateRecipe = (recipe) => {

        axios.put(`http://127.0.0.1:8000/api/${APIVersion}/recipes/${recipe.id}/`, recipe)
        .then(res => {

        })
    }
    return (
        <div>
            <button onClick={updateRecipe()}>更新</button>
        </div>
    )
}

export default UpdateRecipe