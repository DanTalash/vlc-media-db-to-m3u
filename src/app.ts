import { DataSource } from "typeorm";

import { Folder } from "./entities/Folder";
import { Media } from "./entities/Media";
import { Playlist } from "./entities/Playlist";
import { PlaylistMediaRelation } from "./entities/PlaylistMediaRelation";

const DB_FILE = './data/vlc_media.db';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: DB_FILE,
    logging: true,
    entities: [
        Folder,
        Media,
        Playlist,
        PlaylistMediaRelation
    ]
});

export class MediaDbReader {
    run() {
        console.log('Starting process');
        this.runAsync().then(() => {
            console.log('Finished');
        }).catch((err) => {
            console.log(`Error: ${err.message}`);
        });
    }
    
    async runAsync() {
        await this.connect();
        await this.readDb();
    }
    
    async connect() {
        console.log('Connecting to DB');
        await AppDataSource.initialize();
        console.log('Done, connected');
    }
    
    async readDb() {
        console.log('readDb start')
        
        const playlists = await AppDataSource
            .getRepository(Playlist)
            .createQueryBuilder('playlist')
            .innerJoinAndSelect('playlist.items', 'item')
            .innerJoinAndSelect('item.folder', 'folder')
            .getMany();
            
        for (const playlist of playlists) {
            console.log(`Playlist: ${playlist.name}`);
            for (const item of playlist.items) {
                console.log(`Playlist item: ${item.folder.path}/${item.filename} (playlist: '${playlist.name}')`);
                
            }
        }
    }
}

const app = new MediaDbReader();
app.run();