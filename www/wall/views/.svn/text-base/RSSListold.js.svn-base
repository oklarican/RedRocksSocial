// Is the detailPanel, which shows the description field
var rssDescriptionPanel = new Ext.Panel({
                                        id: 'rssDescriptionPanel',
                                        layout: {
                                        align: 'stretch'
                                        },
                                        scroll: 'vertical',
                                        styleHtmlContent: true
                                        });

// The list object showing the RSS feed items
var feedList = new Ext.List({
                            fullscreen: true,
                            itemTpl: '{title}',
                            store: wall.stores.rssFeedStore,
                            listeners: {
                            itemtap: function(view, index, record, event) {
                            var rec = view.getStore().getAt(index);
                            rssDescriptionPanel.update('<h2>' + rec.get('title') + '</h2><p>' + rec.get('description') + '</p>');
                            rssBackButton.setHandler(function() {
                                                     Ext.getCmp('rssMainView').setActiveItem(1, { type: 'slide', direction: 'right'});
                                                     this.setHandler(go_home);
                                                     });
                            Ext.getCmp('rssMainView').setActiveItem(2);
                            }
                            }
                            });

wall.views.RssList = Ext.extend(Ext.Panel, {
    //id: 'RssListPanel',
    layout: 'fit',
    scroll: 'vertical',
    initComponent: function(){
        Ext.apply(this, {
            dockedItems: [
                {xtype: 'toolbar',
                //id: 'RssListToolbar',
                title: 'RSS List',
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
                    }
                }]
                }
            ],
            items: [
                {xtype: 'list',
                //id: 'RssList',
                store: wall.stores.rssListStore,
                itemTpl: '{feedName}',
                listeners: {
                    itemtap: function (dataView, index, item, e) {
                        Ext.dispatch({
                            controller: wall.controllers.main,
                            action: 'showRssFeed',
                            animation: {type: 'slide', direction: 'left'}
                            rssName: dataView.store.getAt(index).data.feedName,
                            rssUrl: dataView.store.getAt(index).data.feedUrl,
                        });
                    }
                }
                }
            ]

        });

    wall.views.RssList.superclass.initComponent.apply(this);
    }
});


