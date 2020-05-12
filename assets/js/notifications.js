const body = document.querySelector("body");

const fireNotification = (text, color, textColor) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notification.style.color = textColor;
  notification.className = "notification";
  body.appendChild(notification);
};

export const handleNewUser = ({ nickname }) =>
  fireNotification(`${nickname} 님이 입장하셨습니다 📌`, "#fff", "#25ab07");

export const handleDisconnected = ({ nickname }) =>
  fireNotification(`${nickname} 님이 퇴장하셨습니다 📌`, "#fff", "#ff0000");
