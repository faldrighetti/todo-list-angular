import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  arrayTareas =[{nombreTarea: 'Lavar la ropa', esCompleta: false}]; 

  constructor(){ }

  ngOnInit():void {
  }

  onSubmit(form: NgForm){
    console.log(form);

    this.arrayTareas.push({
      nombreTarea: form.controls['Tarea'].value,
      esCompleta: false
    });
  }
}
