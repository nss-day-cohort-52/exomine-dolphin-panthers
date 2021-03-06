
const database = {
    governors: [
        { id: 1, name: "Patricia Bundy", colonyId: 1, active: true },
        { id: 2, name: "Katrina Bahringer", colonyId: 2, active: true },
        { id: 3, name: "Lola Wolff", colonyId: 3, active: false },
        { id: 4, name: "Damon Hartmann", colonyId: 4, active: true },
        { id: 5, name: "Elizabeth Ortega", colonyId: 3, active: true },
        { id: 6, name: "Will Gentry", colonyId: 4, active: false },

    ],
    facilities: [

        { id: 1, name: "Galactic Rocks", active: true },
        { id: 2, name: "Asteroids Anonymous", active: true },
        { id: 3, name: "Ring Foundries", active: true },
        { id: 4, name: "Luna Foundry", active: true }

    ],
    minerals: [
        { id: 1, mineralName: "Jacobsite" },
        { id: 2, mineralName: "Indite" },
        { id: 3, mineralName: "Iron" },
        { id: 4, mineralName: "Kainite" },
        { id: 5, mineralName: "Krotite" },
        { id: 6, mineralName: "Copper" },
        { id: 7, mineralName: "Hafnon" },
        { id: 8, mineralName: "Haxonite" },
        { id: 9, mineralName: "Fluellite" },
        { id: 10, mineralName: "Galaxite" }
    ],
    colonies: [
        { id: 1, planetName: "Europa" },
        { id: 2, planetName: "Saturn" },
        { id: 3, planetName: "Mars" },
        { id: 4, planetName: "Luna" }
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 10,
            mineralQuantity: 12
        },
        {
            id: 2,
            colonyId: 3,
            mineralId: 4,
            mineralQuantity: 8
        },
        {
            id: 3,
            colonyId: 4,
            mineralId: 7,
            mineralQuantity: 3
        },
        {
            id: 4,
            colonyId: 3,
            mineralId: 2,
            mineralQuantity: 6
        }
    ],
    facilityMinerals: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1,
            mineralQuanitity: 16
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 2,
            mineralQuanitity: 27
        },
        {
            id: 3,
            facilityId: 2,
            mineralId: 3,
            mineralQuanitity: 18
        },
        {
            id: 4,
            facilityId: 3,
            mineralId: 4,
            mineralQuanitity: 6
        },
        {
            id: 5,
            facilityId: 3,
            mineralId: 5,
            mineralQuanitity: 10
        },
        {
            id: 6,
            facilityId: 4,
            mineralId: 6,
            mineralQuanitity: 6
        },
        {
            id: 7,
            facilityId: 1,
            mineralId: 7,
            mineralQuanitity: 43
        },
        {
            id: 8,
            facilityId: 1,
            mineralId: 8,
            mineralQuanitity: 27
        },
        {
            id: 9,
            facilityId: 2,
            mineralId: 9,
            mineralQuanitity: 63
        },
        {
            id: 10,
            facilityId: 3,
            mineralId: 10,
            mineralQuanitity: 7
        },
        {
            id: 11,
            facilityId: 4,
            mineralId: 3,
            mineralQuanitity: 12
        }
    ],
    transientState: {
        cart: []
    }
}


export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}
export const setGovernor = (governorId) => {
    database.transientState.selectedGovernor = governorId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacilityMineral = (mineralId) => {
    database.transientState.selectedMineral = mineralId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({ ...facility }))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({ ...colony }))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({ ...governor }))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({ ...mineral }))
}
export const getFacilityMinerals = () => {
    return database.facilityMinerals.map(facilitymineral => ({ ...facilitymineral }))
}


export const getTransientState = () => {
    return database.transientState
}


export const getColonyMinerals = () => {
    return database.colonyMinerals.map(minerals => ({ ...minerals }))
}


export const resetSelectedMineral = () => {
    if (database.transientState.selectedMineral) {
        database.transientState.selectedMineral = null
    }

}

export const addToCart = () => {
    //find method locates the facilityMinerals object in the databse that the button id value matches with.
    
    const colonyMinerals = database.facilityMinerals.filter((mineralObj) => (mineralObj.facilityId == database.transientState.selectedFacility))
    
    const selectedFacilityMineral = colonyMinerals.find(
        (mineralObj) => {
            return (mineralObj.mineralId == database.transientState.selectedMineral)

        }
    )
    //checks if there is currently a cart array already defined in the transient state object, if so, the object is simply pushed to the array
    if (database.transientState.cart) {
        database.transientState.cart.push(selectedFacilityMineral)
    } else { //if the cart array does not already exist, an empty array is first defined and then the object is pushed into that array
        database.transientState.cart = []
        database.transientState.cart.push(selectedFacilityMineral)
    }
    resetSelectedMineral()
    document.dispatchEvent(new CustomEvent("stateChanged"))
}


export const purchaseAllMinerals = () => {

    database.transientState.cart.forEach(
        (cartItem) => { //cartItem value is unnecessary but we need to include it as a first paramater in order to grab the index value

            subtractAllFromFacilities(cartItem) //for each item, the index value of the current element in the array is used as a parameter in the subtract and add functions
            addAllToColonies(cartItem)
        }
        )
        
    database.transientState.cart = []
    document.dispatchEvent(new CustomEvent("stateChanged"))

}

//New AddAll and SubtractAll Functions
const subtractAllFromFacilities = (cartItem) => {
    const foundFacilityMineralObj = database.facilityMinerals.find(
        (object) => {
            //matches facilityMineral.id value to the id value of the facilityMineral object currently being looked at within the cart array
            return object.id === cartItem.id 
            
        }
    )
    
    foundFacilityMineralObj.mineralQuanitity --
}

const addAllToColonies = (cartItem) => {
    //filters down total list of colony minerals to just minerals at the colony of the selectedGovernor value of current transient state
    let colonyMinerals = database.colonyMinerals.filter((colony) => (database.transientState.selectedGovernor.colonyId === colony.colonyId)) 
    const foundFacilityMineralObj = database.facilityMinerals.find(
        (mineral) => {

            return mineral.id === cartItem.id

        }
    )

    //finds the colonymineral entry for the select mineral AT this particular colony
    const foundColonyMineralObj = colonyMinerals.find(
        (mineral) => {
            // return mineral.mineralId === database.transientState.selectedMineral
            return mineral.mineralId === foundFacilityMineralObj.mineralId
        }
    )
    if (foundColonyMineralObj) {
        foundColonyMineralObj.mineralQuantity = foundColonyMineralObj.mineralQuantity + 1        
    }
    else{
        database.colonyMinerals.push({
            id: database.colonyMinerals[database.colonyMinerals.length - 1].id + 1,
            mineralId: foundFacilityMineralObj.mineralId,
            colonyId: database.transientState.selectedGovernor.colonyId,
            mineralQuantity: 1})
    }

}