const APIUtil = {

    followUser: id => {
        // debugger;
        return $.ajax({
        method: 'POST',
        url: `/users/${id}/follow`,
        dataType: 'JSON'});
    }, 

    unfollowUser: id => {
        // debugger;
        return $.ajax({
        method: 'DELETE',
        url: `/users/${id}/follow`,
        dataType: 'JSON'});
    },

    searchUsers: queryVal => {   
        return $.ajax({
        method: 'GET',
        url: '/users/search',
        dataType: 'JSON',
        data: {
            val: queryVal
        }
    });
    }
};


module.exports = APIUtil; 


// if (this.followState === false) {
//     console.log("Paloma")
//     // debugger; 
//     return $.ajax({
//         method: 'POST',
//         url: `/users/${this.userId}/follow`,
//         dataType: 'JSON',
//         success: toggler => {
//             // debugger;
//             this.followState = true;
//             this.render();
//         }
//     });
// } else {
//     // debugger; 
//     return $.ajax({
//         method: 'DELETE',
//         url: `/users/${this.userId}/follow`,
//         dataType: 'JSON',
//         success: toggler => {
//             // debugger;
//             this.followState = false;
//             this.render();
//         }
//     });
// }