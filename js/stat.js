"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var LEFT_MARGIN = 130;
var FONT_TOP_MARGIN = 265;
var BARC_HART_MARGIN = 230;
var BARC_HART_WIDTH = 50;
var GAP = 50;
var bar_hart_height = -CLOUD_WIDTH + CLOUD_HEIGHT;
var CALOR_BLACK = "#000";

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElemrnt = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, nameArr, times, color) {
  renderCloud(ctx, 110, 20, "rgba(0, 0, 0, 0.7)");
  renderCloud(ctx, 100, 10, "#fff");

  ctx.fillStyle = "#000000";
  ctx.font = "16px PT Mono";

  ctx.fillText("Ура вы победили!", 150, 50);
  ctx.fillText("Список результатов:", 150, 30);

  var maxTime = getMaxElemrnt(times);
  for (var i = 0; i < nameArr.length; i++) {
    ctx.fillStyle = CALOR_BLACK;
    if (nameArr[i] === "Вы") {
      ctx.fillStyle = "rgba(255, 0, 0, 1)";
    } else {
      ctx.fillStyle =
        "hsl(255, " + Math.floor(Math.random() * 100) + "%, 50%, 1)";
    }
    ctx.fillText(
      nameArr[i],
      LEFT_MARGIN + (GAP + BARC_HART_WIDTH) * i,
      FONT_TOP_MARGIN
    );

    ctx.fillRect(
      LEFT_MARGIN + (GAP + BARC_HART_WIDTH) * i,
      BARC_HART_MARGIN,
      BARC_HART_WIDTH,
      (bar_hart_height * times[i]) / maxTime
    );

    ctx.fillText(
      Math.floor(times[i]),
      LEFT_MARGIN + (GAP + BARC_HART_WIDTH) * i,
      (bar_hart_height * times[i]) / maxTime + BARC_HART_MARGIN - 10
    );
  }
};
