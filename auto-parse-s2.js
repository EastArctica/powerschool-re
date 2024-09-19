const fs = require('fs');
let file = fs.readFileSync('prettified.new.p.js', 'utf-8');

console.log('Setting up singleton');
function get_deob_str(_0x5ecc02, _0x3115fc) {
  var n = str_obf_arr_singleton();
  return (get_deob_str = function (_0x4bf2c0, _0x12dc31) {
    var r = n[(_0x4bf2c0 -= 397)],
      e =
        (void 0 === get_deob_str.gwfyOe &&
          ((get_deob_str.rNfxqR = function (_0x3294e5) {
            for (
              var r, e, t = "", n = "", a = 0, o = 0;
              (e = _0x3294e5.charAt(o++));
              ~e &&
              ((r = a % 4 ? 64 * r + e : e), a++ % 4) &&
              (t += String.fromCharCode(255 & (r >> ((-2 * a) & 6))))
            )
              e =
                "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
                  e,
                );
            for (var i = 0, c = t.length; i < c; i++)
              n += "%" + ("00" + t.charCodeAt(i).toString(16)).slice(-2);
            return decodeURIComponent(n);
          }),
          (_0x5ecc02 = arguments),
          (get_deob_str.gwfyOe = !0)),
        n[0]),
      e = _0x4bf2c0 + e,
      t = _0x5ecc02[e];
    return t ? (r = t) : ((r = get_deob_str.rNfxqR(r)), (_0x5ecc02[e] = r)), r;
  })(_0x5ecc02, _0x3115fc);
}

function str_obf_arr_singleton() {
  var r = [ "CYbIBg9I", "y3jPChrm", "Awz5Aw5N", "ywrKtgLZ", "zw5LCG", "BMv4DfrP", "DwvYEq", "BNrYEq", "B3v0", "y2fSBgvK", "u291CMnL", "CNrtDgfY", "yMLUz2jV", "B3qGCMv0", "BwLU", "BMvK", "ywjSzsbP", "CMXLBMnV", "y29UzMLN", "ihrVignV", "CNvU", "y2TvCMW", "CMnOugfY", "Cg93", "A2v5CW", "z09Uvg9R", "zxr0Bgvb", "C3vIC3rY", "DgHLicDU", "ywrKrxzL", "oYbWyxrO", "qwXStgLZ", "B3jTrgf0", "Aw49", "y2aGyxr0", "zg9Uzq", "CIbPCYbU", "DxmGy29K", "CNjVCG", "zwXKig5H", "zwfZDxjL", "BMf2AwDH", "ndyYmJfcEuXgr3a", "y2TZ", "zNjVBuPZ", "rxjYB3i", "rMfJDg9Y", "AgvKDwXL", "BgvUz3rO", "CMvZCg9U", "CMf5", "igjLzw4G", "CMvUzxDu", "AYbYzxf1", "BMnYExb0", "CMvLC2vs", "B3r8yMLU", "DgL0Bgu", "C3rHCNq", "CMLLC0j5", "uMvJB3zL", "zNjVBunO", "AxnLlG", "mKfYCMf5", "vgLTzxn0", "zgvIDwC", "DgvZDa", "ChvZAa", "C29SDMvY", "zgvYigzP", "DhrPBMCG", "y2XVBMu", "ywrdB3vU", "CYb0zxH0", "D24GChjV", "ywn0AxzL", "AwvUDa", "vhLWzq", "zcbZDgf0", "B25szxnW", "CMvTB3zL", "ChrJAge", "B2fKq291", "zMLUzfnJ", "yM9KEvvZ", "y2vPBa", "zeXPC3rL", "y2HfBMDP", "C2nYAxb0", "DxnFDg9R", "CMLWDej5", "u29SDxrP", "Dgf0zq", "nKfYCMf5", "DxjHyMXL", "z2v0vg9R", "B3r5Cgvp", "BwLZzq", "DgLVBIbO", "ChjLDMLV", "tg9HzenV", "w29IAMvJ", "zxjHDg9Y", "ue9tva", "CMvSB2fK", "tgLZDgvU", "igeGChjV", "Dg9Rzw4", "BwvZC2fN", "x19LEhrL", "AxrOigL0", "zNjVBvrV", "qxjYyxLD", "igzHAwXL", "Bg9N", "sevbra", "zNvU", "zw91Da", "BMfSuhjV", "q29VA2LL", "yMv0yq", "y2XLyxju", "BKXVywrL", "DxbWB3j0", "yMLUza", "BwLZzsC6", "CMvXDwLY", "y29UDgvU", "yxrPB24V", "zhvYyxrP", "nJC1odeYmfHvALz1AW", "Bg9Hza", "C2v0", "B3zPzgvK", "DcbjBNqZ", "zgvY", "DwzMzxi", "y2TfEgLZ", "sw52ywXP", "rv9sruXp", "y3v0Aw5N", "y2XLyxjn", "p2nHy2HL", "yvbHEwXV", "B2TLBIbY", "zMLUzenO", "zxn0lvvs", "Aw9Us2v5", "oYbKB21H", "zw50", "CLrPBwvn", "AgfZt3DU", "CYbHihjL", "q2HPBgq", "A2LWqxv0", "ywqGrM9Y", "x19HD2fP", "Dgv4Da", "t1busu9o", "yNL0zuXL", "D2L0AenY", "BurHDgeG", "qsbWCM9T", "yM90lwDV", "lMnVBs9I", "AxntzwfY", "BgvUz2uG", "D3jPDgfI", "zcbVDxq", "Bwf0y2G", "Bg9HzgLU", "uMvXDwvZ", "B25ZDhj1", "zxH0zw5K", "vgv4De5V", "Aw5NihrO", "x3n1yNnJ", "x05btuvF", "BwLZzsb3", "y3DK", "rM9YBurH", "yNvZDgvY", "y3jLzgvU", "Ag9ZDg5H", "zgvKo2nO", "zxH0CMfJ", "B3rLy3rP", "BwfYAW", "C3rVCa", "u2v0DgXL", "quqGCMvX", "igz1BMn0", "yw1Z", "BM5VDcbY", "y2fSBgjH", "uK9uta", "CMLWDeXV", "yxLD", "Dhj1y3rV", "qvjzx0np", "ww91ig11", "yw5Nzq", "AM9PBG", "BgvY", "ihrOAxm", "CNvUt25m", "DcbbCNjH", "DgLTzxjj", "CYbJB2rL", "y3rLzcb0", "ug9ZDa", "BwfYA3m", "DgLVBKXV", "B25LCNjV", "A2vU", "zwqU", "CIbMB3iG", "DcaNuhjV", "BNvTyMvY", "oefYCMf5", "owj1vfvzsG", "C2vUza", "yMLUzgLU", "yM1PDenH", "ExbL", "qwXYzwfK", "BNn0CNvJ", "y2f1C2uG", "zhvSzq", "Dg9Yig9Y", "igLZig5V", "neLUDgvY", "DMvYC2LV", "CNjHEuj1", "uxvLCNLq", "u2HHmG", "EhbPCMvZ", "zsbYzxrY", "DgLHBhm", "DxjS", "z2v0rw50", "ywn0B3j5", "DgvUzxjZ", "pvvurI04", "x2jVzhLj", "B21PDa", "yxjNDG", "zwrbCNjH", "AxqGDhLW", "zgf0yq", "x2vHy2Hf", "ysb0Aw1L", "DgvJDgLV", "BKnVDw50", "ig5VDcbZ", "mJKXntCWq01PrNnA", "Cg9YDde", "BgL0EwnO", "x2jVzhLc", "DenVB2TP", "z2v0u2vJ", "DxbKyxrL", "mty2ndC2zKThBurQ", "ChjVDgvJ", "q2fSBgjH", "x3nLDhrS", "Aw5PDgLH", "rxHWAxj5", "CNjHEsb0", "CMfJzq", "B3qGywXS", "yM9KEsbH", "ntu2ndC5rxnsC3n3", "C29SDMu", "BMvYCY1N", "ywrLza", "ihrVA2vU", "Aw1L", "DcbPCYb1", "yNjVA2vU", "y29VA2LL", "z2v0", "vvjmu2vH", "C2v0uhjV", "AguGChjV", "x2vUDw1L", "mZjbCNjH", "B25qCM90", "sw5PDgLH", "ig51BgW", "DgHLBG", "BgfIzwW", "CNzLCG", "ChjVy2vZ", "AgvJAW", "B3iGr0vu", "mdeGr01u", "qurFu0ns", "DhjPz2DL", "BgfPBJSG", "CMD1BwvU", "B29NBgvI", "C3qGCgfZ", "B29RAwu", "ugvYzM9Y", "x2jVzhLb", "ywXZ", "B2zM", "B2r5", "tg9HzgvK", "CgfYzw50", "zwrbDa", "Ahr0CenS", "tg9HzfrP", "Aw5N", "BMfTzq", "yxqGC2fT", "B25Jzq", "DgvY", "qMXVyG", "ChjLCgvU", "AxjHDgLV", "Dw5ZDxbW", "DgLTzxjg", "r2v0", "BNrmAxn0", "CMvLC2u4", "x2LUC3rH", "C3rYDwn0", "DxnLCKfN", "mMnTC21ftW", "CNvUtgf0", "B25LoYbZ", "DgGGyhnY", "zxH0", "x3n0yxj0", "DcbgBg9H", "B29NBgv8", "C2v0sxrL", "igfZigeG", "AgnHChrJ", "B2DHDgLV", "CMvYDw4", "pvrODsWG", "vvrgltG", "Dg9tDhjP", "zwrLBNrP", "zw5HyMXL", "y3vYCMvU", "BIb0AgLZ", "BwvUDhnc", "AxnbCNjH", "Dc10ExbL", "DwvZDeHL", "yxjYyxK", "CYbTDxn0", "C2v0uMvX", "zcbJAgfY", "Bg9JyxrP", "Bg9I", "uhjVDgvJ", "zw52", "ide5nZaG", "txv0yxrP", "CMvZDwX0", "Aw5NigLZ", "u0vdt05e", "y3rVCG", "ANnVBG", "DMvYDhG", "DdmYqxjY", "C2vHCMnO", "Dhj5CW", "DhLWzq", "ze9Uy2vm", "C2L0zt1U", "B2jQzwn0", "zw1PDa", "Bw9Kzq", "yMXVyG", "DhXTC25I", "Ag9VlMfK", "nf9WzxjM", "Dw5KzwzP", "y2HHCNnL", "x19Nzw5L", "C2vYDMvY", "mJm1nJy1mgTys3Pzva", "Ddy0qxjY", "CY5JAgrP", "igfSCMvH", "BgvNywn5", "Dg9YigLZ", "CMvWBgfJ", "BgWGzMfP", "BwfUy2u", "DgvUzxi", "Dcb0BYb0", "re9nq29U", "zxnVBhzL", "B3qGyMuG", "zwn0Aw9U", "ywn0zxiG", "Cg9YDgvK", "mtjQzeL0sKW", "C3rHDhvZ", "oYbZyw1L", "BwvHC3vY", "AgvHzgvY", "yMfPzhvZ", "rg9TywLU", "B2jHBenH", "zM9YBurH", "AwfWyxj0", "ywXSyMfJ", "B3j0zwqG", "D2L0AfnJ", "y291BNq", "zhzHBMnL", "DcbWCM9J", "qxv0B2XV", "ywXSzw5N", "Ec1KlxrL", "DgvK", "Ec13D3CT", "DgHYB3C", "sxntzxq", "Dg9Rzw5f", "B25Tzw50", "zc4Gu2H1", "zMLSDgvY", "A2vUuMvZ", "u3LTyM9S", "x2jVzhLu", "kf58icK", "tM9Ulw9R", "CMLWDfjL", "zgf0ys1H", "ptSGCgf0", "Dwn0B3i", "q2XHC3mG", "Dg9izxHt", "DfrVA2vU", "BwvY", "CMLWDg9Y", "zM9YrwfJ", "ifSG", "B3r8BwvK", "DMfSDwu", "yNjVD3nL", "B25KCW", "CgvYzM9Y", "z2v0qwXS", "r2XVyMfS", "yNvPBgrd", "zMLYzq", "igjLihbY", "ufjjtufs", "ig9IAMvJ", "zw50CMLL", "x3nLDfnJ", "uKvfu0u4", "yxjRCW", "BMf2ywLS", "Bwv0Ag9K", "CMv0DxjU", "CMLIDxrL", "Dg9vChbL", "y2fSBeDS", "rMLSzvjL", "B3DLzcbM", "igHHCYbU", "idS7ia", "CMfUzg9T", "mZCYCuX3uLjr", "DMvY", "C29SDxrP", "B3jPBMD8", "wv9dt09l", "CgfYC2u", "t0Tjrq", "B25uAw1L", "DgLVBG", "B3qGC3vW", "x2fZyxa", "DxjUihrO", "mdeGsMfU", "ihrOzsbM", "BLnLyW", "zhKGzxHL", "B19F", "C3rHCNrL", "igvYCM9Y", "j1bpu1qG", "BM93", "AxrLCMf0", "B2zFD29Y", "x19LEhbV", "ihrVigzP", "x19LC01V", "Aw5KzxHp", "uMvSB2fK", "uhjVCgvY", "B0XVywq", "zxHWB3j0", "C3rYAw5N", "CMfIBgvf", "z2v0t3DU", "yxbWBgLJ", "Dhj1zq", "C2nOzwr1", "ywDL", "CMf0zq", "C3bSAxq", "Cg9ZDgjH", "CMvLC2vt", "A2LWrxHW", "Aw5JBhvK", "ChjVB2zF", "y2fSBa", "ngLUDgvY", "B25TzxnZ", "uhjVBwLZ", "AgfZAa", "sgvHzgvY", "zxjYB3iG", "CY5IAw5K", "y29Uy2f0", "CMLIzxjZ", "DMfSAwrH", "uMvZCg9U", "CMvKAxjL", "vgLTzw91", "zxnWB25Z", "Aw1LCG", "BgL6zwq", "twv0Ag9K", "C3jJ", "uM9IDxn0", "z2v0vgLT", "B2DSzxXN", "CMf0B3i", "x3n0yxrL", "EwfOB28H", "ig9YieHf", "Bgf4", "lM1VBML0", "y2HKAxi", "lNnSDxjW", "yxbWzw5K", "DgvUDeXV", "Bwf4", "B24U", "sgnHChrJ", "EwfUzgv4", "EvrHz05H", "zsbJAgfS", "yxjYyxLc", "EsbYzwfK", "r0vu", "mda6mda6", "ifbSzwfZ", "zxjZ", "Cg9YDdi", "zgvbDa", "Ad0VoYbL", "zMzLCG", "Dd11DgyT", "CMvMzxjY", "B3bZ", "B250Aw1L", "nJm3mJq5CgvVq29t", "B25SAw5L", "ANnVBJSG", "B2XKx3rV", "C2HPzNq", "zunVB2TP", "vgv4Da", "x3jLC3vS", "x2jVzhLg", "BMLUzW", "AxjZDcbH", "AwXLza", "BgfPBJTJ", "x05btuu", "BgL6zvbY", "yM9KEq", "DgvYBMfS", "DcbJB25Z", "CgLKzxj8", "revmrvrf", "BgLZDgvU", "DcbLCNjV", "zvnJCMLW", "AgfYC2v0", "r2vUzxjH", "yxbWBhK", "BMrZ", "ihn0yxj0", "DhjPBq", "CYbHBIbH", "B3qGyMvL", "Dgv4Dc9W", "zM9YBs11", "zxnZxq", "ihvUA25V", "C3nHz2u", "C2v0vg9R", "Cg9SEwzP", "BML0", "B25pyNnL", "CMvKDwnL", "DgLVBLn1", "C2vizwfK", "DcbjBNq4", "CMvZB2X2", "Awv2Aw5N", "rgf0zvrP", "C2vuExbL", "Cg9ZDe1L", "mtzbCNjH", "y2HHCKf0", "DcbqCM9T", "B2jZzxj2", "BNrLCM5H", "DwvZDhm", "AgfSBgvU", "qM9KEsbU", "ihn0yxr1", "AgfZ", "BgXIywnR", "CKnHC2u", "DMfSDwvZ", "DcbHignV", "B250zxH0", "CMvHzefZ", "C2HVDwXK", "x29UzxjY", "x3DPBgXt", "q2fWDgnO", "C2vUDa", "zg93BI4", "zMv0y2G", "D2HPBguG", "Dg90ExbL", "rwXLBwvU", "ChjVBwLZ", "zxjYB3i", "z3bYzxzP", "B3bLBG", "B25Zzq", "CMv0CNK", "BMqGysbJ", "DhLezxnJ", "yxjHBq", "Dg90ywW", "nf9gt1jd", "vw5HyMXL", "yxmGBM90", "ywDLpq", "AxnLCYbJ", "x2XHyMvS", "qxjYyxLc", "C2vvuKW", "zgvSzxrL", "y2f0y2G", "yvbYB3zP", "B25SB2fK", "zxrYAwvK", "C3vIBwL0", "ww91ignH", "qvjz", "sw50zxjY", "zxjYB3i6", "y2fZDa", "zMLUywXS", "z2v0sxrL", "zsb1C2uG", "CM9NyxrV", "z2v0rwXL", "Aw1LB3v0", "AxnwAwv3", "Aw4GAgvH", "y29UC3rY", "vg9Rzw4", "tM9Kzq", "BYbYywnL", "BM90ihjL", "C2v0u2vJ", "BwfW", "ywrLCG", "oenSyw1W", "CMvQzwn0", "y3jLyxrL", "CYb2ywX1", "BIbKzwzP", "yxjdB2rL", "C2vSzG", "zwn1CMu", "Dw50", "C2XPy2u", "y291BgqG", "D2fPDgLU", "DcbjBNqX", "AYbJyw5U", "svbu", "rMfPBgvK", "qxjYyxKG", "oYbTyxGT", "Awz5", "CMvUzxDj", "q09ps0Lf", "zMXVB3i", "vw5LEhbL", "B3rZFhLH", "yw1W", "BMv4Da", "jZOG", "CNvUt25d", "C2L0zt1S", "CMvHzhLt", "zNvUy3rP", "DMLZAwjP", "C3rHCNrj", "rNvSBa", "Dw1HC2S", "Cg9W", "BKnOzwnR", "zxn0igzH", "zgvMAw5L", "ywXS", "y2HHCKnV", "AxnqCM90", "AxnLxq", "C3vTBwfY", "x3n0B3a", "tMv0D29Y", "DcbvAw50", "C3rYAxbr", "C3rVCeLU", "qM9Uu2vY", "C2v0vgLT", "Dg9mB3DL", "DhLoyw1L", "u2nYAxb0", "igvUDMLY", "B29W", "zsbWCM9T", "psHBxJTD", "v2vIs2L0", "vg9Rzw5s", "AxntDgfY", "ChjVDg90", "x2LUAxrc", "qM9KEuLU", "zxCNig9W", "Dcb3AgLS", "igfUiefY", "BMD0Aa", "B2DHDg9Y", "yNvMzMvY", "yxjZzxq9", "x19WCM90", "BMnLq29U", "zsbMB3jT", "CIbJyw5U", "Aw50zxjY", "CgfNzxnO", "z2XVyMfS", "Axn0zw5L", "Aw9UigfZ", "EhbPCNLd", "x3nLDefZ", "x3jLBwfP", "z2uGC2nY", "lcb0AgLZ", "Cg9UC2u", "DgvcAw5K", "BwfUy2vu", "Dg9Y", "zgvMyxvS", "C2vuzxH0", "Ec1KlxrV", "yM9U", "C29NB3v8", "BM9Uzv9Z", "B3jTyw5J", "wc1szxf1", "z2v0qxr0", "ufvu", "zxD8ywrZ", "x19JCMvH", "DgLTzxi", "Axb0ihDP", "u2nOzwr1", "BgvKigjL", "BwLZzsbJ", "B2DHDgu", "BMvY", "zw91DcbO" ];
  return (str_obf_arr_singleton = function () {
    return r;
  })();
}

!(function () {
  for (var r = get_deob_str, e = str_obf_arr_singleton(); ; )
    try {
      if (
        515682 ==
        +parseInt(r(700)) * (-parseInt(r(459)) / 2) +
          (-parseInt(r(533)) / 3) * (-parseInt(r(1191)) / 4) +
          parseInt(r(516)) / 5 +
          (parseInt(r(603)) / 6) * (-parseInt(r(971)) / 7) +
          parseInt(r(1059)) / 8 +
          (parseInt(r(1149)) / 9) * (parseInt(r(1184)) / 10) +
          parseInt(r(401)) / 11
      )
        break;
      e.push(e.shift());
    } catch (r) {
      e.push(e.shift());
    }
})();

console.log('Replacing files');

file = file.replaceAll(/get_deob_str\(([0-9]+)\)/g, (match, idx) => {
  try {
    console.log(match, idx, get_deob_str(idx));
    return `"${get_deob_str(idx).replaceAll('"', '\\"')}"`;
  } catch(e) {
    console.log('Failed!!', match, idx);
    return match;
  }
});

fs.writeFileSync('prettified.new.p.s2.js', file);
