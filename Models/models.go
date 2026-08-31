package model 

import (
		"go.mongodb.org/mongo-driver/v2/bson"
		"go.mongodb.org/mongo-driver/v2/mongo"
)

type Product struct {
	ID bson.ObjectID `bson:"_id,omitempty" json:"id,omitempty"`
	Barang string `json:"barang" bson:"barang"`
	Brand string `json:"brand" bson:"brand"`
	Harga int `json:"harga" bson:"harga"`
	Deskripsi string `json:"deskripsi" bson:"deskripsi"`
}

var ProductSection *mongo.Collection