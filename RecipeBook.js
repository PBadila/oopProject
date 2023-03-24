//! DO NOT REMOVE 
import promptSync from 'prompt-sync'
const prompt = promptSync(); 

/**
  Example usage to prompt a user: 
  const name = prompt('What is your name?');
  console.log(`Hey there ${name}`);

  All user input will be read as a String, so in order to treat user input as numbers, you’ll need to convert the input:
*/
/////////////////////////////////////////////  WRITE YOUR CODE BELOW!!!  //////////////////////////////////////
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

        switch (recipeList.name){
                case 'Breakfast':
                    this.breakfastRecipes.push(recipeList)
                    break
                case 'Lunch':
                    this.lunchRecipes.push(recipeList)
                    break
                case 'Dinner':
                    this.dinnerRecipes.push(recipeList)
                    break
                default:
                    this.dessertRecipes.push(recipeList)
                    break
        }     
    }
    

    //METHOD: displays requested recipe if it is on a list    
    displayRecipe(recipe){

        //checking to see if recipe was found
        let check = false
        //forEach is a way to check an array of objects
        //also the map method
        this.breakfastRecipes[0].recipes.forEach(Rec =>{
           if (Rec.name.toLowerCase() ===recipe){
                console.clear()
                console.log(`Recipe for `+ Rec.name)
                console.log ('\nVEGAN')
                console.log(`\nCooking Time: ` + Rec.cookingTime)
                console.log(`\nIngredients:`)
                for(let j = 0; j<Rec.ingredients.length;j++){
                        console.log(`~ `+ Rec.ingredients[j])
                }
                console.log('\nCooking Instructions: ')
                for(let x = 0; x<Rec.directions.length;x++){
                    console.log(Rec.directions[x])
                }
                check = true
            }
        })
        //console.log(`breakfast check`+check)
        if(check===false){
            //check lunch now
            this.lunchRecipes[0].recipes.forEach(Rec =>{
                if (Rec.name.toLowerCase() ===recipe){
                     console.clear()
                     console.log(`Recipe for `+ Rec.name)
                     console.log ('\nVEGAN')
                     console.log(`\nCooking Time: ` + Rec.cookingTime)
                     console.log(`\nIngredients:`)
                     for(let j = 0; j<Rec.ingredients.length;j++){
                             console.log(`~ `+ Rec.ingredients[j])
                     }
                     console.log('\nCooking Instructions: ')
                     for(let x = 0; x<Rec.directions.length;x++){
                         console.log(Rec.directions[x])
                     }
                 }
             })
        }
            //console.log(`lunch check`+check)
            if(check===false){
                //check dinner now
                this.dinnerRecipes[0].recipes.forEach(Rec =>{
                    if (Rec.name.toLowerCase() ===recipe){
                        console.clear()
                        console.log(`Recipe for `+ Rec.name)
                        console.log ('\nVEGAN')
                        console.log(`\nCooking Time: ` + Rec.cookingTime)
                        console.log(`\nIngredients:`)
                        for(let j = 0; j<Rec.ingredients.length;j++){
                                console.log(`~ `+ Rec.ingredients[j])
                        }
                        console.log('\nCooking Instructions: ')
                        for(let x = 0; x<Rec.directions.length;x++){
                            console.log(Rec.directions[x])
                        }
                    }
                })
            }
            let leaveRecipe = prompt(`Press q to return to Table of Contents: `)
            if(leaveRecipe ==='q'){
                return 'q'
            }
   

}
 
        
    
        
    
    
   
        
}


export default RecipeBook