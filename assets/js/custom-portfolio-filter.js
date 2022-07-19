$(document).ready(function($) {
    "use strict";
    $(function() {
    var filterList = {
        init: function() {
            $('#portfoliolist').mixItUp({
                selectors: {
                    target: '.portfolio-two',
                    filter: '.filter'
                },
                load: {
                    filter: '.digital-pr'
                }
            });
        }
    };
    filterList.init();
    });
    
});