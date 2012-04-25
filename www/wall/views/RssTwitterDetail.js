wall.views.RssTwitterDetail = Ext.extend(Ext.Panel, {
                                  id: 'rssTwitterDetail',
                                  layout: 'fit',
                                  scroll: 'vertical',
                                  styleHtmlContent: true,
                                  initComponent: function(){
                                  Ext.apply(this, {
                                            dockedItems: [
                                                          {xtype: 'toolbar',
                                                          //id: 'RssDetailToolbar',
                                                          title: 'RSS Detail',
                                                          items: [{
                                                                  xtype: 'button',
                                                                  ui: 'back',
                                                                  text: 'Back',
                                                                  handler: function(){
                                                                  Ext.dispatch({
                                                                               controller: wall.controllers.main,
                                                                               action: 'backToRssTwitterFeed',
                                                                               animation: {type: 'slide', direction: 'right'}
                                                                               });
                                                                  }
                                                                  }]
                                                          }
                                                          ],
                                            });
                                  
                                  wall.views.RssTwitterDetail.superclass.initComponent.apply(this);
                                  }
                                  });


