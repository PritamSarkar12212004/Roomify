import axios from "axios";
import { getMainMessData } from "../reducers/MainMessData/MainMessData";

const Messdata = () => (dispatch, getState) => {
  axios
    .get("https://mocki.io/v1/28d2fcc1-9d0d-4333-becd-40bda0680df7")
    .then((response) => dispatch(getMainMessData(response.data)))
    .catch((error) => console.log(error));
};
export default Messdata;
