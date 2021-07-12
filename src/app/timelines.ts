export interface Timeline {
  id: number;
  name: string;
  creationDate: Date;
  updateDate: Date;
  category: string;
  cardList : Card[];
}
/*
export const timelines = [{
  id: 1,
name: 'la tête à toto',
categorie: '22',
creationDate: '2021-07-06T14:22:11.685',
updatedDate: '2021-07-06T14:22:11.685Z',
numberOfCards: '22',
},
{
  id: 2,
    name: "la tête à toto bis",
  categorie: '22',
  creationDate: '2021-07-06T14:22:11.685Z',
  updatedDate: '2021-07-06T14:22:11.685Z',
  numberOfCards: '22',
}
];*/
export interface Card{
  id: number;
  name: string;
  date: Date;
  imageUrl: string;
  description: string;
}

/*export const cards = [{ id :1, name: ' Facebook', date:new Date('2004-02-04'), timeline_id : 1,description: 'Invention du plus célèbre réseau social'},
  { id :2, name: 'Twitter', date: new Date('2004-02-04'),  timeline_id: 1, description :'Le réseau social préféré de D. Trump'}
];*/


