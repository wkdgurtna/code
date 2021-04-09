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

  // 날짜 변환 함수 (년, 월, 일을 반환)
  function getDate(date) {
    return date.toISOString().split("T")[0].split("-").map(v => Number(v));
  }
  
  // date 객체
  const Tday = new Date();
  
  // 현재 월
  const nowMonth = Tday.getMonth();
  
  // 날짜 구하기 (이 곳에서 다음달, 이전달로 이동 가능)
  const [y, m] = getDate(new Date(Tday.setMonth(nowMonth)));
  
  // 해당 달의 마지막 일 구하기
  const lastDay = getDate(new Date(y, m, 0)).pop() * 1;
  
  // 해당 달의 첫 요일 구하기
  const day = new Date([y, m, 1].join("-")).getDay();
  
  // 마지막 날과 시작 일을 더해 7의 배수를 만들어 줌
  const maxDay = Math.ceil((+day + lastDay) / 7) * 7;

  let html = '';

  // 요일과 마지막 일을 합친 수만큼 반복문을 돌려준다
  for (let i = 1; i <= maxDay; i++) {
    const d = i > day && lastDay >= i - day ? i - day : '';
    const cls = !d ? 'background' : '';

    // 해당 요일을 구하는 수식은 [ i - 첫 요일 ] 이다.  

    // 첫 요일보다 작은 수는 이전달의 일이라는 뜻이며
    // 해당 달의 마지막 일보다 크면 다음 달이라는 뜻으로 넘기면 된다.

    html += `<div class="dateSel ${cls}">${d}</div>`;
  }

  // 만든 날짜 정보를 넣어준다. 
  document.querySelector('.dateSel').innerHTML = html;
  document.querySelector('.date_text').innerText = `${y}년 ${m}월`;