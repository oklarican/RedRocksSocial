wall.views.PhotoPanel = Ext.extend(Ext.Panel, {
                                    id: 'photoPanel',
                                    layout: 'fit',
                                    scroll: 'vertical',
                                    initComponent: function(){
                                    Ext.apply(this, {
                                              dockedItems: [
                                                            {xtype: 'toolbar',
                                                            
                                                            
                                                            items: [{
                                                                    xtype: 'button',
                                                                    ui: 'back',
                                                                    text: 'Back',
                                                                    handler: function(){
                                                                    wall.stores.WallPostsStore.loadPage(0);
                                                                    
                                                                    Ext.dispatch({
                                                                                 controller: wall.controllers.WallController,
                                                                                 action: 'showDetailPanel',
                                                                                 animation: {type: 'slide', direction: 'right'}
                                                                                 
                                                                                 });
                                                                    }
                                                                    }]
                                                            },
                                                            ],
                                              items: [
                                                      {
                                                      xtype:'panel',
                                                      layout:'fit',
                                                      tpl: '<div><img src="{urlL}" width="200"><div class="message2">{message}</div></div>',
                                                      
                                                      
                                                      }
                                                      
                                                      
                                                      ]
                                              
                                              });
                                    
                                    wall.views.PhotoPanel.superclass.initComponent.apply(this);
                                    }
                                    });

