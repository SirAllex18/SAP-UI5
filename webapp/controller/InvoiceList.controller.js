sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"

], function(Controller, JSONModel, formatter, Filter, FilterOperator){
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter, 
        onInit: function() {
            let oViewModel = new JSONModel({
                currency: "Lei"
            });

            this.getView().setModel(oViewModel, "view")
        },

        onFilterInvoices : function(oEvent){
            
            // Build filter array Question Mark

            let aFilter = [];
            let sQuery = oEvent.getParameter("query");
            
            if(sQuery){
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding

            let oList = this.byId("invoiceList");
            let oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress : function (oEvent){
            let oItem = oEvent.getSource();
            let oRouter = this.getOwnerComponent().getRouter(); // Question mark
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
            });
        }
    });
});
