wall.views.AboutPanel = Ext.extend(Ext.Panel, {
                                   id: 'aboutPanel',
                                   layout: 'fit',
                                   scroll: 'vertical',
                                   //bodypadding: '10, 10, 10, 10',
                                   html: [aboutHTML],
                                  //cls: 'about_content',
                                   initComponent: function(){
                                   Ext.apply(this, {
                                             dockedItems: [{
                                                           xtype: 'toolbar',
                                                           id: 'aboutPanelToolbar',
                                                           title: 'About',
                                                           items: [{
                                                                   xtype: 'button',
                                                                   ui: 'back',
                                                                   text: 'Back',
                                                                   handler: function(){
                                                                   Ext.dispatch({
                                                                                controller: wall.controllers.main,
                                                                                action: 'showHomeMenu',
                                                                                animation: {type: 'slide', direction: 'right'}
                                                                                });
                                                                   },
                                                                   
                                                                   }]
                                                           },{
                                                           //id: 'homeMenuButtonContainer2',
                                                           xtype: 'toolbar',
                                                           dock:'bottom',
                                                           
                                                           items: [{xtype:'spacer'},
                                                                   {xtype: 'button',
                                                                    text: 'Email Us!',
                                                                    handler: function(){
                                                                   window.plugins.emailComposer.showEmailComposer('Hi Red Rocks Social Developers!','','apps@arbitragemobile.com','','');
                                                                   
                                                                   }}                                                                   
                                                                   ]
                                                          
                                                           }]
                                             
                                             });
                                   
                                   wall.views.AboutPanel.superclass.initComponent.apply(this);
                                   }
                                   });
