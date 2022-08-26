//フッターの共通化
  fetch("footer.html")//フッターのファイル名を入れる
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("footer").innerHTML = data;
  }); //index.htmlの<footer>部分に読み込む
