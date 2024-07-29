import axios from "axios";
import { setPg } from "../reducers/MainPgRoomData/MainPgRoomData";
const pgDataApi = () => (dispatch, getState) => {
  axios
    .get("https://mocki.io/v1/d3cebb39-3c22-4bfd-9592-fcd4b6f0ef12")
    .then((response) => dispatch(setPg(response.data)));
};

export default pgDataApi;
