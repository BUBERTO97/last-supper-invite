const italianText = `<img src='./pinched-fingers-svgrepo-com.svg' height='20px'>
<img src='./pinched-fingers-svgrepo-com.svg' height='20px'>
<img src='./pinched-fingers-svgrepo-com.svg' height='20px'>
<img src='./pinched-fingers-svgrepo-com.svg' height='20px'>
`;
const jokes = [];
jokes.push(italianText);
fetch("./jokes.json")
  .then((response) => response.json())
  .then(function (json) {
    for (const joke of json) {
      jokes.push(joke);
    }
    // Display the first joke after fetching
    $("#joke").html(jokes[0]);
  });

let currentJoke = 0;
$("#next_joke").on("click", function () {
  if (currentJoke < jokes.length - 1) {
    currentJoke++;
  } else {
    currentJoke = 0;
  }
  $("#joke").html(jokes[currentJoke]);
});

function updateContent() {
  $(".loader2").remove();
  $(".loader").remove();
  $("#cooking").text("Remember to turn your audio on!");
  $("#subtitle").remove();
  $("#continue").show();
}

$("#continue").on("click", function () {
  $("#kd_loader").animate({ opacity: 0 }, 1000, function () {
    $("#kd_loader").remove();
    $("#jesus").trigger("play");
    $("#you-were-invited").animate({ opacity: 1 }, 1000, function () {
      $("#last-supper").animate({ opacity: 1 }, 2000, function () {
        $("#know-more").animate({ opacity: 1 }, 2000);
      });
    });
  });
});

$("#know-more").on("click", function () {
  $("#who-are-you-video").trigger("play");
  $("#first-part").remove();
  $("#jesus").remove();
  setInterval(showSecondPart, 5000);
});

function showSecondPart() {
  $("#second-part").css("display", "flex");
  $("#second-part").animate({ opacity: 1 }, 2000);
}
let name = "";
$("#input-name").on("click", function () {
  if (!$("#name").val()) {
    return;
  }
  name = $("#name").val();
  makeDisappear("#second-part", 2000);
  makeDisappear("#who-are-you-video", 2000);
  $("#wii-song").trigger("play");
});

function makeDisappear(id, time) {
  $(id).animate({ opacity: 0 }, time, function () {
    $(id).remove();
  });
}

$("#no-button").on("click", function () {
  $("#explosion").show();
  $("#explosion").trigger("play");
  setInterval(disappearButton, 5000);
});
function disappearButton() {
  makeDisappear("#no-button", 0);
}

$("#yes").on("click", function () {
  console.log(name);
  $.post("./response.php", { name: name }, function (data, status) {
    console.log(status);
  });
  makeDisappear("#third-part", 0);
  $("#nice-video").trigger("play");
});

$("#end").on("click", function () {
  makeDisappear("#fourth-part", 0);
  makeDisappear("#nice-video", 0);
  $("#final-video").trigger("play");
});
setInterval(updateContent, 30000);
