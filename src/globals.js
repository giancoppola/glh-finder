export var GOOGLE_MAPS_API_KEY = process.env.DEVELOPMENT_ENV === 'true' ? process.env.GOOGLE_API_KEY_DEV : process.env.GOOGLE_API_KEY_PROD;
export var CENTRAL_COL = "#CDD9FF";
export var EAST_COL = "#FBD0C9";
export var NORTH_EAST_COL = "#E2C3FF";
export var NORTH_WEST_COL = "#FDCD8F";
export var NORTH_THAMES_COL = "#A1D8A6";
export var SOUTH_EAST_COL = "#FDD0FC";
export var SOUTH_WEST_COL = "#F8F2C0";
export var CENTRAL_GLH = "Central and South GLH";
export var EAST_GLH = "East GLH";
export var NORTH_EAST_GLH = "North East and Yorkshire GLH";
export var NORTH_WEST_GLH = "North West GLH";
export var NORTH_THAMES_GLH = "North Thames GLH";
export var SOUTH_EAST_GLH = "South East GLH";
export var SOUTH_WEST_GLH = "South West GLH";
export var CENTRAL_GLH_OBJ = {
    name: CENTRAL_GLH,
    color: CENTRAL_COL,
};
export var EAST_GLH_OBJ = {
    name: EAST_GLH,
    color: EAST_COL,
};
export var NORTH_EAST_GLH_OBJ = {
    name: NORTH_EAST_GLH,
    color: NORTH_EAST_COL,
};
export var NORTH_WEST_GLH_OBJ = {
    name: NORTH_WEST_GLH,
    color: NORTH_WEST_COL,
};
export var NORTH_THAMES_GLH_OBJ = {
    name: NORTH_THAMES_GLH,
    color: NORTH_THAMES_COL,
};
export var SOUTH_EAST_GLH_OBJ = {
    name: SOUTH_EAST_GLH,
    color: SOUTH_EAST_COL,
};
export var SOUTH_WEST_GLH_OBJ = {
    name: SOUTH_WEST_GLH,
    color: SOUTH_WEST_COL,
};
export var GLH_COL = {
    CENTRAL_GLH: CENTRAL_GLH_OBJ,
    EAST_GLH: EAST_GLH_OBJ,
    NORTH_EAST_GLH: NORTH_EAST_GLH_OBJ,
    NORTH_WEST_GLH: NORTH_WEST_GLH_OBJ,
    NORTH_THAMES_GLH: NORTH_THAMES_GLH_OBJ,
    SOUTH_EAST_GLH: SOUTH_EAST_GLH_OBJ,
    SOUTH_WEST_GLH: SOUTH_WEST_GLH_OBJ
};
export var GLH_ARR = [
    CENTRAL_GLH_OBJ,
    EAST_GLH_OBJ,
    NORTH_EAST_GLH_OBJ,
    NORTH_WEST_GLH_OBJ,
    NORTH_THAMES_GLH_OBJ,
    SOUTH_EAST_GLH_OBJ,
    SOUTH_WEST_GLH_OBJ
];
