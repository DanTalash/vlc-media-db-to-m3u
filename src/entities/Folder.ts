import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
export class Folder {
    @PrimaryColumn()
    id_folder: number;

    @Column('text')
    path: string;
}

/**
 * CREATE TABLE Folder(
id_folder INTEGER PRIMARY KEY AUTOINCREMENT,
path TEXT,
name TEXT COLLATE NOCASE,
parent_id UNSIGNED INTEGER,
is_banned BOOLEAN NOT NULL DEFAULT 0,
device_id UNSIGNED INTEGER,
is_removable BOOLEAN NOT NULL,
nb_audio UNSIGNED INTEGER NOT NULL DEFAULT 0,
nb_video UNSIGNED INTEGER NOT NULL DEFAULT 0,
FOREIGN KEY(parent_id) REFERENCES Folder(id_folder) ON DELETE CASCADE,
FOREIGN KEY(device_id) REFERENCES Device(id_device) ON DELETE CASCADE,
UNIQUE(path,device_id) ON CONFLICT FAIL)
 */