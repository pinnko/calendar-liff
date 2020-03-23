liff.init();
window.onload = function(e) {
  // sendにclickイベントを追加
  document.getElementById('send').addEventListener('click', function() {
    // messageの中身を取得し、sendMessagesのtextに入れる
    var name = document.getElementById('inputName').value;
    var tel = document.getElementById('inputTel').value;
    var start = document.getElementById('inputStart').value;
    var end = document.getElementById('inputEnd').value;
    var year = getParam('year');
    var month = getParam('month');
    var date = getParam('date');
    const text = '予約します。\n' + name + '\n' + tel + '\n' + year + '年' + month + '月' + '日\n' + start + '~' + end;
    liff
      .sendMessages([
        {
          type: 'text',
          text: text
        }
      ])
      .then(function() {
        // window.alert('送信完了');
        // aleartでOKを押すと、自動でLIFFウィンドウが閉じる
        liff.closeWindow();
      })
      .catch(function(error) {
        window.alert('Error sending message: ' + error);
      });
  });
};

function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}