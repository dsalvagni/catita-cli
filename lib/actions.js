; (function (namespace) {
    'use strict'

    namespace.getAll = getAll;
    namespace.isAction = isAction;
    return namespace;


    function getAll() {
        return ['init', 'start', 'pause', 'stop', 'remove', 'list', 'update', 'logout', 'status'];
    }

    function isAction(action) {
        return getAll().indexOf(action) > -1;
    }

} ((function () {
    if (typeof window === 'undefined') {
        return module.exports
    } else {
        return window
    }
})()))