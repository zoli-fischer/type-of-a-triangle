export default class Triangle {
    /** All three sides are equal */
    static get EQUILATERAL() { return 'equilateral'; }

    /** Two sides are equal */
    static get ISOSCELES() { return 'isosceles'; }

    /** All sides are different */
    static get SCALENE() { return 'scalene'; }

    /**
     * Get the type a triangle from
     * @param {integer} a Length of triangle side
     * @param {integer} b Length of triangle side
     * @param {integer} c Length of triangle side
     * @returns If the given lengths are not correct for a triangle than false else Triangle.EQUILATERAL, Triangle.ISOSCELES or Triangle.SCALENE
     */
    static getType(a, b, c) {
        if (Triangle.isValid(a, b, c)) {
            if (a === b && b === c) {
                return Triangle.EQUILATERAL;
            }
            if (a === b || a === c || b === c) {
                return Triangle.ISOSCELES;
            }
            return Triangle.SCALENE;
        }
        return false;
    }

    /**
     * Converts a string  to number (base 10).
     * @param {integer|string} nr
     * @returns {integer|boolean} If the given parameter can't be validated for a positive number returns false. If the given parameter is a number returns it.
     */
    static strToNr(nr) {
        if (Triangle.isValidPositiveNr(nr)) {
            switch (typeof nr) {
            case 'number':
                return nr;
            case 'string':
                return parseInt(nr.replace(',', '.'), 10);
            default:
                break;
            }
        }
        return false;
    }

    /**
     * Validates if string or number is a valid positive number format
     * @param {integer|string} nr
     * @returns {boolean}
     */
    static isValidPositiveNr(nr) {
        return (typeof nr === 'number' && nr > 0) || (typeof nr === 'string' && /^[0-9]+[.,]*[0-9]*$/.test(nr));
    }

    /**
     * Check if 3 lengts can build a triangle based on triangle inequality theorem
     * @param {integer} a Length of triangle side
     * @param {integer} b Length of triangle side
     * @param {integer} c Length of triangle side
     * @returns {boolean}
     */
    static isValid(a, b, c) {
        return Triangle.isValidPositiveNr(a)
            && Triangle.isValidPositiveNr(b)
            && Triangle.isValidPositiveNr(c)
            && a + b > c
            && a + c > b
            && c + b > a;
    }
}
