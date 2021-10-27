import { getColonyMinerals, getFacilities, getFacilityMinerals, getTransientState } from "./database.js"


// When clicking on "purchase mineral" button, 
// a single quantity of the indicated mineral will be subtracted from the chosen facility 
// and a single quantity of the indicated mineral will be added to the colony mineral array

export const subtractFromFacility = () => {
    const state = getTransientState()
    const facilityMinerals = getFacilityMinerals()

    let foundMineral = facilityMinerals.find(
        (mineral) => {
            return mineral.id === state.selectedMineral
        }
    )
    foundMineral.mineralQuanitity = foundMineral.mineralQuanitity - 1
}
