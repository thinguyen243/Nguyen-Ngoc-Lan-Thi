import axios from "axios";
const API_KEY = "95c458842a1b1bf3c983fa6c";
export default {
  getRate: (from, to, value) => 
    axios
      .request(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${from}`)
      .then((response) => {
        let rates = response.data.conversion_rates;
        let exchangeRate = rates[to];
        let total = (value * exchangeRate).toFixed(2);
        return total;
      })
};
