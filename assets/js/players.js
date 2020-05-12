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
import { getSocket } from "./sockets";

const board = document.getElementById("jsPBoard");
const notifs = document.getElementById("jsNotifs");
const timeCheck = document.getElementById("jsTimer");

let x;
let time;

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    const playerElement = document.createElement("div");
    playerElement.className = "btn";
    playerElement.innerHTML = `<div>참가자: ${player.nickname}</div><div>점수: ${player.points}</div>`;
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
  notifs.innerText = `당신이 그릴 차례입니다 📢  【단어: ${word}】`;
};

const timeEnd = (timeFunc) => {
  clearInterval(timeFunc);
};

export const handleGameEnded = () => {
  time = 21;
  setNotifs("Game ended.");
  timeEnd(x);
  disableCanvas();
  hideControls();
  hideTimebox();
  resetCanvas();
};

const alertTime = () => {
  getSocket().emit(window.events.timeCheck);
};

export const timer = () => {
  timeEnd(x);
  console.log(time);
  time = 21;
  x = setInterval(() => {
    time--;
    timeCheck.innerHTML = `남은시간 : ${time}`;
    // eslint-disable-next-line no-plusplus
    if (time < 0) {
      time = 21;
      timeCheck.innerHTML = "시간초과";
      timeEnd(x);
    }
  }, 1000);
};

export const handleGameStarted = () => {
  setNotifs("");
  showTimebox();
  alertTime();
  disableCanvas();
  hideControls();
  enableChat();
};

export const handleGameStarting = () => {
  setNotifs("게임이 곧 시작됩니다 🎯");
};
