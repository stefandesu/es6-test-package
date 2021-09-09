import axios from "axios"

export default async () => (await axios({
  method: "get",
  url: "https://coli-conc.gbv.de/api/status",
})).data
