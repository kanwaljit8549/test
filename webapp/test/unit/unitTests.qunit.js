/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"gw_sp1_temp_project/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
