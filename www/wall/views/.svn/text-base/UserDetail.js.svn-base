wall.views.UserDetail = Ext.extend(Ext.form.FormPanel, {
    id: 'userDetail',
    scroll: 'vertical',

    initComponent: function(){
    Ext.apply(this,{
           dockedItems: [
                         {
                         xtype: 'toolbar',
                         id: 'userDetailToolbar',
                         title: 'User Profile',
                         items: [
                                 {
                                 xtype: 'button',
                                 ui: 'back',
                                 text: 'Back',
                                 handler: this.onBackAction,
                                 scope: this 
                                 }
                                 ],
                         },
                         {
                         xtype:'toolbar',
                         dock: 'bottom',
                         items: [
                                 {xtype: 'spacer'},
                                 {        
                                 xtype: 'button',
                                 id: 'userDetailDeleteButton',
                                 ui: 'decline',
                                 text: 'Delete',
                                 handler: this.onDeleteAction,
                                 scope: this
                                 },
                                 ]
                         },
                         ],

    });

    Ext.apply(this,{
           defaults: {
           xtype: 'textfield',
           labelAlign: 'left',
           style: 'font-size: 80%',
           required: false,
           },
                   tpl: [
                    'userId: {userId}<br />', 
                    'deviceId: {deviceId}<br />',
                    'userAcctStatus: {userAcctStatus}<br />',
                    'userFirstName: {userFirstName}<br />',
                    'userLastName: {userLastName}<br />',
                    'userEmailAddress: {userEmailAddress}<br />',
                    'userPassword: {userPassword}<br />',
                    'userPhoneNumber: {userPhoneNumber}<br />',
                    'userLocation: {userLocation}<br />',
                    'userGender: {userGender}<br />',
                    'userAccountType: {userAccountType}<br />',
                    'userSignedIn: {userSignedIn}<br />',
                    'userDateCreated: {userDateCreated}<br />',
                    'userLastSignIn: {userLastSignIn}<br />',
                    'userPhotoUrl: {userPhotoUrl}<br />',
                    'photosPhotoId: {photosPhotoId}<br />',
                    'facebookConnectFlag: {facebookConnectFlag}<br />',
                    'facebookAccessToken: {facebookAccessToken}<br />',
                    'facebookAccessTokenSecret: {facebookAccessTokenSecret}<br />',
                    'sharePostsToFacebook: {sharePostsToFacebook}<br />',
                    'twitterConnectFlag: {twitterConnectFlag}<br />',
                    'twitterAccessToken: {twitterAccessToken}<br />',
                    'twitterAccessTokenSecret: {twitterAccessTokenSecret}<br />',
                    'sharePostsToTwitter: {sharePostsToTwitter}<br />',
                    'confirmationCode: {confirmationCode}<br />',
                          ],
/*         items: [
                   {
                   xtype: 'button',
                   id: 'userImageButton',
                   html: '<img src="" id="userProfilePic"/>',
                   height: 100,
                   width: 100,
                   ui: 'plain',
                   cls: 'amimagebutton',
                   pressedCls: 'amimagebtnp',
                   handler: function(){
                   wall.views.pictureActionSheet.show();
                   //this.update('<img src="lib/thewall/userimage.jpg" />');
                   },
                   },
                   {
                   name: 'userFirstName',
                   label: 'First Name',
                   required: true
                   },
                   {
                   name: 'userLastName',
                   label: 'Last Name',
                   },
                   {
                   xtype: 'emailfield',
                   name: 'userEmailAddress',
                   label: 'Email',
                   required: true
                   },
                   {
                   xtype: 'passwordfield',
                   name: 'userPassword',
                   label: 'Password',
                   required: true
                   },
                   {
                   xtype: 'numberfield',
                   name: 'userPhoneNumber',
                   label: 'Phone',
                   },
                   {
                   name: 'userLocation',
                   label: 'Location',
                   },
                   {
                   xtype: 'selectfield',
                   name: 'userGender',
                   label: 'Gender',
                   options: [{
                             text: 'Not Selected',
                             value: 'U'
                     }, {
                             text: 'Female',
                             value: 'F',
                     }, {
                             text: 'Male',
                             value: 'M'
                   }]
                   }, 
                   ], */
/*            listeners: {
                beforeactivate: function() {
                    //var deleteButton = this.down('#userFormDeleteButton'),
                    var saveButton = this.down('#userFormSaveButton'),
                    //titlebar = this.down('#userFormTitlebar'),
                    model = this.getRecord();
                    //alert('beforeactivate userId:' + model.get('userId'));

                    if (model.phantom) {
                        //alert('phantom true');
                        //titlebar.setTitle('Create Account');
                        saveButton.setText('Create Account');
                        //deleteButton.hide();
                    } else {
                        //alert('phantom false');
                        //titlebar.setTitle('Update Account');
                        saveButton.setText('Update Account');
                        //deleteButton.show();
                    }
                },
                //deactivate: function() { this.resetForm() }
            } */          
           });

    wall.views.UserForm.superclass.initComponent.apply(this);
    },
    
    onBackAction: function(){
        var model = this.getRecord();
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'showUserList',
            //action: (model.phantom ? 'showSignInPanel' : 'showAccountSettingsMenu'),
            animation: {type: 'slide', direction: 'right'}
        });
    },

    onDeleteAction: function(){
        var model = this.getRecord();
        //alert('onsaveaction userId:' + model.get('userId'));
                                 /*this.submit({
                                             params: {
                                             myparms: 'myparms'
                                             },
                                             success: this.onSubmitSuccess,
                                             failure: this.onSubmitFailure
                                 });*/
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'deleteAccount',
            animation: {type: 'slide', direction: 'right'},
            //data: this.getValues(),
            record: model,
            //form: this
        });
    },

    onSubmitSuccess: function(form, result){
                                 alert('success!');
                                 alert(result);
        var hideNotification = new Ext.util.DelayedTask(function() {
                                                     wall.views.notificationOverlay.hide(
                                                                                         'fade'
                                                                                         );
                                                     });
        //wall.views.notificationOverlay.setSize({width: 10, height: 10});
        wall.views.notificationOverlay.update(result);
        wall.views.notificationOverlay.show();
        hideNotification.delay(5000);

    },

    onSubmitFailure: function(form, result){
                                 alert('failure!');
                                 alert(result);
                                 var hideNotification = new Ext.util.DelayedTask(function() {
                                                                                 wall.views.notificationOverlay.hide(
                                                                                                                     'fade'
                                                                                                                     );
                                                                                 });
                                 //wall.views.notificationOverlay.setSize({width: 10, height: 10});
                                 wall.views.notificationOverlay.update(result);
                                 wall.views.notificationOverlay.show();
                                 hideNotification.delay(5000);

    },
                                 
    
});