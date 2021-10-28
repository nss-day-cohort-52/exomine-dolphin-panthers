import { getFacilities, getTransientState } from "../database.js"

export const FacilityName = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    let html = ""
    facilities.map(
        (facility) => {
            if (transientstate.selectedFacility === facility.id) {
                html += "for " + facility.name
            }

        }
    )
    return html
}