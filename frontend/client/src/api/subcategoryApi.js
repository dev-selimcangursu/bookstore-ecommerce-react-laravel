import axios from "axios";

export const getSubCategoris = async ()=>{

    let response = await axios.get('http://localhost:8000/get/subcategories')
    return response.data.subcategories
}