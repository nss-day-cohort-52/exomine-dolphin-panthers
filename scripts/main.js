import { colonyResources } from "./ColonyResources.js"
import { Exchange } from "./Exchange.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = Exchange()
}

renderAllHTML()
colonyResources()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
    colonyResources()
})

