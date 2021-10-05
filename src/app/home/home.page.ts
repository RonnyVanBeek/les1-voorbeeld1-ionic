import { Component } from '@angular/core';
import {AlertController} from '@ionic/angular';
import {Task} from 'src/datatypes/task';
//import {delay} from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fabVerticalPosition = 'Bottom';

  taskList: Task[] = [];
  id=1;

  //taskExample = 'Een demo taak';
  //alertController: AlertController;

  constructor(public alertController: AlertController) {
    //this.alertController = alertController;
    for (let i = 1;i <= 50; i++){
      this.taskList.push((new Task({
        name: `Task ${i}`,
        done: i % 2 ===0,
        id: i
      })));
      this.id++;
    }
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'New Task',
      message: 'Please enter the name of the new task',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Okay',
          handler: (data) => {
            this.taskList.push(new Task({
              name: data.taskName,
                id: this.id,
                done: false
            }));
          }
        }
      ],
      inputs: [
        {
          name: 'taskName',
          type: 'text',
          placeholder: 'Task name'
        }]
    });

    await alert.present();
  }

/*  enum{
    'Alle taken',
    'Afgewerkt'
}*/

  delete(item: Task){
    for (let i = 0;i<this.taskList.length;i++){
      if (this.taskList[i] === item){
        this.taskList.splice(i,1);
      }
    }
  }

  async hideFAB(){
    document.getElementById('FABadd').hidden = true;
  }

  async showFAB(){
    setTimeout(()=>{
      document.getElementById('FABadd').hidden = false;
      },
      1500
    );
  }

/*  filterList(status:boolean){

  }*/
}
