setInterval(ubah_gambar, 5000)

var array_gambar = ["https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0nds_TN5GcUKK4Q9-2wDsbylKFPzExim3f1Mtbu4c7bvvIMBc_q7CbaiJ531EQ38rqPTes6yYUT6femut5SeqCaY4BcgSN5UkmxA0gw591zBAAQhwyNyB-zTkwoUE0YcdMjGE-yhz7-UiU2sbPeKb8vRKWAkPxDHj4rkZuXSmBbRGKukp7Q6ntEACQw/w562-h562/Promo6.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgH_H1n7gmaFtsq_-wdZiwLPBDyZTwtfrhZqeHcNGfaUp92ijviCwAnTSdkEAz1VnG5vsBNpUXdEsfhPkEiJEEwXh01aQNP4l-Ils412vEC_BYiHRfiJfX20WhxpGoo9i-lrxxXSJmA-V9pmOnUbssaA3AvN_1w_5iiorVP5_dAteYb36KnxcuKoiNebA/w624-h411/Promo4.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEji0HC1Q-GkDGmy5yrfpjn83ULBJJjk0zV2Rr_1Su01moHKru_cAPLvaP-QehfXRVRZ2sqhuLVavb5b-T9gIK_n2aqCkCN7p5_Z9LFuG4bdpxA596OBg-Z_FHKAtaF8lO9kBSgdXO2sG06LeLvlsbba07-oe0dObFwZ90KB9QN_qD8EhhLhvVy3VyeFUg/w638-h638/Promo3.png",
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjmjLd8J_Qgsn0L5XBWUsQCa1eYcAPfK__KwX3bNKiy3EOxmeKadGRx10KKqYdPhqmS60BWWjYO0Y17RQ353btkiBKS23_hyphenhyphen2OL1TXNcnRFBCQpv7otW8XpQICtu9iZEtKHaMWyQiQUbuo9YQaw-r09GikgtsAHM1Ru5KEkW-SYR3-kAcW_MXKolqnBwA/w595-h595/Promo(1).png",
]

var nomor_array_gambar = array_gambar.length - 1

var nomor_gambar = 0

function ubah_gambar() {

    if (nomor_gambar < nomor_array_gambar) {
        nomor_gambar += 1
    } else if (nomor_gambar == nomor_array_gambar) {
        nomor_gambar = 0
    }

    const x = document.getElementById("gambar");
    x.src = array_gambar[nomor_gambar]
}