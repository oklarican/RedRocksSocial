// Model for Local Storage
wall.models.LocalStorage = Ext.regModel('wall.models.LocalStorage',{
    fields: [
        {name: 'userId', type: 'string'},
        {name: 'appId', type: 'string'},
        {name: 'userSignedIn', type: 'string'},
    ],
    proxy: {
        type: 'localstorage',
        id: 'theWall'
    }
});

// Store for Local Storage
wall.stores.localStorageStore = new Ext.data.Store({
    model: 'wall.models.LocalStorage'
});

