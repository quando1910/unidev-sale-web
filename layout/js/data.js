var categories = new Vue({
  el: '#categories',
  data: {
    content: 'Vestibulum ante ipsum primis in faucibus orci. Morbi tincidunt urna imperdiet tincidunt rhoncus. Sed mollis ligula non massa aliquam faucibus.',
    categories: [
      {
        id: "1",
        title: "Hotel & Homestay",
        srcImg: "images/team/member-1.jpg",
        altImg: "Hotel & Homestay"
      },
      {
        id: "2",
        title: "Cafe & Food",
        srcImg: "images/team/member-2.jpg",
        altImg: "Cafe & Food"
      },
      {
        id: "3",
        title: "Wedding",
        srcImg: "images/team/member-3.jpg",
        altImg: "Wedding"
      },
      {
        id: "4",
        title: "Other Business",
        srcImg: "images/team/member-4.jpg",
        altImg: "Other Business"
      },
    ] 

  }
})

var projects = new Vue({
  el: '#projects',
  data: {
    content: 'Phasellus metus arcu, aliquam vitae pulvinar eget, placerat pellentesque risus. Fusce urna nisi, euismod non semper in. Sagittis fermentum non urna.',
    filterLinks: [
      {
        filter: "*",
        name: "All",
        clActive: "active"
      },{
        filter: ".cafe",
        name: "Cafe & Food",
        clActive: ""
      },{
        filter: ".hotel",
        name: "Hotel & Homestay",
        clActive: ""
      },{
        filter: ".wedding",
        name: "Wedding",
        clActive: ""
      },
    ],
    projects: [
      {
        srmImg: "images/portfolio/project-1.jpeg",
        title: "COFFEEBEN",
        category: "Cafe & Food",
        linkWeb: "http://mutationmedia.net/COFFEEBEN/",
        filter: "cafe"
      },{
        srmImg: "images/portfolio/project-2.jpeg",
        title: "The Royal Hotel",
        category: "Hotel & Homestay",
        linkWeb: "http://rn53themes.net/themes/demo/the-royal-hotel/main.html",
        filter: "hotel"
      },{
        srmImg: "images/portfolio/project-3.jpeg",
        title: "Fooday",
        category: "Cafe & Food",
        linkWeb: "http://sun-themes.com/html/fooday/homepage2.html",
        filter: "cafe"
      },{
        srmImg: "images/portfolio/project-4.jpeg",
        title: "Wedding Planner",
        category: "Wedding",
        linkWeb: "https://wedding-planner.freevision.me",
        filter: "wedding"
      },{
        srmImg: "images/portfolio/project-5.jpeg",
        title: "Milenia Hotel Resort",
        category: "Hotel & Homestay",
        linkWeb: "http://velikorodnov.com/html/milenia/",
        filter: "hotel"
      },{
        srmImg: "images/portfolio/project-6.jpeg",
        title: "Baker Coffee",
        category: "Cafe & Food",
        linkWeb: "http://craftedpixels.net/demo-html/baker-coffee-html/",
        filter: "cafe"
      },{
        srmImg: "images/portfolio/project-7.jpeg",
        title: "Kataleya",
        category: "Cafe & Food",
        linkWeb: "http://anpsthemes.com/kataleya-html/index.html",
        filter: "cafe"
      },{
        srmImg: "images/portfolio/project-8.jpeg",
        title: "Yumi",
        category: "Cafe & Food",
        linkWeb: "http://templates.aucreative.co/yumi/index.html",
        clFilter: "cafe"
      }
      
    ]

  }
})

var testimonials = new Vue({
  el: '#testimonials',
  data: {
    content: "Donec purus est, tincidunt eu sodales quis, vehicula quis enim. Morbi dapibus, tellus a gravida faucibus, elit ipsum sollicitudin risus, id ultricies arcu neque eget velit.",
    clients: [
      {
        srcImg: "images/testimonials/client-1.jpg",
        name: "Thap Nguyen",
        from: "Da Nang",
      },{
        imgClient: "images/testimonials/client-2.jpg",
        name: "Hoang Nguyen",
        from: "Ho Chi Minh",
      },{
        imgClient: "images/testimonials/client-3.jpg",
        name: "Anh Nguyen",
        from: "Da Nang",
      },{
        imgClient: "images/testimonials/client-4.jpg",
        name: "Khanh Doan",
        from: "Hue",
      },{
        imgClient: "images/testimonials/client-5.jpg",
        name: "Yen Ho",
        from: "Hue",
      },{
        imgClient: "images/testimonials/client-6.jpg",
        name: "Tien Duong",
        from: "Quang Nam",
      }
    ],
    comments: [
      " Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nameget lorem in ex aliquam dapibus. ",
      " Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla. ",
      " Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nameget lorem in ex aliquam dapibus. ",
      " Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla. ",
      " Aenean sit amet est orci. Aenean at nisi eget nulla lobortis commodo. Nameget lorem in ex aliquam dapibus. ",
      " Suspendisse non velit lacus. Mauris efficitur lorem a justo semper, ut suscipit ligula malesuada. Donec dui nulla. ",
    ]
  }
})
console.log(123);
