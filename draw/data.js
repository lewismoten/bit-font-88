

var data = {
  width: 8,
  height: 8,
  chars: [
    {
      code: 0,
      type: "system",
      abbr: "nul",
      name: "null",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 1,
      type: "system",
      abbr: "som",
      name: "start of heading",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 2,
      type: "system",
      abbr: "stx",
      name: "start of text",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 3,
      type: "system",
      abbr: "etx",
      name: "end of text",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 4,
      type: "system",
      abbr: "eot",
      name: "end of transmission",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 5,
      type: "system",
      abbr: "enq",
      name: "enquery",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 6,
      type: "system",
      abbr: "ack",
      name: "acknowledgement",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 7,
      type: "system",
      abbr: "bel",
      name: "bell",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 8,
      type: "system",
      abbr: "bs",
      name: "backspace",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 9,
      type: "system",
      abbr: "ht",
      name: "horizontal tab",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 10,
      type: "system",
      abbr: "lf",
      name: "line feed",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 11,
      type: "system",
      abbr: "vt",
      name: "vertical tab",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 12,
      type: "system",
      abbr: "ff",
      name: "form feed",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 13,
      type: "system",
      abbr: "cr",
      name: "carriage return",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 14,
      type: "system",
      abbr: "so",
      name: "shift out",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 15,
      type: "system",
      abbr: "si",
      name: "shift in",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 16,
      type: "system",
      abbr: "dle",
      name: "data link escape",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 17,
      type: "system",
      abbr: "dc1",
      name: "device control 1 (xon)",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 18,
      type: "system",
      abbr: "dc2",
      name: "device control 2",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 19,
      type: "system",
      abbr: "dc3",
      name: "device control 3 (off)",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 20,
      type: "system",
      abbr: "dc3",
      name: "device control 4",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 21,
      type: "system",
      abbr: "nak",
      name: "negative acknoledgement",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 22,
      type: "system",
      abbr: "syn",
      name: "synchronous idle",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 23,
      type: "system",
      abbr: "etb",
      name: "end of transmission block",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 24,
      type: "system",
      abbr: "can",
      name: "cancel",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 25,
      type: "system",
      abbr: "em",
      name: "end of medium",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 26,
      type: "system",
      abbr: "sub",
      name: "substitute",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 27,
      type: "system",
      abbr: "esc",
      name: "escape",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 28,
      type: "system",
      abbr: "fs",
      name: "file separator",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 29,
      type: "system",
      abbr: "gs",
      name: "group separator",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 30,
      type: "system",
      abbr: "rs",
      name: "record separator",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 31,
      type: "system",
      abbr: "us",
      name: "unit separator",
      bits: [0,0,0,0,0,0,0,0]
    },
    {
      code: 32,
      type: "printable",
      name: "space",
      bits: [0,0,0,0,0,0,0,0]
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "number",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
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
      subType: "symbol",
      name: "carot",
      bits: [
        0b00000000,
        0b00010000,
        0b00101000,
        0b01000100,
        0b00000000,
        0b00000000,
        0b00000000,
        0b00000000
      ]
    },
    {
      code: 95,
      type: "printable",
      subType: "symbol",
      name: "underscore",
      bits: [
        0b00000000,
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
      subType: "symbol",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      subType: "letter",
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
      code: 105,
      type: "printable",
      subType: "letter",
      name: "i",
      bits: [
      0x00, 0x00, 0x08, 0x00, 0x08, 0x08, 0x08, 0x00
      ]
    },
    {
      code: 106,
      type: "printable",
      subType: "letter",
      name: "j",
      bits: [
    0x00, 0x00, 0x08, 0x00, 0x08, 0x08, 0x48, 0x30
      ]
    },
    {
      code: 107,
      type: "printable",
      subType: "letter",
      name: "k",
      bits: [
    0x00, 0x40, 0x40, 0x50, 0x60, 0x60, 0x50, 0x00
      ]
    },
    {
      code: 108,
      type: "printable",
      subType: "letter",
      name: "l",
      bits: [
    0x00, 0x30, 0x10, 0x10, 0x10, 0x10, 0x10, 0x00
      ]
    },
    {
      code: 109,
      type: "printable",
      subType: "letter",
      name: "m",
      bits: [
    0x00, 0x00, 0x00, 0x00, 0x6C, 0x52, 0x52, 0x00
      ]
    },
    {
      code: 110,
      type: "printable",
      subType: "letter",
      name: "n",
      bits: [
    0x00, 0x00, 0x00, 0x58, 0x64, 0x44, 0x44, 0x00
      ]
    },
    {
      code: 111,
      type: "printable",
      subType: "letter",
      name: "o",
      bits: [
    0x00, 0x00, 0x00, 0x38, 0x44, 0x44, 0x38, 0x00
      ]
    },
    {
      code: 112,
      type: "printable",
      subType: "letter",
      name: "p",
      bits: [
    0x00, 0x00, 0x38, 0x44, 0x44, 0x78, 0x40, 0x40
      ]
    },
    {
      code: 113,
      type: "printable",
      subType: "letter",
      name: "q",
      bits: [
    0x00, 0x00, 0x3C, 0x44, 0x44, 0x3C, 0x04, 0x06
      ]
    },
    {
      code: 114,
      type: "printable",
      subType: "letter",
      name: "r",
      bits: [
    0x00, 0x00, 0x00, 0x58, 0x60, 0x40, 0x40, 0x00
      ]
    },
    {
      code: 115,
      type: "printable",
      subType: "letter",
      name: "s",
      bits: [
    0x00, 0x00, 0x1C, 0x20, 0x18, 0x04, 0x38, 0x00
      ]
    },
    {
      code: 116,
      type: "printable",
      subType: "letter",
      name: "t",
      bits: [
    0x00, 0x20, 0x20, 0x70, 0x20, 0x20, 0x10, 0x00
      ]
    },
    {
      code: 117,
      type: "printable",
      subType: "letter",
      name: "u",
      bits: [
    0x00, 0x00, 0x44, 0x44, 0x44, 0x44, 0x3A, 0x00
      ]
    },
    {
      code: 118,
      type: "printable",
      subType: "letter",
      name: "v",
      bits: [
    0x00, 0x00, 0x44, 0x44, 0x44, 0x28, 0x10, 0x00
      ]
    },
    {
      code: 119,
      type: "printable",
      subType: "letter",
      name: "w",
      bits: [
    0x00, 0x00, 0x42, 0x42, 0x4A, 0x4A, 0x34, 0x00
      ]
    },
    {
      code: 120,
      type: "printable",
      subType: "letter",
      name: "x",
      bits: [
    0x00, 0x00, 0x44, 0x28, 0x10, 0x28, 0x44, 0x00
      ]
    },
    {
      code: 121,
      type: "printable",
      subType: "letter",
      name: "y",
      bits: [
    0x00, 0x00, 0x44, 0x44, 0x44, 0x3C, 0x04, 0x78
      ]
    },
    {
      code: 122,
      type: "printable",
      subType: "letter",
      name: "z",
      bits: [
    0x00, 0x00, 0x7C, 0x08, 0x10, 0x20, 0x7C, 0x00
      ]
    },
    {
      code: 123,
      type: "printable",
      subType: "symbol",
      name: "opening french bracket",
      bits: [
    0x10, 0x20, 0x20, 0x20, 0x60, 0x20, 0x20, 0x10
      ]
    },
    {
      code: 124,
      type: "printable",
      subType: "symbol",
      name: "vertical bar",
      bits: [
    0x00, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x00
      ]
    },
    {
      code: 125,
      type: "printable",
      subType: "symbol",
      name: "closing french bracket",
      bits: [
    0x08, 0x04, 0x04, 0x04, 0x06, 0x04, 0x04, 0x08
      ]
    },
    {
      code: 126,
      type: "printable",
      subType: "symbol",
      name: "~",
      bits: [
    0x00, 0x00, 0x00, 0x00, 0x34, 0x48, 0x00, 0x00
      ]
    },
    {
      code: 127,
      type: "system",
      abbr: "del",
      name: "delete",
      bits: [0,0,0,0,0,0,0,0]
    }
  ]
}
