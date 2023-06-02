import axios from 'axios';
import moment from 'moment';



const fetchCurrentTime = async (setTime, setLocation) => {
    try {
      const response = await axios.get('http://worldtimeapi.org/api/ip');
      const data = response.data;
      const currentTime = moment(data.datetime).format('YYYY-MM-DD HH:mm:ss');
  
      const locationResponse = await axios.get(`http://ip-api.com/json/${data.client_ip}`);
      const locationData = locationResponse.data;
      const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
  
      setTime(currentTime);
      setLocation(location);
    } catch (error) {
      console.log('Error fetching current time and location:', error);
    }
    };


    export default fetchCurrentTime;