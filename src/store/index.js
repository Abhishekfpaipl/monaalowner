import { createStore } from "vuex";
export default createStore({
  state: {
    buyers: [
      {
        id: 1,
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        name: 'Amit Sardar',
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
    suppliers: [
      {
        id: 1,
        img: 'http://dillisix.com/storage/55/Amit.jpeg',
        name: 'Amit Sardar',
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
        qty: '10000 mtr',
        rate: 'Rs 150',
        colors: [
          {
            id: 1,
            img: 'img/color/green.jpg',
            name: 'Green',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            transactions: [
              {
                id: 1,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 2,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 3,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 4,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 5,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 6,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 7,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 8,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 9,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 10,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
            ]
          },
          {
            id: 2,
            img: 'img/color/yellow.jpg',
            name: 'Yellow',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            transactions: [
              {
                id: 1,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 2,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 3,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 4,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 5,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 6,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 7,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 8,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 9,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 10,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
            ]
          },
          {
            id: 3,
            img: 'img/color/pink.jpg',
            name: 'Pink',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            transactions: [
              {
                id: 1,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 2,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 3,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 4,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 5,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 6,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 7,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 8,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 9,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 10,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
            ]
          },
          {
            id: 4,
            img: 'img/color/blue.jpg',
            name: 'Blue',
            width: '56',
            length: 'free',
            qty: '2500 mtr',
            transactions: [
              {
                id: 1,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 2,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 3,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 4,
                img: 'img/supplier/sup2.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 5,
                img: 'img/supplier/sup1.png',
                name: 'Supplier Suashish',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 6,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 7,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 8,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 9,
                img: 'img/fabricator/fab2.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
              {
                id: 10,
                img: 'img/fabricator/fab1.png',
                name: 'Fabricator Imran',
                qty: '10000 mtr',
                rate: 'Rs 150 / mtr'
              },
            ]
          },
        ],
        transaction: [
          {
            id: 1,
            img: 'img/supplier/sup1.png',
            name: 'Supplier Suashish',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 2,
            img: 'img/supplier/sup2.png',
            name: 'Supplier Suashish',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 3,
            img: 'img/supplier/sup1.png',
            name: 'Supplier Suashish',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 4,
            img: 'img/supplier/sup2.png',
            name: 'Supplier Suashish',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 5,
            img: 'img/supplier/sup1.png',
            name: 'Supplier Suashish',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 6,
            img: 'img/fabricator/fab1.png',
            name: 'Fabricator Imran',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 7,
            img: 'img/fabricator/fab2.png',
            name: 'Fabricator Imran',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 8,
            img: 'img/fabricator/fab1.png',
            name: 'Fabricator Imran',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 9,
            img: 'img/fabricator/fab2.png',
            name: 'Fabricator Imran',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
          {
            id: 10,
            img: 'img/fabricator/fab1.png',
            name: 'Fabricator Imran',
            qty: '10000 mtr',
            rate: 'Rs 150 / mtr'
          },
        ]
      },
      {
        id: 2,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 3,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock3.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 4,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock1.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 5,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 6,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock3.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 7,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock1.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 8,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock2.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
      {
        id: 9,
        name: 'American Crepe Polyester-Crep Folka Dot',
        img: 'img/stock/stock3.jpeg',
        qty: '10000 mtr',
        rate: 'Rs 150',
      },
    ],
    payments: [
      {
        id: 1,
        name: 'Supplier Suashish',
        img: 'img/supplier/sup1.png',
        bills: 'AM 4585621',
        amt: 'Rs 500000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 2,
        name: 'Fabricator Imran',
        img: 'img/fabricator/fab1.png',
        bills: 'AM 4585621',
        amt: 'Rs 200000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 3,
        name: 'Supplier Suashish',
        img: 'img/supplier/sup2.png',
        bills: 'AM 4585621',
        amt: 'Rs 500000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 4,
        name: 'Fabricator Imran',
        img: 'img/fabricator/fab2.png',
        bills: 'AM 4585621',
        amt: 'Rs 200000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 5,
        name: 'Supplier Suashish',
        img: 'img/supplier/sup1.png',
        bills: 'AM 4585621',
        amt: 'Rs 500000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 6,
        name: 'Fabricator Imran',
        img: 'img/fabricator/fab1.png',
        bills: 'AM 4585621',
        amt: 'Rs 200000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 7,
        name: 'Supplier Suashish',
        img: 'img/supplier/sup2.png',
        bills: 'AM 4585621',
        amt: 'Rs 500000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 8,
        name: 'Fabricator Imran',
        img: 'img/fabricator/fab2.png',
        bills: 'AM 4585621',
        amt: 'Rs 200000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 9,
        name: 'Supplier Suashish',
        img: 'img/supplier/sup1.png',
        bills: 'AM 4585621',
        amt: 'Rs 500000',
        date: '25',
        month: 'Oct',
      },
      {
        id: 10,
        name: 'Fabricator Imran',
        img: 'img/fabricator/fab1.png',
        bills: 'AM 4585621',
        amt: 'Rs 200000',
        date: '25',
        month: 'Oct',
      },
    ],
    orders: [
      {
        id: 1,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310001',
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
        qty: '4000 mtr'
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310004',
        qty: '4000 mtr'
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
        qty: '4000 mtr'
      },
      {
        id: 4,
        name: 'Silky Crepe Polyester',
        img: 'img/color/green.jpg',
        sid: 'PO-2310004',
        qty: '4000 mtr'
      },
    ],
    supbills: [
      {
        id: 1,
        date: '17',
        month: 'Oct',
        billno: 'AM4585621',
        amount: '1,00,000',
        status: 'badge rounded-pill text-bg-warning ms-2',
        statustext: 'Pending',
        gst: 5000,
        totalAmnt: 105000,
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
        status: 'badge rounded-pill text-bg-success ms-2',
        statustext: 'Paid',
        gst: 6000,
        totalAmnt: 106000,
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },
      {
        id: 2,
        date: 27,
        month: 'Oct',
        billno: 'AM4585623',
        amount: '3,00,000',
        status: 'badge rounded-pill text-bg-danger ms-2',
        statustext: 'Cancelled',
        gst: 6000,
        totalAmnt: 106000,
        img: 'img/icons/fab2.png',
        note: 'lorem ipsum'
      },

    ],
    activeOrder: {},
    activeBill: {},
    activeSupbill:{}
  },
  getters: {
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
