import axios from "axios";

export const postNote = ({description}) =>{
    return axios.post("http://localhost:3001/api/notes", {
        description
    }).then(res => res)
    .catch(err => err);
}

export const getNotes = () =>{
    return axios.get("http://localhost:3001/api/notes")
    .then(res=>res).catch(err => err);
}