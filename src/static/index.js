// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("hello", () => console.log("hi Client"));

socket.emit("hello2");
