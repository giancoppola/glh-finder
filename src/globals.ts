export const GOOGLE_MAPS_API_KEY = process.env.DEVELOPMENT_ENV === 'true' ? process.env.GOOGLE_API_KEY_DEV : process.env.GOOGLE_API_KEY_PROD;

export const CENTRAL_COL: string = "#CDD9FF";
export const EAST_COL: string = "#FBD0C9";
export const NORTH_EAST_COL: string = "#E2C3FF";
export const NORTH_WEST_COL: string = "#FDCD8F";
export const NORTH_THAMES_COL: string = "#A1D8A6";
export const SOUTH_EAST_COL: string = "#FDD0FC";
export const SOUTH_WEST_COL: string = "#F8F2C0";

export const CENTRAL_GLH: GLH_NAME = "Central and South GLH";
export const EAST_GLH: GLH_NAME = "East GLH";
export const NORTH_EAST_GLH: GLH_NAME = "North East and Yorkshire GLH";
export const NORTH_WEST_GLH: GLH_NAME = "North West GLH";
export const NORTH_THAMES_GLH: GLH_NAME = "North Thames GLH";
export const SOUTH_EAST_GLH: GLH_NAME = "South East GLH";
export const SOUTH_WEST_GLH: GLH_NAME = "South West GLH";

export type GLH_NAME = "Central and South GLH" | "East GLH" | "North East and Yorkshire GLH"
| "North West GLH" | "North Thames GLH" | "South East GLH" | "South West GLH" | "";

export interface GLH {
    name: GLH_NAME;
    color: string;
}
export interface GLH_COLLECTION {
    [key: string]: GLH;
}

export const CENTRAL_GLH_OBJ: GLH = {
    name: CENTRAL_GLH,
    color: CENTRAL_COL,
}
export const EAST_GLH_OBJ: GLH = {
    name: EAST_GLH,
    color: EAST_COL,
}
export const NORTH_EAST_GLH_OBJ: GLH = {
    name: NORTH_EAST_GLH,
    color: NORTH_EAST_COL,
}
export const NORTH_WEST_GLH_OBJ: GLH = {
    name: NORTH_WEST_GLH,
    color: NORTH_WEST_COL,
}
export const NORTH_THAMES_GLH_OBJ: GLH = {
    name: NORTH_THAMES_GLH,
    color: NORTH_THAMES_COL,
}
export const SOUTH_EAST_GLH_OBJ: GLH = {
    name: SOUTH_EAST_GLH,
    color: SOUTH_EAST_COL,
}
export const SOUTH_WEST_GLH_OBJ: GLH = {
    name: SOUTH_WEST_GLH,
    color: SOUTH_WEST_COL,
}

export const GLH_COL: GLH_COLLECTION = {
    CENTRAL_GLH: CENTRAL_GLH_OBJ,
    EAST_GLH: EAST_GLH_OBJ,
    NORTH_EAST_GLH: NORTH_EAST_GLH_OBJ,
    NORTH_WEST_GLH: NORTH_WEST_GLH_OBJ,
    NORTH_THAMES_GLH: NORTH_THAMES_GLH_OBJ,
    SOUTH_EAST_GLH: SOUTH_EAST_GLH_OBJ,
    SOUTH_WEST_GLH: SOUTH_WEST_GLH_OBJ
}
export const GLH_ARR: Array<GLH> = [
    CENTRAL_GLH_OBJ,
    EAST_GLH_OBJ,
    NORTH_EAST_GLH_OBJ,
    NORTH_WEST_GLH_OBJ,
    NORTH_THAMES_GLH_OBJ,
    SOUTH_EAST_GLH_OBJ,
    SOUTH_WEST_GLH_OBJ
]

export interface LocationSearchResult {
    label: string,
    value: google.maps.places.PlaceResult,
}
export interface Location {
    name: string,
    lat: number,
    lng: number,
    formatted_add: string
}

export interface RoutingDetails {
    [key: string]: Array<string>
}
export interface TestDetails {
    [key: string]: any,
    name: string,
    panel_app_no: number,
    category: string,
    single_national_provider: boolean,
    routing: RoutingDetails,
}
// Test CI - Test Indication - Test Details
export interface TestRoutingData {
    [key: string]: {
        [key: string]: TestDetails
    }
}