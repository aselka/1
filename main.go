package main

import (
	"errors"
	"fmt"
)

func main() {
	var message string

	message = sayHello("Asel")
	printMessage(message)
	fmt.Println(passportControlClub(27))
}

func printMessage(message string) {
	fmt.Println(message)
}

func sayHello(name string) string {
	return fmt.Sprintf("Hello, %s! ", name)
}

func passportControlClub(age int) (string, error) {
	if age >= 18 {
		return "You are welcome!", nil
	}

	return "Go, home!", errors.New("you are so young")

}
