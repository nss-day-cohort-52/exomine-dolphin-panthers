import { getColonyMinerals, getFacilityMinerals, getGovernors, getTransientState } from "./database.js"


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
    return foundMineral
}
//find governor in charge of colony, add 1 to the appropriate mineral quantity
export const addToColony = () => {
    let colonyMinerals = getColonyMinerals()
    const state = getTransientState()
    const governors = getGovernors()
    //find governor mentioned in state
    let foundGovernor = governors.find(
        (governor) => {
            return governor.id === state.selectedGovernor
        }
    )

    colonyMinerals = colonyMinerals.filter((colony) => (foundGovernor.colonyId === colony.colonyId)) //filters down total list of colony minerals to just minerals at the colony of the selected governor

    //finds the colonymineral entry for the select mineral AT this particular colony
    let foundMineral = colonyMinerals.find(
        (mineral) => {
            return mineral.mineralId === state.selectedMineral
        }
    )
    if (foundMineral === undefined) {
        return undefined
    }
    foundMineral.mineralQuantity = foundMineral.mineralQuantity + 1
    return foundMineral

}