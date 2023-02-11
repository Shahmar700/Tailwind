let allData = [
  {
    id: 1,
    name: "Laptop",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis. Velit explicabo similique ab dolores molestias officia facilis, magnam laborum, deserunt id placeat quidem enim architecto! Ullam, dolorem dolores! Sint placeat cum dolorem. Vitae doloribus odit modi, itaque, sed dolore rem veniam mollitia omnis nulla libero, repellendus qui. Aut, neque.",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1661961110671-77b71b929d52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    id: 2,
    name: "Old Phone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis. Velit explicabo similique ab dolores molestias officia facilis, magnam laborum, deserunt id placeat quidem enim architecto! Ullam, dolorem dolores! Sint placeat cum dolorem. Vitae doloribus odit modi, itaque, sed dolore rem veniam mollitia omnis nulla libero, repellendus qui. Aut, neque.",
    price: 399,
    image:
      "https://img2.badfon.ru/original/4350x2900/5/d2/phone-retro-table-black.jpg",
  },
  {
    id: 3,
    name: "Iphone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nobis. Velit explicabo similique ab dolores molestias officia facilis, magnam laborum, deserunt id placeat quidem enim architecto! Ullam, dolorem dolores! Sint placeat cum dolorem. Vitae doloribus odit modi, itaque, sed dolore rem veniam mollitia omnis nulla libero, repellendus qui. Aut, neque.",
    price: 1400,
    image:
      "https://images.unsplash.com/photo-1605457212378-968478b57218?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    name: "Bmw M4",
    description: "Avtomobil ideal veziyyetdedir. Shexsi istifade ucun getirilib. Harda istesez yoxladdira bilersiz. Amerikadan geldiyi ucun kosmetik ishler olub ( veni boya deyen detallar var ). Zavod M-tech. Harman/kardon ses sistemi. Orijinal m diskler, yeni tekerler. M sukan ve s.",
    price: 44000,
    image:
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
];

const dataReducer = (state = allData, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return [...state, (state = action.payload)];

    default:
      return state;
  }
};

export default dataReducer;
