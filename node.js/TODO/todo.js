 const fs = require('fs');
 const Filepath = './tasks.json';

 const loadTasks = () => {
     try {
          const dataBuffer =   fs.readFileSync(Filepath); // Read the file synchronously
            const dataJSON = dataBuffer.toString(); // Convert buffer to string
 return JSON.parse(dataJSON)
     
     } catch (error) {
         return [];
     }
    
    }

    const saveTasks = (tasks) => {
          const dataJSON= JSON.stringify(tasks); // Convert tasks to JSON string
              fs.writeFileSync(Filepath, dataJSON); // Write JSON string to file
        
    }
 const addtask = (task)=>{
      const tasks = loadTasks();
      tasks.push({ task });
      saveTasks(tasks);
        console.log(`Task "${task}" added successfully.`);
       
       

     
 }

 const listtask =()=>{
    const tasks = loadTasks()

    tasks.map((task , index) => {
   console.log(`${index + 1}. ${task.task}`);
    })
 }

 const removetask = (index)=>{
    const tasks = loadTasks();
    if (index < 1 || index > tasks.length) {
        console.log('Invalid task number.');
        return;
      } 
      tasks.splice(index - 1, 1); // Remove the task at the specified index
         
   }
 

 const command = process.argv[2];
 const argument = process.argv[3];



 if ( command === 'addtask'){
    addtask(argument)
 }else if ( command === 'listtask'){
    listtask()
    }else if ( command === 'removetask'){
    removetask(parseInt(argument))
    }else {
    console.log('Invalid command. Please use addtask, listtask, or removetask.');
    }


