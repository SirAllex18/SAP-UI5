// Reusable part for all dialogs.
sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"

], function(ManagedObject, Fragment){

    "use strict";

    return ManagedObject.extend("sap,ui.walkthrough.controller.HelloDialog", {
        constructor : function(oView){
            this._oView = oView 
        },

        exit : function (){
            delete this._oView;
        },
    
        open : function () {
            let oView = this._oView;

            // create the dialog

            if(!oView.byId("helloDialog")){
                let oFragmentController = {
                    onCloseDialog : function () {
                        oView.byId("helloDialog").close();
                    }
                }
            

            // load asynchrounous XML fragment

            Fragment.load({
                id : oView.getId(),
                name: "sap.ui.demo.walkthrough.view.HelloDialog",
                controller: oFragmentController
            }).then(function(oDialog) {

                // connect dialog to the root of the component ( models and lifecycle )

                oView.addDependent(oDialog);
                oDialog.open();


            })
        } else {
            oView.byId("helloDialog").open();
        }

        }
    });
});