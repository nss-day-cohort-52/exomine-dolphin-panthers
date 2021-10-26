import {getTransientState, setGovernor} from "./database.js"
//Event listener for governor select
document.addEventListener(
    "change",
    (changeEvent) => {
        if(changeEvent.target.id === "select__governor"){
            setGovernor(parseInt(changeEvent.target.value))
        }
    }

)

import { getGovernors } from "./database.js";


const governors = getGovernors()

export const Governors = () => {
    const transientstate = getTransientState()
    let html = `
    <select id="select__governor">
    <option value="0">---Select a governor---</option>`
    for (const governor of governors) {
        let govCheck = false 
        if(transientstate.governorID === governor.id) govCheck = true
        html += `<option value="${governor.id}" select="${govCheck}">${governor.name}</option>`
    }
    html += `<select>`
    return html
}

