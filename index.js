const uploadimg =(e)=>{
var selectImg = e.files[0]
console.log(selectImg)


var uploadTask =
 firebase
 .storage()
 .ref()
 .child("PrifilePic/"+selectImg.name)
 .put(selectImg)

 
 uploadTask.on(
     "state_changed",
(resp)=>{
    var progress = (resp.bytesTransferred / resp.totalBytes) * 100;
    document.getElementById("file").value=progress
    document.getElementById("percentage").innerHTML=progress.toFixed(0)+"%"
},
(err)=>{
    console.log(err)
},
() => { uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
    console.log('File available at', downloadURL);
  });
 
})

}