const superheroes = [
  {
    name: "Roof watcher",
    powers: ["overthinking", "insomnia"],
    primaryNemesis: "day light",
    img: "https://cdn.stocksnap.io/img-thumbs/960w/facing-seagull_JAKTSGL5FA.jpg",
    lifePercentage: 1,
    dob: {
      day: 14,
      month: 5,
      year: 1990,
    },
    hasCape: true,
  },
  {
    name: "Mind Mover",
    powers: ["Telekenesis"],
    primaryNemesis: "LightningMan",
    img: "https://media.istockphoto.com/vectors/cartoon-superhero-character-with-a-green-cape-and-costume-and-an-on-vector-id815620074?k=20&m=815620074&s=170667a&w=0&h=4YpUL5JRnYor-VHbJFK3N-xwn_EuXJY643kMQ-2vVYw=",
    lifePercentage: 88,
    dob: {
      day: 17,
      month: 3,
      year: 1988,
    },
    hasCape: true,
  },
  {
    name: "Firelfy",
    powers: ["procrastinating", "perfectionism"],
    primaryNemesis: "Superwoman",
    img: "https://cdn.stocksnap.io/img-thumbs/960w/facing-seagull_JAKTSGL5FA.jpg",
    lifePercentage: 75,
    dob: {
      day: 24,
      month: 8,
      year: 2021,
    },
    hasCape: false,
  },
  {
    name: "Daisy Bright",
    powers: ["Running fast", "Electric magic"],
    primaryNemesis: "Lovely-Man",
    img: "https://www.thewrap.com/wp-content/uploads/2019/10/Thunder-Black-Lightning.jpg",
    lifePercentage: 120,
    dob: {
      day: 4,
      month: 5,
      year: 1986,
    },
    hasCape: true,
  },
  {
    name: "Mar-a-Dona",
    powers: ["score many goals", "hand of god"],
    primaryNemesis: "Peh-Leh",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/8ed73f59023853.5a12abd518b45.jpg",
    lifePercentage: 200,
    dob: {
      day: 11,
      month: 9,
      year: 2001,
    },
    hasCape: true,
  },
  {
    name: "Hatman",
    powers: ["has a hat"],
    primaryNemesis: "Sunman",
    img: "https://i.guim.co.uk/img/media/2faac6d05b8d993e70e71b741b49ae3d579065c7/0_1082_3840_2304/master/3840.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=1c018c43d4f5e230f8673bda26ae6014",
    lifePercentage: 120,
    dob: {
      day: 11,
      month: 11,
      year: 1923,
    },
    hasCape: false,
  },
  {
    name: "The Caffeinator",
    powers: ["motivational  speaking", "can make people poop themselves"],
    primaryNemesis: "Zaquaman",
    img: "https://st2.depositphotos.com/3591429/11402/i/950/depositphotos_114028024-stock-photo-barista-making-coffee-in-cafe.jpg",
    lifePercentage: 555,
    dob: {
      day: 1,
      month: 10,
      year: 2015,
    },
    hasCape: true,
  },
  {
    name: "Cupcake",
    powers: ["Runing", "Laser beam"],
    primaryNemesis: "JS-Superman",
    img: "https://www.pngwing.com/en/free-png-pofek",
    lifePercentage: 200,
    dob: {
      day: 1,
      month: 2,
      year: 2022,
    },
    hasCape: true,
  },
  {
    name: "John Paul II",
    powers: ["tasty guacamole", "manipulation"],
    primaryNemesis: "Devil",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d8/George_H_W_Bush_and_Pope_John_Paul_II_%28cropped%29.jpg",
    lifePercentage: 0,
    dob: {
      day: 18,
      month: 5,
      year: 1920,
    },
    hasCape: false,
  },
  {
    name: "Elon Husky",
    powers: ["time-travel", "dog-whispering"],
    primaryNemesis: "All of Humanity",
    img: "https://c.ndtvimg.com/2020-02/rcakle8c_elon-musk-elon-musk-vampire_625x300_26_February_20.jpg?im=Resize=(1230,900)",
    lifePercentage: 3000,
    dob: {
      day: 49,
      month: 18,
      year: 3879,
    },
    hasCape: false,
  },
  {
    name: "Zaquaman",
    powers: ["Talk to fish", "Swim fast", "carry a heavy Trident"],
    primaryNemesis: "Grammar",
    img: "https://scontent-cph2-1.xx.fbcdn.net/v/t1.6435-9/44832234_1695190867259725_1997861701965316096_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=GsOMHnX4Ow4AX9G7YwF&_nc_ht=scontent-cph2-1.xx&oh=00_AT_F1fCaRgxwRU7T7tLv5Pe5PN0WNzR9zOC1dKdLteuSww&oe=622189B7",
    lifePercentage: 85,
    dob: {
      day: 30,
      month: 5,
      year: 1995,
    },
    hasCape: false,
  },
  {
    name: "Maeb",
    powers: ["Drawing", "Making comics"],
    primaryNemesis: "Photoshop",
    img: "https://pbs.twimg.com/media/FKcLLaBWYAQNUrt?format=jpg&name=small",
    lifePercentage: 60,
    dob: {
      day: 1,
      month: 2,
      year: 1999,
    },
    hasCape: true,
  },
  {
    name: "Overlord",
    powers: [
      "death stare",
      "flying",
      "invisibility",
      "teleporting",
      "god strenght",
    ],
    primaryNemesis: "Angels",
    img: "https://i.pinimg.com/564x/78/23/7d/78237d679316debb3bcaea07f65ebe53.jpg",
    lifePercentage: 1000,
    dob: {
      day: 6,
      month: 6,
      year: 999,
    },
    hasCape: false,
  },
  {
    name: "WonderWoman",
    powers: ["superhuman strength"],
    primaryNemesis: "Paula von Gunther",
    img: "https://pixabay.com/images/id-4458360/",
    lifePercentage: 70,
    dob: {
      day: 22,
      month: 3,
      year: -1059,
    },
    hasCape: true,
  },
  {
    name: "Blizz",
    powers: ["freeze", "snow", "flying"],
    primaryNemesis: "Flash",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHJ-CYPpOZmwNA2is8hCfmJeqBmUeuA0l7w&usqp=CAU",
    lifePercentage: 100,
    dob: {
      day: 1,
      month: 2,
      year: 2022,
    },
    hasCape: true,
  },
  {
    name: "Abaddon",
    powers: ["Shapeshifting", "Mind Manipulation", "Imortality"],
    primaryNemesis: "Vigilance",
    img: "https://i.pinimg.com/originals/f1/03/fd/f103fde4db499d8fac84640d6206e111.jpg",
    lifePercentage: 100,
    dob: {
      day: 31,
      month: 10,
      year: 650,
    },
    hasCape: true,
  },
  {
    name: "Loch Ness Monster",
    powers: ["Tsunamis", "infrasound destructive scream"],
    primaryNemesis: "Climate Change",
    img: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.thinglink.me%2Fapi%2Fimage%2F525024404439040002%2F1024%2F10%2Fscaletowidth%2F0%2F0%2F1%2F1%2Ffalse%2Ftrue%3Fwait%3Dtrue&f=1&nofb=1",
    lifePercentage: 80,
    dob: {
      day: 13,
      month: 6,
      year: 420,
    },
    hasCape: false,
  },
  {
    name: "Superhero baby",
    powers: ["flying", "talking too much", "eating a lot of food"],
    primaryNemesis: "Superman",
    img: "https://www.familyeducation.com/sites/default/files/styles/desktop/public/2020-10/75-superhero-names-for-little-wonder.jpg?itok=MeWef7UW",
    lifePercentage: 100,
    dob: {
      day: 1,
      month: 2,
      year: 2022,
    },
    hasCape: true,
  },
  {
    name: "Aloe Vera",
    powers: ["Power of healing"],
    primaryNemesis: "Lord Burnalot",
    img: "https://imgbin.com/png/nXDWT7Fq/superhero-female-png",
    lifePercentage: 100,
    dob: {
      day: 12,
      month: 12,
      year: 2012,
    },
    hasCape: true,
  },
  {
    name: "Lord Destroyer",
    powers: ["JS", "talking to much"],
    primaryNemesis: "superman",
    img: "https://shop62677.sfstatic.io/upload_dir/shop/sm_lfe_ballon_4862.jpg",
    lifePercentage: 200,
    dob: {
      day: 1,
      month: 12,
      year: 1996,
    },
    hasCape: true,
  },
  {
    name: "Invisible Man",
    powers: ["Invisibility", "silence"],
    primaryNemesis: "ShovelMan",
    img: "https://ats-heritage.co.uk/wp-content/uploads/2016/09/iStock_96204197_XLARGE.jpg",
    lifePercentage: 100,
    dob: {
      day: 1,
      month: 1,
      year: 1996,
    },
    hasCape: true,
  },
  {
    name: "ShovelMan",
    powers: ["Shoveling", "resting"],
    primaryNemesis: "Lord Destroyer van der DOM",
    img: "https://previews.123rf.com/images/auremar/auremar1210/auremar121000747/15579267-hombre-feliz-que-sostiene-una-pala.jpg",
    lifePercentage: 4000,
    dob: {
      day: 1,
      month: 12,
      year: 1996,
    },
    hasCape: true,
  },
  {
    name: "Super-crazy Cat lady",
    powers: ["sharp claws", "throwing furballs"],
    primaryNemesis: "men",
    img: "https://www.petguide.com/wp-content/uploads/2015/06/crazy-cat-lady-.jpg",
    dob: {
      day: 7,
      month: 7,
      year: 2000,
    },
    hasCape: true,
  },
  {
    name: "Fatneek daddy the animal",
    powers: ["existing"],
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Fofficialfatneek&psig=AOvVaw1T9DLdWsopYLOZrJAMFTZy&ust=1644054273428000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCND7pNDh5fUCFQAAAAAdAAAAABAD",
    hasCape: true,
  },
  {
    name: "ChocoGirl",
    powers: [
      "fast knowledge assimilation",
      "spiky sarcasm",
      "can create chocolate at will",
    ],
    primaryNemesis: "Passive Patrick",
    img: "https://static.wikia.nocookie.net/finalfantasy/images/1/1e/Louelle_from_WotV.png",
    lifePercentage: 100,
    dob: {
      day: 22,
      month: 9,
      year: 1278,
    },
    hasCape: false,
  },
  {
    name: "Ratwoman",
    powers: [
      "climbing",
      "great memory",
      "great balance",
      "excellent swimmer",
      "eats trash",
    ],
    primaryNemesis: "Catwoman",
    img: "https://twitter.com/furrygirlsdaily/status/1362016239355224068/photo/2",
    lifePercentage: 200,
    dob: {
      day: 17,
      month: 12,
      year: 1997,
    },
    hasCape: false,
  },
  {
    name: "Mega Mor",
    powers: [
      "super strong",
      "healing powers",
      "makes all food super bland",
      "scares away monsters",
      "hilarious",
    ],
    primaryNemesis: "Closet Monster",
    img: "https://media.istockphoto.com/vectors/woman-superhero-imitates-the-flight-of-a-child-superhero-on-his-vector-id1152345161?k=20&m=1152345161&s=612x612&w=0&h=qlIc5mcWA4GCQlh1A5-f9WU8WNSCUsYaZTyLNUMgu04=",
    lifePercentage: 68,
    dob: {
      day: 6,
      month: 1,
      year: 2019,
    },
    hasCape: false,
  },
  {
    name: "aster",
    powers: ["JS", "talking too much"],
    primaryNemesis: "Zelo",
    img: "https://images.hdqwalls.com/download/irelia-league-of-legends-art-qe-3840x2160.jpg",
    lifePercentage: 200,
    dob: {
      day: 4,
      month: 2,
      year: 2022,
    },
    hasCape: false,
  },
  {
    name: "E-clair",
    powers: ["Candy Crush Saga", "glowy skin", "reborning each day"],
    primaryNemesis: "vegetables",
    img: "https://mir-s3-cdn-cf.behance.net/projects/404/a90781125898145.Y3JvcCwzNTAwLDI3MzcsMCwzODE.png",
    lifePercentage: 65,
    dob: {
      day: 4,
      month: 2,
      year: 2022,
    },
    hasCape: false,
  },
  {
    name: "Chameleo",
    powers: ["invisibility", "changing color"],
    primaryNemesis: "Monkey Man",
    img: "https://kbimages1-a.akamaihd.net/aa693aef-6a05-4824-9875-1ed34cd7357e/166/300/False/the-invisible-man-266.jpg",
    lifePercentage: 1,
    dob: {
      day: 29,
      month: 2,
      year: 2000,
    },
    hasCape: true,
  },
  {
    name: "Berry the Blue",
    powers: ["power naps", "pretty when crying"],
    primaryNemesis: "Berry the Straw",
    img: "https://rlv.zcache.ca/blue_berry_cute_blueberry_pun_poster-rec3967b0867a4d05ac595d89319eece5_w2q_8byvr_540.jpg",
    lifePercentage: 56,
    dob: {
      day: 1,
      month: 2,
      year: 2022,
    },
    hasCape: false,
  },
  {
    name: "Blux",
    powers: ["jump higher", "run faster", "disappear"],
    primaryNemesis: "Superman",
    img: "https://strakers.files.wordpress.com/2007/01/venom.jpg",
    lifePercentage: 200,
    dob: {
      day: 1,
      month: 2,
      year: 200,
    },
    hasCape: true,
  },
  {
    name: "jakobman",
    powers: ["eat his wait in fruits", "talk a lot"],
    primaryNemesis: "destroyer",
    img: "https://cdn.shopify.com/s/files/1/1453/2568/products/playskool-heroes-marvel-super-hero-adventures-captain-america-actionfigur-indhold_1024x1024.jpg?v=1605197126",
    lifePercentage: 100,
    dob: {
      day: 6,
      month: 8,
      year: 1987,
    },
    hasCape: false,
  },
  {
    name: "Mr Rat",
    powers: ["super smart", "super fast"],
    primaryNemesis: "Ms Cat",
    img: "https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg",
    lifePercentage: 500,
    dob: {
      day: "13",
      month: "9",
      year: "1968",
    },
    hasCape: true,
  },
  {
    name: "Teddybear",
    powers: [
      "Turn you into stone with cute look",
      "shoot laser rainbow",
      "throw burning glitter",
    ],
    primaryNemesis: ["Ratwoman", "catwoman"],
    img: "https://image.made-in-china.com/202f0j00LeChmPyZiibd/Fat-Brown-Bear-Mascot-Costume-Inflatable-Plush-Teddy-Bear-Costume.jpg",
    lifePercentage: 500,
    dob: {
      day: 12,
      month: 2,
      year: 2000,
    },
    hasCape: false,
  },
  {
    name: "The Super Evil Banana Man",
    powers: [
      "makes people slip",
      "makes people fall",
      "makes people uncomfortable while eating bananas",
      "embarassing people",
    ],
    img: "http://www.pxleyes.com/images/contests/what-you-eat/fullsize/Banana-man-4d8a6d7b1842c.jpg",
    hasCape: false,
  },
  {
    name: "Bheem Bjaye Band",
    powers: ["JS", "flying", "fast"],
    primaryNemesis: "Strongman",
    img: "https://pbs.twimg.com/profile_images/378800000246129714/3cffc0154ecc9be3c9fc95712a600108_400x400.jpeg",
    lifePercentage: 300,
    dob: {
      day: 15,
      month: 1,
      year: 2022,
    },
    hasCape: true,
  },
];

// alert(
//   "1. Checking if JS file is linked up correctly. \n2. Always open the inspector/console when woorking with the JS \n3. Write your code in the end of the js-file \n4. Don't use alert boxes for UI... \n5. Delete this message or comment it out"
// );
// console.table(superheroes);

//l 32 changed
/* write your code here */
superheroes.forEach((hero) => {
  console.log(hero);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector("h2").textContent = hero.name;
  copy.querySelector("img").src = hero.img;
  if (hero.lifePercentage <= 1000) {
    const divEl = copy.querySelector("div");
    // divEl.style.width = `${hero.lifePercentage}%`;
    divEl.style.width = hero.lifePercentage / 10 + "%";
    if (hero.lifePercentage < 400) {
      divEl.classList.add("low-life");
    }
  }
  document.querySelector("main").appendChild(copy);
});
