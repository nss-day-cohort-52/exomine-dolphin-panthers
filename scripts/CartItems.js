import { getFacilities, getGovernors, getMinerals, getTransientState, setMineral } from "./database.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name.startsWith("mineral")) {
            setMineral(parseInt(changeEvent.target.value))
        }
    }
)


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