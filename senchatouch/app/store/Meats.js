Ext.define('SenchaTouchParseSdkExample.store.Meats', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.ux.parse.data.proxy.Parse'
    ],

    config: {
        model: 'SenchaTouchParseSdkExample.model.Meat',
        autoLoad: true,

        proxy: {
            type: 'parse',
            url: 'https://api.parse.com/1/classes/Meat'
        }
    }

});
