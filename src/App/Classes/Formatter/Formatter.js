export default class Formatter {
    static capitalizeFirst(string) {
        return typeof string === 'string' ? (string.charAt(0).toUpperCase() + string.slice(1)) : '';
    }
}
