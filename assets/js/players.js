import {
  disableCanvas,
  hideControls,
  enableCanvas,
  showControls,
  resetCanvas,
  showTimebox,
  hideTimebox,
} from "./paint";
import { disableChat, enableChat } from "./chat";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timeCheck = document.getElementById("jsTimer");

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
  hideTimebox();
  resetCanvas();
};

const timeEnd = (timeFunc) => {
  clearInterval(timeFunc);
};

export const timer = () => {
  let time = 21;
  const x = setInterval(() => {
    time--;
    timeCheck.innerHTML = `남은시간 : ${time}`;
    // eslint-disable-next-line no-plusplus
    console.log(time);
    if (time < 0) {
      timeCheck.innerHTML = "시간초과";
      timeEnd(x);
      // handleGameEnded();
    }
  }, 1000);
};

export const handleGameStarted = () => {
  setNotifs("");
  timer();
  disableCanvas();
  hideControls();
  enableChat();
};

export const handleGameStarting = () => {
  setNotifs("Game will start soon");
};
