import axios from "axios";


const pokeapi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 15000,
})
export default pokeapi;