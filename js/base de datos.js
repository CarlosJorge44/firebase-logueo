const db = firebase.firestore();
const taskForm = document.getElementById("task-form"); 
const getTasks =() => {db.colletion("tareas").get();}

taskForm.addEventListener("submit", 
    async(e) => {
       e.preventDefault(); 
        const title = taskForm["task-title"].value;
        const description = taskForm["task-description"].value;

        await db.collection("tareas").doc().set(
            {title:title,
            description:description
        }
    )
}
)


