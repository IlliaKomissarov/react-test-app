import axios from "axios";
axios.defaults.baseURL = "https://react-test-app-yuwo.onrender.com/api";

export const fetchDeals = async () => {
  const response = await axios.get("/deals");
  console.log(response.data.data);
  return response.data.data;
};
