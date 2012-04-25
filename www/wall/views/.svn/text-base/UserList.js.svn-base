wall.views.UserList = Ext.extend(Ext.Panel, {
                                 layout: 'fit',
                                 scroll: 'vertical',
                                 initComponent: function(){
                                 var addButton, titlebar, list;
                                 
                                 backButton = {
                                 xtype: 'button',
                                 ui: 'back',
                                 text: 'Back',
                                 handler: this.onBackAction,
                                 scope: this
                                 };
                                 
                                 titlebar = {
                                 dock: 'top',
                                 xtype: 'toolbar',
                                 title: 'Users',
                                 items: [ backButton, { xtype: 'spacer'}]
                                 };
                                 
                                 list = {
                                 xtype: 'list',
                                 itemTpl: '{userId},{userFirstName}, {userLastName}',
                                 store: wall.stores.userStore,
                                 listeners: {
                                 scope: this,
                                 itemtap: this.onItemtapAction
                                 }
                                 };
                                 
                                 Ext.apply(this, {
                                           html: 'placeholder',
                                           layout: 'fit',
                                           dockedItems: [titlebar],
                                           items: [list]
                                           });
                                 
                                 wall.views.UserList.superclass.initComponent.call(this);
                                 },
                                 
                                 onBackAction: function() {
                                 Ext.dispatch({
                                              controller: wall.controllers.main,
                                              action: 'showHomeMenu',
                                              animation: {type: 'slide', direction: 'right'}
                                              });
                                 },
                                 
                                 onItemtapAction: function(list, index, item, e) {
                                 var userId = list.store.getAt(index).data.userId;
                                 //alert('onItemtap userId:' + userId);
                                 //alert('onItemtap index:' + index);
                                 Ext.dispatch({
                                              controller: wall.controllers.main,
                                              action: 'showUserDetail',
                                              animation: {type: 'slide', direction: 'left'},
                                              userId: userId
                                              });
                                 }
                                 });
