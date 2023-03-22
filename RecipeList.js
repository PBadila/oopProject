class RecipeList{

    //CONSTRUCTOR
    //holds the recipes on separate lists, depending  on food type
    constructor(name,recipes = []){
        this.name = name
        this.recipes = recipes   
    }

    //METHOD: puts recipe in recipe list
    assignRecipe(recipe){
        this.recipes.push(recipe)
        //console.log('Assigning recipe here')
        //console.log(this.recipes.indexOf(recipe))
        console.log(`\nYou have added ${recipe.name}.`)
        //console.log('Testing RecipeList')
        //console.log(this.recipes)
    }
    
    //METHOD: deletes recipe from the list
    deleteRecipe(recipe){
        //console.log('deleting recipe here')
        let delIndex = this.recipes.indexOf(recipe)
        //console.log(recipe.name)
        //console.log(`The index of ${recipe.name} is ${delIndex}`)
        this.recipes.splice(delIndex,1)
        //console.log(`From deleteRecipe after deleting`)
        //console.log(this.recipes)
        console.log(`\nYou have deleted ${recipe.name} from My First Cookbook.`)
    }

    //METHOD - Displays recipe names by category
    displayCategory(recipeList){
        //console.log(this.recipes.length)
        
        for(let i = 0;i<this.recipes.length;i++){
            console.log(this.recipes[i].name + "       " + (i+1))
        }
        console.log('')
    }
   
       
}


export default RecipeList