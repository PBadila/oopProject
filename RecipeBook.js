class RecipeBook{

    //CONSTRUCTOR
    constructor(name, breakfastRecipes = [],lunchRecipes = [], dinnerRecipes =[], dessertRecipes = [] ){
        this.name = name
        this.breakfastRecipes = breakfastRecipes
        this.lunchRecipes = lunchRecipes
        this.dinnerRecipes = dinnerRecipes
        this.dessertRecipes = dessertRecipes
    }

    assignRecipeList(recipeList){
        console.log(recipeList.name)

        switch (recipeList.name){
                case 'Breakfast':
                    console.log('Enjoy your breakfast')
                    this.breakfastRecipes.push(recipeList)
                    break
                case 'Lunch':
                    console.log('Enjoy your lunch')
                    this.lunchRecipes.push(recipeList)
                    break
                case 'Dinner':
                    console.log('Enjoy your dinner')
                    this.dinnerRecipes.push(recipeList)
                    //console.log(`dinner recipes ${this.dinnerRecipes}`)
                    
                    //console.log(type0f(this.dinnerRecipes))
                    console.log(`These are the dinner recipes from recipe book`)
                    console.log(this.dinnerRecipes)
                    break
                default:
                    console.log('Enjoy your dessert')
                    this.dessertRecipes.push(recipeList)
                    break
        }
           
        }
        showRecipe(recipe){
            console.log(recipe)
        }
        
    }


export default RecipeBook