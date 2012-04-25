wall.views.SharingSettingsForm = Ext.extend(Ext.form.FormPanel, {
    id: 'sharingSettingsForm',
    scroll: 'vertical',
    initComponent: function(){
        Ext.apply(this,{
                  dockedItems: [
                                {xtype: 'toolbar',
                                id: 'sharingSettingsFormToolbar',
                                title: 'Sharing Settings',
                                style: 'font-size: 90%',
                                items: [{
                                        xtype: 'button',
                                        ui: 'back',
                                        text: 'Back',
                                        handler: function(){
                                        Ext.dispatch({
                                                     controller: wall.controllers.main,
                                                     action: 'showSettingsMenu',
                                                     animation: {type: 'slide', direction: 'right'}
                                                     });
                                        }
                                        }]
                                },
                                {
                                xtype:'toolbar',
                                dock: 'bottom',
                                items: [
                                        {xtype: 'spacer'},
                                        {        
                                        xtype: 'button',
                                        ui: 'confirm',
                                        text: 'Save Changes',
                                        handler: function(){
                                        Ext.dispatch({
                                                     controller: wall.controllers.main,
                                                     action: 'updateSharingSettings',
                                                     animation: {type: 'slide', direction: 'right'}
                                                     });
                                        }
                                        },
                                        ]
                                },
                                ],

        });

        Ext.apply(this,{
                  items: [
                          {xtype: 'fieldset',
                          title: 'Facebook',
                          style: 'font-size: 90%',
                          margin: '0 0 0 0',
                          border: '1px solid black',
                          padding: '0',
                          items: [
                                  /*{
                                   xtype: 'button',
                                   ui: 'action',
                                   text: 'Connect to Facebook',
                                   margin: '10 10 10 10',
                                   handler: function(){
                                   if (this.getText() == 'Connect to Facebook') {
                                   alert('connecting to facebook');
                                   this.setText('Disconnect from Facebook');
                                   } else {
                                   alert('disconnecting from facebook');
                                   this.setText('Connect to Facebook');
                                   }
                                   }
                                   },*/
                                  {xtype: 'checkboxfield',
                                  name: 'connectToFacebook',
                                  label: 'Connect to Facebook',
                                  labelWidth: '80%',
                                  listeners: {
                                      check: this.onConnectToFacebook,
                                      uncheck: this.onDisconnectFromFacebook,
                                  }
                                  },
                                  {xtype: 'checkboxfield',
                                  name: 'sharePostsToFacebook',
                                  label: 'Share my Posts to Facebook',
                                  labelWidth: '80%'
                                  },
                                  ]
                          },
                          {xtype: 'fieldset',
                          title: 'Twitter',
                          style: 'font-size: 90%',
                          margin: '0 0 0 0',
                          border: '1px solid black',
                          padding: '0',
                          items: [
                                  /*{
                                   xtype: 'button',
                                   ui: 'action',
                                   text: 'Connect to Twitter',
                                   margin: '10 10 10 10',
                                   handler: function(){
                                   if (this.getText() == 'Connect to Twitter') {
                                   alert('connecting to twitter');
                                   this.setText('Disconnect from Twitter');
                                   } else {
                                   alert('disconnecting from twitter');
                                   this.setText('Connect to Twitter');
                                   }
                                   }
                                   },*/
                                  {xtype: 'checkboxfield',
                                  name: 'connectToTwitter',
                                  label: 'Connect to Twitter',
                                  labelWidth: '80%'
                                  },
                                  {xtype: 'checkboxfield',
                                  name: 'sharePostsToTwitter',
                                  label: 'Share my Posts to Twitter',
                                  labelWidth: '80%'
                                  },
                                  ]
                          },
                          ]
                  
        });
                                            
        wall.views.SharingSettingsForm.superclass.initComponent.apply(this);
    },
    
    onConnectToFacebook: function() {
        alert('connect to facebook');
        login();
        me();
    },
    
    onDisconnectFromFacebook: function() {
        alert('disconnect from Facebook');
    }
});
