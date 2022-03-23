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
        console.log('Camera opening...');
        EB.Camera.takePicture({}, function(imageInfo) {
            console.log('Camera closing...');
            if (imageInfo) {
                console.log('imageinfo is valid -> ');
                console.log(imageInfo);
                $(elementSelector.image).attr('src', imageInfo.imageUri);
            }
            else {
                console.log('image info is not valid');
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
