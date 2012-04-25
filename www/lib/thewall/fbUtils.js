function fbPic(id){
    var url=null
    if(id>0){
        url="http://graph.facebook.com/"+id+"/picture";
    } else {
        url="lib/thewall/icons/nopic-small.jpg";/*https://dev.twitter.com/docs/api/1/get/users/profile_image/:screen_name8*/
    }
        return url
}


/*function getSession() {
 alert("session: " + JSON.stringify(FB.getSession()));
 }
 */
function getLoginStatus() {
    FB.getLoginStatus(function(response) {
                      if (response.status == 'connected') {
                      alert('logged in');
                      } else {
                      alert('not logged in');
                      }
                      });
}
var friendIDs = [];
var fdata;
function me() {
    FB.api('/me',  function(response) {
           if (response.error) {
           //alert(JSON.stringify(response.error));
           } else {
           email=response.email;
           fbid=response.id; 
           }
           
          
           });
}

function logout() {
    FB.logout(function(response) {
              alert('logged out');
              });
}

function login() {
    FB.login(
             function(response) {},
             { scope: "email" }
             );
}


function facebookWallPost() {
    console.log('Debug 1');
    var params = {
    method: 'feed',
    name: 'Facebook Dialogs',
    link: 'https://developers.facebook.com/docs/reference/dialogs/',
    picture: 'http://fbrell.com/f8.jpg',
    caption: 'Reference Documentation',
    description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
    };
    console.log(params);
    FB.ui(params, function(obj) { console.log(obj);});
}

function publishStoryFriend() {
    randNum = Math.floor ( Math.random() * friendIDs.length ); 
    
    var friendID = friendIDs[randNum];
    if (friendID == undefined){
        alert('please click the me button to get a list of friends first');
    }else{
        console.log("friend id: " + friendID );
        console.log('Opening a dialog for friendID: ', friendID);
        var params = {
        method: 'feed',
        to: friendID.toString(),
        name: 'Facebook Dialogs',
        link: 'https://developers.facebook.com/docs/reference/dialogs/',
        picture: 'http://fbrell.com/f8.jpg',
        caption: 'Reference Documentation',
        description: 'Dialogs provide a simple, consistent interface for applications to interface with users.'
        };
        FB.ui(params, function(obj) { console.log(obj);});
    }
}

