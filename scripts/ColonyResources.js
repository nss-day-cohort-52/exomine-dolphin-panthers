import { getColonyMinerals, getColonies, getMinerals, getTransientState, getGovernors } from "./database.js"








//Responsibility to generate colony resource HTML
//use TRANSIENTSTATE to display colony resources in the appropriate sections of the HTML
export const colonyResources = () => {
    const governors = getGovernors()
    const colonyMinerals = getColonyMinerals()
    const state = getTransientState()
    const colonies = getColonies()
    const minerals = getMinerals()


    let html = "No Minerals"
    //target the specific html that will display the mineral name
    const mineralTarget = document.querySelector("#mineralDisplay")
    const renderMineralHTML = () => {
        mineralTarget.innerHTML = html

    }
    //find the governor that is currently selected
    let currentGov = governors.find(
        (governor) => {
            if (governor.id === state.selectedGovernor) {

                return governor
            } else {
                return null
            }
        }
    )
    //find the colony that the governor is identified with
    let currentColony = colonies.find(
        (colony) => {
            if (colony.id === currentGov.colonyId) {
                return colony
            } else {
                return null
            }
        }
    )

    //use the colony to find the mineral name to display
    let colonyMineral = colonyMinerals.find(
        (mineral) => {
            if (mineral.colonyId === currentColony.id) {
                return mineral
            } else {
                return null
            }

        }
    )
    if (colonyMineral === undefined) {
        return renderMineralHTML()
    }
    let mineralDisplay = minerals.find(
        (mineral) => {
            if (mineral.id === colonyMineral.mineralId) {
                return mineral
            } else {
                return null
            }
        }
    )
    html = `${colonyMineral.mineralQuantity} tons of ${mineralDisplay.mineralName}`


    return renderMineralHTML()
}
