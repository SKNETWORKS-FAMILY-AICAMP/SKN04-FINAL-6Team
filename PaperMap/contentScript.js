// 구글 스칼라 검색창(입력 필드)와 검색 버튼 찾기
const searchInput = document.querySelector('input#gs_hdr_tsi');
const searchButton = document.querySelector('button[aria-label="Search"]');

if (searchInput) {
    // 1) 사용자가 엔터 키로 검색했을 때
    searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const query = searchInput.value;
        chrome.storage.sync.set({ googleScholarQuery: query }, () => {
        console.log(`저장된 검색어 (엔터): ${query}`);
        });
    }
    });
}

if (searchInput && searchButton) {
    // 2) 검색 버튼을 클릭했을 때
    searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    chrome.storage.sync.set({ googleScholarQuery: query }, () => {
        console.log(`저장된 검색어 (버튼 클릭): ${query}`);
    });
    });
}

else {
    console.log("nothing happened")
}

  