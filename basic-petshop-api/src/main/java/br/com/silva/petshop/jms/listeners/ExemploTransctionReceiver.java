package br.com.silva.petshop.jms.listeners;

import br.com.silva.petshop.jms.ConstantsNameQueue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.stereotype.Component;

@Component
public class ExemploTransctionReceiver {

    private static final Logger log = LoggerFactory.getLogger(ExemploTransctionReceiver.class);

    @JmsListener(destination = ConstantsNameQueue.IMPRIMIR_MENSAGEM, containerFactory = "customFactory")
    public void receiveMessageOrder(String mensagem){
        log.info("String recebida: {}", mensagem);
    }
}
