import { DataSource } from "typeorm";

import { Folder } from "./entities/Folder";
import { Media } from "./entities/Media";
import { Playlist } from "./entities/Playlist";
// import { PlaylistMediaRelation } from "./entities/PlaylistMediaRelation";

const DB_FILE = './data/vlc_media.db';

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: DB_FILE,
    logging: true,
    entities: [
        Folder,
        Media,
        Playlist,
        // PlaylistMediaRelation
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
        console.log('readDb start');
        
        const playlists = await AppDataSource.getRepository(Playlist).createQueryBuilder().getMany();
        const folders = await AppDataSource.getRepository(Folder).createQueryBuilder().getMany();
        
        console.log(`Playlists: ${JSON.stringify(playlists)}`);
        console.log(`Folders: ${JSON.stringify(folders)}`);
    }
}

/**
 *   
SELECT 
  p.name, 
  m.title, 
  f.path || '/' || m.filename 
FROM `Playlist` p
  
JOIN `PlaylistMediaRelation` pm on pm.playlist_id = p.id_playlist
  
JOIN `Media` m on pm.media_id = m.id_media
  
JOIN `Folder` f on m.folder_id = f.id_folder
 */

const app = new MediaDbReader();
app.run();