new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/N2.png",
          img2: "images/N1.png",
          title: "Mi Pirncesita ♥️",
          isOpen: false,
        },
        {
          img1: "images/R2.png",
          img2: "images/R1.png",
          img3: "images/R3.png",
          title: "Recuerdos Juntos",
          isOpen: false,
        },
        {
          img1: "images/D2.png",
          img2: "images/D1.png",
          img3: "images/D3.png",
          title: "Tus Detallitos",
          isOpen: false,
        },
        {
          img1: "images/Z1.png",
          img2: "images/Z2.png",
          img3: "images/Z3.png",
          title: "XD",
          isOpen: false,
        },
        {
          img1: "images/L2.png",
          img2: "images/L1.png",
          img3: "images/L3.png",
          title: "Luis (El sancho)",
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
