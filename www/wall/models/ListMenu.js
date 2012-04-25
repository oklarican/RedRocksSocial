wall.models.ListMenu = Ext.regModel('wall.models.ListMenu', {
    fields: [
        {name: 'menuItem', type: 'string'},
        {name: 'menuAction', type: 'string'},
        {name: 'menuAllowedGroups', type: 'string', defaultValue: 'S'}
    ]
});

wall.stores.settingsMenuStore = new Ext.data.Store({
    model  : 'wall.models.ListMenu',
    data: [
        {menuItem: 'Account Settings', menuAction: 'showAccountSettingsMenu', menuAllowedGroups: 'S'},
        {menuItem: 'Sharing Settings', menuAction: 'showSharingSettingsForm', menuAllowedGroups: 'S'},
        {menuItem: 'Sign Out', menuAction: 'signOut', menuAllowedGroups: 'S,G'}
    ]
});

wall.stores.accountSettingsMenuStore = new Ext.data.Store({
    model  : 'wall.models.ListMenu',
    data: [
        {menuItem: 'User Profile', menuAction: 'showUserProfileForm'},
        {menuItem: 'Change Password', menuAction: 'showChangePasswordForm'},
        //{menuItem: 'Privacy Settings', menuAction: 'showPrivacySettingsForm'}
    ]
});
