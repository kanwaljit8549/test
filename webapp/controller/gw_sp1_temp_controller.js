sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"],
    function(Controller,MessageBox){
        return Controller.extend("gwsp1tempproject.controller.gw_sp1_temp_controller",{
            onInit:function(){
                var oModel = this.getOwnerComponent().getModal();
                var entity = oModel.sServiceUrl;
                var url = entity + "/";
                var that = this;
                $ajax({
                    url : url,
                    type : "get",
                    dataType : "json",
                    success:function(odata,response){
                        if(response==="success"){
                            var oModel = new JSONModel(odata);
                            that.getView(),setModel(oModel,"sp1_Model");
                            // var oModel3 = this.getOwnerComponent().getModel("sp1_Model");
                            // oModel.loadData(odata);
                            // this.getView().setData(oModel3);
                        }
                    },
                    error:function(){
                        console.log(error);
                    }
                })
            }
        })
    });