const cityList =[
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:5134086/",
      image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/rochester-2ec3648b5b.jpg",
      name: "Rochester, New York",
      scores: "https://api.teleport.org/api/urban_areas/slug:rochester/scores",
      slug: "https://api.teleport.org/api/urban_areas/slug:rochester/",
      ua_id: "dr8v9"
  },
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:5150529/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/cleveland-293d4e8c4c.jpg",
    name: "Cleveland, Ohio",
    scores: "https://api.teleport.org/api/urban_areas/slug:cleveland/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:cleveland/",
    ua_id: "dpmuh"
  },
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:3583361/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/san-salvador-670f5797be.jpg",
    name: "San Salvador, El Salvador",
    scores: "https://api.teleport.org/api/urban_areas/slug:san-salvador/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:san-salvador/",
    ua_id: "d42tf"
  },
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:3489854/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/kingston-cb632a919d.jpg",
    name: "Kingston, Jamaica",
    scores: "https://api.teleport.org/api/urban_areas/slug:kingston/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:kingston/",
    ua_id: "d71qk"
  }
]

const scores = [
  {'Housing': 8.9},
  {'Cost of Living': 5.9},
  {'Startups': 2.6},
  {'Venture Capital': 0},
  {'Travel Connectivity': 0.8},
  {'Commute': 4.9},
  {'Business Freedom': 6.6},
  {'Safety': 5.5},
  {'Healthcare': 5.4},
  {'Education': 0},
  {'Environmental Quality': 3.0},
  {'Economy': 1.8},
  {'Taxation': 6.1},
  {'Internet Access': 4.5},
  {'Leisure & Culture': 4.3},
  {'Tolerance': 2.8},
  {'Outdoors': 3.3}
 ]

const mockState = {
  img: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/albuquerque-f730c0301f.jpg",
  latitude: 35.08449,
  longitude: -106.65114,
  name: "Albuquerque",
  population: "559,121",
  rating: 51.512162162162156,
  scores: [
    {'Housing': 7.2620000000000005},
    {'Cost of Living': 6.059},
    {'Startups': 3.7720000000000002},
    {'Venture Capital': 1.4929999999999999},
    {'Travel Connectivity': 1.4555000000000002},
    {'Commute': 5.05575},
    {'Business Freedom': 8.671},
    {'Safety': 1.3435},
    {'Healthcare': 8.508666666666665},
    {'Education': 4.151999999999999},
    {'Environmental Quality': 7.3195},
    {'Economy': 6.5145},
    {'Taxation': 4.346},
    {'Internet Access': 5.396000000000001},
    {'Leisure & Culture': 4.890000000000001},
    {'Tolerance': 7.028499999999999},
    {'Outdoors': 3.5155},
  ],
  summary: "Albuquerque, New Mexico, is among the top cities with a free business environment. According to our city rankings, this is a good place to live with high ratings in housing, healthcare and environmental quality."

}
//  export default cityList

// export {scores, cityList, mockState}

export { cityList, scores, mockState}