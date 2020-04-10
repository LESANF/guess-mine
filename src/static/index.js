// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function handleMessageNotif(data) {
  const { message } = data;
  console.log(`somebody said ${message}`);
}

socket.on("messageNotif", handleMessageNotif);
