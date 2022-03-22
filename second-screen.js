$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data'
    }

    function enableScan() {
        EB.Barcode.enable({
            allDecoders: true,
            autoTab: true,
            lowBatteryScan: true,
        });
    }


    function barcodeScanned(barcodeNumber) {
        $(elementSelector.scanData).text("barcode: " + barcodeNumber.data);
    }

    return {
        initialize: function() {
            enableScan();
        }
    }
})();


$(document).ready(function(){
    $secondScreen.initialize();
})
