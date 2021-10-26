const database = {
    governors: [
        {id: 1, name: "Patricia Bundy", colonyId: 1 ,active: true},
        {id: 2, name:"Katrina Bahringer", colonyId: 2, active: true },
        {id: 3, name: "Lola Wolff", colonyId: 3, active: false},
        {id: 4, name: "Damon Hartmann", colonyId: 4, active: true},
        {id: 5, name: "Elizabeth Ortega", colonyId: 3, active: true},
        {id: 6, name: "Will Gentry", colonyId: 4, active: false},
        
    ],
    facilities: [

        { id: 1, name: "Galactic Rocks", active: true},
        { id: 2, name: "Asteroids Anonymous", active: true},
        { id: 3, name: "Ring Foundries", active: true},
        { id: 4, name: "Luna Foundry", active: true}

    ],
    minerals: [
        {id: 1, mineralName: "Jacobsite"},
        {id: 2, mineralName: "Indite"},
        {id: 3, mineralName: "Iron"},
        {id: 4, mineralName: "Kainite"},
        {id: 5, mineralName: "Krotite"},
        {id: 6, mineralName: "Copper"},
        {id: 7, mineralName: "Hafnon"},
        {id: 8, mineralName: "Haxonite"},
        {id: 9, mineralName: "Fluellite"},
        {id: 10, mineralName: "Galaxite"}
    ],
    colonies: [
        {id:1, planetName: "Europa"},
        {id:2, planetName: "Saturn"},
        {id:3, planetName: "Mars"},
        {id:4, planetName: "Luna"}
    ],
    colonyMinerals: [
        {
            id: 1, 
            colonyId: 1,
            mineralId: 10,
            mineralQuantity:12
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
        }
    ],
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getGovernors = () => {
    return database.governors.map(governor => ({...governor}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

