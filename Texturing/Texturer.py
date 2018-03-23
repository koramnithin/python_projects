import tempfile
from flask import send_file
import numpy
from PIL import Image
from DataProvider.MongoProvider import MongoProvider

client=MongoProvider('localhost:27017')
db=client.set_db_name('texture_database')
def renderImage(image1,image2):
#    pix1=image1.load()
#    pix2=image2.load()
    pix1= numpy.asarray(image1)
    pix2= numpy.asarray(image2)
    i2x = image2.size[0]
    i2y = image2.size[1]
    print pix1
    for x1 in range(image1.size[0]):
        for y1 in range(image1.size[1]):
            r1 = pix1[x1,y1][0]
            g1 = pix1[x1,y1][1]
            b1 = pix1[x1,y1][2]
            a1 = pix1[x1,y1][3]
            if a1==0:
                continue
            r2 = pix2[x1%i2x,y1%i2y][0]
            g2 = pix2[x1%i2x,y1%i2y][1]
            b2 = pix2[x1%i2x,y1%i2y][2]
            r1=(int)((r2/255.0)*r1)
            g1=(int)((g2/255.0)*g1)
            b1=(int)((b2/255.0)*b1)
            pix1[x1,y1] = (r1,g1,b1,a1)
    return image1

def TextureTest(image1,image2):
    pix1=numpy.asarray(image1)
    pix2=numpy.asarray(image2)
    bw = image1.size[0]
    bh = image1.size[1]
    tw = image2.size[0]
    th = image2.size[1]
    pix2=numpy.tile(pix2,(bw/tw,bh/th,1))
    print pix2
#    pix2=pix2/255.0*pix1
    image3 = Image.fromarray(pix2)
    image3.save('repeated.png','PNG')

def rendImage(image1,image2,angle=None):
    try:
#        if angle:
#            image2 = image2.rotate(360-angle)
#            image2.save('temp.png','PNG')
        pix1=numpy.array(image1)
        pix2=numpy.array(image2)
        if(pix2.shape[2] != 4):
            pix2=numpy.insert(pix2,3,255,2)
    #    print pix2
        bw = image1.size[0]
        bh = image1.size[1]
        tw = image2.size[0]
        th = image2.size[1]
        if angle is None or angle == 0 or angle ==360:
            pix2=numpy.tile(pix2,(bh/th,bw/tw,1))
        else:
            pix2=numpy.tile(pix2,(15,15,1))
            imagetemp=Image.fromarray(pix2)
    #        imagetemp.save('tempTile1.png','PNG')
            imagetemp=imagetemp.rotate(angle)
    #        imagetemp.save('tempTile.png','PNG')
            w=imagetemp.size[0]
            h=imagetemp.size[1]
            box=(w/4,h/4,w/4+400,h/4+900)
            image2=imagetemp.crop(box)
            image2.save('tempTile1.png','PNG')
            pix2=numpy.array(image2)
        pix1=pix1*(pix2/255.0)
        pix1=pix1.astype(numpy.int,copy=False)
    #    print pix1
        image3 = Image.fromarray(numpy.uint8(pix1))
#        image3 = image3.rotate(angle)
    #    image3 = Image.fromarray(pix1,'RGBA')
    #    pixOP=numpy.array(image3)
    #    print pixOP
        return image3
    except Exception as e:
        print str(e)

def mergeImages(tuples):
    output = None
    i=1
    for pair in tuples:
        base = pair[0]
        texture = pair[1]
        angle=45
        merged = rendImage(base,texture)
        i+=1
        if output:
            output = Image.alpha_composite(output,merged)
        else:
            output = merged
    output.save('output.png','PNG')
    return send_file('output.png', mimetype='image/png')

def returnFile(image):
    tfile = tempfile.TemporaryFile(mode='w+b',suffix='png')
    image.save(tfile,'PNG')
    return send_file(tfile, mimetype='image/png')

#renderImage('sofa_top.png','744.jpg','x.png')
#foreground = renderImage(Image.open('static/sofa_bottom.png'),Image.open('static/74.png'))
#background = renderImage(Image.open('static/sofa_top.png'),Image.open('static/744.jpg'))
#foreground = Image.open("x1.png")
#blank_image = Image.new("RGB", (800, 600))
#blank_image.paste(foreground,(0,0))
#blank_image.paste(background,(0,0))
#blank_image.show()

#tuples = []
#tuples.append((Image.open('static/yellow.png'),Image.open('static/green.png')))
#tuples.append((Image.open('static/sofa_top.png'),Image.open('static/744.jpg')))
#    tuples.append((Image.open('sofa_bottom.png'),Image.open('744.png')))
#mergeImages(tuples)

#background = Image.alpha_composite(background,foreground)
#background.save('x3.png')

#foreground = Image.open("colors/8.png")
#background = Image.open("colors/1.png")
#TextureTest(background,foreground)
#rendImage(foreground,background)