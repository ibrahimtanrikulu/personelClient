module.exports = function () {
  return {

    kullanici: [

      {
        id: 1,
        kullanici: "ibrahim",
        sifre: "1",
        isim: "ibrahim",
        soyad: "tanrıkulu",
        tc: "11327856508",
        yetki: true,
        kiralananKitap: 0
      },

      {
        id: 2,
        kullanici: "deneme",
        sifre: "2",
        isim: "deneme",
        soyad: "test",
        tc: "11325487958",
        yetki: false,
        kiralananKitap: 0
      }

    ],

    kategori: [

      {
        id: 1,
        name: "bilgisayar",
        aciklama: "deneme",
      },

      {
        id: 2,
        name: "test",
        aciklama: "test deneme",
      }

    ],

    kitaplar: [

      {
        id: 1,
        ad: "deneme ürünü",
        yazar: "yazar",
        kategori: "bilgisayar",
        sayfa: 500,
        kiralanmaDurum: false,
        tarih: 2000,
        aciklama: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      },

      {
        id: 2,
        ad: "test ürünü",
        yazar: "burası acıklama 2",
        kategori: "bilgisayar",
        sayfa: 350,
        kiralanmaDurum: false,
        tarih: 1960,
        aciklama: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      },

      {
        id: 3,
        ad: "denem ürün 2",
        yazar: "burası acıklama 2",
        kategori: "test",
        sayfa: 3500,
        kiralanmaDurum: false,
        tarih: 1960,
        aciklama: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      },

      {
        id: 4,
        ad: "test ürünü 2",
        yazar: "burası acıklama 2",
        kategori: "test",
        sayfa: 3500,
        kiralanmaDurum: false,
        tarih: 1960,
        aciklama: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!"
      }

    ],

  }
}