
var LINE_BLANK = 0b00000000;
var CHAR_EMPTY = [LINE_BLANK, LINE_BLANK, LINE_BLANK, LINE_BLANK, LINE_BLANK, LINE_BLANK, LINE_BLANK, LINE_BLANK]

var data = {
  width: 8,
  height: 8,
  chars: [
    {
      code: 0,
      type: "system",
      abbr: "nul",
      name: "null",
      bits: CHAR_EMPTY
    },
    {
      code: 1,
      type: "system",
      abbr: "som",
      name: "start of heading",
      bits: CHAR_EMPTY
    },
    {
      code: 2,
      type: "system",
      abbr: "stx",
      name: "start of text",
      bits: CHAR_EMPTY
    },
    {
      code: 3,
      type: "system",
      abbr: "etx",
      name: "end of text",
      bits: CHAR_EMPTY
    },
    {
      code: 4,
      type: "system",
      abbr: "eot",
      name: "end of transmission",
      bits: CHAR_EMPTY
    },
    {
      code: 5,
      type: "system",
      abbr: "enq",
      name: "enquery",
      bits: CHAR_EMPTY
    },
    {
      code: 6,
      type: "system",
      abbr: "ack",
      name: "acknowledgement",
      bits: CHAR_EMPTY
    },
    {
      code: 7,
      type: "system",
      abbr: "bel",
      name: "bell",
      bits: CHAR_EMPTY
    },
    {
      code: 8,
      type: "system",
      abbr: "bs",
      name: "backspace",
      bits: CHAR_EMPTY
    },
    {
      code: 9,
      type: "system",
      abbr: "ht",
      name: "horizontal tab",
      bits: CHAR_EMPTY
    },
    {
      code: 10,
      type: "system",
      abbr: "lf",
      name: "line feed",
      bits: CHAR_EMPTY
    },
    {
      code: 11,
      type: "system",
      abbr: "vt",
      name: "vertical tab",
      bits: CHAR_EMPTY
    },
    {
      code: 12,
      type: "system",
      abbr: "ff",
      name: "form feed",
      bits: CHAR_EMPTY
    },
    {
      code: 13,
      type: "system",
      abbr: "cr",
      name: "carriage return",
      bits: CHAR_EMPTY
    },
    {
      code: 14,
      type: "system",
      abbr: "so",
      name: "shift out",
      bits: CHAR_EMPTY
    },
    {
      code: 15,
      type: "system",
      abbr: "si",
      name: "shift in",
      bits: CHAR_EMPTY
    },
    {
      code: 16,
      type: "system",
      abbr: "dle",
      name: "data link escape",
      bits: CHAR_EMPTY
    },
    {
      code: 17,
      type: "system",
      abbr: "dc1",
      name: "device control 1 (xon)",
      bits: CHAR_EMPTY
    },
    {
      code: 18,
      type: "system",
      abbr: "dc2",
      name: "device control 2",
      bits: CHAR_EMPTY
    },
    {
      code: 19,
      type: "system",
      abbr: "dc3",
      name: "device control 3 (off)",
      bits: CHAR_EMPTY
    },
    {
      code: 20,
      type: "system",
      abbr: "dc3",
      name: "device control 4",
      bits: CHAR_EMPTY
    },
    {
      code: 21,
      type: "system",
      abbr: "nak",
      name: "negative acknoledgement",
      bits: CHAR_EMPTY
    },
    {
      code: 22,
      type: "system",
      abbr: "syn",
      name: "synchronous idle",
      bits: CHAR_EMPTY
    },
    {
      code: 23,
      type: "system",
      abbr: "etb",
      name: "end of transmission block",
      bits: CHAR_EMPTY
    },
    {
      code: 24,
      type: "system",
      abbr: "can",
      name: "cancel",
      bits: CHAR_EMPTY
    },
    {
      code: 25,
      type: "system",
      abbr: "em",
      name: "end of medium",
      bits: CHAR_EMPTY
    },
    {
      code: 26,
      type: "system",
      abbr: "sub",
      name: "substitute",
      bits: CHAR_EMPTY
    },
    {
      code: 27,
      type: "system",
      abbr: "esc",
      name: "escape",
      bits: CHAR_EMPTY
    },
    {
      code: 28,
      type: "system",
      abbr: "fs",
      name: "file separator",
      bits: CHAR_EMPTY
    },
    {
      code: 29,
      type: "system",
      abbr: "gs",
      name: "group separator",
      bits: CHAR_EMPTY
    },
    {
      code: 30,
      type: "system",
      abbr: "rs",
      name: "record separator",
      bits: CHAR_EMPTY
    },
    {
      code: 31,
      type: "system",
      abbr: "us",
      name: "unit separator",
      bits: CHAR_EMPTY
    },
    {
      code: 32,
      type: "printable",
      name: "space",
      bits: CHAR_EMPTY
    },
    {
      code: 33,
      type: "printable",
      name: "exclamation mark",
      bits: [
        0b00000000,
        0b00010000,
        0b00010000,
        0b00010000,
        0b00010000,
        0b00000000,
        0b00010000,
        0b00000000
      ]
    },
    {
      code: 34,
      type: "printable",
      name: "quotation marks",
      bits: [
        0b00000000,
        0b01101100,
        0b01101100,
        0b00100100,
        0b01001000,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 35,
      type: "printable",
      name: "number sign",
      bits: [
        0b00000000,
        0b00100100,
        0b01111110,
        0b00100100,
        0b00100100,
        0b01111110,
        0b00100100,
        0b00000000
      ]
    },
    {
      code: 36,
      type: "printable",
      name: "dollar sign",
      bits: [
        0b00010000,
        0b00111100,
        0b01010010,
        0b00110000,
        0b00011100,
        0b01010010,
        0b00111100,
        0b00010000
      ]
    },
    {
      code: 37,
      type: "printable",
      name: "percent sign",
      bits: [
        0b00000000,
        0b01100010,
        0b01010100,
        0b00101000,
        0b00010100,
        0b00101010,
        0b01000110,
        0b00000000
      ]
    },
    {
      code: 38,
      type: "printable",
      name: "ampersand",
      bits: [
        0b00110000,
        0b01010000,
        0b01100000,
        0b01010000,
        0b01001010,
        0b01000100,
        0b00111010,
        0b00000000
      ]
    },
    {
      code: 39,
      type: "printable",
      name: "apostrophe",
      bits: [
        0b00000000,
        0b00110000,
        0b00110000,
        0b00010000,
        0b00100000,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 40,
      type: "printable",
      name: "opening parentheses",
      bits: [
        0b00000000,
        0b00001000,
        0b00110000,
        0b00100000,
        0b00100000,
        0b00110000,
        0b00001000,
        0b00000000
      ]
    },
    {
      code: 41,
      type: "printable",
      name: "closing parentheses",
      bits: [
        0b00000000,
        0b00100000,
        0b00011000,
        0b00001000,
        0b00001000,
        0b00011000,
        0b00100000,
        0b00000000
      ]
    },
    {
      code: 42,
      type: "printable",
      name: "asterisk",
      bits: [
        0b00000000,
        0b00010000,
        0b01010100,
        0b00111000,
        0b00111000,
        0b01010100,
        0b00010000,
        0b00000000
      ]
    },
    {
      code: 43,
      type: "printable",
      name: "plus sign",
      bits: [
        0b00000000,
        0b00000000,
        0b00010000,
        0b00010000,
        0b01111100,
        0b00010000,
        0b00010000,
        0b00000000
      ]
    },
    {
      code: 44,
      type: "printable",
      name: "comma",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b01100000,
        0b01100000,
        0b00100000,
        0b01000000
      ]
    },
    {
      code: 45,
      type: "printable",
      name: "minus sign",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b01111100,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 46,
      type: "printable",
      name: "period sign",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00100000,
        0b00000000
      ]
    },
    {
      code: 47,
      type: "printable",
      name: "forward slash",
      bits: [
        0b00000000,
        0b00000010,
        0b00000100,
        0b00001000,
        0b00010000,
        0b00100000,
        0b01000000,
        0b00000000
      ]
    },
    {
      code: 48,
      type: "printable",
      subtype: "number",
      name: "zero",
      bits: [
        0b00000000,
        0b00011100,
        0b00100110,
        0b00101010,
        0b00101010,
        0b00110010,
        0b00011100,
        0b00000000
      ]
    },
    {
      code: 49,
      type: "printable",
      subtype: "number",
      name: "one",
      bits: [
        0b00000000,
        0b00001000,
        0b00011000,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00011100,
        0b00000000
      ]
    },
    {
      code: 50,
      type: "printable",
      subtype: "number",
      name: "two",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b00000010,
        0b00111100,
        0b01000000,
        0b01111110,
        0b00000000
      ]
    },
    {
      code: 51,
      type: "printable",
      subtype: "number",
      name: "three",
      bits: [
        0b00000000,
        0b01111110,
        0b00000010,
        0b00001000,
        0b00000100,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 52,
      type: "printable",
      subtype: "number",
      name: "four",
      bits: [
        0b00000000,
        0b00000100,
        0b00001100,
        0b00010100,
        0b00100100,
        0b01111110,
        0b00000100,
        0b00000000
      ]
    },
    {
      code: 53,
      type: "printable",
      subtype: "number",
      name: "five",
      bits: [
        0b00000000,
        0b01111110,
        0b01000000,
        0b00111100,
        0b00000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 54,
      type: "printable",
      subtype: "number",
      name: "six",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01111100,
        0b01000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 55,
      type: "printable",
      subtype: "number",
      name: "seven",
      bits: [
        0b00000000,
        0b01111110,
        0b00000010,
        0b00000010,
        0b00000100,
        0b00000100,
        0b00000100,
        0b00000000
      ]
    },
    {
      code: 56,
      type: "printable",
      subtype: "number",
      name: "eight",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b00111100,
        0b01000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 57,
      type: "printable",
      subtype: "number",
      name: "nine",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01000010,
        0b00111110,
        0b00000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 58,
      type: "printable",
      subtype: "symbol",
      name: "colon",
      bits: [
        0b00000000,
        0b00011000,
        0b00011000,
        0b00000000,
        0b00011000,
        0b00011000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 59,
      type: "printable",
      subtype: "symbol",
      name: "semicolon",
      bits: [
        0b00000000,
        0b00011000,
        0b00011000,
        0b00000000,
        0b00011000,
        0b00011000,
        0b00100000,
        0b00000000
      ]
    },
    {
      code: 60,
      type: "printable",
      subtype: "symbol",
      name: "less-than",
      bits: [
        0b00000000,
        0b00000000,
        0b00000110,
        0b00011000,
        0b01100000,
        0b00011000,
        0b00000110,
        0b00000000
      ]
    },
    {
      code: 61,
      type: "printable",
      subtype: "symbol",
      name: "equals sign",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b01111100,
        0b00000000,
        0b01111100,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 62,
      type: "printable",
      subtype: "symbol",
      name: "greater-than",
      bits: [
        0b00000000,
        0b00000000,
        0b01100000,
        0b00011000,
        0b00000110,
        0b00011000,
        0b01100000,
        0b00000000
      ]
    },
    {
      code: 63,
      type: "printable",
      subtype: "symbol",
      name: "question mark",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b00000100,
        0b00001000,
        0b00000000,
        0b00001000,
        0b00000000
      ]
    },
    {
      code: 64,
      type: "printable",
      subtype: "symbol",
      name: "at sign",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b10011010,
        0b10101010,
        0b10011100,
        0b01000000,
        0b00111000
      ]
    },
    {
      code: 65,
      type: "printable",
      subtype: "letter",
      name: "A",
      bits: [
        0b00000000,
        0b00011000,
        0b00100100,
        0b01000010,
        0b01111110,
        0b01000010,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 66,
      type: "printable",
      subtype: "letter",
      name: "B",
      bits: [
        0b00000000,
        0b01111000,
        0b01000100,
        0b01111100,
        0b01000010,
        0b01000010,
        0b01111100,
        0b00000000
      ]
    },
    {
      code: 67,
      type: "printable",
      subtype: "letter",
      name: "C",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01000000,
        0b01000000,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 68,
      type: "printable",
      subtype: "letter",
      name: "D",
      bits: [
        0b00000000,
        0b01111000,
        0b01000100,
        0b01000010,
        0b01000010,
        0b01000100,
        0b01111000,
        0b00000000
      ]
    },
    {
      code: 69,
      type: "printable",
      subtype: "letter",
      name: "E",
      bits: [
        0b00000000,
        0b01111110,
        0b01000000,
        0b01110000,
        0b01000000,
        0b01000000,
        0b01111110,
        0b00000000
      ]
    },
    {
      code: 70,
      type: "printable",
      subtype: "letter",
      name: "F",
      bits: [
        0b00000000,
        0b01111110,
        0b01000000,
        0b01110000,
        0b01000000,
        0b01000000,
        0b01000000,
        0b00000000
      ]
    },
    {
      code: 71,
      type: "printable",
      subtype: "letter",
      name: "G",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01000000,
        0b01000110,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 72,
      type: "printable",
      subtype: "letter",
      name: "H",
      bits: [
        0b00000000,
        0b01000010,
        0b01000010,
        0b01000010,
        0b01111110,
        0b01000010,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 73,
      type: "printable",
      subtype: "letter",
      name: "I",
      bits: [
        0b00000000,
        0b00111110,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00111110,
        0b00000000
      ]
    },
    {
      code: 74,
      type: "printable",
      subtype: "letter",
      name: "J",
      bits: [
        0b00000000,
        0b00001110,
        0b00000010,
        0b00000010,
        0b00000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 75,
      type: "printable",
      subtype: "letter",
      name: "K",
      bits: [
        0b00000000,
        0b01000100,
        0b01001000,
        0b01010000,
        0b01101000,
        0b01000100,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 76,
      type: "printable",
      subtype: "letter",
      name: "L",
      bits: [
        0b00000000,
        0b01000000,
        0b01000000,
        0b01000000,
        0b01000000,
        0b01000000,
        0b01111100,
        0b00000000
      ]
    },
    {
      code: 77,
      type: "printable",
      subtype: "letter",
      name: "M",
      bits: [
        0b00000000,
        0b01000010,
        0b01100110,
        0b01011010,
        0b01000010,
        0b01000010,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 78,
      type: "printable",
      subtype: "letter",
      name: "N",
      bits: [
        0b00000000,
        0b01000010,
        0b01100010,
        0b01010010,
        0b01001010,
        0b01000110,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 79,
      type: "printable",
      subtype: "letter",
      name: "O",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01000010,
        0b01000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 80,
      type: "printable",
      subtype: "letter",
      name: "P",
      bits: [
        0b00000000,
        0b01111100,
        0b01000010,
        0b01000010,
        0b01111100,
        0b01000000,
        0b01000000,
        0b00000000
      ]
    },
    {
      code: 81,
      type: "printable",
      subtype: "letter",
      name: "Q",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b01000010,
        0b01001010,
        0b01000110,
        0b00111110,
        0b00000001
      ]
    },
    {
      code: 82,
      type: "printable",
      subtype: "letter",
      name: "R",
      bits: [
        0b00000000,
        0b01111100,
        0b01000010,
        0b01000010,
        0b01111100,
        0b01000100,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 83,
      type: "printable",
      subtype: "letter",
      name: "S",
      bits: [
        0b00000000,
        0b00111100,
        0b01000010,
        0b00110000,
        0b00001100,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 84,
      type: "printable",
      subtype: "letter",
      name: "T",
      bits: [
        0b00000000,
        0b00111110,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00000000
      ]
    },
    {
      code: 85,
      type: "printable",
      subtype: "letter",
      name: "U",
      bits: [
        0b00000000,
        0b01000010,
        0b01000010,
        0b01000010,
        0b01000010,
        0b01000010,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 86,
      type: "printable",
      subtype: "letter",
      name: "V",
      bits: [
        0b00000000,
        0b01000010,
        0b01000010,
        0b01000010,
        0b00100100,
        0b00100100,
        0b00011000,
        0b00000000
      ]
    },
    {
      code: 87,
      type: "printable",
      subtype: "letter",
      name: "W",
      bits: [
        0b00000000,
        0b01000010,
        0b01000010,
        0b01000010,
        0b01011010,
        0b01100110,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 88,
      type: "printable",
      subtype: "letter",
      name: "X",
      bits: [
        0b00000000,
        0b01000010,
        0b00100100,
        0b00011000,
        0b00011000,
        0b00100100,
        0b01000010,
        0b00000000
      ]
    },
    {
      code: 89,
      type: "printable",
      subtype: "letter",
      name: "Y",
      bits: [
        0b00000000,
        0b00100010,
        0b00100010,
        0b00010100,
        0b00001000,
        0b00001000,
        0b00001000,
        0b00000000
      ]
    },
    {
      code: 90,
      type: "printable",
      subtype: "letter",
      name: "Z",
      bits: [
        0b00000000,
        0b01111110,
        0b00000100,
        0b00001000,
        0b00010000,
        0b00100000,
        0b01111110,
        0b00000000
      ]
    },
    {
      code: 91,
      type: "printable",
      subtype: "symbol",
      name: "opening square bracket",
      bits: [
        0b00111000,
        0b00100000,
        0b00100000,
        0b00100000,
        0b00100000,
        0b00100000,
        0b00100000,
        0b00111000
      ]
    },
    {
      code: 92,
      type: "printable",
      subtype: "symbol",
      name: "backward slash",
      bits: [
        0b00000000,
        0b01000000,
        0b00100000,
        0b00010000,
        0b00001000,
        0b00000100,
        0b00000010,
        0b00000000
      ]
    },
    {
      code: 93,
      type: "printable",
      subtype: "symbol",
      name: "closing square bracket",
      bits: [
        0b00011100,
        0b00000100,
        0b00000100,
        0b00000100,
        0b00000100,
        0b00000100,
        0b00000100,
        0b00011100
      ]
    },
    {
      code: 94,
      type: "printable",
      subtype: "symbol",
      name: "carot",
      bits: [
        0b00000000,
        0b00010000,
        0b00101000,
        0b01000100,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 95,
      type: "printable",
      subtype: "symbol",
      name: "underscore",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b11111111
      ]
    },
    {
      code: 96,
      type: "printable",
      subtype: "symbol",
      name: "grave accent",
      bits: [
        0b00000000,
        0b01100000,
        0b00110000,
        0b00010000,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 97,
      type: "printable",
      subtype: "letter",
      name: "a",
      bits: [
        0b00000000,
        0b00000000,
        0b00111100,
        0b00000010,
        0b00111110,
        0b01000010,
        0b00111110,
        0b00000000
      ]
    },
    {
      code: 98,
      type: "printable",
      subtype: "letter",
      name: "b",
      bits: [
        0b00000000,
        0b01000000,
        0b01000000,
        0b01111000,
        0b01000100,
        0b01000100,
        0b01111000,
        0b00000000
      ]
    },
    {
      code: 99,
      type: "printable",
      subtype: "letter",
      name: "c",
      bits: [
        0b00000000,
        0b00000000,
        0b00000000,
        0b00111000,
        0b01000000,
        0b01000000,
        0b00111000,
        0b00000000
      ]
    },
    {
      code: 100,
      type: "printable",
      subtype: "letter",
      name: "d",
      bits: [
        0b00000000,
        0b00000100,
        0b00000100,
        0b00111100,
        0b01000100,
        0b01000100,
        0b00111100,
        0b00000000
      ]
    },
    {
      code: 101,
      type: "printable",
      subtype: "letter",
      name: "e",
      bits: [
        0b00000000,
        0b00000000,
        0b00111000,
        0b01000100,
        0b01111100,
        0b01000000,
        0b00111000,
        0b00000000
      ]
    },
    {
      code: 102,
      type: "printable",
      subtype: "letter",
      name: "f",
      bits: [
        0b00000000,
        0b00011000,
        0b00100000,
        0b00100000,
        0b01110000,
        0b00100000,
        0b00100000,
        0b00000000
      ]
    },
    {
      code: 103,
      type: "printable",
      subtype: "letter",
      name: "g",
      bits: [
        0b00000000,
        0b00000000,
        0b00011100,
        0b00100010,
        0b00100010,
        0b00011110,
        0b00000010,
        0b00011100
      ]
    },
    {
      code: 104,
      type: "printable",
      subtype: "letter",
      name: "h",
      bits: [
        0b00000000,
        0b00100000,
        0b00100000,
        0b00111100,
        0b00100010,
        0b00100010,
        0b00100010,
        0b00000000
      ]
    },
    {
      code: 127,
      type: "system",
      abbr: "del",
      name: "delete",
      bits: CHAR_EMPTY
    }
  ]
}
