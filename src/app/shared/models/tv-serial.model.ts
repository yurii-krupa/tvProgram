import { TvItem } from './tv-item.model';

export class TvSerial extends TvItem {

  genre: [string];
  crew?: [string];
  season: number;

  constructor(data: any) {
    super(data);
    this.genre = data.genre;
    this.crew = data.crew || [];
    this.season = data.season || 1;
  }

}
