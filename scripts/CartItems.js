import { setMineral } from "./database.js"


document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.name.startsWith("mineral")) {
            setMineral(parseInt(changeEvent.target.value))
        }
    }
)
