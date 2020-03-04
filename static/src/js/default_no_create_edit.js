odoo.define('default_no_create_edit.no_create_edit', function (require) {
"use strict";


var AbstractField = require('web.AbstractField');


var AbstractField = AbstractField.include({
    init: function (parent, name, record, options) {
        this._super(parent, name, record, options);
        if(!this.nodeOptions.hasOwnProperty('no_create_edit')) {
            this.nodeOptions.no_create_edit = true;
        }
        if(!this.nodeOptions.hasOwnProperty('no_create')) {
            this.nodeOptions.no_create = true;
        }
    }
});

return AbstractField;

});
