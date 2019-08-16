export const compare = ({ a = 0, b = 0, reverse = false }) => {
    if (a === b) return 0

    return (reverse ? -1 : 1) * (a > b ? 1 : -1)
}
