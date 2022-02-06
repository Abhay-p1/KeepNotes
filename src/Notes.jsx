import React from "react";

const Note = (props) => {
    return (<>
    <div className="col-sm-4">
        <div className="note" >
            <h3 className="borderline">📝{props.title}   <button type="button"
                onClick={() => {
                    props.onSelect(props.id);
                }}
                class="btn cancel btn-warning">❌</button></h3>
            <p>{props.content}</p>
        </div>
    </div>
    </>);
}
export default Note;