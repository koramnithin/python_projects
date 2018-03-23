from PIL import Image
from DataProvider import DataConnection
from flask.ext.settings import MONGO_CONNECTION_STRING

__author__ = 'nithin'
import requests,json
from DataProvider.MongoProvider import MongoProvider
from flask import Flask,request, make_response, render_template
import Texturer

app=Flask("Wsqi")
mongo_connection = MongoProvider(MONGO_CONNECTION_STRING)
store = DataConnection.DataStore(mongo_connection)

@app.route('/multimerge',methods=['GET'])
def multiMerge():
    tuples = []
    tuples.append((Image.open('images/shoe7.png'),Image.open('images/744.jpg')))
    tuples.append((Image.open('images/shoe2.png'),Image.open('images/colors2.png')))
    tuples.append((Image.open('images/shoe3.png'),Image.open('images/colors3.png')))
    tuples.append((Image.open('images/shoe4.png'),Image.open('images/colors4.png')))
    tuples.append((Image.open('images/shoe5.png'),Image.open('images/colors5.png')))
    tuples.append((Image.open('images/shoe6.png'),Image.open('images/colors7.png')))
    tuples.append((Image.open('images/shoe1.png'),Image.open('images/colors6.png')))
    return Texturer.mergeImages(tuples)

@app.route('/merge',methods=['GET'])
def merge(img1=None,img2=None):
    try:
        if (img1==None and img2==None):
            img1 = request.args.get("img1")
            img2 = request.args.get("img2")
        l = [img1,img2]
        l.sort()
        filename = ''.join(l)
        angle = getAngle(img1)
        img1 = Image.open('static/images/'+img1+".png")
        img2 = Image.open('static/images/'+img2+".png")
        image = Texturer.rendImage(img1,img2,angle)
        image.save("static/images/"+filename+".png",'PNG')
        return filename
    except Exception as e:
        print str(e)

def getAngle(filename):
    angle = 0
    if filename == 'shirt7':
        angle = 13
    if filename == 'shirt8':
        angle = 310
    if filename == 'shirt9' or filename == 'shirt10':
        angle = 45
    if filename == 'shirt6':
        angle = 340
    if filename == 'shirt5':
        angle = 15
    return angle

@app.route('/getSources',methods=['GET'])
def getSources():
    img1 = request.args.get("img1")
    img2 = request.args.get("img2")
    filename = store.getFileName(img1,img2)
    if filename:
        return filename
    else:
        filename = merge(img1,img2)
        store.storeNewMergedImage(img1,img2,filename)
        return filename


@app.route('/',methods=['GET'])
def page1():
    return render_template('index.html')

if __name__ == "__main__":
    app.run(host="localhost",port=8082,debug=True)