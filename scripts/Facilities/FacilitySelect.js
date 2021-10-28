import { getFacilities, getTransientState, setFacility } from "../database.js"



export const FacilitiesSelect = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    let html = `<select id="facility"`
    if (transientstate.selectedGovernor === undefined) { //if no governor selected, disables the facility dropdown
        html +=" disabled"
    }
    html += `> <option value="0">---Select a facility---</option>`//intiates select field and adds default option
    facilities.map( //loops through facilities and adds each option to the html
        (facility) => {
            html += `<option value="${facility.id}"`
            if (transientstate.selectedFacility === facility.id) html += " selected" //rather than playing with =true or false, I just added the selected attribute only if the case is true
            html += `>${facility.name}</option>`
        }
    )
    html += "</select>" //closes the select
    return html //returns the fully constructed select field 
}

document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
        setFacility(parseInt(event.target.value)) //references a pre-established setter to set a transient state property.
        
    }
})



