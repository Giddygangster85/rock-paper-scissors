let hand = 0
let Received_hand = 0
function playerOneChoice () {
    if (hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
}
radio.onReceivedNumber(function (receivedNumber) {
    Received_hand = receivedNumber
    playerTwoChoice()
    findWinner()
})
function playerTwoChoice () {
    basic.showString("Player 2 Chose")
    if (Received_hand == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else if (Received_hand == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    }
}
// This Code is designed to find the winner based on the "hands" of the two players.
function findWinner () {
    if (hand == 1 && Received_hand == 1) {
        basic.showString("TIE")
    } else if (hand == 1 && Received_hand == 2) {
        basic.showString("LOSER")
    } else if (hand == 1 && Received_hand == 3) {
        basic.showString("WINNER")
    } else if (hand == 2 && Received_hand == 1) {
        basic.showString("WINNER")
    } else if (hand == 2 && Received_hand == 2) {
        basic.showString("TIE")
    } else if (hand == 2 && Received_hand == 3) {
        basic.showString("LOSER")
    } else if (hand == 3 && Received_hand == 1) {
        basic.showString("LOSER")
    } else if (hand == 3 && Received_hand == 2) {
        basic.showString("WINNER")
    } else {
        basic.showString("TIE")
    }
}
input.onGesture(Gesture.Shake, function () {
    hand = randint(1, 3)
    playerOneChoice()
    radio.sendNumber(hand)
})
