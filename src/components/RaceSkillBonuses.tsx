
interface SkillBonuses {
    alteration?: number,
    conjuration?: number,
    destruction?: number,
    enchanting?: number,
    illusion?: number,
    restoration?: number,
    archery?: number,
    block?: number,
    heavyArmor?: number,
    oneHanded?: number,
    smithing?: number,
    twoHanded?: number,
    alchemy?: number,
    lightArmor?: number,
    lockpicking?: number,
    pickpocket?: number,
    sneak?: number,
    speech?: number,
}

function RaceSkillBonuses({ race }: { race: string }) {
    
    const raceSkillBonuses: Record<string, SkillBonuses> = {
        argonian: {
            lockpicking: 10,
            lightArmor: 5,
            alteration: 5,
            pickpocket: 5,
            restoration: 5,
            sneak: 5
        },
        breton: {
            conjuration: 10,
            alteration: 5,
            restoration: 5,
            illusion: 5,
            alchemy: 5,
            speech: 5
        },
        dunmer: {
            destruction: 10,
            lightArmor: 5,
            alteration: 5,
            illusion: 5,
            alchemy: 5,
            sneak: 5
        },
        altmer: {
            illusion: 10,
            alteration: 5,
            conjuration: 5,
            destruction: 5,
            enchanting: 5,
            restoration: 5
        },
        imperial: {
            restoration: 10,
            block: 5,
            destruction: 5,
            enchanting: 5,
            heavyArmor: 5,
            oneHanded: 5,
            speech: 5
        },
        khajiit: {
            sneak: 10,
            alchemy: 5,
            archery: 5,
            lockpicking: 5,
            oneHanded: 5,
            pickpocket: 5
        },
        nord: {
            twoHanded: 10,
            block: 5,
            lightArmor: 5,
            oneHanded: 5,
            smithing: 5,
            speech: 5
        },
        orsimer: {
            heavyArmor: 10,
            block: 5,
            enchanting: 5,
            oneHanded: 5,
            smithing: 5,
            twoHanded: 5
        },
        redguard: {
            oneHanded: 10,
            alteration: 5,
            archery: 5,
            block: 5,
            destruction: 5,
            smithing: 5
        },
        bosmer: {
            archery: 10,
            alchemy: 5,
            lightArmor: 5,
            lockpicking: 5,
            pickpocket: 5,
            sneak: 5
        }
    };

    function capitalize(str: string) {
        return str
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, c => c.toUpperCase())
            .trim();
    }

    return (
        <article>
            <h1 className="font-bold">Skill Bonuses</h1>
            {Object.entries(raceSkillBonuses[race]).map(([skill, value]) =>
                value !== undefined ? (
                <p key={skill}>
                    {capitalize(skill)}: +{value}
                </p>
                ) : null
            )}
</article>

    )

}

export default RaceSkillBonuses;