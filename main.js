const app = {
    init: function () {
        var tabs = $('.calculator-tab');
        var forms = $('.calculator-form');

        tabs.click(function (event) {
            tabs.removeClass("active");
            forms.addClass("invisible")
            app.changePage(event);
        });

        $('#calculator-bmi-run').click(function () {
            var height = $('#calculator-bmi-height').val();
            var weight = $('#calculator-bmi-weight').val();

            var h = height / 100.0;
            var I = weight / ( h * h );

            $('#calculator-bmi-result').val(I)
        })
    },

    changePage: function (event) {
        var delegateTarget = event.delegateTarget;
        $(delegateTarget).addClass("active");
        var formId = delegateTarget.id.replace('tab', 'form')
        $('#' + formId).removeClass("invisible")
    }
};