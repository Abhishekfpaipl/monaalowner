import { createStore } from "vuex";
export default createStore({
  state: {
    // buyers: [
    //   {
    //     id: 1,
    //     img: 'http://dillisix.com/storage/55/Amit.jpeg',
    //     name: 'Amit Sardar',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 2,
    //     img: 'http://dillisix.com/storage/54/kedar.jpg',
    //     name: 'Kedar',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 3,
    //     img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
    //     name: 'Jyoti Garments',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 4,
    //     img: 'http://dillisix.com/storage/445/IMG_20230501_201456_298.webp',
    //     name: 'Manoj Auto',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    // ],
    // suppliers: [
    //   {
    //     id: 1,
    //     img: 'http://dillisix.com/storage/55/Amit.jpeg',
    //     name: 'Amit Sardar',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 2,
    //     img: 'http://dillisix.com/storage/54/kedar.jpg',
    //     name: 'Kedar',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 3,
    //     img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
    //     name: 'Jyoti Garments',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    //   {
    //     id: 4,
    //     img: 'http://dillisix.com/storage/445/IMG_20230501_201456_298.webp',
    //     name: 'Manoj Auto',
    //     whatsapp: '1234567890',
    //     contact: '2135468790',
    //     mobile: '32165649870',
    //     email: 'amitsardar@fpaipl.com',
    //     desc: 'test',
    //     businessName: 'Sardar Enterprises',
    //     address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
    //     state: 'Delhi',
    //     pincode: '110020',
    //     gstin: '24HRMPS5668N1ZM'
    //   },
    // ],
    parties: [
      {
        id: 1,
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        name: 'Amit Sardar',
        type: 'Buyer',
        whatsapp: '1234567890',
        contact: '2135468790',
        mobile: '32165649870',
        email: 'amitsardar@fpaipl.com',
        desc: 'test',
        businessName: 'Sardar Enterprises',
        address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
        state: 'Delhi',
        pincode: '110020',
        gstin: '24HRMPS5668N1ZM'
      },
      {
        id: 2,
        img: 'http://dillisix.com/storage/54/kedar.jpg',
        name: 'Kedar',
        type: 'Supplier',
        whatsapp: '1234567890',
        contact: '2135468790',
        mobile: '32165649870',
        email: 'amitsardar@fpaipl.com',
        desc: 'test',
        businessName: 'Sardar Enterprises',
        address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
        state: 'Delhi',
        pincode: '110020',
        gstin: '24HRMPS5668N1ZM'
      },
      {
        id: 3,
        img: 'http://dillisix.com/storage/83/IMG20230404151417.jpg',
        name: 'Jyoti Garments',
        type: 'Buyer',
        whatsapp: '1234567890',
        contact: '2135468790',
        mobile: '32165649870',
        email: 'amitsardar@fpaipl.com',
        desc: 'test',
        businessName: 'Sardar Enterprises',
        address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
        state: 'Delhi',
        pincode: '110020',
        gstin: '24HRMPS5668N1ZM'
      },
      {
        id: 4,
        img: 'http://dillisix.com/storage/445/IMG_20230501_201456_298.webp',
        name: 'Manoj Auto',
        type: 'Supplier',
        whatsapp: '1234567890',
        contact: '2135468790',
        mobile: '32165649870',
        email: 'amitsardar@fpaipl.com',
        desc: 'test',
        businessName: 'Sardar Enterprises',
        address: 'B-74, Pocket X, Okhla Phase II, Okhla Industrial Estate, Okhla, New Delhi, Delhi 110020',
        state: 'Delhi',
        pincode: '110020',
        gstin: '24HRMPS5668N1ZM'
      },
    ],
    stocks: [
      {
        id: 1,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        sid: 'A001-A001',
        qty: '10000 mtr',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      {
        id: 2,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        qty: '10000 mtr',
        sid: 'A001-A001',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      {
        id: 3,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock3.jpeg',
        qty: '10000 mtr',
        sid: 'A001-A001',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      {
        id: 4,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock1.jpeg',
        qty: '10000 mtr',
        sid: 'A001-A001',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      {
        id: 5,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        qty: '10000 mtr',
        sid: 'A001-A001',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      {
        id: 6,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock3.jpeg',
        qty: '10000 mtr',
        sid: 'A001-A001',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#D0BF11',
            image: 'img/color/olivegreen.jpeg'
          },
          {
            id: 2,
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#E80676',
            image: 'img/color/pink.jpeg'
          },
          {
            id: 3,
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#000000',
            image: 'img/color/black.jpeg'
          },
          {
            id: 4,
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            bgColor: '#ffffff',
            image: 'img/color/white.jpeg'
          },
        ],
      },
      // {
      //   id: 7,
      //   name: 'American Crepe Polyester-Crep Folka Dot',
      //   img: 'img/stock/stock1.jpeg',
      //   qty: '10000 mtr',
      //   rate: 'Rs 150',
      // },
      // {
      //   id: 8,
      //   name: 'American Crepe Polyester-Crep Folka Dot',
      //   img: 'img/stock/stock2.jpeg',
      //   qty: '10000 mtr',
      //   rate: 'Rs 150',
      // },
      // {
      //   id: 9,
      //   name: 'American Crepe Polyester-Crep Folka Dot',
      //   img: 'img/stock/stock3.jpeg',
      //   qty: '10000 mtr',
      //   rate: 'Rs 150',
      // },
    ],
    payments: [
      {
        id: 1,
        name: 'Suashish',
        type: 'Supplier',
        img: 'img/supplier/sup1.png',
        bills: 'AM 4585621',
        amt: '500000',
        date: '25',
        month: 'Oct',
        qty:'5000 mtr'
      },
      {
        id: 2,
        name: 'Imran',
        type: 'Buyer',
        img: 'img/fabricator/fab1.png',
        bills: 'AM 4585621',
        amt: '200000',
        date: '25',
        month: 'Oct',
        qty:'5000 mtr'
      },
      {
        id: 3,
        name: 'Suashish',
        type: 'Supplier',
        img: 'img/supplier/sup2.png',
        bills: 'AM 4585621',
        amt: '500000',
        date: '25',
        month: 'Oct',
        qty:'5000 mtr'
      },
      {
        id: 4,
        name: 'Imran',
        type: 'Buyer',
        img: 'img/fabricator/fab2.png',
        bills: 'AM 4585621',
        amt: '200000',
        date: '25',
        month: 'Oct',
        qty:'5000 mtr'
      },
      // {
      //   id: 5,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   month: 'Oct',
      // },
      // {
      //   id: 6,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   month: 'Oct',
      // },
      // {
      //   id: 7,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup2.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   month: 'Oct',
      // },
      // {
      //   id: 8,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab2.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   month: 'Oct',
      // },
      // {
      //   id: 9,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   month: 'Oct',
      // },
      // {
      //   id: 10,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   month: 'Oct',
      // },
    ],
    orders: [
      {
        id: 1,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        amt: '26250',
        qty: '4000 mtr',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          }
        ]
      },
      {
        id: 2,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310002',
        qty: '4000 mtr',
        amt: '26250',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          }
        ]
      },
      {
        id: 3,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310003',
        qty: '4000 mtr',
        amt: '26250',
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310004',
        qty: '4000 mtr',
        amt: '26250',
      },
    ],
    bills: [
      {
        id: 1,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          grossBill: '100000',
          gst: '5000',
          totalBill: '105000',
          debitNote: 'test',
          totalAmt: '95000',
          billStatus: 'Purchase Complete',
          note: 'test',
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          }
        ],
        invoice: "img/color/invoice.png",
        bilty: "img/color/bilty.png",
        billimg: "img/color/billimg.png",
        debit: "img/color/debit.png",
        bank: "img/color/debit.png",
      },
      {
        id: 2,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr'
      },
      {
        id: 3,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr'
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr'
      },
    ],
    SupplierOrders: [
      {
        id: 1,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Issued',
        debitNote: {
          amt: '750',
          sid: 'DN-2310001'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 2,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310002',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Partial',
        debitNote: {
          amt: '750',
          sid: 'DN-2310002'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 3,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310003',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Completed',
        debitNote: {
          amt: '750',
          sid: 'DN-2310003'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310004',
        qty: '4000 mtr',
        amt: '26,250',
        status: 'Cancelled',
        debitNote: {
          amt: '750',
          sid: 'DN-2310004'
        },
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
    ],
    supbills: [
      {
        id: 1,
        date: '17',
        month: 'Oct',
        billno: 'AM4585621',
        amount: '1,00,000',
        status: 'Pending',
        pono: '',
        gst: 5000,
        totalAmnt: '1,05,000',
        note: 'lorem ipsum',
        invoice: "img/color/invoice.png",
        bilty: "img/color/bilty.png",
        billimg: "img/color/billimg.png",
        debit: "img/color/debit.png",
        bank: "img/color/debit.png",
        img: 'img/color/pink.jpg',
        name: 'Pink',
        qty: '1000 mtr',
        colorImg: 'img/icons/colorImg.png',
        width: '56 inch',
        length: '180 cm',
        bill: [
          {
            img: 'img/icons/fab2.png',
            name: 'Name1'

          },
          {
            img: 'img/icons/fab1.png',
            name: 'Name2'

          },
          {
            img: 'img/icons/fab3.png',
            name: 'Name3'

          },
        ]
      },
      {
        id: 2,
        date: 19,
        month: 'Oct',
        billno: 'AM4585622',
        amount: '2,00,000',
        status: 'Paid',
        gst: 6000,
        totalAmnt: '2,06,000',
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },
      {
        id: 2,
        date: 27,
        month: 'Oct',
        billno: 'AM4585623',
        amount: '3,00,000',
        status: 'Cancelled',
        gst: 6000,
        totalAmnt: '3,10,000',
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },

    ],
    orderPayments: [
      {
        id: 1,
        name: 'Suashish',
        type: 'Supplier',
        img: 'img/supplier/sup1.png',
        pono: 'PO-2310001',
        fabric: 'Silky Crepe Polyester',
        amt: 'Rs 500000',
        date: '25',
        qty: '4000 mtr',
        price: 'Rs 180',
        month: 'Oct',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 2,
        name: 'Imran',
        type: 'Buyer',
        img: 'img/fabricator/fab1.png',
        pono: 'PO-2310001',
        fabric: 'Silky Crepe Polyester',
        amt: 'Rs 200000',
        date: '25',
        qty: '4000 mtr',
        price: 'Rs 180',
        month: 'Oct',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 3,
        name: 'Suashish',
        type: 'Supplier',
        img: 'img/supplier/sup2.png',
        pono: 'PO-2310001',
        fabric: 'Silky Crepe Polyester',
        amt: 'Rs 500000',
        date: '25',
        qty: '4000 mtr',
        price: 'Rs 180',
        month: 'Oct',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      {
        id: 4,
        name: 'Imran',
        type: 'Buyer',
        img: 'img/fabricator/fab2.png',
        pono: 'PO-2310001',
        fabric: 'Silky Crepe Polyester',
        amt: 'Rs 200000',
        date: '25',
        qty: '4000 mtr',
        price: 'Rs 180',
        month: 'Oct',
        poTerms: {
          no: 'AM-4585621',
          issue: '21-10-2023',
          expiry: '21-10-2023',
          material: 'Bsy Polyester',
          style: 'Tai Dai Paint',
          rate: 'Rs 180/mtr',
          qty: '4000 mtr',
          delivery: 'Free'
        },
        colors: [
          {
            id: 1,
            img: 'img/color/pink.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 2,
            img: 'img/color/black.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 3,
            img: 'img/color/olivegreen.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
          {
            id: 4,
            img: 'img/color/white.jpeg',
            name: 'Pink',
            qty: '1000 mtr',
            colorImg: 'img/color/colorImg.png',
            width: '56 inch',
            length: '180 cm',
            note: 'test',
            additionalNote: 'test test',
            tolRate: '5% Tolerance',
            tolQty: '5% Tolerance',
            paymentTerms: '45 Days of Payment Cycle',
            rejection: 'teste'
          },
        ]
      },
      // {
      //   id: 5,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup1.png',
      //   pono: 'PO-2310001',
      //   fabric: 'Silky Crepe Polyester',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
      // {
      //   id: 6,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab1.png', 
      //   pono: 'PO-2310001',
      //   fabric: 'Silky Crepe Polyester',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
      // {
      //   id: 7,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup2.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
      // {
      //   id: 8,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab2.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
      // {
      //   id: 9,
      //   name: 'Suashish',
      //   type: 'Supplier',
      //   img: 'img/supplier/sup1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 500000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
      // {
      //   id: 10,
      //   name: 'Imran',
      //   type: 'Buyer',
      //   img: 'img/fabricator/fab1.png',
      //   bills: 'AM 4585621',
      //   amt: 'Rs 200000',
      //   date: '25',
      //   qty: '4000 mtr',
      //   price: 'Rs 180',
      //   month: 'Oct',
      //   poTerms: {
      //     no: 'AM-4585621',
      //     issue: '21-10-2023',
      //     expiry: '21-10-2023',
      //     material: 'Bsy Polyester',
      //     style: 'Tai Dai Paint',
      //     rate: 'Rs 180/mtr',
      //     qty: '4000 mtr',
      //     delivery: 'Free'
      //   },
      //   colors: [
      //     {
      //       id: 1,
      //       img: 'img/color/pink.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 2,
      //       img: 'img/color/black.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 3,
      //       img: 'img/color/olivegreen.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //     {
      //       id: 4,
      //       img: 'img/color/white.jpeg',
      //       name: 'Pink',
      //       qty: '1000 mtr',
      //       colorImg: 'img/color/colorImg.png',
      //       width: '56 inch',
      //       length: '180 cm',
      //       note: 'test',
      //       additionalNote: 'test test',
      //       tolRate: '5% Tolerance',
      //       tolQty: '5% Tolerance',
      //       paymentTerms: '45 Days of Payment Cycle',
      //       rejection: 'teste'
      //     },
      //   ]
      // },
    ],
    activeOrder: {},
    activeBill: {},
    activeSupbill: {}
  },
  getters: {
    getParties(state) {
      return state.parties
    },
    getParty: (state) => (partyId) => {
      let index = state.parties.findIndex(party => party.id == partyId);
      return state.parties[index];
    },
    getBuyers(state) {
      return state.buyers
    },
    getBuyer: (state) => (buyerId) => {
      let index = state.buyers.findIndex(buyer => buyer.id == buyerId);
      return state.buyers[index];
    },
    getSuppliers(state) {
      return state.suppliers
    },
    getSupplier: (state) => (buyerId) => {
      let index = state.suppliers.findIndex(buyer => buyer.id == buyerId);
      return state.suppliers[index];
    },
    getStocks(state) {
      return state.stocks
    },
    getStock: (state) => (stockId) => {
      let index = state.stocks.findIndex(stock => stock.id == stockId);
      return state.stocks[index]
    },
    getPayments(state) {
      return state.payments
    },
    getOrderPayments(state) {
      return state.orderPayments
    },
    getOrders(state) {
      return state.orders
    },
    getSupplierOrders(state) {
      return state.SupplierOrders
    },
    getOrder: (state) => (orderId) => {
      let index = state.orders.findIndex(order => order.id == orderId);
      return state.orders[index]
    },
    getBills(state) {
      return state.bills
    },
    getSupbills(state) {
      return state.supbills
    },
    getSupbill(state) {
      return state.activeSupbill
    },
    // getBill: (state) => (billId) => {
    //   let index = state.bills.findIndex(bill => bill.id == billId);
    //   return state.bills[index]
    // },
    getSuppo(state) {
      return state.activeOrder;
    },
    getBill(state) {
      return state.activeBill;
    },
  },
  mutations: {
    selectSuppo(state, data) {
      state.activeOrder = data;
    },
    hideSuppo(state) {
      state.activeOrder = {};
    },
    selectBill(state, data) {
      state.activeBill = data;
    },
    hideBill(state) {
      state.activeBill = {};
    },
    selectSupbill(state, data) {
      state.activeSupbill = data;
    },
    hideSupbill(state) {
      state.activeSupbill = {};
    },
  },
  actions: {
    selectSuppo({ commit }, data) {
      commit("selectSuppo", data);
    },
    hideSuppo({ commit }) {
      commit("hideSuppo");
    },
    selectBill({ commit }, data) {
      commit("selectBill", data);
    },
    hideBill({ commit }) {
      commit("hideBill");
    },
    selectSupbill({ commit }, data) {
      commit("selectSupbill", data);
    },
    hideSupbill({ commit }) {
      commit("hideSupbill");
    },

  },
  modules: {},
});
