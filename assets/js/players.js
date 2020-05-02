const board = document.getElementById("jsPBoard");

const addPlayers = (players) => {
  board.innerHTML = "";
  players.forEach((player) => {
    console.log(player);
    const playerElement = document.createElement("span");
    playerElement.innerText = `${player.nickname}: ${player.points}`;
    board.appendChild(playerElement);
  });
};

// eslint-disable-next-line import/prefer-default-export
export const handlePlayerUpdate = ({ sockets }) => {
  addPlayers(sockets);
};
