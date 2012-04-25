wall.views.RssTwitterFeed = Ext.extend(Ext.Panel, {
                                id: 'rssTwitterFeed',
                                layout: 'fit',
                                scroll: 'vertical',
                                
                                initComponent: function(){
                                Ext.apply(this, {
                                          dockedItems: [
                                                        {xtype: 'toolbar',
                                                        //id: 'RssFeedToolbar',
                                                        title: 'RSS Feed',
                                                        items: [{
                                                                xtype: 'button',
                                                                ui: 'back',
                                                                text: 'Back',
                                                                handler: function(){
                                                                Ext.dispatch({
                                                                             controller: wall.controllers.main,
                                                                             //action: 'backToRssList',
                                                                             action: 'backToHomeMenuFromRssTwitterFeed',
                                                                             animation: {type: 'slide', direction: 'right'}
                                                                             });
                                                                }
                                                                }]
                                                        }
                                                        ],
                                          items: [
                                                  {xtype: 'list',
                                                  //id: 'RssFeed',
                                                  store: wall.stores.rssTwitterFeedStore,
                                                  itemTpl: twitterTpl,
                                                  disableSelection: true,
                                                  layout: 'auto',
                                                  itemCls:'noBorder',
                                                  //style: 'background: #FF3300;',
                                                  listeners: {
                                                  itemtap: function (dataView, index, item, e) {
                                                  Ext.dispatch({
                                                               controller: wall.controllers.main,
                                                               action: 'showRssTwitterDetail',
                                                               animation: {type: 'slide', direction: 'left'},
                                                               profile_image_url:dataView.store.getAt(index).data.profile_image_url,
                                                               from_user:dataView.store.getAt(index).data.from_user,
                                                               text:dataView.store.getAt(index).data.text,
                                                                                                                              });
                                                  }
                                                  },
                                                  plugins: [{ptype: 'pullrefresh'}]
                                                  }
                                                  
                                                  ]
                                          
                                          });
                                
                                wall.views.RssTwitterFeed.superclass.initComponent.apply(this);
                                }
                                });
