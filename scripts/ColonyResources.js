import { getColonyMinerals, getColonies, getMinerals, getTransientState } from "./database.js"








//Responsibility to generate colony resource HTML
//use TRANSIENTSTATE to display colony resources in the appropriate sections of the HTML
export const colonyResourcesHTML = () => {
    const colonyMinerals = getColonyMinerals()
    const state = getTransientState()
    const colonies = getColonies()
    const minerals = getMinerals()


    let html = "No Minerals"
    //find the colony that the governor is identified with
    if (state.selectedGovernor) {
        let currentColony = colonies.find(
            (colony) => {
                if (colony.id === state.selectedGovernor.colonyId) {
                    return colony
                } else {
                    return null
                }
            }
        )


        //use the colony to find the mineral name to display
        let foundColonyMinerals = colonyMinerals.filter(
            (mineral) => {
                if (mineral.colonyId === currentColony.id) {
                    return mineral
                } else {
                    return null
                }

            }
        )
        //info previously on this line removed as a redundancy for the new if statement added above

        html = "" //reset the html state for the += coming up
        foundColonyMinerals.map((mineral) => { //for every mineral the colony has
            minerals.map( //go through the mineral name array
                (mineralNamer) => {
                    if (mineralNamer.id === mineral.mineralId) { //and once you find the mineral name that matches,
                        html += `<div>${mineral.mineralQuantity} tons of ${mineralNamer.mineralName}</div>` //use the current loop info to build an html line
                    } else {
                        return null
                    }
                }
            )    
        }
        )
        if(html === "") html = "No Minerals" //if nothing happened in the maps, go ahead and change it back to no minerals
    }
    return html

}