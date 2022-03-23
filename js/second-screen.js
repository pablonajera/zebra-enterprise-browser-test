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


var camArray = EB.Camera.enumerate();

//below is the camera call back fired after takePicture is called
var camera_callbackFunc = function(cbData){

  //uri will have relative path info only
  //user has to form the absolute local server path as shown below
  uri = 'http://localhost:'+EB.System.localServerPort + cbData.imageUri;
  //set the image uri to the image element
  document.getElementById('image').src = uri;

};

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

        camArray[0].takePicture({'outputFormat': 'image'}, camera_callbackFunc);
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
