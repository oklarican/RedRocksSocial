// Model for the List which links to each rss feed
Ext.regModel('wall.models.RssList',{
    fields: [
        {name: 'feedName', type: 'string'},
        {name: 'feedUrl', type: 'string'}
    ]
});

// Model for a single RSS feed, this is reused again and again
Ext.regModel('wall.models.RssFeed',{
    fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' }
    ]
});

// Contains the list of RSS feeds the component is initialized with
wall.stores.rssListStore = new Ext.data.Store({
    model: 'wall.models.RssList',
    data: [
        //{ feedName: 'NameToShowOnList', feedUrl: 'link_to_rss_feedx' },
        { feedName: 'Tumblr', feedUrl: 'http://coffeeapp.tumblr.com/rss' },
        { feedName: 'Drupal', feedUrl: 'http://www.melaniedoane.com/rss.xml' },
        { feedName: 'Facebook', feedUrl: 'http://www.facebook.com/feeds/page.php?id=113768065380209&format=atom10' },
        { feedName: 'Flickr', feedUrl: 'http://api.flickr.com/services/feeds/photoset.gne?set=72157627573220113&nsid=58926604@N02&lang=en-us&format=rss_200' },
        { feedName: 'Twitter', feedUrl: 'http://api.twitter.com/1/statuses/user_timeline.rss?screen_name=micayla_XO' },
        { feedName: 'FB Pipe', feedUrl: 'http://pipes.yahoo.com/pipes/pipe.run?_id=5106d44261ecbdb95ecaf6b662b4e517&_render=rss' },
        { feedName: 'YouTube', feedUrl: 'http://gdata.youtube.com/feeds/base/users/kitchenmistress/uploads?alt=rss&v=2&orderby=published&client=ytapi-youtube-profile' }, 
        { feedName: 'Yelp', feedUrl: 'http://www.yelp.com/syndicate/user/2Gfe12YWUlRhhqyKSlLFlw/rss.xml' }, 
        { feedName: 'Blog', feedUrl: 'http://thekitchenmistress.com/feed/' }, 
        { feedName: 'Pipes', feedUrl: 'http://pipes.yahoo.com/pipes/pipe.run?_id=9EFpbRhQ3hGkrb0d_w6H4A&_render=rss' }
    ]
});

// Loads the feed when the RSS item is tapped - contains only one feed at a time
wall.stores.rssFeedStore = new Ext.data.Store({
    model: 'wall.models.RssFeed'
});

