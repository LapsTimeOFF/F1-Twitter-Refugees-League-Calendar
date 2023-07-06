import { SessionsName, raceEvents } from "@/data";
import { Container, IconButton, Typography } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React from "react";
import Twemoji from "react-twemoji";
import Link from "next/link";
import Head from "next/head";
import Timetable, { sessionsDisplayName } from "@/components/Timetable";
import Results from "@/components/Results";

export default function Page() {
  const router = useRouter();

  const event = raceEvents[parseInt(router.query.id as string)];

  return (
    <Container>
      <Head>
        <title>{event?.gpName} | League Calendar</title>
      </Head>
      <IconButton aria-label="back" LinkComponent={Link} href="/">
        <ArrowBackIcon
          sx={{
            color: "white",
            m: 2,
          }}
        />
      </IconButton>
      <Twemoji options={{ className: "twemoji" }}>
        {event && (
          <Typography>
            <Typography variant="h4">Round {router.query.id}</Typography>
            <Typography variant="h1">{event.gpName}</Typography>
            <Typography variant="h2">
              {event.countryFlag}
              {event.countryName}
            </Typography>
            <Typography variant="h5">{event.notes}</Typography>
            <Timetable event={event} />
            {Object.entries(event.results).map(([key, value]) => (
              <Results
                key={key}
                session={sessionsDisplayName[key as SessionsName]}
                results={value}
              />
            ))}
          </Typography>
        )}
      </Twemoji>
    </Container>
  );
}
