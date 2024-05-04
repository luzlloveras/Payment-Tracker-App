sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'invoicetrackingapp/test/integration/FirstJourney',
		'invoicetrackingapp/test/integration/pages/InvoicesList',
		'invoicetrackingapp/test/integration/pages/InvoicesObjectPage'
    ],
    function(JourneyRunner, opaJourney, InvoicesList, InvoicesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('invoicetrackingapp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheInvoicesList: InvoicesList,
					onTheInvoicesObjectPage: InvoicesObjectPage
                }
            },
            opaJourney.run
        );
    }
);