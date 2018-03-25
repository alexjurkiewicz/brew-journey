"use strict";
var Messages = /** @class */ (function () {
    function Messages() {
        this.messages = [];
    }
    Messages.prototype.update = function () {
        var list = document.getElementById('messages');
        list.innerHTML = ''; // empty it -- slow
        for (var _i = 0, _a = this.messages.slice().reverse(); _i < _a.length; _i++) {
            var msg = _a[_i];
            var el = document.createElement('li');
            el.appendChild(document.createTextNode(msg));
            list.appendChild(el);
        }
    };
    Messages.prototype.add = function (msg) {
        this.messages.push(msg);
        this.update();
    };
    return Messages;
}());
var messages = new Messages();
var Equipment = /** @class */ (function () {
    function Equipment() {
        this.masher = 'none';
        this.boiler = 'none';
        this.fermenter = 'none';
    }
    Equipment.prototype.toHTML = function () {
        return "<ul>\n    <li>Masher: " + this.masher + "</li>\n    <li>Boiler: " + this.boiler + "</li>\n    <li>Fermenter: " + this.fermenter + "</li>\n    </ul>";
    };
    return Equipment;
}());
var playerstatus = { 'money': 100, 'skill': 1, 'equipment': new Equipment(), 'brews': [] };
function printStatus(status) {
    var statusBox = document.getElementById('statusbox');
    statusBox.innerHTML = '';
    var p = document.createElement('p');
    p.innerHTML = "<ul>\n  <li>Current cash: $" + status.money + "</li>\n  <li>Current skill: " + status.skill + "</li>\n  <li>Brewing equipment: " + status.equipment.toHTML() + "</li>\n  <li>Brews on hand: " + status.brews.length + "</li>\n  </ul>";
    statusBox.appendChild(p);
}
function printActionBar() {
    var actionBar = document.getElementById('actionbar');
    actionBar.innerHTML = '';
    if (playerstatus.equipment.boiler != 'homebrew all-in-one kit') {
        actionBar.innerHTML += '<button type="button" onclick="purchaseEquipment();">Purchase Basic Homebrew Kit ($20)</button>';
    }
    if (playerstatus.equipment.boiler != 'none' && playerstatus.money >= 7) {
        actionBar.innerHTML += '<button type="button" onclick="brew();">Brew a basic beer ($7)</button>';
    }
    if (playerstatus.brews.length !== 0) {
        actionBar.innerHTML += '<button type="button" onclick="sellBrew();">Sell a basic beer brew (+$10)</button>';
    }
}
function refreshUI() {
    printStatus(playerstatus);
    printActionBar();
}
function purchaseEquipment() {
    playerstatus.equipment.boiler = 'homebrew all-in-one kit';
    playerstatus.equipment.fermenter = 'homebrew all-in-one kit';
    messages.add("You purchase an all-in-one homebrew kit from the supermarket. It takes pre-mashed malt and concentrated hop oil");
    playerstatus.money -= 20;
    refreshUI();
}
function brew() {
    var brew = { 'name': 'basic', 'skill': playerstatus.skill };
    playerstatus.money -= 7;
    playerstatus.brews.push(brew);
    refreshUI();
}
function sellBrew() {
    playerstatus.brews.shift();
    playerstatus.money += 10;
    refreshUI();
}
function main() {
    refreshUI();
    messages.add("Welcome to Brew!");
}
window.onload = main;
