function addTask() 
{
    let taskInput = document.getElementById("taskInput").value.trim();
    if (taskInput === "")
     {
        alert("Please enter a task");
        return;
    }

    let priority = getPriority(taskInput);
    let taskBody = document.getElementById("taskBody");

    let row = document.createElement("tr");
    row.innerHTML =
        <td>${taskInput}</td>
        <td class="${priority.toLowerCase()}">${priority}</td>;

    taskBody.appendChild(row);
    document.getElementById("taskInput").value = ""; 
}

function getPriority(task)
 {
    if (task.toLowerCase() === "study")
    {
        return "High";
    } 
    else if (task.toLowerCase() === "mobile")
    {
        return "Low";
    }
    return "Medium";
}