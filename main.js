const app = {
    init: function () {
        $('.calculator-tab a').click(function (event) {
            event.preventDefault();
            $(this).tab('show');
        });

        $('.datepicker').datepicker({
            format: 'dd.mm.yyyy',
            orientation: 'bottom'
        });

        $('#calculator-bmi-run').click(function () {
            var height = $('#calculator-bmi-height').val();
            var weight = $('#calculator-bmi-weight').val();

            var h = height / 100.0;
            var I = weight / ( h * h );

            $('#calculator-bmi-result').val(I)
        });

        $('#calculator-pulse-age-type').change(function () {
            $('#calculator-pulse-birthdate').prop('readonly', true);
            $('#calculator-pulse-age').prop('readonly', false);
        });

        $('#calculator-pulse-birthdate-type').change(function () {
            $('#calculator-pulse-age').prop('readonly', true);
            $('#calculator-pulse-birthdate').prop('readonly', false);
        });

        const fillTable = function (age) {
            const max = 220 - age;
            const percent = max / 100.0;
            const result = {};
            [35, 50, 60, 70, 80, 90, 95].forEach(function (i) {
                result[i] = Math.round(percent * i);
            });
            $('#calculator-pulse-table-max').text(max);
            $('#calculator-pulse-red-max').text(result[95]);
            $('#calculator-pulse-red-min').text(result[90]);
            $('#calculator-pulse-endurance-max').text(result[90]);
            $('#calculator-pulse-endurance-min').text(result[80]);
            $('#calculator-pulse-aerobic-max').text(result[80]);
            $('#calculator-pulse-aerobic-min').text(result[70]);
            $('#calculator-pulse-fat-max').text(result[70]);
            $('#calculator-pulse-fat-min').text(result[60]);
            $('#calculator-pulse-warm-max').text(result[60]);
            $('#calculator-pulse-warm-min').text(result[50]);
            $('#calculator-pulse-rest-max').text(result[50]);
            $('#calculator-pulse-rest-min').text(result[35]);
        };

        $('#calculator-pulse-age').blur(function () {
            fillTable(parseInt($('#calculator-pulse-age').val()));
        });

        $('#calculator-pulse-birthdate').blur(function () {
            const date = $('#calculator-pulse-birthdate').datepicker('getDate');
            const currentDate = new Date();

            var diff = currentDate.getFullYear() - date.getFullYear();

            fillTable(diff);
        });
    }
};