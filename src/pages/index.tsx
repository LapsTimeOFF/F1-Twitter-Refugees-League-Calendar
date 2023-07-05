import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { raceEvents } from "./data";
import { FormattedDate } from "react-intl";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>League Calendar</title>
        <meta
          name="description"
          content="Season 1: F1 Twitter Refugees league"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container>
        <Typography
          variant="h1"
          sx={{ textAlign: "center", fontFamily: inter }}
        >
          <b>League Calendar</b>
        </Typography>
        <Divider />
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontFamily: inter }}
        >
          <b>Season 1: F1 Twitter Refugees league</b>
        </Typography>
        <Typography sx={{ textAlign: "center", fontFamily: inter }}>
          <b>Note:</b> This calendar is not official and is subject to change.
        </Typography>
        <Divider />

        {/* type RaceEvent = {
          gpName: string;
          countryFlag: string;
          countryName: string;
          date: {
            qualifying?: Date | "TBD";
            race?: Date | "TBD";
            session?: Date | "TBD";
          };
          circuitName: string;
          circuitImage: string;
          done: boolean;
        }; */}
        {raceEvents.map((raceEvent, _i) => (
          <Card
            key={_i}
            sx={{
              backgroundColor: "#1e1e1e",
              color: "#fff",
              m: 4,
              opacity: raceEvent.done ? 0.5 : 1,
            }}
            variant="outlined"
          >
            <CardContent>
              <Typography variant="h4" sx={{ fontFamily: inter }}>
                {raceEvent.gpName}
              </Typography>
              <Typography variant="h5" sx={{ fontFamily: inter }}>
                {raceEvent.countryFlag} {raceEvent.countryName}
              </Typography>
              {!raceEvent.date.session ? (
                <>
                  <Typography variant="h6" sx={{ fontFamily: inter }}>
                    Qualifying:{" "}
                    {raceEvent.date.qualifying === "TBD" ? (
                      "TBD"
                    ) : (
                      <FormattedDate
                        value={raceEvent.date.qualifying}
                        hour12={false}
                        hour="numeric"
                        minute="numeric"
                        timeZoneName="short"
                        day="numeric"
                        month="long"
                        year="numeric"
                      />
                    )}
                  </Typography>
                  <Typography variant="h6" sx={{ fontFamily: inter }}>
                    Race:{" "}
                    {raceEvent.date.race === "TBD" ? (
                      "TBD"
                    ) : (
                      <FormattedDate
                        value={raceEvent.date.race}
                        hour12={false}
                        hour="numeric"
                        minute="numeric"
                        timeZoneName="short"
                        day="numeric"
                        month="long"
                        year="numeric"
                      />
                    )}
                  </Typography>
                </>
              ) : (
                <Typography variant="h6" sx={{ fontFamily: inter }}>
                  Session:{" "}
                  {raceEvent.date.session === "TBD" ? (
                    "TBD"
                  ) : (
                    <FormattedDate
                      value={raceEvent.date.session}
                      hour12={false}
                      hour="numeric"
                      minute="numeric"
                      timeZoneName="short"
                      day="numeric"
                      month="long"
                      year="numeric"
                    />
                  )}
                </Typography>
              )}
              <Typography variant="h6" sx={{ fontFamily: inter }}>
                {raceEvent.circuitName}
              </Typography>
            </CardContent>
            <CardMedia
              sx={{ height: 240 }}
              image={raceEvent.circuitImage}
              title={raceEvent.circuitName}
            />
          </Card>
        ))}
      </Container>
    </>
  );
}
