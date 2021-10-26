import { getFacilities } from "./database.js"

export const Facilities = () => {
    const facilities = getFacilities()
    let html = `<select id="facility"> <option value="0">---Select a facility---</option>`
    facilities.map(
        (facility) => {
            html += `<option value="${facility.id}">${facility.name}</option>`
        }
    )
    html += "</select>"
    return html
}