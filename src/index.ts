import { DuckDBInstance } from "@duckdb/node-api";
import path from "path";

const conn = (async () => {
  const db = await DuckDBInstance.create();
  return await db.connect();
})();

// Internal dutch address definition
type Adres = {
  postcode: string;
  huisnummer: string;
  straat: string;
  buurt: string;
  wijk: string;
  woonplaats: string;
  gemeente: string;
  provincie: string;
  latitude: number;
  longitude: number;
};

/**
 * Address details provided by this library.
 */
export type Address = {
  postcode: string;
  houseNumber: string;
  street: string;
  neighbourhood: string;
  district: string;
  city: string;
  municipality: string;
  province: string;
  latitude: number;
  longitude: number;
};

/**
 * Convert the internal dutch address definition to the address definition provided by this library.
 */
const toAddress = (adres: Adres): Address => {
  return {
    postcode: adres.postcode,
    houseNumber: adres.huisnummer,
    street: adres.straat,
    neighbourhood: adres.buurt,
    district: adres.wijk,
    city: adres.woonplaats,
    municipality: adres.gemeente,
    province: adres.provincie,
    latitude: adres.latitude,
    longitude: adres.longitude,
  };
};

export const lookupAddress = async (postcode: string, housenumber: string) => {
  const result = await (
    await conn
  ).run(
    `
    SELECT * FROM read_parquet('${path.join(__dirname, "..", "data.parquet")}')
    WHERE postcode = ? AND huisnummer = ?
  `,
    [postcode, housenumber]
  );
  const rows = await result.getRowObjects();
  const row = rows[0];
  return row ? toAddress(row as Adres) : null;
};
