const database = {
    governors = [
        {id: 1, name: "Patricia Bundy", colonyId: 1 ,active: true},
        {id: 2, name:"Katrina Bahringer", colonyId: 2, active: true },
        {id: 3, name: "Lola Wolff", colonyId: 3, active: true},
        {id: 4, name: "Damon Hartmann", colonyId: 4, active: true},
        {id: 5, name: "Elizabeth Ortega", colonyId: 3, active: true},
        {id: 6, name: "Will Gentry", colonyId: 4, active: true},
        
    ],
    facilities = [
        { id: 1, minerals: [{name: "Jacobsite", amount: 72},{name: "Indite", amount: 33},{name: "Iron", amount: 86}], active: true},
        { id: 2, minerals: [{name: "Kainite", amount: 22},{name: "Krotite", amount: 35}, {name: "Copper", amount: 77}], active: true},
        { id: 3, minerals: [{name: "Hafnon", amount: 44},{name: "Haxonite", amount: 4},{name: "Iron", amount: 55}], active: true},
        { id: 4, minerals: [{name: "Fluellite", amount: 27},{name: "Galaxite", amount: 99}, {name: "Copper", amount: 77}], active: true}

    ],
    colonies = [
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
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }

