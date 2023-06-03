import axios from 'axios';



const fetchCurrentQuote = async (setQuote) => {

    try {
      const response = await axios.get('https://api.quotable.io/random');
      const data = response.data;
      //const currentTime = moment(data.datetime).format('YYYY-MM-DD HH:mm:ss');
    /*
      const locationResponse = await axios.get(`http://ip-api.com/json/${data.client_ip}`);
      const locationData = locationResponse.data;
      const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
  */
      setQuote(JSON.stringify(data));
      //setLocation(location);
    } catch (error) {
      //console.log('Error fetching current Quote:', error);
    }
    };


    export default fetchCurrentQuote;