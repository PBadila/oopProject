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

    //METHOD - Displays recipe names by category
    displayCategory(recipeList){
        //console.log(this.recipes.length)
        //console.log(recipeList)
        for(let i = 0;i<this.recipes.length;i++){
            //console.log(recipeList.name)
            switch(recipeList.name){
                // \t is tab 
                case 'Breakfast':
                    console.log(this.recipes[i].name + "\t\t\t\t" + "b"+(i+1))
                    break
                case 'Lunch':
                    console.log(this.recipes[i].name + "\t\t\t\t" + "l"+(i+1))
                    break
                case 'Dinner':
                    console.log(this.recipes[i].name + "\t\t\t\t" + "d"+(i+1))
                    break
                case 'Dessert':
                    console.log(this.recipes[i].name + "\t\t\t\t" + "de"+(i+1))
                    break
            }
        }
        console.log('')
    }

   //METHOD - check to see if a recipe is on a list
   checkList(recipe){
    //console.log(`recipe`+recipe)
    //console.log(`length`+this.recipes.length)
    for(let i=0;i<this.recipes.length;i++){
        //console.log(`this.recipe[i].name`+this.recipes[i].name)
        if(recipe===this.recipes[i].name.toLowerCase()){
            //console.log(`found it`)
            let delIndex = this.recipes.indexOf(recipe)
            this.recipes.splice(delIndex,1)
            console.log(`\nYou have deleted ${recipe} from My First Cookbook.`)
            return true
        
        }
    } 
   }


   }
       
export default RecipeList