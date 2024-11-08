export interface Person {
  name: string;
  height: string;
  mass: string;
  gender: string;
  birth_year: string;
  url: string;
}

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  gravity: string;
  population: string;
  url: string;
}

export interface Starship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  passengers: string;
  url: string;
}

export type FetchListData<T> = T extends 'people'
  ? Person[]
  : T extends 'planets'
    ? Planet[]
    : Starship[];

export interface FetchListProps<T> {
  type: T;
}
