# Migration `20200920230809-name-column-in-service`

This migration has been generated by Will Gottschalk at 9/20/2020, 4:08:09 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Service" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "name" TEXT NOT NULL,
    "branchName" TEXT NOT NULL,
    "buildCommand" TEXT NOT NULL,
    "publishDirectory" TEXT NOT NULL,

    FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE,
PRIMARY KEY ("id")
);
INSERT INTO "new_Service" ("id", "userId", "branchName", "buildCommand", "publishDirectory") SELECT "id", "userId", "branchName", "buildCommand", "publishDirectory" FROM "Service";
DROP TABLE "Service";
ALTER TABLE "new_Service" RENAME TO "Service";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200920225241-optional-user-for-service-table..20200920230809-name-column-in-service
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 model User {
   id         String   @id @default(cuid())
@@ -20,8 +20,9 @@
   id String @id @default(cuid())
   user User? @relation(fields: [userId], references: [id])
   userId String?
+  name String
   branchName String
   buildCommand String
   publishDirectory String
 }
```


