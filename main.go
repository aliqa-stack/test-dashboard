package main

import (
	_"fmt"
	"log"
	"os"
	"context"
	"time"
	"dashboard/Models"
	"github.com/gofiber/fiber/v3"
	"strings"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/bson"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	"github.com/joho/godotenv"
)


//streakk oiii lengit
type RegisterRequest struct{
  Email string  `json:"email" bson:"email"`
  Username string `json:"username" bson:"username"`
  Password string `json:"-" bson:"password"`

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
	ProductSection = clients.Database("dashboard").Collection("Product")
}

func main(){
	ConnectDb()
	app := fiber.New()

	app.Post("/auth", AuthUser)
	app.Post("/comAuth", AuthComp)
	app.Post("/product", Productsec)
	app.Get("/product/:id", Getproduct)


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

	
	return c.Status(200).JSON(fiber.Map{"message" : "User login"})

}

func Productsec(c fiber.ctx) error {
	ctx, cancel :=  context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	items := new(Product)

	if err := c.Bind().Body(item); err != nil {
		return c.Status(401).JSON(fiber.Map{"error" : "could'nt parse body"})
	}

	if strings.TrimSpace(item.Barang) == "" || strings.TrimSpace(item.Brand) == "" || strings.TrimSpace(item.Harga) == ""{
		return c.Status(401).JSON(fiber.Map{"error" : "the list cannot be empty"})
	}

	_, err := Productsection.InsertOne(ctx, items)

	return c.Status(200).JSON(items)

}