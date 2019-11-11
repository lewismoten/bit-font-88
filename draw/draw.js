
(function(win) {

  var systemAsciiTable;
  var lowerAsciiTable;
  var upperAsciiTable;

  win.addEventListener("load", startProgram);

  function startProgram() {
    document.getElementById("resetSampleTextButton").addEventListener("click", resetSampleText);
    resetSampleText();
    setupAsciiTable();
    showLower();
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
    array.push("0x" + ('0' + charCode.toString(16)).slice(-2).toUpperCase());
    array.push(('0000000' + charCode.toString(2)).slice(-8));

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
