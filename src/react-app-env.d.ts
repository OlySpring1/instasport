/// <reference types="react-scripts" />

interface SportClub {
  logo: string,
  city: City,
  link: string,
  title: string,
  title_short: string,
  activity: Activity[],
};

interface City {
  slug: string,
  title: string,
};

interface Activity {
  slug: string,
  title: string,
};

interface Params {
  slug: string,
}

interface arrCity {
  slug: string,
}

interface Used {
  key?: number,
}

interface objForComparison  {
  [key: string]: number,
}