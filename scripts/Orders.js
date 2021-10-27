

// When clicking on "purchase mineral" button, 
// a single quantity of the indicated mineral will be subtracted from the chosen facility 

import { addToColony, subtractFromFacility } from "./MineralsAtFacility.js"

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderMineral") {
            subtractFromFacility()
            addToColony()
            document.dispatchEvent(new CustomEvent("stateChanged"))
        }
    }
)

export const buttonHTML = () => {
    return `<button id= "orderMineral">Purchase Minerals</button></Section>`
}
    // and a single quantity of the indicated mineral will be added to the colony mineral array