$(".toggle-btn").click(function(){
    $(".menu-list").toggleClass("mobile");
})
$("#menu-content li a").click(function(){
    $(".menu-list").addClass("mobile");
})