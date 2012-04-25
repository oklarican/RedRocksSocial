wall.views.UserForm = Ext.extend(Ext.form.FormPanel, {
    id: 'userForm',
    scroll: 'vertical',
    //defaultInstructions: 'Please enter the information above.',
    defaultInstructions: '',

    initComponent: function(){
    Ext.apply(this,{
           dockedItems: [
                         {
                         xtype: 'toolbar',
                         id: 'userFormToolbar',
                         title: 'User Profile',
                         items: [
                                 {
                                 xtype: 'button',
                                 ui: 'back',
                                 text: 'Back',
                                 handler: this.onBackAction,
                                 scope: this 
                                 }
                                 ],
                         },
                         {
                         xtype:'toolbar',
                         dock: 'bottom',
                         items: [
                                 {xtype: 'spacer'},
                                 {        
                                 xtype: 'button',
                                 id: 'userFormSaveButton',
                                 ui: 'confirm',
                                 text: 'button',
                                 handler: this.onSaveAction,
                                 scope: this
                                 },
                                 ]
                         },
                         ],

    });

    Ext.apply(this,{
        items: [{
            xtype: 'fieldset',
            id: 'userFormFieldset',
            //title: 'User Details',
            title: '',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                style: 'font-size: 80%',
                useClearIcon: true,
                required: false,
            },
            items: [{
                xtype: 'button',
                id: 'userImageButton',
                //html: '<img src="' + this.getRecord().get('userPhotoUrl') + '" id="uploadPic"/>',
                html: '<img src="" id="uploadPic"/>',
                height: 100,
                width: 100,
                ui: 'plain',
                cls: 'amimagebutton',
                pressedCls: 'amimagebtnp',
                handler: function(){
                    wall.views.pictureActionSheet.show();
                    //this.update('<img src="lib/thewall/userimage.jpg" />');
                },
                },
                {
                name: 'userFirstName',
                label: 'First Name',
                required: true
                },
                    {
                        xtype: 'wall.views.ErrorField',
                        fieldname: 'userFirstName',
                    },
                {
                name: 'userLastName',
                label: 'Last Name',
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userLastName',
                    },
                {
                xtype: 'emailfield',
                name: 'userEmailAddress',
                label: 'Email',
                required: true
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userEmailAddress',
                    },
                {
                xtype: 'passwordfield',
                name: 'userPassword',
                id: 'userPassword',
                label: 'Password',
                required: true
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userPassword',
                    },
                {
                //xtype: 'numberfield',
                name: 'userPhoneNumber',
                label: 'Phone',
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userPhoneNumber',
                    },
                {
                name: 'userLocation',
                label: 'Location',
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userLocation',
                    },
                {
                xtype: 'selectfield',
                name: 'userGender',
                label: 'Gender',
                options: [{
                         text: 'Not Selected',
                         value: 'U'
                 }, {
                         text: 'Female',
                         value: 'F',
                 }, {
                         text: 'Male',
                         value: 'M'
                }]
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'userGender',
                    },
            ],
        }],
            
        listeners: {
            beforeactivate: function() {
                //var deleteButton = this.down('#userFormDeleteButton'),
                var saveButton = this.down('#userFormSaveButton'),
                //titlebar = this.down('#userFormTitlebar'),
                model = this.getRecord();
                //alert('beforeactivate userId:' + model.get('userId'));

                if (model.phantom) {
                    //alert('phantom true');
                    //titlebar.setTitle('Create Account');
                    saveButton.setText('Create Account');
                    //deleteButton.hide();
                } else {
                    //alert('phantom false');
                    //titlebar.setTitle('Update Account');
                    saveButton.setText('Update Account');
                    var userPasswordField = this.down('#userPassword');
                    userPasswordField.hide();
                    formattedPhoneNumber = this.getValues()['userPhoneNumber'];
                    //alert('formattedPhoneNumber before:' + formattedPhoneNumber);
                    formattedPhoneNumber = formattedPhoneNumber.replace(phoneNumberRegExp, '($1) $2-$3');
                    //alert('formattedPhoneNumber after:' + formattedPhoneNumber);
                    this.setValues({
                        userPhoneNumber: formattedPhoneNumber
                    });
                    //alert('getValues userPhoneNumber:' + this.getValues()['userPhoneNumber']);
                    //deleteButton.show();
                }
            },
            deactivate: function() { this.resetForm() }
        }           
    });

    wall.views.UserForm.superclass.initComponent.apply(this);
    },
    
    onBackAction: function(){
        var model = this.getRecord();
        Ext.dispatch({
            controller: wall.controllers.main,
            action: (model.phantom ? 'showSignInPanel' : 'showAccountSettingsMenu'),
            //action: (model.phantom ? 'showSignInPanel' : 'showAccountSettingsMenu'),
            animation: {type: 'slide', direction: 'right'}
        });
    },

    onSaveAction: function(){
        var model = this.getRecord();
        //alert('onsaveaction userId:' + model.get('userId'));
                                 /*this.submit({
                                             params: {
                                             myparms: 'myparms'
                                             },
                                             success: this.onSubmitSuccess,
                                             failure: this.onSubmitFailure
                                 });*/
        Ext.dispatch({
            controller: wall.controllers.main,
            action: (model.phantom ? 'saveAccount' : 'updateAccount'),
            animation: {type: 'slide', direction: 'right'},
            data: this.getValues(),
            record: model,
            form: this
        });
    },

    onSubmitSuccess: function(form, result){
                                 alert('success!');
                                 alert(result);
        var hideNotification = new Ext.util.DelayedTask(function() {
                                                     wall.views.notificationOverlay.hide(
                                                                                         'fade'
                                                                                         );
                                                     });
        //wall.views.notificationOverlay.setSize({width: 10, height: 10});
        wall.views.notificationOverlay.update(result);
        wall.views.notificationOverlay.show();
        hideNotification.delay(5000);

    },

    onSubmitFailure: function(form, result){
                                 alert('failure!');
                                 alert(result);
                                 var hideNotification = new Ext.util.DelayedTask(function() {
                                     wall.views.notificationOverlay.hide(
                                         'fade'
                                     );
                                     });
                                 //wall.views.notificationOverlay.setSize({width: 10, height: 10});
                                 wall.views.notificationOverlay.update(result);
                                 wall.views.notificationOverlay.show();
                                 hideNotification.delay(5000);

    },
                                 
    showErrors: function(errors){
                                 console.log(errors);
        var fieldset = this.down('#userFormFieldset');
        this.fields.each(function(field){
            var fieldErrors = errors.getByField(field.name);

            if (fieldErrors.length > 0) {
                var errorField = this.down('#' + field.name + 'ErrorField');
                field.addCls('invalid-field');
                errorField.update(fieldErrors);
                errorField.show();
            } else {
                this.resetField(field);
            }
        }, this);
        fieldset.setInstructions('Please update the noted fields.');
    },
    
    resetForm: function(){
        var fieldset = this.down('#userFormFieldset');
        this.fields.each(function(field) {
            this.resetField(field);
        }, this);
        fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    },    

    resetField: function(field) {
        var errorField = this.down('#' + field.name + 'ErrorField');
        errorField.hide();
        field.removeCls('invalid-field');
        return errorField;
    }
});