
import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  return axios.get(baseUrl).then((result) => result.data);
};

const create = (note) => {
  return axios.post(baseUrl, note);
};

const update = (id, updatedNote) => {
  return axios.put(`${baseUrl}/${id}`, updatedNote);
};

export default { create, getAll, update };