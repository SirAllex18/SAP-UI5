

/* NO LONGER NEEDED FILE SINCE THE ADDITION OF component js and manifest changes


sap.ui.define([
  "sap/ui/core/mvc/XMLView" DELETED when we added the component js

    "sap/ui/core/ComponentContainer"
    
], function (ComponentContainer) {
    "use strict";

    /* new Text({
        text: "Hello Bia!"     This is somewhat a controls!
    }).placeAt("content")      without using the XML sepparate file
   */


/*  This was used to place the view (our button + input) in the html body content
    Removed it when the component.js file was created
    STEP 9

    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App" 
    }).then( function (oView) {
        oView.placeAt("content");
    });



    new ComponentContainer({
        name : "sap.ui.demo.walkthrough",
        settings : {
            id : "walkthrough"

        },
        async : true
    }).placeAt("content");


});

*/