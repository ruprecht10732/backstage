import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import moment from "moment";
moment().format();

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    overflowX: "auto",
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
        Functie: "",
        Werknemer: "",
        Achternaam: "",
        Email: "",
        Mobiel: "",
        Straat: "",
        Huisnummer: "",
        Toevoeging: "",
        Postcode: "",
        Woonplaats: "",
        NoodContact: "",
        NoodNummer: "",
        Vestiging: "",
        GeboorteDatum: "",
      },
    ],
  });

  const [state] = React.useState({
    columns: [
      { title: "Werknemer", field: "Werknemer" },
      { title: "Gewerkte uren", field: "GewerkteUren", type: "int" },
      {
        title: "Uren distributie",
        field: "UrenDistributie",
        editable: false,
        filtering: false,
      },
      {
        title: "Status",
        field: "Status",
        editable: false,
        filtering: false,
      },
    ],
  });

  useEffect(() => {
    Axios.get("http://localhost:5050/medewerkers")
      .then((response) => {
        let data = [];
        response.data.forEach((el) => {
          data.push({
            id: el.medewerker_ID,
            Functie: el.Rol,
            Werknemer: el.AchterNaam + ", " + el.Naam,
            Achternaam: el.AchterNaam,
            Email: el.Email,
            Mobiel: el.Mobiel,
            Straat: el.Straat,
            Huisnummer: el.Huisnummer,
            Toevoeging: el.Toevoeging,
            Postcode: el.Postcode,
            Woonplaats: el.Woonplaats,
            NoodContact: el.NoodGevalNaam,
            NoodNummer: el.NoodGevalNummer,
            Vestiging: el.vestiging_naam,
            GeboorteDatum: el.GeboorteDatum,
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
        title="Alle actieve medewerkers"
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

export default UrenTabel;
