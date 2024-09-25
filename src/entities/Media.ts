import { Entity, Column, PrimaryColumn, Relation, ManyToOne, JoinColumn } from "typeorm";
import { Folder } from "./Folder";

@Entity()
export class Media {
    @PrimaryColumn()
    id_media: number;
    
    @Column()
    title: string;
    
    @Column()
    filename: string;

    @ManyToOne(() => Folder, (folder) => folder.mediaItems, { eager: true })
    @JoinColumn({name: 'folder_id'})
    folder: Relation<Folder>
}