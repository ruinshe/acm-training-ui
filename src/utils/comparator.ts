/**
 * Compares two properties according to the their optinal value.
 *
 * @param {any} first the first variable to be compared.
 * @param {any} second the second variable to be compared.
 * @returns {number} the comparation result.
 */
function compareProperty(first?: any, second?: any): number {
    if (first || second) {
        if (!first) {
            return -1
        } else if (!second) {
            return 1
        } else {
            if (first instanceof Number && second instanceof Number) {
                return +first - +second
            } else {
                return first.toString().localeCompare(second.toString())
            }
        }
    } else {
        return 0
    }
}

export { compareProperty }
