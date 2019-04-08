<!DOCTYPE html>
<html lang="en">

<head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>To-Do</title>

      <!-- CSS link for page layout -->
      <link rel="stylesheet" href="css/page.css">

      <!-- CSS link for header -->
      <link rel="stylesheet" href="css/header.css">

      <!-- CSS link for Side navigation -->
      <link rel="stylesheet" href="css/sidenav.css">

      <!-- CSS link for task Layout -->
      <link rel="stylesheet" href="css/taskcontainer.css">

      <!-- CSS link for task manager -->
      <link rel="stylesheet" href="css/taskmanager.css">

      <!-- CSS link for task menu -->
      <link rel="stylesheet" href="css/taskmenu.css">

      <!-- CSS link for media query header -->
      <link rel="stylesheet" href="css/headermq.css">

      <!-- CSS link for media query Sidenav -->
      <link rel="stylesheet" href="css/sidenavmq.css">

      <!-- CSS link for media query task Layout -->
      <link rel="stylesheet" href="css/taskcontainermq.css">

      <!-- CSS for scrollbar -->
      <link rel="stylesheet" href="css/scroll.css">

      <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-auth.js"></script>
      <script src="https://www.gstatic.com/firebasejs/5.9.2/firebase-database.js"></script>
      <script src="js/database.js"></script>
      <!-- <script>
            // Initialize Firebase
            var config = {
            apiKey: "AIzaSyAs7J4hlBXsgyfDB--BqVYzHj9fjQYWls8",
            authDomain: "to-do-dba8b.firebaseapp.com",
            databaseURL: "https://to-do-dba8b.firebaseio.com",
            projectId: "to-do-dba8b",
            storageBucket: "to-do-dba8b.appspot.com",
            messagingSenderId: "364465222352"
            };
            firebase.initializeApp(config);
      </script> -->


</head>

<body>
      <div class="grid-layout-page" id="pagelayout">
            <div class="sidenav" id="sidenavigation">
                  <h2>TO DO</h2>
                  <div class="task-group-container" id="taskgroupcont">
                        <a href="tasks.html">
                              <img src="images/check-solid.svg" alt="">
                              <h4>Tasks</h4>
                        </a>
                        <a href="important.html" class="task-group-active" onclick="selectDBRef('Important')">
                              <img src="images/star-regular.svg" alt="">
                              <h4>Important</h4>
                        </a>
                        <hr style="width: 90%;">
                  </div>
                  <div class="addnewtaskgroup" onclick="addnewtaskgroup()">
                        <img src="images/plus-solid-yellow.svg" alt="">
                        <h3>New List</h3>
                  </div>
            </div>
            <div class="header">
                  <button id="nav-drawer-button" onclick="opensidenav()"><img src="images/bars-solid-white.svg" alt=""></button>
                  <h1>Important</h1>
                  <div class="theme-container" style="display: none;">
                        <button class="headerbutton" onclick="openmenufortheme()"><img src="images/palette-solid.svg"
                                    alt=""></button>
                        <ul class="themes" id="thememenu">
                              <li>Light Theme</li>
                              <li>Dark Theme</li>
                        </ul>
                  </div>
                  <button class="headerbutton" style="display: none;"><img src="images/th-large-solid.svg" alt=""></button>
                  <button id="logoutbut" onclick="logout()">Log Out</button>
            </div>
            <div class="task-layout">
                  <div class="boundinputfornewtask">
                        <div class="input-shadow">
                              <input type="text" id="inputfornewtask" placeholder="Enter Task">
                              <button class="buttonfornewtask" onclick="addTask()">Add</button>
                        </div>
                  </div>
                  <div class="task-container" id="taskcontainer">
                        <!-- For understanding dynamic structure made when new task is created -->
                        <!-- <div class="task" id="1" oncontextmenu="opencontextmenufortask(event)">
                              <button onclick="ontick(1)" class="tick">
                                    <img src="images/check-solid.svg" alt="">
                              </button>
                              <p class="textfortask"></p>
                              <img src="images/pen-solid.svg" class="editicon" onclick="opentaskmanager(1)" alt="">
                              <img src="images/star-regular-dark.svg" class="importanticon" alt="">
                              <img src="images/trash-solid.svg" class="deleteicon" onclick="removetask(1)" alt="">
                        </div> -->
                        <ul class="menu-task" id="menutask">
                              <li>Hello</li>
                              <li><img src="images/star-regular-white.svg" alt="" class="icon-specific">
                                    <p>Mark as Important</p>
                              </li>
                              <hr>
                              <li onclick="removetask()"><img src="images/trash-solid-white.svg" alt=""
                                          class="icon-specific">
                                    <p>Delete Task</p>
                              </li>
                        </ul>
                  </div>
            </div>
      </div>

      <div class="task-manager" id="taskmanager">
            <div class="task-display">
                  <button class="tick-manager" id="tickmanager" onclick="ontickinsidemanager()">
                        <img src="images/check-solid-white.svg" alt="">
                  </button>
                  <!-- <input type="text" id="task-text"> -->
                  <textarea name="" cols="30" rows="2" id="task-text"></textarea>
            </div>
            <button onclick="closetaskmanager()" id="closetaskmanagerbutton"><img src="images/arrow-right-solid.svg"
                        alt="Close"></button>
      </div>

      <script src="js/header.js"></script>
      <script src="js/sidenav.js"></script>
      <script src="js/taskgroupcontainer.js"></script>
      <script>
            let user;
            let root;
            let rootdbref;
            let obtainnooftasks;
            firebase.auth().onAuthStateChanged(User => {
                  if(User) {
                        console.log(User.uid);
                        user = firebase.auth().currentUser;
                        root = firebase.database().ref('users/' + user.uid);
                        rootdbref = root.child('Tasks');
                        obtainnooftasks = rootdbref.child('nooftasks');
                        getImportantTasks();
                  }
                  else {
                        console.log("Not Signed In");
                        window.location = "home.html";
                  }
            })
            //let root = firebase.database().ref('users/' + user.uid);
            //let rootdbref = root.child('Tasks')
            //let obtainnooftasks = rootdbref.child('nooftasks');
            //selectDBRef('Tasks');
            function logout() {
                  firebase.auth().signOut();
                  window.location = "home.html";
            }
            //let root = firebase.database().ref();
            //let rootdbref = root.child('Tasks');
            /*function selectDBRef(value) {
                  rootdbref = root.child(value);
                  console.log(value);
            }
            selectDBRef('Important');*/
      </script>
      <script src="js/addtask.js"></script>
      <script src="js/important.js"></script>
      <script src="js/taskmanager.js"></script>
</body>

</html>
