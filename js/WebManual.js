var test = new Vue({
    el: '#test',
    data:{
        intro: '전원분야 점검을 시작합니다<br /><span style="color:gray; font-size:80%;">터치해서 시작</span>',
        title_list: ['1.한전 정전(자립형)<sup><sup>렉형태</sup></sup>','2.한전 정전(매립형)<sup><sup>벽형태</sup></sup>','3.국사내정전','4.정류기 경보','5.감시장치 통신이상','6.출입문 통신이상','7.정류기 화재 경보','8.냉방기 누수 경보'],
        title: '',
        question: [],
        result: [],
        errIndex: 0,
        qnaIndex: 0,
        resultIndex: 0,
        message: '',
        callTo: ['☎ 042-478-1800~1804 (관제2센터)', '☎ 042-478-7550 (전원기술부)'],
        nono: '잘 모르겠습니다',
        flag: false
    },
    beforeMount: function() { //insertQna(질문/사진/이전버튼/yes버튼/no버튼)
        this.insertQna('1 번 위치를 확인하세요.','./img/err_type_0_0.png', 0,1,0);

        this.insertResult('전원관제 및 유관부서 연락해주세요.','현 상황에서 계측값이 변동하는지 주시해주세요.');
        this.insertResult('아직 한전 정전상황입니다.','현 상황에서 계측값이 변동하는지 주시해주세요.');
        this.insertResult('정전이 회복되었습니다.','유관부서 공유 후 현장 철수해주세요.');
        this.insertResult('전원관제 및 유관부서 연락해주세요.','전원분야 직원 출동까지 현장 대기 부탁드립니다.');
        this.insertResult('장애가 복구되었습니다.','유관부서 공유 후 현장 철수해주세요.');
    },
    mounted: function() {
        $('#intro').show();
        $('.top').hide();
        $('#err-type').hide();
        $('#caution').hide();
        $('#main').hide();
        $('#result').hide();
        $('#toast').hide();
    },
    methods: {
        start: function() {
            $('#intro').hide();
            $('#err-type').show();
            $('#main').hide();
            $('#caution').hide();
            $('#result').hide();
        },
       ok: function() {
            $('#caution').hide();
            $('#main').show();
            $('.back-btn').show();
            this.question.splice(0,this.question.length);
            this.nono = '잘 모르겠습니다';
            this.flag = false;
            this.qnaIndex = 0;
//            this.lastIndex = 0;
            //insertQna(질문/사진/이전버튼/yes버튼/no버튼)
            // 111: Result Type 1
            // 222: Result Type 2
            // 333: Result Type 3
            // 444: Result Type 4
            // 100: 유관부서에 전화해주세요.
            // 200: 계측값이 변동될때까지 대기해주세요.
            // 300: [3.자체정전] 메뉴 선택해주세요.
            if(this.errIndex==0){
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">전원제어반(자립형)</span> 위치를 파악해주세요.','./img/err_type_0_0.png', 999,1,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 전압(V)계측 위치를 확인하세요. ','./img/err_type_0_1_1.png', 0,2,100);
                this.insertQna('Q1. 전압(V)계측이 0 인가요?','./img/err_type_0_2.png', 1,3,300);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 전류(A)계측 위치를 확인하세요.','./img/err_type_0_1_2.png', 2,4,100);
                this.insertQna('Q2. 전류(A)계측이 0 인가요?','./img/err_type_0_3.png', 3,5,111);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> 메인SW 위치를 확인하세요.','./img/err_type_0_1_3.png', 4,6,100);
                this.insertQna('Q3. 메인SW가 자동에 있나요?','./img/err_type_0_4.png', 5,7,111);
                this.insertQna('전압/전류계측값이 변동하는지 주시해주세요. <br /> 계측값에 변동이 생기면 "네"를 눌러주세요.','./img/err_type_0_5.png', 6,8,200);
                this.insertQna('<span style="color:red; font-size:120%;">&#9315;</span> 왼쪽 레바(R,S,T상) 위치를 확인하세요.','./img/err_type_0_1_4.png', 7,9,100);
                this.insertQna('Q4. 왼쪽 레바를 돌리며 확인해주세요. <br />전압(V)계측값이 나오나요? <br />☞ R,S,T상 모두 확인. <br />(정상범위: 220V 또는 380V 유사값)','./img/err_type_0_6.png', 8,10,222);
                this.insertQna('<span style="color:red; font-size:120%;">&#9316;</span> 오른쪽 레바(R,S,T상) 위치를 확인하세요.','./img/err_type_0_1_5.png', 9,11,100);
                this.insertQna('Q5. 오른쪽 레바를 돌리며 확인해주세요. <br />전류(A)계측값이 나오나요? <br />☞ R,S,T상 모두 계측되는지 확인.','./img/err_type_0_7.png', 10,333,300);
            }else if(this.errIndex==1){
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">전원제어반(매립형)</span> 위치를 파악해주세요.','./img/err_type_1_0.png', 999,1,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 전압(V)계측 위치를 확인하세요.','./img/err_type_1_1_1.png', 0,2,100);
                this.insertQna('Q1. 전압(V)계측이 0 인가요?','./img/err_type_1_2.png', 1,3,300);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 전류(A)계측 위치를 확인하세요.','./img/err_type_1_1_2.png', 2,4,100);
                this.insertQna('Q2. 전류(A)계측이 0 인가요?','./img/err_type_1_3.png', 3,5,111);
                this.insertQna('전압/전류계측값이 변동하는지 주시해주세요. <br /> 계측값에 변동이 생기면 "네"를 눌러주세요.','./img/err_type_1_7.png', 4,6,200);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 전압(V)계측 위치를 확인하세요.','./img/err_type_1_1_1.png', 5,7,100);
                this.insertQna('Q3. 전압(V)계측값이 나오나요?<br />(정상범위: 220V 또는 380V 유사값)','./img/err_type_1_4.png', 6,8,222);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 전류(A)계측 위치를 확인하세요.','./img/err_type_1_1_2.png', 7,9,100);
                this.insertQna('Q4. 전류(A)계측값이 나오나요?','./img/err_type_1_5.png', 8,333,10);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> 한전 푸쉬버튼 위치를 확인하세요.','./img/err_type_1_1_3.png', 9,11,100);
                this.insertQna('Q5. 한전 푸쉬버튼이 있나요? <br /> ☞ 있다면 눌러주세요..','./img/err_type_1_6.png', 10,8,111);
            }else if(this.errIndex==2){
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">전원제어반</span> 위치를 파악해주세요.','./img/err_type_2_0.png', 999,1,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 전압계측 위치를 확인하세요','./img/err_type_2_1_1.png', 0,2,100);
                this.insertQna('Q1. 전압(V)계측값이 나오나요?<br />(정상범위: 220V 또는 380V 유사값)','./img/err_type_2_2.png', 1,3,400);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 전류계측 위치를 확인하세요','./img/err_type_2_1_2.png', 2,4,100);
                this.insertQna('Q2. 전류(A)계측이 0 인가요?','./img/err_type_2_3.png', 3,5,333);
                this.insertQna('전원제어반 문을 개방해주세요.','./img/err_type_2_4.png', 4,6,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> 메인차단기 위치를 확인하세요.<br />(위치가 다를 수 있습니다!)','./img/err_type_2_5_1.png', 5,7,100);
                this.insertQna('Q3. 메인차단기가 ON 인가요?','./img/err_type_2_6.png', 6,8,111);
                this.insertQna('<span style="color:red; font-size:120%;">&#9315;</span> 메인 전자개폐기 위치를 확인하세요<br />(위치가 다를 수 있습니다!)','./img/err_type_2_5_2.png', 7,9,100);
                this.insertQna('Q4. 메인 전자개폐기 상태가 OFF 인가요?','./img/err_type_2_7.png', 8,10,111);
                this.insertQna('<span style="color:red; font-size:120%;">&#9316;</span> 좌측 선택스위치 위치를 확인하세요','./img/err_type_2_1_5.png', 9,11,100);
                this.insertQna('Q5. 선택스위치가 자동에 있나요? <br /> ☞ 자동에 있다면 <span style="color:blue">수동으로 돌려주세요.</span>','./img/err_type_2_8.png', 10,3,111);
                this.insertQna('Q6. 전류(A)계측값이 나오나요?','./img/err_type_2_9.png', 12,333,444);
            }else if(this.errIndex==3){
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">직류제어반</span> 위치를 파악해주세요.','./img/err_type_3_0.png', 999,1,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 전압(V)계측 위치를 확인하세요.','./img/err_type_3_1.png', 0,2,100);
                this.insertQna('Q1. 전압(V)계측값이 나오나요?<br />(정상범위: 47V ~ 54V 유사값)','./img/err_type_3_2.png', 1,3,111);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 디스플레이 위치를 확인하세요.','./img/err_type_3_3.png', 2,4,100);
                this.insertQna('Q2. \'F0\'을 눌러서 디스플레이에 경보를 확인하세요.<br /> 경보가 있나요?','./img/err_type_3_4.png', 3,5,444);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> 정류기 모듈 스위치를 전부 확인하세요.<br /> Q3. OFF된 모듈번호(1~8)를 유관부서에 알려주세요','./img/err_type_3_5.png', 4,6,100);
               this.insertQna('<span style="color:red; font-size:120%;">&#9315;</span> 손잡이를 활용해 판넬을 열어주세요.','./img/err_type_3_6.png', 5,7,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9316;</span> DSRC-P에 위치한 보드를 찾아주세요.<br /> 보드의 빨간색 스위치를 찾아 리셋해주세요.<br /> ☞ 빨간 스위치 내렸다가 올리기','./img/err_type_3_7.png', 6,8,100);
                this.insertQna('Q4. 경보가 있나요?','./img/err_type_3_8.png', 7,444,555);
            }else if(this.errIndex==4){
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">ELITE(RMS)제어반</span> 위치를 파악해주세요.','./img/err_type_4_0.png', 999,1,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> ELITE 판넬을 몸쪽으로 개방해주세요. ','./img/err_type_4_1.png', 0,2,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 판넬 뒤쪽에 부착되어있는 RMS를 확인하세요.','./img/err_type_4_2.png', 1,3,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> RUN 옆의 LED가 적색인가요?','./img/err_type_4_3.png', 2,4,444);
                this.insertQna('<span style="color:red; font-size:120%;">&#9315;</span> RESET 버튼을 눌러주세요.<br /> RUN 옆의 LED가 녹색으로 바뀌었나요?','./img/err_type_4_4.png', 3,555,5);
                this.insertQna('제어반 전면 I/O보드의 <span style="color:red; font-size:120%;">왼쪽상단부분</span>을 확인하세요.','./img/err_type_4_5.png', 4,6,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9316;</span> 유리관 휴즈가 파손되었나요? <br /> ☞ 유리관 내 선이 끊어졌는지 확인','./img/err_type_4_6.png', 5,444,7);
                this.insertQna('<span style="color:red; font-size:120%;">&#9317;</span> 전원토글 스위치를 껐다 켜주세요. ','./img/err_type_4_7.png', 6,8,100);
                this.insertQna('판넬 뒤쪽의 RMS의 <span style="color:red"; font-size:120%;>&#9318;</span> RUN 옆의 LED가 적색인가요?','./img/err_type_4_8.png', 7,444,555);
            }else if(this.errIndex==5){
                this.insertQna('국사 출입문 옆에 있는 <span style="color:blue">출입문장치</span> 위치를 파악해주세요.','./img/err_type_5_0.png', 999,1,100);
                this.insertQna('출입문장치 판넬을 열어주세요. <br /> ☞ 오른쪽 측면 중앙 홈에 드라이버 등을 삽입 후 개방','./img/err_type_5_1.png', 0,2,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 메인보더의 SOCKET LED 위치를 확인하세요.','./img/err_type_5_2.png', 1,3,100);
                this.insertQna('Q1. SOCKET의 LED가 소등상태인가요?','./img/err_type_5_3.png', 2,4,444);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> DC 보드 전원스위치를 껐다 켜주세요.','./img/err_type_5_4.png', 3,5,100);
                this.insertQna('Q2. SOCKET의 LED가 점등상태인가요?','./img/err_type_5_5.png', 4,555,6);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> AC보드의 전원 리셋 PIN 위치를 확인하세요.','./img/err_type_5_6.png', 5,7,100);
                this.insertQna('Q4. JP1 2개 핀을 일시적으로 연결시킨 후 떼세요.<br /> 드라이버가 아닌 다른 물건 사용해도 무방 ','./img/err_type_5_7.png', 6,8,100);
                this.insertQna('Q5. SOCKET의 LED가 점등상태인가요?','./img/err_type_5_5.png', 7,555,444);
            }else if(this.errIndex==6){
                this.insertQna('국사 내 실제 화재가 발생했나요? <br />  육안으로 확인하세요.','./img/err_type_base.png', 999,444,1);
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">정류기시설</span> 위치를 파악해주세요.','./img/err_type_6_1.png', 0,2,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 화재감지기 위치를 파악해주세요.<br /> ☞ 정류기 상부.','./img/err_type_6_2.png', 1,3,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9313;</span> 화재감지기 LED가 적색으로 점등되어 있나요?','./img/err_type_6_3.png', 2,4,444);
                this.insertQna('<span style="color:red; font-size:120%;">반시계방향(왼쪽방향)</span> 으로 돌려 감지기를 탈착해주세요.','./img/err_type_6_4.png', 3,5,100);
                this.insertQna('감지기를 흔든 후, <span style="color:red; font-size:120%;">시계방향(오른쪽방향)</span> 으로 돌려 감지기를 부착해주세요.','./img/err_type_6_5.png', 4,6,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9314;</span> 화재감지기 LED가 소등되어 있나요?','./img/err_type_6_6.png', 5,555,444);
                this.nono = '아니요';
            }else if(this.errIndex==7){
                this.insertQna('국사 내 실제 침수가 발생했나요? <br />  육안으로 확인하세요.<br />  -국사내 내부 침수 및 냉방기 주변 누수 여부<br />  -실제 침수의 경우 프로세스에 의한 상황공유','./img/err_type_base.png', 999,444,1);
                this.insertQna('국사 출입문 옆에 비치되어있는 기기배치도를 보고 <span style="color:blue">국사 내 냉방기 전체 위치</span>를 파악해주세요.','./img/err_type_7_1.png', 0,2,100);
                this.insertQna('<span style="color:red; font-size:120%;">&#9312;</span> 냉방기 주변의 누수 센서를 확인해주세요.','./img/err_type_7_2.png', 1,3,100);
                this.insertQna('Q1. 누수 센서 주변에 물기 혹은 이물질이 있나요?','./img/err_type_7_3.png', 2,4,4);
                this.insertQna('Q2. 누수 센서 주변의 물기/이물질을 제거해주세요.<br /> ☞  청테이프와 동테이프 주변 깨끗이 청소','./img/err_type_7_4.png', 3,5,100);
                this.insertQna('Q3. 경보가 회복되었나요?','./img/err_type_7_5.png', 4,555,444);
                this.nono = '아니요';
            }

        },
       no: function() {
            var self = this;
            // 1.한전정전 시 한전푸쉬버튼 누른 후에도 전류가 0인경우 예외처리
            noIndex = this.question[self.qnaIndex].no
            if(this.errIndex == 1 && this.qnaIndex == 9){
                if(this.flag == true){
                    noIndex = 444;
                }
            }
            if(this.errIndex == 1 && this.qnaIndex == 11){
                if(this.flag == false){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
            // 3.자체정전 시 스위치 수동으로 돌린 뒤에도 전류가 0인경우 예외처리
//            if(this.errIndex == 2 && this.qnaIndex == 4){
//                if(this.flag == false){
//                    this.flag = true;
//                }else{
//                    this.flag = false;
//                }
//            }
            if(this.errIndex == 2 && this.qnaIndex == 11){
                if(this.flag == false){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
            if(noIndex == 100){
                this.showToast('유관부서에 전화해주세요.');
                var location = document.querySelector("#call").offsetTop;
                window.scrollTo({top:location, behavior:'smooth'});

            }else if(noIndex == 200){
                this.showToast('계측값이 변동될때까지 <br /> 대기해주세요.');
            }else if(noIndex == 300){
                this.showToast('[3.국사내정전] 메뉴 <br /> 선택해주세요.');
                setTimeout(function() {
                    $('#err-type').show();
                    $('#main').hide();
                    $('.top').hide();
                }, 1500);
            }else if(noIndex == 400){
                this.showToast('[1.한전 정전(자립형)] 메뉴 <br /> 선택해주세요.');
                setTimeout(function() {
                    $('#err-type').show();
                    $('#main').hide();
                    $('.top').hide();
                }, 1500);
            }else if(noIndex > this.question.length){
                $('#intro').hide();
                $('#err-type').hide();
                $('#main').hide();
                $('#result').show();
                $('.back-btn').hide();
                if(noIndex == 111){
                    this.resultIndex = 0;
                }else if(noIndex == 222){
                    this.resultIndex = 1;
                }else if(noIndex == 333){
                    this.resultIndex = 2;
                }else if(noIndex == 444){
                    this.resultIndex = 3;
                }else if(noIndex == 555){
                    this.resultIndex = 4;
                }
            }else{
                this.qnaIndex = noIndex;
                window.scrollTo({top:(0,0), behavior:'smooth'});
                if(this.question[this.qnaIndex].no==100){
                    this.nono = '잘 모르겠습니다';
                }else{
                    this.nono = '아니요';
                }
            }
        },
       yes: function() {
            var self = this;
            yesIndex = this.question[self.qnaIndex].yes;
            // 1.한전정전 시 한전푸쉬버튼 누층 후에도 전류가 0인경우 예외처리
            if(this.errIndex == 1 && this.qnaIndex == 11){
                if(this.flag == false){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
            // 3.자체정전 시 스위치 수동으로 돌린 뒤에도 전류가 0인경우 예외처리
            if(this.errIndex == 2 && this.qnaIndex == 4){
                if(this.flag == true){
                    yesIndex = 444;
                }
            }
            if(this.errIndex == 2 && this.qnaIndex == 11){
                if(this.flag == false){
                    this.flag = true;
                }else{
                    this.flag = false;
                }
            }
            if(yesIndex > this.question.length){
                $('#intro').hide();
                $('#err-type').hide();
                $('#main').hide();
                $('#result').show();
                $('.back-btn').hide();
                if(yesIndex == 333){
                    this.resultIndex = 2;
                }else if(yesIndex == 444){
                    this.resultIndex = 3;
                }else if(yesIndex == 555){
                    this.resultIndex = 4;
                }
            }else{
                this.qnaIndex = yesIndex;
                window.scrollTo({top:(0,0), behavior:'smooth'});
                if(this.question[this.qnaIndex].no==100){
                    this.nono = '잘 모르겠습니다';
                }else{
                    this.nono = '아니요';
                }
            }
        },
        back: function() {
            var self = this;
            x_Index = this.question[self.qnaIndex].preIndex;
            if(this.errIndex == 1 && this.qnaIndex == 8){
                alert(this.flag);
                if(this.flag == true){
                    this.flag = false;
                    x_Index = 11;
                }
            }
            if(this.errIndex == 2 && this.qnaIndex == 3){
                if(this.flag == true){
                    this.flag = false;
                    x_Index = 11;
                }
            }
            if(x_Index == 999){
                this.showToast('첫 화면입니다.');
            }else{
                this.qnaIndex = x_Index;
                if(this.question[this.qnaIndex].no==100){
                    this.nono = '잘 모르겠습니다';
                }else{
                    this.nono = '아니요';
                }
            }
            window.scrollTo({top:(0,0), behavior:'smooth'});
        },
        home: function() {
            $('#intro').hide();
            $('#err-type').show();
            $('#caution').hide();
            $('#main').hide();
            $('#result').hide();
            $('.top').hide();
            this.qnaIndex = 0;
            this.resultIndex = 0;
        },
        err_type: function(errIndex) {
            this.errIndex = errIndex;
            $('#intro').hide();
            $('#err-type').hide();
            $('.top').show();
            $('#caution').show();
            $('.back-btn').hide();
            $('#main').hide();
            this.qnaIndex = 0;
        },
        insertQna: function(q, i, p, y, n) {
            var item = {
                question: q,
                image: i,
                preIndex: p,
                yes: y,
                no: n
            };
            this.question.push(item);
        },
        insertResult: function(s,t) {
            var items = {
                status: s,
                todo: t
            };
            this.result.push(items);
        },
        showToast: function(msg) {
            var self = this;
            if(self.msgTimer !== 0) {
                clearTimeout(self.msgTimer);
                self.msgTimer = 0;
            }
            this.message = msg;
            setTimeout(function() {
                $('#toast').fadeIn(500, function() {
                    self.msgTimer = setTimeout(function() {
                        $('#toast').fadeOut(500);
                    }, 2000);
                });
            }, 200);
        }
    }
});