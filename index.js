const entryForm = document.querySelector("#entryForm");
const entriesSection = document.querySelector("#entries")
const entriesTextBox = document.querySelector(".entry-textbox")
const entriesNav = document.querySelector('.entries-nav')


let count = 1;

function preventRefreshing(event) {
      event.preventDefault();
      const entryDiv = document.createElement("div");
      entryDiv.className = "single-entry";
      entryDiv.innerText = entriesTextBox.value;
      entryDiv.style.display = "none";
      entriesSection.appendChild(entryDiv);
      entriesTextBox.value= "";


      const displayEntryButton = document.createElement("button");
      displayEntryButton.className = "display-entry-button"
      displayEntryButton.innerText = count;
      entriesNav.appendChild(displayEntryButton);

      count++;


      displayEntryButton.addEventListener("click", function(){
            const allEntries = document.querySelectorAll(".single-entry")
            for(let i=0; i<allEntries.length; i++){
                  allEntries[i].style.display='none'
            }
            entryDiv.style.display = "block"
      })
}



entryForm.addEventListener("submit", preventRefreshing);

