//bai1//
const PI = 3.14159;
console.log("Gia tri cua PI la: " + PI);

//bai2//
if (true) {
    let x=10;
    console.log("Gia tri cua x trong block la: " + x);
}


//bai3//
const nguyenLieuCoBan = ["Tra sua", "Banh mi", "Com rang"];
const nguyenLieuMoi = [...nguyenLieuCoBan, "Pho", "Bun bo"];

//bai4//
const menuSang = ["Cà phê đen", "Bạc xỉu"];
const menuCaNgay = [...menuSang, "Trà đào", "Sinh tố"];

console.log(menuCaNgay);

const tinhTongTienTip = (...danhSachTip) => {return danhSachTip.reduce((tong, hienTai) => tong + hienTai, 0);
};

console.log("Tổng tip hôm nay:", tinhTongTienTip(10000, 5000, 20000));

//bai5//
const tenKhach = "Huy";
const monKhaiVi = "Espresso";

const loiChao = `Xin chào ${tenKhach}, món ${monKhaiVi} của bạn đã sẵn sàng!`;
console.log(loiChao);

//bai7//
const tenNhanVien = "Minh";
const caLam = "Sáng";

const hoSo = { tenNhanVien, caLam };

console.log(hoSo);

//bai8//
const donHang = { 
  id: 101, 
  mon: "Trà vải", 
  gia: 45000 
};

const { mon, gia } = donHang;

console.log(`Bắt đầu pha ${mon}, thu khách ${gia} đồng.`);

//bai10//
class NhanVien {
  constructor(ten, tuoi, chucVu) {
    this.ten = ten;
    this.tuoi = tuoi;
    this.chucVu = chucVu;
  }
  greeting() {
    console.log(`Xin chào, tôi là ${this.ten}, ${this.tuoi} tuổi, làm việc với vai trò ${this.chucVu}.`);
  }
}
const nhanVien1 = new NhanVien("Lan", 28, "Barista");
nhanVien1.greeting();

//bai11//
const array1 = [1, 2, 3];
const iterator1 = array1[Symbol.iterator]();
console.log(iterator1.next().value); // 1
console.log(iterator1.next().value); // 2
console.log(iterator1.next().value); // 3

//bai12//
function* generatorFunction() {
  yield 'Xin chào';
  yield 'Chào mừng bạn đến với quán cà phê!';
  yield 'Hãy thưởng thức đồ uống của bạn.';
}
const generator = generatorFunction();
console.log(generator.next().value); // "Xin chào"
console.log(generator.next().value); // "Chào mừng bạn đến với quán cà phê!"
console.log(generator.next().value); // "Hãy thưởng thức đồ uống của bạn."

//bai13//
const map = new Map();
map.set('Cà phê sữa', 30000);
map.set('Trà đào', 25000);
console.log(map.get('Trà đào')); // 25000

const set = new Set(['Cà phê', 'Trà', 'Sinh tố']);
console.log(set);

//bai14//
console.log([1, 2, 3].includes(2)); // true
console.log("Hello".startsWith("He")); // true
console.log("Hello".endsWith("llo")); // true

//bai15//
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Dữ liệu đã được fetch thành công!");
    }, 1000);
  });
};
fetchData().then(console.log);