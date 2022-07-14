package main

import (
	"errors"
	"fmt"
)

func main() {

	fmt.Println(advice("Sun"))
}

func advice(dayOfWeek string) (string, error) {
	switch dayOfWeek {
	case "Mon":
		return "Don't be afraid of being afraid", nil
	case "Tue":
		return "Be your best all time", nil
	case "Wed":
		return "Luck comes from hard work", nil
	case "Thu":
		return "Listen to learn", nil
	case "Fri":
		return "Do what is rigth, not what is easy", nil
	case "Sat":
		return "Trust your instincts", nil
	case "Sun":
		return "Belive in yourself", nil
	default:
		return "It's not day of the week", errors.New("invalid day of the week")
	}
}
