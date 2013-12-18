Ext.define('SenchaTouchParseSdkExample.store.Meats', {
    extend: 'Ext.data.Store',

    config: {
        model: 'SenchaTouchParseSdkExample.model.Meat',

        data: [
            {
                name: 'Beef'
            },
            {
                name: 'Veal'
            }
        ]
    }

});
