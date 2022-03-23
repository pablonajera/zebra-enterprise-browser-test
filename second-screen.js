$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data'
    }


///BARCODE FUNCTIONALITY

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

///CAMERA FUNCTIONALITY
    function initializeCameraSettings(){
        imager.imageCaptureEvent =
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
