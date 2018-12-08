export default class Triangle {
    /** All three sides are equal */
    static get EQUILATERAL() { return 'equilateral'; }

    /** Two sides are equal */
    static get ISOSCELES() { return 'isosceles'; }

    /** All sides are different */
    static get SCALENE() { return 'scalene'; }

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

    static isValidPositiveNr(nr) {
        return (typeof nr === 'number' && nr > 0) || (typeof nr === 'string' && /^[0-9]+[.,]*[0-9]*$/.test(nr));
    }

    static isValid(a, b, c) {
        return Triangle.isValidPositiveNr(a)
            && Triangle.isValidPositiveNr(b)
            && Triangle.isValidPositiveNr(c)
            && a + b > c
            && a + c > b
            && c + b > a;
    }
}
