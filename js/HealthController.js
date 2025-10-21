// ! Proses perhitungan IMT

export function HitungIMT(berat, tinggi) {
    let userIMT = berat / (tinggi * 2);
    if (userIMT <= 18.5) {
        // TODO: Kurus
        return 'Kurus';
    }
    else if (userIMT >= 24.9) {
        // TODO: Normal
        return 'Normal';
    }
    else if (userIMT >= 29.9) {
        // TODO: Kelebihan berat badan
        return 'Kelebihan berat badan';
    }
    else if (userIMT >= 30) {
        // TODO: Obesitas
        return 'Obesitas';
    }
    else {
        return;
    }
}

// ! Proses perhitungan HPL

export function HitungHPL(tanggal, bulan, tahun) {
    bulan = bulan - 1;
    let dateNow = new Date(tahun, bulan, tanggal);

    dateNow.setDate(dateNow.getDate() + 7);
    dateNow.setMonth(dateNow.getMonth() - 3);
    dateNow.setFullYear(dateNow.getFullYear() + 1);
    return dateNow;
}

// ! Proses perhitungan AMB

export function HitungAMB(gender, HPHT, berat, tinggi, umur) {
    if (gender.toLowerCase() === 'pria')
        return PriaHPL(berat, tinggi, umur);
    else if (gender.toLowerCase() === 'wanita')
        return WanitaHPL(berat, tinggi, umur)
    else
        return;
}

function PriaHPL(berat, tinggi, umur) {
    return (10 * berat) + (6.25 * tinggi) + (5 * umur) + 5;
}

function WanitaHPL(berat, tinggi, umur) {
    return (10 * berat) + (6.25 * tinggi) + (5 * umur) - 161;
}
