import axios from "axios";
import 
{
  SPOTIFY_AUTH_URL as url
 // SPOTIFY_AUTHORIZATION as auth
} 

from "../../config";

export default async function userLocation(code) {
  const options = {
    url: "http://www.geoplugin.net/json.gp",
    method: "GET"
  };

  const response = await axios(options);
  return response.data;
}
