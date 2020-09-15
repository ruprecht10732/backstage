import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import { Grid, Paper, makeStyles, Typography, Badge } from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import moment from "moment";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
moment().format();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    overflowX: "auto",
  },
  opmerkingen: {
    margin: "2% 0 2% 6.7%",
  },
  displayNone: {
    display: "none",
  },
  badgeNeutral: {
    backgroundColor: "grey",
    color: "white",
  },
}));

function UrenTabel() {
  function getDaysArrayByMonth() {
    var daysInMonth = moment().daysInMonth();
    var arrDays = [];

    while (daysInMonth) {
      var current = moment().date(daysInMonth);
      arrDays.push(current);
      daysInMonth--;
    }

    return arrDays;
  }

  var schedule = getDaysArrayByMonth();
  schedule.forEach(function (item) {
    console.log(item.format("DD/MM"));
  });

  const classes = useStyles();
  const [entries, setEntries] = useState({
    data: [
      {
        id: "",
      },
    ],
  });

  const [state] = React.useState({
    columns: [
      {
        title: "Werknemer",
        field: "Medewerker",
        editable: false,
        cellStyle: {
          fontWeight: "bold",
        },
      },
      {
        title: "Maand",
        field: "Maand",
        editable: false,
        cellStyle: {
          fontWeight: "bold",
        },
      },
      {
        title: "Jaar",
        field: "Jaar",
        editable: false,
        cellStyle: {
          fontWeight: "bold",
        },
      },
      {
        title: "Uren totaal",
        field: "UrenTotaal",
        editable: false,
      },
      {
        title: "Bruto Loon",
        field: "Loon",
        editable: false,
      },
      {
        title: "Bonus omschrijving",
        field: "Bonus",
        editable: false,
        filtering: false,
      },
      {
        title: "Bruto Bonus totaal",
        field: "BonusTotaal",
        editable: false,
      },
      {
        title: "Status",
        field: "Status",
        editable: false,
        cellStyle: {
          fontWeight: "bold",
        },
      },
    ],
  });

  useEffect(() => {
    Axios.get("http://localhost:5050/verdiensten/1")
      .then((response) => {
        let data = [];
        response.data.forEach((el) => {
          data.push({
            id: el.medewerker_ID,
            Medewerker: el.Naam,
            Maand: el.maand,
            Jaar: el.jaar,
            UrenTotaal: el.uren_totaal,
            Loon: "€ " + el.loon_totaal,
            Bonus: el.bonus_omschrijving,
            BonusTotaal: "€ " + el.bonus_totaal,
            Status: el.status,
            Opmerkingen: el.opmerkingen,
          });
        });
        setEntries({ data: data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Grid item container xs={12}>
      <MaterialTable
        detailPanel={[
          (rowData) => ({
            disabled: !rowData.expandable,
            icon: () => (
              <Badge
                badgeContent={1}
                color="primary"
                className={!rowData.Opmerkingen && classes.displayNone}
                classes={{
                  badge: classes.badgeNeutral,
                }}
              >
                <CommentIcon
                  className={!rowData.Opmerkingen && classes.displayNone}
                />
              </Badge>
            ),
            render: () => {
              return (
                <Grid container xs={12}>
                  <Grid container item xs={12}>
                    <Grid item className={classes.opmerkingen}>
                      <Typography variant="subtitle2">Opmerkingen</Typography>
                      <Typography variant="paragraph">
                        {!rowData.Opmerkingen
                          ? "Geen opmerkingen"
                          : rowData.Opmerkingen}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              );
            },
            openIcon: () => <ExpandLessIcon />,
            tooltip: "Bekijk opmerkingen",
          }),
        ]}
        onRowClick={(event, rowData, togglePanel) => togglePanel()}
        components={{
          Container: (props) => (
            <Paper {...props} elevation={0} className={classes.root} />
          ),
        }}
        localization={{
          pagination: {
            labelDisplayedRows: "{from}-{to} van {count}",
            labelRowsSelect: "rijen",
            labelRowsPerPage: "Rijen per pagina",
            firstAriaLabel: "Eerste pagina",
            firstTooltip: "Eerste pagina",
            previousAriaLabel: "Vorige pagina",
            previousTooltip: "Vorige pagina",
            nextAriaLabel: "Volgende",
            nextTooltip: "Volgende",
            lastAriaLabel: "Laatste pagina",
            lastTooltip: "Laatste pagina",
          },
          toolbar: {
            nRowsSelected: "{0} rij(en) geselecteerd",
            searchTooltip: "Zoeken",
            searchPlaceholder: "Zoeken",
            exportTitle: "Exporteren",
            exportAriaLabel: "Exporteren",
            exportCSVName: "Exporteren als CSV",
            exportPDFName: "Exporteren als PDF",
          },
          header: {
            actions: "",
          },
          body: {
            emptyDataSourceMessage: "Geen gegevens om weer te geven",
            filterRow: {
              filterTooltip: "Filter",
            },
          },
        }}
        title="Overzicht bruto verdiensten"
        options={{
          filtering: true,
          pageSize: "7",
          pageSizeOptions: [7, 31],
          paginationType: "stepped",
          showTitle: false,
          actionsColumnIndex: -1,
          searchFieldAlignment: "left",
          search: false,
          exportButton: true,
          headerStyle: {
            backgroundColor: "#f2f4f5",
            color: "#555d61",
            border: "1px 1px solid #dfe3e6",
          },
          rowStyle: {
            color: "#1c242b",
            border: "1px 1px solid #dfe3e6",
          },
        }}
        columns={state.columns}
        data={entries.data}
      />
    </Grid>
  );
}

export default UrenTabel;
