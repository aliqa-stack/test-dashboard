package main

import (
	"log"
	"os"
	"context"
	"time"
	"fmt"
	model "dashboard/Models"
	"github.com/gofiber/fiber/v3"
	"github.com/gofiber/fiber/v3/middleware/encryptcookie"
	"strings"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	"github.com/joho/godotenv"
)


//streakk oiii lengit
//adding get and delete endpoint

type RegisterRequest struct{
  Email string  `json:"email" bson:"email"`
  Username string `json:"username" bson:"username"`
  Password string `json:"-" bson:"password"`
  SessionToken string `json:"sessiontoken" bson:"sessiontoken"` 

}

var UserAuth *mongo.Collection

func ConnectDb(){
	err :=  godotenv.Load()
	if err != nil {
		log.Fatal("error opening env files")
	}
	
	MONGGO_URI := os.Getenv("MONGODB_URI")
	opts := options.Client().ApplyURI(MONGGO_URI)
	clients, err := mongo.Connect(opts)
	if err != nil {
		panic(err)
	}
	 
	UserAuth = clients.Database("dashboard").Collection("User")
	model.ProductSection = clients.Database("dashboard").Collection("Product")
}

func main(){
	ConnectDb()
	app := fiber.New()
	//fmt.Println(encryptcookie.GenerateKey(32))

	//adding cookie 
    app.Use(encryptcookie.New(encryptcookie.Config{
		Key: os.Getenv("COOKIE_KEY"),
    }))

	app.Post("/auth", AuthUser)
	app.Post("/comAuth", AuthComp)
	app.Post("/product", Productsec)
		app.Get("/product", GetAllProducts)
	app.Delete("/product/:id", Deleteproduct)


	log.Fatal(app.Listen(":3000"))
}

func AuthUser(c fiber.Ctx) error {
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	User := new(RegisterRequest)

	if err := c.Bind().Body(User); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "couldn't parse request body"})
	}

	if strings.TrimSpace(User.Email) == "" || strings.TrimSpace(User.Username) == "" || strings.TrimSpace(User.Password) == "" {
		return c.Status(400).JSON(fiber.Map{"error": "email, username, and password are required"})
	} 

	hash, _ := hashed(User.Password)

	Newuser := RegisterRequest{
		Email: User.Email,
		Username: User.Username,
		Password: hash,
    }

	if len(Newuser.Username) < 8 || len(Newuser.Password) < 8 {
		return c.Status(400).JSON(fiber.Map{"error" : "username or password to short"})
	}


	_, err := UserAuth.InsertOne(ctx, Newuser)

	if err != nil {
		return c.Status(503).JSON(fiber.Map{"error": "couldn't save user"})
	}
	 
	return c.JSON(Newuser)
	//return c.SendString("hello from backend")
}

func AuthComp(c fiber.Ctx) error{
	ctx, cancel :=  context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	User := new(RegisterRequest)

	if err := c.Bind().Body(User); err != nil {
		return c.Status(400).JSON(fiber.Map{"erorr" : "user undentified"})
	}
   
	if strings.TrimSpace(User.Email) == "" || strings.TrimSpace(User.Username) == "" || strings.TrimSpace(User.Password) == "" {
		return c.Status(401).JSON(fiber.Map{"error" : "couldnt find the user", "data" : nil})
	}



	var Storeduser RegisterRequest
	err := UserAuth.FindOne(ctx, bson.M{"email" : User.Email, "username" : User.Username}).Decode(&Storeduser)
	if err != nil || !authHash(User.Password, Storeduser.Password) {
		return c.Status(401).JSON(fiber.Map{"error" : "no user in db"})
	}


	sessionToken := generateToken(32)

	c.Cookie(&fiber.Cookie{
		Name:"sessiontoken",
		Value: sessionToken,
		Expires : time.Now().Add(24 * time.Hour),
		HTTPOnly : true,
		Secure: true,
		SameSite : "lex",
	})


	 _, err = UserAuth.UpdateOne(ctx, bson.M{"email" : Storeduser.Email}, bson.M{"$set" : bson.M{"sessiontoken" : sessionToken}})
	 if err != nil {
		return c.Status(401).JSON(fiber.Map{"error" : "session error"})
	 }

	
	return c.Status(200).JSON(fiber.Map{"message" : "User login"})

}

func Productsec(c fiber.Ctx) error {
	ctx, cancel :=  context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	items := new(model.Product)

	

	if Producterr := c.Bind().Body(items); Producterr != nil {
		  fmt.Println("BIND ERROR:", Producterr)
		return c.Status(401).JSON(fiber.Map{"error" : Producterr.Error()})
	}

	if items.Harga <= 0 {
		return c.Status(400).JSON(fiber.Map{"error": "harga must be greater than zero"})
	}
		if strings.TrimSpace(items.Barang) == "" || strings.TrimSpace(items.Brand) == "" || strings.TrimSpace(items.Deskripsi) == "" {
		return c.Status(401).JSON(fiber.Map{"error" : "the list cannot be empty"})
	}
	Newitems := model.Product{
		ID : bson.NewObjectID(),
		Barang : items.Barang,
		Brand : items.Brand,
		Harga : items.Harga,
		Deskripsi : items.Deskripsi,
	}
	_, err := model.ProductSection.InsertOne(ctx, Newitems)
	if err != nil {
		return c.Status(401).JSON(fiber.Map{"error" : "failed adding items"})
	}

	return c.Status(200).JSON(Newitems)

}



func GetAllProducts(c fiber.Ctx) error {
	ctx, cancel :=  context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()

	var items []model.Product
	cursor, err := model.ProductSection.Find(ctx, bson.M{})
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error" : "couldn't find products"})
	}
	defer cursor.Close(ctx)
	
	if err:= cursor.All(ctx, &items); err != nil {
		fmt.Println("CURSOR ERROR:", err)
		return c.Status(404).JSON(fiber.Map{"error" : "couldn't fetch products"})
	}
	return c.Status(200).JSON(items)
}

func Deleteproduct(c fiber.Ctx) error {
	ctx, cancel :=  context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	id, _ := bson.ObjectIDFromHex(c.Params("id"))
	_, err := model.ProductSection.DeleteOne(ctx, bson.M{"_id" : id})
	if err != nil {
		return c.Status(404).JSON(fiber.Map{"error" : "couldn't find object"})
	}

	return c.Status(200).JSON(fiber.Map{"message" : "object deleted"})
 
}