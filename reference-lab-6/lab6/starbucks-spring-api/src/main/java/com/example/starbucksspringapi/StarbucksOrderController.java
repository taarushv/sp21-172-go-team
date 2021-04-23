package com.example.starbucksspringapi;

import java.util.List;
import java.util.Random;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletRequest;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

@RestController
class StarbucksOrderController {
    private final StarbucksOrderRepository repository;

    StarbucksOrderController(StarbucksOrderRepository repository){
        this.repository = repository;
    }

    @GetMapping("/orders")
        List<StarbucksOrder> all() {
        return repository.findAll();
    }
    @DeleteMapping("/orders")
        void deleteAll(){
        repository.deleteAllInBatch();
    }
    @PostMapping("/order/register/{regID}")
    StarbucksOrder createOrder(@RequestBody Map<String, String> body, @PathVariable String  regID,  HttpServletResponse response){
        
        StarbucksOrder newOrder = new StarbucksOrder();
        newOrder.setDrink(body.get("drink"));
        newOrder.setMilk(body.get("milk"));
        newOrder.setSize(body.get("size"));
        newOrder.setTotal(5); // 5$ fixed price
        newOrder.setStatus("Ready for Payment.");
        newOrder.setRegID(regID);

        return repository.save(newOrder);
    
    }
    @GetMapping("/order/register/{regID}")
    StarbucksOrder getOrder(@PathVariable String  regID,  HttpServletResponse response){
        List<StarbucksOrder> orders = repository.findAll();
        StarbucksOrder newOrder = new StarbucksOrder();
        for (StarbucksOrder order : orders) {
            if (order.getRegID().equals(String.valueOf(regID))) {
                newOrder = order;
                return newOrder;
            }
        }
        return newOrder;

    
    }
    @DeleteMapping("/order/register/{regID}")
        String clearOrder(){
        return "{Status: Active Order Cleared!}";
    }

   
    /*
    
    

    
    @GetMapping("/cards/{num}")
        StarbucksCard getOne(@PathVariable String  num, HttpServletResponse response){
        //StarbucksCard card = repository.findByCardNumber(num);
        List<StarbucksCard> cards = repository.findAll();
        StarbucksCard newCard = new StarbucksCard();
        for (StarbucksCard card : cards) {
            if (card.getCardNumber().equals(String.valueOf(num))) {
                System.out.println("Here");
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
  
    */

}