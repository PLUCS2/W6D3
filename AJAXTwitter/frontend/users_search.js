
const APIUtil = require("./api_util.js");

class UsersSearch {
    constructor(el){
        let $el = $(el);
        this.$el = $el;
        this.input = $el.text();
        this.ul = $(".users");
        this.input.on('input', this.handleInput.bind(this));
    }

    handleInput(event) {
      APIUtil.searchUsers(this.input.val());
    }
}