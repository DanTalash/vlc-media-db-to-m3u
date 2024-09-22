import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Media {
    @PrimaryColumn()
    id_media: number;
    
    @Column()
    title: string;
    
    @Column()
    filename: string;
}

/**
 * CREATE TABLE Media(
id_media INTEGER PRIMARY KEY AUTOINCREMENT,
type INTEGER,
subtype INTEGER NOT NULL DEFAULT 0,
duration INTEGER DEFAULT -1,
last_position REAL DEFAULT -1,
last_time INTEGER DEFAULT -1,
play_count UNSIGNED INTEGER NOT NULL DEFAULT 0,
last_played_date UNSIGNED INTEGER,
insertion_date UNSIGNED INTEGER,
release_date UNSIGNED INTEGER,
title TEXT COLLATE NOCASE,
filename TEXT COLLATE NOCASE,
is_favorite BOOLEAN NOT NULL DEFAULT 0,
is_present BOOLEAN NOT NULL DEFAULT 1,
device_id INTEGER,
nb_playlists UNSIGNED INTEGER NOT NULL DEFAULT 0,
folder_id UNSIGNED INTEGER,
import_type UNSIGNED INTEGER NOT NULL,
group_id UNSIGNED INTEGER,
forced_title BOOLEAN NOT NULL DEFAULT 0,
artist_id UNSIGNED INTEGER,
genre_id UNSIGNED INTEGER,
track_number UNSIGEND INTEGER,
album_id UNSIGNED INTEGER,
disc_number UNSIGNED INTEGER,
lyrics TEXT,
FOREIGN KEY(group_id) REFERENCES MediaGroup(id_group) ON DELETE RESTRICT,
FOREIGN KEY(folder_id) REFERENCES Folder(id_folder)FOREIGN KEY(artist_id) REFERENCES Artist(id_artist) ON DELETE SET NULL,
FOREIGN KEY(genre_id) REFERENCES Genre(id_genre),FOREIGN KEY(album_id) REFERENCES Album(id_album)  ON DELETE SET NULL)
 */