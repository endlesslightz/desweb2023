$(document).ready(function () {
    $(".button").click(function () {
        let nilai = $(this).attr("data-filter");
        if (nilai == "semua") {
            $(".filter").show("1000")
        } else {
            $(".filter").not("." + nilai).hide("1000")
            $(".filter").filter("." + nilai).show("1000")
        }
    });
    $("ul .button").click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
});
