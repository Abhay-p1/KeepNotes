import React, { useEffect, useState } from "react";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    useEffect(() => {
        showAlert(' Single Click 👉 On Notepad To Open It 📖🖊  And  Double Click To Close It 👈🤫 ', 'alert-info')
    }, [])
    const [show, setshow] = useState(false);
    function showAlert(msg, classname) {
        const divele = document.createElement('div');
        divele.className = `alert ${classname}`;
        divele.appendChild(document.createTextNode(msg));
        // Get parent
        const containerpar = document.getElementById('root')
        const nextele = document.getElementById('main-noteid')
        containerpar.insertBefore(divele, nextele);
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
    const inputevent = (e) => {
        const { name, value } = e.target;
        setNote((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    const addnote = () => {
        if (note.title === '') {
            showAlert('❗ Enter Some Title Please..🙏🙂 ', 'alert-danger');
        }
        else if (note.content === '') {
            showAlert('❗ Enter Some Note Please.🙏📃🖊 ', 'alert-warning');
        }
        else {
            props.funct(note);
            setNote({
                title: "", content: ""
            })
        }
    }
    return (<>
        <div className="main-note" id="main-noteid" onDoubleClick={() => { setshow(false) }}>
            <form>
                {show ?
                    <div class="input-group mb-3 bg-dark">
                        <span class="input-group-text word" id="inputGroup-sizing-default">Note Title</span>
                        <input value={note.title} name="title" onChange={inputevent} type="text" autocomplete="off" placeholder="Title 📝" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    : null}
                <textarea 
                onClick={() => { setshow(true) }} value={note.content} name="content" onChange={inputevent} id="textnote" placeholder="Write a note...🖊"></textarea>
                {show ?
                    <button type="button" onClick={addnote} class="btn btn-success">✅</button>
                    : null}
            </form>
        </div>
    </>);
}
export default CreateNote;