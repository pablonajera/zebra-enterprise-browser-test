$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data'
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
        console.log(imager);
        if (imager) {
            console.log('imager exists!')
        }
        else {
            console.log('imager does not exist');
        }
        imager.top = 155;
        imager.left = 25;
        imager.width = 350;
        imager.height = 240;
        imager.enable();
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
