// Model for the Photo Table
wall.models.Photo = Ext.regModel('wall.models.Photo',{
    fields: [
        {name: 'photoId', type: 'string'}, // PK into photos
        {name: 'realName', type: 'string'},
        {name: 'hashO', type: 'string'},
        {name: 'hashL', type: 'string'},
        {name: 'hashM', type: 'string'},
        {name: 'hashS', type: 'string'},
    ],
    idProperty: 'photoId',
    proxy: {
        type: 'localstorage',
        id: 'theWallPhotos',
    },

});

// Store for the Photo Table
wall.stores.photoStore = new Ext.data.Store({
    model: 'wall.models.Photo'
});

