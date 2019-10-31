function Tags(element) {
  var arrayOfList = ['Article', 'Blog', 'Page', 'Post'];
  var DOMParent = document.querySelector(element);
  var DOMList;
  var DOMInput;

  function DOMCreate() {
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    var input = document.createElement('input');
    DOMParent.appendChild(ul);
    DOMParent.appendChild(input);
    DOMList = DOMParent.firstElementChild;
    DOMInput = DOMParent.lastElementChild;
  }

  function DOMRender() {
    // clear the entire <li> inside <ul> 
    DOMList.innerHTML = ''; // render each <li> to <ul>

    arrayOfList.forEach(function (currentValue, index) {
      var li = document.createElement('li');
      li.innerHTML = "".concat(currentValue, " <a href='#'>&times;</a>");
      li.querySelector('a').addEventListener('click', function () {
        if (confirm('Continue to remove tag?')) {
          onDelete(index);
        }

        return false;
      });
      DOMList.appendChild(li);
    });
  }

  function onKeyUp() {
    DOMInput.addEventListener('keyup', function (event) {
      var text = this.value.trim(); // check if ',' or 'enter' key was press

      if (text.includes(',') || event.keyCode == 13) {
        // check if empty text when ',' is remove
        if (text.replace(',', '') != '') {
          // push to array and remove ','
          arrayOfList.push(text.replace(',', ''));
        } // clear input


        this.value = '';
      }

      DOMRender();
    });
  }

  function onDelete(id) {
    arrayOfList = arrayOfList.filter(function (currentValue, index) {
      if (index == id) {
        return false;
      }

      return currentValue;
    });
    DOMRender();
  }

  DOMCreate();
  DOMRender();
  onKeyUp();
}