'use strict';

import Backbone from 'backbone';

export default Backbone.Model.extend({

    defaults: {
        title: 'new task...',
        done: false
    }
});

