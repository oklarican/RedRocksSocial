wall.controllers.WallController = new Ext.Controller({

    showTheWall: function(options){
        
        
          wall.stores.WallPostsStore.load();                                                                                                
        wall.views.viewport.setActiveItem(wall.views.wallPanel, options.animation);
    },

    showDetailPanel: function(options){
        //alert('The Wall Detail 0');
        wall.views.detailPanel=new wall.views.DetailPanel(); 
        wall.views.detailPanel.update('<tpl for="."><div id="tweet_container"><div class="timestamp2">'+options.timestamp+'</div><div class="about_content">'+options.message+'</div><div class="postPicDetail">'+options.photo+'</div><div class="clear"></div></div></tpl>'/*'<tpl for="."><div class="wallitemDetail"><img src="'+options.userPic+'" class= "profilePicDetail"/><div class="timestampDetail">'+options.timestamp+'</div><div class="spacer"></div><div class="wallMSGDetail">'+options.message+'</div><div class="postPicDetail">'+options.photo+'</div></div><div class="clear"></div></tpl>'*/);
                                                      //dToolbar(options.userPic);
        wall.views.viewport.setActiveItem(wall.views.detailPanel, options.animation);
    },
                                                     
    showPhotoPanel: function(options){
        //alert('The Wall Detail 0');
        wall.views.photoPanel=new wall.views.PhotoPanel(); 
        wall.views.photoPanel.update('<div><img src="{'+options.photo+'}" width="300">');
        wall.views.viewport.setActiveItem(wall.views.photoPanel, options.animation);
    },


});