function start() {
    
    navigator.mediaDevices.getUserMedia({audio:true});
classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/hd778nzgf/model.json',modelReady);

}

function modelReady() {
    console.log("model is ready");
    classifier.classify(gotresult);
    
}

function gotresult(error,results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results)

        random_number_r= Math.floor(Math.random()*255)+1;
        random_number_g= Math.floor(Math.random()*255)+1;
        random_number_b= Math.floor(Math.random()*255)+1;

        document.getElementById("hear").innerHTML= "I can hear : " + results[0].label;
        document.getElementById("acc").innerHTML= "Accuracy : " + (results[0].confidence*100).toFixed(2) + "%";
        document.getElementById("hear").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("acc").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img_1 = document.getElementById("alien_1");
        img_2 = document.getElementById("alien_2");
        img_3 = document.getElementById("alien_3");
        img_4 = document.getElementById("alien_4");

        if(results[0].label=="Clap") {
        img_1.src = "aliens-01.gif"
        img_2.src = "aliens-02.png"
        img_3.src = "aliens-03.png"
        img_4.src = "aliens-04.png"
        }
       else if(results[0].label=="Snap") {
            img_1.src = "aliens-01.png"
            img_2.src = "aliens-02.gif"
            img_3.src = "aliens-03.png"
            img_4.src = "aliens-04.png"
            }
            else if(results[0].label=="bell") {
                img_1.src = "aliens-01.png"
                img_2.src = "aliens-02.png"
                img_3.src = "aliens-03.gif"
                img_4.src = "aliens-04.png"
                }
                else {
                    img_1.src = "aliens-01.png"
                img_2.src = "aliens-02.png"
                img_3.src = "aliens-03.png"
                img_4.src = "aliens-04.gif"
            }
                    
                    }
    }




