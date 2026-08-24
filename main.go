package main

import (
	_"fmt"
	"log"
	"os"
	"context"
	"time"
	"github.com/gofiber/fiber/v3"
	"strings"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
	"github.com/joho/godotenv"
)

type RegisterRequest struct{
  Email string  `json:"email" bson:"email"`
  Username string `json:"username" bson:"username"`
  Password string `json:"password" bson:"password"`

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
}

func main(){
	ConnectDb()
	app := fiber.New()
	//app.Get("/", UserInform)
	app.Post("/auth", AuthUser)
	app.Post("/comAuth", AuthComp)


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

	Newuser := RegisterRequest{
		Email: User.Email,
		Username: User.Username,
		Password: User.Password,
    }

	_, err := UserAuth.InsertOne(ctx, Newuser)

	if err != nil {
		return c.Status(503).JSON(fiber.Map{"error": "couldn't save user"})
	}
	 
	return c.JSON(Newuser)
	//return c.SendString("hello from backend")
}

func AuthComp(c fiber.Ctx) error{
	User := new(RegisterRequest)

	if err := c.Bind().Body(User); err != nil {
		return c.Status(400).JSON(fiber.Map{"erorr" : "user undentified"})
	}
   
	if strings.TrimSpace(User.Email) == "" || strings.TrimSpace(User.Username) == "" || strings.TrimSpace(User.Password) == "" {
		return c.Status(401).JSON(fiber.Map{"error" : "couldnt find the user", "data" : nil})
	}

	



	return c.JSON(fiber.Map{"message" : "User login"})

}