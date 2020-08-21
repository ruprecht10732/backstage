import React from "react";
import MaterialTable from "material-table";
import { Paper } from "@material-ui/core";

function AanwezigContent() {
  var today = new Date(),
    date =
      today.getDate() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getFullYear();

  return (
    <MaterialTable
      components={{
        Container: (props) => <Paper {...props} elevation={0} />,
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
      columns={[
        { title: "Naam", field: "Naam" },
        {
          title: "Vestiging",
          field: "Vestiging",
        },
      ]}
      data={[
        {
          Naam: "Ilias Derawi",
          Vestiging: "Leiden",
        },
        { Naam: "Robin Oost", Vestiging: "Nijmegen" },
        { Naam: "Thomas Kos", Vestiging: "Alkmaar" },
      ]}
      options={{
        maxBodyHeight: "150px",
        padding: "dense",
        paginationType: "stepped",
        exportFileName: "Aanwezige medewerkers: " + date,
        exportButton: true,
        searchFieldAlignment: "left",
        searchFieldStyle: {
          marginLeft: "-10%",
          width: "100%",
        },
      }}
    />
  );
}

export default AanwezigContent;
