    class SimpleTags {
        apply(){
            let DOMSimpleTags = document.querySelectorAll('.simple-tags');
            DOMSimpleTags = Array.from(DOMSimpleTags);
            DOMSimpleTags.forEach((currentValue) => {
                // create Tags
                this.init(currentValue);
            });
        }
        init(element) {
            this.DOMParent = element;
            this.DOMList;
            this.DOMInput;
            this.dataAttribute;
            this.arrayOfList;
            this.getAttribute();
            this.DOMCreate();
            this.DOMRender();
            this.onKeyUp();
        }

        DOMCreate() {
            let ul = document.createElement('ul');
            let input = document.createElement('input');
            this.DOMParent.appendChild(ul);
            this.DOMParent.appendChild(input);
        
            this.DOMList = this.DOMParent.firstElementChild;
        
            this.DOMInput = this.DOMParent.lastElementChild;
          }

          DOMRender() {
            // clear the entire <li> inside <ul> 
            this.DOMList.innerHTML = ''; // render each <li> to <ul>
            this.arrayOfList.forEach((currentValue, index) => {
                if(currentValue) {
                  let li = document.createElement('li');
                  li.innerHTML = "".concat(currentValue, " <a style=cursor:pointer>&times;</a>");
                  li.querySelector('a').addEventListener('click',  () => {
                      this.onDelete(index);
            
                    return false;
                  });
                  this.DOMList.appendChild(li);
                //   this.setAttribute();
                }
            });
            this.setAttribute();
        }

        onKeyUp() {
            let _this = this;
            this.DOMInput.addEventListener('keyup', function (event) {
                
                if(event.keyCode == 8 && !this.value && _this.DOMList.children.length) {
                    let lastText = _this.DOMList.lastElementChild.firstChild.data.trim();
                    _this.DOMList.lastElementChild.remove()
                    _this.arrayOfList.pop();
                    _this.DOMInput.value = lastText;
                }
                let text = this.value.trim(); // check if ',' or 'enter' 'space' key was press
        
                if (text.includes(',') || event.keyCode == 13 || event.keyCode == 32) {
                    // check if empty text when ',' is remove
                    if (text.replace(',', '') != '') {
                        // push to array and remove ','
                        _this.arrayOfList.push(text.replace(',', ''));
                    } // clear input
        
        
                    this.value = '';
                }
        
                _this.DOMRender();
            });
        }

        onDelete(id) {
            this.arrayOfList = this.arrayOfList.filter((currentValue, index) => {
                    if (index == id) {
                        return false;
                    }

                    return currentValue;
                });
            this.DOMRender();
          }

        getAttribute() {
            this.dataAttribute = this.DOMParent.getAttribute('data-simple-tags');
            this.dataAttribute = this.dataAttribute ? this.dataAttribute.split(',') : []; // store array of data attribute in arrayOfList
        
            this.arrayOfList = this.dataAttribute.map((currentValue) => {
                return currentValue.trim();
            });
        }
        
        setAttribute() {
            this.DOMParent.setAttribute('data-simple-tags', this.arrayOfList.toString());
        }
        get tagList() {
            return this.arrayOfList;
        }
    }