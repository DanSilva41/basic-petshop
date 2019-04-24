package br.com.silva.petshop.repository;

import br.com.silva.petshop.domain.Especie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

/**
 * Spring Data JPA repository para a entidade Especie.
 *
 * @author Danilo Silva
 */
public interface EspecieRepository extends JpaRepository<Especie, Long>, JpaSpecificationExecutor<Especie> {
}
