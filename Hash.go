package main

import(
	
	"golang.org/x/crypto/bcrypt"
)

func hashed(password string) (string, error) {

	hashpass, err := bcrypt.GenerateFromPassword([]byte(password), 10)
	

	return string(hashpass), err
}

func authHash(password, hash string) bool {
	err :=  bcrypt.CompareHashAndPassword([]byte(hash), []byte(password))
	return err == nil
}

