import { Entity, Column, PrimaryColumn, Relation, JoinTable, ManyToMany } from "typeorm";
import { Media } from "./Media";

@Entity()
export class Playlist {
    @PrimaryColumn()
    id_playlist: number;

    @Column('text')
    name: string;

    @ManyToMany(() => Media)
    @JoinTable({
        name: 'PlaylistMediaRelation',
        joinColumn: {
            name: "playlist_id",
            referencedColumnName: "id_playlist"
        },
        inverseJoinColumn: {
            name: "media_id",
            referencedColumnName: "id_media"
        }
    })
    items: Relation<Media>[];
}