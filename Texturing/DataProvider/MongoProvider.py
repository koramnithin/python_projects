__author__ = 'CloudGust-Laptop2'
from datetime import datetime
from pymongo import MongoClient
class MongoProvider:
    def __init__(self, connection_string):
        self.client = MongoClient(connection_string)

    def set_db_name(self, database_name):
        self.db = self.client[database_name]

    def insert(self, collection, document):
        document["isDeleted"] = False
        document["createdAt"] = datetime.utcnow()
        document["modifiedAt"] = datetime.utcnow()
        collection = self.db[collection]
        record = collection.insert(document)
        return record

    def update(self, collection, updated_record, key):
        collection = self.db[collection]
        updated_record["modifiedAt"] = datetime.utcnow()
        record = collection.update(key, {"$set": updated_record}, upsert=False)
        return record

    def delete(self, collection, keys):
        collection = self.db[collection]
        if not "isDeleted" in keys:
            keys["isDeleted"] = False
        return collection.update(keys, {"$set": {"isDeleted": True, "modifiedAt":datetime.utcnow()}}, upsert=False)

    def get_one(self, collection, keys):
        # print self.db
        keys["isDeleted"] = False
        collection = self.db[collection]
        return collection.find_one(keys)

    def get(self, collection, keys):
        keys["isDeleted"] = False
        collection = self.db[collection]
        return collection.find(keys)

    def get_global_id(self, collection, keys):
        keys["isDeleted"] = False
        collection = self.db[collection]
        return collection.find_and_modify(keys, {"$inc":{"value":1}}, upsert=True, new=True)

    def get_count_generic(self, collection, keys):
        collection = self.db[collection]
        return collection.find(keys).count()

    def pushListItem(self, collection,listName ,newListItem , keys):
        collection = self.db[collection]
        record = collection.update(keys, {"$push":{listName: newListItem}}, upsert=False)
        return record

    def close(self):
        return self.client.close()