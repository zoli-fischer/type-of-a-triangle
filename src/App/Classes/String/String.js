export default class String {
    static capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}