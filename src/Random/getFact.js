const axios = require("axios")
const userAgents = require("../../tools/user-agents.json")

const getFact = async () => {
    let json = await axios("https://useless-facts.sameerkumar.website/api", {
        headers: {
        "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
        }
    });

    json = json.data;
    if (!json) throw "Error 01: Unable to access the json content of API"

    return {  description: json.data, color: 0x6a7cab };
}

module.exports = getFact;