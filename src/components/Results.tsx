import { RaceEvent, SessionResult } from "@/data";
import {
  Box,
  Chip,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { FC } from "react";

type Props = {
  session: string;
  results: SessionResult;
};

const Results: FC<Props> = ({ session, results }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: 4,
      }}
    >
      <Divider sx={{ width: "95%", mb: 2 }} />
      <Typography variant="h3">{session}</Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Position</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Gap to Leader</TableCell>
              <TableCell align="right">Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result, _i) => (
              <TableRow
                key={_i + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {_i + 1}
                </TableCell>
                <TableCell align="right">{result.name}</TableCell>
                <TableCell align="right">{result.gap}</TableCell>
                <TableCell align="right">{result.fastest ? (<Chip label={result.time} sx={{
                  backgroundColor: "#9c27b0"
                }}/>) : result.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Results;
