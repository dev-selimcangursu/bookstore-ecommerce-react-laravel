import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      img: "https://cdn-icons-png.freepik.com/256/5110/5110717.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Top 50",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/9824/9824250.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Manga",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/4935/4935233.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Bilim Kurgu",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/2793/2793202.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Harry Potter",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/9998/9998920.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Suç ve Gizem",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/18172/18172104.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Fantastik",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/17359/17359971.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Defterler",
      link: "",
    },
    {
      img: "https://cdn-icons-png.freepik.com/256/13408/13408672.png?uid=R190373578&ga=GA1.1.750660428.1742764870&semt=ais_hybrid",
      title: "Aksesuar",
      link: "",
    },
  ],
};

export const HomeMiniCategoriesSlice = createSlice({
  name: "HomeMiniCategoriesSlice",
  initialState,
  reducers: {},
});

export default HomeMiniCategoriesSlice.reducer;
