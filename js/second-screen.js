$secondScreen = (function(){

    var elementSelector = {
        scanData: '#scan-data',
        images: '#images',
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
                    $(elementSelector.images).show();
                    const imageLocation = 'http://localhost:' + EB.System.localServerPort + imageInfo.imageUri;
                    const newImage = '<img class="ui medium image" src="' + imageLocation + '">';
                    $(elementSelector.images).append(newImage);
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
