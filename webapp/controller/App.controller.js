sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", // Modules part (used to display the message at the bottom of the page instead of alert box )
    "sap/ui/model/json/JSONModel"

], function (Controller, MessageToast, JSONModel) { // constructor function

    "use strict"; // helps detect coding issues, keeps things organised

    return Controller.extend("sap.ui.demo.walkthrough.App", {

        onInit: function () {
            // set the data model on the view
            let oData = {
                recipient: {
                    name: ""
                }
            };
            let oModel = new JSONModel(oData); // instance  of an class
            this.getView().setModel(oModel); // Question Mark these 2
        },

        onShowHello: function () {
            // Show a native or vanilla JS alert
            MessageToast.show("I love you")
        }
    });

});