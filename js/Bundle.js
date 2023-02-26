class Task {
    _name;
    _dateTime;
    _description;

    constructor(name, date, descr=null) {
        this._name = name;
        this._dateTime = date; 
        this._description = descr;  
    }

    // Getters 
    getName() {
        return this._name;
    }

    getDueDate() {
        return this._dateTime;
    }

    getDescription() {
        return this._description;
    }

    // Setters
    setName(newName) {
        this._name = newName;
    }

    setDueDate(newDate) {
        this._dateTime = newDate;
    }

    setDescription(newDescr) {
        this._description = newDescr;
    }

    valueOf() {
        return `${this._description} | ${this._dateTime}`;
    }

}

class Bundle{
    constructor(){
        this.task_list = [];
        this.bundle_name = 'template name';
        this.deadline = new Date();
    }
    
    addTask(t){
        this.task_list.push(t);
    }
    
    removeTask(t){
        for (var i = 0; i < this.task_list.length;i++){
            if( t == this.task_list[i]){
                this.task_list.splice(i,1);
            }
        }
    }
    
}

//testing bundle of tasks class
task1 = new Task ('eat bass', new Date(2023, 02, 27),'eating bass');
task2 = new Task ('blast', new Date(2023,02,28), 'never forget to blast');
task3 = new Task ('die', new Date(2200,01,01),'perish');

taskBunch = new Bundle();
taskBunch.addTask(task1);
taskBunch.addTask(task2);
taskBunch.addTask(task3);

console.log(taskBunch)
console.log('creating a new updated list after removing a task')

taskBunch.removeTask(task2);

console.log(taskBunch)