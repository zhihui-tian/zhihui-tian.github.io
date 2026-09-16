// Draws a voxel-style grain map (nearest-seed labelling on a coarse grid) into
// every <canvas data-grain>. Redraws when the color theme changes.
(function () {
  var LIGHT = ["#e3e7ee", "#d2d8e3", "#c4ccda", "#eef1f5", "#b7c0d1", "#dadfe8"];
  var DARK = ["#262a33", "#2e333d", "#353b47", "#20242b", "#3b4250", "#2a2f39"];

  function draw(canvas) {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    var palette = dark ? DARK : LIGHT;
    var edge = dark ? "rgba(255,255,255,0.12)" : "rgba(21,26,33,0.16)";
    var cell = 5;
    var W = canvas.width, H = canvas.height, cw = Math.round(W / cell), ch = Math.round(H / cell);
    var n = Math.round((cw * ch) / 38), seeds = [], s = 7;
    function rnd() { s = (s * 16807) % 2147483647; return s / 2147483647; }
    for (var i = 0; i < n; i++) seeds.push([rnd() * cw, rnd() * ch, palette[i % palette.length]]);
    var lab = new Int16Array(cw * ch);
    for (var y = 0; y < ch; y++) {
      for (var x = 0; x < cw; x++) {
        var best = 0, bd = 1e9;
        for (var k = 0; k < n; k++) {
          var dx = seeds[k][0] - x, dy = seeds[k][1] - y, d = dx * dx + dy * dy;
          if (d < bd) { bd = d; best = k; }
        }
        lab[y * cw + x] = best;
      }
    }
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, W, H);
    for (var yy = 0; yy < ch; yy++) {
      for (var xx = 0; xx < cw; xx++) {
        var l = lab[yy * cw + xx];
        var isEdge = (xx + 1 < cw && lab[yy * cw + xx + 1] !== l) || (yy + 1 < ch && lab[(yy + 1) * cw + xx] !== l);
        ctx.fillStyle = isEdge ? edge : seeds[l][2];
        ctx.fillRect(xx * cell, yy * cell, cell, cell);
      }
    }
  }

  function all() { document.querySelectorAll("canvas[data-grain]").forEach(draw); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", all); else all();
  if (window.MutationObserver) {
    new MutationObserver(all).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  }
})();
