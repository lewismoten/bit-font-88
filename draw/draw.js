
(function(win) {

  var characterMap;
  var glyph;
  var selectedCode = 0;
  var characterMapScale = 2;
  var glyphScale = 16;
  var gridColumns = 16;
  var gridRows = 16;
  var glyphWidth = 8;
  var glyphHeight = 8;
  var glyphCount = 256;

  win.addEventListener("load", startProgram);

  function startProgram() {

    document.getElementById("resetSampleTextButton").addEventListener("click", resetSampleText);
    resetSampleText();
    characterMap = document.getElementById("characterMap");
    characterMap.width = gridColumns * glyphWidth * characterMapScale;
    characterMap.height = gridRows * glyphHeight * characterMapScale;
    characterMap.addEventListener("click", onClickCharacterMap);
    glyph = document.getElementById("glyph");
    glyph.width = glyphWidth * glyphScale;
    glyph.height = glyphHeight * glyphScale;
    glyph.addEventListener("click", onClickGlyph);
    selectGlyph(0);
    drawCharacterMap();
  }

  function updateFiles() {
    document.getElementById("downloadJson").href = "data:," + encodeURIComponent(JSON.stringify(data, null, "  "));
    var bytes = [];
    for(var index = 0; index < glyphCount; index++) {
      charData = getData(index);
      bytes = bytes.concat(charData.bits);
    }
    document.getElementById("downloadBinary").href = "data:," + bytes.map(toURI).join("");
  }

  function getIndex(column, row) {
    return (column * gridRows) + row;
  }
  function getCell(index) {

    var row = index % gridRows;
    var column = (index - row) / gridRows;
    return { column: column, row: row };
  }
  function onClickCharacterMap(mouseEvent) {
    var x = mouseEvent.offsetX;
    var y = mouseEvent.offsetY;
    var col = Math.floor(x / (glyphWidth * characterMapScale));
    var row = Math.floor(y / (glyphHeight * characterMapScale));
    var index = getIndex(col, row);
    selectGlyph(index);
  }

  function onClickGlyph(mouseEvent) {
    var x = mouseEvent.offsetX;
    var y = mouseEvent.offsetY;
    var col = Math.floor(x / glyphScale);
    var row = Math.floor(y / glyphScale);
    if (col >= glyphWidth) col = glyphWidth - 1;
    if (row >= glyphHeight) row = glyphHeight - 1;
    var charData = getData(selectedCode);
    charData.bits[row] = toggleBit(charData.bits[row], col);
    drawGlyph(selectedCode);
    drawCharacterMap();
  }

  function toggleBit(byte, position) {
    var mask = 1 << (7 - position);
    return byte ^ mask;
  }

  function getData(code) {
    var charData = data.chars.find(function(charData) { return charData.code === code; });
    if (!charData) {
      charData = {
        code: code,
        bits: []
      };
      data.chars.push(charData);
    }
    if (!charData.bits) {
      charData.bits = [];
    }
    while(charData.bits.length < glyphHeight) {
      charData.bits.push(0);
    }
    return charData;
  }
  function drawGlyph(index) {
    var charData = getData(index);
    var bytes = charData.bits;

    var ctx = glyph.getContext("2d");
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 0, glyph.width, glyph.height);
    drawBits(ctx, 0, 0, bytes, glyphScale);

    document.getElementById("glyphDataBytes").value = bytes;
    document.getElementById("glyphDataHex").value = bytes.map(toHexL).join(", ");
  }

  function selectGlyph(code) {
    selectedCode = code;

    document.getElementById("glyphCode").innerText = code;
    document.getElementById("glyphChar").innerText = String.fromCharCode(code);
    document.getElementById("glyphHex").innerText = toHex(code);
    document.getElementById("glyphBin").innerText = toBits(code);
    document.getElementById("glyphOct").innerText = toOct(code);

    var charData = getData(code);
    drawGlyph(code);
    if (charData) {
      document.getElementById("glyphName").innerText = charData.name || "";
      document.getElementById("glyphType").innerText = charData.type || "";
      document.getElementById("glyphSubType").innerText = charData.subType || "";
    } else {
      document.getElementById("glyphName").innerText = "";
      document.getElementById("glyphType").innerText = "";
      document.getElementById("glyphSubType").innerText = "";
    }
  }

  function toURI(value) {
    return "%" + toHex(value);
  }
  function toHexL(value) {
    return "0x" + toHex(value);
  }
  function toHex(value) {
    return ('0' + value.toString(16)).slice(-2).toUpperCase();
  }
  function toOct(value) {
    return ('00' + value.toString(8)).slice(-3);
  }
  function toBits(value) {
     return ('0000000' + value.toString(2)).slice(-8);
  }
  function drawCharacterMap() {
    updateFiles();
    var ctx = characterMap.getContext("2d");
    // Paint background
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 0, characterMap.width, characterMap.height);

    data.chars.forEach(function(charData) {
      var cell = getCell(charData.code);
      drawBits(ctx, cell.column * glyphWidth, cell.row * glyphHeight, charData.bits, characterMapScale);
    });

  }

  function drawBits(ctx, x, y, bytes, scale) {
    if (bytes === undefined) return;
    if (scale === undefined) scale = 1;
    ctx.fillStyle = "#eeeeee";
    for(var row = 0; row < glyphHeight; row++) {
      // The the byte for the current line
      var line = bytes[row];
      for(var col = 0; col < glyphWidth; col++) {
        // Is bit for this column turned on in the line?
        var drawDot = (line & (1 << (6 - (col - 1)))) > 0;
        if(drawDot) {
          // Draw our dot!
          ctx.fillRect((x + col) * scale, (y + row) * scale, scale, scale);
        }
      }
    }

  }

  function resetSampleText() {
    var text = [
      "The quick brown fox jumped over the lazy dog.",
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      "abcdefghijklmnopqrstuvwxyz",
      "1234567890  +=!@#$%^&*",
      "_-\\|;:?/.,~  \'\"\`",
      "<> [] {} ()"
    ].join("\n");
    document.getElementById("sampleText").value = text;
  }

})(this)
