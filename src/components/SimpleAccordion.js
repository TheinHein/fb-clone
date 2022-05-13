import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuButtonCard from "./MenuButtonCard";
import { Avatar, Card, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { accordionList } from "../menuBntList";

export default function SimpleAccordion() {
  return (
    <>
      {accordionList.map(({ summary, details }, index) => (
        <Accordion
          key={summary.id}
          elevation={0}
          sx={{ bgcolor: "#F0F2F5" }}
          TransitionProps={{ unmountOnExit: true }}
          disableGutters
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{summary.name}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              {details.map(({ id, name }) => (
                <Grid key={id} item xs={index === 0 ? 6 : 12}>
                  {index === 0 ? (
                    <MenuButtonCard name={name} />
                  ) : (
                    <Card
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "7px",
                      }}
                    >
                      <Avatar
                        alt="Travis Howard"
                        src=""
                        width={40}
                        height={40}
                      />
                      <Box sx={{ padding: "0 10px" }}>
                        <Typography>{name}</Typography>
                      </Box>
                    </Card>
                  )}
                </Grid>
              ))}
            </Grid>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
}
