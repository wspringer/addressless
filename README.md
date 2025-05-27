# README

In the Netherlands, every address is uniquely identified by postcode and
housenumber. This library wraps a database with all addresses in the
Netherlands, allowing you to quickly revolve the address details for postcode
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
