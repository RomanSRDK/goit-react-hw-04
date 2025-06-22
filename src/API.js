import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const MY_API_KEY = "?client_id=OpjREoOCDBH6PR0oL8cJHmYnatQOvg9OzIoNTAJ_8tM";

export const searchPhotos = async (searchName) => {
  const { data } = await axios.get(`search/photos${MY_API_KEY}`, {
    params: {
      query: searchName,
      per_page: 15,
      //   orientation: "portrait",
      //   order_by: "latest",
    },
  });
  return data;
};
