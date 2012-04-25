

function inFence(lat1, lng1, lat2, lng2, range) {
    /* How this works:
     This function gets passed four or five values, lat1 and lng1 are the values of the client
     location that are grabbed from the client gps.  lat2 and lng2 is the center of
     the store location.  Range is optional but a default value does get set.
     Because we have two points we can now generate a third point
     which gives us a triangle and a circle is made up of triangles so the triangle allows
     us to determine the distance between any given point within the circle.
     */
    if(typeof range == "undefined" ) {
        rangeM = 200000;        //804 meters = 1/2 a mile.
    }  else {
        rangeM = range;
    }
    
    var epRadius = 6371; //This is the radius of planet Earth equatorial plane in kilometers.
    /* Step 1: Calculate the difference between store latitude and the client latitude.
     Step 2: Calculate the difference between store longitude and the client longitude. */
    var diffLat = (lat2-lat1) * (Math.PI/180);
    var diffLng = (lng2-lng1) * (Math.PI/180);
    /* Convert latitude to radians. */
    var lat1Radian = lat1 * (Math.PI/180);
    var lat2Radian = lat2 * (Math.PI/180);
    /* Find the location within the circle of the client. */
    var latlngArea = Math.sin(diffLat/2) * Math.sin(diffLat/2) +
    Math.sin(diffLng/2) * Math.sin(diffLng/2) * Math.cos(lat1Radian) * Math.cos(lat2Radian); 
    var curvedRadian = 2 * Math.atan2(Math.sqrt(latlngArea), Math.sqrt(1-latlngArea)); 
    var distance = epRadius * curvedRadian;
    
    //Round to two places after the decimal.
    var roundedDistanceMiles = Math.round((distance * 0.621371192)*100)/100;
    var roundedDistanceMeters = Math.round((distance * 1000)*100)/100;
    //alert(roundedDistanceMeters);
    if(roundedDistanceMeters <= rangeM) {
        return true;
    }  else  {
        return false;
    }
}


function checkFence() {
    var postButton = Ext.getCmp("post-button");
    if((window.lat !== undefined) && (window.lng !== undefined) && inFence(lat,lng, app_lat, app_long,app_range)) {
        postButton.removeCls("red-button");
        postButton.setHandler(function() {
                              //me();
                              transferFile();
                              Ext.getCmp("text").reset();
                              document.getElementById('uploadPic').src = "lib/thewall/icons/camera.png";
                              navigator.notification.vibrate(2500);
                              //facebookWallPost(message);
                              wall.views.notificationOverlay.update('Message Posted');
                              wall.views.notificationOverlay.show();
                              hideNoti.delay(1500);
                              load.delay(1700);
                              wall.stores.WallPostsStore.load();                                                                                                
                              imageData = null;
                              
                              
                              });
    }else{
        postButton.addCls("red-button");
        postButton.setHandler(function() {
                              //facebookWallPost();
                              wall.views.notificationOverlay.update('You have to be at Red Rocks to post!');
                              wall.views.notificationOverlay.show();
                              hideNoti.delay(1500);
                              wall.stores.WallPostsStore.load();                                                                                                
                              imageData = null;
                              });
    }
}

//setInterval(checkFence, 2000);
