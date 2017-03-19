import * as fs from 'fs';
import * as path from 'path';
import { IColorSet } from './themeGenerator'
import { VscodeThemeGenerator } from './vscodeThemeGenerator'

const colorSet1: IColorSet = {
  syntax: {
    identifier: '#ffffff',
    boolean: '#be84ff',
    string: '#87d75f',
    number: '#ffcc66',
    keyword: '#ff8f7e',
    functionCall: '#cae682',
    storage: '#88b8f6',
    comment: '#989898',
    class: '#cae682',
    type: '#88b8f6'
  },
  ui: {
    background: '#151515'
  }
};

const glacierColorSet: IColorSet = {
  syntax: {
    identifier: '#d73c4d', // Should be bold in Glacier
    // boolean: '#',
    string: '#ffe792',
    // number: '#',
    keyword: '#d7503c',
    // functionCall: '#',
    storage: '#3cadd7',
    comment: '#515c68',
    // class: '#',
    // type: '#',
    modifier: '#3cadd7'
  },
  ui: {
    background: '#0e151b',
    foreground: '#efefef',
    cursor: '#ffe792'
  }
};

const sapphireColors = {
  red: '#DA6771',
  redLight: '#e5949b',
  green: '#4EB071',
  greenDim: '#275839',
  yellow: '#fff099',
  blue: '#399EF4',
  blueLight: '#9fcff9',
  pink: '#B168DF',
  teal: '#21C5C7',
  grey: '#4A5160'
}

const sapphireColorSet: IColorSet = {
  syntax: {
    identifier: sapphireColors.blueLight,
    string: sapphireColors.red,
    number: sapphireColors.redLight,
    keyword: sapphireColors.blue,
    boolean: sapphireColors.blue,
    function: sapphireColors.teal,
    functionCall: sapphireColors.yellow,
    storage: sapphireColors.blue,
    comment: sapphireColors.grey,
    class: sapphireColors.teal,
    classMember: sapphireColors.teal,
    type: sapphireColors.green,
    this: sapphireColors.blue,
    cssClass: sapphireColors.blue,
    cssId: sapphireColors.red,
    cssTag: sapphireColors.teal,
    markdownQuote: '#c0c0c0'
  },
  ui: {
    background: '#151B24',
    foreground: '#efefef',
    accent: '#0a0d12',
    cursor: '#ffffff',
    guide: '#263040',
    invisibles: '#263040',
    rangeHighlight: '#263040',
    // Bright red 50% opacity
    findMatchHighlight: '#cb606080',
    // Brighter red 50% opacity
    currentFindMatchHighlight: '#ff777780',
    selection: '#153958',
    // Blue 50% opacity
    selectionHighlight: '#2b74b380',
    // White with ~10% opacity
    wordHighlight: '#ffffff18',
    wordHighlightStrong: '#ffffff18',
    activeLinkForeground: sapphireColors.blue,

    ansiBlack: '#666666',
    ansiRed: sapphireColors.red,
    ansiGreen: sapphireColors.green,
    ansiYellow: sapphireColors.yellow,
    ansiBlue: sapphireColors.blue,
    ansiMagenta: sapphireColors.pink,
    ansiCyan: sapphireColors.teal,
    ansiWhite: '#efefef',
    ansiBrightBlack: '#666666',
    ansiBrightRed: sapphireColors.red,
    ansiBrightGreen: sapphireColors.green,
    ansiBrightYellow: sapphireColors.yellow,
    ansiBrightBlue: sapphireColors.blue,
    ansiBrightMagenta: sapphireColors.pink,
    ansiBrightCyan: sapphireColors.teal,
    ansiBrightWhite: '#efefef'
  }
};
const themeJson = new VscodeThemeGenerator().generateTheme('Sapphire theme', sapphireColorSet);
const outputFile = path.join(__dirname, '..', 'out', 'theme.json')

fs.writeFileSync(outputFile, themeJson);
