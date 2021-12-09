
import { useState, useEffect } from "react";

import {postNote, getNotes} from "../../services/notes";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState({});
    const [description, setDescription] = useState("");

    const postNotes = (e) =>{
        e.preventDefault();
        postNote({description}).then(res => {
            setNewNote(res.data)
            setNotes((prev) => {
                prev = [
                    ...prev,
                    res.data,
                ]
            })
        }).catch(err => console.log(err));
    }

    const getAllNotes = () => {
        getNotes().then(res => {
            setNotes(res.data);
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getAllNotes();
    }, [])

    return(
        <div>
            <h1>Notes</h1>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>DateTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notes.map(note => {
                                return(<tr key={note.id}>
                                    <td>{note.description}</td>
                                    <td>{note.date}</td>
                                </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        <form>
            <input type="text" onChange={(e) => setDescription(e.target.value)}></input>
            <button type="submit" onClick={postNotes}>SUBMIT</button>
        </form>
        </div>
    )
}
export default Notes;