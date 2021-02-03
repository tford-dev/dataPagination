const firstList = document.querySelector("ul"); //selects the first ul in DOM
const pageList = document.querySelector(".link-list"); //selects class where where the buttons will be located
const active = document.getElementsByClassName("active"); //selects the button with the active class
const buttonList = pageList.children; //array of the li buttons in the DOM
const buttons = document.getElementsByTagName("button"); //collection of buttons in DOM
let list = []; //Array to hold mark up from data array
let displayList = []; //array that holds 9 student cards to display
let openPage = 1 //index of current page that is open
const numPerPage = 9; //Desired amount of student cards to display
let numOfPages = 0; //number of pages dependent on length of data divided by numPerPage

//Function that takes objects from an array, pushes them into list array, and then determines how many pages there are based off of length of list array divided by numPerPage.
const showPage = (arr) => {
  for(let i = 0; i < arr.length; i++){
    const card = `
      <li class="student-item cf">
        <div class="student-details">
          <img class="avatar" src="${arr[i].picture.large}" alt="Profile Picture">
          <h3>${arr[i].name.title} ${arr[i].name.first} ${arr[i].name.last}</h3>
          <span class="email">${arr[i].email}</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${arr[i].registered.date}</span>
        </div>
      </li>
    `;
    list.push(card);
  }
  numOfPages = Math.ceil(data.length/numPerPage);
}

//Function that clears first unordered list, pushes 9 objects from list into displayList, and then displays them into first ul.
const drawList = () =>{
  firstList.innerHTML = null;
  for(let i = 0; i < displayList.length; i++){
    firstList.innerHTML += displayList[i];
  } 
};

//function that creates buttons to cycle through data based off of numOfPages. Then this function removes .active class from li button that is no longer selected, clears and updates openPage based off of selected page, and then calls loadList() to iterate through list array.
const addPagination = () => {
   for(let i = 0; i < numOfPages; i++){
   const pageButton = `
      <li>
        <button type="button" class="">${[i + 1]}</button>
      </li>
   `;
   pageList.innerHTML += pageButton;
   }
   for(let i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", ()=>{
         active[0].classList.remove("active");
         openPage = 0;
         openPage = i + 1;
         loadList();
    });
  }
}

//Function that slices list array by 9 and pushes 9 objects into displayList so that it can be displayed.
const loadList = () => {
  buttons[openPage - 1].classList.toggle("active");
  let start = ((openPage - 1) * numPerPage);
  let finish = start + numPerPage;
  displayList = list.slice(start, finish);
  drawList();
}

//Calling functions so that data array can be made into markup and pushed into list array, for buttons to be generated, and so that student info can be displayed when page is first loaded.
const load = () => {
  showPage(data);
  addPagination();
  loadList();
}

window.onload = load();



