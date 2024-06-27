
      let text = document.getElementById("text");
      let main = document.getElementById("main");
      let btn1 = document.getElementById("btn1");
      let x = [];

      // Load data from local storage on page load
      if (localStorage.getItem("items")) {
        x = JSON.parse(localStorage.getItem("items"));
        print();
      }

      function submit() {
        if (!text.value) alert("Enter some text");
        else if (btn1.innerText === "Conform") {
          x.map((data) => {
            if (data.id === y.id) {
              data.content = text.value;
            }
          });
          y = "";
          btn1.innerText = "submit";
          saveData(); // Save data to local storage
          print();
        } else {
          let obj = {
            id: Math.trunc(Math.random() * 1000),
            content: text.value,
          };
          x.push(obj);
          saveData(); // Save data to local storage
          print();
        }
        text.value = "";
      }

      function print() {
        let ele = "";
        x.map((data) => {
          return (ele =
            ele +
            `<div class="format">
              <p id="${data.id}">${data.content}</p>
              <button id='edit' onclick="edit(${data.id})">edit</button>
              <button id='del' onclick="del(${data.id})">del</button><br>
            </div>`);
        });
        main.innerHTML = ele;
      }

      function del(z) {
        x = x.filter((data) => {
          if (data.id !== z) return data;
        });
        saveData(); // Save data to local storage
        print();
      }

      let edit = (z) => {
        y = x.find((data) => {
          if (data.id === z) return data;
        });
        text.value = y.content;
        btn1.innerText = "Conform";
      };

      let clear1 = () => {
        x = [];
        saveData(); // Save data to local storage
        print();
      };

      // Function to save data to local storage
      function saveData() {
        localStorage.setItem("items", JSON.stringify(x));
      }
    