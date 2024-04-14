import { IgdbGender, IgdbSpecies } from "../constant";

export class GetCharacterFields {
  akas: string[]; //Array of Strings	Alternative names for a character
  checksum: string; //Hash of the object
  country_name: string; //A characters country of origin
  created_at: Date; //datetime	Date this was initially added to the IGDB database
  description: string; //String	A text describing a character
  games: string[]; //Array of Game IDs
  gender: IgdbGender; //Gender Enum
  mug_shot: string; //Reference ID for Character Mug Shot	An image depicting a character
  name: string;
  slug: string; //A url-safe, unique, lower-case version of the name
  species: IgdbSpecies; //Species Enum
  updated_at: Date; //The last date this entry was updated in the IGDB database
  url: string; //The website address (URL) of the item
}
