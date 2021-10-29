import { getFacilities, getMinerals, getTransientState } from "./database.js"



export const CartContent = () => {
    const transientState = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()

    let html = ""

    if (transientState.cart) {
        html += "</ul>"
        transientState.cart.forEach( //loops through the cart array and for each element (object), it identifies the appropriate mineral and facility associated with that facilityMinerals object in order to construct html list of items present in cart
            (facilityMineral) => {
                const foundMineral = minerals.find(
                    (mineral) => {
                        return mineral.id === facilityMineral.mineralId
                    }
                )
            
                const foundFacility = facilities.find(
                    (facility) => {
                        return facility.id === facilityMineral.facilityId
                    }
                )
            
                html += `<li class="cartItem">1 ton of ${foundMineral.mineralName} from ${foundFacility.name}</li>`
        
            }
        )
        html += "</ul>"

    }
    
    return html
}

