import React from 'react';
import styled from 'styled-components';
import { AiOutlineRight } from 'react-icons/ai';

const SafetySecond = styled.div`
    .safe_search { display: flex; 
        background: #eee;
        padding: 20px 100px; 
        text-align: center;
        select { width: 20%; height: 40px; 
            border: 1px solid #ddd;
            margin-right: 10px;
        }
        form { width: 80%;
            input { height: 40px; 
                width: 85%;
                border: 1px solid #ddd; 
            }
            button { height: 40px; 
                width: 10%;
                margin: 0 10px;
                background: #0b70b9; 
                color: #fff; 
                font-size: 15px;
                vertical-align: middle; 
            }
        } 
    }
    .safe_box {
        ul { border-top: 1.5px solid #666;
            margin: 30px 0;
            li { padding: 15px;
                border-bottom: 1px solid #ddd;
                a { display: flex; 
                    font-size: 15px;
                    font-weight: bold;
                    position: relative;
                    p { color: #666; 
                        position: absolute; 
                        top: 20%; right: 0; 
                    }
                } 
            }
        }
    }
`;

const Safety2 = () => {
    return (
        <SafetySecond>
            <div className="row">
                <div className="safe_search">
                    <select id="board_search" name="board_search" title="선택">
                        <option value="" title="구분선택">구분선택</option>
                        <option value="" title="구분선택">이용안내</option>
                        <option value="" title="구분선택">대여/반납</option>
                        <option value="" title="구분선택">앱/홈페이지</option>
                        <option value="" title="구분선택">결제/환불/마일리지</option>
                        <option value="" title="구분선택">대여소(개설/폐쇄)</option>
                        <option value="" title="구분선택">회원정보,로그인</option>
                        <option value="" title="구분선택">자전거/시설관리</option>
                        <option value="" title="구분선택">기타</option>
                        <option value="" title="구분선택">운영 및 정책</option>
                        <option value="" title="구분선택">자전거 추가배치</option>
                        <option value="" title="구분선택">QR 자전거</option>
                    </select>
                    <form>
                        <input type="text" name="search_box" id="search_box"></input>
                        <button>검색</button>
                    </form>
                </div>
                <div className="safe_box">
                    <ul>
                        <li><a href="#">자전거를 이용하고 싶은데 어떻게 해야 하나요?(구매/대여/반납)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">정기권 및 이용권 이용방법 (이용권은 한번만 이용 가능한가요?)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">카드 등록은 어떻게 하나요? (대여카드,환승카드)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여카드를 이용한 사용방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여소 아닌곳에 자전거를 잠시 두려고 합니다.(자가잠금)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">티머니(교통카드,시티패스 등) 카드 등록을 통한 자전거 이용방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">외국인의 따릉이 이용 방법은?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 시설물 현황을 알고 싶습니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">후불교통카드를 대여카드로 등록하는 방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여하기 버튼을 눌렀으나, 대여 신청이 안돼요. (아이폰)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여하기 버튼을 눌렀으나, 대여 신청이 안돼요. (안드로이드)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 반납은 어떻게 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거를 대여한 곳에만 반납해야 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여절차를 했는데 자전거 잠금장치가 해제되지 않아요.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여나 반납은 24시간 가능한가요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">단체대여는 어떻게 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여비밀번호(분실)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">반납할 거치대가 없을 경우 어떻게 하나요? – 연결반납<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">반납했는데 미반납되었다는 문자가 왔습니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">잠시 거치중 잠금장치를 채웠는데 잠금이 풀리지 않아 반납이 안됩니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">QR 자전거 대여관련 확인안내. (아이폰)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">QR 자전거 대여관련 확인안내 (안드로이드)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">환승마일리지란?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">마일리지가 적립되지 않았습니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대중교통 환승카드 등록은 어떻게 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 알림톡이 안와요!!<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 알림톡을 차단했는데, 다시 받고 싶습니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 카카오 친구 차단 후에도, 알림이 계속 와요~(받기 싫어요!)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">앱상 자전거 수량표시와 실제 자전거 수량이 달라요<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">안드로이드앱에서 앱이 다운되는 현상 개선(OS 5.0이상)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">아이폰 앱 업데이트가 되지 않을 경우<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">요금제 및 결제수단(결제수단을 늘려주세요)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">추가요금은 무엇이며 어떻게 결제하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">환불신청 방법, 환불규정, 입금 처리는 언제 되나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">이용권 만료 전 정기결제가 되나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">제로페이 결제 오류 시 확인사항<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여소 설치요청 하고싶어요.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">우리지역에 신규 설치 예정 대여소는?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자주 가던 대여소가 갑자기 폐쇄되었어요. 언제 다시 운영하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여소 개설, 폐쇄, 이설 관련 문의입니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">SNS로그인시 자동로그인 되지 않을 때 설정방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">회원 아이디나 비밀번호를 분실했어요<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">회원인데 휴대폰 번호가 변경되었습니다<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거를 타고 가다가 고장이 났는데 어떻게 해야 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">공공자전거 자전거의 브레이크의 앞뒤 브레이크는 어느쪽인가요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 안장이 너무 낮아요(높아요)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거에 핸드폰 거치대가 있었으면 좋겠어요<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 기어 단수가 너무 낮습니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">공공자전거 이용중 사고가 났는데 어떻게 해야 하나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">개인정보 열람 및 삭제 요구 방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">정보공개 및 데이터 요청방법<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">요금제를 다양하게해주세요 (30분권, 3시간권 등)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 배치는 어떻게 이루어지고 있나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">자전거 추가배치를 신청하면 어떻게 반영되나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">전반적으로 자전거가 너무 부족한 것 같습니다. 대응방안이 궁금합니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여하기 버튼을 눌렀으나, 블루투스 연결이 안돼요. (아이폰)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여하기 버튼을 눌렀으나, 대여 신청이 안돼요. (안드로이드)<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">대여하기 버튼을 눌렀으나, 계속 대여중으로 뜹니다.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">큐알코드 스캔하려고하면 큐알스캔하는 부분이 까맣게 변합니다 계속 자전거번호 입력하여 대여중입니다. 어떻게 해야합니까?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">앱 로딩이 느려요.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">앱속도가 느려요.<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">만 13세~14세 회원의 경우 보험 적용이 되나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">새싹 자전거는 성인도 이용할 수 있나요?<p><AiOutlineRight/></p></a></li>
                        <li><a href="#">만 13세 회원의 경우 가입시 특이사항은 어떤 점이 있나요?<p><AiOutlineRight/></p></a></li>
                    </ul>
                </div>
            </div>
        </SafetySecond>
    );
};

export default Safety2;