import {
  Paper,
  CardActionArea,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { FormattedDate } from "react-intl";
import { Abbreviation } from "./Abbreviation";
import { RaceEvent } from "@/data";
import { NextFont } from "next/dist/compiled/@next/font";

type Props = {
  raceEvent: RaceEvent;
  index: number;
  font: NextFont;
};

const GPCard: FC<Props> = ({ raceEvent, index, font }) => {
  return (
    <Paper
      sx={{
        m: 4,
        opacity: raceEvent.done ? 0.5 : 1,
      }}
      elevation={raceEvent.done ? 0 : 3}
    >
      <CardActionArea LinkComponent={Link} href={`/events/${index}`}>
        <CardContent>
          <Typography variant="h4" sx={{ fontFamily: font }}>
            {raceEvent.gpName}
          </Typography>
          <Typography variant="h5" sx={{ fontFamily: font }}>
            {raceEvent.countryFlag} {raceEvent.countryName}
          </Typography>
          {!raceEvent.date.session ? (
            <>
              <Typography variant="h6" sx={{ fontFamily: font }}>
                Qualifying:{" "}
                {raceEvent.date.qualifying === "TBD" ? (
                  <Abbreviation title="To Be Decided">TBD</Abbreviation>
                ) : raceEvent.date.qualifying === "Cancelled" ? (
                  <b>
                    SESSION CANCELLED, click on the card for more informations.
                  </b>
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
              <Typography variant="h6" sx={{ fontFamily: font }}>
                Race:{" "}
                {raceEvent.date.race === "TBD" ? (
                  <Abbreviation title="To Be Decided">TBD</Abbreviation>
                ) : raceEvent.date.race === "Cancelled" ? (
                  <b>
                    SESSION CANCELLED, click on the card for more informations.
                  </b>
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
            <Typography variant="h6" sx={{ fontFamily: font }}>
              Session:{" "}
              {raceEvent.date.session === "TBD" ? (
                <Abbreviation title="To Be Decided">TBD</Abbreviation>
              ) : raceEvent.date.session === "Cancelled" ? (
                <b>
                  SESSION CANCELLED, click on the card for more informations.
                </b>
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
          <Typography variant="h6" sx={{ fontFamily: font }}>
            {raceEvent.circuitName}
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ height: 240 }}
          image={raceEvent.circuitImage}
          title={raceEvent.circuitName}
        />
      </CardActionArea>
    </Paper>
  );
};

export default GPCard;
