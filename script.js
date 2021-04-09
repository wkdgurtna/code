function getDate(date) {
	return date.toLocaleDateString().replace(/\./g, "").split(" ");
}

window.onload = function() {
  const Tday = new Date();
  
  const nowMonth = Tday.getMonth();
  
  const [y, m] = getDate(new Date(Tday.setMonth(nowMonth)));

  const lastDay = getDate(new Date(y, m, 0)).pop() * 1;
  
  const day = new Date([y, m, 1].join("-")).getDay();
  
  const maxDay = Math.ceil((+day + lastDay) / 7) * 7;

  let html = '';

  for (let i = 1; i <= maxDay; i++) {
    const d = i > day && lastDay >= i - day ? i - day : '';
    const cls = !d ? 'background' : '';

    html += `<div class="dateSel ${cls}">${d}</div>`;
  }

  document.querySelector('.dateSel').innerHTML = html;
  document.querySelector('.date_text').innerText = `${y}년 ${m}월`;
}