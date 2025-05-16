import anchorPoints from "./anchorPoints"

export default function selfDiagnostic(): [string, string] {
    const systems = Object.keys(anchorPoints)
    const nPoints = systems.length
    const affectedSystem = systems[Math.floor(Math.random() * nPoints)]
    const anchorPoint = anchorPoints[affectedSystem]
    return [affectedSystem, anchorPoint]
}