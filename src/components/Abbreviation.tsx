import { alpha, styled, Tooltip, TooltipProps } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

interface IProps extends Omit<TooltipProps, "children"> {}

const Abbr = styled("abbr")(({ theme }) => ({
  padding: theme.spacing(0.25, 0.5),
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.info.main, 0.2),
  "&:hover": {
    backgroundColor: alpha(theme.palette.info.main, 0.3),
  },
  textDecoration: "underline dotted",
  textDecorationThickness: 1,
  textDecorationColor: theme.palette.info.main,
  cursor: "help",
}));

export const Abbreviation: FC<PropsWithChildren<IProps>> = ({
  children,
  ...props
}) => {
  return (
    <Tooltip arrow {...props}>
      <Abbr>{children}</Abbr>
    </Tooltip>
  );
};
