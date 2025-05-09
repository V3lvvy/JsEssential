const breakfastMenu = ["Pancakes -$12", "Eggs Benedict -$22.99", "Oatmeal -$21.99", "Frittata -$15"];
const mainCourseMenu = ["Steak -$23", "Pasta -$16", "Burger -$12", "Salmon -$32"];
const dessertMenu = ["Cake -$7", "Ice Cream -$8", "Pudding -$6", "Fruit Salad -$5"];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index +1}: ${item}</p>`;
});
document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById("dessertMenuItems").innerHTML= dessertItem;