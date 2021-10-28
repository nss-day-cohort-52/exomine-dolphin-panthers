import { getFacilities, getFacilityMinerals, getMinerals, getTransientState, setFacilityMineral  } from "../database.js"


export const FacilityMinerals = () => {
    const transientstate = getTransientState()
    const facilities = getFacilities()
    const minerals = getMinerals()
    let facilityMinerals = getFacilityMinerals()
    const displayedFacility = facilities.find((facility) => (transientstate.selectedFacility === facility.id)) //checks for displayed facility
    let html = "<ul>"

    if(transientstate.selectedFacility !== undefined){facilityMinerals = facilityMinerals.filter((facility) => (displayedFacility.id === facility.facilityId)) //if prevents errors from reading undefined id. then filters the facilitiesMinerals to only return minerals of the selected facility
    facilityMinerals.forEach( //for each mineral present at the given facility
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

document.addEventListener(
  "change",
  (changeEvent) => {
      if (changeEvent.target.name.startsWith("mineral")) {
          setFacilityMineral(parseInt(changeEvent.target.value))
      }
  }
)