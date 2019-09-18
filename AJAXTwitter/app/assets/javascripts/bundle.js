/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./frontend/twitter.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./frontend/api_util.js":
/*!******************************!*\
  !*** ./frontend/api_util.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(/*! ./api_util.js */ "./frontend/api_util.js");

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

/***/ }),

/***/ "./frontend/twitter.js":
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

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

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map