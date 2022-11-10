const addBtn = document.querySelector(".add");
const ul = document.querySelector(".todo-list");
const sort = document.querySelector(".sort-btn");
let direction = "";

addBtn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.className = "todo-item";
  const input = document.createElement("input");
  input.className = "input";
  const button = document.createElement("button");
  button.className = "x";

  button.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(input);
  li.appendChild(button);
  ul.appendChild(li);
});

sort.addEventListener("click", () => {
  toggleUpDown();
  const todos = ul.childNodes;
  const itemsArr = [];

  for (var i in todos) {
    if (todos[i].nodeType == 1) {
      itemsArr.push(todos[i]);
    }
  }

  itemsArr.sort((a, b) => compareFn(a, b, direction));
  for (i = 0; i < itemsArr.length; ++i) {
    ul.appendChild(itemsArr[i]);
  }
});
function toggleUpDown() {
  if (direction) sort.classList.remove(direction);
  direction = direction === "asc" ? "desc" : "asc";
  sort.classList.add(direction);
  sort.classList.add("active");
}

function compareFn(a, b, direction) {
  let aValue = a.children[0]?.value;
  let bValue = b.children[0]?.value;

  if (aValue > bValue) {
    return direction === "asc" ? 1 : -1;
  } else if (aValue < bValue) {
    return direction === "asc" ? -1 : 1;
  } else return 0;
}
