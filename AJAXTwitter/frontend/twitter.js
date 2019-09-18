const FollowToggle = require("./follow_toggle.js");

// const setEventHandlers = () => {
//     $('#_form').on('submit', e => {
//         e.preventDefault(); 
//         const followToggle = new FollowToggle(e);
//     });
// }

// $(document).ready($(".follow-toggle").each(function (e) {
//     const followToggle = new FollowToggle(e);
// }));

$(() => {
    // setEventHandlers();

    $(".follow-toggle").each(function(i, e) {
        const followToggle = new FollowToggle(e);
    })
});