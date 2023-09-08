sap.ui.define([

    "sap/ui/core/mvc/XMLView"
    
], function (XMLView) {
    "use strict";

    /* new Text({
        text: "Hello Bia!"     This is somewhat a controls!
    }).placeAt("content")      without using the XML sepparate file
   */

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App" 
    }).then( function (oView) {
        oView.placeAt("content");
    });
});

