var categories = new Vue({
  el: '#categories',
  data: {
    title: "Lĩnh vực chính",
    content: 'Để đem đến sự hài lòng tốt nhất cho khách hàng chúng tôi tập trung vào 4 chủ đề chính',
    categories: [
      {
        id: "1",
        title: "Khách sạn & Homestay",
        srcImg: "images/team/member-1.jpg",
        altImg: "Hotel & Homestay"
      },
      {
        id: "2",
        title: "Nhà hàng, cà phê",
        srcImg: "images/team/member-2.jpg",
        altImg: "Cafe & Food"
      },
      {
        id: "3",
        title: "Đám cưới",
        srcImg: "images/team/member-3.jpg",
        altImg: "Wedding"
      },
      {
        id: "4",
        title: "Kinh doanh",
        srcImg: "images/team/member-4.jpg",
        altImg: "Other Business"
      },
    ] 

  }
})

var projects = new Vue({
  el: '#projects',
  data: {
    title: "Những sản phẩm mẫu",
    content: 'Với thời gian làm việc không ngắn chúng tôi đã mang lại cho khách hàng những sản phẩm tốt nhất có thể. Đây là một số sản phẩm thực tế và mẫu để bạn có thể tham khảo',
    filterLinks: [
      {
        filter: "*",
        name: "Tất cả",
        clActive: "active"
      },{
        filter: ".cafe",
        name: "Nhà hàng, cà phê",
        clActive: ""
      },{
        filter: ".hotel",
        name: "Khách sạn & Homestay",
        clActive: ""
      },{
        filter: ".wedding",
        name: "Đám cưới",
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

var services = new Vue({
  el: "#services",
  data: {
    title: "Dịch vụ cung cấp",
    content: "Để sản phẩm của các bạn được tốt nhất, chúng tôi cung cấp những dịch vụ và chức năng giúp website của bạn hiện đại và tối ưu hơn",
    services:[
      {
        name: "Responsive Layout",
        description: "Giúp website của bạn hầu như có thể sử dụng trên mọi kích thước màn hình",
        icon: "icon icon-basic-laptop",
      },{
        name: "Modern Design",
        description: "Thiết kế hiện đại trang nhã nhằm giúp khách hàng trải nghiệm website của bạn được tốt hơn",
        icon: "icon icon-basic-pencil-ruler-pen",
      },{
        name: "Font Awesome Icons",
        description: "Hỗ trợ hơn 400 icon giúp website càng thú vị hơn",
        icon: "icon icon-basic-flag1",
      },
    ],
    services1: [
      {
        name: "Color Options",
        description: "Màu sắc không giới hạn và với sự tư vấn nhiệt tình sẽ giúp bạn chọn được màu ưng ý nhất website của mình",
        icon: "icon icon-basic-gear",
      },{
        name: "Background Videos",
        description: "Không chỉ hỗ trợ hình ảnh mà còn hỗ trợ video giúp cho việc quản bá thương hiệu của bạn càng trở nên đơn giản hơn",
        icon: "icon icon-basic-video",
      },{
        name: "Audio Support",
        description: "Với những bản nhạc chạy nền hoặc làm một website âm nhạc tất cả đều trở nên đơn giản",
        icon: "icon icon-basic-headset",
      },
    ]
  }
})
