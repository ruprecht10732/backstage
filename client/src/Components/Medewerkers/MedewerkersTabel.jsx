import React from "react";
import MaterialTable from "material-table";
import VisibilityIcon from "@material-ui/icons/Visibility";

function MedewerkersTabel() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    {
      title: "Actief",
      field: "Actief",
      lookup: { Ja: "Ja", Medewerker: "Nee" },
    },
    { title: "Naam", field: "Naam" },
    { title: "Email", field: "emailAdres" },
    {
      title: "Functie",
      field: "Functie",
      lookup: { Manager: "Manager", Medewerker: "Medewerker" },
    },
    {
      title: "Vestiging",
      field: "Vestiging",
      lookup: { Alkmaar: "Alkmaar", Leiden: "Leiden" },
    },
    { title: "Datum in dienst", field: "startDatum" },
  ]);

  const [data, setData] = useState([
    {
      Naam: "Robin Oost",
      Functie: "Manager",
      Vestiging: "Alkmaar",
      startDatum: "01-01-2020",
      Actief: "Ja",
    },
  ]);

  return (
    <MaterialTable
      actions={[
        {
          icon: () => <VisibilityIcon />,
          tooltip: "Wachtwoord reset",
          onClick: (event, rowData) => alert("You saved " + rowData.name),
        },
      ]}
      options={{
        filtering: true,
      }}
      title={false}
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
      columns={columns}
      data={data}
      editable={{
        onBulkUpdate: (changes) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve();
            }, 1000);
          }),
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
    />
  );
}

export default MedewerkersTabel;
