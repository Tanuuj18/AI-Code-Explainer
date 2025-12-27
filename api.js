import axios from "axios";

export const explainCodeAPI = async (code) => {
  const response = await axios.post(
    "http://localhost:5000/api/explain",
    { code }
  );
  return response.data;
};
