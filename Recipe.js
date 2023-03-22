class Recipe{

    //CONSTRUCTOR
    constructor(name,foodCategory,isVegan,cookingTime,ingredients =[],directions =[]){
        this.name = name
        this.foodCategory = foodCategory
        this.isVegan = isVegan
        this.cookingTime = cookingTime
        this.ingredients = ingredients
        this.directions =directions
    }
    //METHOD - use this method to intake a recipe from the user
    intakeRecipe(){
        let inName = prompt('Name of recipe: ')
        console.log(inName)
    }
}

export default Recipe