Ext.define('SenchaTouchParseSdkExample.model.Meat', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'objectId', type: 'auto', persist: false},
            { name: 'name', type: 'string' }
        ],
        idProperty: 'objectId'
    }
});
