interface  Task {
    id : number;
    task_name : string;
    isCompleated : boolean;
}

let tasks : Task[] = [];

function addTask (task_name : string) :void{
    const newTask: Task = {
        id: tasks.length + 1,
        task_name: task_name,
        isCompleated: false
    };
    tasks.push(newTask);
    console.log(`Task "${task_name}" added successfully.`);
}


function DeleteTask (id : number) : void {
    const index = tasks.findIndex(task => task.id === id);
    if (index !== -1) {
        const deletedTask = tasks.splice(index, 1)[0];
        console.log(`Task "${deletedTask.task_name}" deleted successfully.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

function MarkTaskAsCompleted (id : number) : void {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.isCompleated = true;
        console.log(`Task "${task.task_name}" marked as completed.`);
    } else {        console.log(`Task with ID ${id} not found.`);
    }
}

function ListTasks () : void {
    if (tasks.length === 0) {
        console.log("No tasks found.");
    } else {
        console.log("Tasks:");
        tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.task_name}, Completed: ${task.isCompleated}`);
        });
    }
}

// Example usage
addTask("Buy groceries");
addTask("Complete TypeScript project");
ListTasks();
MarkTaskAsCompleted(1);
ListTasks();
DeleteTask(2);
ListTasks();    