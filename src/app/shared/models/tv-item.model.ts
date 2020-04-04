export class TvItem {

  id: number;
  title: string;
  premiereDate: string;
  ownership: string;
  distribution: string;

  constructor(data: any) {
    this.id = data.id;
    this.title = data.title;
    this.premiereDate = data.premiere_date;
    this.ownership = data.ownership;
    this.distribution = data.distribution;
  }

}
