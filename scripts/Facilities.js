import { getFacilities } from "./database.js"

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