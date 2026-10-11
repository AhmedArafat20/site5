
const PHONE = "966542980779";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  const isOpen = navLinks.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "إغلاق القائمة" : "فتح القائمة");
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// تحديث روابط الاتصال والواتساب من رقم واحد
document.querySelectorAll('a[href^="tel:"]').forEach((link) => {
  link.href = `tel:+${PHONE}`;
});

document.getElementById("whatsappFloat").href =
  `https://wa.me/${PHONE}`;

document.getElementById("contactForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const message = document.getElementById("customerMessage").value.trim();

  if (!name || !phone) {
    alert("من فضلك اكتب الاسم ورقم الهاتف.");
    return;
  }

  const whatsappMessage = [
    "السلام عليكم، لدي استفسار عن غرف النوم.",
    `الاسم: ${name}`,
    `رقم الهاتف: ${phone}`,
    `الاستفسار: ${message || "أرغب في معرفة التصميمات والأسعار المتاحة."}`
  ].join("\n");

  const url =
    `https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});
