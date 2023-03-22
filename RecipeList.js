class RecipeList{

    //CONSTRUCTOR
    constructor(name,recipes = []){
        this.name = name
        this.recipes = recipes   
    }

    //METHOD: puts recipe in recipe list
    assignRecipe(recipe){
        this.recipes.push(recipe)
        console.log(this.recipes.indexOf(recipe))
    }
    
    //METHOD: deletes recipe from the list
    deleteRecipe(recipe){
        let delIndex = this.recipes.indexOf(recipe)
        console.log(recipe.name)
        console.log(`The index of ${recipe.name} is ${delIndex}`)
        this.recipes.splice(delIndex,1)
        console.log(`From deleteRecipe after deleting`)
        console.log(this.recipes)
    }

    //METHOD: displays requested recipe      
    displayRecipe(recipe){
            /** console.log('display recipe')
            console.log(Object.keys(recipe).length)
            console.log(recipe.name)
            console.log(typeof(recipe[name]))*/
            for(let i = 0;i<Object.keys(recipe).length;i++){
                if(i===0){
                    
                    console.log(`Recipe for `+ recipe.name)
                }
                else if(i===2){
                    console.log ('VEGAN')
                }
                else if(i===3){
                    console.log(`Cooking Time: ` + recipe.cookingTime)
                }
                else if(i===4){
                    console.log(`Ingredients:`)
                    
                    for(let j = 0; j<recipe.ingredients.length;j++){
                        console.log(`~ `+ recipe.ingredients[j])
                    }
                }
                else if(i===5){
                    console.log('Cooking Instructions: ')
                    console.log(recipe.directions.length)
                    for(let x = 0; x<recipe.directions.length;x++){
                        console.log(`* ` + recipe.directions[x])
                    }
                }
            }
            
        }
        
}


export default RecipeList