import { getFacilities, getFacilityMinerals, getMinerals, getTransientState, setFacility } from "./database.js"


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

export const FacilityMinerals = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    const minerals = getMinerals()
    let facilityMinerals = getFacilityMinerals()
    const displayedFacility = facilities.find((facility) => (transientstate.selectedFacility === facility.id)) 
    let html = "<ul>"
    if(transientstate.selectedFacility !== undefined){facilityMinerals = facilityMinerals.filter((facility) => displayedFacility.id === facility.facilityId)
    facilityMinerals.map(
        (facMineral) => {
            const minName = minerals.find((mineral) => facMineral.mineralId === mineral.id)
            html += `<li>
                <input type="radio" name="${minName}" value="${facMineral.mineralId}" /> ${minName}:${facMineral.mineralQuanitity}
                </li>`
        }
    )}
    html += "</ul>"
    

}

document.addEventListener("change", (event) => {
    if(event.target.id === "facility"){
        setFacility(parseInt(event.target.value)) //references a pre-established setter to set a transient state property.
        debugger //for testing
    }
})



