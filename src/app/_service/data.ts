
export class Data {
  id: number;
  name: string;
  status: number;
  date: Date;
  description: string;

  constructor(name: string, description: string ) {
    this.id = 0;
    this.name = name;
    this.status = 1;
    this.date = new Date();
    this.description = description;
  }

}
