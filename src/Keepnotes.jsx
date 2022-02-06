import React, { useState } from "react";
import Header from './Header';
import CreateNote from './CreateNote';
import Note from './Notes';
import Footer from './Footer';

const Keepnotes = () => {
  const [items, setitems] = useState([]);
  const addNote = (note) => { // note is a note obj
    showAlert('✅ Note Added Successfully!!..😉😀', 'alert-success');
    setitems((olditems) => {
      return [...olditems, note]; // array of objects
    })
  }
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
  const deleteNote = (id) => {
    showAlert('❌ Note Deleted Successfully!! 😁😀', 'alert-success');
    setitems((olditems) => {
      return olditems.filter((curr, inx) => {
        return inx !== id;
      })
    });

  }
  return (<>
    <Header />
    <CreateNote funct={addNote} />
    <div className="container-fluid " style={{minHeight:"60vh"}}>
    <div className="row p-4" id="idnotes">
      {items.map((curr, inx) => {
        return <Note
          key={inx}
          id={inx}
          title={curr.title}
          content={curr.content}
          onSelect={deleteNote}
        />
      })}
    </div>
    </div>
    <Footer />
  </>);
}
export default Keepnotes;