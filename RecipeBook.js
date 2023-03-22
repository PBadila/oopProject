class RecipeBook{

    //CONSTRUCTOR
    constructor(name, breakfastRecipes = [],lunchRecipes = [], dinnerRecipes =[], dessertRecipes = [] ){
        this.name = name
        this.breakfastRecipes = breakfastRecipes
        this.lunchRecipes = lunchRecipes
        this.dinnerRecipes = dinnerRecipes
        this.dessertRecipes = dessertRecipes
    }
    
    //METHOD: assign a recipe to a list based on the type of dish
    assignRecipeList(recipeList){
        //console.log(recipeList.name)

        switch (recipeList.name){
                case 'Breakfast':
                    //console.log('Enjoy your breakfast')
                    this.breakfastRecipes.push(recipeList)
                    break
                case 'Lunch':
                    //console.log('Enjoy your lunch')
                    this.lunchRecipes.push(recipeList)
                    break
                case 'Dinner':
                    //console.log('Enjoy your dinner')
                    this.dinnerRecipes.push(recipeList)
                    //console.log(`dinner recipes ${this.dinnerRecipes}`)
                    
                    //console.log(type0f(this.dinnerRecipes))
                    //console.log(`These are the dinner recipes from recipe book`)
                    //console.log(this.dinnerRecipes)
                    break
                default:
                    //console.log('Enjoy your dessert')
                    this.dessertRecipes.push(recipeList)
                    break
        }
           
    }
        //showRecipe(recipe){
            //console.log(recipe)
    //}

    //METHOD: displays requested recipe if it is on a list    
    displayRecipe(recipe){

        //console.log('Breakfast Test 2')
        //this gives you the first recipe in the RecipeList object
        //console.log(this.breakfastRecipes[0].recipes[0])
        //console.log('new test')
        //this.breakfastRecipes[0] refers to the object RecipeList
        //that has the name and a list of recipes
        //console.log(this.breakfastRecipes[0])
        //console.log('test 3')
        //this gives an array of the recipe objects in the breakfast list
        //console.log(this.breakfastRecipes[0].recipes)
        
        if(this.breakfastRecipes[0].recipes.includes(recipe) ||
            this.lunchRecipes[0].recipes.includes(recipe) ||
            this.dinnerRecipes[0].recipes.includes(recipe) ||
            this.dessertRecipes[0].recipes.includes(recipe)){

            console.log('Yes the recipe is there')
    
            
            for(let i = 0;i<Object.keys(recipe).length;i++){
                if(i===0){
                    
                    console.log(`Recipe for `+ recipe.name)
                }
                else if(i===2){
                    console.log ('\nVEGAN')
                }
                else if(i===3){
                    console.log(`\nCooking Time: ` + recipe.cookingTime)
                }
                else if(i===4){
                    console.log(`\nIngredients:`)
                    
                    for(let j = 0; j<recipe.ingredients.length;j++){
                        console.log(`~ `+ recipe.ingredients[j])
                    }
                }
                else if(i===5){
                    console.log('\nCooking Instructions: ')
                    //console.log(recipe.directions.length)
                    for(let x = 0; x<recipe.directions.length;x++){
                        console.log(recipe.directions[x])
                    }
                }
            }
            
        }
        else{
            console.log('Nope, not here')
        }
    }
        
}


export default RecipeBook