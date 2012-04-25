wall.controllers.main = new Ext.Controller({

   


    showHomeMenu: function(options){
        //wall.views.homeMenu = new wall.views.HomeMenu();
        wall.views.viewport.setActiveItem(wall.views.homeMenu, options.animation);
        //Ext.repaint();
        //Ext.Element.garbageCollect();
    },
                                           
   

                                           
    showAboutPanel: function(options){
        wall.views.aboutPanel = new wall.views.AboutPanel();
        wall.views.viewport.setActiveItem(wall.views.aboutPanel, options.animation);
    },

    showRssList: function(options){
        wall.views.rssList = new wall.views.RssList();
        wall.views.viewport.setActiveItem(wall.views.rssList, options.animation);
    },
                                           
    showRssFeed: function(options){
    
        wall.stores.rssFeedStore.setProxy({
            type: 'ajax',
            url: options.rssUrl,
            reader: {
                type: 'xml',
                root: 'channel',
                record: 'item'
            }
        });
        wall.stores.rssFeedStore.load();

// The rssFeed and rssDetail panels will persist until the user navigates back to the rssList panel. This allows the rssFeedStore to load only once.
        wall.views.rssFeed = new wall.views.RssFeed();
        wall.views.rssDetail = new wall.views.RssDetail();
        wall.views.rssFeed.getDockedItems()[0].setTitle(options.rssName);
        wall.views.rssDetail.getDockedItems()[0].setTitle(options.rssName);
        wall.views.viewport.add(wall.views.rssDetail);
        wall.views.viewport.setActiveItem(wall.views.rssFeed, options.animation);
    },
                                           
    showRssDetail: function(options){

        //wall.views.rssDetail = new wall.views.RssDetail();
        //wall.views.rssDetail.getDockedItems()[0].setTitle(options.rssDetailTitle);
        wall.views.rssDetail.update('<div id="tweet_container"><tpl for="."><div class="tweet_data"><div class="tweet_content">' + options.rssDetailDescription +/*+ options.rssDetailTitle +*/'</div><div class="clear"></div></div></tpl></div>');
        wall.views.viewport.setActiveItem(wall.views.rssDetail, options.animation);
    },
    
    backToRssFeed: function(options){
        wall.views.viewport.setActiveItem(wall.views.rssFeed, options.animation);
    },

    backToRssList: function(options){
// Remove the rssFeed and rssDetail panels from the viewport    
        wall.views.viewport.remove(wall.views.rssFeed);
        wall.views.viewport.remove(wall.views.rssDetail);
        this.showRssList({
                         animation: {type: 'slide', direction: 'right'}
                         });
    },

    backToHomeMenuFromRssFeed: function(options){
// Clear records from rssFeedStore
        wall.stores.rssFeedStore.setProxy({
            type: 'memory',
            url: null,
            data: [
                { name: 'loading...', type: '' },
            ],
            reader: {
                type: 'json',
                //root: 'channel',
                //record: 'item'
            }
        });
        wall.stores.rssFeedStore.load();
    
// Remove the rssFeed and rssDetail panels from the viewport    
        wall.views.viewport.remove(wall.views.rssFeed);
        wall.views.viewport.remove(wall.views.rssDetail);
        this.showHomeMenu({
            animation: {type: 'slide', direction: 'right'}
        });
    },
                                           

                                           showRssTwitterList: function(options){
                                           wall.views.rssTwitterList = new wall.views.RssTwitterList();
                                           wall.views.viewport.setActiveItem(wall.views.rssTwitterList, options.animation);
                                           },
                                           
                                           showRssTwitterFeed: function(options){
                                           
                                           wall.stores.rssTwitterFeedStore.setProxy({
                                                                             type: 'ajax',
                                                                             url: options.rssTwitterUrl,
                                                                             reader: {
                                                                             type: 'json',
                                                                             root: 'results',
                                                                             
                                                                             }
                                                                             });
                                           
                                           
                                           wall.stores.rssTwitterFeedStore.load();
                                           
                                           // The rssFeed and rssDetail panels will persist until the user navigates back to the rssList panel. This allows the rssFeedStore to load only once.
                                           wall.views.rssTwitterFeed = new wall.views.RssTwitterFeed();
                                           wall.views.rssTwitterDetail = new wall.views.RssTwitterDetail();
                                           wall.views.rssTwitterFeed.getDockedItems()[0].setTitle(options.rssName);
                                           wall.views.rssTwitterDetail.getDockedItems()[0].setTitle(options.rssName);
                                           wall.views.viewport.add(wall.views.rssTwitterDetail);
                                           wall.views.viewport.setActiveItem(wall.views.rssTwitterFeed, options.animation);
                                           },
                                           
                                           
                                           backToRssTwitterFeed: function(options){
                                           wall.views.viewport.setActiveItem(wall.views.rssTwitterFeed, options.animation);
                                           },
                                           
                                           backToRssTwitterList: function(options){
                                           // Remove the rssFeed and rssDetail panels from the viewport    
                                           wall.views.viewport.remove(wall.views.rssTwitterFeed);
                                           wall.views.viewport.remove(wall.views.rssTwitterDetail);
                                           this.showRssTwitterList({
                                                            animation: {type: 'slide', direction: 'right'}
                                                            });
                                           },
                                           showRssTwitterDetail: function(options){
                                           
                                           //wall.views.rssDetail = new wall.views.RssDetail();
                                           //wall.views.rssDetail.getDockedItems()[0].setTitle(options.rssDetailTitle);
                                           wall.views.rssTwitterDetail.update('<div id="tweet_container"><tpl for="."><div class="tweet_data"><div class="tweet_avatar"><img width="30" height="30" src="'+options.profile_image_url+'"/></div><div class="tweet_content"><div class="user">'+options.from_user+'</div>'+options.text+'</div><div class="clear"></div></div></tpl></div>');
                                           wall.views.viewport.setActiveItem(wall.views.rssTwitterDetail, options.animation);
                                           },
                                           
                                           backToHomeMenuFromRssTwitterFeed: function(options){
                                           // Clear records from rssFeedStore
                                           wall.stores.rssTwitterFeedStore.setProxy({
                                                                             type: 'memory',
                                                                             url: null,
                                                                             data: [
                                                                                    { name: 'loading...', type: '' },
                                                                                    ],
                                                                             reader: {
                                                                             type: 'json',
                                                                             //root: 'channel',
                                                                             //record: 'item'
                                                                             }
                                                                             });
                                           wall.stores.rssTwitterFeedStore.load();
                                           
                                           // Remove the rssFeed and rssDetail panels from the viewport    
                                           wall.views.viewport.remove(wall.views.rssTwitterFeed);
                                           wall.views.viewport.remove(wall.views.rssTwitterDetail);
                                           this.showHomeMenu({
                                                             animation: {type: 'slide', direction: 'right'}
                                                             });
                                           },

                                                                                      
                                           
});