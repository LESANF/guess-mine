import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
  showTimebox,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timeCheck = document.getElementById("timer");
let time = 90;

export const timer = () =>
  setInterval(() => {
    timeCheck.innerHTML = `남은시간 : ${time}`;
    // eslint-disable-next-line no-plusplus
    time--;
    if (time < 0) {
      clearInterval(timer);
      timeCheck.innerHTML = "시간초과";
    }
  }, 1000);

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.className = "btn";
    playerElement.innerHTML = `<div>Player: ${player.nickname}</div><div>Points: ${player.points}</div>`;
    board.appendChild(playerElement);
  });
};

export const handlePlayerUpdate = ({ sockets }) => {
  addPlayers(sockets);
};

const setNotifs = (text) => {
  notifs.innerText = "";
  notifs.innerText = text;
};

export const handleGameStarted = () => {
  setNotifs("");
  disableCanvas();
  hideControls();
  enableChat();
};

export const handleLeaderNotif = ({ word }) => {
  enableCanvas();
  showControls();
  showTimebox();
  disableChat();
  notifs.innerText = `You are the leader, paint: ${word}`;
};

export const handleGameEnded = () => {
  setNotifs("Game ended.");
  disableCanvas();
  hideControls();
  resetCanvas();
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon");
};
