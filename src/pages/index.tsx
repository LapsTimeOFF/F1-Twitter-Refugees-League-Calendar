import Head from "next/head";
import { Inter } from "next/font/google";
import { Box, Container, Divider, Typography } from "@mui/material";
import { raceEvents } from "../data";
import GPCard from "@/components/GPCard";

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
        <Box
          sx={{
            position: "sticky",
            top: 0,
            backgroundColor: "#121212",
            zIndex: 100,
            mb: 4,
          }}
        >
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
        </Box>

        {/* type RaceEvent = {
          gpName: string;
          countryFlag: string;
          countryName: string;
          date: {
            qualifying?: Date | "TBD" | "Cancelled";
            race?: Date | "TBD" | "Cancelled";
            session?: Date | "TBD" | "Cancelled";
          };
          circuitName: string;
          circuitImage: string;
          done: boolean;
        }; */}
        {raceEvents.map((raceEvent, _i) => (
          <GPCard raceEvent={raceEvent} index={_i} font={inter} key={_i} />
        ))}
      </Container>
    </>
  );
}
