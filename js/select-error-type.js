$selectErrorType = (function(){
var elementSelector = {
    errorForm1: '#error-form-1',
    errorForm2: '#error-form-2',
    errorForm3: '#error-form-3',
    errorForm4: '#error-form-4',
    errorForm5: '#error-form-5',
    errorForm6: '#error-form-6',
    errorForm7: '#error-form-7'
    }



function showErrorForm1() {
    $('.ui.toggle.1').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm1).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm1).removeClass("unhidden").addClass("hidden");
        }
        });
}

function showErrorForm2() {
    $('.ui.toggle.2').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm2).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm2).removeClass("unhidden").addClass("hidden");
        }
        });
}
function showErrorForm3() {
    $('.ui.toggle.3').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm3).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm3).removeClass("unhidden").addClass("hidden");
        }
        });
}
function showErrorForm4() {
    $('.ui.toggle.4').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm4).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm4).removeClass("unhidden").addClass("hidden");
        }
        });
}
function showErrorForm5() {
    $('.ui.toggle.5').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm5).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm5).removeClass("unhidden").addClass("hidden");
        }
        });
}
function showErrorForm6() {
    $('.ui.toggle.6').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm6).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm6).removeClass("unhidden").addClass("hidden");
        }
        });
}
function showErrorForm7() {
    $('.ui.toggle.7').checkbox({
        onChecked: function () {
            $(elementSelector.errorForm7).removeClass("hidden").addClass("unhidden");
        },
        onUnchecked: function(){
            $(elementSelector.errorForm7).removeClass("unhidden").addClass("hidden");
        }
        });
}



    return {
        initialize: function(){
            showErrorForm1();
            showErrorForm2();
            showErrorForm3();
            showErrorForm4();
            showErrorForm5();
            showErrorForm6();
            showErrorForm7();
        }
    }
})();

$(document).ready(function(){
    $('.toggle.checkbox').checkbox();
    $('select.dropdown').dropdown();
    $selectErrorType.initialize();

});
