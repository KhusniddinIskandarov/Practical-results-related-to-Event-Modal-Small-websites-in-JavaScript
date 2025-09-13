
// const open = document.getElementById('open')
// const close = document.getElementById('close')
// const container = document.querySelector('.container')

// open.addEventListener('click', ()=> {
//     container.classList.add("show-nav")
// })

// close.addEventListener('click', ()=> {
//     container.classList.remove("show-nav")
// })
 

const ilovaNomi = "Vazifa menejeri";

const vazifalar = [];

function xushKelibsizXabarniKorsatish() {
    alert(`Hush kelibsiz ${ilovaNomi}ga! Vazifalaringizni samarali boshqaring!`);
}

const vazifaQoshing = () => {
    const vazifaNomi = prompt("Vazifa nomini kiriting:");
    if(vazifaNomi) {
        const yangiVazifa = {
            id: vazifalar.length + 1,
            sarlavha: vazifaNomi,
            yakunlandi: false
        };
        vazifalar.push(yangiVazifa);
    }
}


function asosiyMenyuniKorsatish() {
    let tanlash;

    do {
        tanlash = prompt (
           `Hush kelibsiz ${ilovaNomi}!
            Variantni tanlang:
            1. Vazifa qo'shish
            2. Vazifalarni ko'rish
            3. Vazifani almashtirish
            4. Vazifani olib tashlang
            5. Xulosa ko'rsatish
            6. Chiqish`
        )

        switch(tanlash) {
            case "1":
                alert("Vazifa qo'shish");
                break;
            case "2":
                alert("Vazifalarni ko'rish");
                break;
            case "3":
                alert("Vazifani almashtirish");
                break;
            case "4":
                alert("Vazifani olib tashlang");
                break;
            case "5":
                alert("Xulosa ko'rsatish");
                break;
            case "6":
                alert(`Xayr! ${ilovaNomi}dan foydalanganingiz uchun tashakkur`);
                break;
            default: 
            alert("Yaroqsiz variant. Iltimos, qayta urinib koʻring.");
        }

    } while(tanlash !== "6");
}

xushKelibsizXabarniKorsatish();
asosiyMenyuniKorsatish();