
(function(win) {

  var systemAsciiTable;
  var lowerAsciiTable;
  var upperAsciiTable;
  var characterMap;
  var glyph;
  var selectedCode = 0;

  win.addEventListener("load", startProgram);

  function startProgram() {

    document.getElementById("resetSampleTextButton").addEventListener("click", resetSampleText);
    resetSampleText();
    setupAsciiTable();
    characterMap = document.getElementById("characterMap");
    characterMap.addEventListener("click", onClickCharacterMap);
    glyph = document.getElementById("glyph");
    glyph.addEventListener("click", onClickGlyph);
    drawCharacterMap();
    showLower();
    selectGlyph(0);
  }

  function onClickCharacterMap(mouseEvent) {
    var x = mouseEvent.offsetX;
    var y = mouseEvent.offsetY;
    var col = Math.floor(x / 8);
    var row = Math.floor(y / 8);
    var code = (col * 16) + row;
    selectGlyph(code);
  }

  function onClickGlyph(mouseEvent) {
    var x = mouseEvent.offsetX;
    var y = mouseEvent.offsetY;
    var col = Math.floor(x / 8);
    var row = Math.floor(y / 8);
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
    var charData = data.chars.find(function(charData) { return charData.code === selectedCode; });
    if (!charData) {
      charData = {
        code: code,
        bits: [0,0,0,0,0,0,0,0]
      };
      data.chars.push(charData);
    }
    if (!charData.bits) {
      charData.bits = [0,0,0,0,0,0,0,0];
    }
    return charData;
  }
  function drawGlyph(code) {
    var charData = getData(code);
    var bytes = charData.bits;

    var ctx = glyph.getContext("2d");
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 0, glyph.width, glyph.height);
    drawBits(ctx, 0, 0, bytes, 8);

    document.getElementById("glyphDataBytes").value = bytes;
    document.getElementById("glyphDataHex").value = bytes.map(toHexL).join(", ");
    document.getElementById("glyphDataBits").value = bytes.map(toBits).join("\r\n");
  }

  function selectGlyph(code) {
    selectedCode = code;

    document.getElementById("glyphCode").innerText = code;
    document.getElementById("glyphChar").innerText = String.fromCharCode(code);
    document.getElementById("glyphHex").innerText = toHex(code);
    document.getElementById("glyphBin").innerText = toBits(code);
    document.getElementById("glyphOct").innerText = ('00' + code.toString(8)).slice(-3);

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

  function toHexL(value) {
    return "0x" + toHex(value);
  }
  function toHex(value) {
    return ('0' + value.toString(16)).slice(-2).toUpperCase();
  }
  function toBits(value) {
     return ('0000000' + value.toString(2)).slice(-8);
  }
  function drawCharacterMap() {
    var ctx = characterMap.getContext("2d");
    // Paint background
    ctx.fillStyle = "#0000ff";
    ctx.fillRect(0, 0, characterMap.width, characterMap.height);

    data.chars.forEach(function(charData) {
      var charCode = charData.code;
      var col = charCode % 16;
      var row = (charCode - col) / 16;
      if (charData.bits.length != 8)  {
        console.log("byte length bad", charData.name, charData.code, charData.bits);
      }
      drawBits(ctx, row * 8, col * 8, charData.bits);
    });

  }

  function drawBits(ctx, x, y, bytes, scale) {
    if (bytes === undefined) return;
    if (scale === undefined) scale = 1;
    ctx.fillStyle = "#eeeeee";
    for(var row = 0; row < bytes.length; row++) {
      // The the byte for the current line
      var line = bytes[row];
      for(var col = 0; col < 8; col++) {
        // Is bit for this column turned on in the line?
        var drawDot = (line & (1 << (6 - (col - 1)))) > 0;
        if(drawDot) {
          // Draw our dot!
          ctx.fillRect((x + col) * scale, (y + row) * scale, scale, scale);
        }
      }
    }

  }

  function showAscii(visibleTable) {
    [systemAsciiTable, lowerAsciiTable, upperAsciiTable].forEach(show);
    function show(table) {
      table.className = table === visibleTable ? "visible" : "hidden";
    }
  }
  function showLower() {
    showAscii(lowerAsciiTable);
  }
  function showUpper() {
    showAscii(upperAsciiTable);
  }
  function showSystem() {
    showAscii(systemAsciiTable);
  }

  function setupAsciiTable() {
    document.getElementById("systemAsciiButton").addEventListener("click", showSystem);
    document.getElementById("lowerAsciiButton").addEventListener("click", showLower);
    document.getElementById("upperAsciiButton").addEventListener("click", showUpper);

    systemAsciiTable = document.getElementById("systemAsciiTable");
    lowerAsciiTable = document.getElementById("lowerAsciiTable");
    upperAsciiTable = document.getElementById("upperAsciiTable");

    var headers = ["Char", "Code", "Hex", "Binary"];
    var classes = ["char-char", "char-code", "char-hex", "char-binary"];

    addTableRow(systemAsciiTable, repeatedArrayValues(headers, 2), repeatedArrayValues(classes, 2))
    addTableRow(lowerAsciiTable, repeatedArrayValues(headers, 6), repeatedArrayValues(classes, 6));
    addTableRow(upperAsciiTable, repeatedArrayValues(headers, 8), repeatedArrayValues(classes, 8));

    // build out each row
    for(var row = 0; row < 16; row++) {
      var lowerValues = [];
      var upperValues = [];
      var systemValues = [];
      // Loop through the columns in that row
      for (var col = 0; col < 16; col++) {
        var charCode = (col * 16) + row;

        if (col < 2) {
          addAsciiCells(systemValues, charCode);
        } else if (col < 8) {
          addAsciiCells(lowerValues, charCode);
        } else {
          addAsciiCells(upperValues, charCode);
        }
      }
      // Add row to AsciiTable
      addTableRow(systemAsciiTable, systemValues, repeatedArrayValues(classes, 2));
      addTableRow(lowerAsciiTable, lowerValues, repeatedArrayValues(classes, 6));
      addTableRow(upperAsciiTable, upperValues, repeatedArrayValues(classes, 8));
    }
  }

  function addAsciiCells(array, charCode) {
    array.push(String.fromCharCode(charCode));
    array.push(charCode);
    array.push(toHex(charCode));
    array.push(toBits(charCode));

  }

  function repeatedArrayValues(values, count) {
    var a = [];
    for(var i = 0; i < count; i++) {
      for (var j = 0; j < values.length; j++) {
        a.push(values[j]);
      }
    }
    return a;
  }

  function addTableRow(table, cells, classes) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for(var i = 0; i < cells.length; i++) {
      var cell = document.createElement("td");
      cell.className = classes[i];
      cell.innerText = cells[i];
      row.appendChild(cell);
    }
    return row;
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
