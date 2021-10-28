import { getTransientState, setGovernor } from "./database.js"
import { getGovernors } from "./database.js";
//Event listener for governor select
document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "select__governor") {
            setGovernor(parseInt(changeEvent.target.value))
        }
    }

)



const governors = getGovernors()

export const Governors = () => {
    const transientstate = getTransientState()


    let html = `
    <select id="select__governor">
    <option value="0">---Select a governor---</option>`
    for (const governor of governors) {  //loops through governors and constructs a series of option for the select field
        if (governor.active === true) {
            html += `<option value="${governor.id}"`
            if (transientstate.selectedGovernor === governor.id) html += " selected" //rather than playing with =true or false, I just added the selected attribute only if the case is true
            html += `>${governor.name}</option>`
        }
    }
    html += `<select>`
    return html
}

