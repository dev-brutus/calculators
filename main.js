const app = {
    init: function () {
        const tabs = $('ul.nav-tabs > li');
        tabs.click(app.changePage)
    },

    changePage: function (event) {
        var delegateTarget = event.delegateTarget;
        $('ul.nav-tabs > li').removeClass("active");
        $(delegateTarget).addClass("active");
    }
};