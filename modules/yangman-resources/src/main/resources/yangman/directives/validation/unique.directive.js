define([], function () {
    'use strict';

    angular.module('app.yangman').directive('unique', Unique);

    /**
     * Check if current value is not already existing
     * @returns {{require: string, link: Function}}
     * @constructor
     */
    function Unique() {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$validators.unique = ValidateUnique;

                function ValidateUnique(modelValue) {

                    return !(modelValue.length && angular.fromJson(attrs.unique).some(function (item){
                        return item === modelValue;
                    }));

                }
            },
        };
    }


});
