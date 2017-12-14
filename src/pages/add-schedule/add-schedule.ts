import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Schedule } from '../../app/models/schedule-model';

/**
 * Generated class for the AddSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-schedule',
  templateUrl: 'add-schedule.html',
})
export class AddSchedulePage {

  schedule: Schedule;

  constructor(public navCtrl: NavController, public navParams: NavParams, public sqlite: SQLite, public toast: Toast) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddSchedulePage');
  }

  // 스케쥴 추가 
  addSchedule() {
    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('INSERT INTO schedule values(NULL, ?, ?, ?, ?, ?, ?, ?)', [this.schedule.title, this.schedule.standardDate, this.schedule.isLunar, this.schedule.isRepeat, this.schedule.repeatMethod, this.schedule.exceptDayOfWeek, this.schedule.supplantExceptDayOfWeek])
      .then(res => {
        console.log(res);
        this.toast.show('Data Saved', '5000', 'center').subscribe(
          toast => {
            this.navCtrl.popToRoot();
          }
        );
      })
      .catch(e =>{
        console.log(e);
        this.toast.show(e, '5000', 'center').subscribe(
          toast => {
            console.log(toast);
          }
        )
      })
    })
    .catch(e =>{
      console.log(e);
      this.toast.show(e, '5000', 'center').subscribe(
        toast => {
          console.log(toast);
        }
      )
    })
  }
}
