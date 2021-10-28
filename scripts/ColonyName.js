import { getTransientState, getColonies } from "./database.js";



export const ColonyName = () => {
    const transientState = getTransientState()

    if (transientState.selectedGovernor) {

        const colonies = getColonies()

        //with the governor object identified, find the colony object associated with the governor.colonyId
        const foundColony = colonies.find(
            (colony) => {
                return colony.id === transientState.selectedGovernor.colonyId
            }
        )

        //with the colony object identified, return the name for the header

        return foundColony.planetName

    } else {
        return "Colony"
    }


}
