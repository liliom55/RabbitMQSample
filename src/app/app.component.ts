import { Component } from '@angular/core';

declare var require: any;
declare var Buffer: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';
    constructor() {


        var Stomp = require('stompjs');
        var client = Stomp.client('ws://dev.stefanka.tech:15674/stomp/websocket');
        //var ws = new WebSocket('ws://dev.stefanka.tech:15674/stomp/websocket');
        //var client = Stomp.over(ws);

        var on_connect = function () {
            console.log('connected');
        };
        var on_error = function () {
            console.log('error');
        };
        
        client.connect('medusa', 'm3dus4!', on_connect, on_error, '/', function (err, conn) {
            client.send("/queue/test", {}, "Hello, STOMP");
        });
        

    }

}
