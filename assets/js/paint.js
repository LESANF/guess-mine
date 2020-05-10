import { getSocket } from "./sockets";

const canvas = document.getElementById("jsCanvas");
const controls = document.getElementById("jsControls");
const timebox = document.getElementById("timeBox");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const mode = document.getElementById("jsMode");
const fillCanvas = document.getElementById("jsFill");
const clearCanvas = document.getElementById("jsClear");

const INITIAL_COLOR = "#2c2c2c";
const CANVAS_SIZE_WIDTH = 1000;
const CANVAS_SIZE_HEIGHT = 600;

canvas.width = CANVAS_SIZE_WIDTH;
canvas.height = CANVAS_SIZE_HEIGHT;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;
let currentPencil = false;
let currentFill = false;
let colorPic = false;

const stopPainting = () => {
  painting = false;
};

const startPainting = () => {
  if (filling === false) {
    painting = true;
  }
};

const beginPath = (x, y) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
};

const strokePath = (x, y, color = null) => {
  let currentColor = ctx.strokeStyle;
  if (color !== null) {
    ctx.strokeStyle = color;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  ctx.strokeStyle = currentColor;
};

const onMouseMove = (event) => {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    beginPath(x, y);
    getSocket().emit(window.events.beginPath, { x, y });
  } else {
    strokePath(x, y);
    getSocket().emit(window.events.strokePath, {
      x,
      y,
      color: ctx.strokeStyle,
    });
  }
};

const clearEffect = () => {
  const ary = Array.from(colors);
  ary.map((element) => {
    element.classList.toggle("currentPos", false);
    return element;
  });
};

const handleColorClick = (event) => {
  clearEffect();
  const color = event.target.style.backgroundColor;
  const { target } = event;
  target.classList.toggle("currentPos", true);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
};

const fill = (color = null) => {
  let currentColor = ctx.fillStyle;
  if (color !== null) {
    ctx.fillStyle = color;
  }
  ctx.fillRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
  ctx.fillStyle = currentColor;
};

const handleCanvasClick = () => {
  if (filling === true) {
    fill();
    getSocket().emit(window.events.fill, { color: ctx.fillStyle });
  }
};

const handleCM = (event) => {
  event.preventDefault();
};

const handlePencil = () => {
  currentPencil = true;
  if (currentPencil === true) {
    fillCanvas.classList.toggle("currentPos", false);
    mode.classList.toggle("currentPos", true);
  }
  filling = false;
};

const handleFillCanvas = () => {
  currentFill = true;
  if (currentFill === true) {
    mode.classList.toggle("currentPos", false);
    fillCanvas.classList.toggle("currentPos", true);
  }

  filling = true;
};

const clear = () => {
  ctx.clearRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);
  getSocket().emit(window.events.clearCanvas);
};

Array.from(colors).forEach((color) =>
  color.addEventListener("click", handleColorClick)
);

if (mode) {
  mode.addEventListener("click", handlePencil);
}

if (fillCanvas) {
  fillCanvas.addEventListener("click", handleFillCanvas);
}

if (clearCanvas) {
  clearCanvas.addEventListener("click", clear);
}

export const handleBeganPath = ({ x, y }) => beginPath(x, y);
export const handleStrokedPath = ({ x, y, color }) => strokePath(x, y, color);
export const handleFilled = ({ color }) => fill(color);

export const disableCanvas = () => {
  canvas.removeEventListener("mousemove", onMouseMove);
  canvas.removeEventListener("mousedown", startPainting);
  canvas.removeEventListener("mouseup", stopPainting);
  canvas.removeEventListener("mouseleave", stopPainting);
  canvas.removeEventListener("click", handleCanvasClick);
};

export const enableCanvas = () => {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
};

export const hideControls = () => (controls.style.display = "none");

export const showControls = () => (controls.style.display = "flex");

export const showTimebox = () => (timebox.style.display = "flex");

export const hideTimebox = () => (timebox.style.display = "none");

export const resetCanvas = () => fill("#fff");

export const handleClearedCanvas = () =>
  ctx.clearRect(0, 0, CANVAS_SIZE_WIDTH, CANVAS_SIZE_HEIGHT);

if (canvas) {
  canvas.addEventListener("contextmenu", handleCM);
  hideControls();
}
