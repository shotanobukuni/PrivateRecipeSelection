import React, {useState} from 'react'

function SelectRecipe() {
    // メニュー選定ボタンのON/OFF状態管理
    const [selectRecipeButton, setSelectRecipeButton] = useState(false);
    const toggleSelectRecipeButton = () => {
        setSelectRecipeButton(!selectRecipeButton)
    };
    return (
        <div>
            {!selectRecipeButton ? (
            <div>
                <p>今日のメニューを決めてみよう</p>
                <button onClick={toggleSelectRecipeButton}>メニューを決める</button>
            </div>
            ): (
            <div>
                <p>今日のメニューはこちら</p>
                <button onClick={toggleSelectRecipeButton}>もう一度決める</button>
            </div>
            )}
        </div>
    )
}

export default SelectRecipe
