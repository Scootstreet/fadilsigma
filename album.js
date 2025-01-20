new Vue({
    el: "#app",
    data() {
      return {
        isOpenedTop: true,
        items: [
          {
            img1: "image/potoig1.jpg",
            img2: "image/raker2.jpg",
            img3: "image/potoig2.jpg",
            title: "Jakarta",
            isOpen: false,
          },
          {
            img1: "image/latgab1.jpg",
            img2: "image/latgab2.jpg",
            img3: "image/raker1.jpg",
            title: "Tokyo",
            isOpen: false,
          },
          {
            img1: "image/pleno1.jpg",
            img2: "image/pleno2.jpg",
            img3: "image/pleno3.jpg",
            title: "Seoul",
            isOpen: false,
          },
          {
            img1: "image/pleno4.jpg",
            img2: "image/pleno5.jpg",
            img3: "image/pleno6.jpg",
            title: "London",
            isOpen: false,
          },
          {
            img1: "image/yb1.jpg",
            img2: "image/yb2.jpg",
            img3: "image/yb3.jpg",
            title: "New York",
            isOpen: false,
          },
          {
            img1: "image/yb4.jpg",
            img2: "image/pleno7.jpg",
            img3: "image/cexa.jpg",
            title: "Bonus",
            isOpen: false,
          },
        ],
      };
    },
    methods: {
      topOpen() {
        this.isOpenedTop = !this.isOpenedTop;
      },
  
      open(idx, isOpen) {
        if (this.isOpenedTop) {
          this.items[idx].isOpen = !isOpen;
        }
      },
  
      reset() {
        this.items.forEach((item) => (item.isOpen = false));
        this.isOpenedTop = false;
      },
    },
  });