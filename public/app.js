Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    views: [
        'MyContainer3'
    ],
    name: 'MyApp',
    launch: function() {
    	Ext.create("MyApp.view.MyContainer3");
    }
});