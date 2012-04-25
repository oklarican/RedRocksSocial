wall.views.SettingsMenu = Ext.extend(Ext.Panel, {
    //id: 'settingsMenu',
    layout: 'fit',
    scroll: 'vertical',
    initComponent: function(){
    Ext.apply(this, {
              dockedItems: [
                            {xtype: 'toolbar',
                            //id: 'settingsMenuToolbar',
                            title: 'Settings',
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
                      //id: 'settingsMenuList',
                      store: wall.stores.settingsMenuStore,
                      itemTpl: '{menuItem}',
                      listeners: {
                      itemtap: function (dataView, index, item, e) {
                      var nextMenuAction = dataView.store.getAt(index).data.menuAction;
                      Ext.dispatch({
                                   controller: wall.controllers.main,
                                   action: nextMenuAction,
                                   animation: {type: 'slide', direction: 'left'}
                                   });
                      }
                      }
                      }
                      ]

    });

    wall.views.SettingsMenu.superclass.initComponent.apply(this);
    }
});
