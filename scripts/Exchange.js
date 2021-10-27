import { FacilitiesSelect, FacilityMinerals, FacilityName } from "./Facilities.js"
import { ColonyName } from "./ColonyName.js"
import { Governors } from "./Governors.js"
import { buttonHTML } from "./Orders.js"
import { CartItems } from "./CartItems.js"


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

                    <h2>${ColonyName()} Minerals </h2>
                    <div id="mineralDisplay"></div>

                </Section>
        </Article>
        <Article>"Facility Choice:" ${FacilitiesSelect()} </Article>
        <Article class="placeholder1">
            <Section>
                <Section>"Facility Minerals ${FacilityName()}"</Section>
                <Section>${FacilityMinerals()}</Section>
            </Section>
            <Section>
                <Section>Cart</Section>
                <Section>${CartItems()}</Section>
                <Section>
                ${buttonHTML()}
            </Section>
        </Article>
    `
}