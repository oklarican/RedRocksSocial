/*
 * Global variables.
 *
 */
var load = new Ext.util.DelayedTask(function(){
                                    //tab.setActiveItem(0, {type: 'slide', direction: 'right'});
                                    wall.stores.WallPostsStore.load();                                                                                                
                                    imageData = null;
                                    //post.destroy();
                                    });
/*var tpl = new Ext.XTemplate(
                            '<tpl for=".">',
                            '<div class="wallitem">',
                            '<img src="{userid}" class= "profilePic"/>',
                            '<div class="wallMSG">{message}</div>',
                            '<div class="postPic">{urlS}</div>',
                            '<div class="timestamp">',
                            '{timestamp}',
                            '</div>',
                            '</div>',
                            '<div class="clear"></div>',
                            '</tpl>'
                            );*/

var twitterTpl = new Ext.XTemplate(
                                   '<div id="tweet_container">',
                                   '<tpl for=".">',
                                   '<div class="tweet_data">',
                                   '<div class="tweet_avatar">',
                                   '<img width="30" height="30" src="{profile_image_url}"/>',
                                   '</div>',
                                   '<div class="tweet_content">',
                                   '<div class="user">{from_user}</div>',
                                   '{text}',
                                   '</div>',
                                   '<div class="clear"></div>',
                                   '</div>',
                                   '</tpl>',
                                   '</div>'
                                   );



var rssTpl = new Ext.XTemplate(
                                   '<div id="tweet_container">',
                                   '<tpl for=".">',
                                   '<div class="tweet_data">',
                                   '<div class="tweet_content">',
                                   '{title}',
                                   '</div>',
                                   '<div class="clear"></div>',
                                   '</div>',
                                   '</tpl>',
                                   '</div>'
                                   );

var tpl = new Ext.XTemplate(
                            '<div id="tweet_container">',
                            '<tpl for=".">',
                            '<div class="tweet_data">',
                            '<div class="tweet_avatar">',
                            '<img width="30" height="30" src="{userid}"/>',
                            '</div>',
                            '<div class="tweet_content">',
                            '{message}',
                            '<div class="timestamp2">{timestamp}</div>',
                            '</div>',
                            '<div class="postPic">{urlM}</div>',
                            '<div class="clear"></div>',
                            '</div>',
                            '</tpl>',
                            '</div>'
                            );




var postButton=new Ext.Button({
                              width:60,
                              id: 'post-button',
                              
                              
                              text: 'Post',
                              ui: 'confirm',
                              padding:0,
                              
                              
                              });

var pictureSource;   
var destinationType;
var gps;
var email='noemail@seriouslynoemail.com';
var fbid='noID';
var imageData= null;
var image= null;
var popUp;
var phoneNumberRegExp = /^\(?([2-9][0-8][0-9])\)?[-. ]?([2-9][0-9]{2})[-. ]?([0-9]{4})$/;

function dToolbar(userPic){
    var dTool = Ext.getCmp("detailPanel");
    if(userPic != "lib/thewall/icons/nopic-small.jpg"){            
        
        dTool.addDocked({
                        
                        //id:'fbToolbar,
                        xtype:'toolbar',
                        dock:'bottom',
                        items:[{xtype:'button', id:'history',iconCls: 'time',iconMask: 'true',handler: function() {alert('HISTORY');}},{xtype:'button', iconCls: 'user',iconMask: 'true',handler: function() {alert('VIEW PROFILE');}},{xtype:'button', iconCls: 'compose',iconMask: 'true',handler: function() {alert('SEND MESSAGE');}},{xtype:'button', iconCls: 'add',iconMask: 'true',handler: function() {alert('FRIEND/FOLLOW');}}]
                        });
        dTool.doLayout();
        
    }else
    {
        dTool.addDocked({
                        
                        //id:'nofbToolbar',
                        xtype: 'toolbar',
                        dock:'bottom',
                        items:[{xtype:'button', id:'history',iconCls: 'time',iconMask: 'true',handler: function() {alert('HISTORY');}}]
                        });
        dTool.doLayout();
    }
    
    
}

