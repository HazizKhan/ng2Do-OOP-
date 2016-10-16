export class Todo{
    task: string;
    status: boolean = false;
    editMode: boolean = false;
    constructor(task:string){
        this.task = task;
    }
}