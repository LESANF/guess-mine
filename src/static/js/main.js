(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notifications");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTdiYWQ4ZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uc1wiO1xyXG4iXX0=
},{"./login":2,"./notifications":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _sockets = require("./sockets");

var body = document.querySelector("body");
var loginForm = document.getElementById("jsLogin");
var NICKNAME = "nickname";
var LOGGED_OUT = "loggedOut";
var LOGGED_IN = "loggedIn";
var nickname = localStorage.getItem(NICKNAME);

var logIn = function logIn(nickname) {
  // eslint-disable-next-line no-undef
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
  (0, _sockets.initSockets)(socket);
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  logIn(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  input.value = "";
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  logIn(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIk5JQ0tOQU1FIiwiTE9HR0VEX09VVCIsIkxPR0dFRF9JTiIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ0luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFDQSxJQUFNQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQUFsQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxVQUFqQjtBQUNBLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUNBLElBQU1DLFNBQVMsR0FBRyxVQUFsQjtBQUNBLElBQU1DLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCTCxRQUFyQixDQUFqQjs7QUFFQSxJQUFNTSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFDSCxRQUFELEVBQWM7QUFDMUI7QUFDQSxNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCO0FBQ0FELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBdUM7QUFBRVQsSUFBQUEsUUFBUSxFQUFSQTtBQUFGLEdBQXZDO0FBQ0EsNEJBQVlJLE1BQVo7QUFDRCxDQUxEOztBQU9BLElBQUlKLFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQlIsRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlosVUFBakI7QUFDRCxDQUZELE1BRU87QUFDTE4sRUFBQUEsSUFBSSxDQUFDa0IsU0FBTCxHQUFpQlgsU0FBakI7QUFDQUksRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDRDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLENBQUQsRUFBTztBQUM5QkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHbkIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGOEIsTUFHdEJxQixLQUhzQixHQUdaRCxLQUhZLENBR3RCQyxLQUhzQjtBQUk5QkQsRUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBZCxFQUFBQSxZQUFZLENBQUNlLE9BQWIsQ0FBcUJuQixRQUFyQixFQUErQmtCLEtBQS9CO0FBQ0F2QixFQUFBQSxJQUFJLENBQUNrQixTQUFMLEdBQWlCWCxTQUFqQjtBQUNBSSxFQUFBQSxLQUFLLENBQUNZLEtBQUQsQ0FBTDtBQUNELENBUkQ7O0FBVUEsSUFBSXBCLFNBQUosRUFBZTtBQUNiQSxFQUFBQSxTQUFTLENBQUNzQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbml0U29ja2V0cyB9IGZyb20gXCIuL3NvY2tldHNcIjtcclxuXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpO1xyXG5cclxuY29uc3QgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiO1xyXG5jb25zdCBMT0dHRURfSU4gPSBcImxvZ2dlZEluXCI7XHJcbmNvbnN0IG5pY2tuYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oTklDS05BTUUpO1xyXG5cclxuY29uc3QgbG9nSW4gPSAobmlja25hbWUpID0+IHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcclxuICBjb25zdCBzb2NrZXQgPSBpbyhcIi9cIik7XHJcbiAgc29ja2V0LmVtaXQod2luZG93LmV2ZW50cy5zZXROaWNrbmFtZSwgeyBuaWNrbmFtZSB9KTtcclxuICBpbml0U29ja2V0cyhzb2NrZXQpO1xyXG59O1xyXG5cclxuaWYgKG5pY2tuYW1lID09PSBudWxsKSB7XHJcbiAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59IGVsc2Uge1xyXG4gIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gIGxvZ0luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICBjb25zdCB7IHZhbHVlIH0gPSBpbnB1dDtcclxuICBpbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsIHZhbHVlKTtcclxuICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICBsb2dJbih2YWx1ZSk7XHJcbn07XHJcblxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn1cclxuIl19
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;
var notification = document.getElementById("jsNotifications");

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, "just joined");
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbnMuanMiXSwibmFtZXMiOlsibm90aWZpY2F0aW9uIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUFyQjs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzdDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFzQixhQUF0QjtBQUNELENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTm90aWZpY2F0aW9uc1wiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVOZXdVc2VyID0gKHsgbmlja25hbWUgfSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKG5pY2tuYW1lLCBcImp1c3Qgam9pbmVkXCIpO1xyXG59O1xyXG4iXX0=
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSocket = exports.getSocket = void 0;

var _notifications = require("./notifications");

var socket = null;

var getSocket = function getSocket() {
  return socket;
};

exports.getSocket = getSocket;

var updateSocket = function updateSocket(aSocket) {
  socket = aSocket;
};

exports.updateSocket = updateSocket;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSocket(aSocket);
  aSocket.on(events.newUser, _notifications.handleNewUser);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0IiwidXBkYXRlU29ja2V0IiwiYVNvY2tldCIsImluaXRTb2NrZXRzIiwid2luZG93IiwiZXZlbnRzIiwib24iLCJuZXdVc2VyIiwiaGFuZGxlTmV3VXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLElBQUlBLE1BQU0sR0FBRyxJQUFiOztBQUVPLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsU0FBTUQsTUFBTjtBQUFBLENBQWxCOzs7O0FBRUEsSUFBTUUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsT0FBRCxFQUFhO0FBQ3ZDSCxFQUFBQSxNQUFNLEdBQUdHLE9BQVQ7QUFDRCxDQUZNOzs7O0FBSUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ25CRSxNQURtQjtBQUFBLE1BQzlCQyxNQUQ4QixXQUM5QkEsTUFEOEI7QUFHdENKLEVBQUFBLFlBQVksQ0FBQ0MsT0FBRCxDQUFaO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0ksRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTJCQyw0QkFBM0I7QUFDRCxDQUxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3VXNlciB9IGZyb20gXCIuL25vdGlmaWNhdGlvbnNcIjtcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFNvY2tldCA9ICgpID0+IHNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXQgPSAoYVNvY2tldCkgPT4ge1xyXG4gIHNvY2tldCA9IGFTb2NrZXQ7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcblxyXG4gIHVwZGF0ZVNvY2tldChhU29ja2V0KTtcclxuICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLCBoYW5kbGVOZXdVc2VyKTtcclxufTtcclxuIl19
},{"./notifications":3}]},{},[1])