import axios from "axios";

const getQuote = async (setQuote) => {
    const response = await axios.get(
        "https://api.kanye.rest/"
    );
    setQuote(response.data.quote);
}

export default getQuote;