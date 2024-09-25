import { Entity, Column, PrimaryColumn, Relation } from "typeorm";

@Entity()
export class PlaylistMediaRelation {
    @PrimaryColumn()
    media_id: number;

    @Column()
    playlist_id: number;

    @Column()
    position: number;
}