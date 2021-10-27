import { getColonyMinerals, getFacilities, getFacilityMinerals, getGovernors, getTransientState, getColonies } from "./database.js"


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
//find governor in charge of colony, add 1 to the appropriate mineral quantity
export const addToColony = () => {
    const colonyMinerals = getColonyMinerals()
    const state = getTransientState()
    const governors = getGovernors()
    const colonies = getColonies()
    //find governor mentioned in state
    let foundGovernor = governors.find(
        (governor) => {
            return governor.id === state.selectedGovernor
        }
    )
    //find colony governor is associated with
    let foundColony = colonies.find(
        (colony) => {
            return colony.id === foundGovernor.colonyId
        }
    )
    //find colony minerals associated with colony
    let foundMineral = colonyMinerals.find(
        (mineral) => {
            return mineral.colonyId === foundColony.id
        }
    )
    foundMineral.mineralQuantity = foundMineral.mineralQuantity + 1

}