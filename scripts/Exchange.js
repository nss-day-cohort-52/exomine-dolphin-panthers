
import { ColonyName } from "./ColonyName.js"
import { FacilitiesSelect, FacilityName } from "./Facilities.js"
import { Governors } from "./Governors.js"

export const Exchange = () => {
    return `
        <header class="header">
            
            <h1 class="title">Mineral Exchange</h1>
        </header>
        <Article class="placeholder1">
                <Section>
                    Choose a governor:
                    ${Governors()}
                </Section>
                <Section>
<<<<<<< HEAD
                    <h2>"ColonyName" Minerals </h2>
                    <div id="mineralDisplay"></div>
=======
                    <h2>${ColonyName()} Minerals </h2>
                    <div> actual minerals</div>
>>>>>>> main
                </Section>
        </Article>
        <Article>"Facility Choice:" ${FacilitiesSelect()} </Article>
        <Article class="placeholder1">
            <Section>
                <Section>"Facility Minerals ${FacilityName()}"</Section>
                <Section>Resource List for Colony</Section>
            </Section>
            <Section>
                <Section>Cart</Section>
                <Section>Cart Items</Section>
                <Section>
                <button id= "orderMineral">Purchase Minerals</button></Section>
            </Section>
        </Article>
    `
}