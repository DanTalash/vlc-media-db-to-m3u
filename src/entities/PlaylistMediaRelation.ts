import { Entity, Column, PrimaryColumn, Relation } from "typeorm";

@Entity()
export class PlaylistMediaRelation {

}

/**
 * CREATE TABLE PlaylistMediaRelation(
media_id INTEGER,
playlist_id INTEGER,
position INTEGER,
FOREIGN KEY(media_id) REFERENCES Media(id_media) ON DELETE NO ACTION,
FOREIGN KEY(playlist_id) REFERENCES Playlist(id_playlist) ON DELETE CASCADE)
 */