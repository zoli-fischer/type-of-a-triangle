export default class Formatter {
    /**
     * Capitalize first letter of a string
     * @param {string} string
     * @returns Returns false for invalid or empty strings else the string with capital first letter
     */
    static capitalizeFirst(string) {
        return typeof string === 'string' && string.length > 0 ? (string.charAt(0).toUpperCase() + string.slice(1)) : false;
    }
}
