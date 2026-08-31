package main

import(
	"crypto/rand"
	"encoding/base64"
	"golang.org/x/crypto/bcrypt"
	"log"
)

func hashed(password string) (string, error) {

	hashpass, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	

	return string(hashpass), err
}

func authHash(password, hash string) bool {
	err :=  bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

func generateToken(length int) string {
	bytes := make([]byte, length)
	if _, err := rand.Read(bytes); err != nil {
		log.Fatalf("failed generate token %v", bytes)
    }	
	 return base64.URLEncoding.EncodeToString(bytes)
}
