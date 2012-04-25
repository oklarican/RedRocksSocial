wall.views.SignInForm = Ext.extend(Ext.form.FormPanel, {
//var signInForm = {
//    xtype: 'form',                                   
    id: 'signInForm',
    //fullscreen: true,
    //layout: 'fit',
    scroll: 'vertical',
    //defaultInstructions: 'Please enter the information above.',
    defaultInstructions: '',

    initComponent: function(){
    
        Ext.apply(this, {
                  
            dockedItems: [
                {xtype: 'toolbar',
                id: 'signInFormToolbar',
                title: 'Sign In',
                items: [{
                    xtype: 'button',
                    ui: 'back',
                    text: 'Back',
                    handler: this.onBackAction,
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
                    text: 'Sign In',
                    handler: this.onSignInAction,
                    scope: this,
                    },
                ]
                },
            ],
            items: [{
                xtype: 'fieldset',
                id: 'signInFormFieldset',
                //title: 'Sign In Details',
                title: '',
                instructions: this.defaultInstructions,
                defaults: {
                    xtype: 'textfield',
                    labelAlign: 'left',
                    style: 'font-size: 80%',
                    useClearIcon: true,
                    required: false,
                },

                items: [
                    {xtype: 'emailfield',
                    name: 'userEmailAddress',
                    label: 'Email',
                    //labelWidth: '35%',
                    required: true
                    },
                        {
                        xtype: 'wall.views.ErrorField',
                        fieldname: 'userEmailAddress',
                        },
                    {xtype: 'passwordfield',
                    name: 'userPassword',
                    label: 'Password',
                    //labelWidth: '35%',
                    required: true
                    },
                        {
                        xtype: 'wall.views.ErrorField',
                        fieldname: 'userPassword',
                        },
                ]
            }],
            listeners: {
                deactivate: function() { this.resetForm() }
            }           
        });

        wall.views.SignInForm.superclass.initComponent.apply(this);
    },
    
    onBackAction: function() {
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'showSignInPanel',
            animation: {type: 'slide', direction: 'right'},
        });
    },
                                   
    onSignInAction: function(){
        Ext.dispatch({
            controller: wall.controllers.main,
            action: 'signIn',
            animation: {type: 'slide', direction: 'right'},
            data: this.getValues(),
            form: this,
        });
    },

    showErrors: function(errors){
        console.log(errors);
        //var fieldset = this.down('#signInFormFieldset');
        this.fields.each(function(field){
            var fieldErrors = errors.getByField(field.name);

            if (fieldErrors.length > 0) {
                var errorField = this.down('#' + field.name + 'ErrorField');
                //field.addCls('invalid-field');
                errorField.update(fieldErrors);
                errorField.show();
            } else {
                this.resetField(field);
            }
        }, this);
        //fieldset.setInstructions('Incorrect Email Address or Password. Please try again.');
    },

    resetForm: function(){
        //var fieldset = this.down('#signInFormFieldset');
        this.fields.each(function(field) {
            this.resetField(field);
        }, this);
        //fieldset.setInstructions(this.defaultInstructions);
        this.reset();
    },    

    resetField: function(field) {
        var errorField = this.down('#' + field.name + 'ErrorField');
        errorField.hide();
        //field.removeCls('invalid-field');
        return errorField;
    }
});
//};
