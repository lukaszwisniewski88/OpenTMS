import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const placesTable = sqliteTable("places", {
  id: integer("id").primaryKey(),
  name: text("name"),
  street: text("street"),
  city: text("city"),
  postal_code: text("postal_code"),
  pos_lat: text("pos_lat"),
  pos_lng: text("pos_lng"),
});
