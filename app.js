function updateTask(id, newName){
const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
  for(i = 0 ; i < tasks.length ; i++){
    if(tasks[i].id == id){
    tasks[i].name = newName
      break
    }
  }
  console.log(tasks)
}
updateTask(2, 'Travelling');

// [
//   { id: 1, name: 'Fishing' },
//   { id: 2, name: 'Travelling' },
//   { id: 3, name: 'Swimming' }
// ]
