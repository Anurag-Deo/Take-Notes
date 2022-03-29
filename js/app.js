console.log('Welcome to the notes app. This app is designed by Anurag Deo')
showNotes();
let adddBtn = document.getElementById('addbtn');
adddBtn.addEventListener("click",function(e){

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
})
// function to show notes from the local storage
function showNotes(){
    let notes = localStorage.getItem("notes")
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = ""
    notesObj.forEach(function(element,index) {
        html += `<div class="notecard card mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index+1}</h5>
            <p class="card-text"> ${element}</p>
            <button id ="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });
    let notesElm = document.getElementById('notes');
    if(notesObj.length !=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `<center>Nothing to show please use the Add Notes Button to add your notes</center>`;
    }


}

// function to delete a note
function deleteNote(index){
    console.log('I am deleting',index)
    let notes = localStorage.getItem("notes");
    if (notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    showNotes();

}

let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){

    let inputVal = search.value.toLowerCase();
    //console.log('Input event fired!',inputVal);
    let notecards = document.getElementsByClassName('notecard');
    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toLowerCase();
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        //console.log(cardTxt);
    })

})