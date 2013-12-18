Ext.define('SenchaTouchParseSdkExample.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.dataview.List'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                xtype: 'list',
                title: 'Meats',
                store: 'Meats',
                itemTpl: '{name}'
            }
        ]
    }
});
