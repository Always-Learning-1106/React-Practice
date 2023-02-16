import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID 7bmKjFik5oHaYV-4-Vp4nxstcwM-x50qq5NInI_M75k",
    },
    params: {
      query: term,
    },
  });
  return response.data.results;
};

export default searchImages;
