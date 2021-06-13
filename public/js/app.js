$(".m-nave-toggle").click(function (e) {
    e.preventDefault();
    $(".m-right").toggleClass("is-open"); 
    $(".m-nave-toggle").toggleClass("is-open"); 
    
})