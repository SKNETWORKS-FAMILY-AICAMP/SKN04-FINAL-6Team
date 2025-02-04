// chrome.storage.sync에서 검색어 가져오기
chrome.storage.sync.get('googleScholarQuery', (data) => {
    const savedQuery = data.googleScholarQuery;
    alert(`저장된 검색어 확인: ${savedQuery}`);

    if (savedQuery) {
        // 표시용 div 생성
        const container = document.createElement('div');
        container.style.border = '2px solid red';
        container.style.margin = '10% 5% 2% 3%';
        container.style.padding = '15px';
        container.style.fontSize = '16px';
        container.style.backgroundColor = '#fff';
        container.style.position = 'fixed'; // 화면에 고정
        container.style.top = '10px'; // 상단에서 10px
        container.style.right = '10px'; // 오른쪽에서 10px
        container.style.zIndex = '9999'; // 다른 요소 위에 표시
        container.textContent = `구글 스칼라에서 입력한 검색어: ${savedQuery}`;
    
    // 페이지 최상단에 추가
    document.body.appendChild(container);
    }
});



// 