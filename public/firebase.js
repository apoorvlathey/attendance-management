(function(){
  
  
  
  const firebaseConfig = {
  apiKey: "AIzaSyBSm1OPvV598lAWuV_zsAS8z8K7TExOG8s",
  authDomain: "tt12-1a10d.firebaseapp.com",
  databaseURL: "https://tt12-1a10d.firebaseio.com",
  projectId: "tt12-1a10d",
  storageBucket: "",
  messagingSenderId: "453711170013",
  appId: "1:453711170013:web:6faf808a3f6f6d03"
};
 
 firebase.initializeApp(firebaseConfig);
  
  // get elelments
  const preObject = document.getElementById('object');
  const ulList = document.getElemnetById('list');
  
  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = firebase.dbRefObject.child('hobbies');
  
  
  dbRefObject.on('value',snap=>{
    preObject.innerText = JSON.stringify(snap.val(),null,3);
  });
   
  dbRefList.on('child_added',snap =>{
    
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    ulList = 
  
}());