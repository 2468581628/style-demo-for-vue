<template>
  <div class="viewBody">
    <ul>
      <li><a href="#">你</a></li>
      <li><a href="#">看</a></li>
      <li><a href="#">见</a></li>
      <li><a href="#">的</a></li>
      <li><a href="#">我</a></li>
      <li><a href="#">看</a></li>
      <li><a href="#">见</a></li>
      <li><a href="#">的</a></li>
    </ul>
  </div>
</template>
<style  scoped>
.viewBody {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #2e262a, #72e2fe);
}
.bg {
  position: absolute;
  letter-spacing: 20px;
}
ul {
  display: flex;
  user-select: none;
}
ul li {
  list-style: none;
  margin-left: 10px;
}
ul li a {
  width: 40px;
  height: 40px;
  display: inline-block;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(2px);
  transition: 0.5s;
  overflow: hidden;
}
ul li a:hover {
  transform: translateY(-5px);
}
ul li a::before {
  position: absolute;
  content: "";
  width: 50px;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  transform: skewX(45deg) translateX(150px);
  transition: 0.5s;
}
ul li a:hover::before {
  transform: skewX(45deg) translateX(-150px);
}
</style>