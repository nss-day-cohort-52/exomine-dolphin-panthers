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
        { id: 1, name: "Galactic Rocks", minerals: [{mineralId: 1, amount: 72},{mineralId: 2, amount: 33},{mineralId: 3, amount: 86}], active: true},
        { id: 2, name: "Asteroids Anonymous", minerals: [{mineralId: 4, amount: 22},{mineralId:  5, amount: 35}, {mineralId:  6, amount: 77}], active: true},
        { id: 3, name: "Ring Foundries", minerals: [{mineralId: 7, amount: 44},{mineralId: 8, amount: 4},{mineralId: 3, amount: 55}], active: true},
        { id: 4, name: "Luna Foundry", minerals: [{mineralId: 9, amount: 27},{mineralId: 10, amount: 99}, {mineralId: 6, amount: 77}], active: false}

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
        {id: 10, mineralName: "Galaxite"},
    ],
    colonies: [
        {id:1, planetName: "Europa", minerals: []},
        {id:2, planetName: "Saturn", minerals: []},
        {id:3, planetName: "Mars", minerals: []},
        {id:4, planetName: "Luna", minerals: []}
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

