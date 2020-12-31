import React, { useEffect } from 'react';
const { kakao } = window; // window가 절대 빠지면 안됨

const SearchItem = ({searchPlace}) => {
    
    useEffect(() => {
        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const container = document.getElementById('myMap');

        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 카카오에서는 센터를 제주도로 맞춰놓은것
            level: 3 // 지도의 확대 정도, 지도를 7로 설정하면 너무 광범위하게 보임
        };
        const map = new kakao.maps.Map(container, options); // 여기까지 공통으로 들어가는 것


        //키워드로 장소검색하기
        var ps = new kakao.maps.services.Places(); 
        ps.keywordSearch('따릉이 대여소', placesSearchCB); 

        function placesSearchCB (data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                displayMarker(data[i]);    
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}

    function displayMarker(place) {

        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x) 
        });

        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, 'click', function() {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
        });
    }

    }, [searchPlace]); // props가 바뀔때마다 검색

        return (
            <div className="row" style={{ paddingBottom: '20px' }}>
                <div id='myMap' style={{
                    width: '100%', 
                    height: '500px'
                }}></div>
            </div>
        );
    }

export default SearchItem;