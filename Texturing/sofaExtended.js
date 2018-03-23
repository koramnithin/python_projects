/**
 * Created with PyCharm.
 * User: nithin
 * Date: 27/02/14
 * Time: 12:23
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function(){
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');
    i=0;
    var texture1=new Image();
    texture1.src = "../static/images/74.jpg";
    var sofa_top = new Image();
    sofa_top.src = "../static/images/sofa_top.png";
    var pix1,pix2;
    mergeImages(texture1,sofa_top,function(pixels1){
        pix1 = pixels1;
//        paint()
        context.putImageData(pix1,0,0);
    });
    //--------------------------------------------------
    var texture2=new Image();
    texture2.src = "../static/images/744.jpg";

    var sofa_bottom = new Image();
    sofa_bottom.src = "../static/images/sofa_bottom.png";

    mergeImages(texture2,sofa_bottom,function(pixels2){
        pix2 = pixels2;
//        paint()
        context.putImageData(pix2,0,100);
    });

    function paint()
    {
        if(pix1 && pix2)
        {
//            var i1 = new Image();
//            i1.src=pix1;
//            i1.onload=function(){
//                context.drawImage(i1,0,0);
//            };
//            var i2 = new Image();
//            i2.src=pix2;
//            i2.onload=function(){
//                context.drawImage(i2,0,0);
//            };
//            context.putImageData(pix1,0,0);
//            context.putImageData(pix2,0,0);
//            drawOnCanvas(pix1);
//            drawOnCanvas(pix2);
        }
    }

});


function mergeImages(image1,image2,callback)
{

    var pixels1=null,pixels2=null;
    image1.onload=function(){
        var ptrn1 = context.createPattern(image1, 'repeat');
        context.fillStyle = ptrn1;
        context.fillRect(0,0,canvas.width,canvas.height);
        pixels1 = context.getImageData(0,0, canvas.width,canvas.height);
        context.clearRect(0, 0, canvas.width, canvas.height);
        var mergedPix = merge(pixels1,pixels2);
        if(mergedPix)
            callback(mergedPix);
    };
    image2.onload = function() {
        imageWidth = image2.width;
        imageHeight = image2.height;
        context.drawImage(this,0,0);
        pixels2 = context.getImageData(0,0, imageWidth, imageHeight);
        context.clearRect(0,0,canvas.width,canvas.height);
        var mergedPix = merge(pixels1,pixels2);
        if(mergedPix)
            callback(mergedPix);
    };
}

function merge(pixels1,pixels2)
{
    if(pixels2&&pixels1)
    {
        for(var y=0;y<imageHeight*4;y+=4)
        {
            for(var x=0;x<imageWidth*4;x+=4)
            {
                var red=pixels2.data[((imageWidth * y) + x)];
                var green=pixels2.data[((imageWidth * y) + x)+1];
                var blue=pixels2.data[((imageWidth * y) + x)+2];
                var alpha=pixels2.data[((imageWidth * y) +x)+3];

                if(alpha==255 && i==0) alpha = 254;
                else if(i==100 && alpha == 254)
                {
                    red= (pixels1.data[(((canvas.width)*y)+x)]/255)*red;
                    green= (pixels1.data[(((canvas.width)*y)+x)+1]/255)*green;
                    blue= (pixels1.data[(((canvas.width)*y)+x)+2]/255)*blue;

                    alpha=(pixels1.data[(((canvas.width)*y)+x)+3]/255)*alpha;
                }
                else{
                red= (pixels1.data[(((canvas.width)*y)+x)]/255)*red;
                green= (pixels1.data[(((canvas.width)*y)+x)+1]/255)*green;
                blue= (pixels1.data[(((canvas.width)*y)+x)+2]/255)*blue;

                alpha=(pixels1.data[(((canvas.width)*y)+x)+3]/255)*alpha;
                }

                pixels2.data[((imageWidth * y) + x)]=red;
                pixels2.data[((imageWidth * y) + x)+1]=green;
                pixels2.data[((imageWidth * y) + x)+2]=blue;
                pixels2.data[((imageWidth*y)+x)+3]=alpha;
            }
        }
        i=100;
        return pixels2;
    }
    else
        return null;
}



function drawOnCanvas(imageData)
{
    var tempCanvas = document.createElement('canvas');
    var tempContext = tempCanvas.getContext('2d');

    tempContext.drawImage(imagedata, 0, 0);

//modify here the imageData as you need

    var img = new Image();
    img.src = imageData;
    context.drawImage(img, 0, 0);
}