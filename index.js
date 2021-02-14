require("dotenv").config();
import { Loader } from "./node_modules/@googlemaps/js-api-loader";

const loader = new Loader({
  apiKey: process.env.google_Apikey,
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
