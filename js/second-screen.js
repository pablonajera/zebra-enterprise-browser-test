$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data'
    }


///BARCODE FUNCTIONALITY

    function expose(info) {
        $('#log').append('</br>' + info);
    }

    function enableScan() {
        if (EB && EB.Barcode && EB.Barcode.enable) {
            expose('Succesfully loaded EB library');
            EB.Barcode.enable({
                allDecoders: true,
                autoTab: true,
                lowBatteryScan: true,
            });
        }
    }
    function barcodeScanned(barcodeNumber) {
        $(elementSelector.scanData).text("barcode: " + barcodeNumber.data);
    }

///CAMERA FUNCTIONALITY
    function enableImageCapture(){
    imager.top = 155;
    imager.left = 25;
    imager.width = 350;
    imager.height = 240;
    imager.enable();
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
