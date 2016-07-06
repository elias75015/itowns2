/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* global Promise*/

import IoDriver from 'Core/Commander/Providers/IoDriver';


function IoDriver_JSON() {
    //Constructor
    IoDriver.call(this);

}

IoDriver_JSON.prototype = Object.create(IoDriver.prototype);

IoDriver_JSON.prototype.constructor = IoDriver_JSON;

IoDriver_JSON.prototype.read = function(url) {


    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        // xhr.responseType = "document";
        xhr.crossOrigin = '';

        xhr.onload = function() {
            //resolve(this.response);
            resolve(JSON.parse(this.response)); // limited to 1000...
        };

        xhr.onerror = function() {
            reject(Error("Error IoDriver_JSON"));
        };

        xhr.send(null);
    });

};

export default IoDriver_JSON;
