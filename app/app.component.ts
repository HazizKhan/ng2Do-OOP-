import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles:[
        `
        .true{
            text-decoration:line-through;
        }
        label{
            font-size:medium;
            color:black;
        }
        .secondary-content{
            margin-top:0;
            color:red;
        }
        label{
            margin-top:2px;
        }
        h1{
            text-align:center;
        }
        .validate{
            width:70%;
        }
        .collection-header{
            text-align:center;
        }
        .secondary-content{
            cursor:pointer;
        }
        .true{
            text-decoration:line-through;
        }
        `
    ]
})
export class AppComponent {
    tasks: Todo[];
    input:string;
        constructor(){
        this.tasks = [
            new Todo("Task 1"),
            new Todo("Task 2"),
            new Todo("Task 3")
        ];
    }
    onAdd(){
        if(this.input){
            this.tasks.push(new Todo(this.input));
            this.input = "";
        }
        
    }
    onDelete(index:number){
            this.tasks.splice(index, 1);
        }
 }
