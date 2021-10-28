

// When clicking on "purchase mineral" button, 
// a single quantity of the indicated mineral will be subtracted from the chosen facility 

import { purchaseMineral } from "./database.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderMineral") {
            purchaseMineral()
        }
    }
)

export const PurchaseButton = () => {
    return `<button id= "orderMineral">Purchase Minerals</button></Section>`
}
    // and a single quantity of the indicated mineral will be added to the colony mineral array