export interface dataType {
  title: string;
  author: string;
  description: string;
  content: string;
  urlToImage: string;
  publishedAt: Date;
  url: string;
}

export class DataTypeModel implements dataType {
  title = "";
  author = "";
  description = "";
  content = "";
  urlToImage = "";
  publishedAt = new Date();
  url = "";
}


