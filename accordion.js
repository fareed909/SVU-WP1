$(document).ready(function () {
    $(".accordion-header").click(function () {
        const content = $(this).next(".accordion-content");

        // Collapse any other open accordion items
        $(".accordion-content").not(content).slideUp();

        content.slideToggle();
    });
});