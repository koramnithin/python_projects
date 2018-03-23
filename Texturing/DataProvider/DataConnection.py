__author__ = 'Abhinav'


class DataStore:
    def __init__(self, mongo_connection):
        self.provider = mongo_connection
        self.provider.set_db_name("texturing")

    def storeNewMergedImage(self,file1,file2,filename):
        doc = {
            'file1' :file1,
            'file2' :file2,
            'filename': filename
        }
        recId = self.provider.insert('Files', doc)
        print "Inserted file record  %s" % recId

    def getFileName(self,file1,file2):
        keys = {
            'file1' : file1,
            'file2':file2
        }
        rec = self.provider.get_one('Files', keys)
        if rec:
            return rec['filename']
        else:
            return None