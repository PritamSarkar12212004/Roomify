import axios from "axios";
import { getImage } from "../reducers/MainHomeData/mainHomePoster";
const HomeData = () => (dispatch, getState) => {
  axios
    .get("https://mocki.io/v1/d3cebb39-3c22-4bfd-9592-fcd4b6f0ef12")
    .then((response) => dispatch(getImage(response.data)))
    .catch((error) => console.log(error));
};
export default HomeData;
