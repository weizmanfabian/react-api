const axios = require("axios")

const url = "https://rickandmortyapi.com/api/character"

const getDataByUrl = async (urlAConsultar) => {
  try {
    const { data } = await axios.get(urlAConsultar)
    return data;
  } catch (err) {
    console.log(`err getDataByUrl ${err}`)
  }
}

module.exports = {
  url,
  getDataByUrl
}
