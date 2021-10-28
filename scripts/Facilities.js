import { getFacilities, getFacilityMinerals, getMinerals, getTransientState, setFacility } from "./database.js"
import { setMineral } from "./database.js"


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

export const FacilityMinerals = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    const minerals = getMinerals()
    let facilityMinerals = getFacilityMinerals()
    const displayedFacility = facilities.find((facility) => (transientstate.selectedFacility === facility.id)) //checks for displayed facility
    let html = "<ul>"

    if(transientstate.selectedFacility !== undefined){facilityMinerals = facilityMinerals.filter((facility) => (displayedFacility.id === facility.facilityId)) //if prevents errors from reading undefined id. then filters the facilitiesMinerals to only return minerals of the selected facility
    facilityMinerals.map( //for each mineral present at the given facility
        (facMineral) => {
            const minName = minerals.find((mineral) => facMineral.mineralId === mineral.id) //find its name based on the id
            
            if (facMineral.mineralQuanitity !== 0) {
            
              if (transientstate.selectedMineral === facMineral.mineralId ) {
              
                html += `<li> 
                <input type="radio" name="mineral_${displayedFacility.id}" value="${facMineral.mineralId}" checked="checked" /> ${facMineral.mineralQuanitity} tons of ${minName.mineralName}
                </li>`

              } else {
              html += `<li> 
                <input type="radio" name="mineral_${displayedFacility.id}" value="${facMineral.mineralId}" /> ${facMineral.mineralQuanitity} tons of ${minName.mineralName}
                </li>` //construct an html line-item. current setup limits minerals to 1 of each type per purchase. can remove "name" field to enable multi-purchase. event listen would target "type" in that case, since we only have one set of radio buttons
               }
            }
          }
    )}
  
    else html += ""
    html += "</ul>"
    return html

}

document.addEventListener("change", (event) => {
    if (event.target.id === "facility") {
        setFacility(parseInt(event.target.value)) //references a pre-established setter to set a transient state property.
        
    }
})



document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name.startsWith("mineral")) {
            setMineral(parseInt(changeEvent.target.value))
        }
    }
)

