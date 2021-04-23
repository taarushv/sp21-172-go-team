package com.example.starbucksspringapi;

import java.util.List;
import java.util.Random;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@RestController
class StarbucksCardController {
    private final StarbucksCardRepository repository;

    StarbucksCardController(StarbucksCardRepository repository){
        this.repository = repository;
    }

    @PostMapping("/cards")
        StarbucksCard newCard(){
        StarbucksCard newCard = new StarbucksCard();
        Random random = new Random();
        int num = random.nextInt(90000000) + 10000000;
        int code = random.nextInt(900) + 100;

        newCard.setCardNumber(String.valueOf(num));
        newCard.setCardCode(String.valueOf(code));
        newCard.setBalance(20.00);
        newCard.setActivated(false);
        newCard.setStatus("New Card");
        return repository.save(newCard);
    }
    @GetMapping("/cards")
        List<StarbucksCard> all() {
        return repository.findAll();
    }

    @DeleteMapping("/cards")
        void deleteAll(){
        repository.deleteAllInBatch();
    }
    

    
    @GetMapping("/cards/{num}")
        StarbucksCard getOne(@PathVariable String  num, HttpServletResponse response){
        //StarbucksCard card = repository.findByCardNumber(num);
        List<StarbucksCard> cards = repository.findAll();
        StarbucksCard newCard = new StarbucksCard();
        for (StarbucksCard card : cards) {
            System.out.println(card.getCardNumber());
            System.out.println(num);
            if (card.getCardNumber().equals(String.valueOf(num))) {
                newCard = card;
                newCard.setCardNumber(String.valueOf(card.getCardNumber()));
                newCard.setCardCode(String.valueOf(card.getCardCode()));
                newCard.setBalance(card.getBalance());
                newCard.setActivated(card.isActivated());
                newCard.setStatus(card.getStatus());
                return newCard;
            }
        }
        return newCard;
    }

    @PostMapping("/card/activate/{num}/{code}")
    StarbucksCard activateCard(@PathVariable String  num,@PathVariable String  code, HttpServletResponse response){
        // StarbucksCard newCard = new StarbucksCard();
        // Random random = new Random();
        // int num = random.nextInt(90000000) + 10000000;
        // int code = random.nextInt(900) + 100;
        List<StarbucksCard> cards = repository.findAll();
        StarbucksCard temp = new StarbucksCard();
        for (StarbucksCard card : cards) {
            if (card.getCardNumber().equals(String.valueOf(num)) && card.getCardCode().equals(String.valueOf(code))) {
                card.setActivated(true);
                temp = card;
                return repository.save(card);
            }
        }
        return temp;
    }
    
    @PostMapping("/order/register/{regID}/pay/{cardnum}")
    StarbucksCard payForOrder(@PathVariable String  regID,  @PathVariable String  cardnum, HttpServletResponse response){

    List<StarbucksCard> cards = repository.findAll();
    StarbucksCard temp = new StarbucksCard();
    for (StarbucksCard card : cards) {
        if (card.getCardNumber().equals(String.valueOf(cardnum))) {
            card.setBalance(card.getBalance() - 5);
            temp = card;
            return repository.save(card);
        }
    }
    return temp;
}
    

}