import axios from "axios";

const fetchCurrentLocation = async (time, setLocation) => {
  const data = JSON.parse(time);
  if (data === null) return;
  try {
    const locationResponse = await axios.get(
      `http://ip-api.com/json/${data.client_ip}`
    );
    const locationData = locationResponse.data;
    //const location = `${locationData.city}, ${locationData.regionName}, ${locationData.country}`;
    console.log(locationData);
    setLocation(JSON.stringify(locationData));
  } catch (error) {
    console.log("Error fetching current location:", error);
  }
};

export default fetchCurrentLocation;
