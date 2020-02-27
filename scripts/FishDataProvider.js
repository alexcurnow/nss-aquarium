const fishCollection = [
  {
    img: "https://images.pexels.com/photos/128756/pexels-photo-128756.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    name: 'Nasty',
  species: 'Clownfish',
  location: 'Great Barrier Reef',
  length: 2,
  food: ['burgers', 'milkshakes', 'racoons']
  },

  {
    img: "https://cdn0.wideopenpets.com/wp-content/uploads/2019/10/Fish-Names-770x405.png",
    name: 'Cyborg',
  species: 'a cyborg',
  location: 'probably a cyborg manufacturing facility',
  length: 2000,
  food: ['exotic metals', 'bio-fuel']
  },

  {
    img: "https://www.thesprucepets.com/thmb/KbQ0Y9A6yooZPvxrbhMGn1PdXAU=/1280x853/filters:no_upscale():max_bytes(150000):strip_icc()/step_2-telescope_goldfish-596f718f6f53ba0011f4f763.jpg",
    name: 'Spider',
  species: 'bug-fish?',
  location: 'the web',
  length: 'so small',
  food: ['other living things', 'tires', 'poo']
  },

  {
    img: "https://cdn.shopify.com/s/files/1/1529/9657/articles/Blog_Post_Header_81_1600x.jpg?v=1579105473",
    name: 'Zeesh',
  species: 'Yeesh',
  location: 'Leesh',
  length: 17,
  food: ['bits', 'only bits']
  }

]

export const useFish = () => {
 return fishCollection.slice()
}
