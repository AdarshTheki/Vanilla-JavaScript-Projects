// Get the input element and note list
const noteInput = document.getElementById("note-input");
const noteList = document.getElementById("note-list");

// Function to create a new note item
function createNoteItem(text) {
  const noteItem = document.createElement("li");
  noteItem.className = "note-item";

  const noteText = document.createElement("span");
  noteText.textContent = text;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    noteList.removeChild(noteItem);
  });

  noteItem.appendChild(noteText);
  noteItem.appendChild(deleteButton);

  return noteItem;
}

// Function to add a new note
function addNote() {
  const noteText = noteInput.value.trim();

  if (noteText !== "") {
    const noteItem = createNoteItem(noteText);
    noteList.appendChild(noteItem);
    noteInput.value = "";
  }
}

// Event listener for the Enter key
noteInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addNote();
  }
});

// Event listener for the Add button
addButton.addEventListener("click", addNote);
