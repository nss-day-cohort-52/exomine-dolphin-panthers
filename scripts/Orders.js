

// When clicking on "purchase mineral" button, 
// a single quantity of the indicated mineral will be subtracted from the chosen facility 

import { purchaseAllMinerals } from "./database.js"


document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderMineral") {

            purchaseAllMinerals()
        }
    }
)

export const PurchaseButton = () => {
    return `<button id= "orderMineral">Purchase All Minerals</button></Section>`
}
    // and a single quantity of the indicated mineral will be added to the colony mineral array