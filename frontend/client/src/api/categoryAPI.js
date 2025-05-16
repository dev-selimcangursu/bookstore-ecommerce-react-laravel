import axios from "axios";

export const getCategories = async()=>{
  const response = await axios.get('http://localhost:8000/get/categories')
  return response.data.categories
}