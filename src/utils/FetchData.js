import axios from 'axios';


const fetchData = async(url) => {
    const apiKey = process.env.REACT_APP_API_KEY_EXERCISEDB
    const options = {
        method: 'GET',
        url: url,
        headers: {
          'X-RapidAPI-Key': apiKey,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
    try {
        const response = await axios.request(options);
        const data = await response.data;
        console.log(data)
        return data
    } catch (error) {
        console.error(error);
    }
}

export default fetchData