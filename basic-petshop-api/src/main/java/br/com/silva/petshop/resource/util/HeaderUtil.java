package br.com.silva.petshop.resource.util;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;

/**
 * Classe utilitária para a criação de HTTP headers.
 */
public final class HeaderUtil {

    private static final Logger LOG = LoggerFactory.getLogger(HeaderUtil.class);

    private static final String NOME_APLICACAO = "basic-petshop-api";

    private HeaderUtil() {
    }

    /**
     * Crie os alertas.
     *
     * @param mensagem   mensagem.
     * @param parametros parametros.
     * @return o {@link HttpHeaders} com os alteras.
     */
    public static HttpHeaders criarAlerta(String mensagem, String parametros) {
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-petshopApp-alert", mensagem);
        headers.add("X-petshopApp-params", parametros);
        return headers;
    }

    public static HttpHeaders criarAlertaCriacaoEntidade(String nomeEntidade, String param) {
        return criarAlerta(NOME_APLICACAO + "." + nomeEntidade + ".created", param);
    }

    public static HttpHeaders criarAlertaAtualizacaoEntidade(String nomeEntidade, String param) {
        return criarAlerta(NOME_APLICACAO + "." + nomeEntidade + ".updated", param);
    }

    public static HttpHeaders criarAlertaDelecaoEntidade(String nomeEntidade, String param) {
        return criarAlerta(NOME_APLICACAO + "." + nomeEntidade + ".deleted", param);
    }

    /**
     * Criar um alerta de falha.
     *
     * @param nomeEntidade   o nome da entidade.
     * @param chaveErro      a chave do erro.
     * @param mensagemPadrao a mensagem padrão.
     * @return o {@link HttpHeaders} com os alertas.
     */
    public static HttpHeaders createFailureAlert(String nomeEntidade, String chaveErro,
                                                 String mensagemPadrao) {
        LOG.error("O processamento da entidade falhou, {}", mensagemPadrao);
        HttpHeaders headers = new HttpHeaders();
        headers.add("X-petshopApp-error", "error." + chaveErro);
        headers.add("X-petshopApp-params", nomeEntidade);
        return headers;
    }
}

