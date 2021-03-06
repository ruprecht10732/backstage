import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Axios from "axios";
import { Grid, Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    overflowX: "auto",
  },
}));

function MedewerkersTabel() {
  const classes = useStyles();
  const [entries, setEntries] = useState({
    data: [
      {
        id: "",
        StartDatum: "",
        Functie: "",
        Naam: "",
        Achternaam: "",
        Email: "",
        NoodContact: "",
        NoodNummer: "",
      },
    ],
  });

  const [state] = React.useState({
    columns: [
      { title: "Functie", field: "Functie", editable: false },
      { title: "Naam", field: "Naam" },
      { title: "Achternaam", field: "Achternaam" },
      { title: "Geboorte datum", field: "GeboorteDatum", type: "date" },
      { title: "Email", field: "Email" },
      { title: "Mobiel", field: "Mobiel" },
      { title: "Straat", field: "Straat" },
      { title: "Huisnummer", field: "Huisnummer" },
      { title: "Toevoeging", field: "Toevoeging" },
      { title: "Postcode", field: "Postcode" },
      { title: "Woonplaats", field: "Woonplaats" },
      { title: "Nood Contact", field: "NoodContact", editable: false },
      { title: "Nood Nummer", field: "NoodNummer", editable: false },
      { title: "Vestiging", field: "Vestiging", editable: false },
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
            Naam: el.Naam,
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
            actions: "Acties",
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
          padding: "dense",
          pageSize: "10",
          pageSizeOptions: [5, 10, 20, 30, 40, 50, 100, 150],
          paginationType: "stepped",
          showTitle: false,
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

export default MedewerkersTabel;
