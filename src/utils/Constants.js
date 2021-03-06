import {setCanvasHeight, setSize} from './Helpers';
export const MIN_HEIGHT = 510;
export const MAX_HEIGHT = 1190;
export const VIEWPORT_HEIGHT = window.innerHeight;
export const RATIO = 1.1176470588235294117647058823529411764705882352941176470588235294117647058823529411764705882352941176470588235294117647058823529411764705882352941176470588235294117647058823529411764705882352941176471;
export const ROWS = 17;
export const COLUMNS = 19;
export const CANVAS_HEIGHT = setCanvasHeight(MIN_HEIGHT, MAX_HEIGHT, VIEWPORT_HEIGHT, ROWS);
export const CANVAS_WIDTH = CANVAS_HEIGHT * RATIO;
export const CENTER_X = CANVAS_WIDTH / 2;
export const CENTER_Y = CANVAS_HEIGHT / 2;
export const TILE_SIZE = CANVAS_WIDTH / COLUMNS;
export const ANCHOR_OFFSET = TILE_SIZE / 2;
export const SCOREBOARD_HEIGHT = TILE_SIZE;
export const LAUNCHER_HEIGHT = TILE_SIZE * 4;
export const MAX_ARROW_RANGE = 74;
export const LAUNCH_COUNTDOWN = 20;
export const TOP_BOUNDARY_LAUNCH_LIMIT = 9;
export const CURRENT_BUBBLE_X = CENTER_X;
export const CURRENT_BUBBLE_Y = CANVAS_HEIGHT - LAUNCHER_HEIGHT + ANCHOR_OFFSET;
export const NEXT_BUBBLE_X = CENTER_X + (TILE_SIZE * 3);
export const NEXT_BUBBLE_Y = CANVAS_HEIGHT - TILE_SIZE - ANCHOR_OFFSET;
export const BUBBLE_PHYSICS_SIZE = TILE_SIZE - 10;
export const ROUND_MODE_1 = 17;
export const ROUND_MODE_2 = 8;
export const TOTAL_ROUNDS = 50;
// https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
export const MAX_SCORE = 99999999999999;
export const TITLE_FONT_SIZE = setSize(MIN_HEIGHT, CANVAS_HEIGHT)(80);
export const HEADER_FONT_SIZE = setSize(MIN_HEIGHT, CANVAS_HEIGHT)(40);
export const DESC_FONT_SIZE = setSize(MIN_HEIGHT, CANVAS_HEIGHT)(12);
export const NAV_FONT_SIZE = setSize(MIN_HEIGHT, CANVAS_HEIGHT)(30);
export const MID_FONT_SIZE = setSize(MIN_HEIGHT, CANVAS_HEIGHT)(20);
