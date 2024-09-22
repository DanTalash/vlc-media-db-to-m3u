import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Playlist {
    @PrimaryColumn()
    id_playlist: number;

    @Column('text')
    name: string;
}

/**
* CREATE TABLE 
* Playlist(
id_playlist INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT COLLATE NOCASE,
creation_date UNSIGNED INT NOT NULL,
artwork_mrl TEXT,
nb_video UNSIGNED INT NOT NULL DEFAULT 0,
nb_audio UNSIGNED INT NOT NULL DEFAULT 0,
nb_unknown UNSIGNED INT NOT NULL DEFAULT 0,
nb_present_video UNSIGNED INT NOT NULL DEFAULT 0 CHECK(nb_present_video <= nb_video),
nb_present_audio UNSIGNED INT NOT NULL DEFAULT 0 CHECK(nb_present_audio <= nb_audio),
nb_present_unknown UNSIGNED INT NOT NULL DEFAULT 0 CHECK(nb_present_unknown <= nb_unknown),
duration UNSIGNED INT NOT NULL DEFAULT 0,
nb_duration_unknown UNSIGNED INT NOT NULL DEFAULT 0)
*/