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

const randomCities = [
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:5308655/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/phoenix-9fedc88f57.jpg",
    name: "Phoenix, Arizona",
    scores: "https://api.teleport.org/api/urban_areas/slug:phoenix/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:phoenix/",
    ua_id: "9tbq3"
  },
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:5263045/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/milwaukee-aa45ba9b6b.jpg",
    name: "Milwaukee, Wisconsin",
    scores: "https://api.teleport.org/api/urban_areas/slug:milwaukee/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:milwaukee/",
    ua_id: "dp9kz"
  },
  {  
    geoNameId: "https://api.teleport.org/api/cities/geonameid:6167865/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/toronto-a6fcbe977a.jpg",
    name: "Toronto, Canada",
    scores: "https://api.teleport.org/api/urban_areas/slug:toronto/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:toronto/",
    ua_id: "dpz83"
  },
  {
    geoNameId: "https://api.teleport.org/api/cities/geonameid:5261457/",
    image: "https://d13k13wj6adfdf.cloudfront.net/urban_areas/madison-3d09b9f142.jpg",
    name: "Madison, Wisconsin",
    scores: "https://api.teleport.org/api/urban_areas/slug:madison/scores",
    slug: "https://api.teleport.org/api/urban_areas/slug:madison/",
    ua_id: "dp8mj"
  }
]

const mockUrbanAreas = {
  count: 2,
  _links: {
    curries: [
      {
        href:"https://developers.teleport.org/api/resources/Location/#!/relations/{rel}/",
        name: 'location'
      },
      {
        href:"https://developers.teleport.org/api/resources/City/#!/relations/{rel}/",
        name: 'city'
      },
    ]
  ,
    self: {href: "https://api.teleport.org/api/urban_areas/"},
    'ua:items': [
      {href: "https://api.teleport.org/api/urban_areas/slug:albuquerque/",
      name: 'Albuquerque'
      },
      {href: "https://api.teleport.org/api/urban_areas/slug:anchorage/",
      name: 'Anchorage'
      }
    ]
  }
}

export { cityList, scores, mockState, randomCities, mockUrbanAreas}