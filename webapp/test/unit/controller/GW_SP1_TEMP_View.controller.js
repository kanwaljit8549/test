/*global QUnit*/

sap.ui.define([
	"gw_sp1_temp_project/controller/GW_SP1_TEMP_View.controller"
], function (Controller) {
	"use strict";

	QUnit.module("GW_SP1_TEMP_View Controller");

	QUnit.test("I should test the GW_SP1_TEMP_View controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
