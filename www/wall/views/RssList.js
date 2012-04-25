wall.views.RssList = Ext.extend(Ext.Panel, {
    id: 'rssList',
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
                itemTpl: rssTpl,
                listeners: {
                    itemtap: function (dataView, index, item, e) {
                        Ext.dispatch({
                            controller: wall.controllers.main,
                            action: 'showRssFeed',
                            animation: {type: 'slide', direction: 'left'},
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
