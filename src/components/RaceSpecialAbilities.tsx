function RaceSpecialAbilities({ race }: { race: string }) {
    const raceSpecialAbilities: Record<string, Record<string, string>> = {
        argonian: {
            'Histskin': "Invoke the power of the Hist to recover health ten times faster for 60 seconds. Can only be used once per day.",
            'Resist Disease': "Your Argonian blood is 50% resistant to disease.",
            'Waterbreathing': "Your Argonian Lungs can breathe underwater."
        },
        khajiit: {
            'Night Eye': "See in the dark for 60 seconds for an unlimited number of times per day.",
            'Claws': "Unarmed attacks do 12 points of damage."
        },
        redguard: {
            'Adrenaline Rush': "Stamina regenerates 10x faster for 60 seconds.",
            'Resist Poison': "Your Redguard blood gives you 50% resistance to poison."
        },
        nord: {
            'Battle Cry': "Target flees for 30 seconds.",
            'Resist Frost': "Your Nord blood gives you 50% resistance to frost."
        },
        breton: {
            'Dragonskin': "Absorb 50% of magicka from hostile spells for 60 seconds.",
            'Magic Resistance': "Breton blood grants a 25% resistance to magic."
        },
        imperial: {
            'Voice of the Emperor': "Calms nearby humanoids for 60 seconds.",
            'Imperial Luck': "Anywhere gold coins might be found, Imperials always seem to find a few more."
        },
        orsimer: {
            'Berserker Rage': "Take half damage and do double damage for 60 seconds."
        },
        bosmer: {
            'Command Animal': "Make an animal an ally for 60 seconds.",
            'Resist Disease and Poison': "Your Bosmer blood gives you 50% resistance to poison and disease."
        },
        altmer: {
            'Highborn': "Regenerate magicka faster for 60 seconds, once a day.",
            'Fortify Magicka': "Passive increase in magicka by 50 points."
        },
        dunmer: {
            'Ancestor\'s Wrath': "Once per day for 60 seconds, opponents that get too close take 8 points per second of fire damage",
            'Resist Fire': "Your Dunmer blood gives you 50% resistance to fire."
        }
    };

    return (
        <article>
            <h1 className="font-bold">Special Abilities</h1>
            {Object.entries(raceSpecialAbilities[race]).map(([abilityName, description]) => (
                    <p className="text-justify">{abilityName} - {description}</p>
                ))}
        </article>
    )
}

export default RaceSpecialAbilities;