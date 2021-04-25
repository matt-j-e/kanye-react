import axios from "axios";

const getNumberFact = async (number) => {
    const url = "http://numbersapi.com/" + number;
    const response = await axios.get(url);
    return response.data;
}

export default getNumberFact;