var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { AddSchedulePage } from '../add-schedule/add-schedule';
import { Schedule } from '../../app/models/schedule-model';
var HomePage = (function () {
    function HomePage(navCtrl, sqlite) {
        this.navCtrl = navCtrl;
        this.sqlite = sqlite;
        // 스케쥴 리스트 
        this.schedules = [];
    }
    // 스케쥴 조회 
    HomePage.prototype.getSchedule = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('CREATE TABLE IF NOT EXISTS schedule(rowid INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, standardDate TEXT,isLunar INT,isRepeat INT, repeatMethod TEXT, exceptDayOfWeek TEXT, supplantExceptDayOfWeek INT)', {})
                .then(function (res) { return console.log('Executed SQL'); })
                .catch(function (e) { return console.log(e); });
            db.executeSql('SELECT * FROM schedule ORDER BY rowid desc', {})
                .then(function (res) {
                _this.schedules = [];
                for (var i = 0; i < res.rows.length; i++) {
                    _this.schedules.push(new Schedule(res.item(i).rowid, res.item(i).title, res.item(i).standardDate, res.item(i).isLunar, res.item(i).isRepeat, res.item(i).repeatMethod, res.item(i).exceptDayOfWeek.split('|'), res.item(i).supplantExceptDayOfWeek));
                }
            })
                .catch(function (e) { return console.log(e); });
        });
    };
    // 스케쥴 추가 
    HomePage.prototype.addSchedule = function () {
        this.navCtrl.push(AddSchedulePage);
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController, SQLite])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map