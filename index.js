

module.exports = {
    Random: {
        getMeme: require("./src/Random/getMeme.js"),
        getJoke: require("./src/Random/getJoke.js"),
        getNeko: require("./src/Random/getNeko.js"),
        getAdvice: require("./src/Random/getAdvice.js"),
        getFact: require("./src/Random/getFact.js"),
        getAnimeImgURL: require("./src/Random/getAnimeImgURL.js")
    },
    Nsfw: {
        getNsfw: require("./src/Nsfw/getNsfw.js"),
        // getBDSM: require("./src/Nsfw/getBDSM.js"),
        // getHentai: require("./src/Nsfw/getHentai.js"),
        // getWetPussy: require("./src/Nsfw/getWetPussy.js"),
        // getTeens: require("./src/Nsfw/getTeens.js"),
        // getBabygirls: require("./src/Nsfw/getBabygirls.js"),
        // getAsian: require("./src/Nsfw/getAsian.js"),
        // getRussian: require("./src/Nsfw/getRussian.js"),
        // getBoobs: require("./src/Nsfw/getBoobs.js"),
        // getAss: require("./src/Nsfw/getAss.js"),
        // getOrgasm: require("./src/Nsfw/getOrgasm.js"),
        // getCumSlut: require("./src/Nsfw/getCumSlut.js"),
        // getCollage: require("./src/Nsfw/getCollage.js"),
        // getCNC: require("./src/Nsfw/getCNC.js"),
        // getDughterTraning: require("./src/Nsfw/getDughterTraning.js")
    },
    ServerAssistant: {
        isHoisted: require("./src/ServerAssistent/isHoisted.js"),
        isURL: require("./src/ServerAssistent/isURL.js"),
        checkProfanity: require("./src/ServerAssistent/checkProfanity.js")
    }
}