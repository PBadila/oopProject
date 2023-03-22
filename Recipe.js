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

}

export default Recipe