wall.views.ChangePasswordForm = Ext.extend(Ext.form.FormPanel, {
    id: 'changePasswordForm',
    scroll: 'vertical',
    //defaultInstructions: 'Please enter the information above.',
    defaultInstructions: '',

    initComponent: function(){
    Ext.apply(this, {
        dockedItems: [
            {xtype: 'toolbar',
            id: 'changePasswordFormToolbar',
            title: 'Change Password',
            style: 'font-size: 90%',
            items: [{
                xtype: 'button',
                ui: 'back',
                text: 'Back',
                handler: this.onBackAction,
                scope: this,
            }]
            },
            {
                xtype:'toolbar',
                dock: 'bottom',
                items: [
                    {xtype: 'spacer'},
                    {        
                    xtype: 'button',
                    ui: 'confirm',
                    text: 'Save Changes',
                    handler: this.onSaveAction,
                    scope: this,
                    },
                ]
            },
        ],

    });

    Ext.apply(this, {
        items: [{
            xtype: 'fieldset',
            id: 'changePasswordFieldset',
            //title: 'Change Password',
            title: '',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'passwordfield',
                labelAlign: 'left',
                style: 'font-size: 80%',
                useClearIcon: true,
                required: true,
            },

            items: [
                {
                name: 'currentUserPassword',
                label: 'Current Password',
                required: true
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'currentUserPassword',
                    },
                {
                name: 'newUserPassword',
                label: 'New Password',
                required: true
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'newUserPassword',
                    },
                {
                name: 'confirmNewUserPassword',
                label: 'Confirm New Password',
                required: true
                },
                    {
                    xtype: 'wall.views.ErrorField',
                    fieldname: 'confirmNewUserPassword',
                    },
            ],
        }],
    });

    wall.views.ChangePasswordForm.superclass.initComponent.apply(this);
    },
    
    onBackAction: function() {
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'showAccountSettingsMenu',
            animation: {type: 'slide', direction: 'right'},
        });
    },

    onSaveAction: function() {
        //console.log(this);
        //console.log('onsaveaction');
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'changePassword',
            animation: {type: 'slide', direction: 'right'},
            data: this.getValues(),
            record: this.getRecord(),
            form: this
        });
    },

    showErrors: function(errors){
        //console.log(errors);
        var fieldset = this.down('#changePasswordFieldset');
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
        var fieldset = this.down('#changePasswordFieldset');
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
