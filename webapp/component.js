sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"

], function(UIComponent, JSONModel, ResourceModel){
    "use strict";
    
    return UIComponent.extend("sap.ui.walkthrough.Component",{
        metadata : {
/*
        Since we taken this to the manifest file we just 
        need to reference that and delete the rest. Step10

            rootView : {
                "viewName" : "sap.ui.demo.walkthrough.view.App",
                "type" : "XML",
                "async" : true,
                "id" : "app"
            }
*/
            manifest: "json"
        },

        init : function () {
            // call the init function of the parent UI component

            UIComponent.prototype.init.apply(this, arguments);

            // set DataModels

            let oData = {
                recipient: {
                    name: ""
                }
            };
            
            let oModel = new JSONModel(oData); 
            this.setModel(oModel); // dont need getView() - > setModel directly

            // set i18n model

            /* we added into the manifest file so we no longer need it here 
            let i18nModel  = new ResourceModel({
                bundleName : "sap.ui.demo.walkthrough.i18n.i18n",
                supportedLocales : [""],
                fallbackLocale: ""
            });
            this.setModel(i18nModel, "i18n")
            */
        }
    });
});