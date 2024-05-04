//@ui5-bundle invoicetrackingapp/Component-preload.js
sap.ui.require.preload({
	"invoicetrackingapp/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("invoicetrackingapp.Component",{metadata:{manifest:"json"}})});
},
	"invoicetrackingapp/i18n/i18n.properties":'# This is the resource bundle for invoicetrackingapp\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=AI generated App invoicetrackingapp\n\n#YDES: Application description\nappDescription=AI generated App invoicetrackingapp',
	"invoicetrackingapp/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"invoicetrackingapp","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.13.3","toolsId":"74b7d2e1-069c-4c00-9467-a2d7fa920ab2"},"dataSources":{"mainService":{"uri":"odata/v4/invoice-tracking-srv/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.122.0","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"invoicetrackingapp.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"InvoicesList","target":"InvoicesList"},{"pattern":"Invoices({key}):?query:","name":"InvoicesObjectPage","target":"InvoicesObjectPage"},{"pattern":"Invoices({key})/lineItems({key2}):?query:","name":"LineItemsObjectPage","target":"LineItemsObjectPage"}],"targets":{"InvoicesList":{"type":"Component","id":"InvoicesList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Invoices","variantManagement":"Page","navigation":{"Invoices":{"detail":{"route":"InvoicesObjectPage"}}}}}},"InvoicesObjectPage":{"type":"Component","id":"InvoicesObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Invoices","navigation":{"lineItems":{"detail":{"route":"LineItemsObjectPage"}}}}}},"LineItemsObjectPage":{"type":"Component","id":"LineItemsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Invoices/lineItems","navigation":{}}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.Payment_Tracker_App"}}'
});
//# sourceMappingURL=Component-preload.js.map
