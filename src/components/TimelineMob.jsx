import LaptopIcon from "@mui/icons-material/Laptop";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Timeline from "@mui/lab/Timeline";

const TimelineMob = ({ date, course, academy }) => {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="#A0D683"
        >
          {date}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot
            sx={{
              bgcolor: "#f0d699",
              color: "#31511e",
              border: "2px #31511e solid",
            }}
          >
            <LaptopIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span" color="#D3EE98">
            {course}
          </Typography>
          <Typography>{academy}</Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

export default TimelineMob;
