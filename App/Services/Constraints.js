/* eslint-disable prettier/prettier */
// this file use validation.js
// see documentation : https://validatejs.org

const Constraints = {
  name: {
    presence: {
      allowEmpty: false,
      message: '^Nama tidak boleh kosong',
    },
    format: {
      pattern: /^[a-zA-Z\s]+$/,
      message: '^Nama harus berformatkan alfabet',
    },
  },
  phone: {
    length: {
      minimum: 9,
      maximum: 12,
      message: '^Nomor handphone harus terdiri dari minimum 9 angka dan maksimum 13 angka',
    },
    format: {
      pattern: '^[0-9]*$',
      message: '^Format nomor handphone harus angka',
    },
    equality: {
      attribute: Math.floor(Math.random() * 1000).toString(),
      message: '^Format nomor handphone tidak valid',
      comparator: function (v1) {
        return /((^08)(\d{3,4}-?){2}\d{3,4}$)/.test(v1);
      },
    },
  },
  email: {
    presence: {
      allowEmpty: false,
      message: '^Email tidak boleh kosong',
    },
    email: {
      message: '^Email tidak valid',
    },
  },
  maritalStatus: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
  },
  gender: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
  },
  address: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
  },
  addressOptional: {
    length: {
      maximum: 255,
      message: '^Alamat tidak boleh lebih dari 255 karakter',
    },
  },
  domicile: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
  },
  password: {
    presence: {
      allowEmpty: false,
      message: '^Kata sandi tidak boleh kosong',
    },
    length: {
      minimum: 6,
      message: '^Kata sandi belum mencapai 8 karakter',
    },
  },
  newPassword: {
    presence: {
      allowEmpty: false,
      message: '^Kata sandi tidak boleh kosong',
    },
    length: {
      minimum: 8,
      message: '^Kata sandi belum mencapai 8 karakter',
    },
    format: {
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      message: '^Kata sandi harus mengandung huruf kapital, angka, dan simbol',
    },
  },
  reEnterNewPassword: {
    presence: {
      allowEmpty: false,
      message: '^Kata sandi tidak boleh kosong',
    },
    length: {
      minimum: 8,
      message: '^Kata sandi belum mencapai 8 karakter',
    },
    format: {
      pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      message: '^Kata sandi harus mengandung huruf kapital, angka, dan simbol',
    },
    equality: {
      attribute: 'newPassword',
      message: '^Konfirmasi kata sandi tidak sesuai. Silakan ulangi kembali',
      comparator: function (v1, v2) {
        return JSON.stringify(v1) === JSON.stringify(v2);
      },
    },
  },
  confirmPassword: {
    equality: {
      attribute: 'password',
      message: '^Kata sandi tidak sesuai',
      comparator: function (v1, v2) {
        return JSON.stringify(v1) === JSON.stringify(v2);
      },
    },
  },
  currentPin: {
    presence: {
      allowEmpty: false,
      message: '^PIN Sekarang tidak boleh kosong',
    },
    length: {
      minimum: 6,
      maximum: 6,
      message: '^PIN Sekarang harus terdiri dari 6 digit angka',
    },
    format: {
      pattern: '^[0-9]*$',
      message: '^Format pin harus angka',
    },
  },
  pin: {
    presence: {
      allowEmpty: false,
      message: '^PIN Baru tidak boleh kosong',
    },
    length: {
      minimum: 6,
      maximum: 6,
      message: '^PIN Baru harus terdiri dari 6 digit angka',
    },
    format: {
      pattern: '^[0-9]*$',
      message: '^Format pin harus angka',
    },
    equality: {
      attribute: Math.floor(Math.random() * 1000).toString(),
      message: '^Hindari menggunakan angka yang berurutan dan berulang',
      comparator: function (v1) {
        return !/\b(\d)\1+\b/.test(v1) && !/^(012345|123456|234567|345678|456789|567890)$/.test(v1) && !/^(098765|987654|876543|765432|654321|543210)$/.test(v1);
      },
    },
  },
  confirmPin: {
    equality: {
      attribute: 'pin',
      message: '^PIN baru tidak sesuai',
      comparator: function (v1, v2) {
        return JSON.stringify(v1) === JSON.stringify(v2);
      },
    },
    format: {
      pattern: '^[0-9]*$',
      message: '^Format pin harus angka',
    },
  },
  birthday: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
  },
  review: {
    presence: {
      allowEmpty: false,
      message: '^Mohon isi terlebih dahulu untuk menyimpan',
    },
    length: {
      minimum: 25,
      message: '^Ulasan harus terdiri minimal 25 character',
    },
  },
};

export default Constraints;
