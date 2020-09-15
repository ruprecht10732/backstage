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

function UrenToevoegen() {
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
    Axios.get("http://localhost:5050/verdiensten/toevoegen/:id")
      .then((response) => {
        let data = [];
        response.data.forEach((el) => {
          data.push({
            id: el.medewerker_ID,
            Maand: "Vul hier de maand in",
            Jaar: "Vul hier het jaar in",
            UrenTotaal: "Vul hier het uren totaal in",
            Loon: "Vul hier het bruto loon in",
            Bonus: "Vul hier de omschrijving in",
            BonusTotaal: "Vul hier het bonus bedrag in",
            Status: "Selecteer hier een status",
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
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setEntries([...entries.data, newData]);

                resolve();
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const data = [...entries.data];
                data[data.indexOf(oldData)] = newData;
                Axios.put("http://localhost:5050/medewerkers", newData, {
                  params: {
                    id: entries.data[0].id,
                  },
                }).then((res) => console.log(res.data));
                setEntries({ ...entries, data });
              }, 600);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                const data = [...entries.data];
                data.splice(data.indexOf(oldData), 1);
                Axios.delete("http://localhost:5050/medewerkers", {
                  params: {
                    id: entries.data[0].id,
                  },
                }).then((res) => console.log(res.data));
                setEntries({ ...entries, data });
              }, 600);
            }),
        }}
      />
    </Grid>
  );
}

export default UrenToevoegen;
