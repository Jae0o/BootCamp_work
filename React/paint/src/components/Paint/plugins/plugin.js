export class Plugin {
  canvas = undefined;

  constructor(initalValues) {
    this.name = "";

    Object.assign(this, initalValues);
  }

  draw(data) {
    const context = this.canvas.getContext("2d");

    context.globalCompositeOpertation = "source-over";
    context.strokeStyle = data.color;
    context.lineCap = "round";
    context.lineJoin = "round";
    context.shadowColor = "";
    context.shadowOffsetX = 0;
    context.shadowBlur = 0;
    context.lineWidth = data.lineWidth;
    context.textAlign = "left";
    context.textBaseline = "top";
    context.direction = "ltr";
    context.lineDashOffset = 0;
    context.miterLimit = 0;
    context.globalAlpha = 1;
    context.fillStyle = data.color;
  }
}
