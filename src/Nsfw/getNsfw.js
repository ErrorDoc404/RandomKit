const axios = require("axios");
const userAgents = require("../../tools/user-agents.json")

async function getNsfw(retryCount = 3) {

    let tag = ["pussy", "bdsm", "bdsmgw", "LegalTeens", "drippingwetpussy"]
    try {
        const response = await axios(`https://www.reddit.com/r/${tag}/random/.json`, {
            headers: {
                'User-Agent': userAgents[Math.floor(Math.random() * userAgents.length)],
            },
        });

        let jsonData = response.data;
        if (!jsonData || !jsonData.length) {
            throw new Error('Error: Unable to access the JSON content of API');
        }

        const post = jsonData[0].data.children[0].data;
        if (post && post.post_hint === 'image' && post.url) {
            return post.url; // Return the image URL
        } else {
            throw new Error('Error: No image found in the fetched data');
        }
    } catch (error) {
        console.error('Error fetching random image:', error);

        // Retry logic
        if (retryCount > 0) {
            console.log(`Retrying... (${retryCount} attempts left)`);
            return getNsfw(retryCount - 1);
        } else {
            console.error('Maximum retry attempts reached. Returning null.');
            return null; // Return null if retries are exhausted
        }
    }
}


module.exports = getNsfw;