const {database} = require("./data.js")


const cook = (ingredients) => {
    for (const [key, value] of Object.entries(database.recipes)){
        const difference = value.filter(item => !ingredients.includes(item))
        if (difference.length == 0 && ingredients.length == value.length) {
            database.meals.push(key)
        }
    }
};

 
cook(['Hylian Rice', 'Bird Egg', 'Goat Butter', 'Raw Bird Thigh']);

console.log('MEALS:')
console.log('---------------')
for (const meal of database.meals) {
    console.log(meal)
};
