function StandingStoneDescription({ standingStone }: { standingStone: string }) {
    const standingStoneDescriptions: Record<string, string> = {
        apprentice: "Those under the sign of The Apprentice recover Magicka faster, but are more susceptible to Magicka damage.",
        atronach: "Those under the sign of The Atronach absorb a portion of incoming spell damage and have a larger pool of Magicka, but recover it more slowly.",
        lady: "Those under the sign of The Lady regenerate Health and Stamina more quickly.",
        lord: "Those under the sign of The Lord are more resistant to both Magicka and physical damage.",
        lover: "Those under the sign of The Lover always feel a Lover's Comfort. (All skills improve faster).",
        mage: "Those under the sign of the Mage will learn all magic skills 20% faster.",
        ritual: "Once a day, those under the sign of The Ritual can reanimate nearby corpses to fight for them.",
        serpent: "Once a day, those under the sign of The Serpent can use a ranged paralyzing poison on opponents.",
        shadow: "Once a day, those under the sign of The Shadow can become invisible for an extended period.",
        steed: "Those under the sign of The Steed can carry more and do not suffer a movement penalty from armor.",
        thief: "Those under the sign of the Thief will learn all stealth skills 20% faster.",
        tower: "Those under the sign of The Tower have the option to automatically open Expert or lower locks.",
        warrior: "Those under the sign of the Warrior will learn all combat skills 20% faster."
    }

    return (
        <p className="text-justify">{standingStoneDescriptions[standingStone]}</p>
    )
}

export default StandingStoneDescription;