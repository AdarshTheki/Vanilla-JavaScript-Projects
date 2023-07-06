const addBtn = document.getElementById("add");

addBtn.addEventListener("click", () => {
  addNewNote();
});
function addNewNote() {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="notes">
      <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div>
      <div class="main hidden"></div>
      <textarea ></textarea>
    </div>
  `;

  const notesEle = note.querySelector(".notes");
  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");

  const main = note.querySelector(".main");
  const textArea = note.querySelector("textArea");

  // Edit Note
  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  // Delete note
  deleteBtn.addEventListener("click", () => {
    note.remove();
  });

  textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked(value);
  });

  document.body.appendChild(note);
}
