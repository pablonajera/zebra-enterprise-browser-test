$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data'
    }


///BARCODE FUNCTIONALITY

    function checkForEnterpriseBrowserLibrary() {
        axios.get('./ebapi-modules.js').then((response) => {
            expose(response);
        }).catch((error) => {
            expose(error);
        })
    }

    function expose(info) {
        $('#log').append(info);
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
    //function initializeCameraSettings(){
    //    imager.imageCaptureEvent =
//    }

    return {
        initialize: function() {
            enableScan();
            checkForEnterpriseBrowserLibrary();
        }
    }
})();


$(document).ready(function(){
    $secondScreen.initialize();
})
