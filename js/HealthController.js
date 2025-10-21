// ! Proses perhitungan IMT

export function HitungIMT(berat, tinggi) {
    let userIMT = berat / (tinggi * 2);
    let kategoriIMT;
    let saranIMT;
    if (userIMT <= 18.5) {
        // TODO: Kurus
        saranIMT = 'Perbanyak asupan gizi seimbang.';
        kategoriIMT = 'Kurus';
    }
    else if (userIMT >= 24.9) {
        // TODO: Normal
        saranIMT = 'Pertahankan pola makan sehat.';
        kategoriIMT = 'Normal';
    }
    else if (userIMT >= 29.9) {
        // TODO: Kelebihan berat badan
        saranIMT = 'Mulai kendalikan pola makan dan tingkatkan aktivitas fisik agar berat badan kembali ideal.';
        kategoriIMT = 'Kelebihan berat badan';
    }
    else if (userIMT >= 30) {
        // TODO: Obesitas
        saranIMT = 'Kurangi makanan tinggi lemak dan rutin olahraga.';
        kategoriIMT = 'Obesitas';
    }
    else {
        saranIMT = '-';
        kategoriIMT = 'Unknown';
    }
    return { kategoriIMT, saranIMT };
}

// ! Proses perhitungan HPL

export function HitungHPL(tanggal, bulan, tahun) {
    let dateNow = new Date(tahun, bulan, tanggal);

    dateNow.setDate(dateNow.getDate() + 7);
    dateNow.setMonth(dateNow.getMonth() - 3);
    dateNow.setFullYear(dateNow.getFullYear() + 1);
    return dateNow;
}

// ! Proses perhitungan AMB

export function HitungAMB(gender, berat, tinggi, umur) {
    if (gender.toLowerCase() === 'pria')
        return PriaHPL(berat, tinggi, umur);
    else if (gender.toLowerCase() === 'wanita')
        return WanitaHPL(berat, tinggi, umur)
    else
        return;
}

function PriaHPL(berat, tinggi, umur) {
    return (10 * berat) + (6.25 * tinggi) - (5 * umur) + 5;
}

function WanitaHPL(berat, tinggi, umur) {
    return (10 * berat) + (6.25 * tinggi) - (5 * umur) - 161;
}
