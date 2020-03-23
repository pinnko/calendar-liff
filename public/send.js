liff.init();
window.onload = function(e) {
  // sendにclickイベントを追加
  document.getElementById('send').addEventListener('click', function() {
    // messageの中身を取得し、sendMessagesのtextに入れる
    var name = document.getElementById('inputName').value;
    var tel = document.getElementById('inputTel').value;
    var start = document.getElementById('inputStart').value;
    var end = document.getElementById('inputEnd').value;
    const text = name + '\n' + tel + '\n' + start + '~' + end;
    liff
      .sendMessages([
        {
          type: 'text',
          text: text
        }
      ])
      .then(function() {
        window.alert('送信完了');
        // aleartでOKを押すと、自動でLIFFウィンドウが閉じる
        liff.closeWindow();
      })
      .catch(function(error) {
        window.alert('Error sending message: ' + error);
      });
  });
};