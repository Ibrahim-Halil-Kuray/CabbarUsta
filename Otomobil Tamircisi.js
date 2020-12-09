let musterininSoyadi = "yildiz";
let arabaRengi = "siyah";
let arabaModeli = 2013;
let musterininIlkGirisi = 2016;
let arabaMarkasi = "audi";

if (musterininIlkGirisi <= 2015) {
    console.log("Hosgeldiniz sayin " + musterininSoyadi);
} else if ((arabaRengi != "kirmizi") && (arabaRengi != "siyah")) {
    console.log("Maelesef size hizmet veremiyoruz");
} else if ((arabaMarkasi == "bmw" && arabaRengi == "kirmizi" && 2010 <= arabaModeli <= 2019) || (arabaMarkasi == "bmw" && arabaRengi == "siyah" && arabaModeli >= 2020)) {
    console.log("hosgeldiniz sayin " + musterininSoyadi);
} else if (arabaMarkasi == "audi" && (2005 <= arabaModeli <= 2010 || 2014 <= arabaModeli <= 2020)) {
    console.log("Hosgeldiniz sayin " + musterininSoyadi);
} else if (arabaMarkasi == "vw" && arabaRengi == "siyah" && 2001 <= arabaModeli <= 2018) {
    console.log("hosgeldiniz sayin " + musterininSoyadi);
} else {
    console.log("Malesef size hizmet veremiyoruz.");
}