import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  arrayTareas: { nombreTarea: string; esCompleta: boolean; }[] = [];

  onSubmit(form: NgForm){
    console.log(form);

    this.arrayTareas.push({
      nombreTarea: form.controls['Tarea'].value,
      esCompleta: false
    });

    form.reset();
  }

  onDelete(index: number){
    console.log(index);

    this.arrayTareas.splice(index, 1);
  }

  onCheck(index: number){
    console.log(this.arrayTareas);
    this.arrayTareas[index].esCompleta = !this.arrayTareas[index].esCompleta;
  }
}
