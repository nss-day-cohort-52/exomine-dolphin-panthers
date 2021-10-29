import { addToCart } from "./database.js";

//clicking on the add to cart button pushes the facilityMinerals object that that radio button represents to the cart array using the addToCart function in the database
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "addToCart") {
            addToCart()
        }
    }
)

export const addToCartButton = () => {
    return `<button id= "addToCart">Add To Cart</button>`
}

