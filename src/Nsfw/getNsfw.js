const axios = require("axios");
const userAgents = require("../../tools/user-agents.json")

async function getNsfw() {

    let tag = ["pussy", "bdsm", "bdsmgw", "LegalTeens", "drippingwetpussy"]
    tag = tag[Math.floor(Math.random() * tag.length)]

    let json = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
        headers: {
            "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
        }
    });

    json = json.data;
    if (!json) throw new "Error 01: Unable to access the json content of API"
    json = json[0].data.children[0].data;

    return json.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : json.url;
}


module.exports = getNsfw;