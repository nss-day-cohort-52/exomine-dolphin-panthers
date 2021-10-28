import { getFacilities, getTransientState } from "../database.js"

export const FacilityName = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    let html = ""

    const facility = facilities.find(
        (facility) => {
            return transientstate.selectedFacility === facility.id
        }
    )

    if (facility) {
        html += `for ${facility.name}`
    }

    return html
}