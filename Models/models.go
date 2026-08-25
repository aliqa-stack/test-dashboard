package model 

import (
		"go.mongodb.org/mongo-driver/v2/bson/primitive"
)

type Product struct {
	ID primitive.ObjectID `bson:"_id, omiempty" json:"id"`
	Barang string `json:"barang" bson:"barang"`
	Brand string `json:"brand" bson:"brand"`
	Harga int `json:"harga" bson:"harga"`
	Deskripsi int `json:"deskripsi" bson:"deskripsi"`
}

var ProductSection *mongo.Collection