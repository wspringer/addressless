# README

In the Netherlands, every address is uniquely identified by postcode and
housenumber. This library wraps a database with all addresses in the
Netherlands, allowing you to quickly resolve the address details for postcode
and housenumber combinations.

## Usage

```typescript
import { lookupAddress } from "addressless";

const address = lookupAddress("4147AZ", "5");
// {
//   "city": "Asperen",
//   "district": "Asperen",
//   "houseNumber": "5",
//   "latitude": 51.88051803,
//   "longitude": 5.11206571,
//   "municipality": "West Betuwe",
//   "neighbourhood": "Asperen Oude Kern",
//   "postcode": "4147AZ",
//   "province": "Gelderland",
//   "street": "Stadswal",
// }
```

## Source

The data in this project is based on [this
repository](https://github.com/LJPc-solutions/Nederlandse-adressen-en-postcodes/tree/main).
I might at some point set up a mechanism to start tailing changes in that
repository and create releases automatically. This version is however based on
[this revision](https://github.com/LJPc-solutions/Nederlandse-adressen-en-postcodes/commit/a1f2197a129a8e0c54cd9b5197de7f814ff1d0cd).
