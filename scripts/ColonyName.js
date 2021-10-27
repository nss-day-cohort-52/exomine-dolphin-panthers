import { getTransientState, getColonies, getGovernors } from "./database.js";



export const ColonyName = () => {
    const transientState = getTransientState()

    if (transientState.selectedGovernor) {

        const colonies = getColonies()
        const governors = getGovernors()
    
    
        //look at transient state and find the governor associated with selectedGovernor
        const foundGovernor = governors.find(
            (governor) => {
                return governor.id === transientState.selectedGovernor
            }
        )
    
        //with the governor object identified, find the colony object associated with the governor.colonyId
        const foundColony = colonies.find(
            (colony) => {
                return colony.id === foundGovernor.colonyId
            }
        )
    
        //with the colony object identified, return the name for the header

        return foundColony.planetName

    } else {
        return "Colony"
    }


}
