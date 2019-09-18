const APIUtil = require("./api_util.js");

class FollowToggle {
   constructor(el) {
    let $el = $(el)
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.$el = $el;
    this.render(); 
    this.$el.on("click", this.handleClick.bind(this))
   }

   render() {
    if(this.followState === false) {
        this.$el.text("Follow!");
        this.$el.prop("disabled", false);
    } else if (this.followState === true) {
        this.$el.text("Unfollow!");
        this.$el.prop("disabled", false);
    } else {
        this.$el.prop("disabled", true);
        this.$el.text(this.followState);
    }
   }

   handleClick(e) {
    e.preventDefault(); 
    // debugger;
    // const toggle = () => {
        // debugger;
        let context = this;
        if (this.followState === false) {
            this.followState = "following"; 
            this.render(); 
            // const successCB = function(context) { context.followState = true; context.render(); };
            const successCB = () => { 
                this.followState = true; 
                // debugger;
                this.render(); 
            };
            APIUtil.followUser(context.userId).then(successCB);
        //     console.log("Paloma")
        //     // debugger; 
        //     return $.ajax({ 
        //     method: 'POST', 
        //     url: `/users/${this.userId}/follow`,
        //     dataType: 'JSON',
        //     success: toggler => {
        //         // debugger;
        //         this.followState = true; 
        //         this.render();
        //     }    
        // });
        } else {
            this.followState = "Unfollowing"; 
            this.render(); 
            // const successCB = function(context) {context.followState = false; context.render();};
            const successCB = () => {
                this.followState = false;
                // debugger;
                this.render();
            };
            APIUtil.unfollowUser(context.userId).then(successCB); 
            // debugger; 
            // return $.ajax({
            // method: 'DELETE',
            // url: `/users/${this.userId}/follow`,
            // dataType: 'JSON',
            // success: toggler => {
            //     // debugger;
            //     this.followState = false;
            //     this.render();
            // }
            // });

        }
}

}

module.exports = FollowToggle; 