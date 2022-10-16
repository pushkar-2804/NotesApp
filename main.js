const addNote = document.getElementById('popBox');
const pop = document.getElementById('pop');
const addNoteForm = document.getElementById('addNoteForm');
const makeNote = document.getElementById('makeNote');
const popTitle = document.getElementById('popTitle');
const popDescription = document.getElementById('popDescription');
// Main page
const notes = document.getElementById('notes');
const note = document.getElementsByClassName('note');


pop.addEventListener('submit',function(e){
    e.preventDefault();
    addNote.style.display='none';
    createNote(popTitle.value,popDescription.value);
    popTitle.value='';
    popDescription.value='';
})

makeNote.addEventListener('click',function(){
    addNote.style.display='block';
})


// Function creating a note
const createNote = function(title,description){
    title=title.trim();
    description=description.trim();
    if(title===''|| description==='')
        return;                                                  
    let noteBox = document.createElement('div');
    noteBox.className = 'note';
    let noteTitleTag = document.createElement('h3');
    noteTitleTag.className = 'noteHeading';
    let noteDescriptionTag = document.createElement('p');
    noteDescriptionTag.className = 'noteDescription';

    noteBox.appendChild(noteTitleTag);
    noteBox.appendChild(noteDescriptionTag);
    document.getElementById('notes').append(noteBox);

    noteTitleTag.innerHTML=title;
    noteDescriptionTag.innerHTML=description; 

    console.log(title,description);
    localSave(title,description);
}

function localSave(title,description){
   
    if (localStorage.count)
        localStorage.count = Number(localStorage.count) + 1;
    else
        localStorage.count = 1;
    
    for(let index = 1;index<=localStorage.count;index++){
        console.log(index,localStorage.getItem(index));
    }

    
}