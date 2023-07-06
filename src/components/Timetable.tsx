import { RaceEvent, SessionsName } from "@/data";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@mui/material";
import React, { FC } from "react";
import { FormattedDate, FormattedTime } from "react-intl";

export const sessionsDisplayName: { [key in SessionsName]: string } = {
  qualifying: "Qualifying",
  race: "Race",
  session: "Session",
};

type Props = {
  event: RaceEvent;
};

const Timetable: FC<Props> = ({ event }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Session</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(event.date).map(([key, value]) => (
            <TableRow
              key={key}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{sessionsDisplayName[key as SessionsName]}</TableCell>
              <TableCell>
                {value instanceof Date ? (
                  <FormattedDate value={value} day="numeric" month="long" />
                ) : (
                  value
                )}
              </TableCell>
              <TableCell>
                {value instanceof Date ? (
                  <FormattedTime
                    value={value}
                    hour12={false}
                    hour="numeric"
                    minute="numeric"
                    timeZoneName="short"
                  />
                ) : (
                  value
                )}
              </TableCell>
              <TableCell>
                {value instanceof Date ? (
                  <>
                    {value > new Date() ? (
                      <Chip color="success" label="Upcoming" />
                    ) : (
                      <Chip color="error" label="Done" />
                    )}
                  </>
                ) : value === "TBD" ? (
                  <Chip color="info" label="To Be Decided" />
                ) : (
                  <Chip color="error" label="Cancelled" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Timetable;
