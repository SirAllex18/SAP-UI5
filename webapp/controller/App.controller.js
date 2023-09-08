sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast", // Modules part (used to display the message at the bottom of the page instead of alert box )
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function (Controller, MessageToast, JSONModel, ResourceModel) { // constructor function

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

            // Set i18n on view

            let i18nModel  = new ResourceModel({
                bundleName : "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales : [""],
                fallbackLocale: ""
            });
            this.getView().setModel(i18nModel, "i18n")
        },


        onShowHello: function () {
            // read message from i18n model
            
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient]); // helloMsg its a variable from the i18n file 


            // Show a native or vanilla JS alert instead of putting the message
            // in the brakcets we added sMsg where we saved our name
            // it represents the text from the box that appears at the end of the page
            MessageToast.show(sMsg) 
        }
    });

});