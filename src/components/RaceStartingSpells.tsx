function RaceStartingSpells({ race }: { race: string }) {
    
    const defaultStartingSpells: string[] = ["Flames", "Healing"];
    
    const raceStartingSpells: Record<string, string[]> = {
        argonian: defaultStartingSpells,
        khajiit: defaultStartingSpells,
        redguard: defaultStartingSpells,
        nord: defaultStartingSpells,
        breton: ["Conjure Familiar", "Flames", "Healing"],
        imperial: defaultStartingSpells,
        orsimer: defaultStartingSpells,
        bosmer: defaultStartingSpells,
        altmer: ["Flames", "Healing", "Fury"],
        dunmer: ["Flames", "Sparks", "Healing"]
    }

    return (
        <article>
            <h1 className="font-bold">Starting Spells</h1>
            {raceStartingSpells[race].map((startingSpell) => <p key={ crypto.randomUUID() }>{startingSpell}</p>)}
        </article>
    )
}

export default RaceStartingSpells;