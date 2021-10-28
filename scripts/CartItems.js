import { getFacilities, getGovernors, getMinerals, getTransientState } from "./database.js"



export const CartItems = () => {
    const transientState = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()

    if (transientState.selectedMineral) {
        const foundMineral = minerals.find(
            (mineral) => {
                return mineral.id === transientState.selectedMineral
            }
        )
    
        const foundFacility = facilities.find(
            (facility) => {
                return facility.id === transientState.selectedFacility
            }
        )
    
        return `You have chosen 1 ton of ${foundMineral.mineralName} from ${foundFacility.name}`

    } else {
        return ""
    }
}