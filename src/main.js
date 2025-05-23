let arr = [];

function updateDisplay() {
    document.getElementById('arrayDisplay').innerText = `📌 Mảng hiện tại: [${arr.join(', ')}]`;
}

function getArray() {
    const input = document.getElementById('arrayInput').value;
    arr = input.split(',').map(Number);
    updateDisplay();
}

function sumPositive() {
    const sum = arr.filter(n => n > 0).reduce((a, b) => a + b, 0);
    output.innerText = `Tổng các số dương: ${sum}`;
}

function countPositive() {
    output.innerText = `Số lượng số dương: ${arr.filter(n => n > 0).length}`;
}

function findMin() {
    output.innerText = `Số nhỏ nhất trong mảng: ${Math.min(...arr)}`;
}

function findMinPositive() {
    const pos = arr.filter(n => n > 0);
    output.innerText = pos.length ? `Số dương nhỏ nhất: ${Math.min(...pos)}` : `Không có số dương`;
}

function findLastEven() {
    const even = [...arr].reverse().find(n => Number.isInteger(n) && n % 2 === 0);
    output.innerText = `Số chẵn cuối cùng: ${even !== undefined ? even : -1}`;
  }
  
function swapElements() {
    const pos1 = +document.getElementById('pos1').value;
    const pos2 = +document.getElementById('pos2').value;
    if (pos1 < arr.length && pos2 < arr.length) {
        [arr[pos1], arr[pos2]] = [arr[pos2], arr[pos1]];
        updateDisplay();
        output.innerText = `Đã đổi chỗ vị trí ${pos1} và ${pos2}`;
    } else {
        output.innerText = `Vị trí không hợp lệ`;
    }
}

function sortArray() {
    arr.sort((a, b) => a - b);
    updateDisplay();
    output.innerText = `Mảng sau khi sắp xếp tăng dần: [${arr.join(', ')}]`;
}

function isPrime(n) {
    if (n < 2 || !Number.isInteger(n)) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function findFirstPrime() {
    const prime = arr.find(n => isPrime(n));
    output.innerText = `Số nguyên tố đầu tiên: ${prime !== undefined ? prime : -1}`;
}

function updateWithRealNumbers() {
    const input = document.getElementById('realArrayInput').value;
    const realArr = input.split(',').map(Number);
    arr = arr.concat(realArr); // nối đuôi vào mảng chính
    updateDisplay();
    output.innerText = `Đã cập nhật mảng.`;
}

function countIntegers() {
    const count = arr.filter(n => Number.isInteger(n)).length;
    output.innerText = `Số lượng số nguyên trong mảng tổng hợp: ${count}`;
}

function comparePosNeg() {
    const pos = arr.filter(n => n > 0).length;
    const neg = arr.filter(n => n < 0).length;
    output.innerText = pos > neg ? 'Số dương nhiều hơn' :
        neg > pos ? 'Số âm nhiều hơn' :
        'Số dương và âm bằng nhau';
}