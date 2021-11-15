function ImageCompare(){

    var ImageA = document.querySelector("#myform img");
    var isEqual;

    for(var i=1;i<5;i++){
        var ImageB = document.querySelector("#myform > table > tbody > tr > td > img:nth-child(" + i + ")");
        var diff0 = imagediff.diff(ImageA, ImageB);
        var canvas0 = imagediff.createCanvas(diff0.width, diff0.height);
        var context0 = canvas0.getContext('2d');
        context0.putImageData(diff0, 0, 0);

        if( isEqual = imagediff.equal(ImageA, ImageB , 200)){
            console.log(isEqual);
            console.log(i);
            ImageB.click();
        }
    }
}