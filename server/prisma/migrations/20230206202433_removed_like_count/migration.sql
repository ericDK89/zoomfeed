/*
  Warnings:

  - You are about to drop the column `likes` on the `comment` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "text" TEXT NOT NULL,
    "comment_author_id" TEXT NOT NULL,
    CONSTRAINT "comment_comment_author_id_fkey" FOREIGN KEY ("comment_author_id") REFERENCES "comment_author" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_comment" ("comment_author_id", "created_at", "id", "text") SELECT "comment_author_id", "created_at", "id", "text" FROM "comment";
DROP TABLE "comment";
ALTER TABLE "new_comment" RENAME TO "comment";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
