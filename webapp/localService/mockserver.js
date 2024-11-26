sap.ui.define(
	["sap/ui/core/util/MockServer", "sap/base/util/UriParameters"],
	function (MockServer, UriParameters) {
		"use strict";
		return {
			init: function () {
				let oMockServer = new MockServer({
					rootUri:
						"https://services.odata.org/V2/Northwind/Northwind.svc/",
				});
				let oUriParameters = new UriParameters(window.location.href);

				MockServer.config({
					autoRespond: true,
					autoRespondAfter: oUriParameters.get("serverDelay") || 500,
				});

				let sPath = "../localService";
				oMockServer.simulate(
					sPath + "/metadata.xml",
					sPath + "/mockdata"
				);

				oMockServer.start();
			},
		};
	}
);
