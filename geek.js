// 这一段代码属实是看不懂，别问，问就是CV大法好
function copyToClip(content, message) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  if (message == null) {
    alert("邮箱内容已复制到粘贴板");
  } else {
    alert(message);
  }
}

// 下面这是关于更多问题的互动方面的代码，刚刚开始确实是没想到这么写，if语句里的条件太离谱了，思维定式了，感觉还是得多想想
var LU = document.querySelector("#lu");
    var lu = LU.children;
    var flag = 0;
    for (var i = 0; i < lu.length; i++) {
      lu[i].onclick = function () {
        if (this.children[1].style.display == "none") {
          this.children[1].style.display = "block";
        } else {
          this.children[1].style.display = "none";
        }
      }
    }

