function RaceDescription({ race }: { race: string }) {
    
    const raceDescriptions: Record<string, string> = {
        argonian: "This reptilian race, well-suited for the treacherous swamps of their Black Marsh homeland, has developed a natural resistance to diseases and the ability to breathe underwater. They can call upon the Histskin to regenerate health very quickly.",
        khajiit: "Hailing from the province of Elsweyr, they are intelligent, quick, and agile. They make excellent thieves due to their natural stealthiness. All Khajiit can see in the dark at will and have unarmed claw attacks.",
        redguard: "The most naturally talented warriors in Tamriel, the Redguards of Hammerfell have a hardy constitution and a natural resistance to poison. They can call upon an Adrenaline Rush in combat.",
        nord: "Citizens of Skyrim, they are a tall and fair-haired people. Strong and hardy, Nords are famous for their resistance to cold and their talent as warriors. They can use a Battlecry to make opponents flee.",
        breton: "In addition to their quick and perceptive grasp of spellcraft, even the humblest of High Rock's Bretons can boast a resistance to magic. Bretons can call upon the Dragonskin power to absorb spells.",
        imperial: "Natives of Cyrodiil, they have proved to be shrewd diplomats and traders. They are skilled with combat and magic. Anywhere gold coins might be found, Imperials always seem to find a few more. They can call upon the Voice of the Emperor to calm an enemy.",
        orsimer: "The people of the Wrothgarian and Dragontail Mountains, Orcish smiths are prized for their craftsmanship. Orc troops in Heavy Armor are among the finest in the Empire, and are fearsome when using their Berserker Rage.",
        bosmer: "The clanfolk of the Western Valenwood forests, also known as \"Bosmer.\" Wood elves make good scouts and thieves, and there are no finer archers in all of Tamriel. They have natural resistances to both poisons and diseases. They can Command Animals to fight for them.",
        altmer: "Also known as \"Altmer\" in their homeland of Summerset Isle, the high elves are the most strongly gifted in the arcane arts of all the races. They can call upon their Highborn power to regenerate Magicka quickly.",
        dunmer: "Also known as \"Dunmer\" in their homeland of Morrowind, dark elves are noted for their stealth and magic skills. They are naturally resistant to fire and can call upon their Ancestor's Wrath to surround themselves in fire."
    }

    return (
        <article>
            <h1 className="font-bold">Description</h1>
            <p className="text-justify">{raceDescriptions[race]}</p>
        </article>
    )
}

export default RaceDescription;