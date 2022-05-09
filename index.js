const db = firebase.firestore();



function AddData() {
    var inputData = document.getElementById("_input").value;
    db.collection("post").add({
        inputValue: inputData
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
}

const getDatachange=()=>{
var target = document.getElementById("order_list")
db.collection("post").get().then((snapshot)=>{
    snapshot.forEach((doc) => {
        var data = doc.data();
        console.log(doc.id);

        var li = document.createElement("li")
        var span = document.createElement("span")
        li.setAttribute("id", data.inputValue);
        span.innerHTML = data.inputValue
        span.setAttribute("class","_span")


        var editbtn = document.createElement("button")
        editbtn.setAttribute("onclick","editFunc(this)")
        editbtn.innerHTML = "Edit"
    
        editbtn.setAttribute("id",doc.id)

        var detbtn = document.createElement("button")
     detbtn.setAttribute("onclick","deltFunc(this)")
        detbtn.setAttribute("id",doc.id)
        detbtn.innerHTML = "Delete"




        target.appendChild(li)
        li.appendChild(span)
        li.appendChild(editbtn)
        li.appendChild(detbtn)
    })
})
}
function editFunc(e) {
    var promt = prompt("update here...");
    db.collection("post").doc(e.id).update({inputValue: promt})
    .then(() => {
        console.log("Document successfully updated!");
    });
    }
    
    
    function deltFunc(e) {
        db.collection("post").doc(e.id).delete().then(() => {
            console.log("Document successfully deleted");
        }).catch((error) => {
            console.error("Error removing document ", error);
        });
        
    }
















// const uploadimg =(e)=>{
// var selectImg = e.files[0]
// console.log(selectImg)


// var uploadTask =
//  firebase
//  .storage()
//  .ref()
//  .child("PrifilePic/"+selectImg.name)
//  .put(selectImg)

 
//  uploadTask.on(
//      "state_changed",
// (resp)=>{
//     var progress = (resp.bytesTransferred / resp.totalBytes) * 100;
//     document.getElementById("file").value=progress
//     document.getElementById("percentage").innerHTML=progress.toFixed(0)+"%"
// },
// (err)=>{
//     console.log(err)
// },
// () => { uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//     console.log('File available at', downloadURL);
//   });
 
// })

// }