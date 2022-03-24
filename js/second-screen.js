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
        console.log('Opening camera!');
        EB.Camera.takePicture({}, function(imageInfo) {
            console.log('IMAGE TAKEN');
            if (imageInfo) {
                console.log(imageInfo);
                if (imageInfo.status == 'ok') {
                    console.log(imageInfo.imageUri);
                    $(elementSelector.image).attr("src", 'http://localhost:' + EB.System.localServerPort + imageInfo.imageUri);
                    // $(elementSelector.image).attr("src", imageInfo.imageUri);
                }
            }
        });
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
