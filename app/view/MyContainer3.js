Ext.define('MyApp.view.MyContainer3', {
    extend: 'Ext.Container',

    config: {
        fullscreen: true,
        items: [
            {
                xtype: 'tabpanel',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'container',
                        title: 'Tab 1'
                    },
                    {
                        xtype: 'container',
                        title: 'Tab 2'
                    },
                    {
                        xtype: 'container',
                        title: 'Tab 3'
                    }
                ]
            },
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Demo Client'
            },
            {
                xtype: 'button',
                itemId: 'mybutton',
                text: 'Video 1'
            },
            {
                xtype: 'button',
                itemId: 'mybutton1',
                text: 'Video 2'
            },
            {
                xtype: 'button',
                itemId: 'mybutton2',
                text: 'Video 3'
            },
            {
                xtype: 'button',
                itemId: 'mybutton3',
                text: 'Video 4'
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#mybutton'
            },
            {
                fn: 'onMybutton1Tap',
                event: 'tap',
                delegate: '#mybutton1'
            },
            {
                fn: 'onMybutton2Tap',
                event: 'tap',
                delegate: '#mybutton2'
            },
            {
                fn: 'onMybutton3Tap',
                event: 'tap',
                delegate: '#mybutton3'
            }
        ]
    },

    firebase: new Firebase('http://demo.firebase.com/sharedcinema'),

    onMybuttonTap: function(button, e, options) {
        this.videoSelected(1);
    },

    onMybutton1Tap: function(button, e, options) {
        this.videoSelected(2);
    },

    onMybutton2Tap: function(button, e, options) {
        this.videoSelected(3);
    },

    onMybutton3Tap: function(button, e, options) {
        this.videoSelected(4);
    },

    videoSelected: function(id) {
        var fb = this.firebase;
        fb.set({vote: id});
    }
});