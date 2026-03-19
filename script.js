
ได้รับการสนับสนุน
ผู้ติดต่อ
แชทกลุ่ม
กำลังโหลด...

14:31
Migeul
อุทยานแห่งชาติเขาใหญ่ เกิดขึ้นจากแนวคิดในการอนุรักษ์ทรัพยากรธรรมชาติและสัตว์ป่าของประเทศไทย โดยในอดีตพื้นที่บริเวณนี้เป็นป่าดงดิบขนาดใหญ่ที่อุดมสมบูรณ์ มีสัตว์ป่าและพืชพันธุ์จำนวนมาก แต่เริ่มถูกบุกรุกและล่าสัตว์อย่างต่อเนื่อง
คุณส่ง
  background:#000;
Migeul
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>Khaoyai Digital Guide</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- เมนู -->
<nav>
  <h2>KHAOYAI</h2>
  <ul>
    <li><a href="#home">หน้าแรก</a></li>
    <li><a href="#places">สถานที่</a></li>
    <li><a href="#about">เกี่ยวกับ</a></li>
  </ul>
</nav>

<!-- Hero -->
<section id="home" class="hero">
  <h1>เที่ยวเขาใหญ่</h1>
  <p>สัมผัสธรรมชาติ จุดเช็คอินยอดฮิต</p>
</section>

<!-- สถานที่ -->
<section id="places" class="places">

  <h2>สถานที่แนะนำ</h2>

  <div class="grid">

    <div class="card" onclick="showDetail(1)">
      <img src="ที่เที่ยว1.jpg">
      <h3>เขายายเที่ยง</h3>
    </div>

    <div class="card" onclick="showDetail(2)">
      <img src="ที่เที่ยว2.jpg">
      <h3>น้ำผุด</h3>
    </div>

    <div class="card" onclick="showDetail(3)">
      <img src="ที่เที่ยว3.jpg">
      <h3>น้ำตกเหวนรก</h3>
    </div>

    <div class="card" onclick="showDetail(4)">
      <img src="ที่เที่ยว4.jpg">
      <h3>Primo Piazza</h3>
    </div>

    <div class="card" onclick="showDetail(5)">
      <img src="ที่เที่ยว5.jpg">
      <h3>Hokkaido Flower Park</h3>
    </div>

  </div>

</section>

<!-- popup -->
<div id="popup" class="popup">
  <div class="popup-content">
    <span onclick="closePopup()">✖</span>
    <h2 id="title"></h2>
    <p id="desc"></p>
  </div>
</div>

<!-- เกี่ยวกับ -->
<section id="about" class="about">
  <h2>เกี่ยวกับ</h2>
  <p>เว็บไซต์นี้จัดทำขึ้นเพื่อแนะนำสถานที่ท่องเที่ยวในเขาใหญ่</p>
</section>

<footer>
  <p>© 2026 Khaoyai Travel</p>
</footer>

<script src="script.js"></script>
</body>
</html>
Migeul
<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <title>KHAO YAI</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- header ด้านบน -->
<header class="top-header">
  <h2>KHAO YAI</h2>
  <p>https://6840215112-a11y.github.io</p>
</header>

<!-- hero image -->
<section class="hero">
  <div class="overlay">
    <h1>KHAO YAI</h1>
    <p>เขาใหญ่</p>
  </div>
</section>

<!-- เมนู -->
<nav>
  <ul>
    <li><a href="#">หน้าแรก</a></li>
    <li><a href="#">เกี่ยวกับ</a></li>
    <li><a href="#">รูป</a></li>
    <li><a href="#">ติดต่อ</a></li>
  </ul>
</nav>

<!-- content -->
<section class="content">
  <h1>ที่มาของโครงการ</h1>
</section>

</body>
</html>
Migeul
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

/* header บนสุด */
.top-header {
  background: #000;
  color: #fff;
  text-align: center;
  padding: 15px;
}

.top-header p {
  font-size: 14px;
  color: #ccc;
}

/* รูปปก */
.hero {
  background: url("ปก.jpg") no-repeat center center/cover;
  height: 400px;
  position: relative;
}

/* overlay ตัวหนังสือบนรูป */
.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
}

.overlay h1 {
  font-size: 60px;
  font-weight: bold;
}

.overlay p {
  font-size: 22px;
}

/* เมนู */
nav {
  background: #555;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
}

nav ul li {
  padding: 15px 25px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-size: 18px;
}

/* content */
.content {
  padding: 50px;
  text-align: center;
}

.content h1 {
  font-size: 40px;
}
