const list = document.getElementById("locations");
let locations = {
  nwLocation: {
    lat: 51.1536661,
    long: -114.2151361,
  },
  neLocation: {
    lat: 51.0806336,
    long: -113.9828701,
  },
  swLocation: {
    lat: 51.016755,
    long: -114.161604,
  },
  seLocation: {
    lat: 50.9785041,
    long: -114.0699092,
  },
};

let mymap = L.map("mapid").setView([51.0734234, -114.0505892], 11);

list.addEventListener("click", (e) => {
  if (e.target.parentElement.localName === "li") {
    removeActiveClass();
    e.target.parentElement.classList.add("active");
  } else if (e.target.localName === "li") {
    removeActiveClass();
    e.target.classList.add("active");
  }

  switch (e.target.id || e.target.parentElement.id) {
    case "nw-address": {
      mymap.flyTo(
        new L.LatLng(locations.nwLocation.lat, locations.nwLocation.long),
        18
      );
      break;
    }
    case "ne-address": {
      mymap.flyTo(
        new L.LatLng(locations.neLocation.lat, locations.neLocation.long),
        18
      );
      break;
    }
    case "se-address": {
      mymap.flyTo(
        new L.LatLng(locations.seLocation.lat, locations.seLocation.long),
        18
      );
      break;
    }
    case "sw-address": {
      mymap.flyTo(
        new L.LatLng(locations.swLocation.lat, locations.swLocation.long),
        18
      );
      break;
    }
  }
});

function removeActiveClass() {
  for (let i = 0; i < list.childNodes.length; i++) {
    if (
      list.childNodes[i].classList !== undefined &&
      list.childNodes[i].classList.contains("active")
    ) {
      list.childNodes[i].classList.remove("active");
    }
  }
}

L.marker([locations.nwLocation.lat, locations.nwLocation.long]).addTo(mymap);
L.marker([locations.neLocation.lat, locations.neLocation.long]).addTo(mymap);
L.marker([locations.swLocation.lat, locations.swLocation.long]).addTo(mymap);
L.marker([locations.seLocation.lat, locations.seLocation.long]).addTo(mymap);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYnNoZW0iLCJhIjoiY2tsNnZnenEyMTJiZTJ2cXhuaG9zN2Y2eSJ9.D9rDFGJoiMOxMGZ7XUY8ZQ",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoiYnNoZW0iLCJhIjoiY2tsNnZnenEyMTJiZTJ2cXhuaG9zN2Y2eSJ9.D9rDFGJoiMOxMGZ7XUY8ZQ",
  }
).addTo(mymap);
