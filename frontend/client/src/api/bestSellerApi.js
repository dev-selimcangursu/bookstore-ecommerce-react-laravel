import axios from "axios";

export const getBestSeller = async ()=>{
    let response = await axios.get('http://localhost:8000/get/best-seller-books');
    return response.data.bestSellerBook
}

