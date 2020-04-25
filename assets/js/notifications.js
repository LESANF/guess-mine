const notifications = document.getElementById("jsNotifications");

const fireNotification = (text, color) => {
  const notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
};

// eslint-disable-next-line import/prefer-default-export
export const handleNewUser = ({ nickname }) => {
  fireNotification(`${nickname} just Joined !`, "rgb(0,122,255)");
};
