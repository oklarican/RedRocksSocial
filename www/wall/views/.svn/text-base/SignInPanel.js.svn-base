wall.views.SignInPanel = Ext.extend(Ext.Panel,{
//var signInPanel = {
//xtype: 'panel',

    id: 'signInPanel',
    fullscreen: true,
    layout: 'vbox',
    scroll: 'vertical',
    //showAnimation: {type: 'slide', direction: 'left'},
                                    //listeners: {
                                    //deactivate: function(thiscomponent) {
                                    //alert('deactivate SignInPanel');
                                    //thiscomponent.destroy();
                                    //delete wall.views.signInPanel;
                                    //    alert('after deactivate');
                                    //},
                                    //},
initComponent: function() {

    Ext.apply(this,{
    
              items: [
                      {xtype: 'spacer'},
                      {html: 'Already have an account?'},
                      {xtype: 'button',
                      ui: 'confirm',
                      text: 'Sign In',
                      margin: '10',
                      width: '240',
                      handler: function() {
                      Ext.dispatch({
                                   controller: wall.controllers.main,
                                   action: 'showSignInForm',
                                   animation: {type: 'slide', direction: 'left'}
                                   });
                      }
                      },
                      {html: 'Or'},
                      {xtype: 'button',
                      ui: 'normal',
                      text: 'Start Using App',
                      margin: '10',
                      width: '240',
                      handler: function() {
                      Ext.dispatch({
                                   controller: wall.controllers.main,
                                   action: 'signInAsGuest',
                                   animation: {type: 'slide', direction: 'left'}
                                   });
                      }
                      },
                      {xtype: 'spacer'},
                      {html: 'Need an account?'},
                      {xtype: 'button',
                      ui: 'confirm',
                      text: 'Create Account',
                      margin: '10',
                      width: '240',
                      handler: function() {
                      Ext.dispatch({
                                   controller: wall.controllers.main,
                                   action: 'createAccount',
                                   animation: {type: 'slide', direction: 'left'}
                                   });
                      }
                      },
                      {html: 'Or'},                               
                      {xtype: 'button',
                      ui: 'action',
                      text: 'Connect with Facebook',
                      margin: '10',
                      width: '240',
                      handler: function() { login(); me();mpq.track("Button clicked");},

                      },
                      {xtype: 'spacer'}                              
                      ],
              
              dockedItems: [{
                            xtype: 'toolbar',
                            id: 'signInPanelToolbar',
                            title: 'Sign In'
                            }] 
    
    
    
    });

    wall.views.SignInPanel.superclass.initComponent.apply(this);
}
});
//};
