// ��һ�δ�����ʵ�ǿ����������ʣ��ʾ���CV�󷨺�
function copyToClip(content, message) {
  var aux = document.createElement("input");
  aux.setAttribute("value", content);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  if (message == null) {
    alert("���������Ѹ��Ƶ�ճ����");
  } else {
    alert(message);
  }
}

// �������ǹ��ڸ�������Ļ�������Ĵ��룬�ոտ�ʼȷʵ��û�뵽��ôд��if����������̫�����ˣ�˼ά��ʽ�ˣ��о����ǵö�����
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

