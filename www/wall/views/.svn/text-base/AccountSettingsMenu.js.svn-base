wall.views.AccountSettingsMenu = Ext.extend(Ext.Panel, {
    id: 'accountSettingsMenu',
    layout: 'fit',
    scroll: 'vertical',
    initComponent: function(){
    Ext.apply(this,{
              dockedItems: [
                            {xtype: 'toolbar',
                            id: 'accountSettingsMenuToolbar',
                            title: 'Account Settings',
                            style: 'font-size: 90%',
                            items: [
                                    {xtype: 'button',
                                    ui: 'back',
                                    text: 'Back',
                                    handler: function(){
                                    Ext.dispatch({
                                                 controller: wall.controllers.main,
                                                 action: 'showSettingsMenu',
                                                 animation: {type: 'slide', direction: 'right'}
                                                 });
                                    }
                                    }
                                    ]
                            }
                            ],
              items: [
                      {xtype: 'list',
                      store: wall.stores.accountSettingsMenuStore,
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

    wall.views.AccountSettingsMenu.superclass.initComponent.apply(this);
    }
});
