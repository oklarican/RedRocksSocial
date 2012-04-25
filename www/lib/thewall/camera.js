

function onPhotoURISuccess(imageURI) {
    
    document.getElementById('uploadPic').src =  imageURI;
    
    imageData=imageURI;
    
}



function capturePhoto() {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 40, targetWidth: 1280, /*targetHeight: 720,*/ destinationType: Camera.DestinationType.FILE_URI});
    
}

function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 40, sourceType: source, targetWidth: 1280 /*targetHeight: 720*/, destinationType: Camera.DestinationType.FILE_URI});
}

function onFail(message) {
    wall.views.notificationOverlay.update(message);
    wall.views.notificationOverlay.show();

}

var win = function(r) {
    popUp.hide('pop');
    Ext.Msg.alert('Response',r.response);
}

var fail = function(error) {
    popUp.hide('pop');
    Ext.Msg.alert("An error has occurred: Code " + error.code);
}

function transferFile() {
    /*
     * This function checks, if there is an image attached, uploads it. Or just 
     * uploads the fields using Ajax. The global vars (submitTo, imageData) are
     * defined in index.html
     */
    var message= Ext.getCmp("text").getValue();
    var currentDate = new Date();
    var time = currentDate.toLocaleString();
    load.delay(1700);
    //console.log(text.getValue()); 
    if(imageData != null) {
        var options = new FileUploadOptions();
        options.fileKey="photo";
        options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";
        
        var params = new Object();
        params.message=message;
        params.device_id= device.uuid;
        params.lat=lat;
        params.lng=lng;
        params.application_name= wall_name;
        params.email=email;
        params.userid=fbid;
        params.clientTime=time;
        
        options.params = params;
        options.chunkedMode = false;
        
        var ft = new FileTransfer();
        ft.upload(imageData, "http://arbdev.mine.nu/wall_post.php" , win, fail, options);
    }
    else {
        
        Ext.Ajax.request({
                         url: "http://arbdev.mine.nu/wall_post.php",
                         params: {
                         message:message,
                         device_id: device.uuid,
                         lat: lat,
                         lng: lng,
                         application_name: wall_name,
                         photo:imageData, 
                         email:email,
                         userid: fbid,
                         clientTime: time,
                         },
                         success: function(r, f) {
                         //popUp.hide('pop');
                         //Ext.Msg.alert('Response',r.responseText);
                         } 
                         });
        
        
        
    }
    imageData=null;
    /*
     * Code in the PHP file:
     <?php
     echo ':POST:';
     print_r($_POST);
     echo ':FILES:';
     print_r($_FILES);
     ?>
     * */
}

function transferPhoto(params) {
    /*
     * This function checks, if there is an image attached, uploads it. Or just 
     * uploads the fields using Ajax. The global vars (submitTo, imageData) are
     * defined in index.html
     */
    //alert('transferPhoto 0');
    //alert(params.userId);
    if(imageData != null) {
        var options = new FileUploadOptions();
        options.fileKey="photo";
        options.fileName=imageData.substr(imageData.lastIndexOf('/')+1);
        options.mimeType="image/jpeg";
        
        options.params = params;
        options.chunkedMode = false;
        
        var ft = new FileTransfer();
        ft.upload(imageData, "http://arbdev.mine.nu/102/pic_post.php" , win, fail, options);
    }
    imageData=null;
    /*
     * Code in the PHP file:
     <?php
     echo ':POST:';
     print_r($_POST);
     echo ':FILES:';
     print_r($_FILES);
     ?>
     * */
}
