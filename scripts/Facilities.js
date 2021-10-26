import { getFacilities, getTransientState, setFacility } from "./database.js"


export const FacilitiesSelect = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    let html = `<select id="facility"> <option value="0">---Select a facility---</option>`//intiates select field and adds default option
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

export const FacilityName = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    let html = ""
    facilities.map(
        (facility) => {
            if (transientstate.selectedFacility === facility.id){
                html += "for " + facility.name
            }
            
        }
    )
    return html
}

document.addEventListener("change", (event) => {
    if(event.target.id === "facility"){
        setFacility(parseInt(event.target.value)) //references a pre-established setter to set a transient state property.
        debugger //for testing
    }
})



