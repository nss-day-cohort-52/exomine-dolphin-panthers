import { getFacilities, setFacility } from "./database.js"

export const FacilitiesSelect = () => {
    const facilities = getFacilities()
    let html = `<select id="facility"> <option value="0">---Select a facility---</option>`//intiates select field and adds default option
    facilities.map(
        (facility) => {
            html += `<option value="${facility.id}">${facility.name}</option>` //loops through facilities and adds each option
        }
    )
    html += "</select>" //closes the select
    return html //returns the fully constructed select field 
}

document.addEventListener("change", (event) => {
    if(event.target.id === "facility"){
        setFacility(parseInt(event.target.value)) //references a pre-established setter to set a transient state property.
        debugger //for testing
    }
})


