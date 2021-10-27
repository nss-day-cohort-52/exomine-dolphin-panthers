

document.addEventListener(
    "change",
    (changeEvent) => {
        if (changeEvent.target.id === "select__mineral") {
            setMineral(parseInt(changeEvent.target.value))
        }
    }
)