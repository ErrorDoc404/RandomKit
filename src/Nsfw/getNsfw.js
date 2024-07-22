const axios = require("axios");
const userAgents = require("../../tools/user-agents.json");

async function getMeme() {
    try {
        const tags = ["pussy", "bdsm", "bdsmgw", "LegalTeens", "drippingwetpussy"];
        const tag = tags[Math.floor(Math.random() * tags.length)];

        let json = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
            headers: {
                "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
            }
        });

        json = json.data;
        if (!json || !json.length) {
            throw new Error("Error: Unable to access the JSON content of API");
        }

        let post = json[0].data.children[0].data;
        if (!post) {
            throw new Error("Error: No valid post data found");
        }

        // Ensure the fetched post is an image (JPEG or PNG)
        while (!post.url.endsWith(".jpg") && !post.url.endsWith(".jpeg") && !post.url.endsWith(".png")) {
            // Refetch another random post if the current one is not an image
            json = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
                headers: {
                    "User-Agent": userAgents[Math.floor(Math.random() * userAgents.length)]
                }
            });

            json = json.data;
            if (!json || !json.length) {
                throw new Error("Error: Unable to access the JSON content of API");
            }

            post = json[0].data.children[0].data;
            if (!post) {
                throw new Error("Error: No valid post data found");
            }
        }

        // Construct the embed content for Discord
        const content = {
            embeds: [{
                color: 0x6a7cab,
                image: { url: post.is_video ? "https://freepikpsd.com/wp-content/uploads/2019/10/no-image-png-5-Transparent-Images.png" : post.url },
                title: post.title
            }]
        };

        return content;
    } catch (error) {
        console.error("Error fetching meme:", error);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

module.exports = getMeme;