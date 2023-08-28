$(function () {
  $.ajax({
    url: "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWB-F18B96CC-C21C-4D4C-BD0F-151910683A85&format=JSON&locationName=%E6%A1%83%E5%9C%92%E5%8D%80&elementName=T,Wx",
    type: "GET",
    datatype: "json",
    success: function (response) {
      console.log(response.records);
      let path = response.records.locations[0].location[0];
      $("#city_name").html(response.records.locations[0].locationsName);
      $("#district").html(path.locationName);
      $("#tempture").html(
        path.weatherElement[0].time[0].elementValue[0].value + "&#176;"
      );
      let j = 0;
      for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) {
          // $("weekday")
          //   .find(".block")
          //   .eq(j)
          //   .find("h6")
          //   .html(
          //     path.weatherElement[0].time[0].elementValue[i].value + "&#176;"
          //   );

          let wx = path.weatherElement[1].time[i].elementValue[0].value;
          console.log(wx);
          if (wx.indexOf("晴") > -1) {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/Shrg84B.png");
          } else if (wx.indexOf("雨") > -1) {
            $(".block").eq(j).find("img").attr("src", "img/rainny.png");
          } else {
            $(".block")
              .eq(j)
              .find("img")
              .attr("src", "https://i.imgur.com/BeWfUuG.png");
          }
          $(".sub_t")
            .eq(j)
            .html(
              path.weatherElement[0].time[i].elementValue[0].value + "&#176;"
            );
          j++;
        }
      }
    },
    error: function () {
      console.log("error");
    },
  });
});
