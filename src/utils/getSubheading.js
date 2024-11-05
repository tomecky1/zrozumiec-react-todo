export function getSubheading(numberOfTasks) {
    switch (true) {
        case numberOfTasks > 4:
            return `${numberOfTasks} zadań:`
        case numberOfTasks <= 4:
            return `${numberOfTasks} zadania:`
        case numberOfTasks === 1:
            return `${numberOfTasks} zadanie`
        case numberOfTasks === 0:
        default:
            `${numberOfTasks} brak zadań`

    }
}