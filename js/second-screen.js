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


function picture_taken_callback(params) {
  // Did we receive an image?
  if (params["status"]=="ok") {
    // show it in our <img id="captured_image"< tag
    $("#image").attr("src", EB.Application.expandDatabaseBlobFilePath(params["imageUri"]));
  }

}

    function enableImageCapture() {
        // console.log('Camera opening...');
        // EB.Camera.takePicture({}, function(imageInfo) {
        //     console.log('Camera closing...');
        //     if (imageInfo) {
        //         console.log('imageinfo is valid -> ');
        //         console.log(imageInfo);
        //         if (imageInfo["status"]=="ok") {
        //             // Assuming we have an  tag, we will be able to see the image that was just captured
        //             $(elementSelector.image).attr("src", imageInfo["imageUri"]);
        //         }
        //     }
        //     else {
        //         console.log('image info is not valid');
        //     }
        // });

        EB.Camera.compressionFormat = "png";

        // ...a particular image size...
        EB.Camera.desiredWidth = 1024;
        EB.Camera.desiredHeight = 768;

        // ...and force the flash to be used
        EB.Camera.flashMode = "on";

        // Now, take the picture
        EB.Camera.takePicture({}, picture_taken_callback);
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
