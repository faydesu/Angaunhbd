let score = 0;

// ดึงคะแนนจาก Local Storage
if (localStorage.getItem('popScore')) {
  score = parseInt(localStorage.getItem('popScore'));
  document.getElementById('score').textContent = score;
}

const popImage = document.getElementById('pop-image');

// ฟังก์ชันเพิ่มคะแนนเมื่อคลิก
popImage.addEventListener('mousedown', () => {
  score++;
  document.getElementById('score').textContent = score;
  localStorage.setItem('popScore', score); // บันทึกคะแนน
  popImage.src = 'assets/baby-grape.png'; // เปลี่ยนภาพเมื่อคลิก
  console.log('Image changed to baby-grape.png'); // Debugging
});

// ฟังก์ชันคืนภาพเดิมเมื่อปล่อยคลิก
popImage.addEventListener('mouseup', () => {
  popImage.src = 'assets/grape.png'; // เปลี่ยนกลับเป็นภาพเดิม
  console.log('Image changed to grape.png'); // Debugging
});

// กรณีเลื่อนเมาส์ออกจากภาพ
popImage.addEventListener('mouseleave', () => {
  popImage.src = 'assets/grape.png'; // เปลี่ยนกลับเป็นภาพเดิม
});
