import audi from "/audi-a1.jpg";
import bmw from "/bmw-320.jpg";
import golf6 from "/golf-6.jpg";
import mercedes from "/mercedes-benz.jpg";
import passat from "/passat-cc.jpg";
import toyotaCamry from "/toyota-camry.jpg";
export const cars = [
  {
    id: 1,
    name: "Audi A1 S-Line",
    imgUrl: audi,
    rentPerDay: 45,
    details: {
      model: "Audi",
      mark: "A1",
      year: 2012,
      doors: 4,
      ac: true,
      transmission: "Manual",
      fuel: "Gasoline",
    },
  },
  {
    id: 2,
    name: "VW Golf 6",
    imgUrl: golf6,
    rentPerDay: 37,
    details: {
      model: "Golf 6",
      mark: "Volkswagen",
      year: 2008,
      doors: 4,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
    },
  },
  {
    id: 3,
    name: "Toyota Camry",
    imgUrl: toyotaCamry,
    rentPerDay: 30,
    details: {
      model: "Camry",
      mark: "Toyota",
      year: 2006,
      doors: 4,
      ac: true,
      transmission: "Automatic",
      fuel: "Hybrid",
    },
  },
  {
    id: 4,
    name: "BMW 320 ModernLine",
    imgUrl: bmw,
    rentPerDay: 35,
    details: {
      model: "320",
      mark: "BMW",
      year: 2012,
      doors: 4,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
    },
  },
  {
    id: 5,
    name: "Mercedes-Benz GLK",
    imgUrl: mercedes,
    rentPerDay: 50,
    details: {
      model: "Benz GLK",
      mark: "Mercedes",
      year: 2006,
      doors: 4,
      ac: true,
      transmission: "Manual",
      fuel: "Diesel",
    },
  },
  {
    id: 6,
    name: "VW Passat CC",
    imgUrl: passat,
    rentPerDay: 25,
    details: {
      model: "Passat CC",
      mark: "Volkswagen",
      year: 2008,
      doors: 4,
      ac: true,
      transmission: "Automatic",
      fuel: "Gasoline",
    },
  },
];
