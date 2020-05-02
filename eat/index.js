// document.onload = () => {
    const foods = [
        {
            name: "suon nuong",
            address: "33 dong cat",
            img: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.0-9/93910160_2395152850775198_6628136360324628480_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_ohc=XU6hNjGX4gQAX_1OBnw&_nc_ht=scontent.fhan2-1.fna&oh=0424bf7ec87dc6a458874a3e2ead85a7&oe=5ED315F0"
        },
        {
            name: "hin xien nuong",
            address: "ngo 135 phuong mai",
            img: "https://thucthan.com/media/2018/05/thit-xien-nuong/cach-lam-thit-xien-nuong.jpg"
        },
        {
            name: "hin nuong",
            address: "xxx chua lang",
            img: "https://thucthan.com/media/2018/05/thit-xien-nuong/cach-lam-thit-xien-nuong.jpg"
        },
        {
            name: "bun oc",
            address: "nha co lan, khuong thuong",
            img: "https://goldenapple.com.vn/wp-content/uploads/2015/11/7_168634-1024x1024.jpg"
        },
        {
            name: "pho ga tron",
            address: "43 ma tay",
            img: "https://daubepgiadinh.vn/wp-content/uploads/2017/02/pho-ga-tron.jpg"
        },
        {
            name: "pho cuon",
            address: "25-27 ngu xa",
            img: "https://vncooking.com/files/cuisine/2019/01/26/pho-cuon-la-mieng-bcoq.jpg"
        },
        {
            name: "oc",
            address: "88 cua bac, ba dinh",
            img: "https://images.foody.vn/res/g26/252787/prof/s576x330/foody-mobile-33-jpg-383-636033127781449474.jpg"
        },
        {
            name: "my van than",
            address: "54 hang chieu, dong xuan",
            img: "https://lh3.googleusercontent.com/proxy/hvLLe3FnaBX20sW4AHdABkoP3hUM5_ZT3-ykm3Cad_Ovz7YRsoXaEHEYF3kG24zie8rgtqT6Y7vy6MrEiRvrjb-yRtw4M4xyMNWOuQ-p9GzcaIqdQqOSq6fxKw"
        },
        {
            name: "nam chua ran",
            address: "36 tam thuong, hang gai",
            img: "https://shipdoandemff.com/wp-content/uploads/2017/06/Nem-chua-r%C3%A1n-ShipdoandemFF.jpg"
        },
        {
            name: "banh duc nong",
            address: "le ngoc han",
            img: "https://thoidai.com.vn/stores/news_dataimages/trang.chu/112019/30/21/5449_2.jpg"
        },
        {
            name: "banh duc nong",
            address: "ngo 46c pham ngoc thach",
            img: "https://thoidai.com.vn/stores/news_dataimages/trang.chu/112019/30/21/5449_2.jpg"
        },
        {
            name: "pho ga tron",
            address: "43 ma may",
            img: "https://www.iunauan.com/images/600x459/anh1-iunauan.com-taliyv847114436.jpg?1541772790738"
        },
        {
            name: "bun thang",
            address: "48 pho cau go (ba duc)",
            img: "https://daynauan.info.vn/wp-content/uploads/2018/08/bun-thang.jpg"
        },
        {
            name: "banh trang",
            address: "86 hang trong (co toan)",
            img: "https://channel.vcmedia.vn/k:prupload/164/2014/11/img20141126011515754/banh-trang-tron-co-toan-86-hang-trong-hut-gioi-tre-ha-thanh.jpg"
        },
        {
            name: "shabu shabu on yasai",
            address: "nhieu dia chi",
            img: "https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/nguyenhuong/onyasailethanhton/on-yasai-shabu-shabu-le-thanh-ton-11.jpg"
        },
        {
            name: "burger",
            address: "114 xuan dieu",
            img: "https://images.foody.vn/res/g3/26353/s750x750/6f48ce63-13d9-4505-828a-bddddf5b3aad.jpg"
        },
        {
            name: "hinhin quay",
            address: "40 an duong, tay ho",
            img: "https://monngonchuabenh.com/wp-content/uploads/2019/01/hinh-anh-vit-quay-bac-kinh.jpg"
        },
        {
            name: "xoi xeo suon cay",
            address: "630 truong chinh",
            img: "https://media.foody.vn/images/15078703_363527810664962_1098888384492902905_n(1).jpg"
        },
        {
            name: "sua chua",
            address: "109b ngo 1a ton that tung (co oanh)",
            img: "https://image-us.eva.vn/upload/2-2019/images/2019-05-03/1556854488-400-thumbnail_schema_article.jpg"
        },
        {
            name: "banh black forest",
            address: "109 duong lang",
            img: "https://www.finedininglovers.com/sites/g/files/xknfdk626/files/styles/recipe_full_desktop/public/Original_17100_l-7690-l-7670-Foresta-Nera.png?itok=uR8yLVaO"
        },
        {
            name: "hot dog",
            address: "xxx o cho dua",
            img: "https://kenh14cdn.com/thumb_w/640/2017/hotdog-3-1498504126008-157-36-943-1561-crop-1498504618220.jpg"

        },
        {
            name: "hin nuong",
            address: "kiot 16 ngo 298 tay son",
            img: "https://thucthan.com/media/2018/05/thit-xien-nuong/cach-lam-thit-xien-nuong.jpg"
        },
        {
            name: "com ga hoi an",
            address: "huu danh vo thuc",
            img: "https://thucthan.com/media/2018/07/com-ga/cach-nau-com-ga.jpg"
        },
        {
            name: "spaghetty by vth",
            address: "XXX XXX",
            img: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg"
        },
        {
            name: "banh crepe",
            address: "93 ho dac di",
            img: "https://ameovat.com/wp-content/uploads/2016/08/cach-lam-banh-crepe-600x453.jpg"
        },
        {
            name: "banh trang cuon hin namnam",
            address: "xxx pham ngoc thach",
            img: "https://shipdoandemff.com/wp-content/uploads/2017/06/B%C3%A1nh-tr%C3%A1ng-th%E1%BB%8Bt-heo-shipdoandemff.jpg"
        },
        {
            name: "bun oc suon",
            address: "XXX XXX",
            img: "https://media.foody.vn/res/g12/111781/prof/s/foody-mobile-bun-oc-jpg-918-636148001109710751.jpg"
        },
        {
            name: "pizza",
            address: "pizza hut",
            img: "https://images.jdmagicbox.com/comp/delhi/y2/011pxx11.xx11.170113010527.r2y2/catalogue/pizza-hut-mori-gate-delhi-pizza-outlets-3jjvm65.jpg"
        },
        {
            name: "pizza",
            address: "domino",
            img: "https://aeonmall-long-bien.com.vn/wp-content/uploads/2018/12/domino-pizza-750x468.jpg"
        },
        {
            name: "bingsu",
            address: "XXX XXX",
            img: "https://toplist.vn/images/800px/kem-bingsu-tran-duy-hung-274767.jpg"
        },
        {
            name: "bo ap chao",
            address: "17 ngo 82 chua lang",
            img: "https://image.baophapluat.vn/w800/Uploaded/2020/zsgkqzztgymu/2017_01_03/2_idmf.jpg"
        },
        {
            name: "bun tron nam",
            address: "150 dai tu",
            img: "https://kenh14cdn.com/2019/6/13/32-15604349732101707241699.jpg"
        },
        {
            name: "pho hin",
            address: "pho di bo",
            img: "https://fantasea.vn/wp-content/uploads/2018/08/Ph%E1%BB%9F-Th%C3%ACn-H%C3%A0-N%E1%BB%99i.jpg"
        },
        {
            name: "bun rieu cua",
            address: "84 ba trieu",
            img: "https://thucthan.com/media/2019/07/bun-rieu-cua/bun-rieu-cua.png"
        },
        {
            name: "gimbap by vth",
            address: "XXX XXX",
            img: "https://www.seriouseats.com/2020/01/20200122-gimbap-vicky-wasik-24-1500x1125.jpg"
        }
    ]
    const nextFoodButton = document.getElementsByClassName("food-choose__next-button")[0];
    const foodTitle = document.getElementsByClassName("food-choose__title")[0];
    const foodAddress = document.getElementsByClassName("food-choose__address")[0];
    const foodImage = document.getElementsByClassName("food-choose__image")[0];
    console.log(nextFoodButton);
    
    nextFoodButton.addEventListener("click", () => {
        nextFoodButton.style.display = "none";
        let changeFood = setInterval(() => {
            const randomIndex = Math.floor((Math.random() * foods.length))
            const randomFood = foods[randomIndex];
            console.log(randomIndex);
            foodTitle.textContent = randomFood.name;
            foodAddress.textContent = randomFood.address;
            foodImage.src = randomFood.img;
        },100)

        setTimeout(() => {
        nextFoodButton.style.display = "block";
            clearInterval(changeFood)
        },5000)

    })
// }