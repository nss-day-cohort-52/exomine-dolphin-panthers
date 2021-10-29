import { FacilitiesSelect, FacilityMinerals, FacilityName } from "./Facilities/index.js"
import { ColonyName } from "./ColonyName.js"
import { Governors } from "./Governors.js"
import { PurchaseButton } from "./Orders.js"
import { CurrentItem } from "./CurrentItem.js"
import { colonyResourcesHTML } from "./ColonyResources.js"
import { addToCartButton } from "./AddToCart.js"
import { CartContent } from "./CartContent.js"


export const Exchange = () => {
    return `
        <header class="header">
            
            <h1 class="title">Mineral Exchange</h1>
        </header>
        <Article class="upperfield">
                <Section class="govBox">
                    Choose a governor 
                    ${Governors()}
                </Section>
                <Section class="colonyBox">
                    <h2 class="colonyName">${ColonyName()} Minerals </h2>
                    <div id="mineralDisplay">
                    ${colonyResourcesHTML()}
                    </div>

                </Section>
        </Article>
        <Article class="facBox">Choose a facility${FacilitiesSelect()} </Article>
        <Article class="lowerfield">
            <Section class="facMineBox">
                <h3>Facility Minerals ${FacilityName()}</h3>
                <Section>${FacilityMinerals()}</Section>
            </Section>
            <Section class="cartBox">
                <h3>Cart</h3>
                <Section class="cartItems">${CurrentItem()}</Section>
                ${addToCartButton()}
                <h3 class="cartContent">Cart Content</h3>
                <section class="contentList">${CartContent()}</section>
                ${PurchaseButton()}
            </Section>
        </Article>
    `
}