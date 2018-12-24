var app = new Vue({
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
