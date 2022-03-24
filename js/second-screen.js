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


function picture_taken_callback(cbData) {
    // Did we receive an image?
    if ((cbData.imageUri != undefined) || (cbData.imageUri != null)){
        document.getElementById('image').style.height = "250px";
        document.getElementById('image').style.width = "250px";
        document.getElementById('image').src = 'http://localhost:' + EB.System.localServerPort + cbData.imageUri;
    }
    else{
        document.getElementById('image').style.height = "";
        document.getElementById('image').style.width = "";
        document.getElementById('image').src = "";
    }
}



function enableImageCapture(){

    const enumData = EB.Camera.enumerate();
    var param = {
        'outputFormat':'image',
    };
    enumData[0].takePicture(param, picture_taken_callback);




        // console.log('Camera opening...');
        // EB.Camera.outputFormat = "OUTPUT_FORMAT_IMAGE_PATH";
        // EB.Camera.takePicture({}, function(imageInfo) {
        //     console.log('Camera closing...');
        //     setTimeout(() => {
        //         if (imageInfo) {
        //             console.log('imageinfo is valid -> ');
        //             console.log(imageInfo);
        //             console.log(imageInfo.status);
        //             console.log(imageInfo.imageUri);
        //             if (imageInfo["status"]=="ok" || imageInfo.status == 'ok') {
        //                 // Assuming we have an  tag, we will be able to see the image that was just captured
        //                 $(elementSelector.image).attr("src", imageInfo["imageUri"]);
        //             }
        //         }
        //         else {
        //             console.log('image info is not valid');
        //         }
        //     }, 4000);
        // });
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
