require("path");
function getLocalePath () {
    return path.join(__dirname, "locales");
}
module.exports = getLocalePath();
