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
    
    //METHOD: Return 
    
    /*** since I cannot get another class to read the properties of a
    recipe, I am going to create a method that returns the value that
    I am looking for
    */

}

export default Recipe