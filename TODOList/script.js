
const inp = document.querySelector("input");
const form = document.querySelector("form");
const list = document.querySelector(".list");

form.addEventListener('submit', function (e) {
    e.preventDefault(); //when we click on submit button then reload the page that is by default in submit to prevent that we us preventDefault() function

    totoo();
    inp.value = "";
})

function totoo() {
    if (inp.value === "") {
        alert("Enter a Todo!");
    }

    else {
        const task = inp.value;

        const TaskList = document.createElement("li");
        TaskList.textContent = task;

        list.append(TaskList);

        TaskList.addEventListener('click', () => {

            TaskList.style.textDecoration = "line-through";
        });
        TaskList.addEventListener('dblclick', ()=>
        {
            list.removeChild(TaskList);
        });
    }
}

