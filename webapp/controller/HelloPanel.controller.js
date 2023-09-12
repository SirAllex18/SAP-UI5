sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment" // load our module fragment

], function(Controller, MessageToast, Fragment){
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        
        onShowHello: function () {

            // read message from i18n model
            
            let oBundle = this.getView().getModel("i18n").getResourceBundle();
            let sRecipient = this.getView().getModel().getProperty("/recipient/name");
            let sMsg = oBundle.getText("helloMsg", [sRecipient]); // helloMsg its a variable from the i18n file 
    
            MessageToast.show(sMsg) 
        },

        onOpenDialog : function (){

            this.getOwnerComponent().openHelloDialog();
  /*    We added all of this to the Dialog.js file so we dont have to rewrite all of this we we desire
        to reuse a dialog 

          let oView = this.getView();

            // Create the dialog lazily

            if(!this.byId("helloDialog")){
                //load asynchronous XML fragment
                Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.walkthrough.view.HelloDialog",
                    controller: this

                }).then(function(oDialog) {  // A PROMISE example.

                    // connect dialog to the root view of this component (modules, lifecycle)
                    
                    oView.addDependent(oDialog);
                    oDialog.open();
                
                })
                
            }else{
                this.byId("helloDialog").open();
            }

        },

        onCloseDialog : function () {
            this.byId("helloDialog").close(); // 
        }
*/
        }
    })
});