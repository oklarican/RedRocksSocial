//Panel to input text and submit to php along with application_name, device_id, lat, and lng  		
/* 
height = 960
480
57
width variable by aspect ratio
/*
var selectFromLibrary = function() {
    alert('old selectFromLibrary');
    //mpq.track("Button clicked");
    actionSheet.hide();
    getPhoto(pictureSource.PHOTOLIBRARY);
};

var takePicture = function() {
    alert('old takePicture');
    //mpq.track("Button clicked");
    actionSheet.hide();
    capturePhoto();
};
*/
//var actionSheet = new Ext.ActionSheet({
wall.views.PictureActionSheet = Ext.extend(Ext.ActionSheet, {
    hideOnMaskTap: true,
    initComponent: function(){
        Ext.apply(this,{
                  selectFromLibrary: function(){
                  //alert('selectFromLibrary');
                  this.up('actionsheet').hide();
                  getPhoto(pictureSource.PHOTOLIBRARY);
                  },
                  
                  takePicture: function(){
                  //alert('takePicture');
                  this.up('actionsheet').hide();
                  capturePhoto();
                  }
        });

        Ext.apply(this,{
                 items: [
                         {
                         text: 'Select from Library',
                         handler: this.selectFromLibrary
                         },
                         {
                         text: 'Take Picture',
                         ui  : 'action',
                         handler: this.takePicture
                         },
                         {
                         text: 'Cancel',
                         ui  : 'decline',
                         handler: function() { this.up('actionsheet').hide(); }
                         }
                         ]
                 
                 });
                                           
        wall.views.PictureActionSheet.superclass.initComponent.apply(this);
    }
});