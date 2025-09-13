// const engineer = {
//     name: 'Husniddin',
//     age: 30,
//     experience: '2 years',
//     language: ['JS', 'Python', 'PHP'],
//     address: {
//         country: 'Uzbekistan',
//         city: 'Tashkent'
//     },
//     sayHello: function() {
//         console.log('Salom!');
//     }
// };

// console.log(engineer);
// engineer.tosh = 'bosh';
// console.log(engineer);

// delete engineer.age
// console.log(engineer);
// engineer.sayHello();

// let productPrice = 100;
// const isMember = true;
// const hasCoupon = true;

// if(isMember) {
//     console.log("Azolikka chegirma qo'llaniladi: 10%");
//     productPrice *= 0.9;
// }

// if(hasCoupon) {
//     console.log("Qupon chegirmasi qo'llaniladi: 5%");
//     productPrice *= 0.95;
// }

// if(productPrice < 50) {
//     console.log("Qo'shimcha chegirma: 5%");
//     productPrice *= 0.95;
// }

// console.log(`Jami to'lov: ${productPrice.toFixed(2)}`);


// const age = 16;
// let ticketPrice;

// if(age < 12) {
//     ticketPrice = 5;
// } else if(age >= 12 && age <= 18) {
//     ticketPrice = 8;
// } else {
//     ticketPrice = 12;
// }

// console.log(`Bilet narxi: ${ticketPrice}`);


// const isLoggedIn = true;
// const isAdmin = false;

// if(isLoggedIn) {
//     if(isAdmin) {
//         console.log('Hush kelibsiz Admin!');
//     } else {
//         console.log('Hush kelibsiz foydalanuvchi!');
//     }
// } else {
//     console.log('Avval tizimga kiring!');
// }

// const myObject = {
//     name: 'Husniddin',
//     age: 30,
//     address: {
//         country: 'Uzbekistan',
//         city: 'Xorazm'
//     }
// }
// function sayHello({name, age}) {
//     return `Salom, mening ismim ${name}, yoshim ${age} da`;
// }

// console.log(sayHello(myObject));

// const fruits = ['olma', 'banan', 'olcha'];
// const newFruits = [...fruits, 'gilos', 'uzum'];
// console.log(fruits);
// console.log(newFruits);

// const jsFrameworks = [ 'Angular', 'React', 'Vue' ];
// const pythonFrameworks = ['Django', 'FastAPI'];
// const newJsFrameworks = [...jsFrameworks];
// console.log(jsFrameworks);
// console.log(newJsFrameworks);
// jsFrameworks[0] = 'non';
// console.log(jsFrameworks);
// console.log(newJsFrameworks);


// const engineer = {
//     name: 'Husniddin',
//     age: 30,
//     experience: '2 years',
//     language: ['JS','Python', 'PHP']
// }

// const engineerWithStatus = {
//     ...engineer, 
//     isActive: true
// };

// console.log(engineer);
// console.log(engineerWithStatus);


// const engineer = {
//     name: 'Husniddin',
//     age: 30,
//     experience: '2 years',
//     language: ['JS','Python', 'PHP']
// };

// const education = {faculty: 'Software Engineering', university: 'IUT'};

// const engineerWithEducation = {...engineer, ...education};

// console.log(engineer);
// console.log(education);
// console.log(engineerWithEducation);


// const engineer = {
//     name: 'Husniddin',
//     age: 30,
//     experience: '2 years',
//     language: ['JS','Python', 'PHP']
// };

// const education = {
//     faculty: 'Software Engineering', 
//     university: 'IUT'
// };

// const newEngineer = {...engineer, koz: 'qora', qosh: 'qalin'}

// const newEducation = {...education, sinf: 'beshinchi', bali: 'alo'};

// // const engineerWithEducation = {...engineer, ...education};

// console.log(engineer);
// console.log(education);
// // console.log(engineerWithEducation);
// console.log(newEngineer);
// console.log(newEducation);




// function sum(...numbers) {
//     let sum = 0;
//     for(let i = 0; i <numbers.length; i++) {
//         sum += numbers[i];
//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5));




// function separate(a, b, ...rest) {
//     console.log('a:',a);
//     console.log('b:',b);
//     console.log('qolgan qiymatlar:',rest);
// }
// separate(1, 2, 3, 4, 5);





// const engineer = {
//     name: 'Husniddin',
//     age: 30,
//     experience: '2 years',
//     languages: ['JS', 'Python', 'PHP']
// }

// const {name, ...rest} = engineer;

// console.log(engineer);
// console.log(rest );







// // --------------------------------------------------------------------------
const appName = 'Task Manager';

const tasks = [];

function showWelcomeMessage() {
    alert(`Welcome to ${appName}! Manager your tasks efficiently!`);
}

const addTask = () => {
    const taskTitle = prompt("Enter task title: ");
    if(taskTitle) {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            comleted: false
        };
        tasks.push(newTask);
        alert(`Task ${taskTitle} added successfilly!`);
    } else {
        alert('Task title cannot be empty!');
    }
}

const viewTasks = () => {
    if(tasks.length === 0) {
        alert("No tasks available!");
    } else {
        let taskList = "Here age your tasks:";
        for(let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            taskList += `
            ID: ${task.id}, Title: ${task.title}, Completed: ${task.completed ? "Yes" : "No"}
            `
        }
        alert(taskList);
    }
}

const togleTask = () => {
    const taskid = parseInt(prompt("Enter task ID to togle completion: "));
    const task = tasks.find(task => task.id === taskid);
    if(task) {
        task.completed = !task.completed;
        alert(
            `Task ${task.title} is ${task.completed ? "completed" : "incompleted"}`
        )
    } else {
        alert("Invalid task ID!");
    }
}

const removeTask = () => {
    const taskid = parseInt(prompt("Enter task ID to togle completion: "));
    const taskIndex = tasks.findIndex(task => task.id === taskid);

    if(taskIndex !== -1) {
        const removeTask = tasks.splice(taskIndex, 1)[0];
        alert(`Task ${removeTask.title} removed successfully!`);
    } else {
        alert("Invalid task ID!");
    }
}

const displaySummary = function() {
    const completedTasksCount = tasks.filter(task => task.completed).length;
    const inCompletedTasksCount = tasks.length - completedTasksCount;
    alert(`
        Summary:
        Total tasks: ${tasks.length}
        Completed: ${completedTasksCount}
        Incompleted: ${inCompletedTasksCount}
        `);
}


function showMainMenu() {
    let choice;
 
    do{
        choice = prompt(
            `Welcome to${appName}!
            Choose an option:
            1. Add task
            2. View tasks
            3. Toggle task
            4. Remove task
            5. Display summary
            6. Exit`
        );
        
        switch(choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTasks();
                break;
            case "3":
                togleTask();
                break;
            case "4":
                removeTask();
            case "5":
                displaySummary();
                break;
            case "6":
                alert(`Goodby! Thanks for using${appName}`);
                break;
            default: 
                alert("Invalid option. Please try again.");
        }
    } while(choice !== "6");
}
showWelcomeMessage();
showMainMenu();

// ---------------------------------------------------------------------------





// const heading1  = document.getElementById('sarlavha');
// console.log(heading1);
// heading1.remove();

////////////////////////////////////////////////////////////



// const area = 7.4;


// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));
// console.log(Math.random(area));

// const randomNumber = Math.trunc(Math.random() * 10) + 1;
// console.log(randomNumber);
