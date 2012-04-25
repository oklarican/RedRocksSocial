// Model for the Application Table
wall.models.Application = Ext.regModel('wall.models.Application',{
    fields: [
        {name: 'appId', type: 'int'}, // PK into app_profile
        {name: 'appName', type: 'string'},
        {name: 'fqdnUrl', type: 'string'},
        {name: 'startDateTime', type: 'string'},
        {name: 'stopDateTime', type: 'string'},
        {name: 'rangeInMeters', type: 'int'},
        {name: 'facilityId', type: 'int'},
        {name: 'vendorId', type: 'int'},
    ],
    idProperty: 'appId',
    proxy: {
        type: 'localstorage',
        id: 'theWallApplications',
    },

});

// Store for the Application Table
wall.stores.applicationStore = new Ext.data.Store({
    model: 'wall.models.Application'
});

