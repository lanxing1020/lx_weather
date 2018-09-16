$(function(){
    let weather;
    $.ajax({
        url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=运城",
        dataType:"jsonp",
        success:function(res){
            weather=res.data.weather;
            console.log(weather);
            wither(weather);
        }
    })
// 地区
function wither(obj){
    $(".city_name").html(obj.city_name);
    $(".quality_level").html(obj.quality_level);
    $(".wendu").children().first().html(obj.current_temperature);
    $(".tianqi").html(obj.current_condition);
    $(".dat_low_temperature").html(obj.dat_low_temperature+"C°");
    $(".dat_high_temperature").html(obj.dat_high_temperature);
    $(".current_condition").html(obj.current_condition);
    $(".today").attr("src",`img/${obj.dat_weather_icon_id}.png`);
    $(".tomorrow_high_temperature").html(obj.tomorrow_high_temperature);
    $(".tomorrow_low_temperature").html(obj.tomorrow_low_temperature+"C°");
    $(".tomorrow").attr("src",`img/${obj.tomorrow_weather_icon_id}.png`);
    obj.hourly_forecast.forEach(function (element) {
        let  str=`
        <div class="list">
            <p>${element.hour}:00</p>
            <img src="img/${element.weather_icon_id}.png" alt="">
            <span>${element.temperature}°</span>
        </div>`
        $(".section2-list").append(str);
    })



    obj.forecast_list.slice(0,6).forEach(function (value) {
        let date=` 
        <div class="list">
            <p class="xiangqi">昨天</p>
            <span>${value.date.slice(5,7)}/${value.date.slice(8,10)}</span>
            <p>${value.condition}</p>
            <img src="img/${value.weather_icon_id}.png" alt="">
           
        </div> `;
        let dates=`
                    <div class="list">
                        
                         <img src="img/${value.weather_icon_id}.png" alt="">
                         <span>${value.condition}</span>
                        <p>${value.wind_direction}<br>${value.wind_level}级</p>
                    </div>`;
        $(".section3").append(date);
        $(".listt").append(dates);
        console.log( $(".section3"));
    })
    $(".section3").find(".xiangqi").eq(1).html("今天");
    $(".section3").find(".xiangqi").eq(2).html("明天");
    $(".section3").find(".xiangqi").eq(3).html("后天");
    $(".section3").find(".xiangqi").eq(4).html("周二");
    $(".section3").find(".xiangqi").eq(5).html("周三");

}








    
})