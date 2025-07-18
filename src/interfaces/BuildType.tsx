export interface BuildType {
    id: string,
    timestamp: string,
    name: string,
    description: string,
    properties: {
        race: string,
        standingStone: string
    },
}