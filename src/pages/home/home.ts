import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { AddSchedulePage } from '../add-schedule/add-schedule';
import { EditSchedulePage } from '../edit-schedule/edit-schedule';

import { Schedule } from '../../app/models/schedule-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // 스케쥴 리스트 
  schedules = [];  

  constructor(public navCtrl: NavController, private sqlite: SQLite) {

  }

  // 스케쥴 조회 
  getSchedule() {

    this.sqlite.create({
      name: 'ionicdb.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      db.executeSql('CREATE TABLE IF NOT EXISTS schedule(rowid INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, standardDate TEXT,isLunar INT,isRepeat INT, repeatMethod TEXT, exceptDayOfWeek TEXT, supplantExceptDayOfWeek INT)', {})
      .then(res => console.log('Executed SQL'))
      .catch(e => console.log(e));

      db.executeSql('SELECT * FROM schedule ORDER BY rowid desc', {})
      .then(res => {
        this.schedules = [];

        for (var i = 0; i < res.rows.length; i++) {

          this.schedules.push(new Schedule(res.item(i).rowid, res.item(i).title, res.item(i).standardDate, res.item(i).isLunar, res.item(i).isRepeat, 
          res.item(i).repeatMethod, res.item(i).exceptDayOfWeek.split('|'), res.item(i).supplantExceptDayOfWeek))

        }
      })
      .catch(e => console.log(e));

      
    })
  }

  // 스케쥴 추가 
  addSchedule() {
    this.navCtrl.push(AddSchedulePage);
  }
}
