$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data',
        image: '#image',
    }


///BARCODE FUNCTIONALITY

    function enableScan() {
        if (EB && EB.Barcode && EB.Barcode.enable) {
            console.log('Succesfully loaded EB library');
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


    function enableImageCapture() {
        // EB.Camera.outputFormat = "OUTPUT_FORMAT_IMAGE_PATH";
        EB.Camera.takePicture({});
    }

    return {
        enableImageCapture: enableImageCapture,
        initialize: function() {
            enableScan();
        }
    }
})();


$(document).ready(function(){
    $secondScreen.initialize();
})
