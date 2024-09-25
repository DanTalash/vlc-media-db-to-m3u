import { Entity, Column, PrimaryColumn, Relation, OneToMany, JoinColumn } from "typeorm";
import { Media } from "./Media";

@Entity()
export class Folder {
    @PrimaryColumn()
    id_folder: number;

    @Column('text')
    path: string;

    @OneToMany(() => Media, (media) => media.folder)
    // @JoinColumn({name: 'testColumn'})
    mediaItems: Relation<Media>[];
}