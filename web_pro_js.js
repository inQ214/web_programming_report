document.querySelectorAll('.interest-box').forEach(item => {
    item.addEventListener('click', function () {
        const topic = this.getAttribute('data-topic');
        const detailDisplay = document.getElementById('detail-display');
        let detailsHtml = '';
        switch (topic) {
            case 'Python':
                detailsHtml = '<h2 style="text-align: center">파이썬</h2><p>&quot;Life is Short, You need Python!&quot;</p>\n' +
                    '\n' +
                    '<p>가장 좋아하고 자신있는 언어로 쉽고 가볍고 빠르게 사용할 수 있다는 점에 흥미를 느꼈습니다. 특히 혼자 독학으로 공부할 때 인터프리터 언어의 장점을 이용하여 문법을 빠르게 익힐 수 있었습니다. 평소 부족하다고 느꼈던 알고리즘 공부를 파이썬을 통해 쉽고 정확히 익힐 수 있었고 코딩의 자신감을 불어 넣어주었습니다.\n</p>' +
                    '\n' +
                    '<p>다음으로 Numpy, scikit-learn을 사용한 머신러닝, Pandas, Matplotlib를 사용한 데이터 시각화, Django를 사용한 웹 개발까지 모두 활용할 수 있는 높은 범용성이 장점이 매력적으로 다가왔습니다. 심지어 단순 크롤링이나, 자동화, 업무에도 사용할 수 있다는 점은 실생활에 코딩을 사용 할 수 있다는 실용성까지 느낄 수 있었습니다.</p>';
                break;
            case 'AI':
                detailsHtml = '<h2 style="text-align: center">머신러닝</h2><p>인공지능과 딥러닝을 많이 공부하지는 않았지만, 머신러닝의 경우 결과값의 근거나 그 로직을 보다 명확히 알 수 있어 이해하기 쉽고 문제의 의사결정에 구체적인 도움을 받을 수 있다는 점이 매력적이였습니다. \n<br>' +
                    '\n' +
                    '<br>학생 때 다루었던 데이터셋은 상대적으로 작아서 머신러닝만으로도 충분한 성능을 보였습니다. 하지만, 대규모 데이터를 다루는 프로젝트를 경험하지 않았기 때문에, 이런 사고가 발전을 막을 수 있음을 인지함과 동시에 경계하고있습니다.<br>\n' +
                    '<br>머신러닝에 대한 접근은 여러 분야에서의 응용 가능하다는 것에서 시작했습니다. 예를 들어, 금융 분야, 의료 분야의 진단 분석, 물류 분야의 수요 예측과 같은 다양한 문제들을 해결할 수 있는 활용방법을 보고 큰 흥미를 느꼈습니다. 이러한 문제들을 해결하기 위해 필요한 이론에 대해 이해를 쌓아가고 있습니다. \n' +
                    '<br>\n' +
                    '<br>또한, 머신러닝이 단순히 예측 모델을 개발하는 것을 넘어서서, 실제 비즈니스 문제에 적용하여 실질적인 가치를 창출해내는 것에 감명 받아 진로를 결정하게 되었습니다.</p>';
                break;
            case 'Data Mining':
                detailsHtml = '<h2 style="text-align: center">시사 이슈</h2><p><strong>이슈 주제:</strong> 인공지능 규제의 필요성\n<br>' +
                    '<strong>요약:</strong> 인공지능 기술의 급속한 발전과 그로 인한 사회적 영향이 증대함에 따라, AI에 대한 규제의 필요성이 점점 더 부각되고 있습니다. 특히 딥페이크, AI 웹툰, AI 가수와 같은 기술이 창작자의 권리를 침해하거나, 기존의 저작권 체계를 혼란시킬 수 있기 때문에, 이에 대한 법적 및 윤리적 규제가 필요 합니다.\n' +
                    '\n' +
                    '<br><br><strong>의견:</strong>\n<br>' +
                    '1. 저작권 보호 차원에서 필요하다.\n<br>' +
                    '\n' +
                    'AI가 생성한 콘텐츠가 창작자의 권리를 침해하지 않고 창작권을 보장받도록, 저작권법을 개정하거나 새로운 법적 규제를 도입해야 합니다. 이는 창작가의 작품과 이익을 보호하는 데 중요하다고 생각합니다.\n<br>' +
                    '\n' +
                    '2. 윤리적 차원에서 필요하다.\n<br>' +
                    '\n' +
                    'AI 기술이 악의적으로 사용되어 발생할 수 있는 피해를 최소화하기 위해, 엄격한 윤리적 사용 기준을 설정해야 합니다. 특히 딥페이크와 같은 기술은 개인의 명예를 훼손할 수 있으므로, 이에 대한 규제가 필요하다고 생각합니다.\n<br>' +
                    '\n' +
                    '<br><strong>의견 정리:</strong> 딥페이크, AI 웹툰, AI 가수 등의 기술로 인해 창작권이 침해될 수 있습니다. 이에 대해 법적 및 윤리적 규제를 마련해야 합니다. 악의적 사용 시 발생할 수 있는 윤리적 피해는 막대할 수 있습니다. 따라서 AI 연구는 계속해야 하지만, 금융, 문화 등 일상 생활에는 신중하게 도입해야 한다고 생각합니다.\n<br>' +
                    '\n' +
                    '<br><strong>느낀점:</strong> 인공지능에 대한 규제는 이제 불가피한 상황이며, 우리는 이러한 변화에 대비해야 합니다. 까다롭고 복잡한 규제 요구 사항을 충족할 수 있는 전문가의 수요가 증가할 것입니다. 따라서 인공지능 전문가는 앞으로 취업 시장에서 높은 수요를 보일 것을 예상할 수 있습니다. 이러한 상황에서 각자가 할 수 있는 역할에 집중하여 변화에 적극적으로 대응하고 준비하는 것이 중요함을 느꼈습니다.</p>';
                break;
        }
        detailDisplay.innerHTML = detailsHtml;
    });
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

let slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {
        slideIndex2 = 1
    }
    if (n < 1) {
        slideIndex2 = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex2 - 1].style.display = "block";
}

function showPlan(year) {
    const planDisplay = document.getElementById('plan-display');
    let planHtml = '';
    switch (year) {
        case 2024:
            planHtml = '<h3>2024년 계획</h3><ul>\n' +
                '                <li>DI LAB 학부연구생 과정 시작</li>\n' +
                '                <li>창업동아리(대표)</li>\n' +
                '                <li>(교외)소프트웨어중심대학 SW공모전(팀장)</li>\n' +
                '                <li>학부융합프로젝트</li>\n' +
                '                <li>(교외)한이음 프로보노 ICT 공모전 - 예선 통과</li>\n' +
                '                <li>ADsP 자격증 취득</li>\n' +
                '            </ul>\n' +
                '            <p>데이터 사이언티스트의 목표를 정하며 이에 학부연구생 과정을 시작하였습니다. 연구실에서 머신러닝, 인공지능 이론 공부를 하며 학문 기초를 다지고 있습니다. 배우는 것에 멈추지 않고 여러 대외활동으로 이론을 활용하여 경험을 쌓을 수 있었습니다. 교내 창업동아리 활동으로 경영, 창업관련에서도 관심을 두고 있고, 학부융합프로젝트 활동으로 논문을 작성하는 과정을 연습하고 있습니다. 교내 활동 뿐만 아니라 교외 활동으로 딥러닝을 활용한 실용적인 시스템을 개발하는 프로젝트를 진행하고 있습니다. 마지막으로 긴 방학 기간을 활용하여 ADsP자격증을 취득할 예정입니다.</p>';
            break;
        case 2025:
            planHtml = '<h3>2025년 계획</h3><ul>\n' +
                '                <li>학석사 통합과정 시작</li>\n' +
                '                <li>졸업 논문 작성</li>\n' +
                '                <li>연구실 과제 수행 시작</li>\n' +
                '                <li>정보처리기사</li>\n' +
                '                <li>SQLD</li>\n' +
                '                <li>어학점수(토익)</li>\n' +
                '            </ul>\n' +
                '            <p>학사 과정과 석사 과정을 통합함으로써 2년의 석사 과정 기간을 단축할 예정입니다. 인공지능의 기초 공부를 마친 후 본격적으로 졸업논문 작성을 준비하며, 이 과정을 통해 깊이 있는 연구를 시작하려 합니다. 논문 작성이 끝나면 연구실에서 다양한 과제를 수행하면서 대학원 생활을 본격적으로 시작할 예정입니다. 학부 졸업 전에 정보처리기사 및 SQLD 자격증을 취득할 계획이며, 연구실의 외국인 교환학생들과의 지속적인 소통을 통해 리스닝 실력을 강화하고, 토익 LC에서 부족한 점수를 보완할 계획입니다.</p>';
            break;
        case 2026:
            planHtml = '<h3>2026년 계획</h3><ul>\n' +
                '                <li>연구실 과제 수행 및 논문 작성</li>\n' +
                '                <li>석사 졸업 논문 준비</li>\n' +
                '                <li>알고리즘 코딩테스트 준비</li>\n' +
                '                <li>취업 대비 포트폴리오 정리</li>\n' +
                '            </ul>\n' +
                '            <p>석사 과정을 마무리하면서 졸업을 준비할 예정입니다. 이 과정에서 졸업 논문 작성에 집중하며, 동시에 취업을 대비해 포트폴리오를 만들고 정리할 것입니다. 취업 면접을 위해 파이썬 알고리즘을 공부하고, 코딩 테스트 준비도 준비할 예정입니다.</p>';
            break;
        case 2027:
            planHtml = '<h3>2027년 이후 계획</h3><li>취업준비</li><p>5년동안 준비한 경험과 지식을 바탕으로 취업을 준비할 예정입니다. 꾸준히 기업에 지원하고 면접을 보며 최선을 다할 것입니다. 만약 그 과정에서 부족한 점을 인지한다면, 서두르지 않고 차분하게 보완하며 성장해 나가겠습니다.</p>';
            break;
    }
    planDisplay.innerHTML = planHtml;
}

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);
    let timer1 = setInterval(() => plusSlides(1), 10000);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

    let slideIndex2 = 1;
    showSlides2(slideIndex2);
    let timer2 = setInterval(() => plusSlides2(1), 10000);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function showSlides2(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides2");
        if (n > slides.length) {
            slideIndex2 = 1;
        }
        if (n < 1) {
            slideIndex2 = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex2 - 1].style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var images = ['web_my_img1.jpeg', 'web_my_img2.jpeg', 'web_my_img3.png'];
    var imgElement = document.querySelector('#section1 img');
    var currentIndex = 0;

    var loadedImages = images.map(src => {
        var img = new Image();
        img.src = src;
        return img;
    });

    function changeImage() {
        imgElement.src = loadedImages[currentIndex].src;
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeImage, 3000);
});


document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    canvas.onmousedown = function (e) {
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(e.offsetX, e.offsetY);
    };

    canvas.onmousemove = function (e) {
        if (isDrawing) {
            ctx.lineTo(e.offsetX, e.offsetY);
            ctx.stroke();
        }
    };

    canvas.onmouseup = function () {
        isDrawing = false;
    };

    canvas.onmouseleave = function () {
        isDrawing = false;
    };

    window.saveEntry = function () {
        const name = document.getElementById('nameInput').value;
        const message = document.getElementById('messageInput').value;
        if (name.trim() === '' || message.trim() === '') {
            alert('이름과 메시지를 입력해주세요.');
            return;
        }
        const imgSrc = canvas.toDataURL();
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<strong>${name}</strong><br>${message}<br><img src="${imgSrc}" width="200"><button onclick="this.parentNode.remove()">삭제</button>`;
        document.getElementById('entries').appendChild(entryDiv);

        document.getElementById('nameInput').value = '';
        document.getElementById('messageInput').value = '';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
});

function showContent(category) {
    const contentDisplay = document.getElementById('content-display');
    let contentHtml = '';
    switch (category) {
        case 'education':
            contentHtml = '<h2>#학력</h2><p><ul type="square"><li>2020년 공주대학교 정보통신공학부 신입학<li>2023년 공주대학교 소프트웨어학과(전과)<li>2024년 2월 소프트웨어학과 DataIntelligence LAB 학부연구생</p>';
            break;
        case 'growth':
            contentHtml = '<h2>#성장과정</h2><p>&nbsp;저는 어린 시절부터 게임과 전자기기에 많은 관심을 가진 남자 아이였습니다. 중학생 때 처음으로 구입한 스마트폰 성능을 직접 향상시킬 수 있다는 사실에 흥미를 느꼈습니다. 인터넷을 통해 커스텀 펌웨어에 대한 정보를 공부하며, ROM과 RAM의 기능적 차이, 루트 경로와 접근 과 같은 기본 용어와 지식을 학습했습니다. 해외 정보 공유 사이트인 XDA에서 자료를 검색하고 설치 방법을 배웠습니다. 이러한 과정을 통해 안드로이드 및 컴퓨터 지식의 기초를 다질 수 있었습니다.</p>';
            break;
        case 'Strengths and Weakness':
            contentHtml = '<h2>#강점</h2><p>\n' +
                '<strong>호기심이 강함:</strong> 새로운 사실이나 현상에 대한 근본적인 이유와 원인을 파악하는 것을 좋아합니다. 특히 코딩을 할 때는 문제의 원인을 찾기 위해 디버깅과 같은 방법을 활용하며, 파이썬에서 이해가 되지 않는 부분은 직접 인터프리터를 사용하여 실험하여 학습하였습니다.<br>\n' +
                '\n' +
                '<br><strong>실행력이 강함:</strong> 대학교에 진학할 당시 전반적인 IT에 관심이 많아 정보통신공학과에 입학하였습니다. 학부 강의에서 코딩을 배우며 진로를 개발자의 길을 결심하였고, 더 나은 기회를 위해 군복학 후 목표에 유리한 소프트웨어학과로 전과를 하였습니다. 2학년 때 파이썬 수업을 계기로 독학으로 데이터 분석을 배우며, 이를 독학으로 진행하기에 어려움이 있어 관련 연구실 교수님과 에 지원하여 학부연구생으로 공부하게 되었습니다. 위와 같은 과정을 통해 꿈과 목표를 이루기 위해서 최선의 방법을 찾고 이를 실천하는 강한 실행력이 있다고 자신할 수 있습니다.' +
                '<br><h2>#약점</h2>' +
                '<p><strong>체력이 약함:</strong> 어렸을 때 부터 운동을 좋아하지 않아서 체력이 약한 편이였습니다. 생활에 문제가 있지는 않지만 좋은 체력을 유지하여 건강한 삶의 필요성을 느꼈습니다. 이를 위해 올해 5월부터 성성동 헬스장에 1년 회원권을 등록하여 금,토,일 주 3회 꾸준히 운동을 하고 있습니다. 한달 동안 운동을 하며 신체와 정신 모두 긍정적인 변화를 체감하였습니다.<br>\n' +
                '<br><strong>결단력이 약함:</strong> 여러가지 선택을 할 때 양쪽 모두를 포기하기 어려워 선택에 오래걸리는 습관이 있습니다. 이를 극복하기 위해 선택이 심히 어려울 경우 양쪽을 모두 고려하기보다 가능성이 높은 한쪽에 최선을 다하는 방법을 선택하였습니다.</p>';
            break;
        case 'aim and motivation':
            contentHtml = '<h2>#목표 및 동기</h2><p><strong>목표:</strong> 데이터 사이언티스트\n' +
                '<br><br>' +
                '<strong>동기:</strong> 데이터 분석, 특히 인공지능 분야로 진로를 결정하게 된 결정적인 계기는 ChatGPT(LLM)의 등장을 빼놓을 수 없습니다. 생성형AI의 등장으로 컴퓨터 분야를 넘어 모든 분야에 침투한 것은 평범한 개발자의 진로를 고민하게 되었습니다. 이에 파이썬을 좋아하고 호기심이 많은 제게 알맞는 데이터 분석이 눈에 들어왔고 더불어 수요에 비해 공급이 부족한 시장 수요 또한 매력적으로 다가와 여러 고민 끝에 진로를 결정하게 되었습니다. 진업 특성상 대학원 진학이 필수적인 상황에서 빠르게 학위를 얻을 수 있는 학석사 연계 과정은 좋은 선택지가 되었고 현재 단기 목표로 정하였습니다. 석사 과정에서 과제를 수행하며 경험을 쌓아나가 데이터 사이언티스트로 현업에서 일하는 것을 장기 목표로 설정하였습니다.</p>';
            break;
        case 'project':
            contentHtml = '<h2>#프로젝트 중 기술적으로 어려웠던 점</h2><p><strong>프로젝트 개요:</strong> 소리를 분석하여 종류를 알려주는 청각 장애인을 위한 시스템 및 어플 개발</p>' +
                '<p><strong>[어려웠던 점 및 해결 방법]</strong><br><strong>- 음성 파일 포맷 통일의 영향:</strong> mp3와 wav 파일 포맷을 통일하는 과정에서 학습 결과에 유의미한 차이가 발생할 가능성에 대한 검증이 어려웠습니다. 이는 포맷의 차이가 모델의 성능에 미치는 영향을 명확히 이해하기 위해 필수적인 작업이었습니다.\n' +
                '\n' +
                '<br><br><strong>- 비트레이트 및 음질 조정:</strong> 모델의 크기와 하드웨어 성능을 고려하여 비트레이트 및 음성 파일의 질을 조절하는 기준 설정이 어려웠습니다. 이 과정은 최적의 음질을 유지하면서도 효율적인 모델 성능을 보장하기 위해 필요했습니다.\n' +
                '\n' +
                '<br><br><strong>- 소리 파일의 이미지 변환:</strong> 소리 파일을 이미지 파일로 변환하여 모델을 학습시킬 때, 시각적 변환 결과가 음성적 차이를 정확히 반영하는지 의문이었습니다. 이 문제는 나중에 ‘mel spectrogram’이라는 특징 추출 기법을 도입함으로써 해결했습니다.\n' +
                '\n' +
                '<br><br><strong>- 모델 변환 문제:</strong> Keras로 학습한 모델을 TensorFlow 및 TensorFlow Lite로 변환하는 과정에서 모델의 크기와 다른 변수들이 변환 과정의 원활함을 저해했습니다. 이는 특히 다양한 사용 목적을 가진 애플리케이션에 모델을 적용하는 경우 중요한 문제였습니다.</p>'

            break;
    }
    contentDisplay.innerHTML = contentHtml;
}

