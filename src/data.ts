import data from "./data.json";

export type RaceEvent = {
  gpName: string;
  countryFlag: string;
  countryName: string;
  // date: {
  //   qualifying?: Date | "TBD" | "Cancelled";
  //   race?: Date | "TBD" | "Cancelled";
  //   session?: Date | "TBD" | "Cancelled"; // For testing only
  // };
  date: {
    [key in SessionsName]?: Date | "TBD" | "Cancelled";
  };
  circuitName: string;
  circuitImage: string;
  done: boolean;
  results: {
    qualifying?: SessionResult;
    race?: SessionResult;
    session?: SessionResult;
  };
  notes?: string;
};

export type SessionResult = {
  time: string;
  delta: string;
  name: string;
}[];

export type SessionsName = "qualifying" | "race" | "session";

// ALL THE DATES ARE TBD FOR THE MOMENT
// Bahrain Testing, Bahrain, Qatar, China, Japan, Barcelona, Austria, Silverstone, Spa, Monza, COTA, Brazil

export const raceEvents = data as RaceEvent[];
