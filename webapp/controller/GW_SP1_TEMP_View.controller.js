sap.ui.define([
    "sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"
],
function (Controller,JSONModel) {
    "use strict";

    return Controller.extend("gwsp1tempproject.controller.GW_SP1_TEMP_View", {
        onInit: function () {
            var oModel = this.getOwnerComponent().getModel();
            var entity = oModel.sServiceUrl;
            var url = entity + "/z_sflightSet";
            var that = this;
            $.ajax({
                url : url,
                type : "get",
                dataType : "json",
                success:function(odata,response){
                    if(response==="success"){
                        var oModel = new JSONModel(odata);
                        that.getView().setModel(oModel,"sp1_Model");
                        // var oModel3 = this.getOwnerComponent().getModel("sp1_Model");
                        // oModel.loadData(odata);
                        // this.getView().setData(oModel3);
                        console.log(odata);
                    }
                },
                error:function(){
                    console.log(error);
                }
            })

        }
    });
});
