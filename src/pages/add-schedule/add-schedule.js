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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
/**
 * Generated class for the AddSchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddSchedulePage = (function () {
    function AddSchedulePage(navCtrl, navParams, sqlite, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sqlite = sqlite;
        this.toast = toast;
    }
    AddSchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddSchedulePage');
    };
    // 스케쥴 추가 
    AddSchedulePage.prototype.addSchedule = function () {
        var _this = this;
        this.sqlite.create({
            name: 'ionicdb.db',
            location: 'default'
        }).then(function (db) {
            db.executeSql('INSERT INTO schedule values(NULL, ?, ?, ?, ?, ?, ?, ?)', [_this.schedule.title, _this.schedule.standardDate, _this.schedule.isLunar, _this.schedule.isRepeat, _this.schedule.repeatMethod, _this.schedule.exceptDayOfWeek, _this.schedule.supplantExceptDayOfWeek])
                .then(function (res) {
                console.log(res);
                _this.toast.show('Data Saved', '5000', 'center').subscribe(function (toast) {
                    _this.navCtrl.popToRoot();
                });
            })
                .catch(function (e) {
                console.log(e);
                _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                    console.log(toast);
                });
            });
        })
            .catch(function (e) {
            console.log(e);
            _this.toast.show(e, '5000', 'center').subscribe(function (toast) {
                console.log(toast);
            });
        });
    };
    AddSchedulePage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-add-schedule',
            templateUrl: 'add-schedule.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, SQLite, Toast])
    ], AddSchedulePage);
    return AddSchedulePage;
}());
export { AddSchedulePage };
//# sourceMappingURL=add-schedule.js.map