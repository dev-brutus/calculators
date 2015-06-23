const app = {
    init: function () {
        var tabs = $('ul.nav-tabs > li');
        tabs.click(function (event) {
            tabs.removeClass("active");
            app.changePage(event);
        });
        $('#nav-tab-bmi').click(function () {
            alert("BMI!!!")
        })
    },

    changePage: function (event) {
        $(event.delegateTarget).addClass("active");
    }
};